'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function Pricing() {
  const { t, lang } = useLanguage();
  const plans = t.plans?.plans || [];

  return (
    <section className="section container" id="plans" data-anim="zoom">
      {/* Centered Section Header */}
      <div className="head-c">
        <div className="eyebrow">
          {t.plans?.eyebrow}
        </div>
        <h2 className="h2">
          <span className="h-mask">
            <span className="reveal-line">
              {t.plans?.headingLine1}
            </span>
          </span>
          <span className="h-mask">
            <span className="reveal-line" style={{ animationDelay: '0.07s' }}>
              <span className="accent">{t.plans?.headingLine2}</span>
            </span>
          </span>
        </h2>
      </div>

      <div className="plans">
        {plans.map((p, idx) => (
          <PlanCard key={p.id || idx} plan={p} idx={idx} lang={lang} t={t} />
        ))}
      </div>
    </section>
  );
}

function PlanCard({ plan, idx, lang, t }) {
  const [isYearly, setIsYearly] = useState(false);
  const [selectedTier, setSelectedTier] = useState(0);

  const hasTiers = Array.isArray(plan.tiers) && plan.tiers.length > 0;
  const currentTier = hasTiers ? plan.tiers[selectedTier] || plan.tiers[0] : null;

  const basePrice = hasTiers && currentTier ? currentTier.price : plan.price;
  const currency = plan.currency || (lang === 'mn' ? '₮' : '$');
  const discount = plan.yearDiscount || 15;

  let displayPrice = basePrice;
  if (plan.billingToggle && isYearly) {
    displayPrice = Math.round(basePrice * 12 * (1 - discount / 100));
  }

  const remainingSlots = plan.slotsTotal > 0 ? Math.max(0, plan.slotsTotal - (plan.slotsTaken || 0)) : null;
  const isSoldOut = remainingSlots === 0;

  const priceLabel = plan.priceLabel || (lang === 'mn' ? 'төсөл' : 'project');

  const featureList = hasTiers && currentTier?.features
    ? currentTier.features
    : plan.features || [];

  return (
    <div
      className={`plan rise ${plan.featured ? 'featured' : ''} ${isSoldOut ? 'soldout' : ''} ${hasTiers ? 'has-tiers' : ''}`}
      style={{ animationDelay: `${0.07 * idx}s` }}
    >
      <div className="plan-head">
        <div className="plan-tag">
          {plan.name}
          {plan.featured && <span className="pro">PRO</span>}
          {remainingSlots !== null && (
            <span className={`plan-slots ${isSoldOut ? 'full' : ''}`}>
              {isSoldOut
                ? (lang === 'en' ? 'Sold out' : 'Захиалга дүүрсэн')
                : (lang === 'en' ? `${remainingSlots} left` : `${remainingSlots} үлдсэн`)}
            </span>
          )}
        </div>

        {plan.billingToggle ? (
          <div className="plan-billing" role="tablist">
            <button
              type="button"
              className={!isYearly ? 'on' : ''}
              onClick={() => setIsYearly(false)}
            >
              {lang === 'en' ? 'Monthly' : 'Сараар'}
            </button>
            <button
              type="button"
              className={isYearly ? 'on' : ''}
              onClick={() => setIsYearly(true)}
            >
              {lang === 'en' ? 'Yearly' : 'Жилээр'}
            </button>
          </div>
        ) : hasTiers ? (
          <div className="plan-cond">
            <span>
              {lang === 'en' ? 'Installments available' : 'Хувааж төлөх боломжтой'}
            </span>
          </div>
        ) : null}
      </div>

      <div className="plan-body">
        <div className="plan-amount">
          {currency}{displayPrice.toLocaleString()}
        </div>

        {isYearly && discount > 0 && (
          <div className="plan-was">
            <s>{currency}{(basePrice * 12).toLocaleString()}</s>
            <span className="plan-off">−{discount}% OFF</span>
          </div>
        )}

        <div className={`plan-per ${isYearly ? 'yr' : ''}`}>
          {isYearly ? (
            discount > 0 ? (
              <>
                {lang === 'en' ? '12 months · save ' : '12 сар · хэмнэлт '}
                <b>{currency}{Math.round(basePrice * 12 * (discount / 100)).toLocaleString()}</b>
              </>
            ) : (
              lang === 'en' ? '12 months' : '12 сар'
            )
          ) : (
            `/ ${priceLabel}`
          )}
        </div>

        <p className="plan-desc">{plan.description}</p>

        {hasTiers && (
          <div className="plan-tiers" role="radiogroup">
            {plan.tiers.map((tier, tIdx) => (
              <button
                key={tier.id || tIdx}
                type="button"
                role="radio"
                aria-checked={selectedTier === tIdx}
                className={`plan-tier ${selectedTier === tIdx ? 'on' : ''}`}
                onClick={() => setSelectedTier(tIdx)}
              >
                <span className="plan-radio" />
                <span className="plan-tier-name">{tier.name}</span>
                {tier.pages && <em>{tier.pages} {lang === 'en' ? 'pages' : 'нүүр'}</em>}
              </button>
            ))}
          </div>
        )}

        <div className="plan-incl">
          {lang === 'en' ? "What's included" : 'Багцад багтсан'}
        </div>

        <ul className="plan-feat">
          {featureList.map((f, fIdx) => (
            <li key={fIdx}>
              {f}
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className={`btn ${plan.featured ? 'accent-btn' : 'ghost'} ${isSoldOut ? 'is-disabled' : ''}`}
        >
          {isSoldOut
            ? (lang === 'en' ? 'Sold out' : 'Дүүрсэн')
            : (plan.buttonText || (lang === 'en' ? 'Choose plan' : 'Сонгох'))}
        </a>
      </div>
    </div>
  );
}
