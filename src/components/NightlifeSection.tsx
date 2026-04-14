import { Wine, UtensilsCrossed, Star } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const NightlifeSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 px-6 bg-background" id="nightlife">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-primary uppercase tracking-[0.2em] text-sm font-body font-semibold">
            {t("night.label")}
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3">
            {t("night.title")}
          </h2>
          <p className="text-muted-foreground font-body mt-4 max-w-2xl mx-auto leading-relaxed">
            {t("night.intro")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div className="bg-card rounded-2xl p-8 border border-border shadow-md opacity-0 animate-fade-up">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-5">
              <Wine className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display text-2xl font-semibold text-foreground mb-3">
              {t("night.bars.title")}
            </h3>
            <p className="text-muted-foreground font-body text-sm leading-relaxed">
              {t("night.bars.desc")}
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 border border-border shadow-md opacity-0 animate-fade-up" style={{ animationDelay: "150ms" }}>
            <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-5">
              <UtensilsCrossed className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="font-display text-2xl font-semibold text-foreground mb-3">
              {t("night.restaurants.title")}
            </h3>
            <p className="text-muted-foreground font-body text-sm leading-relaxed">
              {t("night.restaurants.desc")}
            </p>
          </div>
        </div>

        <div className="bg-card rounded-2xl p-8 border border-border shadow-md opacity-0 animate-fade-up" style={{ animationDelay: "300ms" }}>
          <div className="flex items-center gap-3 mb-5">
            <Star className="w-6 h-6 text-sunset" />
            <h3 className="font-display text-xl font-semibold text-foreground">
              {t("night.tips.title")}
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {["tip1", "tip2", "tip3", "tip4"].map((tip) => (
              <p key={tip} className="text-muted-foreground font-body text-sm">
                {t(`night.tips.${tip}`)}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NightlifeSection;
