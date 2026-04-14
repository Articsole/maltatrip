import { Anchor, MessageCircle } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const WHATSAPP_URL = "https://wa.me/35699822911?text=Hi!%20I%20have%20a%20question%20about%20your%20Malta%20experiences.";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-foreground text-sand py-12 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Anchor className="w-5 h-5 text-sunset" />
          <span className="font-display text-xl font-semibold">Malta Experiences</span>
        </div>
        <p className="text-sand/60 font-body text-sm mb-6 max-w-md mx-auto">
          {t("footer.desc")}
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[#25D366] hover:underline font-body font-medium text-sm"
        >
          <MessageCircle className="w-4 h-4" />
          {t("footer.whatsapp")}
        </a>
        <p className="text-sand/30 font-body text-xs mt-8">
          © {new Date().getFullYear()} {t("footer.rights")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
