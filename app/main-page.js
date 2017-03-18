var frameModule = require("ui/frame");
var mapReadyCallback = require('./actions/location').onMapReady;

var detail = require('./detail-page');
var tNSTextToSpeech = require("nativescript-texttospeech");


// var topmost = frameModule.topmost();

var positionX;
var positionY;

var hvezdarenX = 49.20;
var hvezdarenY = 16.58;

var petrovX = 49.19;
var petrovY = 16.60;

getActualCarPosition();


function getActualCarPosition() {
    setTimeout(function () {

        var myInit = {
            method: 'GET',
            headers: { Authorization: "Bearer 99d41dd7-32ed-4ffe-bd33-05f9552d0a18" },
            mode: 'cors',
            cache: 'default'
        };

        const addr = 'https://api.moj.io/v2/vehicles/'

        fetch(addr, myInit).then(response => { return response.json(); }).then(function (r) {
            positionY = r.Data[0].Location.Lng;
            positionX = r.Data[0].Location.Lat;

            console.log(positionX + " " + positionY);
            getActualCarPosition();
        });

    }, 1000);
};

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
    console.log('hello');
};

exports.detailLoaded = detail.detailLoaded;

exports.showDetail = function () {
    var topMost = frameModule.topmost();
    topMost.navigate("detail-page");
};