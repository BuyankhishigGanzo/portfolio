'use client';

import React, { useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function MobileMenu({ isOpen, onClose }) {
  const { lang, toggleLang, t, siteConfig, navItems } = useLanguage();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    const handleResize = () => {
      if (window.innerWidth > 900) onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen, onClose]);

  const handleLinkClick = (id) => {
    onClose();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`nav-drawer ${isOpen ? 'open' : ''}`}
      onClick={onClose}
      aria-hidden={!isOpen}
    >
      <div
        className="nav-drawer-panel"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="nav-drawer-links">
          {navItems.map((item, idx) => {
            const label = lang === 'mn' ? item.label_mn : item.label_en;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(item.id);
                }}
                style={{ transitionDelay: `${isOpen ? idx * 60 : 0}ms` }}
              >
                <em>{item.num}</em>
                <span>{label}</span>
              </a>
            );
          })}
        </div>

        <div className="nav-drawer-foot">
          <button
            type="button"
            onClick={toggleLang}
            className="langtog"
            aria-label="Switch Language"
          >
            <span className={lang === 'en' ? 'lt-on' : ''}>ENG</span>
            <span className="lt-sep">/</span>
            <span className={lang === 'mn' ? 'lt-on' : ''}>MON</span>
          </button>

          {siteConfig?.phone && (
            <a
              className="cta"
              href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
              onClick={onClose}
            >
              <span className="cta-roll">
                <span className="cta-l">{lang === 'en' ? 'Order' : 'Захиалга'}</span>
                <span className="cta-l" aria-hidden="true">{lang === 'en' ? 'Order' : 'Захиалга'}</span>
              </span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
