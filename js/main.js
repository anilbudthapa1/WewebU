/* =============================================
   WeWebU — Fully Animated JS
   wewebu.com.au
   ============================================= */

'use strict';

/* ---- Guard: skip GSAP/Lenis if CDNs failed to load (e.g. offline in Termux) ---- */
const HAS_GSAP  = typeof gsap  !== 'undefined';
const HAS_LENIS = typeof Lenis !== 'undefined';

if (HAS_GSAP) gsap.registerPlugin(ScrollTrigger);

/* =============================================
   1. LENIS SMOOTH SCROLL
   ============================================= */
let lenis = null;
if (HAS_LENIS) {
  lenis = new Lenis({
    duration: 1.2,
    easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    wheelMultiplier: 0.9,
  });
  (function raf(time) {
    lenis.raf(time);
    if (HAS_GSAP) ScrollTrigger.update();
    requestAnimationFrame(raf);
  })();
}

/* =============================================
   2. PRELOADER
   ============================================= */
(function initPreloader() {
  const preloader = document.getElementById('preloader');
  const bar       = document.getElementById('plBar');
  const pct       = document.getElementById('plPct');

  let prog = 0;
  const step = () => {
    prog += Math.random() * 18 + 4;
    if (prog >= 100) {
      prog = 100;
      bar.style.width = '100%';
      pct.textContent = '100%';

      setTimeout(() => {
        const done = () => {
          preloader.style.display = 'none';
          document.body.classList.remove('is-loading');
          startHeroAnim();
        };
        if (HAS_GSAP) {
          gsap.to(preloader, { yPercent: -105, duration: 0.85, ease: 'power3.inOut', onComplete: done });
        } else {
          preloader.style.transition = 'transform 0.7s ease';
          preloader.style.transform  = 'translateY(-105%)';
          setTimeout(done, 750);
        }
      }, 250);
      return;
    }
    bar.style.width = prog + '%';
    pct.textContent = Math.round(prog) + '%';
    setTimeout(step, 60 + Math.random() * 60);
  };
  step();
})();

/* =============================================
   3. HERO ENTRANCE ANIMATION
   ============================================= */
function startHeroAnim() {
  // Always make hero content visible regardless of GSAP
  const showAll = () => {
    ['.hero-eyebrow','.hero-sub','.hero-ctas','.hero-stats','.scroll-hint'].forEach(sel => {
      document.querySelectorAll(sel).forEach(el => el.style.opacity = '1');
    });
    document.querySelectorAll('.tinner').forEach(el => el.style.transform = 'translateY(0)');
    document.querySelectorAll('.hv-card').forEach(el => el.style.opacity = '1');
    document.querySelectorAll('[data-target]').forEach(animateCount);
  };

  if (!HAS_GSAP) { showAll(); return; }

  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
  tl.from('.navbar', { yPercent: -120, opacity: 0, duration: 0.7 })
    .from('#scrollProgress', { scaleX: 0, duration: 0 }, '<')
    .to('.hero-eyebrow', { opacity: 1, y: 0, duration: 0.55 }, '-=0.2')
    .to('.tinner', { yPercent: 0, stagger: 0.13, duration: 0.9, ease: 'power3.out' }, '-=0.3')
    .to('.hero-sub',   { opacity: 1, y: 0, duration: 0.6 }, '-=0.5')
    .to('.hero-ctas',  { opacity: 1, y: 0, duration: 0.5 }, '-=0.4')
    .to('.hero-stats', { opacity: 1, y: 0, duration: 0.5 }, '-=0.35')
    .to('.hv-card',    { opacity: 1, scale: 1, stagger: 0.12, duration: 0.65, ease: 'back.out(1.6)' }, '-=0.4')
    .to('.scroll-hint', { opacity: 0.4, duration: 0.5 }, '-=0.1');
  tl.call(() => document.querySelectorAll('[data-target]').forEach(animateCount));

  // Real <span> underline (GSAP can't animate pseudo-elements)
  const uw = document.querySelector('.underline-word');
  if (uw && !uw.querySelector('.uw-line')) {
    const line = document.createElement('span');
    line.className = 'uw-line';
    line.style.cssText = 'display:block;position:absolute;bottom:-4px;left:0;right:0;height:4px;background:var(--grad);border-radius:2px;transform:scaleX(0);transform-origin:left;';
    uw.style.position = 'relative';
    uw.appendChild(line);
    gsap.to(line, { scaleX: 1, duration: 0.8, ease: 'power2.out', delay: 1.4 });
  }
}

/* =============================================
   4. SCROLL PROGRESS BAR
   ============================================= */
if (HAS_GSAP) {
  gsap.to('#scrollProgress', {
    scaleX: 1,
    ease: 'none',
    scrollTrigger: { scrub: 0.3, start: 'top top', end: 'bottom bottom' },
  });
}

/* =============================================
   5. SCROLL-TRIGGERED SECTION ANIMATIONS
   ============================================= */
function initScrollAnims() {
  if (!HAS_GSAP) return; // skip all scroll animations if GSAP not loaded

  /* Section headers (.js-reveal) */
  document.querySelectorAll('.js-reveal').forEach(el => {
    const tag = el.querySelector('.tag');
    const h2  = el.querySelector('h2');
    const sub = el.querySelector('.section-sub');
    const items = [tag, h2, sub].filter(Boolean);

    gsap.from(items, {
      scrollTrigger: { trigger: el, start: 'top 82%', once: true },
      y: 40, opacity: 0,
      stagger: 0.12, duration: 0.75,
      ease: 'power3.out',
    });
  });

  /* Service cards */
  gsap.from('.svc-card', {
    scrollTrigger: { trigger: '.services-grid', start: 'top 78%', once: true },
    y: 70, opacity: 0,
    stagger: 0.13, duration: 0.85,
    ease: 'power3.out',
  });

  /* Why us — slide from sides */
  gsap.from('.js-slide-left', {
    scrollTrigger: { trigger: '.why-grid', start: 'top 80%', once: true },
    x: -60, opacity: 0,
    duration: 0.9, ease: 'power3.out',
  });
  gsap.from('.js-slide-right', {
    scrollTrigger: { trigger: '.why-grid', start: 'top 80%', once: true },
    x: 60, opacity: 0,
    duration: 0.9, ease: 'power3.out',
    stagger: 0.1,
  });

  /* Feature items inside why-features */
  gsap.from('.feat', {
    scrollTrigger: { trigger: '.why-features', start: 'top 80%', once: true },
    x: 40, opacity: 0,
    stagger: 0.09, duration: 0.65,
    ease: 'power2.out',
  });

  /* Process: steps + connectors */
  gsap.from('.js-step', {
    scrollTrigger: { trigger: '.process-track', start: 'top 78%', once: true },
    y: 50, opacity: 0,
    stagger: 0.14, duration: 0.75,
    ease: 'power3.out',
  });
  // Draw connectors left→right after steps appear
  gsap.to('.step-connector', {
    scrollTrigger: { trigger: '.process-track', start: 'top 65%', once: true },
    scaleX: 1,
    stagger: 0.2, duration: 0.7,
    ease: 'power2.inOut',
    delay: 0.4,
  });

  /* Work cards */
  gsap.from('.work-card', {
    scrollTrigger: { trigger: '.work-grid', start: 'top 78%', once: true },
    y: 65, opacity: 0,
    stagger: 0.13, duration: 0.8,
    ease: 'power3.out',
  });

  /* Testimonials — scale pop */
  gsap.from('.testi-card', {
    scrollTrigger: { trigger: '.testi-grid', start: 'top 78%', once: true },
    scale: 0.88, opacity: 0,
    stagger: 0.12, duration: 0.7,
    ease: 'back.out(1.4)',
  });

  /* Contact card */
  gsap.from('.contact-card', {
    scrollTrigger: { trigger: '.contact-section', start: 'top 80%', once: true },
    y: 60, opacity: 0,
    duration: 0.9, ease: 'power3.out',
  });

  /* Footer brand + cols */
  gsap.from('.footer-brand, .footer-col', {
    scrollTrigger: { trigger: '.footer', start: 'top 88%', once: true },
    y: 30, opacity: 0,
    stagger: 0.08, duration: 0.6,
    ease: 'power2.out',
  });

  /* Parallax on hero blobs during scroll */
  gsap.to('.blob-1', {
    yPercent: -30,
    ease: 'none',
    scrollTrigger: { trigger: '.hero', scrub: 1.5 },
  });
  gsap.to('.blob-2', {
    yPercent: -20,
    ease: 'none',
    scrollTrigger: { trigger: '.hero', scrub: 2 },
  });
}

/* =============================================
   6. CANVAS PARTICLE BACKGROUND
   ============================================= */
function initParticles() {
  const canvas = document.getElementById('particles');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let W, H;
  const resize = () => {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  };
  resize();
  window.addEventListener('resize', resize, { passive: true });

  const COUNT = window.innerWidth > 768 ? 70 : 35;
  const MAX_DIST = 130;

  const pts = Array.from({ length: COUNT }, () => ({
    x: Math.random() * (W || 800),
    y: Math.random() * (H || 600),
    vx: (Math.random() - 0.5) * 0.35,
    vy: (Math.random() - 0.5) * 0.35,
    r: Math.random() * 1.6 + 0.8,
  }));

  let animId;
  const draw = () => {
    ctx.clearRect(0, 0, W, H);
    for (const p of pts) {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(99,102,241,0.55)';
      ctx.fill();
    }
    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        const dx = pts[i].x - pts[j].x;
        const dy = pts[i].y - pts[j].y;
        const d  = Math.hypot(dx, dy);
        if (d < MAX_DIST) {
          ctx.beginPath();
          ctx.moveTo(pts[i].x, pts[i].y);
          ctx.lineTo(pts[j].x, pts[j].y);
          ctx.strokeStyle = `rgba(99,102,241,${0.18 * (1 - d / MAX_DIST)})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }
    animId = requestAnimationFrame(draw);
  };
  draw();

  // Pause when tab hidden
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) cancelAnimationFrame(animId);
    else draw();
  });
}

/* =============================================
   7. CUSTOM CURSOR (desktop only)
   ============================================= */
function initCursor() {
  const ring = document.getElementById('cursorRing');
  const dot  = document.getElementById('cursorDot');
  if (!ring || !dot || window.matchMedia('(pointer:coarse)').matches) return;

  let mx = -200, my = -200;
  let rx = -200, ry = -200;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    dot.style.transform = `translate(${mx - 3}px, ${my - 3}px)`;
  });

  (function lerp() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.transform = `translate(${rx - 19}px, ${ry - 19}px)`;
    requestAnimationFrame(lerp);
  })();

  document.querySelectorAll('a, button, [data-tilt], .svc-card, .work-card, .testi-card').forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
  });
}

/* =============================================
   8. MAGNETIC BUTTONS
   ============================================= */
function initMagnetic() {
  if (!HAS_GSAP) return;
  document.querySelectorAll('.magnetic').forEach(btn => {
    btn.addEventListener('mousemove', e => {
      const r = btn.getBoundingClientRect();
      const x = e.clientX - r.left - r.width  / 2;
      const y = e.clientY - r.top  - r.height / 2;
      gsap.to(btn, { x: x * 0.32, y: y * 0.32, duration: 0.3, ease: 'power2.out' });
    });
    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, { x: 0, y: 0, duration: 0.55, ease: 'elastic.out(1, 0.5)' });
    });
  });
}

/* =============================================
   9. 3-D CARD TILT
   ============================================= */
function initTilt() {
  if (!HAS_GSAP || window.matchMedia('(pointer:coarse)').matches) return;

  document.querySelectorAll('[data-tilt]').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width  - 0.5;
      const y = (e.clientY - r.top)  / r.height - 0.5;
      gsap.to(card, {
        rotateX: -y * 12,
        rotateY:  x * 12,
        transformPerspective: 900,
        duration: 0.3, ease: 'power2.out',
      });
    });
    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        rotateX: 0, rotateY: 0,
        duration: 0.6, ease: 'elastic.out(1, 0.5)',
      });
    });
  });
}

/* =============================================
   10. ANIMATED COUNTERS
   ============================================= */
function animateCount(el) {
  const target   = parseInt(el.dataset.target, 10);
  const duration = 1800;
  const start    = performance.now();

  const tick = now => {
    const t = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - t, 3);
    el.textContent = Math.round(eased * target);
    if (t < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

/* =============================================
   11. STICKY NAVBAR
   ============================================= */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

/* =============================================
   12. ACTIVE NAV HIGHLIGHT
   ============================================= */
const sections   = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');
const sectionObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const id = e.target.id;
      navAnchors.forEach(a => {
        a.style.color = a.getAttribute('href') === `#${id}` ? 'var(--text)' : '';
      });
    }
  });
}, { rootMargin: '-50% 0px -50% 0px' });
sections.forEach(s => sectionObs.observe(s));

/* =============================================
   13. MOBILE MENU
   ============================================= */
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

const closeMenu = () => {
  navLinks.classList.remove('open');
  hamburger.classList.remove('open');
  hamburger.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
};

hamburger.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  hamburger.classList.toggle('open', isOpen);
  hamburger.setAttribute('aria-expanded', String(isOpen));
  document.body.style.overflow = isOpen ? 'hidden' : '';
});
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
document.addEventListener('keydown', e => e.key === 'Escape' && closeMenu());

/* =============================================
   14. CONTACT FORM
   ============================================= */
const form      = document.getElementById('contactForm');
const successEl = document.getElementById('formSuccess');
const submitBtn = document.getElementById('submitBtn');

if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();

    let valid = true;
    form.querySelectorAll('[required]').forEach(f => {
      const ok = f.value.trim() !== '';
      f.style.borderColor = ok ? '' : '#ef4444';
      if (!ok) {
        gsap.fromTo(f, { x: -6 }, { x: 0, duration: 0.4, ease: 'elastic.out(1,0.3)' });
        valid = false;
      }
    });
    if (!valid) return;

    submitBtn.disabled = true;
    gsap.to(submitBtn, { opacity: 0.7, scale: 0.97, duration: 0.2 });

    const dots = ['Sending', 'Sending.', 'Sending..', 'Sending...'];
    let di = 0;
    const dotInt = setInterval(() => { submitBtn.textContent = dots[di++ % dots.length]; }, 300);

    // Replace setTimeout with fetch() to a real endpoint when ready
    setTimeout(() => {
      clearInterval(dotInt);
      gsap.to(form, {
        opacity: 0, y: -20, duration: 0.4,
        onComplete() {
          form.hidden    = true;
          successEl.hidden = false;
          gsap.from(successEl, { opacity:0, scale:0.85, duration:0.5, ease:'back.out(1.5)' });
        },
      });
    }, 1400);
  });

  form.querySelectorAll('[required]').forEach(f => {
    f.addEventListener('input', () => { f.style.borderColor = ''; });
  });
}

/* =============================================
   KICK-OFF (after DOM is ready)
   ============================================= */
document.addEventListener('DOMContentLoaded', () => {
  initParticles();
  initCursor();
  // ScrollAnims + Magnetic + Tilt wait until hero anim is done (called from startHeroAnim)
  // but we set them up immediately — ScrollTrigger is lazy
  initScrollAnims();
  initMagnetic();
  initTilt();
});
