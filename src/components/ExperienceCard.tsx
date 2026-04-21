import { Clock, Users, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/useLanguage";

interface ExperienceCardProps {
  image: string;
  titleKey: string;
  descKey: string;
  durationKey?: string;
  groupKey?: string;
  slug: string;
  delay?: number;
  waMessage?: string;
}

const ExperienceCard = ({
  image,
  titleKey,
  descKey,
  durationKey,
  groupKey,
  slug,
  delay = 0,
  waMessage,
}: ExperienceCardProps) => {
  const { t } = useLanguage();

  const phoneNumber = "+35699822911";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(waMessage || "")}`;

  const CardContent = (
    <div className="group bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 opacity-0 animate-fade-up border border-border">
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={t(titleKey)}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
      </div>

      <div className="p-6">
        <h3 className="font-display text-2xl font-semibold text-foreground mb-2">{t(titleKey)}</h3>
        <p className="text-muted-foreground font-body text-sm leading-relaxed mb-5 line-clamp-3">
          {t(descKey)}
        </p>

        {(durationKey || groupKey) && (
          <div className="flex items-center gap-4 text-muted-foreground text-sm font-body mb-6">
            {durationKey && (
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-primary" />
                {t(durationKey)}
              </span>
            )}
            {groupKey && (
              <span className="flex items-center gap-1.5">
                <Users className="w-4 h-4 text-primary" />
                {t(groupKey)}
              </span>
            )}
          </div>
        )}

        <a
          href={waMessage ? whatsappUrl : `/tour/${slug}`}
          target={waMessage ? "_blank" : undefined}
          rel={waMessage ? "noopener noreferrer" : undefined}
          className="flex items-center justify-center gap-2 w-full bg-primary hover:bg-primary/90 text-primary-foreground font-body font-semibold py-3 rounded-xl transition-all duration-300 group-hover:scale-[1.02]"
        >
          {waMessage ? t("exp.bookNow") : t("exp.viewOptions")}
          <ChevronRight className="w-5 h-5" />
        </a>
      </div>
    </div>
  );

  if (waMessage) {
    return (
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
        style={{ animationDelay: `${delay}ms` }}
      >
        {CardContent}
      </a>
    );
  }

  return (
    <Link
      to={`/tour/${slug}`}
      className="block"
      style={{ animationDelay: `${delay}ms` }}
    >
      {CardContent}
    </Link>
  );
};

export default ExperienceCard;
