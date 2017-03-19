var frameModule = require("ui/frame");
var view = require("ui/core/view");

var mapReadyCallback = require('./actions/location').onMapReady;
var getActualCarPosition = require('./actions/car-position').getCarPosition;
var setPage = require('./actions/car-position').setPage;
var setZoon = require('./actions/location').setZoon;

var detail = require('./detail-page');
var tNSTextToSpeech = require("nativescript-texttospeech");


var center = true;


var page;

let TTS = new tNSTextToSpeech.TNSTextToSpeech();

let speakOptions2 = {
    text: 'Why won\'t you let me die!',
    speakRate: 1.0, // optional - default is 1.0
    pitch: 1.0, // optional - default is 1.0
    volume: 15.0, // optional - default is 10
    language: "en-US"  // optional - default is system language,
};


exports.funOut = function thisIsWhat() {
    center = true;
    setZoon(center);
};


exports.onMapReady = mapReadyCallback;

exports.onMarkerSelect = function () {
    view.getViewById(page, "test").className = 'cardStyle cardStyleSmall';
    // view.getViewById(page, "mv").className = 'to-my-location small';

    // this.addCss('.cardStyle { margin-bottom: -350 }');
    // document.getElementById('test').className = 'cardStyle cardStyleSmall';
};
exports.coordsTap = function () {
    view.getViewById(page, "test").className = 'cardStyle';
    // view.getViewById(page, "mv").className = 'to-my-location';    
};

exports.showDetail = function () {
    view.getViewById(page, "test").className = 'cardStyle cardStyleDetail';

    speakOptions2.text = view.getViewById(page, "explain-text").text;
    TTS.speak(speakOptions2);
};


exports.buttonTap = function() {
    TTS.speak(speakOptions2);
}


exports.pageLoaded = function (args) {
    page = args.object;
    setPage(page, view);
    getActualCarPosition();
    console.log('hello');
};

exports.onCameraChanged = function () {
    // center = false;
    // setZoon(center);
}

exports.detailLoaded = detail.detailLoaded;

// exports.showDetail = function () {
//     var topMost = frameModule.topmost();
//     topMost.navigate("detail-page");
// };