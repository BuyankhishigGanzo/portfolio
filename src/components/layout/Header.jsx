'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import MobileMenu from './MobileMenu';

export default function Header() {
  const { lang, toggleLang, t, siteConfig, navItems } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY || document.documentElement.scrollTop;
          setScrolled(scrollY > 80);

          // Detect active section
          let current = '';
          for (const item of navItems) {
            const el = document.getElementById(item.id);
            if (el) {
              const rect = el.getBoundingClientRect();
              if (rect.top <= 160) {
                current = item.id;
              }
            }
          }
          setActiveSection(current);
          ticking = false;
        });
        ticking = true;
      }
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [navItems]);

  const handleBrandClick = (e) => {
    e.preventDefault();
    setActiveSection('');
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }
  };

  return (
    <>
      <header className={`navwrap ${scrolled ? 'scrolled' : ''} ${mobileMenuOpen ? 'menu-open' : ''}`}>
        <nav className="nav">
          {/* Brand Logo / Wordmark (Left) */}
          <a
            className="brand"
            href="#top"
            aria-label={siteConfig.name}
            onClick={handleBrandClick}
          >
            {siteConfig.logoUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={siteConfig.logoUrl}
                alt={siteConfig.name}
                className="brand-logo"
              />
            ) : (
              <span className="brand-word">
                {siteConfig.brandWordmark || siteConfig.name}
              </span>
            )}
          </a>

          {/* Center Navigation: Links + 5-Dots Indicator */}
          <div className="nav-center">
            {/* Desktop Navigation Links */}
            <div className="nav-menu">
              {navItems.map((item) => {
                const label = lang === 'mn' ? item.label_mn : item.label_en;
                const isActive = activeSection === item.id;

                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    data-txt={label}
                    className={`nav-link ${isActive ? 'active' : ''}`}
                    onClick={() => setActiveSection(item.id)}
                  >
                    <span>{label}</span>
                  </a>
                );
              })}
            </div>

            {/* 5-Dots Indicator (Shown when navbar is scrolled & collapsed) */}
            <div className="nav-dots" aria-hidden="true">
              {navItems.map((item) => (
                <i key={item.id} />
              ))}
            </div>
          </div>

          {/* Action Buttons (Right) */}
          <div className="nav-actions">
            {/* Language Toggle */}
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

            {/* CTA with Sliding Background & Text Roll */}
            <a
              href="#contact"
              className="cta"
            >
              <span className="cta-roll">
                <span className="cta-l">{t.nav.ctaRoll1}</span>
                <span className="cta-l" aria-hidden="true">{t.nav.ctaRoll2}</span>
              </span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`nav-burger ${mobileMenuOpen ? 'x' : ''}`}
              aria-label="Menu"
              aria-expanded={mobileMenuOpen}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
