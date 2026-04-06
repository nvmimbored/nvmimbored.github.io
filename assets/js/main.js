/*
	Minimaxing by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var $window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ null,      '736px'  ]
		});

	// Nav.

		// Title Bar.
			$(
				'<div id="titleBar">' +
					'<a href="#navPanel" class="toggle"></a>' +
					'<span class="title">' + $('#logo').html() + '</span>' +
				'</div>'
			)
				.appendTo($body);

		// Navigation Panel.
			$(
				'<div id="navPanel">' +
					'<nav>' +
						$('#nav').navList() +
					'</nav>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'navPanel-visible'
				});

})(jQuery);

document.addEventListener("DOMContentLoaded", function() {
    const overlay = document.getElementById('wip-overlay');
    if (!overlay) return; // Only run on pages with the overlay
    const btn = document.getElementById('accept-btn');

        // CHANGE: We now check 'sessionStorage' instead of 'localStorage'
        if (sessionStorage.getItem('disclaimerAccepted') === 'true') {
            overlay.style.display = 'none';
        }

        btn.addEventListener('click', function() {
            overlay.style.display = 'none';

            // CHANGE: We save to 'sessionStorage'.
            // This survives a refresh, but is deleted when the tab closes.
            sessionStorage.setItem('disclaimerAccepted', 'true');
        });
    });
  // Advanced Mobile menu toggle with smooth close animation
  document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.site-nav');
    if (!toggle || !nav) return;

    toggle.addEventListener('click', () => {
      // If the menu is CURRENTLY open...
      if (nav.classList.contains('is-open')) {

        // 1. Add the closing animation class
        nav.classList.add('is-closing');
        toggle.setAttribute('aria-expanded', 'false'); // Morphs the X back to hamburger

        // 2. Wait exactly 300 milliseconds (the length of our CSS animation)
        setTimeout(() => {
          // 3. AFTER the animation finishes, actually hide the menu
          nav.classList.remove('is-open');
          nav.classList.remove('is-closing');
        }, 300);

      } else {
        // If the menu is closed, just open it normally!
        nav.classList.add('is-open');
        toggle.setAttribute('aria-expanded', 'true'); // Morphs the hamburger to X
      }
    });
  });
