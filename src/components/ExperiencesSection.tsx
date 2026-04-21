import boatTrip from "@/assets/boat-trip.jpg";
import sunsetCruise from "@/assets/sunset-cruise.jpg";
import busTour from "@/assets/bus-tour.jpg";
import barCrawl from "@/assets/bar-crawl.jpg";
import jetSki from "@/assets/jet-ski.jpg";
import ExperienceCard from "./ExperienceCard";
import { useLanguage } from "@/i18n/useLanguage";

const experiences = [
  {
    image: boatTrip,
    slug: "boat",
    titleKey: "exp.boatTour.title",
    descKey: "exp.boatTour.desc",
    durationKey: "exp.boatTour.duration",
    groupKey: "exp.boatTour.group",
  },
  {
    image: sunsetCruise,
    slug: "private-boat",
    titleKey: "exp.privateBoat.title",
    descKey: "exp.privateBoat.desc",
    durationKey: "exp.privateBoat.duration",
    groupKey: "exp.privateBoat.group",
  },
  {
    image: busTour,
    slug: "bus",
    titleKey: "exp.busTour.title",
    descKey: "exp.busTour.desc",
    durationKey: "exp.busTour.duration",
    groupKey: "exp.busTour.group",
  },
  {
    image: barCrawl,
    slug: "gozo",
    titleKey: "exp.gozoTour.title",
    descKey: "exp.gozoTour.desc",
    durationKey: "exp.gozoTour.duration",
    groupKey: "exp.gozoTour.group",
  },
  {
    image: jetSki,
    slug: "more",
    titleKey: "exp.moreOptions.title",
    descKey: "exp.moreOptions.desc",
    waMessageKey: "exp.moreOptions.wa",
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
            <ExperienceCard key={exp.slug} {...exp} delay={i * 150} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperiencesSection;
