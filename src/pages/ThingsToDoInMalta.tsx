import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { MessageCircle, ArrowLeft, MapPin, Sun, Compass, Utensils, Landmark, Waves } from "lucide-react";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Footer from "@/components/Footer";

const WHATSAPP_NUMBER = "35699822911";
const SITE_URL = "https://travelingmalta.com";
const CANONICAL = `${SITE_URL}/things-to-do-in-malta`;
const TITLE = "Things to Do in Malta — 25 Best Activities & Tours (2026 Guide)";
const META =
  "The complete local guide to things to do in Malta: best beaches, Comino & Blue Lagoon boat trips, Valletta, Mdina, Gozo, food and nightlife. Book by WhatsApp.";

const ctaMessage =
  "Hi! I'm visiting Malta and I'd like advice on the best things to do. Can you help me plan?";
const openWhatsApp = () =>
  window.open(
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(ctaMessage)}`,
    "_blank"
  );

type Item = { name: string; blurb: string; tip?: string };
type Group = { icon: typeof Sun; title: string; items: Item[] };

const groups: Group[] = [
  {
    icon: Waves,
    title: "Sea, beaches & boat trips",
    items: [
      {
        name: "Blue Lagoon, Comino",
        blurb:
          "The bucket-list swim spot — turquoise shallows between Malta and Gozo. Best reached by private boat from Sliema or Bugibba.",
        tip: "Go on a weekday morning before 10am to skip the crowds.",
      },
      {
        name: "Crystal Lagoon & Comino caves",
        blurb:
          "Quieter than the Blue Lagoon, reachable only by boat. Snorkel through sea caves carved into the cliffs.",
      },
      {
        name: "Private boat charter around Malta",
        blurb:
          "The single best way to see the island. Skipper, snorkel gear and stops at hidden coves included.",
      },
      {
        name: "Golden Bay & Għajn Tuffieħa",
        blurb:
          "Malta's two best sand beaches, side by side on the north-west coast. Stay for sunset.",
      },
      {
        name: "Blue Grotto sea caves, Wied iż-Żurrieq",
        blurb:
          "Small fishing boats run 20-minute tours into a cluster of luminescent sea caves. Go before 11am for the best light.",
      },
      {
        name: "Snorkelling at Għar Lapsi",
        blurb:
          "Clear water, easy ladder entry and reef fish a few metres from shore. A favourite with locals.",
      },
    ],
  },
  {
    icon: Landmark,
    title: "History & UNESCO sites",
    items: [
      {
        name: "Valletta old town",
        blurb:
          "A walled UNESCO capital you can cross in 20 minutes. St John's Co-Cathedral, Upper Barrakka Gardens and the saluting battery at noon.",
      },
      {
        name: "Mdina, the Silent City",
        blurb:
          "Malta's medieval walled city. Visit late afternoon when day-trippers leave and the bastions glow gold.",
      },
      {
        name: "The Three Cities (Birgu, Senglea, Cospicua)",
        blurb:
          "Skip the Valletta crowds and explore where the Knights of St John first lived. Take the traditional dgħajsa water taxi across the harbour.",
      },
      {
        name: "Ħal Saflieni Hypogeum",
        blurb:
          "A 5,000-year-old underground temple — older than the Pyramids. Tickets must be booked weeks ahead.",
      },
      {
        name: "Ħaġar Qim & Mnajdra temples",
        blurb:
          "Megalithic temples on a cliff above the sea. Pair with the Blue Grotto for a half-day trip.",
      },
      {
        name: "Rabat & St Paul's Catacombs",
        blurb:
          "Early Christian burial complex next to Mdina. Cool, quiet and rarely busy.",
      },
    ],
  },
  {
    icon: Compass,
    title: "Day trips & islands",
    items: [
      {
        name: "Gozo: Citadel, Ramla Bay, Azure Window cliffs",
        blurb:
          "Catch the ferry from Ċirkewwa and rent a car or join a guided tour. Greener, slower and more authentic than Malta.",
      },
      {
        name: "Bus & boat combo tour",
        blurb:
          "Cover Mdina, Dingli Cliffs and a Comino swim in one full day — the easiest way to see the island highlights.",
      },
      {
        name: "Marsaxlokk fishing village",
        blurb:
          "Painted luzzu boats in the harbour and Malta's best Sunday fish market.",
      },
      {
        name: "Popeye Village & Anchor Bay",
        blurb:
          "The film-set turned family attraction. The bay below is great for swimming if you skip the entry.",
      },
    ],
  },
  {
    icon: Utensils,
    title: "Food, drink & nightlife",
    items: [
      {
        name: "Pastizzi & ftira tasting",
        blurb:
          "Flaky ricotta or pea pastries and Malta's traditional sourdough flatbread — eat them at a village pastizzeria, not a tourist café.",
      },
      {
        name: "Rabbit stew (fenkata)",
        blurb:
          "The Maltese national dish. Best in family-run restaurants in Mġarr.",
      },
      {
        name: "Sunset wine on the Sliema or St Julian's seafront",
        blurb:
          "Watch the harbour ferries cross the bay with a glass of local Gellewża.",
      },
      {
        name: "Paceville nightlife",
        blurb:
          "Loud, young, late. Skip if you're 30+ — head to Strait Street in Valletta for cocktails instead.",
      },
    ],
  },
  {
    icon: Sun,
    title: "Nature & viewpoints",
    items: [
      {
        name: "Dingli Cliffs at sunset",
        blurb:
          "Malta's highest point. Bring a takeaway pastizzi and watch the sun drop into the sea.",
      },
      {
        name: "Buskett Gardens",
        blurb:
          "The island's only real woodland. A welcome break from limestone and sea on a hot day.",
      },
      {
        name: "Salt pans of Marsaskala & Gozo",
        blurb:
          "Geometric checkerboards carved into the coast — best photographed at golden hour.",
      },
      {
        name: "Walking the Victoria Lines",
        blurb:
          "A 12 km Victorian-era defensive wall cutting across the north of Malta. The full hike takes a half-day.",
      },
      {
        name: "Filfla island silhouette from Hagar Qim",
        blurb:
          "A small uninhabited islet 5 km offshore. Visible from the southern cliffs — one of Malta's most photographed views.",
      },
    ],
  },
];

const faqs = [
  {
    q: "What are the must-do things in Malta for first-time visitors?",
    a: "If you only have 3 days, do: (1) a boat trip to Comino and the Blue Lagoon, (2) a walking afternoon in Valletta plus sunset in Mdina, and (3) a day in Gozo. These three cover the sea, the history and the slower island side of Malta.",
  },
  {
    q: "What's the best time of year to visit Malta?",
    a: "May, June and September are ideal — sea temperatures around 22–25°C, fewer crowds and lower prices than peak July–August. October is still warm enough to swim. Winters are mild (15°C) and great for history and hiking.",
  },
  {
    q: "How do you get around Malta?",
    a: "Public buses cover the whole island cheaply but are slow in summer. For freedom we recommend a private driver or a guided bus & boat tour. Renting a car is fine but parking in Valletta and Sliema is difficult.",
  },
  {
    q: "Is Malta good for families with kids?",
    a: "Yes. Calm, shallow swimming bays, short driving distances, English spoken everywhere, and family-friendly boat trips. Popeye Village, the Blue Lagoon and Mdina are top hits with children.",
  },
  {
    q: "Do I need to book activities in advance?",
    a: "In July and August, yes — Comino boat trips and Hypogeum tickets sell out. In shoulder season you can usually book a day or two ahead. WhatsApp us and we'll arrange everything for your dates.",
  },
];

const internalLinks = [
  { href: "/boat-trips-malta", label: "Comino & Blue Lagoon boat trips" },
  { href: "/boat-rental-malta", label: "Private boat rental in Malta" },
  { href: "/bus-and-boat-tour-malta", label: "Full-day bus & boat tour" },
];

const ThingsToDoInMalta = () => {
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Best things to do in Malta",
    url: CANONICAL,
    itemListElement: groups
      .flatMap((g) => g.items)
      .map((it, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: it.name,
        description: it.blurb,
      })),
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Things to do in Malta", item: CANONICAL },
    ],
  };

  return (
    <main className="min-h-screen bg-background">
      <Helmet>
        <title>{TITLE}</title>
        <meta name="description" content={META} />
        <link rel="canonical" href={CANONICAL} />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={META} />
        <meta property="og:url" content={CANONICAL} />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">{JSON.stringify(itemListJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd)}</script>
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
            Local guide · Malta
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 leading-tight">
            Things to Do in Malta: 25 Best Activities & Local Tips
          </h1>
          <p className="text-muted-foreground font-body mt-5 text-lg leading-relaxed">
            Malta packs UNESCO cities, Caribbean-blue swimming bays, megalithic temples
            and one of the Mediterranean's best food scenes into an island you can drive
            across in an hour. This guide is written by locals who host travellers every
            week — the same places we send our own Airbnb guests to.
          </p>
          <p className="text-muted-foreground font-body mt-3 leading-relaxed">
            Below: the 25 things actually worth your time, grouped by mood — sea days,
            history, day trips, food and viewpoints — plus a short FAQ and a way to
            message us directly on WhatsApp to plan it together.
          </p>
        </header>

        <nav
          aria-label="On this page"
          className="bg-muted/40 border border-border rounded-2xl p-6 mb-12"
        >
          <h2 className="font-display text-xl font-semibold text-foreground mb-3">
            Jump to a section
          </h2>
          <ul className="grid sm:grid-cols-2 gap-2 font-body text-sm">
            {groups.map((g) => (
              <li key={g.title}>
                <a
                  href={`#${g.title.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                  className="text-primary hover:underline underline-offset-4"
                >
                  {g.title}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#faq"
                className="text-primary hover:underline underline-offset-4"
              >
                FAQ
              </a>
            </li>
          </ul>
        </nav>

        {groups.map((g) => {
          const Icon = g.icon;
          const id = g.title.toLowerCase().replace(/[^a-z]+/g, "-");
          return (
            <section key={g.title} id={id} className="mb-14 scroll-mt-20">
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                  <Icon className="w-5 h-5" />
                </span>
                <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground">
                  {g.title}
                </h2>
              </div>
              <div className="grid gap-5">
                {g.items.map((it) => (
                  <div
                    key={it.name}
                    className="bg-card border border-border rounded-xl p-5 shadow-sm"
                  >
                    <h3 className="font-display text-lg font-semibold text-foreground flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-primary mt-1.5 shrink-0" />
                      {it.name}
                    </h3>
                    <p className="text-muted-foreground font-body text-[15px] leading-relaxed mt-2">
                      {it.blurb}
                    </p>
                    {it.tip && (
                      <p className="text-foreground/80 font-body text-sm mt-3 italic border-l-2 border-primary/40 pl-3">
                        Local tip — {it.tip}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          );
        })}

        <section className="mb-14 bg-card border border-border rounded-2xl p-6 md:p-8">
          <h2 className="font-display text-2xl font-semibold text-foreground mb-3">
            The fastest way to actually do these
          </h2>
          <p className="text-muted-foreground font-body leading-relaxed mb-5">
            Most of the highlights above are stitched together by sea or by road. Two
            services from us cover 80% of this list in two days:
          </p>
          <ul className="space-y-3 font-body">
            {internalLinks.map((l) => (
              <li key={l.href}>
                <Link
                  to={l.href}
                  className="text-primary hover:underline underline-offset-4 font-semibold"
                >
                  → {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section id="faq" className="mb-12 scroll-mt-20">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-6">
            Frequently asked questions
          </h2>
          <div className="space-y-5">
            {faqs.map((f) => (
              <div
                key={f.q}
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
            Plan it with a local — free
          </h2>
          <p className="text-muted-foreground font-body mb-5">
            Tell us your dates, group size and what you're into. We'll send back a
            day-by-day plan and book the boats and tours for you.
          </p>
          <button
            onClick={openWhatsApp}
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-primary-foreground font-body font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:scale-[1.02]"
          >
            <MessageCircle className="w-5 h-5" />
            Message us on WhatsApp
          </button>
        </div>
      </article>

      <Footer />
    </main>
  );
};

export default ThingsToDoInMalta;
