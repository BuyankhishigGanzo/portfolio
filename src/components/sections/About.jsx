'use client';

import React, { useEffect, useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function About() {
  const { t, siteConfig, lang } = useLanguage();
  const skillOrder = [
    'Creative Cloud',
    'Adobe Illustrator',
    'Adobe Photoshop',
    'Adobe Premier Pro',
    'Adobe After Effects',
    'Adobe XD',
    'Ai Workflow',
    'Coding',
    'Creative Concept',
  ];
  const rawSkills = t.about?.skills || [];
  const skills = rawSkills.some((s) => skillOrder.includes(s.name))
    ? [...rawSkills].sort((a, b) => skillOrder.indexOf(a.name) - skillOrder.indexOf(b.name))
    : rawSkills;
  const portraitImgRef = useRef(null);

  // Parallax on portrait image matching reference formula exactly
  useEffect(() => {
    let frameId = 0;

    const updateImage = () => {
      frameId = 0;
      const img = portraitImgRef.current;
      if (!img || !img.parentElement) return;
      const rect = img.parentElement.getBoundingClientRect();
      const vh = window.innerHeight;
      if (rect.bottom > -160 && rect.top < vh + 160) {
        const factor = Math.max(-1, Math.min(1, (rect.top + rect.height / 2 - vh / 2) / (vh / 2 + rect.height / 2)));
        const shiftX = (factor * (0.07 * rect.width)).toFixed(1);
        const shiftY = (-factor * (0.07 * rect.height)).toFixed(1);
        img.style.transform = `translate3d(${shiftX}px, ${shiftY}px, 0)`;
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
    <section className="section container about" id="about" data-anim="zoom">
      {/* Centered Eyebrow & Title */}
      <div className="eyebrow center">
        {t.about?.eyebrow}
      </div>

      <h2 className="h2 center">
        <span className="h-mask">
          <span className="reveal-line">
            {t.about?.heading}
          </span>
        </span>
        <span className="h-mask">
          <span className="reveal-line" style={{ animationDelay: '0.07s' }}>
            <span className="accent">{siteConfig.name}</span>
          </span>
        </span>
      </h2>

      {/* 2-Column Grid */}
      <div className="about-grid">
        {/* Left Column: Portrait, Bio, Resume */}
        <div className="about-col">
          <div className={`about-portrait rise ${!t.about?.portraitImage ? '!border-0 !border-none !bg-[#111111]' : ''}`} style={{ animationDelay: '0.05s' }}>
            {t.about?.portraitImage ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                ref={portraitImgRef}
                src={t.about.portraitImage}
                alt={siteConfig.name}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-neutral-500 !border-0 !border-none !bg-[#111111] font-semibold text-lg">
                {siteConfig.name}
              </div>
            )}
          </div>

          <p className="about-copy rise" style={{ animationDelay: '0.1s' }}>
            {t.about?.copy}
          </p>

          {t.about?.resumeUrl && (
            <div className="rise" style={{ animationDelay: '0.16s', marginTop: '22px' }}>
              <a className="btn" href={t.about.resumeUrl}>
                {t.about?.resumeText || (lang === 'en' ? 'Download résumé' : 'CV татах')}
              </a>
            </div>
          )}
        </div>

        {/* Right Column: Toolbox / Skills */}
        {skills.length > 0 && (
          <div className="about-col">
            <div className="skills-head rise" style={{ animationDelay: '0.08s' }}>
              <span className="eyebrow">
                {t.about?.skillsEyebrow}
              </span>
              <p>
                {t.about?.skillsSub}
              </p>
            </div>

            <div className="skills">
              {skills.map((skill, idx) => {
                const isLic = /creative\s*cloud/i.test(skill.name || '');
                const rating = Math.max(0, Math.min(5, Number(skill.rating || 0)));
                const shortLabel = (skill.short || skill.name || '?').trim().slice(0, 3);

                return (
                  <div
                    key={skill.id || idx}
                    className={`skill rise ${isLic ? 'has-lic' : ''}`}
                    style={{ animationDelay: `${0.1 + idx * 0.05}s` }}
                  >
                    <div className="skill-top">
                      <span className="skill-badge">
                        {skill.icon ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img src={skill.icon} alt="" />
                        ) : (
                          <span className="skill-mono">{shortLabel}</span>
                        )}
                      </span>

                      <span className="skill-name">{skill.name}</span>

                      {isLic ? (
                        <span className="skill-lic">Official Licensed</span>
                      ) : (
                        <span className="skill-rate" aria-label={`${rating}/5`}>
                          {[0, 1, 2, 3, 4].map((star) => (
                            <i
                              key={star}
                              className={star < rating ? 'on' : ''}
                            />
                          ))}
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
