import { MessageCircle, CalendarCheck, Waves } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const HowItWorks = () => {
  const { t } = useLanguage();

  const steps = [
    { icon: MessageCircle, titleKey: "how.step1.title", descKey: "how.step1.desc" },
    { icon: CalendarCheck, titleKey: "how.step2.title", descKey: "how.step2.desc" },
    { icon: Waves, titleKey: "how.step3.title", descKey: "how.step3.desc" },
  ];

  return (
    <section className="py-20 px-6 bg-sand-dark/50">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-primary uppercase tracking-[0.2em] text-sm font-body font-semibold">
          {t("how.label")}
        </span>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-14">
          {t("how.title")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step, i) => (
            <div key={step.titleKey} className="flex flex-col items-center opacity-0 animate-fade-up" style={{ animationDelay: `${i * 200}ms` }}>
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                <step.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">{t(step.titleKey)}</h3>
              <p className="text-muted-foreground font-body text-sm">{t(step.descKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
