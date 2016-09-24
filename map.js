var map = new L.Map('map', {zoomControl: false})
          .setView([37.7749, -122.4312], 12.5);

var layer = L.tileLayer('http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}@2x.png',{ attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/attributions">CARTO</a>' });

// Backup Map For Failed BaseMap Loading

// L.tileLayer('https://cartocdn_{s}.global.ssl.fastly.net/base-dark/{z}/{x}/{y}.png', {
//   attribution: 'dark_cartodb'
// }).addTo(map);

map.addLayer(layer);

map._initPathRoot();

// Disable zoom options on map
map.touchZoom.disable();
map.doubleClickZoom.disable();
map.scrollWheelZoom.disable();
map.boxZoom.disable();
map.keyboard.disable();
map.dragging.disable();

// Pick up SVG from map object
// var svg = d3.select('#map').select('svg');
