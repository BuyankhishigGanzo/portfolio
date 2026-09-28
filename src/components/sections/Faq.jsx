'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function Faq() {
  const { t } = useLanguage();
  const [openId, setOpenId] = useState(null);

  const faqs = t.faq?.items || [];

  if (!faqs.length) return null;

  return (
    <section className="section container" id="faq" data-anim="up">
      <div className="head-c">
        <div className="eyebrow">
          {t.faq?.eyebrow}
        </div>
        <h2 className="h2">
          <span className="h-mask">
            <span className="reveal-line">
              {t.faq?.headingLine1}
            </span>
          </span>
          <span className="h-mask">
            <span className="reveal-line" style={{ animationDelay: '0.07s' }}>
              <span className="accent">{t.faq?.headingLine2}</span>
            </span>
          </span>
        </h2>
      </div>

      <div className="faq">
        {faqs.map((faq, idx) => {
          const isOpen = openId === faq.id;

          return (
            <div
              key={faq.id || idx}
              className={`q ${isOpen ? 'open' : ''}`}
              onClick={() => setOpenId(isOpen ? null : faq.id)}
            >
              <div className="q-top">
                <span className="q-n">{faq.num || String(idx + 1).padStart(2, '0')}</span>
                <h3>{faq.question}</h3>
                <span className="q-ico">{isOpen ? '−' : '+'}</span>
              </div>

              <div className="a">
                <div className="a-in">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
