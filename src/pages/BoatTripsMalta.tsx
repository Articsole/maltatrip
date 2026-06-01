import SeoLanding from "./SeoLanding";

const BoatTripsMalta = () => (
  <SeoLanding
    slug="boat-trips-malta"
    title="Boat Trips Malta — Comino, Blue Lagoon & Gozo Day Trips"
    metaDescription="Boat trips in Malta to Comino, the Blue Lagoon, Crystal Lagoon and Gozo. Daily departures from Sliema and Buġibba, family-friendly. Book your seat via WhatsApp."
    h1="Boat Trips in Malta — Comino, Blue Lagoon & Gozo"
    intro="The best boat trips in Malta leave from Sliema and Buġibba and head north to Comino, the Blue Lagoon and Gozo. Crystal-clear water, hidden caves, swim stops at the Crystal Lagoon — it's the experience most visitors remember most. We offer daily shared departures as well as smaller-group options."
    bullets={[
      "Daily departures from Sliema and Buġibba",
      "Swim stops at Blue Lagoon & Crystal Lagoon",
      "Caves of Comino and St Paul's Islands",
      "On-board sun deck, toilets and snacks",
      "Family-friendly — toddlers welcome",
      "WhatsApp booking, no online forms",
    ]}
    sections={[
      {
        heading: "What a Malta boat trip looks like",
        body:
          "You board in Sliema or Buġibba in the morning. The boat heads north along the coast, past St Paul's Islands and into the channel between Malta and Comino. First stop is usually the caves on the south side of Comino — short photo break — then you anchor at the Blue Lagoon for the longest swim of the day. The water is shallow, turquoise, and shockingly warm from May to October. After lunch the boat moves to the quieter Crystal Lagoon, where you can snorkel or jump from the deck. Return to port is around 17:00.",
      },
      {
        heading: "Best time of year",
        body:
          "May–October is the full boat-trip season. June and September are the sweet spot: warm sea, full schedule, fewer crowds than peak July–August. If you only have one day, go on a weekday — weekend trips fill up with locals.",
      },
      {
        heading: "Tips from locals",
        body:
          "• Book the earliest departure to reach the Blue Lagoon before the day-tripper rush.\n• Bring reef-safe sun cream — the sun reflects hard off the water.\n• Wear sandals you can swim in; the rocks at Comino are sharp.\n• If you get seasick easily, choose a larger boat and sit at the back.",
      },
    ]}
    faqs={[
      {
        q: "How long is the boat trip from Malta to Comino?",
        a: "About 45 minutes from Sliema and 25 minutes from Buġibba. The full day trip runs from roughly 10:00 to 17:00.",
      },
      {
        q: "Is the Blue Lagoon worth visiting?",
        a: "Yes — it's the most photographed swim spot in Malta. Go early or late in the day to avoid the busiest hours (12:00–14:00).",
      },
      {
        q: "Are boat trips suitable for kids?",
        a: "Absolutely. The boats have shaded decks, life jackets, and the swim spots are calm. Toddlers welcome.",
      },
      {
        q: "What's the difference between a boat trip and a boat rental?",
        a: "A boat trip is a fixed-schedule shared departure. A private boat rental gives you your own boat and skipper so you set the route and timing.",
      },
      {
        q: "How do I book?",
        a: "Message us on WhatsApp with your date and group size. We confirm same-day.",
      },
    ]}
    ctaMessage="Hi! I'd like to book a boat trip in Malta to Comino & Blue Lagoon. Can you send me options?"
    ctaLabel="Book your boat trip"
    relatedSlug="boat-rental-malta"
    relatedLabel="Want it private? See our Malta boat rental →"
  />
);

export default BoatTripsMalta;
