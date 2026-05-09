import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const source = process.argv[2] || join(root, "private", "tripit.ics");
const output = join(root, "data", "itinerary.json");
const fromArg = process.argv.find((arg) => arg.startsWith("--from="))?.split("=")[1];
const toArg = process.argv.find((arg) => arg.startsWith("--to="))?.split("=")[1];

function unfoldIcs(text) {
  return text.replace(/\r?\n[ \t]/g, "");
}

function parseDate(value) {
  if (!value) return null;
  const clean = value.replace(/^.*:/, "");

  if (/^\d{8}$/.test(clean)) {
    return `${clean.slice(0, 4)}-${clean.slice(4, 6)}-${clean.slice(6, 8)}`;
  }

  const match = clean.match(/^(\d{4})(\d{2})(\d{2})T(\d{2})(\d{2})(\d{2})Z?$/);
  if (!match) return clean;

  const [, year, month, day, hour, minute] = match;
  return `${year}-${month}-${day}T${hour}:${minute}:00`;
}

function prettyTime(dateValue) {
  if (!dateValue || !dateValue.includes("T")) return "All day";
  const [, time] = dateValue.split("T");
  const [hourText, minute] = time.split(":");
  const hour24 = Number(hourText);
  const suffix = hour24 >= 12 ? "PM" : "AM";
  const hour12 = hour24 % 12 || 12;
  return `${hour12}:${minute} ${suffix}`;
}

function cleanText(value = "") {
  return value
    .replace(/\\n/g, "\n")
    .replace(/\\,/g, ",")
    .replace(/\\;/g, ";")
    .replace(/\\\\/g, "\\")
    .trim();
}

function property(line) {
  const index = line.indexOf(":");
  if (index === -1) return null;
  const key = line.slice(0, index).split(";")[0].toUpperCase();
  const value = line.slice(index + 1);
  return [key, value];
}

function parseEvents(text) {
  const unfolded = unfoldIcs(text);
  return [...unfolded.matchAll(/BEGIN:VEVENT\r?\n([\s\S]*?)\r?\nEND:VEVENT/g)].map((match) => {
    const event = {};
    for (const line of match[1].split(/\r?\n/)) {
      const parsed = property(line);
      if (!parsed) continue;
      const [key, value] = parsed;
      if (event[key]) {
        event[key] = `${event[key]}\n${value}`;
      } else {
        event[key] = value;
      }
    }
    return {
      id: cleanText(event.UID || event.DTSTAMP || event.SUMMARY || crypto.randomUUID()),
      title: cleanText(event.SUMMARY || "Untitled itinerary item"),
      location: cleanText(event.LOCATION || ""),
      description: cleanText(event.DESCRIPTION || ""),
      start: parseDate(event.DTSTART || ""),
      end: parseDate(event.DTEND || ""),
      url: cleanText(event.URL || ""),
    };
  });
}

function dateKey(event) {
  return (event.start || "").slice(0, 10) || "undated";
}

function cityFromEvents(events) {
  const locations = events.map((event) => event.location).filter(Boolean);
  if (!locations.length) return "Italy";
  const pieces = locations[0].split(",").map((piece) => piece.trim()).filter(Boolean);
  return cleanPlaceLabel(pieces.at(-2) || pieces.at(-1) || "Italy");
}

function titleFromEvents(events) {
  const lodging = events.find((event) => /hotel|villa|stay|lodging|airbnb|check.?in/i.test(event.title));
  const flight = events.find((event) => /flight|depart|arrive/i.test(event.title));
  const anchor = lodging || flight || events[0];
  return anchor?.title || "Italy Itinerary";
}

function routeFromEvents(events) {
  const flights = events.filter((event) => /\b[A-Z]{3}\s+to\s+[A-Z]{3}\b/.test(event.title));
  if (flights.length) {
    const firstFlight = flights[0].title.match(/\b([A-Z]{3})\s+to\s+([A-Z]{3})\b/);
    const lastFlight = flights.at(-1).title.match(/\b([A-Z]{3})\s+to\s+([A-Z]{3})\b/);
    return {
      from: firstFlight?.[1] || cleanPlaceLabel(flights[0].location),
      to: lastFlight?.[2] || firstFlight?.[2] || cleanPlaceLabel(flights.at(-1).location),
      mode: "Flight",
      distance: "Open map",
      time: "Live",
    };
  }

  const routeCandidates = events.filter((event) => event.location && event.time !== "All day");
  const candidates = routeCandidates.length ? routeCandidates : events.filter((event) => event.location);
  const first = candidates[0];
  const last = candidates.at(-1);

  return {
    from: cleanPlaceLabel(first?.location || first?.title || "Start"),
    to: cleanPlaceLabel(last?.location || last?.title || first?.location || "Destination"),
    mode: "Directions",
    distance: "Open map",
    time: "Live",
  };
}

function cleanPlaceLabel(place = "") {
  return place
    .replace(/\b\d{5}\s+/g, "")
    .replace(/\s+(FI|SI|LI|SO|ZH)\b/g, "")
    .replace(/\s+United States of America\b/i, "")
    .trim();
}

function buildItinerary(events) {
  const groups = new Map();
  for (const event of events) {
    const key = dateKey(event);
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(event);
  }

  const days = [...groups.entries()]
    .filter(([key]) => key !== "undated")
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([date, dayEvents], index) => {
      const sortedEvents = dayEvents.sort((a, b) => (a.start || "").localeCompare(b.start || ""));

      return {
        day: index + 1,
        date,
        city: cityFromEvents(sortedEvents),
        title: titleFromEvents(sortedEvents),
        summary: `${sortedEvents.length} TripIt item${sortedEvents.length === 1 ? "" : "s"} scheduled for this day.`,
        route: routeFromEvents(sortedEvents),
        events: sortedEvents.map((event) => ({
          time: prettyTime(event.start),
          title: event.title,
          location: event.location,
          description: "",
          start: event.start,
          end: event.end,
          url: event.url,
        })),
      };
    });

  return {
    importedAt: new Date().toISOString(),
    tripName: "Italy Trip",
    days,
  };
}

async function readSource(value) {
  if (/^https?:\/\//i.test(value)) {
    const response = await fetch(value, {
      headers: { "user-agent": "Codex travel dashboard importer" },
    });
    if (!response.ok) throw new Error(`TripIt feed returned HTTP ${response.status}`);
    return response.text();
  }
  return readFile(value, "utf8");
}

const ics = await readSource(source);
const events = parseEvents(ics).filter((event) => {
  const day = dateKey(event);
  if (fromArg && day < fromArg) return false;
  if (toArg && day > toArg) return false;
  return true;
});
const itinerary = buildItinerary(events);

await mkdir(dirname(output), { recursive: true });
await writeFile(output, `${JSON.stringify(itinerary, null, 2)}\n`);

console.log(`Imported ${events.length} TripIt events into ${itinerary.days.length} travel days.`);
