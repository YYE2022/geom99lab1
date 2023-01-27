/* the following code create accessible and focusable markers of some attractions in Iceland */
/* also by clicking the map, the elevation information can be displayed. */
/* Iceland is famous for its rugged landscapes, displaying the elevation can be helpful for travellers. */

function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 7,
    center: { lat: 64.9631, lng: -19.0208 },
    mapTypeId: "terrain",
  });
  
  const elevator = new google.maps.ElevationService();
  const infowindow = new google.maps.InfoWindow({});
	
  /*Reference: https://developers.google.com/maps/documentation/javascript/examples/marker-accessibility*/
  // Set LatLng and title text for the markers. The first marker (Capital of Iceland)
  // receives the initial focus when tab is pressed. Use arrow keys to
  // move between markers; press tab again to cycle through the map controls.
  const tourStops = [
  	[{ lat: 64.1466, lng: -21.9426 }, "Capital of Iceland"],
        [{ lat: 64.2147, lng: -20.7345 }, "The Golden Circle Tour"],
	[{ lat: 64.326111, lng: -20.121111 }, "Gullfoss Falls. Brownish hue of its water. Known largest volume falls in all of Europe"],
	[{ lat: 63.615833,lng:-19.992779 }, "Seljalandsfoss waterfall"],
	[{ lat: 63.529720,lng:-19.513889 }, "Skogafoss waterfall"],	
	[{ lat: 63.4051, lng: -19.0743 }, "Reynisfjara Beach, aka Black Sand Beach"],
	[{ lat: 64.023003,lng:-16.975000 }, "Svartifoss waterfall"],
        [{ lat: 64.7843, lng: -17.2091 }, "Vatnajökull National Park"],
	[{ lat: 64.400002, lng: -16.799999 }, "Vatnajokull Ice Caves, Crystal Caves. Tours only be done in the winter"],
	[{ lat: 66.065758, lng: -17.511412 }, "Husavik Whale Watching"],
        [{ lat: 63.880001, lng: -22.448055 }, "Blue Lagoon. Geothermal spa."],
 
  ];
  // Create an info window to share between markers.
  const infoWindow2 = new google.maps.InfoWindow({maxWidth:200}); /*info window with max width: https://developers.google.com/maps/documentation/javascript/examples/infowindow-simple-max*/

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
	
/* elevation part*/
/*Reference: https://developers.google.com/maps/documentation/javascript/examples/elevation-simple*/
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
