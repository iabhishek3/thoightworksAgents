"use client";

import { useEffect } from "react";

export default function ScrollAnimations() {
  useEffect(() => {
    // A1: Scroll-triggered section reveals
    const reveals = document.querySelectorAll(".reveal");
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    reveals.forEach((el) => revealObserver.observe(el));

    // A4: Dashboard demo — pause until visible
    const demo = document.querySelector(".demo");
    if (demo) {
      const demoObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              demo.classList.add("demo-playing");
              demoObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15 }
      );
      demoObserver.observe(demo);
    }

    // A2 + A8: Count-up animation for impact numbers and use case metrics
    const countEls = document.querySelectorAll("[data-count-to]");
    const countObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const to = parseFloat(el.dataset.countTo || "0");
          const suffix = el.dataset.countSuffix || "";
          const prefix = el.dataset.countPrefix || "";
          const decimals = (el.dataset.countTo || "").includes(".") ? 1 : 0;
          const duration = 1500;
          const start = performance.now();

          function tick(now: number) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
            const current = eased * to;
            el.textContent = prefix + current.toFixed(decimals) + suffix;
            if (progress < 1) requestAnimationFrame(tick);
          }
          requestAnimationFrame(tick);
          countObserver.unobserve(el);
        });
      },
      { threshold: 0.3 }
    );
    countEls.forEach((el) => countObserver.observe(el));

    // A6: Hero subtitle typing effect
    const typeEl = document.querySelector("[data-type]") as HTMLElement | null;
    if (typeEl) {
      const text = typeEl.dataset.type || "";
      typeEl.textContent = "";
      typeEl.classList.add("typing-active");
      let i = 0;
      const typeInterval = setInterval(() => {
        typeEl.textContent = text.slice(0, ++i);
        if (i >= text.length) {
          clearInterval(typeInterval);
          // Blink cursor twice then remove
          setTimeout(() => typeEl.classList.remove("typing-active"), 1200);
        }
      }, 40);
    }

    // P1, P2, P4: Scroll-driven effects
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const nav = document.querySelector('.nav') as HTMLElement | null;
    const progressBar = document.querySelector('.nav-progress') as HTMLElement | null;
    const demoWrap = document.querySelector('.demo-wrap') as HTMLElement | null;
    const heroEl = document.querySelector('.hero') as HTMLElement | null;

    function onScrollUpdate() {
      // P1: Nav scroll response
      if (nav) {
        if (window.scrollY > 200) {
          nav.classList.add('nav-solid');
        } else {
          nav.classList.remove('nav-solid');
        }
      }

      // P4: Scroll progress bar
      if (progressBar) {
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? Math.min(window.scrollY / docHeight, 1) : 0;
        progressBar.style.transform = `scaleX(${progress})`;
      }

      // P2: Hero demo parallax
      if (demoWrap && heroEl) {
        const heroBottom = heroEl.offsetTop + heroEl.offsetHeight;
        const triggerStart = heroBottom - window.innerHeight;
        const scrollY = window.scrollY;
        if (scrollY > triggerStart && scrollY < heroBottom) {
          const progress = (scrollY - triggerStart) / (heroBottom - triggerStart);
          const scale = 1 - (progress * 0.05);
          const opacity = 1 - (progress * 0.4);
          demoWrap.style.transform = `scale(${scale})`;
          demoWrap.style.opacity = String(opacity);
        } else if (scrollY <= triggerStart) {
          demoWrap.style.transform = 'scale(1)';
          demoWrap.style.opacity = '1';
        }
      }
    }

    if (!prefersReducedMotion) {
      window.addEventListener('scroll', onScrollUpdate, { passive: true });
      onScrollUpdate();
    } else {
      // Reduced motion: nav always solid
      if (nav) nav.classList.add('nav-solid');
    }

    return () => {
      revealObserver.disconnect();
      countObserver.disconnect();
      window.removeEventListener('scroll', onScrollUpdate);
    };
  }, []);

  return null;
}
