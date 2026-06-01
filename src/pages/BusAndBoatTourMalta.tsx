import SeoLanding from "./SeoLanding";

const BusAndBoatTourMalta = () => (
  <SeoLanding
    slug="bus-and-boat-tour-malta"
    title="Bus & Boat Tour Malta — Land + Sea Day Trip with Hotel Pickup"
    metaDescription="Combined bus and boat tour in Malta: hotel pickup, guided drive to the north, then a boat trip to Comino and the Blue Lagoon. One full day, one easy booking via WhatsApp."
    h1="Malta Bus & Boat Tour — Land and Sea in One Day"
    intro="The best way to see Malta in a single day: hotel pickup, a guided bus tour through the north of the island, then straight onto a boat for Comino and the Blue Lagoon. No taxis, no stress, no wasted time between stops — we handle the whole route."
    bullets={[
      "Hotel pickup across Sliema, St Julian's, Buġibba and Mellieħa",
      "English-speaking local guide on the bus",
      "Stops at Mdina, Mosta Dome and northern viewpoints",
      "Boat to Comino, Blue Lagoon & Crystal Lagoon",
      "Lunch option on board",
      "Door-to-door — back at your hotel by evening",
    ]}
    sections={[
      {
        heading: "Why combine bus and boat in one tour",
        body:
          "Most visitors lose half a day moving between Malta's main sights and the boat departure points. Our combined bus & boat tour fixes that. The bus picks you up from your Airbnb or hotel, takes the scenic route through Mdina and the northern villages, then drops you directly at the boat in Buġibba or Sliema — no waiting, no separate booking. After the swim stops at Comino and the Blue Lagoon, the same driver brings you back. It's the easiest way to do Malta if you only have one day.",
      },
      {
        heading: "Your day, step by step",
        body:
          "09:00 — Hotel pickup.\n09:30 — Mdina old city stop and photo break.\n10:30 — Drive north via Mosta Dome.\n11:00 — Board the boat in Buġibba.\n12:00 — Swim at Crystal Lagoon.\n13:30 — Anchor at Blue Lagoon, lunch on board.\n15:30 — Return cruise along the coast.\n17:00 — Back at the boat dock, bus transfer to your hotel.\nTimings flex slightly with weather and group.",
      },
      {
        heading: "Who it's perfect for",
        body:
          "Families staying in central Sliema or St Julian's who don't want to rent a car. Cruise-ship visitors with one day on shore. Couples who want a full Malta highlights day without planning anything. Small groups of friends who want both the cultural stops and the swim stops in one ticket.",
      },
    ]}
    faqs={[
      {
        q: "Where does the bus pick up?",
        a: "We collect from hotels and Airbnbs in Sliema, St Julian's, Buġibba, Qawra, Mellieħa and Valletta. Other areas on request.",
      },
      {
        q: "How long is the full tour?",
        a: "About 8 hours door-to-door, usually 09:00 to 17:00.",
      },
      {
        q: "Is the tour kid-friendly?",
        a: "Yes — the bus has child seats on request and the boat is calm and shaded.",
      },
      {
        q: "What if the weather is bad?",
        a: "If the boat part is cancelled for safety, we swap it for a Gozo or southern Malta extension by bus, or reschedule.",
      },
      {
        q: "How do I book?",
        a: "Send us a WhatsApp message with your hotel area, date and number of people. We confirm the same day.",
      },
    ]}
    ctaMessage="Hi! I'd like to book the Malta bus & boat tour. Can you confirm availability and hotel pickup?"
    ctaLabel="Book the bus & boat tour"
    relatedSlug="boat-trips-malta"
    relatedLabel="Just want the boat? See Malta boat trips →"
  />
);

export default BusAndBoatTourMalta;
