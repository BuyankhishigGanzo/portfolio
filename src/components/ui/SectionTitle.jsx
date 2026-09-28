'use client';

import React from 'react';
import ScrollReveal from './ScrollReveal';

export default function SectionTitle({
  eyebrow,
  side,
  heading,
  headingAccent,
  sub,
  center = false,
  className = ''
}) {
  return (
    <div className={`mb-12 md:mb-16 ${center ? 'text-center' : 'text-left'} ${className}`}>
      {/* Eyebrow & Side Label */}
      <ScrollReveal variant="up" delay={0.02} duration={0.6}>
        <div className={`flex items-center gap-4 ${center ? 'justify-center' : 'justify-between'} mb-3`}>
          {eyebrow && (
            <span className="eyebrow !mb-0">{eyebrow}</span>
          )}
          {side && (
            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-neutral-500">
              {side}
            </span>
          )}
        </div>
      </ScrollReveal>

      {/* Masked Headline Lines */}
      <h2 className={`h2 ${center ? 'center' : ''}`}>
        <ScrollReveal variant="line" delay={0.06} duration={0.75} as="span">
          {heading}
        </ScrollReveal>
        {headingAccent && (
          <ScrollReveal variant="line" delay={0.14} duration={0.75} as="span">
            <span className="accent">{headingAccent}</span>
          </ScrollReveal>
        )}
      </h2>

      {/* Subtitle / Note */}
      {sub && (
        <ScrollReveal variant="up" delay={0.18} duration={0.7}>
          <p className={`text-neutral-400 text-sm md:text-base max-w-2xl leading-relaxed mt-4 ${center ? 'mx-auto' : ''}`}>
            {sub}
          </p>
        </ScrollReveal>
      )}
    </div>
  );
}
