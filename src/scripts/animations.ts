/**
 * Precision Spinal Care — GSAP ScrollTrigger Animations
 * Uses a progressive enhancement approach: elements are visible by default
 * and only animated when GSAP is ready and ScrollTrigger fires.
 */

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initAnimations() {
  // Respect reduced motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return; // Elements stay visible via CSS defaults
  }

  // ─── Hero Text Reveal ─────────────────────────────────────────────
  // Hero elements can use gsap.from safely because they're above the fold
  gsap.from('.hero-title', {
    y: 60,
    opacity: 0,
    duration: 1.2,
    ease: 'expo.out',
    delay: 0.3,
  });

  gsap.from('.hero-subtitle', {
    y: 40,
    opacity: 0,
    duration: 1,
    ease: 'expo.out',
    delay: 0.6,
  });

  gsap.from('.hero-cta', {
    y: 30,
    opacity: 0,
    duration: 0.8,
    ease: 'expo.out',
    delay: 0.9,
  });

  gsap.from('.hero-badge', {
    y: -20,
    opacity: 0,
    duration: 0.6,
    ease: 'expo.out',
    delay: 0.1,
  });

  gsap.from('.hero-stats', {
    y: 30,
    opacity: 0,
    duration: 0.8,
    ease: 'expo.out',
    delay: 1.1,
  });

  // ─── Section Labels + Titles ──────────────────────────────────────
  // Use ScrollTrigger.batch for better performance
  gsap.utils.toArray<HTMLElement>('.section-label').forEach((el) => {
    gsap.fromTo(
      el,
      { x: -30, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
      }
    );
  });

  gsap.utils.toArray<HTMLElement>('.section-title').forEach((el) => {
    gsap.fromTo(
      el,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
      }
    );
  });

  // ─── Gold Line Grow ───────────────────────────────────────────────
  gsap.utils.toArray<HTMLElement>('.gold-line').forEach((el) => {
    gsap.fromTo(
      el,
      { scaleX: 0, transformOrigin: 'left center' },
      {
        scaleX: 1,
        duration: 0.8,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
      }
    );
  });

  // ─── Cards Stagger Up ────────────────────────────────────────────
  gsap.utils.toArray<HTMLElement>('.cards-stagger').forEach((container) => {
    const cards = container.querySelectorAll(
      '.card, .condition-card, .service-card, .why-card'
    );
    if (!cards.length) return;

    gsap.fromTo(
      cards,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.08,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: container,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );
  });

  // ─── Stat Counters ────────────────────────────────────────────────
  gsap.utils.toArray<HTMLElement>('.stat-number').forEach((el) => {
    const target = parseInt(el.getAttribute('data-count') || '0', 10);
    const obj = { val: 0 };

    gsap.to(obj, {
      val: target,
      duration: 2,
      ease: 'expo.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 90%',
        toggleActions: 'play none none none',
      },
      onUpdate: () => {
        el.textContent = Math.round(obj.val).toLocaleString();
      },
    });
  });

  // ─── Testimonial Parallax Float ───────────────────────────────────
  gsap.utils.toArray<HTMLElement>('.testimonial-card').forEach((el, i) => {
    // First make them visible with a stagger entrance
    gsap.fromTo(
      el,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        delay: i * 0.1,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
      }
    );

    // Then apply subtle parallax
    gsap.to(el, {
      y: i % 2 === 0 ? -15 : 15,
      ease: 'none',
      scrollTrigger: {
        trigger: el,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1.5,
      },
    });
  });

  // ─── Booking Card ─────────────────────────────────────────────────
  const bookingCard = document.querySelector('.booking-card');
  if (bookingCard) {
    gsap.fromTo(
      bookingCard,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: bookingCard,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );
  }

  // ─── About Image Ken Burns ────────────────────────────────────────
  const aboutImg = document.querySelector('.about-image');
  if (aboutImg) {
    gsap.to(aboutImg, {
      scale: 1.08,
      ease: 'none',
      scrollTrigger: {
        trigger: aboutImg,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      },
    });
  }

  // ─── About Section Content ────────────────────────────────────────
  const aboutContent = document.querySelector('.about-content');
  if (aboutContent) {
    gsap.fromTo(
      aboutContent,
      { x: 40, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.9,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: aboutContent,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );
  }

  const aboutImageWrap = document.querySelector('.about-image-wrap');
  if (aboutImageWrap) {
    gsap.fromTo(
      aboutImageWrap,
      { x: -40, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.9,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: aboutImageWrap,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );
  }

  // ─── Hours Grid Sequential ────────────────────────────────────────
  const hoursCards = document.querySelectorAll('.hours-card');
  if (hoursCards.length) {
    gsap.fromTo(
      hoursCards,
      { rotateX: 15, y: 30, opacity: 0 },
      {
        rotateX: 0,
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.08,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: '.hours-grid',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );
  }

  // ─── Generic fade-up ──────────────────────────────────────────────
  gsap.utils.toArray<HTMLElement>('.fade-up').forEach((el) => {
    gsap.fromTo(
      el,
      { y: 25, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
      }
    );
  });

  // ─── Section Dividers ─────────────────────────────────────────────
  gsap.utils.toArray<HTMLElement>('.section-divider').forEach((el) => {
    gsap.fromTo(
      el,
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 1.2,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 95%',
          toggleActions: 'play none none none',
        },
      }
    );
  });

  // Refresh ScrollTrigger after all animations are set up
  // Use a small delay to ensure layout is complete
  requestAnimationFrame(() => {
    ScrollTrigger.refresh();
  });
}
