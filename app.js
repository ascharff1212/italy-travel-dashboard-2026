let tripDays = [
  {
    day: 1,
    date: "Jun 1",
    city: "Rome",
    title: "Arrival in Rome",
    image:
      "https://images.unsplash.com/photo-1529260830199-42c24126f198?auto=format&fit=crop&w=1400&q=82",
    summary:
      "Land in Rome, settle into the hotel, and keep the first evening gentle with a golden-hour walk and a relaxed dinner near the historic center.",
    route: {
      from: "Rome Fiumicino Airport",
      to: "Centro Storico, Rome",
      mode: "Car",
      distance: "31 km",
      time: "45 min",
    },
    stops: [
      ["Arrival", "FCO airport", "Collect luggage and transfer into Rome."],
      ["Afternoon", "Hotel check-in", "Drop bags, refresh, and confirm dinner timing."],
      ["Evening", "Pantheon stroll", "Easy walk through Piazza Navona and the Pantheon area."],
    ],
    links: [
      ["Pantheon", "Historic site", "https://www.pantheonroma.com/"],
      ["Roscioli", "Restaurant idea", "https://www.salumeriaroscioli.com/"],
    ],
  },
  {
    day: 2,
    date: "Jun 2",
    city: "Rome",
    title: "Ancient Rome",
    image:
      "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1400&q=82",
    summary:
      "A classical Rome day built around the Colosseum, Forum, and a late lunch before leaving space for wandering.",
    route: {
      from: "Colosseum, Rome",
      to: "Trevi Fountain, Rome",
      mode: "Walk",
      distance: "2.3 km",
      time: "32 min",
    },
    stops: [
      ["Morning", "Colosseum", "Prebooked entry window and arena viewpoints."],
      ["Midday", "Roman Forum", "Slow route through the Forum and Palatine Hill."],
      ["Late day", "Trevi Fountain", "Walk north through Monti and toward Trevi."],
    ],
    links: [
      ["Colosseum tickets", "Official ticketing", "https://ticketing.colosseo.it/en/"],
      ["Trevi Fountain", "Landmark", "https://www.turismoroma.it/en/places/trevi-fountain"],
    ],
  },
  {
    day: 3,
    date: "Jun 3",
    city: "Vatican City",
    title: "Vatican and Trastevere",
    image:
      "https://images.unsplash.com/photo-1531572753322-ad063cecc140?auto=format&fit=crop&w=1400&q=82",
    summary:
      "Museums in the morning, St. Peter's in the afternoon, and dinner across the river in Trastevere.",
    route: {
      from: "Vatican Museums",
      to: "Trastevere, Rome",
      mode: "Taxi",
      distance: "4.7 km",
      time: "18 min",
    },
    stops: [
      ["Morning", "Vatican Museums", "Aim for an early entry to reduce crowd pressure."],
      ["Afternoon", "St. Peter's Basilica", "Time the basilica after the museum route."],
      ["Evening", "Trastevere dinner", "Neighborhood walk and dinner reservation."],
    ],
    links: [
      ["Vatican Museums", "Official site", "https://www.museivaticani.va/"],
      ["Da Enzo al 29", "Restaurant idea", "https://www.daenzoal29.com/"],
    ],
  },
  {
    day: 4,
    date: "Jun 4",
    city: "Orvieto",
    title: "Rome to Umbria",
    image:
      "https://images.unsplash.com/photo-1566312233943-846915081d61?auto=format&fit=crop&w=1400&q=82",
    summary:
      "Leave Rome for a softer hill-town pace, with Orvieto's cathedral and a countryside dinner.",
    route: {
      from: "Rome",
      to: "Orvieto",
      mode: "Train",
      distance: "121 km",
      time: "1 hr 20 min",
    },
    stops: [
      ["Morning", "Train north", "Depart Rome after breakfast."],
      ["Midday", "Orvieto Duomo", "Visit the cathedral and old town lanes."],
      ["Evening", "Umbrian dinner", "Quiet dinner near the town center."],
    ],
    links: [
      ["Orvieto Duomo", "Historic site", "https://www.opsm.it/"],
      ["Orvieto tourism", "City guide", "https://www.orvietoviva.com/en/"],
    ],
  },
  {
    day: 5,
    date: "Jun 5",
    city: "Val d'Orcia",
    title: "Tuscan Countryside",
    image:
      "https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?auto=format&fit=crop&w=1400&q=82",
    summary:
      "A scenic transfer through Tuscany with viewpoints, cypress roads, and a relaxed villa arrival.",
    route: {
      from: "Orvieto",
      to: "Pienza",
      mode: "Car",
      distance: "91 km",
      time: "1 hr 30 min",
    },
    stops: [
      ["Morning", "Pick up car", "Confirm luggage fit and navigation setup."],
      ["Midday", "Pienza", "Lunch and cheese shops in the historic center."],
      ["Evening", "Villa check-in", "Settle in and stock essentials."],
    ],
    links: [
      ["Pienza tourism", "Town guide", "https://www.visittuscany.com/en/towns-and-villages/pienza/"],
      ["Val d'Orcia", "UNESCO area", "https://www.visittuscany.com/en/areas/val-dorcia/"],
    ],
  },
  {
    day: 6,
    date: "Jun 6",
    city: "Montalcino",
    title: "Brunello Country",
    image:
      "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=1400&q=82",
    summary:
      "A winery day around Montalcino with generous buffer time so tastings never feel rushed.",
    route: {
      from: "Pienza",
      to: "Montalcino",
      mode: "Car",
      distance: "23 km",
      time: "32 min",
    },
    stops: [
      ["Late morning", "Winery tasting", "Reserve a seated Brunello tasting."],
      ["Lunch", "Montalcino", "Lunch in town with hilltop views."],
      ["Afternoon", "Abbey of Sant'Antimo", "Short scenic stop south of town."],
    ],
    links: [
      ["Biondi-Santi", "Winery", "https://www.biondisanti.it/en/"],
      ["Sant'Antimo", "Abbey", "https://www.antimo.it/en/"],
    ],
  },
  {
    day: 7,
    date: "Jun 7",
    city: "Siena",
    title: "Siena Day Trip",
    image:
      "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1400&q=82",
    summary:
      "A full day in Siena centered on the Campo, cathedral, and a long lunch with room to explore side streets.",
    route: {
      from: "Pienza",
      to: "Siena",
      mode: "Car",
      distance: "55 km",
      time: "1 hr 5 min",
    },
    stops: [
      ["Morning", "Drive to Siena", "Park outside the historic core."],
      ["Midday", "Siena Duomo", "Cathedral visit and Piccolomini Library."],
      ["Afternoon", "Piazza del Campo", "Coffee, shopping, and a slow walk."],
    ],
    links: [
      ["Siena Duomo", "Official site", "https://operaduomo.siena.it/en/"],
      ["Visit Siena", "City guide", "https://www.terredisiena.it/en/"],
    ],
  },
  {
    day: 8,
    date: "Jun 8",
    city: "Florence",
    title: "Into Florence",
    image:
      "https://images.unsplash.com/photo-1541370976299-4d24ebbc9077?auto=format&fit=crop&w=1400&q=82",
    summary:
      "Transfer to Florence, return the car, and settle into an art-filled city rhythm.",
    route: {
      from: "Pienza",
      to: "Florence",
      mode: "Car",
      distance: "118 km",
      time: "1 hr 55 min",
    },
    stops: [
      ["Morning", "Drive to Florence", "Avoid ZTL zones when returning the car."],
      ["Afternoon", "Hotel check-in", "Reset and walk to the Arno."],
      ["Evening", "Oltrarno", "Dinner and artisan shops across the river."],
    ],
    links: [
      ["Uffizi Gallery", "Museum", "https://www.uffizi.it/en"],
      ["Florence tourism", "City guide", "https://www.feelflorence.it/en"],
    ],
  },
  {
    day: 9,
    date: "Jun 9",
    city: "Florence",
    title: "Uffizi and Duomo",
    image:
      "https://images.unsplash.com/photo-1569787295872-1cd3115e1ef0?auto=format&fit=crop&w=1400&q=82",
    summary:
      "A museum-forward day with strategic breaks and a rooftop-style evening viewpoint.",
    route: {
      from: "Uffizi Gallery",
      to: "Piazzale Michelangelo",
      mode: "Walk",
      distance: "2.0 km",
      time: "31 min",
    },
    stops: [
      ["Morning", "Uffizi", "Prebooked timed entry."],
      ["Afternoon", "Duomo area", "Cathedral exterior, baptistery, and gelato stop."],
      ["Sunset", "Piazzale Michelangelo", "Classic skyline view over Florence."],
    ],
    links: [
      ["Uffizi tickets", "Official site", "https://www.uffizi.it/en/tickets"],
      ["Duomo Florence", "Official site", "https://duomo.firenze.it/en/home"],
    ],
  },
  {
    day: 10,
    date: "Jun 10",
    city: "Chianti",
    title: "Chianti Vineyards",
    image:
      "https://images.unsplash.com/photo-1568219656418-15c329312bf1?auto=format&fit=crop&w=1400&q=82",
    summary:
      "A private driver or tour day in Chianti for tastings, lunch, and countryside views.",
    route: {
      from: "Florence",
      to: "Greve in Chianti",
      mode: "Car",
      distance: "31 km",
      time: "45 min",
    },
    stops: [
      ["Morning", "Greve in Chianti", "Town square and wine shops."],
      ["Lunch", "Vineyard lunch", "Reserve a winery lunch with tasting."],
      ["Afternoon", "Return to Florence", "Leave evening unscheduled."],
    ],
    links: [
      ["Antinori nel Chianti Classico", "Winery", "https://www.antinori.it/en/experiences/antinori-nel-chianti-classico/"],
      ["Greve tourism", "Town guide", "https://www.visittuscany.com/en/towns-and-villages/greve-in-chianti/"],
    ],
  },
  {
    day: 11,
    date: "Jun 11",
    city: "Cinque Terre",
    title: "Coastal Shift",
    image:
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1400&q=82",
    summary:
      "Travel from Florence to the Ligurian coast and trade museums for sea air.",
    route: {
      from: "Florence",
      to: "Monterosso al Mare",
      mode: "Train",
      distance: "180 km",
      time: "2 hr 45 min",
    },
    stops: [
      ["Morning", "Train to coast", "Pack lighter day bags for station transfers."],
      ["Afternoon", "Monterosso arrival", "Check in and beach walk."],
      ["Evening", "Seafood dinner", "Reserve near the waterfront."],
    ],
    links: [
      ["Cinque Terre Park", "Official site", "https://www.parconazionale5terre.it/"],
      ["Monterosso info", "Village guide", "https://www.cinqueterre.eu.com/en/monterosso"],
    ],
  },
  {
    day: 12,
    date: "Jun 12",
    city: "Cinque Terre",
    title: "Villages by Train",
    image:
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1400&q=82",
    summary:
      "A flexible coastal day using the local train to hop between villages and viewpoints.",
    route: {
      from: "Monterosso al Mare",
      to: "Riomaggiore",
      mode: "Train",
      distance: "16 km",
      time: "25 min",
    },
    stops: [
      ["Morning", "Vernazza", "Harbor views before crowds build."],
      ["Midday", "Manarola", "Lunch and cliffside photos."],
      ["Afternoon", "Riomaggiore", "Late-day village stroll."],
    ],
    links: [
      ["Cinque Terre Train Card", "Transit info", "https://www.parconazionale5terre.it/Ecinque-terre-card.php"],
      ["Manarola guide", "Village guide", "https://www.cinqueterre.eu.com/en/manarola"],
    ],
  },
  {
    day: 13,
    date: "Jun 13",
    city: "Milan",
    title: "North to Milan",
    image:
      "https://images.unsplash.com/photo-1513581166391-887a96ddeafd?auto=format&fit=crop&w=1400&q=82",
    summary:
      "A travel day to Milan with time for the Duomo area and a polished city dinner.",
    route: {
      from: "Monterosso al Mare",
      to: "Milan",
      mode: "Train",
      distance: "225 km",
      time: "3 hr 20 min",
    },
    stops: [
      ["Morning", "Train to Milan", "Book seats with luggage space in mind."],
      ["Afternoon", "Duomo di Milano", "Cathedral exterior and gallery walk."],
      ["Evening", "Brera dinner", "Artful neighborhood with good restaurants."],
    ],
    links: [
      ["Duomo di Milano", "Official site", "https://www.duomomilano.it/en/"],
      ["Brera district", "Neighborhood", "https://www.yesmilano.it/en/neighborhoods/brera"],
    ],
  },
  {
    day: 14,
    date: "Jun 14",
    city: "Lake Como",
    title: "Lake Como Arrival",
    image:
      "https://images.unsplash.com/photo-1580493325592-4d34d438d057?auto=format&fit=crop&w=1400&q=82",
    summary:
      "Short transfer to the lake, ferry orientation, and a slow afternoon in Bellagio or Varenna.",
    route: {
      from: "Milan",
      to: "Varenna",
      mode: "Train",
      distance: "76 km",
      time: "1 hr 5 min",
    },
    stops: [
      ["Morning", "Train to Varenna", "Lake arrival with easy station transfer."],
      ["Afternoon", "Ferry to Bellagio", "Check schedules before committing."],
      ["Evening", "Lakefront dinner", "Build around sunset timing."],
    ],
    links: [
      ["Lake Como ferry", "Schedules", "https://www.navigazionelaghi.it/en/"],
      ["Villa Monastero", "Villa garden", "https://www.villamonastero.eu/en/"],
    ],
  },
  {
    day: 15,
    date: "Jun 15",
    city: "Lake Como",
    title: "Villas and Ferries",
    image:
      "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=1400&q=82",
    summary:
      "A ferry-based day for villas, gardens, lake towns, and room to linger where the weather is best.",
    route: {
      from: "Varenna",
      to: "Villa del Balbianello",
      mode: "Ferry",
      distance: "13 km",
      time: "45 min",
    },
    stops: [
      ["Morning", "Villa del Balbianello", "Reserve entry if available."],
      ["Lunch", "Lenno or Bellagio", "Choose based on ferry timing."],
      ["Afternoon", "Villa Melzi Gardens", "Gentle garden walk near Bellagio."],
    ],
    links: [
      ["Villa del Balbianello", "Villa", "https://fondoambiente.it/luoghi/villa-del-balbianello"],
      ["Villa Melzi", "Gardens", "https://giardinidivillamelzi.it/en/"],
    ],
  },
  {
    day: 16,
    date: "Jun 16",
    city: "Verona",
    title: "Romantic Verona",
    image:
      "https://images.unsplash.com/photo-1534445867742-43195f401b6c?auto=format&fit=crop&w=1400&q=82",
    summary:
      "Travel east to Verona for Roman architecture, piazzas, and an opera-style evening atmosphere.",
    route: {
      from: "Varenna",
      to: "Verona",
      mode: "Train",
      distance: "190 km",
      time: "3 hr",
    },
    stops: [
      ["Morning", "Train to Verona", "Likely connection through Milan."],
      ["Afternoon", "Arena di Verona", "Visit the Roman amphitheater."],
      ["Evening", "Piazza delle Erbe", "Dinner and nighttime piazza walk."],
    ],
    links: [
      ["Arena di Verona", "Official site", "https://www.arena.it/en"],
      ["Verona tourism", "City guide", "https://www.visitverona.it/en"],
    ],
  },
  {
    day: 17,
    date: "Jun 17",
    city: "Venice",
    title: "Venice Arrival",
    image:
      "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=1400&q=82",
    summary:
      "Train into Venice, vaporetto to the hotel, and a first evening on the canals.",
    route: {
      from: "Verona",
      to: "Venice Santa Lucia",
      mode: "Train",
      distance: "121 km",
      time: "1 hr 15 min",
    },
    stops: [
      ["Morning", "Train to Venice", "Arrive directly on the Grand Canal."],
      ["Afternoon", "Hotel check-in", "Use vaporetto or private water taxi."],
      ["Evening", "Dorsoduro walk", "Quieter canals and dinner."],
    ],
    links: [
      ["ACTV Venice transit", "Vaporetto", "https://actv.avmspa.it/en"],
      ["Venice tourism", "City guide", "https://www.veneziaunica.it/en"],
    ],
  },
  {
    day: 18,
    date: "Jun 18",
    city: "Venice",
    title: "St. Mark's and Islands",
    image:
      "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&w=1400&q=82",
    summary:
      "A headline Venice day with St. Mark's, the Doge's Palace, and an optional Murano or Burano extension.",
    route: {
      from: "Piazza San Marco",
      to: "Burano",
      mode: "Ferry",
      distance: "9 km",
      time: "45 min",
    },
    stops: [
      ["Morning", "St. Mark's Basilica", "Go early and dress for church entry."],
      ["Midday", "Doge's Palace", "Bridge of Sighs and palace rooms."],
      ["Afternoon", "Burano option", "Colorful island walk if energy is good."],
    ],
    links: [
      ["St. Mark's Basilica", "Official site", "https://www.basilicasanmarco.it/?lang=en"],
      ["Doge's Palace", "Museum", "https://palazzoducale.visitmuve.it/en/home/"],
    ],
  },
  {
    day: 19,
    date: "Jun 19",
    city: "Venice",
    title: "Slow Venice",
    image:
      "https://images.unsplash.com/photo-1534113414509-0eec2bfb493f?auto=format&fit=crop&w=1400&q=82",
    summary:
      "A lighter day for galleries, shopping, cicchetti, and packing without flattening the magic.",
    route: {
      from: "Rialto Bridge",
      to: "Gallerie dell'Accademia",
      mode: "Walk",
      distance: "1.4 km",
      time: "20 min",
    },
    stops: [
      ["Morning", "Rialto Market", "Food market stroll if open."],
      ["Afternoon", "Accademia", "Art visit or free wandering."],
      ["Evening", "Cicchetti crawl", "Short stops instead of one heavy dinner."],
    ],
    links: [
      ["Gallerie dell'Accademia", "Museum", "https://www.gallerieaccademia.it/en"],
      ["Rialto Market", "Market", "https://www.veneziaunica.it/en/content/rialto-market"],
    ],
  },
  {
    day: 20,
    date: "Jun 20",
    city: "Venice",
    title: "Departure Prep",
    image:
      "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=1400&q=82",
    summary:
      "A practical final full day with flexible sightseeing, confirmations, and a memorable last dinner.",
    route: {
      from: "Venice",
      to: "Venice Marco Polo Airport",
      mode: "Water taxi",
      distance: "13 km",
      time: "35 min",
    },
    stops: [
      ["Morning", "Open morning", "Use for anything missed or a quiet coffee."],
      ["Afternoon", "Confirm transfers", "Check flight, checkout, and airport timing."],
      ["Evening", "Final dinner", "Book somewhere close to the hotel."],
    ],
    links: [
      ["Venice Airport", "Airport", "https://www.veneziaairport.it/en/"],
      ["Al Covo", "Restaurant idea", "https://www.ristorantealcovo.com/en/"],
    ],
  },
  {
    day: 21,
    date: "Jun 21",
    city: "Travel Home",
    title: "Fly Home",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1400&q=82",
    summary:
      "Departure day with the dashboard focused on confirmations, airport route, and companion coordination.",
    route: {
      from: "Venice",
      to: "Venice Marco Polo Airport",
      mode: "Water taxi",
      distance: "13 km",
      time: "35 min",
    },
    stops: [
      ["Early", "Checkout", "Final room sweep and documents ready."],
      ["Transfer", "Airport route", "Leave extra time for water transfer variables."],
      ["Flight", "Depart Italy", "Flight details will come from TripIt import."],
    ],
    links: [
      ["Venice Airport", "Airport", "https://www.veneziaairport.it/en/"],
      ["Google Flights", "Flight check", "https://www.google.com/travel/flights"],
    ],
  },
];

const consultantNotes = {
  1: "For the real version, I recommend a gentle arrival day design: flight cards, hotel address, check-in time, and one dinner option. Nobody wants to decode a dense itinerary while jet-lagged.",
  6: "For winery days, the dashboard should show confirmation numbers, tasting deposits, driver contact, and a sober transport plan in one glance.",
  10: "A driver contact block would be excellent here. I would also add a quick 'call / text / WhatsApp' row for any day involving private transfers.",
  14: "Lake days benefit from ferry-plan backup links because weather and timing can change quickly. We can make a primary route and a rainy-day alternate.",
  21: "Departure days should be aggressively practical: flight terminal, passport checklist, luggage timing, and a single directions button.",
};

const themes = ["amalfi", "terra", "renaissance"];
let tripSource = "sample";

const italyImages = [
  "https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?auto=format&fit=crop&w=1400&q=82",
  "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=1400&q=82",
  "https://images.unsplash.com/photo-1541370976299-4d24ebbc9077?auto=format&fit=crop&w=1400&q=82",
  "https://images.unsplash.com/photo-1568219656418-15c329312bf1?auto=format&fit=crop&w=1400&q=82",
  "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1400&q=82",
  "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=1400&q=82",
];

function formatDate(date) {
  const parsed = new Date(`${date}T12:00:00`);
  if (Number.isNaN(parsed.getTime())) return date;
  return parsed.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

function extractWebsite(event) {
  if (event.url) return event.url;
  const text = `${event.description || ""} ${event.location || ""}`;
  return text.match(/https?:\/\/[^\s)]+/i)?.[0] || "";
}

function cleanPlaceLabel(place = "") {
  return place
    .replace(/\b\d{5}\s+/g, "")
    .replace(/\s+(FI|SI|LI|SO|ZH)\b/g, "")
    .replace(/\s+United States of America\b/i, "")
    .trim();
}

function cleanDetail(event) {
  const pieces = [event.location, event.description]
    .filter(Boolean)
    .map((piece) => piece.replace(/https?:\/\/[^\s)]+/gi, "").trim())
    .filter(Boolean);
  return pieces[0] || "TripIt item imported from your calendar feed.";
}

function adaptImportedDay(day, index) {
  const events = day.events || [];
  const links = events
    .map((event) => [event.title, event.location || "TripIt item", extractWebsite(event)])
    .filter(([, , url]) => url);

  if (!links.length) {
    const place = events.find((event) => event.location);
    if (place?.location) {
      links.push([
        place.title,
        place.location,
        `https://www.google.com/search?q=${encodeURIComponent(`${place.title} ${place.location}`)}`,
      ]);
    }
  }

  return {
    ...day,
    date: formatDate(day.date),
    city: cleanPlaceLabel(day.city || "Italy"),
    image: italyImages[index % italyImages.length],
    summary:
      day.summary ||
      `${events.length} imported TripIt item${events.length === 1 ? "" : "s"} scheduled for this day.`,
    stops: events.map((event) => [event.time, event.title, cleanDetail(event)]),
    links,
    route: {
      from: cleanPlaceLabel(day.route?.from || events[0]?.location || day.city || "Italy"),
      to: cleanPlaceLabel(day.route?.to || events.at(-1)?.location || day.city || "Italy"),
      mode: day.route?.mode || "Directions",
      distance: day.route?.distance || "Open map",
      time: day.route?.time || "Live",
    },
  };
}

async function loadImportedTrip() {
  try {
    const response = await fetch("./data/itinerary.json", { cache: "no-store" });
    if (!response.ok) return;
    const imported = await response.json();
    if (!Array.isArray(imported.days) || imported.days.length === 0) return;
    tripDays = imported.days.map(adaptImportedDay);
    tripSource = "tripit";
  } catch {
    tripSource = "sample";
  }
}

function setTheme(theme) {
  document.body.dataset.theme = theme;
  localStorage.setItem("italy-dashboard-theme", theme);
  document.querySelectorAll("[data-theme-choice]").forEach((button) => {
    button.classList.toggle("active", button.dataset.themeChoice === theme);
  });
}

function setupPasskey() {
  const form = document.querySelector("#passkeyForm");
  const input = document.querySelector("#passkeyInput");
  const status = document.querySelector("#passkeyStatus");
  if (!form || !input || !status) return;

  const update = () => {
    const unlocked = sessionStorage.getItem("italy-private-unlocked") === "true";
    document.body.classList.toggle("private-unlocked", unlocked);
    status.textContent = unlocked
      ? "Private details unlocked for this browser session."
      : "Private details are hidden.";
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (input.value === "5646") {
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

function mapsUrl(route) {
  const origin = encodeURIComponent(route.from);
  const destination = encodeURIComponent(route.to);
  const mode = travelMode(route.mode);
  const modeParam = mode ? `&travelmode=${mode}` : "";
  return `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}${modeParam}`;
}

function travelMode(mode) {
  const normalized = mode.toLowerCase();
  if (normalized.includes("flight")) return "";
  if (normalized.includes("walk")) return "walking";
  if (normalized.includes("train") || normalized.includes("ferry")) return "transit";
  return "driving";
}

function renderDayNav() {
  const nav = document.querySelector("#dayNav");
  nav.innerHTML = tripDays
    .map(
      (day) => `
        <a class="day-button" href="#day-${day.day}" data-day-link="${day.day}">
          <span class="day-number">${day.day}</span>
          <span>
            <strong>Day ${day.day} &middot; ${day.date}</strong>
            <span>${day.city}</span>
          </span>
        </a>
      `,
    )
    .join("");
}

function renderOverview() {
  const overview = document.querySelector("#overviewBand");
  const totalDistance = tripDays.reduce((sum, day) => {
    const distance = Number.parseInt(day.route.distance, 10);
    return Number.isFinite(distance) ? sum + distance : sum;
  }, 0);

  overview.innerHTML = `
    <article class="metric-card">
      <strong>${tripDays.length}</strong>
      <span>${tripSource === "tripit" ? "real TripIt travel days imported" : "travel days ready for TripIt import"}</span>
    </article>
    <article class="metric-card">
      <strong>3</strong>
      <span>visual directions to compare live</span>
    </article>
    <article class="metric-card">
      <strong>${tripSource === "tripit" ? "Live" : `${totalDistance.toLocaleString()} km`}</strong>
      <span>${tripSource === "tripit" ? "Google Maps directions per day" : "sample mapped travel segments"}</span>
    </article>
    <article class="metric-card">
      <strong>Mobile</strong>
      <span>built for iPhone, iPad, and desktop sharing</span>
    </article>
  `;
}

function renderTripHeader() {
  document.querySelector(".brand small").textContent =
    tripSource === "tripit" ? "TripIt imported" : "Sample draft";
  document.querySelector(".hero-content .eyebrow").textContent =
    tripSource === "tripit" ? `${tripDays.length}-day TripIt itinerary` : "Three-week Italy itinerary";
}

function routeSvg(day) {
  const curveA = 58 + ((day.day * 19) % 58);
  const curveB = 205 - ((day.day * 13) % 54);
  return `
    <svg class="route-map" viewBox="0 0 420 300" role="img" aria-label="Illustrated route map from ${day.route.from} to ${day.route.to}">
      <path class="route-line" d="M70 222 C${curveA} 64, ${curveB} 74, 348 78" />
      <circle class="route-dot" cx="70" cy="222" r="12" />
      <circle class="route-dot" cx="348" cy="78" r="12" />
      <path d="M44 246 L104 236 L122 264 L78 282 Z" fill="rgba(75,123,81,.20)" />
      <path d="M296 48 L376 30 L390 98 L330 116 Z" fill="rgba(199,148,50,.22)" />
      <text class="route-label" x="36" y="258">${shortPlace(day.route.from)}</text>
      <text class="route-label" x="254" y="46">${shortPlace(day.route.to)}</text>
    </svg>
  `;
}

function shortPlace(place) {
  return place.split(",")[0].replace("Venice Santa Lucia", "Santa Lucia");
}

function renderDay(day) {
  const content = document.querySelector("#contentGrid");
  const note =
    consultantNotes[day.day] ||
    "Best-practice idea: once the real TripIt data is loaded, we should add confirmation numbers, reservation names, cancellation windows, and a backup plan for weather-sensitive days.";

  document.querySelectorAll("[data-day-link]").forEach((link) => {
    link.classList.toggle("active", Number(link.dataset.dayLink) === day.day);
  });

  content.innerHTML = `
    <article class="day-summary" id="day-${day.day}" style="--day-image: url('${day.image}')">
      <div class="day-topper">
        <div class="day-meta">
          <span class="pill">Day ${day.day}</span>
          <span class="pill">${day.date}</span>
          <span class="pill">${day.city}</span>
        </div>
        <h2>${day.title}</h2>
      </div>
      <div class="day-body">
        <p>${day.summary}</p>
        <div class="timeline" aria-label="Daily schedule">
          ${day.stops
            .map(
              ([time, title, detail]) => `
                <div class="timeline-item">
                  <div class="time">${time}</div>
                  <div>
                    <strong>${title}</strong>
                    <span>${detail}</span>
                  </div>
                </div>
              `,
            )
            .join("")}
        </div>
      </div>
    </article>

    <aside class="side-stack">
      <article class="route-card">
        <h3>Route</h3>
        ${routeSvg(day)}
        <div class="route-stats">
          <div><strong>${day.route.mode}</strong><span>mode</span></div>
          <div><strong>${day.route.distance}</strong><span>distance</span></div>
          <div><strong>${day.route.time}</strong><span>est. time</span></div>
        </div>
        <a class="map-link" href="${mapsUrl(day.route)}" target="_blank" rel="noreferrer">Open Google Maps Directions</a>
      </article>

      <article class="activity-card">
        <h3>Places and Links</h3>
        <div class="activity-list">
          ${(day.links.length ? day.links : [["Google search", "No direct website in TripIt", `https://www.google.com/search?q=${encodeURIComponent(`${day.title} ${day.city}`)}`]])
            .map(
              ([name, type, url]) => `
                <div class="activity">
                  <strong>${name}</strong>
                  <span>${type}</span>
                  <a class="website-link" href="${url}" target="_blank" rel="noreferrer">Open website</a>
                </div>
              `,
            )
            .join("")}
        </div>
      </article>

      <article class="consultant-note">
        <h3>Consultant Note</h3>
        <p>${note}</p>
      </article>

      <article class="import-card">
        <h3>TripIt Import Status</h3>
        <p>
          ${
            tripSource === "tripit"
              ? "This dashboard is now using your imported TripIt calendar data. The private feed URL is not stored in the public website files."
              : "This draft uses sample Italy data. When you provide either a TripIt calendar feed URL or an exported .ics file, I can convert it into the real day-by-day dashboard."
          }
        </p>
      </article>
    </aside>
  `;
}

function currentDayFromHash() {
  const match = window.location.hash.match(/day-(\d+)/);
  const dayNumber = match ? Number(match[1]) : 1;
  return tripDays.find((day) => day.day === dayNumber) || tripDays[0];
}

async function init() {
  await loadImportedTrip();
  renderTripHeader();
  renderDayNav();
  renderOverview();
  setupPasskey();
  setTheme(localStorage.getItem("italy-dashboard-theme") || themes[0]);
  renderDay(currentDayFromHash());

  document.querySelectorAll("[data-theme-choice]").forEach((button) => {
    button.addEventListener("click", () => setTheme(button.dataset.themeChoice));
  });

  window.addEventListener("hashchange", () => {
    renderDay(currentDayFromHash());
    document.querySelector(".content-grid")?.scrollIntoView({ block: "start" });
  });
}

init();
