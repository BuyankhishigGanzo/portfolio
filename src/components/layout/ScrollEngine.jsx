'use client';

import { useEffect } from 'react';

export default function ScrollEngine() {
  useEffect(() => {
    const mainEl = document.querySelector('main');
    if (!mainEl) return;

    const rootEl = document.documentElement;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const clampVw = (min, vw, max) => Math.max(min, Math.min(max, (window.innerWidth * vw) / 100));
    const validFlavors = ['up', 'left', 'right', 'zoom', 'blur'];

    let trackedItems = [];
    let isIntroActive = !prefersReducedMotion && document.querySelector('.site')?.classList.contains('intro') !== false;
    let isInitialRelease = false;
    let releaseTimer = null;
    let resizeTimer = null;
    let rafId = 0;

    const isMotionDisabled = () => prefersReducedMotion || rootEl.classList.contains('no-anim');

    // Register all animatable elements in main
    const refreshElements = () => {
      const existingMap = new Map(trackedItems.map((item) => [item.el, item]));
      const seen = new Set();
      const nextList = [];

      const register = (el, isLine, delay) => {
        if (!el || seen.has(el)) return;
        seen.add(el);

        const existing = existingMap.get(el);
        if (existing) {
          nextList.push(existing);
          return;
        }

        const animAttr = el.closest('[data-anim]')?.getAttribute('data-anim') || 'up';
        const flavor = rootEl.classList.contains('anim-fade')
          ? 'fade'
          : validFlavors.includes(animAttr)
          ? animAttr
          : 'up';

        const cls = isLine
          ? flavor === 'left'
            ? 'sr-line-l'
            : flavor === 'right'
            ? 'sr-line-r'
            : flavor === 'fade'
            ? 'sr-fade'
            : 'sr-line'
          : flavor === 'blur'
          ? 'sr-up'
          : `sr-${flavor}`;

        nextList.push({
          el,
          ref: (isLine && el.parentElement) || el,
          flav: flavor,
          cls,
          d: delay,
          p: 1,
          on: false,
          line: isLine
        });
      };

      // 1. Explicit rise & reveal-line elements
      mainEl.querySelectorAll('.rise').forEach((el) => {
        const delay = Math.max(0, (parseFloat(el.style.animationDelay) || 0.05) - 0.05);
        register(el, false, delay);
      });

      mainEl.querySelectorAll('.reveal-line').forEach((el) => {
        const delay = Math.max(0, (parseFloat(el.style.animationDelay) || 0.05) - 0.05);
        register(el, true, delay);
      });

      // 2. Reference component selectors
      const autoSelectors = [
        '.hero .eyebrow',
        '.hero-hint',
        '.folio-cats-head',
        '.folio-cats',
        '.clients-head',
        '.clients-band .marquee',
        '.clients-band .marquee-inner',
        '.tm-marquee',
        '.srv-item',
        '.faq .q',
        '.connect-card'
      ].join(', ');

      mainEl.querySelectorAll(autoSelectors).forEach((el) => {
        const idx = el.parentElement ? Array.prototype.indexOf.call(el.parentElement.children, el) : 0;
        register(el, false, 0.06 * Math.min(idx, 6));
      });

      // 3. Footer
      const foot = document.querySelector('footer.foot');
      if (foot) register(foot, false, 0);

      // Clean up removed elements
      trackedItems.forEach((item) => {
        if (!seen.has(item.el)) {
          item.el.classList.remove('sr-on', item.cls);
          item.el.style.removeProperty('--p');
          item.el.style.removeProperty('--sd');
        }
      });

      trackedItems = nextList;
    };

    // Apply or clean up progress on an element
    const updateElement = (item, progress) => {
      item.p = progress;

      // If fully visible and not during initial release ease
      if (progress >= 1 && !isInitialRelease) {
        if (item.on) {
          item.el.classList.remove('sr-on', item.cls);
          item.el.style.removeProperty('--p');
          item.el.style.removeProperty('--sd');
          item.on = false;
        }
        return;
      }

      if (!item.on) {
        item.el.classList.add('sr-on', item.cls);
        item.on = true;
      }
      item.el.style.setProperty('--p', progress.toFixed(3));
    };

    // Main animation calculation: batch read then batch write
    const tick = () => {
      if (isMotionDisabled()) {
        trackedItems.forEach((item) => {
          item.p = 1;
          if (item.on) {
            item.el.classList.remove('sr-on', item.cls);
            item.el.style.removeProperty('--p');
            item.on = false;
          }
        });
        return;
      }

      // If intro veil is still active, hold all elements at 0
      if (isIntroActive) {
        trackedItems.forEach((item) => {
          updateElement(item, 0);
        });
        return;
      }

      const vh = window.innerHeight;
      const scrollY = window.scrollY || rootEl.scrollTop;
      const maxScroll = Math.max(0, rootEl.scrollHeight - vh);

      const offsets = {
        up: [clampVw(44, 5.2, 96), 1],
        left: [0, 1],
        right: [0, 1],
        zoom: [clampVw(30, 3.4, 64), window.innerWidth >= 900 ? 0.86 : 0.9],
        blur: [clampVw(44, 5.2, 96), 1],
        fade: [0, 1]
      };

      // PASS 1: Batch read geometry (no layout thrashing!)
      const tops = trackedItems.map((item) => {
        const rect = item.ref.getBoundingClientRect();
        if (item.line) return rect.top;

        const [nVal, scaleFactor] = offsets[item.flav] || [0, 1];
        const remaining = 1 - item.p;
        const currentScale = 1 - remaining * (1 - scaleFactor);
        let untransformedTop = rect.top - remaining * nVal;

        if (scaleFactor < 1) {
          untransformedTop -= ((rect.height / currentScale) * (1 - currentScale)) / 2;
        }
        return untransformedTop;
      });

      const cVal = 0.34 * vh;

      // PASS 2: Batch write CSS variables and classes
      trackedItems.forEach((item, idx) => {
        const top = tops[idx];
        const docTop = top + scrollY;

        // Reference continuous bidirectional scroll progress formula
        const dVal = Math.max(
          0,
          Math.min(
            1,
            (Math.max(
              0.66 * vh - item.d * vh * 0.12,
              top + scrollY - maxScroll + 2,
              docTop < 0.98 * vh ? docTop + 2 : 0
            ) +
              cVal -
              top) /
              cVal
          )
        );

        // Smooth ease-out curve
        const progress = 1 - Math.pow(1 - dVal, 2);
        updateElement(item, progress);
      });
    };

    // Scroll event throttle to 1 RAF
    const onScroll = () => {
      if (!rafId) {
        rafId = requestAnimationFrame(() => {
          rafId = 0;
          tick();
        });
      }
    };

    // Debounced resize & mutation handler
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        refreshElements();
        tick();
      }, 60);
    };

    // Release entrance animation cascade (matching reference trigger)
    const release = () => {
      if (isMotionDisabled()) {
        isIntroActive = false;
        tick();
        return;
      }

      isIntroActive = false;
      isInitialRelease = true;
      rootEl.classList.add('sr-ease');

      trackedItems.forEach((item) => {
        item.el.style.setProperty('--sd', (item.d + 0.05).toFixed(2));
      });

      tick();

      clearTimeout(releaseTimer);
      releaseTimer = setTimeout(() => {
        isInitialRelease = false;
        rootEl.classList.remove('sr-ease');
        tick();
      }, 1900);
    };

    // Initial setup: register elements and hold at p=0 if intro is active
    refreshElements();
    tick();

    // Listen to intro release event
    window.__releaseScrollEngine = release;
    const onIntroReleaseEvent = () => release();
    document.addEventListener('intro-release', onIntroReleaseEvent);

    // Fallback release if no intro veil was mounted
    let fallbackTimer = setTimeout(() => {
      if (isIntroActive) {
        release();
      }
    }, 3800);

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);

    // Watch DOM subtree for dynamically added or removed components
    const mutObs = new MutationObserver(onResize);
    mutObs.observe(mainEl, { childList: true, subtree: true });

    let resizeObs;
    try {
      resizeObs = new ResizeObserver(onResize);
      resizeObs.observe(mainEl);
    } catch {}

    const classObs = new MutationObserver(() => tick());
    classObs.observe(rootEl, { attributes: true, attributeFilter: ['class'] });

    if (document.fonts?.ready) {
      document.fonts.ready.then(onResize).catch(() => {});
    }

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      document.removeEventListener('intro-release', onIntroReleaseEvent);
      cancelAnimationFrame(rafId);
      mutObs.disconnect();
      if (resizeObs) resizeObs.disconnect();
      classObs.disconnect();
      clearTimeout(resizeTimer);
      clearTimeout(releaseTimer);
      clearTimeout(fallbackTimer);
      rootEl.classList.remove('sr-ease');
      delete window.__releaseScrollEngine;

      trackedItems.forEach((item) => {
        item.el.classList.remove('sr-on', item.cls);
        item.el.style.removeProperty('--p');
        item.el.style.removeProperty('--sd');
      });
    };
  }, []);

  return null;
}
