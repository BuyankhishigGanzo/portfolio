'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Phone, MapPin, Share2 } from 'lucide-react';

export default function Connect() {
  const { t, siteConfig } = useLanguage();

  return (
    <section className="section container connect" id="connect" data-anim="zoom">
      {/* Centered Section Header with Subtitle */}
      <div className="head-c">
        <div className="eyebrow">
          {t.connect?.eyebrow}
        </div>
        <h2 className="h2">
          <span className="h-mask">
            <span className="reveal-line">
              {t.connect?.heading}
            </span>
          </span>
          <span className="h-mask">
            <span className="reveal-line" style={{ animationDelay: '0.07s' }}>
              <span className="accent">{t.connect?.headingAccent}</span>
            </span>
          </span>
        </h2>
        {t.connect?.sub && (
          <p className="head-sub">
            {t.connect.sub}
          </p>
        )}
      </div>

      {/* 3 Connect Cards Grid */}
      <div className="connect-grid">
        {/* Card 1: Phone */}
        {(siteConfig.phone || t.connect?.cards?.phone?.value) && (
          <div className="connect-card">
            <i className="cc-glow" aria-hidden="true"><b /></i>
            <span className="cc-top">
              <span className="cc-ic">
                <Phone className="mic" />
              </span>
              <span className="cc-k">
                {t.connect?.cards?.phone?.key || 'Call / text'}
              </span>
            </span>
            <div className="cc-v flex flex-col gap-1.5">
              <a
                href={`tel:${(t.connect?.cards?.phone?.value || siteConfig.phone).replace(/\s+/g, '')}`}
                className="hover:text-[var(--accent)] transition-colors block"
              >
                {t.connect?.cards?.phone?.value || siteConfig.phone}
              </a>
              {(t.connect?.cards?.phone?.valueSecondary || siteConfig.phoneSecondary) && (
                <a
                  href={`tel:${(t.connect?.cards?.phone?.valueSecondary || siteConfig.phoneSecondary).replace(/\s+/g, '')}`}
                  className="hover:text-[var(--accent)] transition-colors block text-neutral-200 hover:text-[var(--accent)]"
                >
                  {t.connect?.cards?.phone?.valueSecondary || siteConfig.phoneSecondary}
                </a>
              )}
            </div>
            <span className="cc-d">
              {t.connect?.cards?.phone?.desc || 'Quick replies during working hours.'}
            </span>
          </div>
        )}

        {/* Card 2: Location */}
        <div className="connect-card">
          <i className="cc-glow" aria-hidden="true"><b /></i>
          <span className="cc-top">
            <span className="cc-ic">
              <MapPin className="mic" />
            </span>
            <span className="cc-k">
              {t.connect?.cards?.location?.key || 'Based in'}
            </span>
          </span>
          <span className="cc-v">
            {t.connect?.cards?.location?.value || 'Ulaanbaatar, Mongolia'}
          </span>
          <span className="cc-d">
            {t.connect?.cards?.location?.desc || 'Happy to meet in person.'}
          </span>
        </div>

        {/* Card 3: Socials */}
        <div className="connect-card">
          <i className="cc-glow" aria-hidden="true"><b /></i>
          <span className="cc-top">
            <span className="cc-ic">
              <Share2 className="mic" />
            </span>
            <span className="cc-k">
              {t.connect?.cards?.social?.key || 'Follow along'}
            </span>
          </span>
          <span className="cc-v cc-socials">
            {siteConfig.socials?.facebook && (
              <a href={siteConfig.socials.facebook} target="_blank" rel="noreferrer">
                Facebook
              </a>
            )}
            {siteConfig.socials?.instagram && (
              <a href={siteConfig.socials.instagram} target="_blank" rel="noreferrer">
                Instagram
              </a>
            )}
            {siteConfig.socials?.behance && (
              <a href={siteConfig.socials.behance} target="_blank" rel="noreferrer">
                Behance
              </a>
            )}
          </span>
          <span className="cc-d">
            {t.connect?.cards?.social?.desc || 'New work, process and ideas.'}
          </span>
        </div>
      </div>
    </section>
  );
}
