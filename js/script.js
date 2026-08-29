// Mobile nav toggle
const header = document.querySelector('.site-header');
const navToggle = document.getElementById('nav-toggle');

navToggle.addEventListener('click', () => {
  const isOpen = header.classList.toggle('nav-open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

// Mobile dropdown toggles (tap to open on small screens)
document.querySelectorAll('.has-dropdown > .nav-link').forEach((btn) => {
  btn.addEventListener('click', () => {
    if (window.innerWidth > 860) return; // desktop uses hover
    const parent = btn.closest('.has-dropdown');
    const isOpen = parent.classList.toggle('open');
    btn.setAttribute('aria-expanded', isOpen);
  });
});

// Close mobile menu after clicking a link
document.querySelectorAll('.main-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    header.classList.remove('nav-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Scroll reveal animation
const revealEls = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  revealEls.forEach((el) => observer.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add('is-visible'));
}
