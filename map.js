var map = new L.Map('map', {zoomControl: false})
          .setView([37.7749, -122.4312], 12);

L.tileLayer(
  'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
}).addTo(map);

map._initPathRoot()    


// Disable zoom options on map
map.touchZoom.disable();
map.doubleClickZoom.disable();
map.scrollWheelZoom.disable();
map.boxZoom.disable();
map.keyboard.disable();
map.dragging.disable();
