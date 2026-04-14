import boatTrip from "@/assets/boat-trip.jpg";
import sunsetCruise from "@/assets/sunset-cruise.jpg";
import partyBoat from "@/assets/party-boat.jpg";
import barCrawl from "@/assets/bar-crawl.jpg";
import ExperienceCard from "./ExperienceCard";
import { useLanguage } from "@/i18n/LanguageContext";

const experiences = [
  {
    image: boatTrip,
    titleKey: "exp.boatTour.title",
    descKey: "exp.boatTour.desc",
    durationKey: "exp.boatTour.duration",
    groupKey: "exp.boatTour.group",
    waKey: "exp.boatTour.wa",
  },
  {
    image: sunsetCruise,
    titleKey: "exp.privateBoat.title",
    descKey: "exp.privateBoat.desc",
    durationKey: "exp.privateBoat.duration",
    groupKey: "exp.privateBoat.group",
    waKey: "exp.privateBoat.wa",
  },
  {
    image: partyBoat,
    titleKey: "exp.busTour.title",
    descKey: "exp.busTour.desc",
    durationKey: "exp.busTour.duration",
    groupKey: "exp.busTour.group",
    subOptions: [
      { labelKey: "exp.busTour.opt.north", waKey: "exp.busTour.wa.north" },
      { labelKey: "exp.busTour.opt.south", waKey: "exp.busTour.wa.south" },
      { labelKey: "exp.busTour.opt.gozo", waKey: "exp.busTour.wa.gozo" },
    ],
  },
  {
    image: barCrawl,
    titleKey: "exp.gozoTour.title",
    descKey: "exp.gozoTour.desc",
    durationKey: "exp.gozoTour.duration",
    groupKey: "exp.gozoTour.group",
    subOptions: [
      { labelKey: "exp.gozoTour.opt.quad", waKey: "exp.gozoTour.wa.quad" },
      { labelKey: "exp.gozoTour.opt.buggy", waKey: "exp.gozoTour.wa.buggy" },
      { labelKey: "exp.gozoTour.opt.jeep", waKey: "exp.gozoTour.wa.jeep" },
    ],
  },
];

const ExperiencesSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 px-6 bg-background" id="experiences">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-primary uppercase tracking-[0.2em] text-sm font-body font-semibold">
            {t("exp.label")}
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3">
            {t("exp.title")}
          </h2>
          <p className="text-muted-foreground font-body mt-4 max-w-lg mx-auto">
            {t("exp.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.titleKey} {...exp} delay={i * 150} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperiencesSection;
