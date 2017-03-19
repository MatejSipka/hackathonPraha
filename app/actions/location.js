var mapsModule = require("nativescript-google-maps-sdk");
var image = require("ui/image");

var mapView;
var marker;
var isZoomedG = true;

function addMarker(Lat, Long) {

    var mark = new mapsModule.Marker();
    mark.position = mapsModule.Position.positionFromLatLng(Lat, Long);
    
    mark.userData = {
        index: 1
    };

    mapView.addMarker(mark);

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
    if (isZoomedG) {
        console.log(isZoomedG);
        mapView.longitude = Long;
        mapView.latitude = Lat;
        mapView.zoom = 15;
    }
    marker.position = mapsModule.Position.positionFromLatLng(Lat, Long);
}

exports.onMapReady = function onMapReady(args) {
    mapView = args.object;
    addMarkerFirst(0, 0);
};

function setZoon(isZoomed) {
    isZoomedG = isZoomed;
    console.log("isZoomedG " + isZoomedG);
}

exports.setZoon = setZoon;
exports.moveMarker = moveMarker;
exports.addMarker = addMarker;
exports.addMarkerFirst = addMarkerFirst;