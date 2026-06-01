import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { MessageCircle, ArrowLeft, Check } from "lucide-react";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Footer from "@/components/Footer";

const WHATSAPP_NUMBER = "35699822911";
const SITE_URL = "https://travelingmalta.com";

export interface SeoLandingProps {
  slug: string;
  title: string;
  metaDescription: string;
  h1: string;
  intro: string;
  bullets: string[];
  sections: { heading: string; body: string }[];
  faqs: { q: string; a: string }[];
  ctaMessage: string;
  ctaLabel: string;
  relatedSlug?: string;
  relatedLabel?: string;
}

const SeoLanding = ({
  slug,
  title,
  metaDescription,
  h1,
  intro,
  bullets,
  sections,
  faqs,
  ctaMessage,
  ctaLabel,
  relatedSlug,
  relatedLabel,
}: SeoLandingProps) => {
  const canonical = `${SITE_URL}/${slug}`;
  const openWhatsApp = () =>
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(ctaMessage)}`,
      "_blank"
    );

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: h1,
    description: metaDescription,
    url: canonical,
    touristType: "Leisure travelers, families, couples, groups",
    provider: {
      "@type": "TravelAgency",
      name: "Malta Trip",
      telephone: "+35699822911",
      areaServed: "Malta",
      url: SITE_URL,
    },
  };

  return (
    <main className="min-h-screen bg-background">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(serviceJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Helmet>

      <LanguageSwitcher />

      <article className="max-w-4xl mx-auto px-6 py-16">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground font-body text-sm mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </Link>

        <header className="mb-10">
          <span className="text-primary uppercase tracking-[0.2em] text-sm font-body font-semibold">
            Malta · Mediterranean
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3">
            {h1}
          </h1>
          <p className="text-muted-foreground font-body mt-4 text-lg leading-relaxed">
            {intro}
          </p>
        </header>

        <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-md mb-10">
          <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
            What's included
          </h2>
          <ul className="space-y-3 font-body">
            {bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-3 text-foreground">
                <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <button
            onClick={openWhatsApp}
            className="mt-6 flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20bd5a] text-primary-foreground font-body font-semibold py-3 rounded-xl transition-all duration-300 hover:scale-[1.02]"
          >
            <MessageCircle className="w-5 h-5" />
            {ctaLabel}
          </button>
        </div>

        {sections.map((s, i) => (
          <section key={i} className="mb-10">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-3">
              {s.heading}
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed whitespace-pre-line">
              {s.body}
            </p>
          </section>
        ))}

        <section className="mb-10">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-6">
            Frequently asked questions
          </h2>
          <div className="space-y-5">
            {faqs.map((f, i) => (
              <div
                key={i}
                className="bg-muted/40 border border-border rounded-xl p-5"
              >
                <h3 className="font-body font-semibold text-foreground mb-2">
                  {f.q}
                </h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">
                  {f.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        <div className="bg-primary/10 border border-primary/30 rounded-2xl p-6 md:p-8 text-center">
          <h2 className="font-display text-2xl font-semibold text-foreground mb-3">
            Ready to book?
          </h2>
          <p className="text-muted-foreground font-body mb-5">
            Message us on WhatsApp — we reply fast and tailor the trip to your group.
          </p>
          <button
            onClick={openWhatsApp}
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-primary-foreground font-body font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:scale-[1.02]"
          >
            <MessageCircle className="w-5 h-5" />
            {ctaLabel}
          </button>
        </div>

        {relatedSlug && relatedLabel && (
          <div className="mt-10 text-center">
            <Link
              to={`/${relatedSlug}`}
              className="text-primary font-body underline underline-offset-4"
            >
              {relatedLabel}
            </Link>
          </div>
        )}
      </article>

      <Footer />
    </main>
  );
};

export default SeoLanding;
