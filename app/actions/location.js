var mapsModule = require("nativescript-google-maps-sdk");


function addMarkers(mapView) {
    // TODO : Add some Markers
    // Fake one
    var markers = /*TODO : GET markers */ [{
        position: mapsModule.Position.positionFromLatLng(50.0565, 14.79714),
        title: 'Brno',
        snippet: 'Australia',
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
