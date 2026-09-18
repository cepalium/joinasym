'use client';

import { useEffect } from 'react';

/**
 * Scroll reveal, in an effect because the timing matters more than the bundle.
 *
 * ⚠️ This CANNOT run from the inline <head> script. That script executes at
 * DOMContentLoaded, before React hydrates, so every element it marks — whether
 * with a class or a data attribute — is a prop React did not render, and React
 * reports the whole tree as a hydration mismatch. `suppressHydrationWarning` on
 * <html> covers that element's own attributes only, one level deep, so it does
 * not help here. Effects run after hydration, which is exactly the point.
 *
 * The <head> script still sets `js` on <html>, and it has to: without it the
 * hidden state would land a frame late and the page would flash visible first.
 */
export function Reveal() {
  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]');

    if (!window.IntersectionObserver) {
      els.forEach((el) => el.setAttribute('data-in', ''));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.setAttribute('data-in', '');
          io.unobserve(entry.target);
        });
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.08 },
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
