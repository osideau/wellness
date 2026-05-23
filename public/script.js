// =================================================================
// LIZA & CO. — Editorial v2
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
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    document.body.style.overflow = open ? 'hidden' : '';
  });
  nav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });
})();

// ---------- Reveal on scroll (slow, staggered) ----------
(function () {
  const els = document.querySelectorAll('.rv, .rv-img');
  if (!('IntersectionObserver' in window) || !els.length) {
    els.forEach(el => el.classList.add('visible'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -8% 0px' });
  els.forEach(el => io.observe(el));
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
