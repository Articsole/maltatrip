import heroImg from "@/assets/hero-boat.jpg";
import { Anchor, MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/35699999999?text=Hi!%20I'm%20staying%20at%20your%20Airbnb%20and%20I'd%20like%20to%20book%20a%20trip!";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <img
        src={heroImg}
        alt="Crystal clear waters of Malta with traditional boat"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/20 to-foreground/60" />
      
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Anchor className="w-5 h-5 text-sunset" />
          <span className="text-sand uppercase tracking-[0.25em] text-sm font-body font-medium">
            Exclusive Guest Experiences
          </span>
        </div>
        
        <h1 className="font-display text-5xl md:text-7xl font-bold text-primary-foreground leading-tight mb-6">
          Explore Malta
          <span className="block text-sunset">By Sea & Night</span>
        </h1>
        
        <p className="text-sand/90 text-lg md:text-xl font-body font-light mb-10 max-w-xl mx-auto leading-relaxed">
          Unforgettable boat trips & bar crawls curated exclusively for our Airbnb guests. Book instantly via WhatsApp.
        </p>
        
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-primary-foreground font-body font-semibold text-lg px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
        >
          <MessageCircle className="w-6 h-6" />
          Book via WhatsApp
        </a>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
