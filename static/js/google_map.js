// function initMap() {
    // The location of Uluru
    // var uluru = {lat: 20.446160, lng: 106.347460};
    // var centerPoint = {lat: 20.446160, lng: 106.347460}
    // The map, centered at Uluru
    // var map = new google.maps.Map(
        // document.getElementById('map'), {zoom: 17, center: centerPoint});
    // The marker, positioned at Uluru
    // var marker = new google.maps.Marker({position: uluru, map: map, draggable: false, animation: google.maps.Animation.DROP });
  
//   }
  //EVENTS
//   google.maps.event.addDomListener(window, 'load', initMap);
  // initMap();

//   var mymap = L.map('map').setView([20.446160, 106.347460], 15);
mapboxgl.accessToken = 'pk.eyJ1IjoicmFzc2VuZ3V5IiwiYSI6ImNqdG9mY3piYTByY3EzeXA1eHM4cndoaDQifQ.fLBX6Vvj3af8TJH6vLbzWw';

var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11',
zoom: 16,
center: [106.34772, 20.44608]
});
 
var layerList = document.getElementById('menu');
var inputs = layerList.getElementsByTagName('input');
 
function switchLayer(layer) {
var layerId = layer.target.id;
map.setStyle('mapbox://styles/mapbox/' + layerId);
}
 
for (var i = 0; i < inputs.length; i++) {
inputs[i].onclick = switchLayer;
}

map.on("load", function () {
    /* Image: An image is loaded and added to the map. */
    map.loadImage("https://i.imgur.com/MK4NUzI.png", function(error, image) {
        if (error) throw error;
        map.addImage("custom-marker", image);
        /* Style layer: A style layer ties together the source and image and specifies how they are displayed on the map. */
        map.addLayer({
            id: "markers",
            type: "symbol",
            /* Source: A data source specifies the geographic coordinate where the image marker gets placed. */
            source: {
                type: "geojson",
                data: {
                    type: 'FeatureCollection',
                    features: [
                        {
                            type: 'Feature',
                            properties: {},
                            geometry: {
                                type: "Point",
                                coordinates: [106.34772, 20.44608]
                                
                            }
                        }]
                    }
                },
                layout: {
                    "icon-image": "custom-marker",
                }
            });
        });

    var popup = new mapboxgl.Popup({
        closeOnClick: false,
        offset: 23
    })
        .setLngLat([106.34772, 20.44608])
        .setHTML('<h5>New World International English School</h5>')
        .addTo(map);

    });


  
  