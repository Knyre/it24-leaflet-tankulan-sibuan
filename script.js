// Center the map on Manolo Fortich
var map = L.map("map").setView([8.3695, 124.8567], 12);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// 3 markers with popups
L.marker([8.3695, 124.8567])
  .addTo(map)
  .bindPopup("<b>Municipal Hall</b><br>Government offices and services.");

L.marker([8.215, 124.853])
  .addTo(map)
  .bindPopup(
    "<b>Dahilayan Adventure Park</b><br>Zipline and cool mountain weather.",
  );

L.marker([8.37, 124.823])
  .addTo(map)
  .bindPopup(
    "<b>Del Monte Philippines</b><br>Pineapple plantation and cannery.",
  );

// 500-meter circle around the Municipal Hall
L.circle([8.3695, 124.8567], { radius: 500 }).addTo(map);

// Show coordinates on click
map.on("click", function (e) {
  document.getElementById("coords").textContent =
    "Latitude: " +
    e.latlng.lat.toFixed(5) +
    ", Longitude: " +
    e.latlng.lng.toFixed(5);
});
