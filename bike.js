var latestData;
var bikeStations;

var update = function() {
  latestData = $.getJSON('http://feeds.bayareabikeshare.com/stations/stations.json');
  setTimeout(function() {
    bikeStations = latestData.responseJSON.stationBeanList;
    plot();
  }, 1000);
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

