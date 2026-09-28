'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function Testimonials() {
  const { t } = useLanguage();
  const items = t.testimonials?.items || [];

  if (!items.length) return null;

  // Duplicate items for continuous marquee
  const duplicateList = (arr, count = 10) => {
    let res = [];
    while (res.length < count) {
      res = res.concat(arr);
    }
    return [...res, ...res];
  };

  const trackItems = duplicateList(items);

  return (
    <section className="section" data-anim="up">
      <div className="container">
        <div className="head-c">
          <div className="eyebrow">
            {t.testimonials?.eyebrow}
          </div>
          <h2 className="h2">
            <span className="h-mask">
              <span className="reveal-line">
                {t.testimonials?.heading}
              </span>
            </span>
            <span className="h-mask">
              <span className="reveal-line" style={{ animationDelay: '0.07s' }}>
                <span className="accent">{t.testimonials?.headingAccent}</span>
              </span>
            </span>
          </h2>
        </div>
      </div>

      <div className="tm-marquee">
        <div className="tm-track">
          {trackItems.map((item, idx) => (
            <div key={`${item.id || idx}-${idx}`} className="tm">
              <div className="tm-top">
                {item.avatar ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={item.avatar} alt={item.name} />
                ) : (
                  <span className="tm-mono">
                    {(item.name || '?').slice(0, 1)}
                  </span>
                )}
                <div>
                  <div className="tm-name">{item.name}</div>
                  <div className="tm-role">
                    {item.role ? `${item.role}, ${item.company}` : item.company}
                  </div>
                </div>
              </div>
              <p>“{item.quote}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
