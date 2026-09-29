'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function Contact() {
  const { t, lang, siteConfig } = useLanguage();
  const formContent = t.contact?.form || {};

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    type: '',
    budget: '',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error' | 'email-opened'
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const openMailtoFallback = () => {
    const subject = lang === 'en'
      ? `Project inquiry — ${formData.type || 'New'}`
      : `Төслийн хүсэлт — ${formData.type || 'Шинэ'}`;
    const body = [
      `${formContent.nameLabel || 'Name'}: ${formData.name}`,
      `${formContent.phoneLabel || 'Phone'}: ${formData.phone}`,
      `${formContent.typeLabel || 'Project'}: ${formData.type}`,
      `${formContent.budgetLabel || 'Budget'}: ${formData.budget || '—'}`,
      '',
      formData.message,
    ].join('\n');
    window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus('email-opened');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.fallbackMailto) {
        // Fallback to mail client if no key is configured yet
        openMailtoFallback();
        return;
      }

      if (data.success) {
        setStatus('success');
        setFormData({ name: '', phone: '', type: '', budget: '', message: '' });
      } else {
        setStatus('error');
        setErrorMessage(data.message || (lang === 'en' ? 'Submission failed.' : 'Илгээж чадсангүй.'));
      }
    } catch (err) {
      console.error('Contact submission error:', err);
      setStatus('error');
      setErrorMessage(
        lang === 'en'
          ? 'Network error. Please try again or call us directly.'
          : 'Сүлжээний алдаа гарлаа. Дахин оролдох эсвэл шууд утсаар холбогдоно уу.'
      );
    }
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
          <div className="max-w-[600px] mx-auto p-8 rounded-2xl bg-[var(--card)] border border-green-500/40 text-center animate-fadeIn">
            <div className="w-14 h-14 rounded-full bg-green-500/20 text-green-400 mx-auto flex items-center justify-center text-3xl mb-4 font-bold">
              ✓
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              {formContent.successTitle || (lang === 'en' ? 'Request submitted successfully!' : 'Хүсэлт амжилттай илгээгдлээ!')}
            </h3>
            <p className="text-sm text-neutral-300 mb-6">
              {formContent.successMsg || (lang === 'en'
                ? 'Thank you — we will contact you shortly to discuss details.'
                : 'Баярлалаа — бид тантай яаралтайгаар хариу холбогдож дэлгэрэнгүйг тохирно.')}
            </p>
            <button
              type="button"
              onClick={() => setStatus('idle')}
              className="btn accent-btn"
            >
              {lang === 'en' ? 'Send another request' : 'Дахин хүсэлт илгээх'}
            </button>
          </div>
        ) : status === 'email-opened' ? (
          <div className="max-w-[600px] mx-auto p-8 rounded-2xl bg-[var(--card)] border border-green-500/30 text-center">
            <h3 className="text-xl font-bold text-white mb-2">
              {lang === 'en' ? 'Email draft opened' : 'Имэйл бэлэн боллоо'}
            </h3>
            <p className="text-sm text-neutral-300 mb-6">
              {lang === 'en'
                ? 'Review the message in your email app, then press Send.'
                : 'Имэйл апп дээрх мэдээллээ шалгаад Илгээх товчийг дарна уу.'}
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
            {status === 'error' && (
              <div className="p-4 mb-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-sm flex items-center justify-between gap-4">
                <span>
                  {errorMessage || formContent.errorMsg || (lang === 'en' ? 'Something went wrong. Please call us directly:' : 'Ямар нэг зүйл буруудлаа. Бидэнтэй шууд утсаар холбогдоно уу:')}{' '}
                  {siteConfig.phone && (
                    <a href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`} className="underline font-bold text-white">
                      {siteConfig.phone}
                    </a>
                  )}
                </span>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="px-3 py-1 rounded bg-white/10 hover:bg-white/20 text-xs text-white shrink-0"
                >
                  {lang === 'en' ? 'Dismiss' : 'Хаах'}
                </button>
              </div>
            )}

            <div className="of-row">
              <label>
                {formContent.nameLabel || (lang === 'en' ? 'Your name' : 'Нэр')}
                <input
                  name="name"
                  required
                  placeholder={formContent.namePlaceholder || (lang === 'en' ? 'Name' : 'Нэр')}
                  value={formData.name}
                  onChange={handleChange}
                  disabled={status === 'loading'}
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
                  disabled={status === 'loading'}
                />
              </label>
            </div>

            <label>
              {formContent.typeLabel || (lang === 'en' ? 'What would you like made?' : 'Юу хийлгэх вэ?')}
              <input
                name="type"
                required
                placeholder={formContent.typePlaceholder || (lang === 'en' ? 'e.g. Web platform, mobile app, internal system…' : 'Жишээ: Веб платформ, гар утасны апп…')}
                value={formData.type}
                onChange={handleChange}
                disabled={status === 'loading'}
              />
            </label>

            <label>
              {formContent.budgetLabel || (lang === 'en' ? 'Budget (optional)' : 'Төсөв (заавал биш)')}
              <input
                name="budget"
                placeholder={formContent.budgetPlaceholder || (lang === 'en' ? 'e.g. $500–1500' : 'Жишээ: 1–3 сая ₮')}
                value={formData.budget}
                onChange={handleChange}
                disabled={status === 'loading'}
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
                disabled={status === 'loading'}
              />
            </label>

            <button
              className="btn accent-btn of-submit disabled:opacity-50 disabled:cursor-not-allowed"
              type="submit"
              disabled={status === 'loading'}
            >
              {status === 'loading'
                ? (formContent.submitting || (lang === 'en' ? 'Submitting...' : 'Илгээж байна...'))
                : (formContent.submit || (lang === 'en' ? 'Submit Request →' : 'Хүсэлт илгээх →'))}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
