var mapsModule = require("nativescript-google-maps-sdk");
var image = require("ui/image");

var mapView;
var marker;

function addMarker() {
}

function addMarkerFirst(Long, Lat) {

    console.log(mapView);

    mapView.zoom = 15;
    mapView.longitude = Long;
    mapView.latitude = Lat;

    var mark = new mapsModule.Marker();
    mark.position = mapsModule.Position.positionFromLatLng(Lat, Long);

    mark.userData = {
        index: 1
    };

    mapView.addMarker(mark);
    marker = mark;
}

function moveMarker(Long, Lat) {
    // marker.movePosition(mapsModule.Position.positionFromLatLng(Lat, Long));
    mapView.longitude = Long;
    mapView.latitude = Lat;
    marker.position = mapsModule.Position.positionFromLatLng(Lat, Long);
}

exports.onMapReady = function onMapReady(args) {
    mapView = args.object;
    addMarkerFirst(0, 0);
};

exports.moveMarker = moveMarker;
exports.addMarkerFirst = addMarkerFirst;