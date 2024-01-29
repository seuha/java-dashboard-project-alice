function initializeMap(treeInfo, events) {

    // Initialize  map
const map = L.map('map').setView([39.95, -75.16], 12); 

// Add OpenStreetMap tiles
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: '© OpenStreetMap contributors',    
  maxZoom: 18,
  tileSize: 512,
  zoomOffset: -1,
  id: 'mapbox/streets-v12',
  accessToken: 'pk.eyJ1IjoibWp1bWJlLXRlc3QiLCJhIjoiY2wwb3BudmZ3MWdyMjNkbzM1c2NrMGQwbSJ9.2ATDPobUwpa7Ou5jsJOGYA',
}).addTo(map);

// Add markers cluster group
const markers = L.markerClusterGroup();

// Function to load and process geojson data
function loadGeoJsonData() {
    fetch('data/tree_data.geojson')
        .then(response => response.json())
        .then(data => {
            // Process and add data to the map
            L.geoJSON(data, {
              pointToLayer: function (feature, latlng) {
                const treeMarker = L.marker(latlng, {
                  markerUrl: 'images/tree.png',
                  markerSize: [10, 15], // size of the icon
                  markerAnchor: [10, 13], // point of the icon which will correspond to marker's location
                  popupAnchor: [0, -35], // point from which the popup should open relative to the iconAnchor
                });
                treeMarker.bindPopup('Tree Type: ' + feature.properties.TREE_NAME);
                return treeMarker;
            }
        }).addTo(markers);
        map.addLayer(markers);
    });
}
loadGeoJsonData();
}

// export {
//     initializeMap,
//   };






// const treeInfoResp = await fetch('data/tree_data.geojson');
// const treeInfo = await treeInfoResp.json();

// const events = new EventTarget();

// const map = initializeMap(treeInfo, events);
// initializeList(treeInfo, events);
// initializeSearch(treeInfo, events);
