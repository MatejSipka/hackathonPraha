var mapsModule = require("nativescript-google-maps-sdk");


function addMarkers(mapView) {

    mapView.zoom = 15;
    mapView.longitude = 16.58;
    mapView.latitude = 49.20;

    // TODO : Add some Markers
    // Fake one
    var markers = /*TODO : GET markers */[{
        position: mapsModule.Position.positionFromLatLng(49.20, 16.58),
        title: 'Brno',
        snippet: 'Czechia',
        userData: {
            index: 1
        }
    }];
    for (var i = 0; i < markers.length; i++) {
        var mark = new mapsModule.Marker();
        mark.position = markers[0].position;
        mark.title = markers[0].title;
        mark.snippet = markers[0].snippet;
        mark.userData = markers[0].userData;
        mapView.addMarker(mark);
    }
}



// exports = {
//     onMapReady: function(){
//         return 'ahoj';
//     }
// }

exports.onMapReady = function onMapReady(args) {
    var mapView = args.object;

    addMarkers(mapView);
};
