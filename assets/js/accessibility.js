(function() {
  function initAccessibility() {
    const mobile = window.matchMedia('(max-width: 980px)');
    const viewport = document.querySelector('meta[name="viewport"]');
    const toggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.site-nav');
    const main = document.querySelector('#main-content, #main, main');

    document.documentElement.lang = document.documentElement.lang || 'lv';

    if (viewport) {
      viewport.content = viewport.content
        .replace(/,?\s*user-scalable\s*=\s*no/gi, '')
        .replace(/,\s*,/g, ',')
        .trim();
    }

    if (main) {
      main.setAttribute('role', 'main');
      if (!main.id) main.id = 'main-content';
      main.setAttribute('tabindex', '-1');

      if (!document.querySelector('.skip-link')) {
        const skipLink = document.createElement('a');
        skipLink.className = 'skip-link';
        skipLink.href = '#' + main.id;
        skipLink.textContent = 'Pāriet uz galveno saturu';
        document.body.insertBefore(skipLink, document.body.firstChild);
      }
    }

    if (toggle && nav) {
      nav.id = nav.id || 'primary-navigation';
      toggle.type = 'button';
      toggle.setAttribute('aria-controls', nav.id);

      const syncNavigation = () => {
        const open = toggle.getAttribute('aria-expanded') === 'true';
        nav.inert = mobile.matches && !open;
        toggle.setAttribute(
          'aria-label',
          open ? 'Aizvērt izvēlni' : 'Atvērt izvēlni'
        );
      };

      new MutationObserver(syncNavigation).observe(toggle, {
        attributes: true,
        attributeFilter: ['aria-expanded']
      });

      document.addEventListener('keydown', (event) => {
        if (
          event.key === 'Escape' &&
          mobile.matches &&
          toggle.getAttribute('aria-expanded') === 'true'
        ) {
          toggle.click();
          toggle.focus();
        }
      });

      nav.addEventListener('click', (event) => {
        if (
          mobile.matches &&
          event.target.closest('a') &&
          toggle.getAttribute('aria-expanded') === 'true'
        ) {
          toggle.click();
        }
      });

      syncNavigation();
    }

    const county = document.querySelector('a.county[href="#"]');
    if (county) {
      county.href = 'https://www.jelgavasnovads.lv/';
      county.setAttribute('aria-label', 'Jelgavas novada tīmekļvietne');
    }

    document.querySelectorAll('.main-row .imp-medium').forEach((content) => {
      const sidebar = content.previousElementSibling;
      if (
        !sidebar ||
        sidebar.parentElement !== content.parentElement ||
        sidebar.matches('.section-sidebar')
      ) {
        return;
      }

      const details = document.createElement('details');
      details.className = sidebar.className + ' section-sidebar';
      details.open = true;

      const summary = document.createElement('summary');
      summary.textContent = 'Sadaļas navigācija';
      details.appendChild(summary);

      while (sidebar.firstChild) {
        details.appendChild(sidebar.firstChild);
      }

      sidebar.replaceWith(details);
    });

    const syncSidebars = () => {
      document.querySelectorAll('.section-sidebar').forEach((sidebar) => {
        if (mobile.matches) {
          if (sidebar.dataset.mobileReady !== 'true') {
            sidebar.open = false;
            sidebar.dataset.mobileReady = 'true';
          }
        } else {
          sidebar.open = true;
          delete sidebar.dataset.mobileReady;
        }
      });
    };

    mobile.addEventListener('change', () => {
      if (toggle && nav) {
        const open = toggle.getAttribute('aria-expanded') === 'true';
        nav.inert = mobile.matches && !open;
      }
      syncSidebars();
    });

    syncSidebars();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAccessibility);
  } else {
    initAccessibility();
  }
})();
