import { MessageCircle, CalendarCheck, Waves } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    title: "Send a Message",
    description: "Tap any 'Book Now' button to open WhatsApp with a pre-filled message.",
  },
  {
    icon: CalendarCheck,
    title: "Confirm Your Date",
    description: "We'll reply within minutes to confirm availability and finalize your booking.",
  },
  {
    icon: Waves,
    title: "Enjoy Malta!",
    description: "Show up and have the time of your life. We handle everything else.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 px-6 bg-sand-dark/50">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-primary uppercase tracking-[0.2em] text-sm font-body font-semibold">
          Simple Booking
        </span>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-14">
          How It Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step, i) => (
            <div key={step.title} className="flex flex-col items-center opacity-0 animate-fade-up" style={{ animationDelay: `${i * 200}ms` }}>
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                <step.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-muted-foreground font-body text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
