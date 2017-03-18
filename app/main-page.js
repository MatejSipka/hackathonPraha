var frameModule = require("ui/frame");
var view = require("ui/core/view");


var mapReadyCallback = require('./actions/location').onMapReady;
var getActualCarPosition = require('./actions/car-position').getCarPosition;

var detail = require('./detail-page');
var tNSTextToSpeech = require("nativescript-texttospeech");



var page;

let TTS = new tNSTextToSpeech.TNSTextToSpeech();

let speakOptions2 = {
    text: 'Leeeeeeeeeeeeroy Jeeeeeeeeeeeenkins!', /// *** required ***
    speakRate: 2.5, // optional - default is 1.0
    pitch: 0.2, // optional - default is 1.0
    volume: 20.0, // optional - default is 10
    language: "en-US"  // optional - default is system language,
};


exports.funOut = function thisIsWhat() {
    TTS.speak(speakOptions2);
};
// function onMarkerSelect(args) {

//     console.log("Clicked on " + args.marker.title);
// }

// function onCameraChanged(args) {
//     console.log("Camera changed: " + JSON.stringify(args.camera));
// }



exports.onMapReady = mapReadyCallback;

exports.onMarkerSelect = function () {
    view.getViewById(page, "test").className = 'cardStyle cardStyleSmall';
    view.getViewById(page, "mv").className = 'to-my-location small';
    
    // this.addCss('.cardStyle { margin-bottom: -350 }');
    // document.getElementById('test').className = 'cardStyle cardStyleSmall';
};
exports.coordsTap = function () {
    view.getViewById(page, "test").className = 'cardStyle';
    view.getViewById(page, "mv").className = 'to-my-location';    
};

exports.showDetail = function () {
    view.getViewById(page, "test").className = 'cardStyle cardStyleDetail';
    view.getViewById(page, "mv").className = 'to-my-location detail';
};

exports.pageLoaded = function (args) {
    page = args.object;
    getActualCarPosition();
    console.log('hello');
};

exports.detailLoaded = detail.detailLoaded;

// exports.showDetail = function () {
//     var topMost = frameModule.topmost();
//     topMost.navigate("detail-page");
// };