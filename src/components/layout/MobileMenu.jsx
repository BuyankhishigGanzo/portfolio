'use client';

import React, { useEffect, useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function MobileMenu({ isOpen, onClose }) {
  const { lang, toggleLang, t, siteConfig, navItems } = useLanguage();
  const panelRef = useRef(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const previousFocus = document.activeElement;
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'Tab' && isOpen && panelRef.current) {
        const focusable = [...panelRef.current.querySelectorAll('a, button')]
          .filter((element) => !element.disabled && element.offsetParent !== null);
        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 900) onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);
    const frameId = isOpen
      ? requestAnimationFrame(() => panelRef.current?.querySelector('a, button')?.focus())
      : 0;
    return () => {
      cancelAnimationFrame(frameId);
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
      if (isOpen) previousFocus?.focus?.();
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
      role="dialog"
      aria-modal={isOpen ? 'true' : undefined}
      aria-label={lang === 'en' ? 'Navigation menu' : 'Үндсэн цэс'}
    >
      <div
        ref={panelRef}
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
