'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function Contact() {
  const { t, lang } = useLanguage();
  const formContent = t.contact?.form || {};

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    type: '',
    budget: '',
    message: ''
  });

  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        phone: '',
        type: '',
        budget: '',
        message: ''
      });
    }, 700);
  };

  return (
    <section className="section container outro" id="contact" data-anim="zoom">
      {/* Centered Eyebrow */}
      <div className="eyebrow center">
        {t.contact?.eyebrow || (lang === 'en' ? 'Start a project' : 'Захиалга өгөх')}
      </div>

      {/* Outro Big Headline */}
      <div className="outro-big">
        <span className="h-mask">
          <span className="reveal-line">
            {t.contact?.headingLine1 || (lang === 'en' ? "Let's work" : 'Хамтдаа')}
          </span>
        </span>
        <span className="h-mask">
          <span className="reveal-line" style={{ animationDelay: '0.07s' }}>
            <span className="accent">
              {t.contact?.headingAccent || (lang === 'en' ? 'together' : 'бүтээцгээе')}
            </span>
          </span>
        </span>
      </div>

      {/* Intro text */}
      <p className="order-intro rise" style={{ animationDelay: '0.08s' }}>
        {t.contact?.sub || (lang === 'en'
          ? "Tell me what you'd like made and leave your details — I'll send a quote back."
          : 'Надаар юу хийлгэхийг хүсэж байгаагаа сонгоод мэдээллээ үлдээгээрэй — би үнийн санал буцаан илгээнэ.')}
      </p>

      {/* Order Form */}
      <div className="rise" style={{ animationDelay: '0.12s' }}>
        {status === 'success' ? (
          <div className="max-w-[600px] mx-auto p-8 rounded-2xl bg-[var(--card)] border border-green-500/30 text-center">
            <h3 className="text-xl font-bold text-white mb-2">
              {formContent.successTitle || (lang === 'en' ? 'Request sent!' : 'Амжилттай илгээлээ!')}
            </h3>
            <p className="text-sm text-neutral-300 mb-6">
              {formContent.successMsg || (lang === 'en' ? "Thank you — I'll get back to you shortly." : 'Баярлалаа — би тантай яаралтай холбогдох болно.')}
            </p>
            <button
              type="button"
              onClick={() => setStatus('idle')}
              className="btn accent-btn"
            >
              OK
            </button>
          </div>
        ) : (
          <form className="order-form" onSubmit={handleSubmit}>
            <div className="of-row">
              <label>
                {formContent.nameLabel || (lang === 'en' ? 'Your name' : 'Нэр')}
                <input
                  name="name"
                  required
                  placeholder={formContent.namePlaceholder || (lang === 'en' ? 'Name' : 'Нэр')}
                  value={formData.name}
                  onChange={handleChange}
                />
              </label>

              <label>
                {formContent.phoneLabel || (lang === 'en' ? 'Your phone number' : 'Таны дугаар')}
                <input
                  name="phone"
                  type="tel"
                  required
                  placeholder={formContent.phonePlaceholder || '+976 8888 8888'}
                  value={formData.phone}
                  onChange={handleChange}
                />
              </label>
            </div>

            <label>
              {formContent.typeLabel || (lang === 'en' ? 'What would you like made?' : 'Юу хийлгэх вэ?')}
              <input
                name="type"
                required
                placeholder={formContent.typePlaceholder || (lang === 'en' ? 'e.g. Logo design, brand identity, poster, packaging, website…' : 'Жишээ: Лого, brand identity, постер, баглаа боодол, вебсайт…')}
                value={formData.type}
                onChange={handleChange}
              />
            </label>

            <label>
              {formContent.budgetLabel || (lang === 'en' ? 'Budget (optional)' : 'Төсөв (заавал биш)')}
              <input
                name="budget"
                placeholder={formContent.budgetPlaceholder || (lang === 'en' ? 'e.g. $500–1500' : 'Жишээ: 1–3 сая ₮')}
                value={formData.budget}
                onChange={handleChange}
              />
            </label>

            <label>
              {formContent.messageLabel || (lang === 'en' ? 'Project details' : 'Төслийн тухай')}
              <textarea
                name="message"
                required
                placeholder={formContent.messagePlaceholder || (lang === 'en' ? 'Goals, timeline, links…' : 'Зорилго, хугацаа, холбоос…')}
                value={formData.message}
                onChange={handleChange}
              />
            </label>

            <button
              className="btn accent-btn of-submit"
              type="submit"
              disabled={status === 'loading'}
            >
              {status === 'loading'
                ? (lang === 'en' ? 'Sending…' : 'Илгээж байна…')
                : (formContent.submit || (lang === 'en' ? 'Get a quote →' : 'Үнийн санал авах →'))}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
