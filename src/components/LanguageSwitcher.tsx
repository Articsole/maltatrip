import { useLanguage } from "@/i18n/LanguageContext";
import { Language, languageNames } from "@/i18n/translations";
import { Globe } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const flags: Record<Language, string> = {
  en: "🇬🇧",
  nl: "🇳🇱",
  ar: "🇸🇦",
  de: "🇩🇪",
  it: "🇮🇹",
  fr: "🇫🇷",
};

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="fixed top-4 right-4 z-50">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 bg-card/90 backdrop-blur-md border border-border rounded-full px-4 py-2 shadow-lg hover:shadow-xl transition-all text-sm font-body font-medium text-foreground"
      >
        <Globe className="w-4 h-4 text-primary" />
        <span>{flags[language]}</span>
        <span className="hidden sm:inline">{languageNames[language]}</span>
      </button>

      {open && (
        <div className="absolute top-12 right-0 bg-card border border-border rounded-xl shadow-xl overflow-hidden min-w-[160px] animate-fade-up" style={{ animationDuration: "0.2s" }}>
          {(Object.keys(languageNames) as Language[]).map((lang) => (
            <button
              key={lang}
              onClick={() => { setLanguage(lang); setOpen(false); }}
              className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-body hover:bg-muted transition-colors ${
                lang === language ? "bg-primary/10 text-primary font-semibold" : "text-foreground"
              }`}
            >
              <span className="text-lg">{flags[lang]}</span>
              {languageNames[lang]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
