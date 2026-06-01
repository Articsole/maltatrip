import { Helmet } from "react-helmet-async";
import HeroSection from "@/components/HeroSection";
import ExperiencesSection from "@/components/ExperiencesSection";
import HowItWorks from "@/components/HowItWorks";
import NightlifeSection from "@/components/NightlifeSection";
import ReviewsSection from "@/components/ReviewsSection";
import Footer from "@/components/Footer";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Helmet>
        <title>Malta Trip — Boat, Bus & Gozo Tours via WhatsApp</title>
        <meta
          name="description"
          content="Book unforgettable Malta experiences: boat trips to Comino & Gozo, private charters, island bus tours and Gozo quad/jeep adventures. Easy booking via WhatsApp."
        />
        <link rel="canonical" href="https://travelingmalta.com/" />
        <meta property="og:title" content="Malta Trip — Boat, Bus & Gozo Tours" />
        <meta
          property="og:description"
          content="Boat trips, private charters, bus tours and Gozo adventures across Malta. Book instantly via WhatsApp."
        />
        <meta property="og:url" content="https://travelingmalta.com/" />
      </Helmet>
      <LanguageSwitcher />
      <HeroSection />
      <ExperiencesSection />
      <HowItWorks />
      <NightlifeSection />
      <ReviewsSection />
      <Footer />
    </main>
  );
};

export default Index;

