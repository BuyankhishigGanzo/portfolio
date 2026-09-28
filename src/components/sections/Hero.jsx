'use client';

import React, { useEffect, useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { MapPin, Globe, Award } from 'lucide-react';

export default function Hero() {
  const { t } = useLanguage();
  const heroImgRef = useRef(null);
  const sectionRef = useRef(null);

  // Parallax on hero image matching reference website calculation
  useEffect(() => {
    let frameId = 0;

    const updateImage = () => {
      frameId = 0;
      const img = heroImgRef.current;
      if (!img) return;
      const rect = img.parentElement.getBoundingClientRect();
      const vh = window.innerHeight;
      if (rect.bottom > -240 && rect.top < vh + 240) {
        const progress = (vh - rect.top) / (vh + rect.height);
        const yOffset = ((progress - 0.5) * 46).toFixed(1);
        img.style.transform = `translate3d(0, ${yOffset}px, 0) scale(1.06)`;
      }
    };

    const handleScroll = () => {
      if (!frameId) frameId = requestAnimationFrame(updateImage);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateImage();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(frameId);
    };
  }, []);

  // Ambient subtle dust particles (reference ondesign pfx)
  const dustParticles = [
    { x: '12%', y: '34%', s: '2px', drift: '22px', rise: '50px', dur: '18s', delay: '-3s', peak: '0.22' },
    { x: '28%', y: '68%', s: '1.6px', drift: '-18px', rise: '45px', dur: '22s', delay: '-8s', peak: '0.18' },
    { x: '45%', y: '22%', s: '2.4px', drift: '30px', rise: '58px', dur: '20s', delay: '-14s', peak: '0.24' },
    { x: '62%', y: '52%', s: '1.8px', drift: '-24px', rise: '48px', dur: '24s', delay: '-6s', peak: '0.19' },
    { x: '78%', y: '30%', s: '2.2px', drift: '16px', rise: '52px', dur: '19s', delay: '-11s', peak: '0.21' },
    { x: '88%', y: '75%', s: '1.5px', drift: '-14px', rise: '42px', dur: '25s', delay: '-17s', peak: '0.16' },
    { x: '35%', y: '82%', s: '2px', drift: '20px', rise: '46px', dur: '21s', delay: '-4s', peak: '0.20' },
    { x: '72%', y: '88%', s: '1.7px', drift: '-20px', rise: '44px', dur: '23s', delay: '-13s', peak: '0.17' },
  ];

  return (
    <section
      ref={sectionRef}
      className="hero"
      data-anim="up"
    >
      {/* Background Graphic & Subtle Ambient Dust */}
      <div className="hero-bg" aria-hidden="true">
        {t.hero.heroImage && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            ref={heroImgRef}
            src={t.hero.heroImage}
            alt=""
            className="hero-bg-img"
            style={{ objectPosition: '50% 0%', objectFit: 'cover' }}
          />
        )}

        <div className="pfx" aria-hidden="true">
          {dustParticles.map((p, i) => (
            <span
              key={i}
              className="pfx-dust"
              style={{
                '--x': p.x,
                '--y': p.y,
                '--s': p.s,
                '--drift': p.drift,
                '--rise': p.rise,
                '--dur': p.dur,
                '--delay': p.delay,
                '--peak': p.peak,
              }}
            />
          ))}
        </div>
      </div>

      {/* Hero Content */}
      <div className="hero-inner container">
        {/* Eyebrow */}
        <div className="eyebrow center">
          {t.hero.eyebrow}
        </div>

        {/* Masked Display Lines */}
        <h1 className="display">
          <span className="h-mask">
            <span className="reveal-line">
              {t.hero.headingLine1}
            </span>
          </span>
          <span className="h-mask">
            <span className="reveal-line" style={{ animationDelay: '0.08s' }}>
              {t.hero.headingLine2}
            </span>
          </span>
        </h1>

        {/* Hero Bottom Meta 3-Column Divider Bar */}
        <div className="hero-meta">
          {t.hero.meta.map((item, index) => {
            const icons = [
              <MapPin key="map" className="mic" strokeWidth={1.8} />,
              <Globe key="globe" className="mic" strokeWidth={1.8} />,
              <Award key="award" className="mic" strokeWidth={1.8} />
            ];

            return (
              <div
                key={index}
                className="cell rise"
                style={{ animationDelay: `${0.05 + index * 0.07}s` }}
              >
                {icons[index % icons.length]}
                <strong>{item.title}</strong>
                <small>{item.subtitle}</small>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
