import boatTrip from "@/assets/boat-trip.jpg";
import sunsetCruise from "@/assets/sunset-cruise.jpg";
import partyBoat from "@/assets/party-boat.jpg";
import barCrawl from "@/assets/bar-crawl.jpg";
import ExperienceCard from "./ExperienceCard";

const experiences = [
  {
    image: boatTrip,
    title: "Boat Tour",
    description: "Explore Malta's stunning coastline, hidden caves, and crystal clear waters on a guided group boat tour.",
    duration: "Full Day",
    groupSize: "Up to 12",
    whatsappMessage: "Hi! I'd like to book a Boat Tour 🚤",
  },
  {
    image: sunsetCruise,
    title: "Private Boat Tour",
    description: "A fully private boat experience tailored to you. Choose your route, stops, and pace for the ultimate Malta adventure.",
    duration: "Flexible",
    groupSize: "Private",
    whatsappMessage: "Hi! I'd like to book a Private Boat Tour 🛥️",
  },
  {
    image: partyBoat,
    title: "Bus Tour",
    description: "Discover Malta's historic temples, charming villages, and panoramic viewpoints on a comfortable guided bus tour.",
    duration: "Full Day",
    groupSize: "Up to 20",
    whatsappMessage: "Hi! I'd like to book a Bus Tour 🚌",
  },
  {
    image: barCrawl,
    title: "Quad Tour",
    description: "Hit the off-road trails and explore Malta's rugged countryside and coastal paths on an exciting quad bike adventure.",
    duration: "Half Day",
    groupSize: "Up to 10",
    whatsappMessage: "Hi! I'd like to book a Quad Tour 🏍️",
  },
];

const ExperiencesSection = () => {
  return (
    <section className="py-20 px-6 bg-background" id="experiences">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-primary uppercase tracking-[0.2em] text-sm font-body font-semibold">
            Our Experiences
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3">
            Choose Your Adventure
          </h2>
          <p className="text-muted-foreground font-body mt-4 max-w-lg mx-auto">
            Hand-picked experiences to make your Malta stay unforgettable. Tap to book instantly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.title} {...exp} delay={i * 150} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperiencesSection;
