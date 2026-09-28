'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function Portfolio() {
  const { t, lang } = useLanguage();
  const [activeCategory, setActiveCategory] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = t.work?.categories || [];
  const allProjects = t.work?.projects || [];

  const mainProjects = allProjects.slice(0, 6);
  const subProjects = activeCategory
    ? allProjects.filter((p) => p.category_id === activeCategory)
    : allProjects.slice(6);

  const renderProjectItem = (project, idx, showIndex = true) => {
    return (
      <div
        key={project.id || idx}
        className="folio-item rise"
        style={{ animationDelay: `${(idx % 2) * 0.08}s` }}
      >
        <div
          onClick={() => setSelectedProject(project)}
          className="cursor-pointer"
        >
          <div className="folio-media">
            {project.image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
              />
            ) : (
              <div className="w-full aspect-[4/3] flex items-center justify-center text-neutral-600 bg-neutral-900">
                {project.title}
              </div>
            )}
            {showIndex && (
              <span className="folio-idx">
                {String(idx + 1).padStart(2, '0')}
              </span>
            )}
          </div>

          <div className="folio-meta">
            <div className="folio-meta-l">
              <h3>{project.title}</h3>
              <span className="folio-cat">
                {project.category || (lang === 'en' ? 'Design' : 'Дизайн')}
                {project.year ? ` · ${project.year}` : ''}
              </span>
            </div>

            <div className="folio-meta-r">
              <span className="folio-arrow">↗</span>
              <span className="folio-detail">
                {lang === 'en' ? 'View details' : 'Дэлгэрэнгүй үзэх'}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="section container" id="work" data-anim="left">
      {/* Split Section Header */}
      <div className="head-s">
        <div className="head-s-top">
          <span className="eyebrow">{t.work?.eyebrow}</span>
          {t.work?.side && (
            <span className="sec-side">{t.work.side}</span>
          )}
        </div>
        <div className="head-s-main">
          <h2 className="h1big">
            <span className="h-mask">
              <span className="reveal-line">
                {t.work?.heading}
              </span>
            </span>
            <span className="h-mask">
              <span className="reveal-line" style={{ animationDelay: '0.07s' }}>
                <span className="accent">{t.work?.headingAccent}</span>
              </span>
            </span>
          </h2>
          {t.work?.sub && (
            <div className="sec-note rise">
              {t.work.sub}
            </div>
          )}
        </div>
      </div>

      {/* Main 6 Projects Masonry Grid */}
      {mainProjects.length > 0 && (
        <div className="folio">
          {mainProjects.map((p, idx) => renderProjectItem(p, idx, false))}
        </div>
      )}

      {/* Category Tabs & Sub-Grid */}
      {categories.length > 0 && (
        <>
          <div className="folio-cats-head">
            {t.work?.categoriesHead || (lang === 'en' ? 'Other completed work' : 'Бусад гүйцэтгэсэн ажлууд')}
          </div>
          {t.work?.categoriesNote && (
            <p className="folio-cats-note">{t.work.categoriesNote}</p>
          )}

          <div className="folio-cats" role="tablist">
            <button
              type="button"
              role="tab"
              className={`folio-cat-chip ${activeCategory === null ? 'on' : ''}`}
              onClick={() => setActiveCategory(null)}
            >
              <span className="fcc-n">00</span>
              <span className="fcc-t">{t.work?.allTab || (lang === 'en' ? 'All' : 'Бүгд')}</span>
              <span className="fcc-x">{activeCategory === null ? '–' : '+'}</span>
            </button>

            {categories.map((cat, idx) => {
              const isOn = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  className={`folio-cat-chip ${isOn ? 'on' : ''}`}
                  onClick={() => setActiveCategory(isOn ? null : cat.id)}
                >
                  <span className="fcc-n">{String(idx + 1).padStart(2, '0')}</span>
                  <span className="fcc-t">{cat.name}</span>
                  <span className="fcc-x">{isOn ? '–' : '+'}</span>
                </button>
              );
            })}
          </div>

          <div className="folio-catview">
            {subProjects.length === 0 ? (
              <p className="folio-empty">
                <span className="fe-main">
                  {lang === 'en' ? 'Nothing here yet —' : 'Одоохондоо энд ажил алга —'}
                </span>{' '}
                <span className="fe-soon">
                  {lang === 'en' ? 'coming soon' : 'тун удахгүй'}
                </span>
              </p>
            ) : (
              <div className="folio folio-sub">
                {subProjects.map((p, idx) => renderProjectItem(p, idx, true))}
              </div>
            )}
          </div>
        </>
      )}

      {/* Lightbox Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#0c0c0c] border border-white/20 rounded-2xl overflow-hidden p-6 md:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors text-lg"
              aria-label="Close"
            >
              ✕
            </button>

            <div className="aspect-[16/10] rounded-xl overflow-hidden mb-6 bg-black">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <span className="text-xs font-bold text-[var(--accent)] uppercase tracking-widest block mb-1">
                  {selectedProject.year || '2026'}
                </span>
                <h3 className="text-2xl font-bold text-white uppercase tracking-tight">
                  {selectedProject.title}
                </h3>
              </div>

              <a
                href="#contact"
                onClick={() => setSelectedProject(null)}
                className="cta !text-xs !px-6"
              >
                <span className="cta-roll">
                  <span className="cta-l">{t.nav?.ctaRoll1 || (lang === 'en' ? 'Order' : 'Захиалга')}</span>
                  <span className="cta-l" aria-hidden="true">{t.nav?.ctaRoll2 || (lang === 'en' ? 'Order' : 'Захиалга')}</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
