import { Clock, Users, MessageCircle } from "lucide-react";

interface ExperienceCardProps {
  image: string;
  title: string;
  description: string;
  duration: string;
  groupSize: string;
  whatsappMessage: string;
  delay?: number;
}

const WHATSAPP_NUMBER = "35699822911";

const ExperienceCard = ({
  image,
  title,
  description,
  duration,
  groupSize,
  
  whatsappMessage,
  delay = 0,
}: ExperienceCardProps) => {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div
      className="group bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 opacity-0 animate-fade-up border border-border"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
      </div>

      <div className="p-6">
        <h3 className="font-display text-2xl font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground font-body text-sm leading-relaxed mb-5">{description}</p>

        <div className="flex items-center gap-4 text-muted-foreground text-sm font-body mb-6">
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-primary" />
            {duration}
          </span>
          <span className="flex items-center gap-1.5">
            <Users className="w-4 h-4 text-primary" />
            {groupSize}
          </span>
        </div>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20bd5a] text-primary-foreground font-body font-semibold py-3 rounded-xl transition-all duration-300 hover:scale-[1.02]"
        >
          <MessageCircle className="w-5 h-5" />
          Book Now
        </a>
      </div>
    </div>
  );
};

export default ExperienceCard;
