'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'fr' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  dir: 'ltr' | 'rtl';
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  dir: 'ltr',
  isRTL: false,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');

  // Load language preference on client mount
  useEffect(() => {
    try {
      const savedLang = localStorage.getItem('as_preferred_lang') as Language | null;
      if (savedLang && ['en', 'fr', 'ar'].includes(savedLang)) {
        setLanguageState(savedLang);
        applyDocumentLanguage(savedLang);
        return;
      }

      // Check cookie fallback
      const match = document.cookie.match(/as_lang=([^;]+)/);
      if (match && ['en', 'fr', 'ar'].includes(match[1])) {
        const cookieLang = match[1] as Language;
        setLanguageState(cookieLang);
        applyDocumentLanguage(cookieLang);
        return;
      }

      // Fallback: Default to English
      applyDocumentLanguage('en');
    } catch {
      applyDocumentLanguage('en');
    }
  }, []);

  const applyDocumentLanguage = (lang: Language) => {
    if (typeof document === 'undefined') return;
    const isArabic = lang === 'ar';
    document.documentElement.lang = lang;
    document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
  };

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    applyDocumentLanguage(lang);
    try {
      localStorage.setItem('as_preferred_lang', lang);
      document.cookie = `as_lang=${lang}; path=/; max-age=31536000; SameSite=Lax`;
    } catch {
      // Storage unavailable fallback
    }
  };

  const isRTL = language === 'ar';
  const dir = isRTL ? 'rtl' : 'ltr';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, dir, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
