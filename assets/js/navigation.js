// Galvenās izvēlnes un sānjoslas uzvedība visās lapās.
document.addEventListener('DOMContentLoaded', () => {
  const mobile = window.matchMedia('(max-width: 980px)');
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');

  // --- Mobilā izvēlne ---
  if (toggle && nav) {
    let closeTimer;

    const setOpen = (open) => {
      clearTimeout(closeTimer);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Aizvērt izvēlni' : 'Atvērt izvēlni');
      nav.inert = mobile.matches && !open;

      if (open) {
        nav.classList.remove('is-closing');
        nav.classList.add('is-open');
      } else if (nav.classList.contains('is-open')) {
        // Ļauj aizvēršanas animācijai (0.3 s) pabeigties.
        nav.classList.add('is-closing');
        closeTimer = setTimeout(() => nav.classList.remove('is-open', 'is-closing'), 300);
      }
    };
    const isOpen = () => toggle.getAttribute('aria-expanded') === 'true';

    toggle.addEventListener('click', () => setOpen(!isOpen()));

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && mobile.matches && isOpen()) {
        setOpen(false);
        toggle.focus();
      }
    });

    nav.addEventListener('click', (event) => {
      if (mobile.matches && isOpen() && event.target.closest('a')) setOpen(false);
    });

    mobile.addEventListener('change', () => {
      clearTimeout(closeTimer);
      nav.classList.remove('is-open', 'is-closing');
      toggle.setAttribute('aria-expanded', 'false');
      nav.inert = mobile.matches;
    });

    nav.inert = mobile.matches;
  }

  // --- Sānjosla: uz telefona saliekama ("Sadaļas navigācija") ---
  document.querySelectorAll('.main-row').forEach((row) => {
    const column = Array.from(row.children).find(
      (child) => child.matches('.col-3') && child.querySelector('.link-list')
    );
    if (!column) return;

    const details = document.createElement('details');
    details.className = column.className + ' section-sidebar';
    const summary = document.createElement('summary');
    summary.textContent = 'Sadaļas navigācija';
    details.appendChild(summary);
    while (column.firstChild) details.appendChild(column.firstChild);
    column.replaceWith(details);
  });

  const syncSidebars = () => {
    document.querySelectorAll('.section-sidebar').forEach((sidebar) => {
      sidebar.open = !mobile.matches;
    });
  };
  mobile.addEventListener('change', syncSidebars);
  syncSidebars();
});
