// =================================================================
// ISORROPIA — Editorial v2
// Refined motion: slow reveals, scroll-driven header state
// =================================================================

// ---------- Header scroll state ----------
(function () {
  const header = document.querySelector('.site-header');
  if (!header) return;
  let ticking = false;
  const update = () => {
    if (window.scrollY > 40) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
    ticking = false;
  };
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(update);
      ticking = true;
    }
  }, { passive: true });
  update();
})();

// ---------- Mobile nav ----------
(function () {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  if (!toggle || !nav) return;

  const close = () => {
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
    document.body.style.overflow = '';
  };

  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    document.body.classList.toggle('menu-open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });

  // Close on any link click inside nav (including those inside nav-item spans)
  nav.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') close();
  });

  // Close on backdrop click (clicking outside nav panel)
  document.addEventListener('click', (e) => {
    if (nav.classList.contains('is-open') && !nav.contains(e.target) && !toggle.contains(e.target)) {
      close();
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('is-open')) close();
  });
})();

// ---------- Reveal on scroll (slow, staggered) ----------
// Robust: IntersectionObserver is the primary path, but we also reveal any
// element already within the viewport on load (so above-the-fold content is
// never stuck hidden) and provide a scroll-based fallback for environments
// where IntersectionObserver does not fire reliably (scaled iframes, etc.).
(function () {
  const els = Array.from(document.querySelectorAll('.rv, .rv-img'));
  if (!els.length) return;

  const reveal = (el) => el.classList.add('visible');

  // Reveal anything already in (or near) the viewport — runs on load and scroll.
  const revealInView = () => {
    const vh = window.innerHeight || document.documentElement.clientHeight;
    let remaining = false;
    els.forEach(el => {
      if (el.classList.contains('visible')) return;
      const r = el.getBoundingClientRect();
      if (r.top < vh * 0.92 && r.bottom > 0) reveal(el);
      else remaining = true;
    });
    return remaining;
  };

  if (!('IntersectionObserver' in window)) {
    els.forEach(reveal);
    return;
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        reveal(entry.target);
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -8% 0px' });
  els.forEach(el => io.observe(el));

  // Fallback layer: reveal in-view elements immediately, then on scroll/resize.
  requestAnimationFrame(revealInView);
  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      revealInView();
      ticking = false;
    });
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  window.addEventListener('load', revealInView);
})();

// ---------- Year ----------
(function () {
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();

// ---------- Form (placeholder) ----------
(function () {
  const form = document.querySelector('form[data-contact]');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const status = form.querySelector('.form-status');
    if (status) {
      status.textContent = 'Thank you. We will be in touch shortly.';
      status.style.color = 'var(--tan)';
    }
    form.reset();
  });
})();
