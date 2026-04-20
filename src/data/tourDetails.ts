// Detailed tour options shown on the dedicated tour pages.
// Pricing & schedules are displayed here (the homepage cards remain price-free).

export interface TourOption {
  id: string;
  title: string;
  description?: string;
  adultPrice?: string;
  childPrice?: string;
  underFive?: string;
  departures?: { from: string; times: string; duration?: string }[];
  schedule?: string;
  hours?: string;
  notes?: string[];
  waMessage: string;
}

export interface TourCategory {
  slug: string;
  titleKey: string;
  intro: string;
  options: TourOption[];
}

export const tourCategories: Record<string, TourCategory> = {
  boat: {
    slug: "boat",
    titleKey: "exp.boatTour.title",
    intro:
      "Choose the perfect boat experience for your day on the Maltese waters — from full-day island hopping to a relaxed harbour cruise.",
    options: [
      {
        id: "gozo-comino",
        title: "Boat Tour — Gozo & Comino",
        description:
          "A full day of island hopping, swimming in the Blue Lagoon and exploring the rugged beauty of Gozo and Comino.",
        adultPrice: "€42",
        childPrice: "€30 (ages 5–15)",
        underFive: "Free under 5 years",
        departures: [
          { from: "Sliema", times: "10:30 – 18:30", duration: "8 hours" },
          { from: "Bugibba Jetty", times: "11:30 – 17:30", duration: "6 hours" },
        ],
        notes: ["Hotel transport included (round trip)"],
        waMessage: "Hi! I'd like to book the Boat Tour to Gozo & Comino 🚤",
      },
      {
        id: "comino",
        title: "Boat Tour — Comino",
        description:
          "Spend a full day at the famous Blue Lagoon — crystal-clear water, hidden caves and pure relaxation.",
        adultPrice: "€30",
        childPrice: "€20 (ages 5–15)",
        underFive: "Free under 5 years",
        departures: [
          { from: "Sliema", times: "10:30 – 18:30", duration: "8 hours" },
          { from: "Bugibba Jetty", times: "11:30 – 17:30", duration: "6 hours" },
        ],
        notes: ["Hotel transport included (round trip)"],
        waMessage: "Hi! I'd like to book the Comino Boat Tour 🏝️",
      },
      {
        id: "harbour-cruise",
        title: "Harbour Cruise",
        description:
          "A scenic 90-minute cruise around Malta's historic harbours with live commentary on the rich maritime history.",
        adultPrice: "€20",
        childPrice: "€12 (ages 5–15)",
        underFive: "Free under 5 years",
        schedule:
          "Mon–Sat: 10:15, 12:15, 14:15, 16:15  •  Sun: 10:15, 12:15, 14:15",
        notes: [
          "Departure point: Sliema",
          "Duration: 90 minutes",
          "Discover both the Grand Harbour & Marsamxett",
        ],
        waMessage: "Hi! I'd like to book the Harbour Cruise ⛵",
      },
    ],
  },

  "private-boat": {
    slug: "private-boat",
    titleKey: "exp.privateBoat.title",
    intro:
      "Enjoy Malta's coastline in complete privacy — sail at your own pace, choose your route and stop wherever you like.",
    options: [
      {
        id: "private-charter",
        title: "Private Charter — Fully Customisable",
        description:
          "A completely tailor-made experience, designed entirely around you. Choose your sailing route, the number of guests, the type of boat and many more details to create your perfect day at sea. For more information about your personal private boat tour, please get in touch with us via WhatsApp.",
        notes: [
          "Choose your own sailing route",
          "Decide the number of guests",
          "Pick from a selection of boats",
          "Fully personalised experience",
          "Contact us via WhatsApp for more information",
        ],
        waMessage:
          "Hi! I'd like more information about a fully customised Private Boat Tour 🛥️ (route, guests, boat type, etc.)",
      },
    ],
  },

  bus: {
    slug: "bus",
    titleKey: "exp.busTour.title",
    intro:
      "Discover Malta and Gozo at your own pace with hop-on hop-off bus tours covering all the major sights.",
    options: [
      {
        id: "north-south",
        title: "South & North Malta — Hop-On Hop-Off",
        description:
          "Two iconic routes covering Malta's most beautiful coastal towns, historic cities and scenic viewpoints.",
        adultPrice: "€25",
        childPrice: "€16 (ages 5–15)",
        underFive: "Free under 5 years",
        hours: "09:00 – 18:00",
        waMessage: "Hi! I'd like to book the South & North Malta Bus Tour 🚌",
      },
      {
        id: "gozo-bus",
        title: "Gozo Bus Tour — Hop-On Hop-Off",
        description:
          "Explore the charming island of Gozo with full flexibility — get off at any stop and continue when you're ready.",
        adultPrice: "€25",
        childPrice: "€16 (ages 5–15)",
        underFive: "Free under 5 years",
        hours: "09:45 – 18:30",
        notes: [
          "With hotel transport: Adults €32 • Children €24",
        ],
        waMessage: "Hi! I'd like to book the Gozo Bus Tour 🚌",
      },
    ],
  },

  gozo: {
    slug: "gozo",
    titleKey: "exp.gozoTour.title",
    intro:
      "Pick your favourite way to explore Gozo — adventurous off-road or a relaxed guided tour.",
    options: [
      {
        id: "quad",
        title: "Quad Gozo Tour",
        description:
          "An adrenaline-packed ride through Gozo's countryside, dramatic cliffs and hidden beaches. Perfect for adventure lovers who want to explore the island off the beaten track.",
        adultPrice: "€80 (driver)",
        childPrice: "€40 (passenger)",
        underFive: "Free under 5 years",
        hours: "09:30 – 17:00",
        notes: [
          "Full-day guided tour",
          "Lunch & boat transfer to Gozo included",
          "Hotel pickup & drop-off included",
        ],
        waMessage: "Hi! I'd like to book a Quad Gozo Tour 🏍️",
      },
      {
        id: "buggy",
        title: "Buggy Gozo Tour",
        description:
          "Share the adventure with friends or family in a fun off-road buggy. Discover Gozo's most scenic spots while having a blast behind the wheel.",
        adultPrice: "€90 (driver)",
        childPrice: "€45 (passenger)",
        underFive: "Free under 5 years",
        hours: "09:30 – 17:00",
        notes: [
          "Full-day guided tour",
          "Lunch & boat transfer to Gozo included",
          "Hotel pickup & drop-off included",
        ],
        waMessage: "Hi! I'd like to book a Buggy Gozo Tour 🚙",
      },
      {
        id: "jeep",
        title: "Jeep Gozo Tour",
        description:
          "A guided jeep safari to Gozo's most iconic spots and hidden gems. Sit back, relax and let your guide reveal the island's best-kept secrets.",
        adultPrice: "€70",
        childPrice: "€45 (ages 5–15)",
        underFive: "Free under 5 years",
        hours: "09:30 – 17:00",
        notes: [
          "Full-day guided tour",
          "Lunch & boat transfer to Gozo included",
          "Hotel pickup & drop-off included",
        ],
        waMessage: "Hi! I'd like to book a Jeep Gozo Tour 🚙",
      },
    ],
  },
};
