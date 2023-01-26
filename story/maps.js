

// If you're adding a number of markers, you may want to drop them on the map
// consecutively rather than all at once. This example shows how to use
// window.setTimeout() to space your markers' animation.
const neighborhoods = [
  { lat: 64.1466, lng: -21.9426 },
  { lat: 64.49, lng: -18.48 },

];
let markers = [];
let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 7,
    center: { lat: 64.9631, lng: -19.0208 },
  });
  document.getElementById("drop").addEventListener("click", drop);
}

function drop() {
  clearMarkers();

  for (let i = 0; i < neighborhoods.length; i++) {
    addMarkerWithTimeout(neighborhoods[i], i * 200);
  }
}

function addMarkerWithTimeout(position, timeout) {
  window.setTimeout(() => {
    markers.push(
      new google.maps.Marker({
        position: position,
        map,
        animation: google.maps.Animation.DROP,
      })
    );
  }, timeout);
}

function clearMarkers() {
  for (let i = 0; i < markers.length; i++) {
    markers[i].setMap(null);
  }

  markers = [];
}

window.initMap = initMap;
