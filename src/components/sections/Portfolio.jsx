'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function Portfolio() {
  const { t, lang } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('4320a3a6-909c-4d60-ba22-94c4ecbb2679');
  const [selectedProject, setSelectedProject] = useState(null);

  const allProjects = t.work?.projects || [];
  const categoryOrder = [
    '4320a3a6-909c-4d60-ba22-94c4ecbb2679',
    '87aff9a1-6ea1-4880-aa24-557765a6e16f',
    '20ec7d0f-9a25-4c89-8816-b828aeaf4181',
    '18a252e6-337e-45e2-a9da-34052a3c9d9c',
    'db3fa4eb-7a49-4d2f-93ee-720ad7925bd3',
    '83475072-ad53-4381-9fac-3cd57f15f895',
  ];
  const categories = [...(t.work?.categories || [])].sort(
    (a, b) => categoryOrder.indexOf(a.id) - categoryOrder.indexOf(b.id),
  );
  const featuredOrder = [
    '46340201-778c-4247-8d88-5caf71cf8e4a',
    'fe7032e6-663b-43bb-8206-954511e2f7b3',
    'c2a1e09b-ede1-4a4b-8fd6-bdf1a0e09284',
    '91d51238-9274-4a5b-a5d1-3f51f76874af',
    '585249d7-2765-4b2d-88ae-8b5206bb924b',
    'd440e7ff-d9fb-4326-b2c2-925e86b5d2a0',
  ];
  const mainProjects = featuredOrder
    .map((id) => allProjects.find((project) => project.id === id))
    .filter(Boolean);
  const categoryLabels = {
    '46340201-778c-4247-8d88-5caf71cf8e4a': 'Брэндинг (M)',
    'fe7032e6-663b-43bb-8206-954511e2f7b3': 'TV application | UI/UX',
    'c2a1e09b-ede1-4a4b-8fd6-bdf1a0e09284': 'Website UI/UX',
    '91d51238-9274-4a5b-a5d1-3f51f76874af': 'Савалгаа дизайн',
    '585249d7-2765-4b2d-88ae-8b5206bb924b': 'Сошил медиа',
    'd440e7ff-d9fb-4326-b2c2-925e86b5d2a0': 'Брэндинг',
  };
  const galleryOrder = [
    '1790166596770-japan1.jpg', '1790166869137-Ayanz2.jpg', '1790224471463-Ayanz3.jpg',
    '1790167540092-so1.jpg', '1790167624813-so6.jpg', '1790167524794-so2.jpg', '1790224545579-so4.jpg',
    '1790169722217-so5.jpg', '1790224652639-so7.jpg', '1790224675484-so3.jpg',
    '1790169212280-ynmal2.jpg', '1790169170105-ynmal1.jpg', '1790169260283-ynmal3.jpg', '1790224861078-ynmal4.jpg',
    '1790225170914-Tx1.jpg', '1790225213555-Tx4.jpg', '1790225283851-Tx2.jpg', '1790225303393-Tx3.jpg',
    '1790226141332-toktok2.jpg', '1790226194645-toktok1.jpg', '1790227047331-toktok3.jpg',
    '1790225700615-argun1.jpg', '1790225714598-argun2.jpg', '1790225725792-argun3.jpg', '1790225738947-argun4.jpg',
    '1790226785965-Tet2.jpg', '1790226799673-Tet4.jpg', '1790226772515-Tet1.jpg',
    '1790226510837-Ren1.jpg', '1790226524070-Ren2.jpg', '1790226537912-Ren4.jpg', '1790226552104-Ren3.jpg',
  ];
  const galleryProjects = allProjects
    .filter((project) => project.category_id === activeCategory)
    .sort((a, b) => {
      const aIndex = galleryOrder.findIndex((name) => a.image?.endsWith(name));
      const bIndex = galleryOrder.findIndex((name) => b.image?.endsWith(name));
      return (aIndex < 0 ? 999 : aIndex) - (bIndex < 0 ? 999 : bIndex);
    })
    .filter((project) => activeCategory !== categoryOrder[0] || galleryOrder.some((name) => project.image?.endsWith(name)));

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
                {categoryLabels[project.id] || project.category || (lang === 'en' ? 'Design' : 'Дизайн')}
                {project.client ? ` · ${project.client}` : project.year ? ` · ${project.year}` : ''}
              </span>
            </div>

            <div className="folio-meta-r">
              <span className="folio-arrow">↗</span>
              <span className="folio-detail">
                {lang === 'en' ? 'View details' : 'Дэлгэрэнгүй үзэх'}
              </span>
              {!project.projectUrl && (
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

      {/* Main 6 Projects Masonry Grid */}
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
                const isWide = [2, 7, 20, 25].includes(index) && activeCategory === categoryOrder[0];
                return (
                  <button
                    key={project.id || project.image}
                    type="button"
                    className={`rise fg-item fg-${isWide ? '16x9' : '1x1'}`}
                    style={{ animationDelay: `${(index % 4) * 0.05}s` }}
                    onClick={() => setSelectedProject(project)}
                    aria-label={project.title}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={project.image} alt={project.title} loading="lazy" />
                  </button>
                );
              })}
            </div>
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
