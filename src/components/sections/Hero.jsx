'use client';

import React, { useEffect, useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { MapPin, Globe, Award } from 'lucide-react';

// Seeded so server and client render the same field while retaining the
// natural, irregular density of the reference effect.
const dustParticles = Array.from({ length: 130 }, (_, index) => {
  let seed = (index + 1) * 9301 + 49297;
  const random = () => {
    seed = (seed * 233280 + 49297) % 233280;
    return seed / 233280;
  };

  return {
    x: `${(random() * 100).toFixed(2)}%`,
    y: `${(random() * 100).toFixed(2)}%`,
    s: `${(1.3 + random() * 2.8).toFixed(2)}px`,
    drift: `${(-45 + random() * 90).toFixed(1)}px`,
    rise: `${Math.round(39 + random() * 42)}px`,
    dur: `${(7 + random() * 5.5).toFixed(2)}s`,
    delay: `${(-24 * random()).toFixed(2)}s`,
    peak: (0.32 + random() * 0.38).toFixed(2),
  };
});

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
