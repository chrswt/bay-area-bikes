var map = new L.Map('map', {zoomControl: false}).setView([37.783697, -122.408966], 14);

var layer = L.tileLayer('http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}@2x.png',
  { attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/attributions">CARTO</a>' });

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
var svg = d3.select('#map').select('svg');

var plot = function() {
  bikeStations.forEach(function(station) {
    station.LatLng = new L.LatLng(station.latitude, station.longitude);
  });

  var points = svg.selectAll('circle').data(bikeStations)
    .enter().append('circle')
    .attr('r', 5)
    .style('stroke', 'red')
    .style('opacity', 0.5)
    .style('fill', 'red')
    .attr('whatever', function(d) {
      return d.stationName;
    })

  points.attr('transform', function(d) {
    return 'translate(' + map.latLngToLayerPoint(d.LatLng).x + ',' +
            map.latLngToLayerPoint(d.LatLng).y + ')';
  });
};