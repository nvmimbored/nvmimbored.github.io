document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');

  if (!toggle || !nav) return;

  const mobile = window.matchMedia('(max-width: 980px)');

  function setOpen(open) {
    nav.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    nav.inert = mobile.matches && !open;
  }

  toggle.addEventListener('click', () => {
    setOpen(toggle.getAttribute('aria-expanded') !== 'true');
  });

  nav.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && mobile.matches) {
      setOpen(false);
      toggle.focus();
    }
  });

  mobile.addEventListener('change', () => setOpen(false));
  setOpen(false);
});
