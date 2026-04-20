import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, MessageCircle, Clock, MapPin, Users, Baby, Info, Route } from "lucide-react";
import { tourCategories } from "@/data/tourDetails";
import { useLanguage } from "@/i18n/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const WHATSAPP_NUMBER = "35699822911";

const TourDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useLanguage();

  const category = slug ? tourCategories[slug] : undefined;
  if (!category) return <Navigate to="/" replace />;

  const openWhatsApp = (message: string) => {
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  // Combine a price value with an optional translated suffix (e.g. "€115 (driver — must be 21+...)")
  const composePrice = (price?: string, suffixKey?: string) => {
    if (!price) return undefined;
    if (!suffixKey) return price;
    return `${price} ${t(suffixKey)}`;
  };

  return (
    <main className="min-h-screen bg-background">
      <LanguageSwitcher />

      <div className="max-w-4xl mx-auto px-6 py-16">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground font-body text-sm mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          {t("exp.back")}
        </Link>

        <header className="mb-12">
          <span className="text-primary uppercase tracking-[0.2em] text-sm font-body font-semibold">
            {t("exp.label")}
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3">
            {t(category.titleKey)}
          </h1>
          <p className="text-muted-foreground font-body mt-4 max-w-2xl">
            {t(category.introKey)}
          </p>
        </header>

        <div className="space-y-6">
          {category.options.map((opt) => {
            const adultValue = composePrice(opt.adultPrice, opt.adultPriceKey);
            const childValue = composePrice(opt.childPrice, opt.childPriceKey);
            return (
              <article
                key={opt.id}
                className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-md"
              >
                <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-3">
                  {t(opt.titleKey)}
                </h2>
                {opt.descriptionKey && (
                  <p className="text-muted-foreground font-body mb-6 leading-relaxed">
                    {t(opt.descriptionKey)}
                  </p>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 font-body text-sm">
                  {adultValue && (
                    <Detail icon={<Users className="w-4 h-4 text-primary" />} label={t("tour.label.adults")} value={adultValue} />
                  )}
                  {childValue && (
                    <Detail icon={<Users className="w-4 h-4 text-primary" />} label={t("tour.label.children")} value={childValue} />
                  )}
                  {opt.underFiveKey && (
                    <Detail icon={<Baby className="w-4 h-4 text-primary" />} label={t("tour.label.toddlers")} value={t(opt.underFiveKey)} />
                  )}
                  {opt.hoursKey && (
                    <Detail icon={<Clock className="w-4 h-4 text-primary" />} label={t("tour.label.hours")} value={t(opt.hoursKey)} />
                  )}
                  {opt.scheduleKey && (
                    <Detail icon={<Clock className="w-4 h-4 text-primary" />} label={t("tour.label.schedule")} value={t(opt.scheduleKey)} fullWidth />
                  )}
                </div>

                {opt.departures && opt.departures.length > 0 && (
                  <div className="mb-6">
                    <h3 className="font-body font-semibold text-foreground mb-3 text-sm uppercase tracking-wider">
                      {t("tour.label.departures")}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {opt.departures.map((d, i) => (
                        <div
                          key={i}
                          className="bg-muted/40 border border-border rounded-xl p-4 font-body text-sm"
                        >
                          <div className="flex items-center gap-2 text-foreground font-semibold mb-1">
                            <MapPin className="w-4 h-4 text-primary" />
                            {t(d.fromKey)}
                          </div>
                          <div className="text-muted-foreground">{d.times}</div>
                          {d.durationKey && (
                            <div className="text-muted-foreground text-xs mt-1">
                              {t("tour.label.duration")}: {t(d.durationKey)}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {opt.noteKeys && opt.noteKeys.length > 0 && (
                  <ul className="mb-6 space-y-2">
                    {opt.noteKeys.map((n, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm font-body text-muted-foreground"
                      >
                        <Info className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <span>{t(n)}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {opt.routeStopsKey && (
                  <Accordion type="single" collapsible className="mb-6">
                    <AccordionItem value="route" className="border border-border rounded-xl bg-muted/30 px-4">
                      <AccordionTrigger className="font-body font-semibold text-foreground hover:no-underline">
                        <span className="flex items-center gap-2">
                          <Route className="w-4 h-4 text-primary" />
                          {t("tour.label.viewRoute")}
                        </span>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="font-body text-sm text-muted-foreground whitespace-pre-line leading-relaxed">
                          {t(opt.routeStopsKey)}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                )}

                <button
                  onClick={() => openWhatsApp(t(opt.waMessageKey))}
                  className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20bd5a] text-primary-foreground font-body font-semibold py-3 rounded-xl transition-all duration-300 hover:scale-[1.02]"
                >
                  <MessageCircle className="w-5 h-5" />
                  {t("exp.bookNow")}
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </main>
  );
};

const Detail = ({
  icon,
  label,
  value,
  fullWidth,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  fullWidth?: boolean;
}) => (
  <div className={fullWidth ? "sm:col-span-2" : ""}>
    <div className="flex items-center gap-2 text-muted-foreground text-xs uppercase tracking-wider mb-1">
      {icon}
      {label}
    </div>
    <div className="text-foreground font-semibold">{value}</div>
  </div>
);

export default TourDetail;
