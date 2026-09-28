'use client';

import React, { useEffect, useRef } from 'react';

export default function BackgroundEffects() {
  const progressRef = useRef(null);
  const dotfieldRef = useRef(null);
  const cursorRef = useRef(null);
  const cursorRingRef = useRef(null);

  // 1. anim-ready class detection (matching reference 3 consecutive RAFs)
  useEffect(() => {
    let rafCount = 0;
    let frameId = 0;
    let lastTime = performance.now();

    const checkReady = (currentTime) => {
      if (currentTime - lastTime < 60) {
        rafCount++;
      } else {
        rafCount = 0;
      }
      lastTime = currentTime;

      if (rafCount >= 3) {
        document.documentElement.classList.add('anim-ready');
        return;
      }
      frameId = requestAnimationFrame(checkReady);
    };

    frameId = requestAnimationFrame(checkReady);
    const timeoutId = setTimeout(() => {
      cancelAnimationFrame(frameId);
      document.documentElement.classList.add('anim-ready');
    }, 2500);

    return () => {
      cancelAnimationFrame(frameId);
      clearTimeout(timeoutId);
    };
  }, []);

  // 2. Scroll progress bar, dotfield tracking, custom physics cursor
  useEffect(() => {
    // Top scroll progress bar
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0 && progressRef.current) {
        const progress = Math.min(1, Math.max(0, window.scrollY / totalScroll));
        progressRef.current.style.transform = `scaleX(${progress})`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // Touch device guard
    const isTouch = window.matchMedia('(hover: none), (pointer: coarse)').matches;
    if (isTouch) {
      return () => window.removeEventListener('scroll', handleScroll);
    }

    document.body.classList.add('custom-cursor-on');

    const dotfield = dotfieldRef.current;
    const cursor = cursorRef.current;
    const cursorRing = cursorRingRef.current;

    // Dotfield tracking variables (exact reference easing)
    let targetX = -500;
    let targetY = -500;
    let dotX = -500;
    let dotY = -500;
    let dotRafId = 0;
    let isDotRunning = false;
    let idleTicks = 0;

    const tickDotfield = () => {
      const dx = targetX - dotX;
      const dy = targetY - dotY;
      dotX += 0.16 * dx;
      dotY += 0.16 * dy;

      if (dotfield) {
        dotfield.style.setProperty('--mx', `${dotX.toFixed(1)}px`);
        dotfield.style.setProperty('--my', `${dotY.toFixed(1)}px`);
      }

      if (Math.abs(dx) < 0.3 && Math.abs(dy) < 0.3) {
        if (++idleTicks > 10) {
          isDotRunning = false;
          return;
        }
      } else {
        idleTicks = 0;
      }

      dotRafId = requestAnimationFrame(tickDotfield);
    };

    // Magnetic Physics Cursor variables (exact reference squash & stretch)
    let ringX = window.innerWidth / 2;
    let ringY = window.innerHeight / 2;
    let mouseX = ringX;
    let mouseY = ringY;
    let prevRingX = ringX;
    let prevRingY = ringY;
    let clickScale = 0;
    let cursorRafId = 0;

    const tickCursor = () => {
      ringX += (mouseX - ringX) * 0.2;
      ringY += (mouseY - ringY) * 0.2;

      const deltaX = ringX - prevRingX;
      const deltaY = ringY - prevRingY;
      prevRingX = ringX;
      prevRingY = ringY;

      const speed = Math.min(1, Math.hypot(deltaX, deltaY) / 16);
      const angle = Math.atan2(deltaY, deltaX);

      // GPU translate3d with physics stretch & rotate (Zero layout reflow!)
      if (cursorRing) {
        cursorRing.style.transform = `translate3d(${ringX.toFixed(1)}px, ${ringY.toFixed(1)}px, 0) translate(-50%, -50%) rotate(${angle.toFixed(3)}rad) scale(${(1 + 0.55 * speed).toFixed(3)}, ${(1 - 0.32 * speed).toFixed(3)})`;
      }

      clickScale *= 0.86;
      if (cursor) {
        cursor.style.transform = `translate3d(${mouseX.toFixed(1)}px, ${mouseY.toFixed(1)}px, 0) translate(-50%, -50%) scale(${(1 + 0.9 * clickScale).toFixed(3)})`;
      }

      cursorRafId = requestAnimationFrame(tickCursor);
    };

    cursorRafId = requestAnimationFrame(tickCursor);

    // Mouse movement listener (passive & layout-safe)
    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      targetX = mouseX;
      targetY = mouseY;
      clickScale = 1;

      if (dotfield) {
        dotfield.classList.add('lit');
      }

      if (!isDotRunning) {
        isDotRunning = true;
        idleTicks = 0;
        dotRafId = requestAnimationFrame(tickDotfield);
      }
    };

    const onMouseLeave = () => {
      if (dotfield) dotfield.classList.remove('lit');
    };

    const onMouseDown = () => {
      if (cursorRing) cursorRing.classList.add('is-down');
    };

    const onMouseUp = () => {
      if (cursorRing) cursorRing.classList.remove('is-down');
    };

    // Interactive Hover Selector
    const interactiveSel = 'a, button, input, textarea, select, [data-edit], .folio-item, .srv-item, .faq .q, .nav-link, .plan, .connect-card, .cta';

    const onMouseOver = (e) => {
      if (e.target?.closest?.(interactiveSel)) {
        if (cursorRing) cursorRing.classList.add('is-hover');
      }
    };

    const onMouseOut = (e) => {
      if (e.target?.closest?.(interactiveSel)) {
        if (cursorRing) cursorRing.classList.remove('is-hover');
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseover', onMouseOver, { passive: true });
    document.addEventListener('mouseout', onMouseOut, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    return () => {
      cancelAnimationFrame(cursorRafId);
      cancelAnimationFrame(dotRafId);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.body.classList.remove('custom-cursor-on');
    };
  }, []);

  return (
    <>
      {/* 2px Scroll progress bar at top */}
      <div ref={progressRef} className="progress" aria-hidden="true" />

      {/* Interactive Dotfield */}
      <div ref={dotfieldRef} className="dotfield" aria-hidden="true" />

      {/* Vertical Container Gridlines */}
      <div className="gridlines" aria-hidden="true" />

      {/* Custom magnetic Cursor and Ring (GPU Composited) */}
      <div ref={cursorRef} className="cursor" aria-hidden="true" />
      <div ref={cursorRingRef} className="cursor-ring" aria-hidden="true" />
    </>
  );
}
