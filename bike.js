var latestData;
var bikeStations;

var update = function() {
  $.getJSON('http://whateverorigin.org/get?url=' +
  encodeURIComponent('http://feeds.bayareabikeshare.com/stations/stations.json') + '&callback=?', function(data) {
  latestData = data.contents;
});

  setTimeout(function() {
    bikeStations = latestData.stationBeanList;
    plot();
    // $('.update').text('Last updated: ' + latestData.responseJSON.executionTime);
  }, 400);
};

var retrieveSF = function() {
  map.setView(new L.LatLng(37.783697, -122.408966), 14);
  plot();
};

var retrievePA = function() {
  map.setView(new L.LatLng(37.410319, -122.143936), 13);
  plot();
};

var retrieveSJ = function() {
  map.setView(new L.LatLng(37.340319, -121.89936), 14);
  plot();
};

$(document).ready(function () {
  update();

  $('.locsf').on('click', retrieveSF);

  $('.locpa').on('click', retrievePA);

  $('.locsj').on('click', retrieveSJ);
});

$('.refresh').on('click', function () {
  update();
});
