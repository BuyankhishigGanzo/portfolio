'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

const defaultStats = {
  mn: [
    { value: '7', suffix: '+', label: 'Дижитал платформ, системүүд' },
    { value: '38', suffix: '+', label: 'Аудио хөтчийн хэлний дэмжлэг' },
    { value: '100', suffix: 'K+', label: 'Хүрсэн хэрэглэгчид' },
    { value: '99.9', suffix: '%', label: 'Найдвартай ажиллагаа' },
  ],
  en: [
    { value: '7', suffix: '+', label: 'Digital platforms & systems' },
    { value: '38', suffix: '+', label: 'Audio guide languages' },
    { value: '100', suffix: 'K+', label: 'Users reached' },
    { value: '99.9', suffix: '%', label: 'System uptime' },
  ],
};

export default function Stats() {
  const { lang, t } = useLanguage();
  const items = Array.isArray(t.stats) && t.stats.length > 0 && t.stats[0].value 
    ? t.stats 
    : (defaultStats[lang] || defaultStats.mn);

  return (
    <section className="section" data-anim="up">
      <div className="container">
        <div className="stats">
          {items.map((stat, index) => (
            <div
              key={stat.label}
              className="rise st"
              style={{ animationDelay: `${0.05 + index * 0.06}s` }}
            >
              <div>
                <span className="num">
                  {stat.value}<sup>{stat.suffix}</sup>
                </span>
              </div>
              <div className="lbl">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
