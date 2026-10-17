/* Tre Kronor Pizzeria — shared behavior: header, mobile nav, reveal, footer year */
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    var header = document.querySelector('.site-header');
    var navToggle = document.querySelector('.nav-toggle');

    /* Solid header once the page scrolls */
    function updateHeaderState() {
      if (!header) return;
      header.classList.toggle('is-scrolled', window.scrollY > 24);
    }
    updateHeaderState();
    window.addEventListener('scroll', updateHeaderState, { passive: true });

    /* Mobile navigation */
    if (header && navToggle) {
      function setNavOpen(open) {
        header.classList.toggle('nav-open', open);
        navToggle.setAttribute('aria-expanded', String(open));
        navToggle.setAttribute('aria-label', open ? 'Stäng meny' : 'Öppna meny');
      }

      navToggle.addEventListener('click', function (event) {
        event.stopPropagation();
        setNavOpen(navToggle.getAttribute('aria-expanded') !== 'true');
      });

      document.addEventListener('click', function (event) {
        if (header.classList.contains('nav-open') && !header.contains(event.target)) {
          setNavOpen(false);
        }
      });

      document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && header.classList.contains('nav-open')) {
          setNavOpen(false);
          navToggle.focus();
        }
      });

      header.querySelectorAll('.site-nav a').forEach(function (link) {
        link.addEventListener('click', function () {
          setNavOpen(false);
        });
      });
    }

    /* Highlight the current page in the nav (first matching link only) */
    var currentPage = window.location.pathname.split('/').pop() || 'index.html';
    var navLinks = document.querySelectorAll('.site-nav a');
    for (var i = 0; i < navLinks.length; i++) {
      if (navLinks[i].getAttribute('href') === currentPage) {
        navLinks[i].classList.add('is-active');
        navLinks[i].setAttribute('aria-current', 'page');
        break;
      }
    }

    /* Scroll reveal */
    var revealEls = document.querySelectorAll('.reveal');
    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (revealEls.length && !reduceMotion && 'IntersectionObserver' in window) {
      var observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15 }
      );
      revealEls.forEach(function (el) {
        observer.observe(el);
      });
    } else {
      revealEls.forEach(function (el) {
        el.classList.add('is-visible');
      });
    }

    /* Footer year */
    document.querySelectorAll('[data-year]').forEach(function (el) {
      el.textContent = String(new Date().getFullYear());
    });
  });
})();
