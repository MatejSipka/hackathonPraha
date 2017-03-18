var frameModule = require("ui/frame");
var mapReadyCallback = require('./actions/location').onMapReady;
var getActualCarPosition = require('./actions/car-position').getCarPosition;

var detail = require('./detail-page');
var tNSTextToSpeech = require("nativescript-texttospeech");





let TTS = new tNSTextToSpeech.TNSTextToSpeech();

let speakOptions = {
    text: 'Suck my cock and lick my balls bitches!', /// *** required ***
    speakRate: 2, // optional - default is 1.0
    pitch: 10.0, // optional - default is 1.0
    volume: 20.0, // optional - default is 10
    language: "en-US"  // optional - default is system language,
}


// Call the `speak` method passing the SpeakOptions object


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
    getActualCarPosition();
    console.log('hello');
};

exports.detailLoaded = detail.detailLoaded;

exports.showDetail = function () {
    var topMost = frameModule.topmost();
    topMost.navigate("detail-page");
};