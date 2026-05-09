const filters = {
  restaurants: /restaurant|ristorante|osteria|trattoria|dinner|lunch|cooking|locanda|boccon|grappoli|frati|demetra|canonica|enoteca/i,
  wineries: /wine|winery|tasting|vineyard|castello di ama|la massa|ornellaia|palagio|casanova di neri|ragnaie|poggio di sotto|bolgheri/i,
};

function formatDate(date) {
  const parsed = new Date(`${date}T12:00:00`);
  if (Number.isNaN(parsed.getTime())) return date;
  return parsed.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });
}

function mapsUrl(location, title) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location || title)}`;
}

function searchUrl(title, location) {
  return `https://www.google.com/search?q=${encodeURIComponent(`${title} ${location || "Italy"}`)}`;
}

async function loadRollup() {
  const type = document.body.dataset.rollup;
  const response = await fetch("./data/itinerary.json", { cache: "no-store" });
  const data = await response.json();
  const matcher = filters[type] || filters.restaurants;
  const items = [];

  for (const day of data.days || []) {
    for (const event of day.events || []) {
      const text = `${event.title || ""} ${event.location || ""} ${event.description || ""}`;
      if (!matcher.test(text)) continue;
      items.push({ ...event, day: day.day, date: day.date, city: day.city });
    }
  }

  const list = document.querySelector("#rollupList");
  list.innerHTML = items.length
    ? items
        .map(
          (item) => `
            <article class="rollup-card">
              <div class="rollup-date">
                <strong>Day ${item.day}</strong>
                <span>${formatDate(item.date)}</span>
              </div>
              <div>
                <h2>${item.title}</h2>
                <p>${item.location || "Location to be confirmed"}</p>
                <div class="rollup-actions">
                  <a href="${mapsUrl(item.location, item.title)}" target="_blank" rel="noreferrer">Open map</a>
                  <a href="${searchUrl(item.title, item.location)}" target="_blank" rel="noreferrer">Find website</a>
                  <a href="./index.html#day-${item.day}">View day</a>
                </div>
              </div>
            </article>
          `,
        )
        .join("")
    : `<article class="rollup-card"><h2>No items yet</h2><p>TripIt did not include matching items for this category.</p></article>`;
}

loadRollup();
