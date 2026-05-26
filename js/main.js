/* =============================================
   WeWebU — Main JavaScript
   wewebu.com.au
   ============================================= */

'use strict';

/* ---- AOS (Animate on Scroll) ---- */
AOS.init({
  duration: 680,
  easing: 'ease-out-cubic',
  once: true,
  offset: 60,
});

/* ---- Sticky navbar ---- */
const navbar = document.getElementById('navbar');
const onScroll = () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
};
window.addEventListener('scroll', onScroll, { passive: true });

/* ---- Mobile menu ---- */
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  hamburger.classList.toggle('open', isOpen);
  hamburger.setAttribute('aria-expanded', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

// Close on link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  });
});

// Close on Escape
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && navLinks.classList.contains('open')) {
    navLinks.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
});

/* ---- GSAP hero title entrance ---- */
if (typeof gsap !== 'undefined') {
  gsap.fromTo(
    '#heroTitle',
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1.1, ease: 'power3.out', delay: 0.15 }
  );
}

/* ---- Counter animation ---- */
function animateCount(el) {
  const target   = parseInt(el.dataset.target, 10);
  const duration = 1600;
  const start    = performance.now();

  function tick(now) {
    const t = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - t, 3); // ease-out cubic
    el.textContent = Math.round(eased * target);
    if (t < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

// Fire when stats are visible
const statsEl = document.querySelector('.hero-stats');
if (statsEl) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('[data-target]').forEach(animateCount);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  observer.observe(statsEl);
}

/* ---- Active nav highlight ---- */
const sections   = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navAnchors.forEach(a => {
        a.style.color = (a.getAttribute('href') === `#${id}`) ? 'var(--text)' : '';
      });
    }
  });
}, { rootMargin: '-50% 0px -50% 0px' });

sections.forEach(s => sectionObserver.observe(s));

/* ---- Contact form ---- */
const form        = document.getElementById('contactForm');
const successBox  = document.getElementById('formSuccess');
const submitBtn   = document.getElementById('submitBtn');

if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Basic validation visual feedback
    let valid = true;
    form.querySelectorAll('[required]').forEach(field => {
      if (!field.value.trim()) {
        field.style.borderColor = '#ef4444';
        valid = false;
      } else {
        field.style.borderColor = '';
      }
    });
    if (!valid) return;

    // Loading state
    submitBtn.disabled    = true;
    submitBtn.textContent = 'Sending…';

    // Simulate submission — replace with real fetch/API call
    setTimeout(() => {
      form.hidden       = true;
      successBox.hidden = false;
    }, 1000);
  });

  // Clear error state on input
  form.querySelectorAll('[required]').forEach(field => {
    field.addEventListener('input', () => { field.style.borderColor = ''; });
  });
}
