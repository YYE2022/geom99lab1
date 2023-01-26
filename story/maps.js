function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 7,
    center: { lat: 64.9631, lng: -19.0208 },
    mapTypeId: "terrain",
  });
  const elevator = new google.maps.ElevationService();
  const infowindow = new google.maps.InfoWindow({});
    // Set LatLng and title text for the markers. The first marker (Boynton Pass)
  // receives the initial focus when tab is pressed. Use arrow keys to
  // move between markers; press tab again to cycle through the map controls.
  const tourStops = [
    [{ lat: 64.2147, lng: -20.7345 }, "The Golden Circle"],
    [{ lat: 64.7843, lng: -17.2091 }, "Vatnajökull National Park"],
    [{ lat: 63.4053, lng: -19.0634 }, "Black Sand Beach"],
	[{ lat: 64.9262, lng: -14.0009 }, "East Fjords"],
    [{ lat: 65.2669, lng: -14.3948 }, "Egilsstaoi - Dettifoss - Myvatn - Akureyri"],
    [{ lat: 65.6826, lng: -18.0907 }, "Akureyri - Snaefellsnes Peninsula"],
	[{ lat: 64.1466, lng: -21.9426 }, "Snaefellsnes-Reykjavik"],
  ];
  // Create an info window to share between markers.
  const infoWindow2 = new google.maps.InfoWindow();

  // Create the markers.
  tourStops.forEach(([position, title], i) => {
    const marker = new google.maps.Marker({
      position,
      map,
      title: `${i + 1}. ${title}`,
      label: `${i + 1}`,
      optimized: false,
    });

    // Add a click listener for each marker, and set up the info window.
    marker.addListener("click", () => {
      infoWindow2.close();
      infoWindow2.setContent(marker.getTitle());
      infoWindow2.open(marker.getMap(), marker);
    });
  });


  infowindow.open(map);
  // Add a listener for the click event. Display the elevation for the LatLng of
  // the click inside the infowindow.
  map.addListener("click", (event) => {
    displayLocationElevation(event.latLng, elevator, infowindow);
  });
}

function displayLocationElevation(location, elevator, infowindow) {
  // Initiate the location request
  elevator
    .getElevationForLocations({
      locations: [location],
    })
    .then(({ results }) => {
      infowindow.setPosition(location);
      // Retrieve the first result
      if (results[0]) {
        // Open the infowindow indicating the elevation at the clicked position.
        infowindow.setContent(
          "The elevation at this point <br>is " +
            results[0].elevation +
            " meters."
        );
      } else {
        infowindow.setContent("No results found");
      }
    })
    .catch((e) =>
      infowindow.setContent("Elevation service failed due to: " + e)
    );
}

window.initMap = initMap;
