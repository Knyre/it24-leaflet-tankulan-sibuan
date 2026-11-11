const center = [8.36636, 124.86445];

const map = L.map("map").setView(center, 15);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: "&copy; OpenStreetMap contributors",
}).addTo(map);

L.control.scale().addTo(map);

// Makes a colored pin icon
function coloredPin(color) {
  return L.divIcon({
    className: "",
    html:
      '<svg width="30" height="42" viewBox="0 0 24 34" xmlns="http://www.w3.org/2000/svg">' +
      '<path d="M12 0C5.4 0 0 5.4 0 12c0 9 12 22 12 22s12-13 12-22C24 5.4 18.6 0 12 0z" ' +
      'fill="' +
      color +
      '" stroke="#ffffff" stroke-width="2"/>' +
      '<circle cx="12" cy="12" r="4.5" fill="#ffffff"/></svg>',
    iconSize: [30, 42],
    iconAnchor: [15, 42],
    popupAnchor: [0, -38],
  });
}

// Main pin (first in the list) + school landmarks
const places = [
  {
    name: "Tankulan",
    coords: [8.36636, 124.86445],
    info: "Barangay in the heart of the town of Manolo Fortich.",
    color: "#e63946", // red
  },
  {
    name: "Manolo Fortich Central Elementary School",
    coords: [8.36919, 124.86435],
    info: "Public elementary school.",
    color: "#f4a100", // orange
  },
  {
    name: "Manolo Fortich National High School",
    coords: [8.36864, 124.863],
    info: "Public secondary school.",
    color: "#2a9d4b", // green
  },
  {
    name: "Northern Bukidnon State College",
    coords: [8.36001, 124.86839],
    info: "State college offering college programs.",
    color: "#1d6fd8", // blue
  },
];

places.forEach(function (place) {
  L.marker(place.coords, { icon: coloredPin(place.color) })
    .addTo(map)
    .bindPopup("<b>" + place.name + "</b><br>" + place.info);
});

// 500-meter radius circle around the main pin (Tankulan)
L.circle(places[0].coords, {
  radius: 500,
  color: "#1fb8a6",
  fillColor: "#1fb8a6",
  fillOpacity: 0.3,
})
  .addTo(map)
  .bindTooltip("500 m radius");

// Show coordinates when the map is clicked
const coordsBox = document.getElementById("coords");

map.on("click", function (e) {
  coordsBox.textContent =
    "📍 Latitude: " +
    e.latlng.lat.toFixed(5) +
    " | Longitude: " +
    e.latlng.lng.toFixed(5);
});
