var mapsModule = require("nativescript-google-maps-sdk");
var totalyOPModule = require('./actions/fab').test;
var tNSTextToSpeech = require("nativescript-texttospeech");

function onMapReady(args) {
    var mapView = args.object;

    console.log("Setting a marker...");
    var marker = new mapsModule.Marker();
    marker.position = mapsModule.Position.positionFromLatLng(-33.86, 151.20);
    marker.title = "Sydney";
    marker.snippet = "Australia";
    marker.userData = {
        index: 1
    };
    mapView.addMarker(marker);
}

let TTS = new tNSTextToSpeech.TNSTextToSpeech();

let speakOptions = {
    text: 'Whatever you like', /// *** required ***
    speakRate: 1.0, // optional - default is 1.0
    pitch: 1.0, // optional - default is 1.0
    volume: 5.0, // optional - default is 10
    language: "en-GB",  // optional - default is system language,
    finishedCallback: Function // optional
}

// Call the `speak` method passing the SpeakOptions object
TTS.speak(speakOptions);

function onMarkerSelect(args) {

    console.log("Clicked on " + args.marker.title);
}

function onCameraChanged(args) {
    console.log("Camera changed: " + JSON.stringify(args.camera));
}

exports.onMapReady = onMapReady;
exports.onMarkerSelect = onMarkerSelect;
exports.onCameraChanged = onCameraChanged;

exports.pageLoaded = function () {
    for (var a in exports) {
        console.log(a);
    }
};

// var mapsProps = {
//     latitude: 50,
//     longitude:50,
//     zoom: 1,
//     bearing: 2,
//     tilt: 0,
//     padding: [0, 0, 0, 0]
// }


// var pagesModule = require("ui/page");
// var labelModule = require("ui/label");

// function createPage(){
//     var label = new labelModule.Label();
//     label.text = "Hello, world!";
//     var page = new pagesModule.Page();
//     page.content = label;
//     return page;
// }


// exports.createPage = createPage;