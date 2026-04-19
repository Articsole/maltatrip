import { Star, Quote } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

interface Review {
  nameKey: string;
  countryKey: string;
  textKey: string;
  rating: number;
}

const reviews: Review[] = [
  { nameKey: "reviews.r1.name", countryKey: "reviews.r1.country", textKey: "reviews.r1.text", rating: 5 },
  { nameKey: "reviews.r2.name", countryKey: "reviews.r2.country", textKey: "reviews.r2.text", rating: 5 },
  { nameKey: "reviews.r3.name", countryKey: "reviews.r3.country", textKey: "reviews.r3.text", rating: 5 },
  { nameKey: "reviews.r4.name", countryKey: "reviews.r4.country", textKey: "reviews.r4.text", rating: 4 },
  { nameKey: "reviews.r5.name", countryKey: "reviews.r5.country", textKey: "reviews.r5.text", rating: 5 },
  { nameKey: "reviews.r6.name", countryKey: "reviews.r6.country", textKey: "reviews.r6.text", rating: 5 },
];

const Stars = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "fill-sunset text-sunset" : "fill-muted text-muted"
        }`}
      />
    ))}
  </div>
);

const ReviewsSection = () => {
  const { t } = useLanguage();

  const avg =
    reviews.reduce((s, r) => s + r.rating, 0) / reviews.length;

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-primary uppercase tracking-[0.2em] text-sm font-body font-semibold">
            {t("reviews.label")}
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            {t("reviews.title")}
          </h2>
          <div className="flex items-center justify-center gap-3">
            <Stars rating={Math.round(avg)} />
            <span className="font-body text-foreground font-semibold">
              {avg.toFixed(1)} / 5
            </span>
            <span className="font-body text-muted-foreground text-sm">
              ({reviews.length} {t("reviews.count")})
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <article
              key={i}
              className="relative bg-card border border-border rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/15" />
              <Stars rating={r.rating} />
              <p className="font-body text-foreground/90 mt-4 mb-6 leading-relaxed italic">
                "{t(r.textKey)}"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-sunset flex items-center justify-center text-primary-foreground font-display font-bold">
                  {t(r.nameKey).charAt(0)}
                </div>
                <div>
                  <div className="font-body font-semibold text-foreground text-sm">
                    {t(r.nameKey)}
                  </div>
                  <div className="font-body text-muted-foreground text-xs">
                    {t(r.countryKey)}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
