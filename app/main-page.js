// var mapsModule = require("nativescript-google-maps-sdk");
// var totalyOPModule = require('./actions/fab').test;
var mapReadyCallback = require('./actions/location').onMapReady;

var tNSTextToSpeech = require("nativescript-texttospeech");




// function onMapReady(args) {
//     var mapView = args.object;

//     console.log("Setting a marker...");
//     var marker = new mapsModule.Marker();
//     marker.position = mapsModule.Position.positionFromLatLng(-33.86, 151.20);
//     marker.title = "Sydney";
//     marker.snippet = "Australia";
//     marker.userData = {
//         index: 1
//     };
//     mapView.addMarker(marker);
// }



let TTS = new tNSTextToSpeech.TNSTextToSpeech();

let speakOptions = {
    text: 'Stop it!', /// *** required ***
    speakRate: 2, // optional - default is 1.0
    pitch: 10.0, // optional - default is 1.0
    volume: 20.0, // optional - default is 10
    language: "en-US"  // optional - default is system language,
}


// Call the `speak` method passing the SpeakOptions object
TTS.speak(speakOptions);

exports.funIn = function thisIsBullshit() {
    TTS.speak(speakOptions);    
}
// function onMarkerSelect(args) {

//     console.log("Clicked on " + args.marker.title);
// }

// function onCameraChanged(args) {
//     console.log("Camera changed: " + JSON.stringify(args.camera));
// }



exports.onMapReady = mapReadyCallback; 

// exports.onMarkerSelect = onMarkerSelect;
// exports.onCameraChanged = onCameraChanged;


exports.pageLoaded = function () {
    // console.log(typeof location.onMapReady);
    console.log('hello');
};
