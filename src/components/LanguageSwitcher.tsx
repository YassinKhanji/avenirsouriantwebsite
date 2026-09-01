'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function LanguageSwitcher({ className = '' }: { className?: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState('en');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' }
  ];

  const getLanguageFromCookie = () => {
    if (typeof document === 'undefined') return 'en';
    const match = document.cookie.match(/googtrans=([^;]+)/);
    if (match) {
      const parts = match[1].split('/');
      const lang = parts[parts.length - 1];
      if (['en', 'fr', 'ar'].includes(lang)) {
        return lang;
      }
    }
    return 'en';
  };

  useEffect(() => {
    // Read cookie on mount
    const activeLang = getLanguageFromCookie();
    setSelectedLang(activeLang);

    // Apply document direction
    if (activeLang === 'ar') {
      document.documentElement.dir = 'rtl';
      document.documentElement.lang = 'ar';
    } else {
      document.documentElement.dir = 'ltr';
      document.documentElement.lang = activeLang;
    }

    // Poll for the Google Translate dropdown to be loaded and synchronize its value
    const interval = setInterval(() => {
      const select = document.querySelector('.goog-te-combo') as HTMLSelectElement;
      if (select) {
        if (select.value !== activeLang) {
          select.value = activeLang;
          select.dispatchEvent(new Event('change'));
        }
        clearInterval(interval);
      }
    }, 500);

    // Cleanup click outside listener
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      clearInterval(interval);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLanguageChange = (langCode: string) => {
    const cookieValue = `/en/${langCode}`;
    
    // Set cookie across all possible domains/paths to be thorough
    document.cookie = `googtrans=${cookieValue}; path=/;`;
    document.cookie = `googtrans=${cookieValue}; path=/; domain=${window.location.hostname};`;
    
    const domainParts = window.location.hostname.split('.');
    if (domainParts.length > 1) {
      const baseDomain = `.${domainParts.slice(-2).join('.')}`;
      document.cookie = `googtrans=${cookieValue}; path=/; domain=${baseDomain};`;
    }

    // Update document direction immediately for instant UI responsiveness
    if (langCode === 'ar') {
      document.documentElement.dir = 'rtl';
      document.documentElement.lang = 'ar';
    } else {
      document.documentElement.dir = 'ltr';
      document.documentElement.lang = langCode;
    }

    const select = document.querySelector('.goog-te-combo') as HTMLSelectElement;
    if (select) {
      select.value = langCode;
      select.dispatchEvent(new Event('change'));
    } else {
      // Fallback if the script isn't loaded
      window.location.reload();
      return;
    }

    setSelectedLang(langCode);
    setIsOpen(false);
  };

  const currentLang = languages.find(l => l.code === selectedLang) || languages[0];

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-gray-100 transition-colors text-sm font-semibold border border-gray-200 bg-white text-gray-900 cursor-pointer shadow-sm min-w-[90px] justify-center"
      >
        <span className="text-lg">{currentLang.flag}</span>
        <span>{currentLang.code.toUpperCase()}</span>
        <svg 
          className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-gray-200 z-50 overflow-hidden py-1"
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors flex items-center justify-between cursor-pointer ${
                  selectedLang === lang.code ? 'bg-primary-light text-primary font-bold' : 'text-gray-700'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">{lang.flag}</span>
                  <span className="text-sm font-medium">{lang.name}</span>
                </div>
                {selectedLang === lang.code && (
                  <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
