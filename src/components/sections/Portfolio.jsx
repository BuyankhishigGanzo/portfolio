'use client';

import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useLanguage } from '@/context/LanguageContext';

export default function Portfolio() {
  const { t, lang } = useLanguage();
  const allProjects = t.work?.projects || [];
  const categories = t.work?.categories || [];
  const [activeCategory, setActiveCategory] = useState(categories[0]?.id || 'all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [mounted, setMounted] = useState(false);
  const closeButtonRef = useRef(null);
  const lightboxTriggerRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Sync activeCategory when categories change or initialize
  useEffect(() => {
    if (categories.length > 0 && (!activeCategory || !categories.some(c => c.id === activeCategory))) {
      setActiveCategory(categories[0].id);
    }
  }, [categories, activeCategory]);

  const openProject = (project) => {
    lightboxTriggerRef.current = document.activeElement;
    setSelectedProject(project);
  };

  const closeProject = () => setSelectedProject(null);

  useEffect(() => {
    if (!selectedProject) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const frameId = requestAnimationFrame(() => closeButtonRef.current?.focus());
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') closeProject();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      cancelAnimationFrame(frameId);
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      lightboxTriggerRef.current?.focus?.();
    };
  }, [selectedProject]);

  const mainProjects = allProjects.filter((p) => p.featured).length > 0
    ? allProjects.filter((p) => p.featured)
    : allProjects.slice(0, 6);

  const galleryProjects = (!activeCategory || activeCategory === 'all')
    ? allProjects
    : allProjects.filter((project) => project.category_id === activeCategory || project.categorySlug === activeCategory);

  const renderProjectItem = (project, idx, showIndex = true) => {
    return (
      <div
        key={project.id || idx}
        className="folio-item rise"
        style={{ animationDelay: `${(idx % 2) * 0.08}s` }}
      >
        <div
          onClick={() => openProject(project)}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault();
              openProject(project);
            }
          }}
          role="button"
          tabIndex={0}
          aria-label={`${project.title} — ${lang === 'en' ? 'View details' : 'Дэлгэрэнгүй үзэх'}`}
          className="cursor-pointer"
        >
          <div className={`folio-media ${!project.image ? '!border-0 !border-none !bg-[#111111]' : ''}`}>
            {project.image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
              />
            ) : (
              <div className="w-full aspect-[4/3] flex items-center justify-center text-neutral-400 bg-[#111111] !border-0 !border-none font-semibold text-center p-4">
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
                {project.category || (lang === 'en' ? 'System' : 'Систем')}
                {project.client ? ` · ${project.client}` : project.year ? ` · ${project.year}` : ''}
              </span>
            </div>

            <div className="folio-meta-r">
              <span className="folio-arrow">↗</span>
              <span className="folio-detail">
                {lang === 'en' ? 'View details' : 'Дэлгэрэнгүй үзэх'}
              </span>
              {!project.url && !project.projectUrl && (
                <span className="folio-soon">
                  {lang === 'en' ? 'Coming soon' : 'Тун удахгүй'}
                </span>
              )}
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

      {/* Main Projects Masonry Grid */}
      {mainProjects.length > 0 && (
        <div className="folio">
          {mainProjects.map((p, idx) => renderProjectItem(p, idx, false))}
        </div>
      )}

      {categories.length > 0 && (
        <>
          <div className="folio-cats-head">
            {t.work?.categoriesHead || (lang === 'en' ? 'Other completed work' : 'Бусад гүйцэтгэсэн ажлууд')}
          </div>
          {t.work?.categoriesNote && <p className="folio-cats-note">{t.work.categoriesNote}</p>}
          <div className="folio-cats" role="tablist">
            {categories.map((category, index) => {
              const isActive = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`folio-cat-chip ${isActive ? 'on' : ''}`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  <span className="fcc-n">{String(index + 1).padStart(2, '0')}</span>
                  <span className="fcc-t">{category.name}</span>
                  <span className="fcc-x">{isActive ? '–' : '+'}</span>
                </button>
              );
            })}
          </div>
          <div className="folio-catview">
            <div className="folio-gallery">
              {galleryProjects.map((project, index) => {
                const isWide = [2, 5].includes(index);
                return (
                  <button
                    key={project.id || index}
                    type="button"
                    className={`rise fg-item fg-${isWide ? '16x9' : '1x1'} ${!project.image ? '!border-0 !border-none !bg-[#111111]' : ''}`}
                    style={{ animationDelay: `${(index % 4) * 0.05}s` }}
                    onClick={() => openProject(project)}
                    aria-label={project.title}
                  >
                    {project.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={project.image} alt={project.title} loading="lazy" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-[#111111] text-neutral-400 font-medium p-4 text-center text-xs !border-0 !border-none">
                        {project.title}
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </>
      )}

      {/* Lightbox Modal rendered via Portal to escape transforms and display above header */}
      {mounted && selectedProject && createPortal(
        <div
          className="fixed inset-0 z-[99999] bg-black/92 flex items-center justify-center p-4 sm:p-6"
          onClick={closeProject}
          role="dialog"
          aria-modal="true"
          aria-labelledby="portfolio-dialog-title"
        >
          <div
            className="relative max-w-4xl w-full bg-[#0c0c0c] border border-white/10 rounded-2xl overflow-hidden p-6 md:p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              ref={closeButtonRef}
              type="button"
              onClick={closeProject}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors text-lg"
              aria-label="Close"
            >
              ✕
            </button>

            <div className="aspect-[16/10] rounded-xl overflow-hidden mb-6 bg-[#111111] !border-0 !border-none flex items-center justify-center">
              {selectedProject.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-contain"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-neutral-300 bg-[#111111] text-xl font-semibold !border-0 !border-none p-6 text-center">
                  {selectedProject.title}
                </div>
              )}
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <span className="text-xs font-bold text-[var(--accent)] uppercase tracking-widest block mb-1">
                  {selectedProject.category || selectedProject.year || '2026'}
                </span>
                <h3 id="portfolio-dialog-title" className="text-2xl font-bold text-white uppercase tracking-tight">
                  {selectedProject.title}
                </h3>
                {selectedProject.description && (
                  <p className="text-sm text-neutral-400 mt-2 max-w-xl">
                    {selectedProject.description}
                  </p>
                )}
              </div>

              {selectedProject.url ? (
                <a
                  href={selectedProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta accent-btn !bg-[#ff401f] !text-white !font-bold !text-xs !px-6 hover:brightness-110 transition-all shrink-0"
                >
                  <span className="cta-roll">
                    <span className="cta-l">{lang === 'en' ? 'Visit website →' : 'Вэбсайт руу зочлох →'}</span>
                    <span className="cta-l" aria-hidden="true">{lang === 'en' ? 'Visit website →' : 'Вэбсайт руу зочлох →'}</span>
                  </span>
                </a>
              ) : (
                <a
                  href="#contact"
                  onClick={closeProject}
                  className="cta accent-btn !bg-[#ff401f] !text-white !font-bold !text-xs !px-6 hover:brightness-110 transition-all shrink-0"
                >
                  <span className="cta-roll">
                    <span className="cta-l">{t.nav?.ctaRoll1 || (lang === 'en' ? 'Order' : 'Захиалга')}</span>
                    <span className="cta-l" aria-hidden="true">{t.nav?.ctaRoll2 || (lang === 'en' ? 'Order' : 'Захиалга')}</span>
                  </span>
                </a>
              )}
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}
