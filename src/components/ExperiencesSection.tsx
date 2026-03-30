import boatTrip from "@/assets/boat-trip.jpg";
import barCrawl from "@/assets/bar-crawl.jpg";
import sunsetCruise from "@/assets/sunset-cruise.jpg";
import partyBoat from "@/assets/party-boat.jpg";
import ExperienceCard from "./ExperienceCard";

const experiences = [
  {
    image: boatTrip,
    title: "Blue Lagoon Boat Trip",
    description: "Sail to the iconic Blue Lagoon in Comino. Crystal clear turquoise waters, snorkeling, and a BBQ lunch on board.",
    duration: "Full Day",
    groupSize: "Up to 12",
    price: "€75/person",
    whatsappMessage: "Hi! I'd like to book the Blue Lagoon Boat Trip 🚤",
  },
  {
    image: sunsetCruise,
    title: "Sunset Champagne Cruise",
    description: "A romantic sunset cruise along the Valletta harbour with champagne, canapés, and breathtaking golden hour views.",
    duration: "3 Hours",
    groupSize: "Up to 8",
    price: "€95/person",
    whatsappMessage: "Hi! I'd like to book the Sunset Champagne Cruise 🌅",
  },
  {
    image: partyBoat,
    title: "Party Boat Adventure",
    description: "The ultimate party on water! DJ, open bar, swimming stops at hidden caves and the Blue Lagoon.",
    duration: "6 Hours",
    groupSize: "Up to 20",
    price: "€65/person",
    whatsappMessage: "Hi! I'd like to book the Party Boat Adventure 🎉",
  },
  {
    image: barCrawl,
    title: "Valletta Bar Crawl",
    description: "Discover Malta's best rooftop bars and hidden speakeasies in Valletta. Includes welcome shots and skip-the-line entry.",
    duration: "4 Hours",
    groupSize: "Up to 15",
    price: "€45/person",
    whatsappMessage: "Hi! I'd like to book the Valletta Bar Crawl 🍸",
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
