'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

const stats = {
  mn: [
    { value: '92', suffix: '+', label: 'Хамтран ажилласан харилцагч' },
    { value: '11', suffix: '+', label: 'Жилийн туршлага' },
    { value: '200', suffix: '+', label: 'Дуусгасан төсөл' },
    { value: '99', suffix: '%', label: 'Сэтгэл ханамж' },
  ],
  en: [
    { value: '92', suffix: '+', label: 'Clients served' },
    { value: '11', suffix: '+', label: 'Years of experience' },
    { value: '200', suffix: '+', label: 'Projects completed' },
    { value: '99', suffix: '%', label: 'Client satisfaction' },
  ],
};

export default function Stats() {
  const { lang } = useLanguage();

  return (
    <section className="section" data-anim="up">
      <div className="container">
        <div className="stats">
          {stats[lang].map((stat, index) => (
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
