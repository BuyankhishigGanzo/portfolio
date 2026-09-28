'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function Services() {
  const { t, lang } = useLanguage();
  const [openId, setOpenId] = useState(null);

  const services = t.services?.items || [];
  const currency = lang === 'mn' ? '₮' : '$';

  return (
    <section className="section container" id="services" data-anim="right">
      {/* Split Section Header */}
      <div className="head-s">
        <div className="head-s-top">
          <span className="eyebrow">{t.services?.eyebrow}</span>
          {t.services?.side && (
            <span className="sec-side">{t.services.side}</span>
          )}
        </div>
        <div className="head-s-main">
          <h2 className="h1big">
            <span className="h-mask">
              <span className="reveal-line">
                {t.services?.heading}
              </span>
            </span>
            <span className="h-mask">
              <span className="reveal-line" style={{ animationDelay: '0.07s' }}>
                <span className="accent">{t.services?.headingAccent}</span>
              </span>
            </span>
          </h2>
          {t.services?.sub && (
            <div className="sec-note rise">
              {t.services.sub}
            </div>
          )}
        </div>
      </div>

      {/* Services Accordion */}
      <div className="srv-acc">
        {services.map((service, idx) => {
          const isOpen = openId === service.id;
          const hasPrice = (parseFloat(String(service.price || '').replace(/[^0-9.]/g, '')) || 0) > 0;

          return (
            <div
              key={service.id || idx}
              className={`srv-item rise ${isOpen ? 'open' : ''}`}
              style={{ animationDelay: `${idx * 0.06}s` }}
              onClick={() => setOpenId(isOpen ? null : service.id)}
            >
              <div className="srv-head">
                <span className="srv-n">
                  {service.num || String(idx + 1).padStart(2, '0')}
                </span>
                <h3>{service.title}</h3>
                <span className="srv-chev">{isOpen ? '−' : '+'}</span>
              </div>

              <div className="srv-body">
                <div className="srv-body-in">
                  <p>{service.description}</p>
                  {(hasPrice || service.priceLabel) && (
                    <span className="srv-price">
                      {hasPrice ? `${currency}${service.price.toLocaleString()} ` : ''}
                      {service.priceLabel}
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
