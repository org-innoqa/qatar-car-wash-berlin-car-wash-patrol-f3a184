import React, { createContext, useContext, useEffect, useState } from 'react';
import en, { Dictionary } from './en';
import ar from './ar';

export type Language = 'en' | 'ar';

const DICTIONARIES: Record<Language, Dictionary> = { en, ar };
const STORAGE_KEY = 'bwp-language';

interface I18nContextValue {
  lang: Language;
  dir: 'ltr' | 'rtl';
  t: Dictionary;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
}

const I18nContext = createContext<I18nContextValue | null>(null);

function getInitialLanguage(): Language {
  const param = new URLSearchParams(window.location.search).get('lang');
  if (param === 'ar' || param === 'en') return param;
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === 'ar' || stored === 'en') return stored;
  } catch {
    // Storage may be unavailable (private mode); fall through to browser language.
  }
  return navigator.language?.toLowerCase().startsWith('ar') ? 'ar' : 'en';
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>(getInitialLanguage);
  const dir = lang === 'ar' ? 'rtl' : 'ltr';
  const t = DICTIONARIES[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
    document.title = t.meta.title;
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // Ignore storage errors.
    }
  }, [lang, dir, t]);

  const toggleLang = () => setLang((current) => (current === 'ar' ? 'en' : 'ar'));

  return (
    <I18nContext.Provider value={{ lang, dir, t, setLang, toggleLang }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) throw new Error('useI18n must be used within LanguageProvider');
  return context;
}
