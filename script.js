
// Accessibility & UX enhancements
const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.getElementById('site-menu');
if (menuToggle && siteNav) {
  menuToggle.addEventListener('click', () => {
    const open = siteNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
  });
}

const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Basic progressive enhancement for forms (demo only)
for (const form of document.querySelectorAll('form')) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const note = form.querySelector('.form-note');
    if (note) note.textContent = 'Thanks! We received your submission.';
  });
}
