import { useState, useCallback, ReactNode } from "react";
import { Language, translations } from "./translations";
import { LanguageContext } from "./context";

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  const t = useCallback(
    (key: string) => translations[language][key] || key,
    [language]
  );

  const isRTL = language === "ar";

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      <div dir={isRTL ? "rtl" : "ltr"}>{children}</div>
    </LanguageContext.Provider>
  );
};
