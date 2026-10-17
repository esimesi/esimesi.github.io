/* Tre Kronor Pizzeria — menu page: render menu from MENU data, filtering, slider, footer map */
(function () {
  'use strict';

  var LEGACY_HASHES = {
    pizzatag: 'pizza',
    dagenstag: 'dagenslunch',
    buttontag: 'inbakad'
  };

  function formatPrice(value) {
    return value + ' kr';
  }

  function cardHtml(item) {
    var priceHtml;
    if (item.prices && item.prices.length) {
      priceHtml = item.prices
        .map(function (entry) {
          return (
            '<span class="price-chip"><span class="size">' +
            entry.size +
            '</span>' +
            formatPrice(entry.price) +
            '</span>'
          );
        })
        .join('');
    } else {
      priceHtml = '<span class="price-single">' + formatPrice(item.price) + '</span>';
    }

    return (
      '<article class="menu-card">' +
      '<img src="' + item.img + '" alt="' + item.name + '" loading="lazy">' +
      '<div class="menu-card-body">' +
      '<h3>' + item.name + '</h3>' +
      '<p class="ingredients">' + item.desc + '</p>' +
      '<div class="price-row">' + priceHtml + '</div>' +
      '</div>' +
      '</article>'
    );
  }

  function renderMenu(root) {
    root.innerHTML = MENU.sections
      .map(function (section) {
        return (
          '<section class="menu-section" data-category="' + section.category + '">' +
          '<h2 class="section-title">' + section.title + '</h2>' +
          '<div class="cards">' +
          section.items.map(cardHtml).join('') +
          '</div>' +
          '</section>'
        );
      })
      .join('');
  }

  function renderChips(list) {
    list.innerHTML = MENU.categories
      .map(function (category) {
        return (
          '<button class="chip" type="button" data-category="' + category.id + '">' +
          '<img src="' + category.icon + '" alt="" aria-hidden="true">' +
          '<span>' + category.label + '</span>' +
          '</button>'
        );
      })
      .join('');
  }

  document.addEventListener('DOMContentLoaded', function () {
    var root = document.getElementById('menu-root');
    var chipsScroll = document.getElementById('chips-scroll');
    var noteEl = document.getElementById('category-note');
    if (!root || !chipsScroll || typeof MENU === 'undefined') return;

    renderMenu(root);
    renderChips(chipsScroll);

    var chipsHint = document.getElementById('chips-hint');
    if (chipsHint) {
      chipsScroll.addEventListener('pointerdown', function () {
        chipsHint.classList.add('is-dismissed');
        window.setTimeout(function () {
          chipsHint.hidden = true;
        }, 450);
      }, { once: true, passive: true });
    }

    var chips = Array.prototype.slice.call(chipsScroll.querySelectorAll('.chip'));
    var sections = Array.prototype.slice.call(root.querySelectorAll('.menu-section'));

    function categoryById(id) {
      return MENU.categories.find(function (category) {
        return category.id === id;
      });
    }

    function applyFilter(categoryId, options) {
      options = options || {};
      var category = categoryById(categoryId);
      if (!category) return;

      chips.forEach(function (chip) {
        var isActive = chip.dataset.category === categoryId;
        chip.classList.toggle('is-active', isActive);
        var img = chip.querySelector('img');
        var activeCategory = categoryById(chip.dataset.category);
        img.src = isActive ? activeCategory.iconActive : activeCategory.icon;
        if (isActive) {
          chip.scrollIntoView({ block: 'nearest', inline: 'nearest' });
        }
      });

      sections.forEach(function (section) {
        var show = section.dataset.category === categoryId;
        section.hidden = !show;
        section.classList.toggle('is-filtering', show);
      });

      if (noteEl) {
        noteEl.textContent = category.note || '';
        noteEl.hidden = !category.note;
      }

      if (window.history && history.replaceState) {
        history.replaceState(null, '', '#' + categoryId);
      }

      if (options.scroll) {
        var target = document.getElementById('menu-start') || root;
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }

    chips.forEach(function (chip) {
      chip.addEventListener('click', function () {
        applyFilter(chip.dataset.category, { scroll: true });
      });
    });

    /* Deep links: legacy anchors (#pizzatag, #dagenstag, #buttontag) or #<category-id> */
    var hash = window.location.hash.replace('#', '');
    var initial = LEGACY_HASHES[hash] || (categoryById(hash) ? hash : 'pizza');
    applyFilter(initial);

    /* Slider CTA buttons jump to a filter */
    document.querySelectorAll('[data-goto-filter]').forEach(function (trigger) {
      trigger.addEventListener('click', function (event) {
        event.preventDefault();
        applyFilter(trigger.dataset.gotoFilter, { scroll: true });
      });
    });

    /* Chip bar scroll arrows */
    var prevBtn = document.getElementById('chip-prev');
    var nextBtn = document.getElementById('chip-next');

    function updateArrows() {
      if (!prevBtn || !nextBtn) return;
      var maxScroll = chipsScroll.scrollWidth - chipsScroll.clientWidth;
      prevBtn.hidden = chipsScroll.scrollLeft <= 0;
      nextBtn.hidden = chipsScroll.scrollLeft >= maxScroll - 1;
      prevBtn.disabled = prevBtn.hidden;
      nextBtn.disabled = nextBtn.hidden;
    }

    if (prevBtn && nextBtn) {
      prevBtn.addEventListener('click', function () {
        chipsScroll.scrollBy({ left: -240, behavior: 'smooth' });
      });
      nextBtn.addEventListener('click', function () {
        chipsScroll.scrollBy({ left: 240, behavior: 'smooth' });
      });
      chipsScroll.addEventListener('scroll', updateArrows, { passive: true });
      window.addEventListener('resize', updateArrows);
      updateArrows();
    }

    /* Hero slider */
    if (window.Swiper && document.querySelector('.swiper')) {
      new Swiper('.swiper', {
        slidesPerView: 1,
        spaceBetween: 16,
        loop: true,
        autoHeight: true,
        grabCursor: true,
        speed: 600,
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        keyboard: { enabled: true },
        a11y: { enabled: true },
        breakpoints: {
          1000: { spaceBetween: 24 }
        }
      });
    }

    /* Footer map */
    var mapEl = document.getElementById('map');
    if (mapEl && window.L) {
      try {
        var map = L.map('map', {
          zoomControl: true,
          scrollWheelZoom: false
        });
        var center = [63.905955, 19.7519];
        map.setView(center, 16);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
          attribution: '&copy; OpenStreetMap'
        }).addTo(map);
        var icon = L.divIcon({
          className: 'custom-marker',
          html:
            '<div class="marker-pin"><div class="marker-logo">' +
            '<img src="icons/logo.png" alt=""></div></div>',
          iconSize: [30, 40],
          iconAnchor: [15, 40]
        });
        L.marker(center, { icon: icon })
          .addTo(map)
          .bindPopup(
            '<div class="custom-popup"><strong>Tre Kronor Pizzeria</strong><br>Östra Järnvägsgatan 3A, Vännäs</div>'
          );
      } catch (error) {
        console.warn('Map init failed', error);
      }
    }
  });
})();
