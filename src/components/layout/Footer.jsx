'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="foot">
      <span>{t.footer.copyright}</span>
      <span className="foot-mid">{t.footer.rights}</span>
      <a
        href="#top"
        onClick={scrollToTop}
      >
        {t.footer.backToTop}
      </a>
    </footer>
  );
}
