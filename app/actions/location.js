var mapsModule = require("nativescript-google-maps-sdk");
var image = require("ui/image");

var mapView;

function addMarkers(Long, Lat) {

    mapView.zoom = 15;
    mapView.longitude = Long;
    mapView.latitude = Lat;

    var icon = new image.Image();
    icon.src = "../images/apple.jpg";

    // TODO : Add some Markers
    // Fake one
    var markers = /*TODO : GET markers */[{
        position: mapsModule.Position.positionFromLatLng(Lat, Long),
        userData: {
            index: 1
        },
        icon: icon
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

exports.onMapReady = function onMapReady(args) {
    mapView = args.object;
};

exports.addMarkers = addMarkers;