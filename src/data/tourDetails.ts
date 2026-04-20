// Detailed tour options shown on the dedicated tour pages.
// All user-facing strings use i18n keys (resolved via useLanguage().t).
// Prices remain language-agnostic — they're plain values rendered as-is.

export interface TourDeparture {
  fromKey: string;        // i18n key for "From X"
  times: string;          // raw time range
  durationKey?: string;   // i18n key for duration string (e.g. "8 hours")
}

export interface TourOption {
  id: string;
  titleKey: string;
  descriptionKey?: string;
  adultPrice?: string;
  adultPriceKey?: string;     // optional translatable suffix appended to adult price
  childPrice?: string;
  childPriceKey?: string;
  underFiveKey?: string;      // fully translated value for under-5 row
  departures?: TourDeparture[];
  scheduleKey?: string;
  hoursKey?: string;
  noteKeys?: string[];
  waMessageKey: string;
}

export interface TourCategory {
  slug: string;
  titleKey: string;
  introKey: string;
  options: TourOption[];
}

export const tourCategories: Record<string, TourCategory> = {
  boat: {
    slug: "boat",
    titleKey: "exp.boatTour.title",
    introKey: "tour.boat.intro",
    options: [
      {
        id: "gozo-comino",
        titleKey: "tour.boat.gozoComino.title",
        descriptionKey: "tour.boat.gozoComino.desc",
        adultPrice: "€42",
        childPrice: "€30",
        childPriceKey: "tour.ages.5to15",
        underFiveKey: "tour.freeUnder5",
        departures: [
          { fromKey: "tour.from.sliema", times: "10:30 – 18:30", durationKey: "tour.duration.8h" },
          { fromKey: "tour.from.bugibba", times: "11:30 – 17:30", durationKey: "tour.duration.6h" },
        ],
        noteKeys: ["tour.note.hotelTransport"],
        waMessageKey: "tour.boat.gozoComino.wa",
      },
      {
        id: "comino",
        titleKey: "tour.boat.comino.title",
        descriptionKey: "tour.boat.comino.desc",
        adultPrice: "€30",
        childPrice: "€20",
        childPriceKey: "tour.ages.5to15",
        underFiveKey: "tour.freeUnder5",
        departures: [
          { fromKey: "tour.from.sliema", times: "10:30 – 18:30", durationKey: "tour.duration.8h" },
          { fromKey: "tour.from.bugibba", times: "11:30 – 17:30", durationKey: "tour.duration.6h" },
        ],
        noteKeys: ["tour.note.hotelTransport"],
        waMessageKey: "tour.boat.comino.wa",
      },
      {
        id: "harbour-cruise",
        titleKey: "tour.boat.harbour.title",
        descriptionKey: "tour.boat.harbour.desc",
        adultPrice: "€20",
        childPrice: "€12",
        childPriceKey: "tour.ages.5to15",
        underFiveKey: "tour.freeUnder5",
        scheduleKey: "tour.boat.harbour.schedule",
        noteKeys: [
          "tour.boat.harbour.note.departure",
          "tour.boat.harbour.note.duration",
          "tour.boat.harbour.note.discover",
        ],
        waMessageKey: "tour.boat.harbour.wa",
      },
    ],
  },

  "private-boat": {
    slug: "private-boat",
    titleKey: "exp.privateBoat.title",
    introKey: "tour.privateBoat.intro",
    options: [
      {
        id: "private-charter",
        titleKey: "tour.privateBoat.charter.title",
        descriptionKey: "tour.privateBoat.charter.desc",
        noteKeys: [
          "tour.privateBoat.charter.note.route",
          "tour.privateBoat.charter.note.guests",
          "tour.privateBoat.charter.note.boats",
          "tour.privateBoat.charter.note.personalised",
          "tour.privateBoat.charter.note.contact",
        ],
        waMessageKey: "tour.privateBoat.charter.wa",
      },
    ],
  },

  bus: {
    slug: "bus",
    titleKey: "exp.busTour.title",
    introKey: "tour.bus.intro",
    options: [
      {
        id: "north",
        titleKey: "tour.bus.north.title",
        descriptionKey: "tour.bus.north.desc",
        adultPrice: "€25",
        childPrice: "€16",
        childPriceKey: "tour.ages.5to15",
        underFiveKey: "tour.freeUnder5",
        hoursKey: "tour.bus.hours.malta",
        waMessageKey: "tour.bus.north.wa",
      },
      {
        id: "south",
        titleKey: "tour.bus.south.title",
        descriptionKey: "tour.bus.south.desc",
        adultPrice: "€25",
        childPrice: "€16",
        childPriceKey: "tour.ages.5to15",
        underFiveKey: "tour.freeUnder5",
        hoursKey: "tour.bus.hours.malta",
        waMessageKey: "tour.bus.south.wa",
      },
      {
        id: "gozo-bus",
        titleKey: "tour.bus.gozo.title",
        descriptionKey: "tour.bus.gozo.desc",
        adultPrice: "€25",
        childPrice: "€16",
        childPriceKey: "tour.ages.5to15",
        underFiveKey: "tour.freeUnder5",
        hoursKey: "tour.bus.hours.gozo",
        noteKeys: ["tour.bus.gozo.note.transport"],
        waMessageKey: "tour.bus.gozo.wa",
      },
    ],
  },

  gozo: {
    slug: "gozo",
    titleKey: "exp.gozoTour.title",
    introKey: "tour.gozo.intro",
    options: [
      {
        id: "quad",
        titleKey: "tour.gozo.quad.title",
        descriptionKey: "tour.gozo.quad.desc",
        adultPrice: "€115",
        adultPriceKey: "tour.gozo.driver21",
        childPrice: "€80",
        childPriceKey: "tour.gozo.passenger5",
        hoursKey: "tour.duration.6h",
        noteKeys: [
          "tour.gozo.note.boat",
          "tour.gozo.note.hotel",
          "tour.gozo.note.lunch",
        ],
        waMessageKey: "tour.gozo.quad.wa",
      },
      {
        id: "buggy",
        titleKey: "tour.gozo.buggy.title",
        descriptionKey: "tour.gozo.buggy.desc",
        adultPrice: "€115",
        adultPriceKey: "tour.gozo.driver21",
        childPrice: "€80",
        childPriceKey: "tour.gozo.passenger3",
        hoursKey: "tour.duration.6h",
        noteKeys: [
          "tour.gozo.note.boat",
          "tour.gozo.note.hotel",
          "tour.gozo.note.lunch",
        ],
        waMessageKey: "tour.gozo.buggy.wa",
      },
      {
        id: "jeep",
        titleKey: "tour.gozo.jeep.title",
        descriptionKey: "tour.gozo.jeep.desc",
        adultPrice: "€80",
        childPrice: "€65",
        childPriceKey: "tour.ages.3to10",
        underFiveKey: "tour.gozo.freeUnder3",
        hoursKey: "tour.duration.6h",
        noteKeys: [
          "tour.gozo.note.boat",
          "tour.gozo.note.hotel",
          "tour.gozo.jeep.note.lunch",
        ],
        waMessageKey: "tour.gozo.jeep.wa",
      },
    ],
  },
};
