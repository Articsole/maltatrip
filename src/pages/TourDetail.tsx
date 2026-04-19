import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, MessageCircle, Clock, MapPin, Users, Baby, Info } from "lucide-react";
import { tourCategories } from "@/data/tourDetails";
import { useLanguage } from "@/i18n/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";

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
            {category.intro}
          </p>
        </header>

        <div className="space-y-6">
          {category.options.map((opt) => (
            <article
              key={opt.id}
              className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-md"
            >
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-3">
                {opt.title}
              </h2>
              {opt.description && (
                <p className="text-muted-foreground font-body mb-6 leading-relaxed">
                  {opt.description}
                </p>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 font-body text-sm">
                {opt.adultPrice && (
                  <Detail icon={<Users className="w-4 h-4 text-primary" />} label="Adults" value={opt.adultPrice} />
                )}
                {opt.childPrice && (
                  <Detail icon={<Users className="w-4 h-4 text-primary" />} label="Children" value={opt.childPrice} />
                )}
                {opt.underFive && (
                  <Detail icon={<Baby className="w-4 h-4 text-primary" />} label="Toddlers" value={opt.underFive} />
                )}
                {opt.hours && (
                  <Detail icon={<Clock className="w-4 h-4 text-primary" />} label="Hours" value={opt.hours} />
                )}
                {opt.schedule && (
                  <Detail icon={<Clock className="w-4 h-4 text-primary" />} label="Schedule" value={opt.schedule} fullWidth />
                )}
              </div>

              {opt.departures && opt.departures.length > 0 && (
                <div className="mb-6">
                  <h3 className="font-body font-semibold text-foreground mb-3 text-sm uppercase tracking-wider">
                    Departures
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {opt.departures.map((d, i) => (
                      <div
                        key={i}
                        className="bg-muted/40 border border-border rounded-xl p-4 font-body text-sm"
                      >
                        <div className="flex items-center gap-2 text-foreground font-semibold mb-1">
                          <MapPin className="w-4 h-4 text-primary" />
                          From {d.from}
                        </div>
                        <div className="text-muted-foreground">{d.times}</div>
                        {d.duration && (
                          <div className="text-muted-foreground text-xs mt-1">
                            Duration: {d.duration}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {opt.notes && opt.notes.length > 0 && (
                <ul className="mb-6 space-y-2">
                  {opt.notes.map((n, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm font-body text-muted-foreground"
                    >
                      <Info className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span>{n}</span>
                    </li>
                  ))}
                </ul>
              )}

              <button
                onClick={() => openWhatsApp(opt.waMessage)}
                className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20bd5a] text-primary-foreground font-body font-semibold py-3 rounded-xl transition-all duration-300 hover:scale-[1.02]"
              >
                <MessageCircle className="w-5 h-5" />
                {t("exp.bookNow")}
              </button>
            </article>
          ))}
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
