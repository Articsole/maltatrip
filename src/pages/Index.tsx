import HeroSection from "@/components/HeroSection";
import ExperiencesSection from "@/components/ExperiencesSection";
import HowItWorks from "@/components/HowItWorks";
import NightlifeSection from "@/components/NightlifeSection";
import Footer from "@/components/Footer";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const Index = () => {
  return (
    <main className="min-h-screen">
      <LanguageSwitcher />
      <HeroSection />
      <ExperiencesSection />
      <HowItWorks />
      <NightlifeSection />
      <Footer />
    </main>
  );
};

export default Index;
