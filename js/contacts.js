/* Tre Kronor Pizzeria — contacts page map */
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    var mapEl = document.getElementById('map');
    if (!mapEl || !window.L) return;

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
  });
})();
