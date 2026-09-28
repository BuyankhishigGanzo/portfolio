'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { content, siteConfig, navItems } from '@/data/siteContent';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('mn');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('site_lang');
    if (saved && (saved === 'mn' || saved === 'en')) {
      setLang(saved);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLang = () => {
    const nextLang = lang === 'mn' ? 'en' : 'mn';
    setLang(nextLang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('site_lang', nextLang);
    }
  };

  const t = content[lang] || content.mn;

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t, siteConfig, navItems, mounted }}>
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
