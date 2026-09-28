'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function Process() {
  const { t } = useLanguage();
  const steps = t.process?.steps || [];

  if (!steps.length) return null;

  return (
    <section className="section container" id="process" data-anim="up">
      <div className="head-c">
        <div className="eyebrow">
          {t.process?.eyebrow}
        </div>
        <h2 className="h2">
          <span className="h-mask">
            <span className="reveal-line">
              {t.process?.heading}
            </span>
          </span>
        </h2>
      </div>

      <div className="process">
        {steps.map((step, idx) => (
          <div
            key={step.id || idx}
            className="step rise"
            style={{ animationDelay: `${idx * 0.08}s` }}
          >
            <div className="step-n">
              {step.number || String(idx + 1).padStart(2, '0')}
            </div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
