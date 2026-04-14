import { Clock, Users, MessageCircle, ChevronRight } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

interface SubOption {
  labelKey: string;
  waKey: string;
}

interface ExperienceCardProps {
  image: string;
  titleKey: string;
  descKey: string;
  durationKey: string;
  groupKey: string;
  waKey?: string;
  subOptions?: SubOption[];
  delay?: number;
}

const WHATSAPP_NUMBER = "35699822911";

const ExperienceCard = ({
  image,
  titleKey,
  descKey,
  durationKey,
  groupKey,
  waKey,
  subOptions,
  delay = 0,
}: ExperienceCardProps) => {
  const { t } = useLanguage();
  const [showOptions, setShowOptions] = useState(false);

  const openWhatsApp = (message: string) => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div
      className="group bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 opacity-0 animate-fade-up border border-border"
      style={{ animationDelay: `${delay}ms` }}
    >
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
        <p className="text-muted-foreground font-body text-sm leading-relaxed mb-5">{t(descKey)}</p>

        <div className="flex items-center gap-4 text-muted-foreground text-sm font-body mb-6">
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-primary" />
            {t(durationKey)}
          </span>
          <span className="flex items-center gap-1.5">
            <Users className="w-4 h-4 text-primary" />
            {t(groupKey)}
          </span>
        </div>

        {!showOptions ? (
          <button
            onClick={() => {
              if (subOptions && subOptions.length > 0) {
                setShowOptions(true);
              } else if (waKey) {
                openWhatsApp(t(waKey));
              }
            }}
            className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20bd5a] text-primary-foreground font-body font-semibold py-3 rounded-xl transition-all duration-300 hover:scale-[1.02]"
          >
            <MessageCircle className="w-5 h-5" />
            {t("exp.bookNow")}
          </button>
        ) : (
          <div className="space-y-2">
            <p className="text-sm font-body font-medium text-foreground mb-3">{t("exp.selectOption")}</p>
            {subOptions!.map((opt) => (
              <button
                key={opt.labelKey}
                onClick={() => openWhatsApp(t(opt.waKey))}
                className="flex items-center justify-between w-full bg-[#25D366] hover:bg-[#20bd5a] text-primary-foreground font-body font-semibold py-3 px-4 rounded-xl transition-all duration-300 hover:scale-[1.02]"
              >
                <span className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  {t(opt.labelKey)}
                </span>
                <ChevronRight className="w-4 h-4" />
              </button>
            ))}
            <button
              onClick={() => setShowOptions(false)}
              className="w-full text-muted-foreground hover:text-foreground font-body text-sm py-2 transition-colors"
            >
              {t("exp.back")}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExperienceCard;
