const placeDirectory = [
  ["oltre il giardino", "Ristorante Oltre Il Giardino", "https://www.oltreilgiardino.it/"],
  ["pietracupa", "La Locanda di Pietracupa", "https://www.locandapietracupa.com/"],
  ["lamole di lamole", "Ristorante Lamole di Lamole", "https://www.lamole.com/"],
  ["albergaccio", "Ristorante Albergaccio di Castellina", "https://www.albergacciocast.com/"],
  ["san guido", "Osteria Enoteca San Guido", "https://www.osteriasanguido.it/"],
  ["boccon divino", "Boccon Divino", "https://www.boccondivinomontalcino.it/"],
  ["la canonica", "Osteria La Canonica", "https://www.castigliondelbosco.com/dining/osteria-la-canonica/"],
  ["sala dei grappoli", "La Sala dei Grappoli", "https://www.castellobanfiilborgo.com/en/dining/la-sala-dei-grappoli/"],
  ["locanda demetra", "Locanda Demetra & Montalcino Cooking School", "https://www.montalcinocookingschool.com/"],
  ["leggenda dei frati", "La Leggenda dei Frati", "https://www.laleggendadeifrati.it/"],
  ["castello di ama", "Castello di Ama", "https://www.castellodiama.com/"],
  ["la massa", "La Massa", "https://www.fattorialamassa.com/"],
  ["fontodi", "Fontodi", "https://www.fontodi.com/"],
  ["ornellaia", "Ornellaia", "https://www.ornellaia.com/"],
  ["casanova di neri", "Casanova di Neri", "https://www.casanovadineri.com/"],
  ["castiglione del bosco", "Castiglione del Bosco", "https://www.castigliondelbosco.com/"],
  ["castiglion del bosco", "Castiglione del Bosco", "https://www.castigliondelbosco.com/"],
  ["le ragnaie", "Le Ragnaie", "https://www.leragnaie.com/"],
  ["castello banfi", "Castello Banfi", "https://www.castellobanfi.com/"],
  ["poliziano", "Poliziano", "https://www.carlettipoliziano.com/"],
  ["poggio di sotto", "Poggio di Sotto", "https://www.poggiodisotto.com/"],
];

function clean(value = "") {
  return String(value)
    .replaceAll("Â·", "-")
    .replaceAll("Ã ", "a")
    .replace(/\s+/g, " ")
    .trim();
}

function normalize(value = "") {
  return clean(value)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function escapeHtml(value = "") {
  return clean(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function placeMatch(item) {
  const haystack = normalize(`${item.title || ""} ${item.location || ""} ${item.detail || ""}`);
  const found = placeDirectory.find(([key]) => haystack.includes(normalize(key)));
  if (!found) return null;
  return { name: found[1], website: found[2] };
}

function mapsUrl(location, title) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(clean(location || title))}`;
}

function isRestaurant(event) {
  const haystack = normalize(`${event.type} ${event.title} ${event.detail}`);
  return (
    haystack.includes("dinner") ||
    haystack.includes("lunch") ||
    haystack.includes("cooking") ||
    haystack.includes("ristorante") ||
    haystack.includes("osteria") ||
    haystack.includes("locanda") ||
    haystack.includes("enoteca")
  );
}

function isWinery(event) {
  const haystack = normalize(`${event.type} ${event.title} ${event.detail} ${event.location}`);
  return (
    haystack.includes("wine") ||
    haystack.includes("tasting") ||
    haystack.includes("ornellaia") ||
    haystack.includes("castello di ama") ||
    haystack.includes("la massa") ||
    haystack.includes("fontodi") ||
    haystack.includes("casanova di neri") ||
    haystack.includes("le ragnaie") ||
    haystack.includes("poliziano") ||
    haystack.includes("poggio di sotto") ||
    haystack.includes("castiglione del bosco") ||
    haystack.includes("castiglion del bosco")
  );
}

async function loadRollup() {
  const type = document.body.dataset.rollup;
  const response = await fetch("./data/itinerary.json", { cache: "no-store" });
  const data = await response.json();
  const predicate = type === "wineries" ? isWinery : isRestaurant;
  const seen = new Set();
  const items = [];

  for (const day of data.days || []) {
    for (const event of day.events || []) {
      if (!predicate(event)) continue;
      const key = normalize(`${event.title}-${day.day}`);
      if (seen.has(key)) continue;
      seen.add(key);
      items.push({ ...event, day: day.day, date: day.date, city: day.city });
    }
  }

  const list = document.querySelector("#rollupList");
  list.innerHTML = items.length
    ? items
        .map((item) => {
          const match = placeMatch(item);
          const website = match?.website || `https://www.google.com/search?q=${encodeURIComponent(`${item.title} ${item.location || ""}`)}`;
          return `
            <article class="rollup-card">
              <div class="rollup-date">
                <strong>Day ${item.day}</strong>
                <span>${escapeHtml(item.date)}</span>
              </div>
              <div>
                <h2>${escapeHtml(match?.name || item.title)}</h2>
                <p>${escapeHtml(item.location || item.detail || "Location to be confirmed")}</p>
                <div class="rollup-actions">
                  <a href="${website}">Open website</a>
                  <a href="${mapsUrl(item.location, item.title)}">Open map</a>
                  <a href="./index.html#day-${item.day}">View day</a>
                </div>
              </div>
            </article>
          `;
        })
        .join("")
    : `<article class="rollup-card"><h2>No items yet</h2><p>The corrected itinerary did not include matching items for this category.</p></article>`;
}

loadRollup();
