var latestData;
var bikeStations;

var update = function() {
  latestData = $.getJSON('http://feeds.bayareabikeshare.com/stations/stations.json');
  setTimeout(function() {
    bikeStations = latestData.responseJSON.stationBeanList;
    plot();
  }, 1000);
  console.log(bikeStations);
};

$(document).ready(function () {
  update();
});

$('.refresh').on('click', function () {
  update();
});

// map.setView(new L.LatLng(37.279518, -121.867905), 14); SAN JOSE SETTINGS