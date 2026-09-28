'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function WebsiteOrder() {
  const { t, lang } = useLanguage();
  const wo = t.websiteOrder || {};

  return (
    <section className="section container outro has-bg" id="website-order" data-anim="zoom">
      <div className="sec-bg sec-bg-pulse" aria-hidden="true" style={{ opacity: 0.9 }}>
        <div className="rings rings-soft" aria-hidden="true">
          {[0, 1, 2].map((index) => (
            <span key={`static-${index}`} className="ring-static" style={{ '--i': index }} />
          ))}
          {[0, -3.6, -7.2].map((delay) => (
            <span key={`sonar-${delay}`} className="ring-sonar" style={{ '--d': `${delay}s` }} />
          ))}
        </div>
      </div>
      <div className="head-c">
        <div className="eyebrow">
          {wo.eyebrow || (lang === 'en' ? 'Need a website too?' : 'Вебсайт хэрэгтэй юу?')}
        </div>
        <h2 className="h2">
          <span className="h-mask">
            <span className="reveal-line">
              {wo.headingPrefix || (lang === 'en' ? 'Want a ' : 'Та бүтээлч ')}
              <span className="accent">{wo.headingAccent || (lang === 'en' ? 'creative website?' : 'вебсайттай')}</span>
              {wo.headingSuffix ? ` ${wo.headingSuffix}` : (lang === 'mn' ? ' болмоор байвал энд дарж захиалгаа өгөөрэй.' : '')}
            </span>
          </span>
        </h2>
      </div>

      <p className="order-intro rise" style={{ animationDelay: '0.08s' }}>
        {wo.sub || (lang === 'en'
          ? "Tell me about the site you need and I'll get back to you with a plan and quote."
          : 'Энд дараад захиалгын хүсэлтээ өгөөрэй — би тантай холбогдож дэлгэрэнгүйг тохирно.')}
      </p>

      <div className="rise" style={{ animationDelay: '0.12s', marginTop: '22px' }}>
        <a
          href="#contact"
          className="btn accent-btn of-submit"
        >
          {wo.buttonLabel || (lang === 'en' ? 'Request a website →' : 'Захиалга өгөх →')}
        </a>
      </div>
    </section>
  );
}
