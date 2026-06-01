import SeoLanding from "./SeoLanding";

const BoatRentalMalta = () => (
  <SeoLanding
    slug="boat-rental-malta"
    title="Boat Rental Malta — Private Charters from Sliema & Buġibba"
    metaDescription="Rent a boat in Malta with a local skipper. Private charters to Comino, the Blue Lagoon and Gozo from Sliema and Buġibba. Flexible routes, family-friendly. Book on WhatsApp."
    h1="Boat Rental in Malta — Your Day, Your Route"
    intro="Looking to rent a boat in Malta? We arrange private boat hire from Sliema and Buġibba with experienced local skippers. Choose your own route along Comino, the Blue Lagoon, Crystal Lagoon, St Paul's Islands and the cliffs of Gozo — no fixed schedule, no big-group queues."
    bullets={[
      "Private boat with local skipper — you set the route",
      "Departures from Sliema or Buġibba",
      "Swim stops at Comino, Blue Lagoon & Crystal Lagoon",
      "Family-friendly: shaded deck, towels, snorkels on board",
      "Half-day, full-day or sunset charters",
      "Book by WhatsApp — no online forms, fast confirmation",
    ]}
    sections={[
      {
        heading: "Why rent a boat instead of joining a group tour",
        body:
          "Group boat tours in Malta follow a fixed timetable: same swim stops, same time slots, same crowds at the Blue Lagoon at midday. Renting a private boat changes the day entirely. You arrive at Comino early — before the crowds — anchor in quieter coves around the Crystal Lagoon, then move on whenever you're ready. Couples use it for a calm anniversary day; families love that kids can jump in and out as much as they want; groups of friends turn it into a floating party. Because the skipper is local, you also get small detours most tourists never see — sea caves on the north coast, an empty bay on the Gozo side, a sunset spot off Mellieħa.",
      },
      {
        heading: "Routes we suggest",
        body:
          "• Comino & Blue Lagoon (most popular): Sliema → St Paul's Bay → Comino caves → Blue Lagoon → Crystal Lagoon swim → return.\n• Gozo loop: Buġibba → Comino → Gozo inland sea & Wied il-Għasri → Ramla Bay swim → return.\n• Sunset cruise: Sliema → Valletta Grand Harbour at golden hour → drinks on board → return.\nAll routes are flexible — tell us what your group wants and we adjust on the day.",
      },
      {
        heading: "What to bring",
        body:
          "Sun cream, a hat, a light cover-up for the ride, and a waterproof phone case if you want underwater photos. We provide towels, snorkels, drinking water and ice on board. Lunch and drinks can be added — just mention it when you message us.",
      },
    ]}
    faqs={[
      {
        q: "Where does the boat leave from?",
        a: "Most charters leave from Sliema Ferries or Buġibba marina. We can also arrange Mġarr (Gozo) pickups on request.",
      },
      {
        q: "How many people fit on the boat?",
        a: "We have boats from small private RIBs (up to 8) to larger charter boats (up to 12). Tell us the group size on WhatsApp and we'll match the right boat.",
      },
      {
        q: "Do I need a boat licence?",
        a: "No — every rental includes a licensed local skipper. You enjoy the day, we drive.",
      },
      {
        q: "Is the Blue Lagoon always included?",
        a: "Yes, unless weather or sea state makes it unsafe. In summer we recommend going early (before 10:00) to avoid the crowds.",
      },
      {
        q: "How do I book?",
        a: "Send a WhatsApp message with your date, group size and pickup point. We confirm availability the same day.",
      },
    ]}
    ctaMessage="Hi! I'd like to rent a private boat in Malta. Can you send me availability and options?"
    ctaLabel="Request your boat charter"
    relatedSlug="boat-trips-malta"
    relatedLabel="Prefer a shared boat trip? See our Malta boat trips →"
  />
);

export default BoatRentalMalta;
