const PASSKEY = "5646";

let trip = {
  tripName: "Tuscany & Val d'Orcia",
  dateRange: "May 19 - June 7, 2026",
  tagline: "Twenty Days, Four Stays, Nine Tastings",
  countries: ["United States", "Germany", "Italy", "Switzerland"],
  stats: [],
  stays: [],
  days: [],
};

const fallbackImages = [
  "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1400&q=82",
  "https://images.unsplash.com/photo-1595867818082-083862f3d630?auto=format&fit=crop&w=1400&q=82",
  "https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?auto=format&fit=crop&w=1400&q=82",
  "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=1400&q=82",
  "https://images.unsplash.com/photo-1541370976299-4d24ebbc9077?auto=format&fit=crop&w=1400&q=82",
];

const placeDirectory = [
  ["denver international airport", "Denver International Airport", "Airport", "https://www.flydenver.com/"],
  ["den", "Denver International Airport", "Airport", "https://www.flydenver.com/"],
  ["munich airport", "Munich Airport", "Airport", "https://www.munich-airport.com/"],
  ["muc", "Munich Airport", "Airport", "https://www.munich-airport.com/"],
  ["florence airport", "Florence Airport", "Airport", "https://www.aeroporto.firenze.it/en/"],
  ["aeroporto di firenze", "Florence Airport", "Airport", "https://www.aeroporto.firenze.it/en/"],
  ["flr", "Florence Airport", "Airport", "https://www.aeroporto.firenze.it/en/"],
  ["zurich airport", "Zurich Airport", "Airport", "https://www.flughafen-zuerich.ch/en"],
  ["zrh", "Zurich Airport", "Airport", "https://www.flughafen-zuerich.ch/en"],
  ["andaz munich", "Andaz Munich Schwabinger Tor", "Hotel", "https://www.hyatt.com/andaz/mucaz-andaz-munich-schwabinger-tor"],
  ["avis", "AVIS Florence Airport", "Rental car", "https://www.avis.com/"],
  ["il palagio", "Azienda Agricola Il Palagio", "Villa", "https://www.google.com/search?q=Azienda+Agricola+Il+Palagio+Panzano+in+Chianti"],
  ["villa montelandi", "Villa MonteLandi", "Villa", "https://www.google.com/search?q=Villa+MonteLandi+Montalcino"],
  ["oro nero", "Oro Nero Florence", "Florence stay", "https://www.google.com/search?q=Oro+Nero+Florence+Via+Palazzuolo"],
  ["oltre il giardino", "Ristorante Oltre Il Giardino", "Restaurant", "https://www.oltreilgiardino.it/"],
  ["pietracupa", "La Locanda di Pietracupa", "Restaurant", "https://www.locandapietracupa.com/"],
  ["lamole di lamole", "Ristorante Lamole di Lamole", "Restaurant", "https://www.lamole.com/"],
  ["albergaccio", "Ristorante Albergaccio di Castellina", "Restaurant", "https://www.albergacciocast.com/"],
  ["san guido", "Osteria Enoteca San Guido", "Restaurant", "https://www.osteriasanguido.it/"],
  ["boccon divino", "Boccon Divino", "Restaurant", "https://www.boccondivinomontalcino.it/"],
  ["la canonica", "Osteria La Canonica", "Restaurant", "https://www.castigliondelbosco.com/dining/osteria-la-canonica/"],
  ["sala dei grappoli", "La Sala dei Grappoli", "Restaurant", "https://www.castellobanfiilborgo.com/en/dining/la-sala-dei-grappoli/"],
  ["locanda demetra", "Locanda Demetra & Montalcino Cooking School", "Cooking school", "https://www.montalcinocookingschool.com/"],
  ["leggenda dei frati", "La Leggenda dei Frati", "Restaurant", "https://www.laleggendadeifrati.it/"],
  ["castello di meleto", "Castello di Meleto", "Wedding venue", "https://www.castellomeleto.it/"],
  ["relais il falconiere", "Relais il Falconiere", "Wedding venue", "https://www.ilfalconiere.it/"],
  ["borgo sant'ambrogio", "Borgo Sant'Ambrogio", "Wedding venue", "https://www.borgosantambrogio.com/"],
  ["borgo tre rose", "Borgo Tre Rose", "Wedding venue", "https://www.borgotrerose.it/"],
  ["castello di ama", "Castello di Ama", "Winery", "https://www.castellodiama.com/"],
  ["la massa", "La Massa", "Winery", "https://www.fattorialamassa.com/"],
  ["fontodi", "Fontodi", "Winery", "https://www.fontodi.com/"],
  ["ornellaia", "Ornellaia", "Winery", "https://www.ornellaia.com/"],
  ["casanova di neri", "Casanova di Neri", "Winery", "https://www.casanovadineri.com/"],
  ["castiglione del bosco", "Castiglione del Bosco", "Wine estate", "https://www.castigliondelbosco.com/"],
  ["castiglion del bosco", "Castiglione del Bosco", "Wine estate", "https://www.castigliondelbosco.com/"],
  ["le ragnaie", "Le Ragnaie", "Winery", "https://www.leragnaie.com/"],
  ["castello banfi", "Castello Banfi", "Winery", "https://www.castellobanfi.com/"],
  ["poliziano", "Poliziano", "Winery", "https://www.carlettipoliziano.com/"],
  ["poggio di sotto", "Poggio di Sotto", "Winery", "https://www.poggiodisotto.com/"],
  ["munich", "Munich", "City guide", "https://www.muenchen.de/en"],
  ["pienza", "Pienza", "Town guide", "https://www.visittuscany.com/en/towns-and-villages/pienza/"],
  ["bagno vignoni", "Bagno Vignoni", "Town guide", "https://www.visittuscany.com/en/attractions/bagno-vignoni/"],
  ["san quirico", "San Quirico d'Orcia", "Town guide", "https://www.visittuscany.com/en/towns-and-villages/san-quirico-dorcia/"],
  ["castiglione d'orcia", "Castiglione d'Orcia", "Town guide", "https://www.visittuscany.com/en/towns-and-villages/castiglione-dorcia/"],
];

const placeDetails = {
  "Denver International Airport": { coords: [39.8561, -104.6737], address: "8500 Pena Blvd, Denver, CO", note: "Departure airport for the overnight Lufthansa flight to Munich." },
  "Munich Airport": { coords: [48.3538, 11.7861], address: "Munich Airport, Terminal 2", note: "Arrival airport on May 20 and departure airport for Florence on May 22." },
  "Florence Airport": { coords: [43.8099, 11.2051], address: "Aeroporto di Firenze Peretola", note: "Arrival airport, AVIS pickup, and final rental car drop-off." },
  "Zurich Airport": { coords: [47.4582, 8.5555], address: "Zurich Airport", note: "Connection airport on the return to Denver." },
  "Andaz Munich Schwabinger Tor": { coords: [48.1766, 11.5918], address: "Leopoldstrasse 170, Munich", note: "Munich base before flying into Florence.", private: "+49 89 9042 191234" },
  "AVIS Florence Airport": { coords: [43.8099, 11.2051], address: "Florence Airport rental car center", note: "Pickup May 22, drop-off June 6.", private: "+39 055 315588" },
  "Azienda Agricola Il Palagio": { coords: [43.5455, 11.3157], address: "Via Case Sparse 38, Panzano in Chianti", note: "Chianti villa base from May 22 through May 30.", private: "+39 338 399 7004" },
  "Villa MonteLandi": { coords: [43.0679, 11.4961], address: "Via Monte Landi 89, Montalcino", note: "Montalcino villa base from May 30 through June 6.", private: "+421 917 825580" },
  "Oro Nero Florence": { coords: [43.7733, 11.2441], address: "122 Via Palazzuolo, Santa Maria Novella, Florence", note: "Final Florence overnight before the return flights.", private: "+39 333 496 0221" },
  "Ristorante Oltre Il Giardino": { coords: [43.5451, 11.3146], address: "Piazza Gastone Bucciarelli 42, Panzano in Chianti", note: "Welcome dinner in Panzano old town." },
  "Castello di Meleto": { coords: [43.4251, 11.4338], address: "Localita Castello di Meleto, Gaiole in Chianti", note: "Wedding venue visit and castle estate." },
  "Relais il Falconiere": { coords: [43.2896, 11.9857], address: "Localita S. Martino Bocena 370, Cortona", note: "Relais & Chateaux wedding venue near Cortona." },
  "Borgo Sant'Ambrogio": { coords: [43.0989, 11.7422], address: "Loc. Sant'Ambrogio 29, Trequanda", note: "Wedding venue between Pienza and Montepulciano." },
  "Borgo Tre Rose": { coords: [43.1067, 11.8154], address: "Via dei Palazzi 5, Montepulciano", note: "Historic hamlet wedding venue in Montepulciano countryside." },
  "La Locanda di Pietracupa": { coords: [43.5417, 11.2364], address: "Via Madonna di Pietracupa 31, San Donato in Poggio", note: "Dinner after the southern Tuscany venue loop.", private: "+39 055 807 2400" },
  "Castello di Ama": { coords: [43.4167, 11.3743], address: "Localita Ama in Chianti, Gaiole in Chianti", note: "Lunch and wine tasting." },
  "Ristorante Lamole di Lamole": { coords: [43.5528, 11.3549], address: "Via Lamole, Greve in Chianti", note: "Dinner above Greve after Castello di Ama.", private: "+39 342 091 2853" },
  "La Massa": { coords: [43.5446, 11.3165], address: "Via Case Sparse 9, Panzano in Chianti", note: "Tenuta La Massa tasting in Panzano." },
  "Fontodi": { coords: [43.5295, 11.3133], address: "Localita San Leolino 89, Greve in Chianti", note: "Organic benchmark estate in the Conca d'Oro." },
  "Ristorante Albergaccio di Castellina": { coords: [43.4727, 11.2864], address: "Via Fiorentina 63, Castellina in Chianti", note: "Dinner in Castellina after La Massa and Fontodi.", private: "+39 0577 741042" },
  Ornellaia: { coords: [43.2247, 10.5989], address: "Tenuta dell'Ornellaia, Bolgheri", note: "Bolgheri tasting confirmed by Viola Valdastri." },
  "Osteria Enoteca San Guido": { coords: [43.1998, 10.5601], address: "Localita Capanne 27, Bolgheri", note: "Lunch on the Bolgheri road after Ornellaia.", private: "+39 0565 749693" },
  "Boccon Divino": { coords: [43.0626, 11.4895], address: "Via Traversa dei Monti 201, Montalcino", note: "Welcome dinner in Montalcino." },
  "Casanova di Neri": { coords: [43.0352, 11.4828], address: "Localita Poderuccio, Montalcino", note: "Wine tasting and lunch." },
  "Castiglione del Bosco": { coords: [43.0339, 11.4035], address: "Castiglion del Bosco, Montalcino", note: "Bike destination and estate lunch at La Canonica." },
  "Osteria La Canonica": { coords: [43.0339, 11.4035], address: "Borgo Castiglion del Bosco", note: "Lunch inside the borgo after the bike ride.", private: "+39 0577 191 3001" },
  "Le Ragnaie": { coords: [43.0395, 11.4891], address: "Loc. Le Ragnaie 264, Montalcino", note: "High-altitude Brunello tour and tasting.", private: "+39 0577 848639" },
  "La Sala dei Grappoli": { coords: [42.9818, 11.4321], address: "Castello Banfi, Loc. Poggio alle Mura, Montalcino", note: "Dinner at Castello Banfi.", private: "+39 0577 877 505" },
  "Castello Banfi": { coords: [42.9818, 11.4321], address: "Loc. Poggio alle Mura, Montalcino", note: "Banfi estate and dinner location." },
  "Castiglione d'Orcia": { coords: [43.0046, 11.6162], address: "Castiglione d'Orcia", note: "First scenic stop on the Val d'Orcia drive." },
  Pienza: { coords: [43.0776, 11.6795], address: "Pienza", note: "Piazza Pio II stop on the Val d'Orcia route." },
  "San Quirico d'Orcia": { coords: [43.0611, 11.6046], address: "San Quirico d'Orcia", note: "Historic village stop." },
  "Bagno Vignoni": { coords: [43.0287, 11.6186], address: "Bagno Vignoni", note: "Thermal village stop." },
  Poliziano: { coords: [43.0923, 11.7942], address: "Via Fontago 1, Montepulciano", note: "Vino Nobile di Montepulciano tasting and tour.", private: "+39 0578 738171" },
  "Poggio di Sotto": { coords: [42.9927, 11.5487], address: "Loc. Castelnuovo dell'Abate 1, Montalcino", note: "Southern Brunello tour and tasting.", private: "+39 0577 835502" },
  "Locanda Demetra & Montalcino Cooking School": { coords: [43.0558, 11.4952], address: "Podere La Buca 221, Montalcino", note: "Cooking school dinner.", private: "+39 351 986 0527" },
  "La Leggenda dei Frati": { coords: [43.7642, 11.2547], address: "Costa S. Giorgio 6/a, Florence", note: "Farewell dinner in Florence.", private: "+39 055 068 0545" },
  Munich: { coords: [48.1372, 11.5755], address: "Munich, Germany", note: "Open day city base." },
  "Panzano in Chianti": { coords: [43.5459, 11.3147], address: "Panzano in Chianti", note: "Chianti base village." },
  Montalcino: { coords: [43.0606, 11.4891], address: "Montalcino", note: "Brunello hill town and second villa base." },
};

const consultantNotes = {
  1: "This now begins where the trip actually begins: Denver to Munich. For departure days, I keep the view simple and practical so nobody has to hunt for flight timing.",
  4: "This is the first true Tuscany day. It combines flight, rental car, villa check-in, and dinner, so the route summary and map link matter more here than decorative detail.",
  11: "This is the longest driving day in the document. I would keep gas, snacks, and a flexible return plan in mind before leaving for Bolgheri.",
  17: "This scenic loop has several small stops. On the road, the best mobile layout is a sequence of tap-ready map searches rather than one dense paragraph.",
  20: "Departure day should stay ruthlessly clear: checkout, airport, flight one, flight two. That is exactly the kind of day where the dashboard earns its keep.",
};

const tripSegments = [
  { slug: "travel", label: "Travel Days", days: [1, 4, 19, 20] },
  { slug: "munich", label: "Munich", days: [2, 3] },
  { slug: "chianti", label: "Chianti Base", days: [5, 8, 9, 10, 11] },
  { slug: "venues", label: "Wedding Venues", days: [6, 7] },
  { slug: "montalcino", label: "Montalcino", days: [12, 13, 14, 15, 16, 18] },
  { slug: "valdorcia", label: "Val d'Orcia", days: [17] },
  { slug: "florence", label: "Florence", days: [19] },
];

function text(value = "") {
  return String(value)
    .replaceAll("Â·", "-")
    .replaceAll("Ã ", "a")
    .replaceAll("Ã©", "e")
    .replaceAll("Chateaux", "Chateaux")
    .replace(/\s+/g, " ")
    .trim();
}

function normalize(value = "") {
  return text(value)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function escapeHtml(value = "") {
  return text(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function segmentForDay(day) {
  if (Number(day.day) === 19) return "florence";
  return tripSegments.find((segment) => segment.days.includes(Number(day.day)))?.slug || "chianti";
}

function segmentLabel(slug) {
  return tripSegments.find((segment) => segment.slug === slug)?.label || "Trip Day";
}

function placeMatch(event) {
  const haystack = normalize(`${event.title || ""} ${event.location || ""} ${event.detail || ""}`);
  const match = placeDirectory.find(([key]) => haystack.includes(normalize(key)));
  if (!match) return null;
  return {
    name: match[1],
    kind: match[2],
    website: match[3],
    ...(placeDetails[match[1]] || {}),
  };
}

function resolvePlace(label = "", title = "") {
  const direct = placeMatch({ title, location: label, detail: "" });
  if (direct?.coords) return direct;
  const cleaned = text(label || title);
  const detail = placeDetails[cleaned];
  if (!detail) return null;
  return { name: cleaned, kind: "Place", website: googleMapSearch(cleaned, title), ...detail };
}

function googleMapSearch(location, title) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(text(location || title))}`;
}

function directionsUrl(route = {}) {
  const from = encodeURIComponent(text(route.from || ""));
  const to = encodeURIComponent(text(route.to || ""));
  const mode = travelMode(route.mode || "");
  const modeParam = mode ? `&travelmode=${mode}` : "";
  return `https://www.google.com/maps/dir/?api=1&origin=${from}&destination=${to}${modeParam}`;
}

function travelMode(mode) {
  const lower = normalize(mode);
  if (lower.includes("walk")) return "walking";
  if (lower.includes("bike")) return "bicycling";
  if (lower.includes("transit") || lower.includes("train")) return "transit";
  if (lower.includes("flight")) return "";
  return "driving";
}

function dayLinks(day) {
  const unique = new Map();

  for (const event of day.events || []) {
    const match = placeMatch(event);
    if (match && !unique.has(match.name)) {
      unique.set(match.name, {
        ...match,
        map: googleMapSearch(event.location, event.title),
      });
    }
  }

  if (!unique.size && day.city) {
    const place = resolvePlace(day.city, day.title);
    unique.set(day.city, {
      name: place?.name || day.city,
      kind: place?.kind || "Map",
      website: place?.website || googleMapSearch(day.city, day.title),
      map: googleMapSearch(place?.address || day.city, day.title),
      ...(place || {}),
    });
  }

  return [...unique.values()];
}

async function loadTrip() {
  let data = window.ITINERARY_DATA;
  if (!data) {
    const response = await fetch("./data/itinerary.json", { cache: "no-store" });
    data = await response.json();
  }
  trip = {
    ...trip,
    ...data,
    days: (data.days || []).map((day, index) => ({
      ...day,
      date: text(day.date),
      title: text(day.title),
      subtitle: text(day.subtitle),
      summary: text(day.summary),
      city: text(day.city),
      country: text(day.country),
      image: day.image || fallbackImages[index % fallbackImages.length],
      segment: segmentForDay(day),
      events: (day.events || []).map((event) => ({
        ...event,
        time: text(event.time),
        type: text(event.type),
        title: text(event.title),
        detail: text(event.detail),
        location: text(event.location),
        private: text(event.private),
      })),
    })),
  };
}

function setupPasskey() {
  const form = document.querySelector("#passkeyForm");
  const input = document.querySelector("#passkeyInput");
  const status = document.querySelector("#passkeyStatus");
  if (!form || !input || !status) return;

  function update() {
    const unlocked = sessionStorage.getItem("italy-private-unlocked") === "true";
    document.body.classList.toggle("private-unlocked", unlocked);
    status.textContent = unlocked
      ? "Private contact details are unlocked for this browser session."
      : "Private contact details are hidden.";
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (input.value === PASSKEY) {
      sessionStorage.setItem("italy-private-unlocked", "true");
      input.value = "";
      update();
      return;
    }
    sessionStorage.removeItem("italy-private-unlocked");
    status.textContent = "Passkey not recognized.";
  });

  update();
}

function renderHero() {
  document.querySelector(".hero-content .eyebrow").textContent = `${trip.dateRange} - ${trip.countries.join(", ")}`;
  document.querySelector(".hero-content h1").textContent = trip.tripName;
  document.querySelector(".hero-content p").textContent = trip.tagline;
  document.querySelector(".brand small").textContent = trip.dateRange;
}

function renderDayNav() {
  const nav = document.querySelector("#dayNav");
  nav.innerHTML = trip.days
    .map(
      (day) => `
        <a class="day-button segment-${day.segment}" href="#day-${day.day}" data-day-link="${day.day}">
          <span class="day-number">${day.day}</span>
          <span>
            <strong>Day ${day.day} - ${escapeHtml(day.date)}</strong>
            <span>${escapeHtml(day.city)}</span>
          </span>
        </a>
      `,
    )
    .join("");
}

function renderLegend() {
  const legend = document.querySelector("#legendBand");
  const activeSegments = tripSegments.filter((segment) =>
    trip.days.some((day) => day.segment === segment.slug),
  );

  legend.innerHTML = `
    <div class="section-heading">
      <span>Color Key</span>
      <strong>Matched to the itinerary sections</strong>
    </div>
    <div class="legend-grid">
      ${activeSegments
        .map(
          (segment) => `
            <div class="legend-chip segment-${segment.slug}">
              <span></span>
              <strong>${escapeHtml(segment.label)}</strong>
            </div>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderOverview() {
  const overview = document.querySelector("#overviewBand");
  const stats = trip.stats?.length
    ? trip.stats
    : [
        { value: trip.days.length, label: "travel days" },
        { value: trip.stays.length, label: "primary stays" },
        { value: "4", label: "countries touched" },
        { value: "Live", label: "Google Maps links" },
      ];

  overview.innerHTML = stats
    .map(
      (stat) => `
        <article class="metric-card">
          <strong>${escapeHtml(stat.value)}</strong>
          <span>${escapeHtml(stat.label)}</span>
        </article>
      `,
    )
    .join("");
}

function renderStays() {
  const stays = document.querySelector("#staysBand");
  stays.innerHTML = `
    <div class="section-heading">
      <span>Primary Stays</span>
      <strong>Munich, Chianti, Montalcino, Florence</strong>
    </div>
    <div class="stay-grid">
      ${(trip.stays || [])
        .map(
          (stay) => `
            <article class="stay-card">
              <span>${escapeHtml(stay.dates)}</span>
              <h2>${escapeHtml(stay.name)}</h2>
              <p>${escapeHtml(stay.city)}</p>
              <a href="${googleMapSearch(stay.address, stay.name)}">Open map</a>
              ${stay.private ? `<small data-private>${escapeHtml(stay.private)}</small>` : ""}
            </article>
          `,
        )
        .join("")}
    </div>
  `;
}

function shortPlace(place = "") {
  return text(place).split(",")[0].replace("Aeroporto di Firenze Peretola", "Florence Airport");
}

function pointsForDay(day) {
  const points = [];
  const add = (place) => {
    if (!place?.coords) return;
    const key = place.coords.join(",");
    if (points.some((point) => point.key === key && point.name === place.name)) return;
    points.push({
      key,
      name: place.name,
      kind: place.kind || "Stop",
      coords: place.coords,
      address: place.address,
      website: place.website,
    });
  };

  add(resolvePlace(day.route?.from, day.title));
  for (const event of day.events || []) {
    add(resolvePlace(event.location, event.title));
    add(placeMatch(event));
  }
  add(resolvePlace(day.route?.to, day.title));

  return points;
}

function geoProject(point, bounds) {
  const [lat, lon] = point.coords;
  const width = 420;
  const height = 300;
  const pad = 38;
  const x = pad + ((lon - bounds.minLon) / (bounds.maxLon - bounds.minLon || 1)) * (width - pad * 2);
  const y = height - pad - ((lat - bounds.minLat) / (bounds.maxLat - bounds.minLat || 1)) * (height - pad * 2);
  return [Number.isFinite(x) ? x : width / 2, Number.isFinite(y) ? y : height / 2];
}

function routeSvg(day) {
  const points = pointsForDay(day);
  if (points.length < 2) {
    const from = escapeHtml(shortPlace(day.route?.from || day.city));
    const to = escapeHtml(shortPlace(day.route?.to || day.city));
    return `
      <svg class="route-map" viewBox="0 0 420 300" role="img" aria-label="Route from ${from} to ${to}">
        <path class="map-land" d="M31 233 C85 196, 119 224, 164 182 C216 133, 251 158, 299 91 C333 42, 372 66, 394 33 L397 266 L31 266 Z" />
        <path class="route-line" d="M70 222 C116 82, 242 112, 348 78" />
        <circle class="route-dot" cx="70" cy="222" r="12" />
        <circle class="route-dot" cx="348" cy="78" r="12" />
        <text class="route-label" x="36" y="258">${from}</text>
        <text class="route-label" x="254" y="46">${to}</text>
      </svg>
    `;
  }

  const lats = points.map((point) => point.coords[0]);
  const lons = points.map((point) => point.coords[1]);
  const bounds = {
    minLat: Math.min(...lats) - 0.08,
    maxLat: Math.max(...lats) + 0.08,
    minLon: Math.min(...lons) - 0.08,
    maxLon: Math.max(...lons) + 0.08,
  };
  const projected = points.map((point) => ({ ...point, xy: geoProject(point, bounds) }));
  const path = projected.map((point) => point.xy.join(",")).join(" ");

  return `
    <svg class="route-map route-map-fallback" viewBox="0 0 420 300" role="img" aria-label="Geographic route map for ${escapeHtml(day.title)}">
      <path class="map-land" d="M24 246 C77 213, 123 236, 166 194 C214 146, 253 164, 304 91 C333 51, 371 67, 397 30 L397 270 L24 270 Z" />
      <path class="map-road" d="M32 214 C91 183, 136 192, 185 151 S282 102, 379 72" />
      <path class="map-road secondary" d="M79 55 C143 96, 208 104, 296 183" />
      <polyline class="route-line" points="${path}" />
      ${projected
        .map((point, index) => {
          const [x, y] = point.xy;
          return `
            <g>
              <circle class="route-dot" cx="${x}" cy="${y}" r="${index === 0 || index === projected.length - 1 ? 10 : 7}" />
              <text class="route-label" x="${Math.min(x + 10, 315)}" y="${Math.max(y - 8, 18)}">${escapeHtml(shortPlace(point.name))}</text>
            </g>
          `;
        })
        .join("")}
    </svg>
  `;
}

function renderLeafletMap(day) {
  const container = document.querySelector("#dayMap");
  const points = pointsForDay(day);
  if (!container || points.length < 1 || !window.L) return;
  if (window.activeDayMap) {
    window.activeDayMap.remove();
    window.activeDayMap = null;
  }

  container.innerHTML = "";
  const map = window.L.map(container, {
    scrollWheelZoom: false,
    tap: true,
  });
  window.activeDayMap = map;

  window.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution: "&copy; OpenStreetMap",
  }).addTo(map);

  const latLngs = points.map((point) => point.coords);
  points.forEach((point, index) => {
    window.L.marker(point.coords)
      .addTo(map)
      .bindPopup(`<strong>${escapeHtml(point.name)}</strong><br>${escapeHtml(point.address || point.kind)}${index === 0 ? "<br>Start" : ""}`);
  });

  if (latLngs.length > 1) {
    window.L.polyline(latLngs, {
      color: getComputedStyle(document.querySelector(".route-card") || document.documentElement).getPropertyValue("--segment").trim() || "#0b7b8a",
      weight: 4,
      opacity: 0.9,
    }).addTo(map);
    map.fitBounds(latLngs, { padding: [28, 28] });
  } else {
    map.setView(latLngs[0], 12);
  }
}

function consultantNote(day) {
  if (consultantNotes[day.day]) return consultantNotes[day.day];
  if ((day.events || []).some((event) => normalize(event.type).includes("wine"))) {
    return "For tasting days, the dashboard should remain tap-friendly: tasting time, estate website, map link, and dinner plan visible without scrolling too far.";
  }
  if ((day.events || []).some((event) => normalize(event.type).includes("open"))) {
    return "Open days are useful on a three-week trip. I would keep this page flexible and add optional ideas only when you want them.";
  }
  return "This day is structured from the Word itinerary, with direct place links where the document included or clearly identified them.";
}

function renderDay(day) {
  const content = document.querySelector("#contentGrid");
  const route = day.route || {};
  const points = pointsForDay(day);
  const links = dayLinks(day);

  document.querySelectorAll("[data-day-link]").forEach((link) => {
    link.classList.toggle("active", Number(link.dataset.dayLink) === Number(day.day));
  });

  content.innerHTML = `
    <article class="day-summary segment-${day.segment}" id="day-${day.day}" style="--day-image: url('${day.image}')">
      <div class="day-topper">
        <div class="day-meta">
          <span class="pill">Day ${day.day}</span>
          <span class="pill">${escapeHtml(day.date)}</span>
          <span class="pill">${escapeHtml(day.country)}</span>
          <span class="pill segment-pill">${escapeHtml(segmentLabel(day.segment))}</span>
        </div>
        <h2>${escapeHtml(day.title)}</h2>
        <p>${escapeHtml(day.subtitle)}</p>
      </div>
      <div class="day-body">
        <p>${escapeHtml(day.summary)}</p>
        <div class="timeline" aria-label="Daily schedule">
          ${(day.events || [])
            .map((event) => {
              const match = placeMatch(event);
              return `
                <div class="timeline-item">
                  <div class="time">
                    ${escapeHtml(event.time)}
                    <span class="type-chip">${escapeHtml(event.type)}</span>
                  </div>
                  <div>
                    <strong>${escapeHtml(event.title)}</strong>
                    <span>${escapeHtml(event.detail || event.location || "")}</span>
                    ${event.location ? `<span class="event-location">${escapeHtml(event.location)}</span>` : ""}
                    <div class="event-actions">
                      <a href="${googleMapSearch(event.location, event.title)}">Map</a>
                      ${match ? `<a href="${match.website}">Website</a>` : ""}
                    </div>
                    ${event.private ? `<span class="private-line" data-private>${escapeHtml(event.private)}</span>` : ""}
                  </div>
                </div>
              `;
            })
            .join("")}
        </div>
      </div>
    </article>

    <aside class="side-stack">
      <article class="route-card segment-${day.segment}">
        <h3>Route</h3>
        <div class="map-canvas" id="dayMap">${routeSvg(day)}</div>
        <div class="route-stats">
          <div><strong>${escapeHtml(route.mode || "Route")}</strong><span>mode</span></div>
          <div><strong>${escapeHtml(route.distance || "Open map")}</strong><span>distance</span></div>
          <div><strong>${escapeHtml(route.time || "Live")}</strong><span>est. time</span></div>
        </div>
        <div class="route-stop-list" aria-label="Mapped route stops">
          ${points
            .map(
              (point, index) => `
                <a href="${googleMapSearch(point.address || point.name, point.name)}">
                  <span>${index + 1}</span>
                  <strong>${escapeHtml(point.name)}</strong>
                  <small>${escapeHtml(point.address || point.kind)}</small>
                </a>
              `,
            )
            .join("")}
        </div>
        <a class="map-link" href="${directionsUrl(route)}">Open Google Maps Directions</a>
      </article>

      <article class="activity-card segment-${day.segment}">
        <h3>Places and Links</h3>
        <div class="activity-list">
          ${links
            .map(
              (item) => `
                <div class="activity">
                  <strong>${escapeHtml(item.name)}</strong>
                  <span>${escapeHtml(item.kind)}</span>
                  ${item.address ? `<p>${escapeHtml(item.address)}</p>` : ""}
                  ${item.note ? `<p>${escapeHtml(item.note)}</p>` : ""}
                  ${item.private ? `<small data-private>${escapeHtml(item.private)}</small>` : ""}
                  <div class="event-actions">
                    <a href="${item.website}">Website</a>
                    <a href="${item.map || googleMapSearch(item.address, item.name)}">Map</a>
                    <a href="${directionsUrl({ from: day.route?.from || day.city, to: item.address || item.name, mode: day.route?.mode || "Drive" })}">Directions</a>
                  </div>
                </div>
              `,
            )
            .join("")}
        </div>
      </article>

      <article class="consultant-note">
        <h3>Consultant Note</h3>
        <p>${escapeHtml(consultantNote(day))}</p>
      </article>
    </aside>
  `;

  renderLeafletMap(day);
}

function referenceCard(item, category) {
  return `
    <article class="reference-card reference-${category}">
      <div class="reference-photo" style="background-image: url('${item.image}')"></div>
      <div class="reference-body">
        <div class="reference-kicker">${escapeHtml(item.region)} - ${escapeHtml(item.when)}</div>
        <h3>${escapeHtml(item.name)}</h3>
        <p>${escapeHtml(item.description)}</p>
        ${item.accolades ? `<p class="reference-accent">${escapeHtml(item.accolades)}</p>` : ""}
        ${item.details ? `<p class="reference-accent">${escapeHtml(item.details)}</p>` : ""}
        <dl class="reference-details">
          <div><dt>Address</dt><dd>${escapeHtml(item.address)}</dd></div>
          ${item.phone ? `<div data-private><dt>Phone</dt><dd>${escapeHtml(item.phone)}</dd></div>` : ""}
          ${item.email ? `<div data-private><dt>Email</dt><dd>${escapeHtml(item.email)}</dd></div>` : ""}
        </dl>
        <div class="event-actions">
          <a href="${item.website}">Website</a>
          <a href="${googleMapSearch(item.address, item.name)}">Map</a>
          <a href="${directionsUrl({ from: 'current location', to: item.address || item.name, mode: 'Drive' })}">Directions</a>
        </div>
      </div>
    </article>
  `;
}

function renderReferenceLibrary() {
  const library = document.querySelector("#referenceLibrary");
  const refs = window.TRIP_REFERENCES;
  if (!library || !refs) return;

  library.innerHTML = `
    <div class="library-header">
      <span>From the Word Document</span>
      <h2>Restaurants, wineries, venues, and route notes</h2>
      <p>This section carries more of the supporting detail from the itinerary document, including descriptions, accolades, addresses, websites, and drive-day summaries.</p>
    </div>

    <section class="reference-section" id="restaurants">
      <div class="section-heading">
        <span>Dining</span>
        <strong>Restaurant reservations and food experiences</strong>
      </div>
      <div class="reference-grid">
        ${refs.restaurants.map((item) => referenceCard(item, "restaurant")).join("")}
      </div>
    </section>

    <section class="reference-section" id="wineries">
      <div class="section-heading">
        <span>Wine</span>
        <strong>Wineries, tastings, and estate lunches</strong>
      </div>
      <div class="reference-grid">
        ${refs.wineries.map((item) => referenceCard(item, "winery")).join("")}
      </div>
    </section>

    <section class="reference-section" id="venues">
      <div class="section-heading">
        <span>Wedding Venue Scouting</span>
        <strong>Four venues from the document</strong>
      </div>
      <div class="reference-grid">
        ${refs.venues.map((item) => referenceCard(item, "venue")).join("")}
      </div>
    </section>

    <section class="reference-section" id="routes">
      <div class="section-heading">
        <span>Driving Days</span>
        <strong>Route summaries and timing</strong>
      </div>
      <div class="route-reference-grid">
        ${refs.routes
          .map(
            ([date, title, detail, total]) => `
              <article class="route-reference-card">
                <span>${escapeHtml(date)}</span>
                <h3>${escapeHtml(title)}</h3>
                <p>${escapeHtml(detail)}</p>
                <strong>${escapeHtml(total)}</strong>
              </article>
            `,
          )
          .join("")}
      </div>
    </section>
  `;
}

function currentDayFromHash() {
  const match = window.location.hash.match(/day-(\d+)/);
  const dayNumber = match ? Number(match[1]) : 1;
  return trip.days.find((day) => Number(day.day) === dayNumber) || trip.days[0];
}

function showDay(dayNumber, updateUrl = true) {
  const day = trip.days.find((item) => Number(item.day) === Number(dayNumber)) || trip.days[0];
  if (!day) return;
  if (updateUrl) history.pushState(null, "", `#day-${day.day}`);
  renderDay(day);
  document.querySelector(".content-grid")?.scrollIntoView({ block: "start" });
}

function setupDayNavigation() {
  document.addEventListener("click", (event) => {
    const dayLink = event.target.closest("[data-day-link]");
    if (!dayLink) return;
    event.preventDefault();
    showDay(dayLink.dataset.dayLink);
  });

  window.addEventListener("popstate", () => {
    renderDay(currentDayFromHash());
  });
}

async function init() {
  await loadTrip();
  document.body.dataset.theme = "amalfi";
  renderHero();
  renderDayNav();
  renderOverview();
  renderLegend();
  renderStays();
  renderReferenceLibrary();
  setupPasskey();
  setupDayNavigation();
  renderDay(currentDayFromHash());

  window.addEventListener("hashchange", () => {
    renderDay(currentDayFromHash());
    document.querySelector(".content-grid")?.scrollIntoView({ block: "start" });
  });
}

init().catch((error) => {
  document.querySelector("#contentGrid").innerHTML = `
    <article class="day-summary">
      <div class="day-body">
        <h2>Dashboard data could not load</h2>
        <p>${escapeHtml(error.message)}</p>
      </div>
    </article>
  `;
});
