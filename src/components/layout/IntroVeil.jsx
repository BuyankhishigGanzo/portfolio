'use client';

import React, { useState, useEffect } from 'react';
import { siteConfig } from '@/data/siteContent';

export default function IntroVeil({ onRelease }) {
  const [isIntro, setIsIntro] = useState(true);
  const [isDone, setIsDone] = useState(false);
  const word = (siteConfig.brandWordmark || 'NOVA HEX')
    .toUpperCase()
    .replace(/[^A-Z\s]/g, '')
    .trim() || 'NOVA HEX';

  useEffect(() => {
    // If user prefers reduced motion, skip intro veil immediately
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsIntro(false);
      setIsDone(true);
      document.querySelector('.site')?.classList.remove('intro');
      onRelease?.();
      return;
    }

    // Set initial class on .site
    const siteEl = document.querySelector('.site');
    if (siteEl) siteEl.classList.add('intro');

    let doneTimer = 0;
    let released = false;

    const endIntro = () => {
      if (released) return;
      released = true;
      setIsIntro(false);
      siteEl?.classList.remove('intro');
      document.dispatchEvent(new CustomEvent('intro-release'));
      onRelease?.();

      clearTimeout(doneTimer);
      doneTimer = window.setTimeout(() => {
        setIsDone(true);
      }, 1400);
    };

    const n = Math.max(4, word.length);
    const duration = Math.min(3200, 300 + 120 * n + 480);
    const autoTimer = setTimeout(endIntro, duration);

    // End intro early upon user interaction (mouse wheel, touch, key press)
    const onInteract = () => endIntro();
    window.addEventListener('wheel', onInteract, { once: true, passive: true });
    window.addEventListener('touchmove', onInteract, { once: true, passive: true });
    window.addEventListener('keydown', onInteract, { once: true });

    return () => {
      clearTimeout(autoTimer);
      clearTimeout(doneTimer);
      window.removeEventListener('wheel', onInteract);
      window.removeEventListener('touchmove', onInteract);
      window.removeEventListener('keydown', onInteract);
    };
  }, [word, onRelease]);

  if (isDone) return null;

  return (
    <div className={`intro-veil ${isIntro ? 'active' : ''}`} aria-hidden="true">
      <span className="intro-type">
        {word.split('').map((char, index) => (
          <span
            key={index}
            className="itc"
            style={{ '--i': index }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </span>
    </div>
  );
}
