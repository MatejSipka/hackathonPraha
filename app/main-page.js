var frameModule = require("ui/frame");
var mapReadyCallback = require('./actions/location').onMapReady;

var detail = require('./detail-page');
var tNSTextToSpeech = require("nativescript-texttospeech");
var mojio = require("./actions/mojio");


// var topmost = frameModule.topmost();

var positionX;
var positionY;

mojio.init();


function getActualCarPosition() {
    setTimeout(function () {

        var position = mojio.getPosition();
        if (position) {
            positionX = position.Lat;
            positionY = position.Lng;
            console.log(positionX + " " + positionY);
        } else {
            console.log("undefined");
        }

        getActualCarPosition();
    }, 1000);
};

let TTS = new tNSTextToSpeech.TNSTextToSpeech();

let speakOptions = {
    text: 'Stop it!', /// *** required ***
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
    console.log('hello');
};

exports.detailLoaded = detail.detailLoaded;

exports.showDetail = function () {
    var topMost = frameModule.topmost();
    topMost.navigate("detail-page");
};