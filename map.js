var map = new L.Map('map', {zoomControl: false}).setView([37.783697, -122.408966], 9);

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
var div = d3.select('body').append('div').attr('class', 'tooltip').style('opacity', 0 );
var p = d3.select('.tooltip').append('p');
// var test = svg.append('rect').attr('class', 'tooltip').attr('x', 100).attr('y', 100)
//             .attr('fill', 'white').attr('height', 100).attr('width', 100).attr('opacity', 0.1);


var plot = function() {
  bikeStations.forEach(function(station) {
    station.LatLng = new L.LatLng(station.latitude, station.longitude);
  });

  var points = svg.selectAll('circle').data(bikeStations, function(d) {
    return d.id;
  });
    points.enter().append('circle') // enter update pattern
    points // new data update pattern
    .attr('r', 5)
    .style('opacity', 0.5)
    .attr('stationName', function(d) {
      return d.stationName;
    })
    .attr('fill', function(d) {
      return d.availableBikes < 3 ? 'red' :
        d.availableBikes < 7 ? 'orange' :
        d.availableBikes < 10 ? 'yellow' : 'green';
    })
    .attr('r', function(d) {
      return 5 + (d.availableBikes / 3);
    })
    .on('mouseover', function(d) {
      div.transition().duration(200).style('opacity', 0.6)
      .style('left', (d3.event.pageX) + 'px')
      .style('top', (d3.event.pageY - 28) + 'px')
      p.html('<b>' + d.stationName + '</b>' + '<br>' +
       'Available Bikes: ' + d.availableBikes + '<br>'
        + 'Available Docks: ' + d.availableDocks);
    })
    .on('mouseout', function(d) {
      div.transition().duration(500).style('opacity', 0)
    });

    points.exit().remove(); // exit update pattern

  points.attr('transform', function(d) {
    return 'translate(' + map.latLngToLayerPoint(d.LatLng).x + ',' +
            map.latLngToLayerPoint(d.LatLng).y + ')';
  });
};
