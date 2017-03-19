var location = require("./location");

var PetrovX = 49.190;
var PetrovY = 16.607;

var divadloX = 49.198;
var divadloY = 16.613;

var isPetrovMarkerSet = false;
var isDivadloMarkerSet = false;

exports.getCarPosition = function getActualCarPosition() {

    setTimeout(function () {
        console.log("car postion");
        var myInit = {
            method: 'GET',
            headers: { Authorization: "Bearer 0da27f7e-d977-4537-94aa-c7e528ecf867" },
            mode: 'cors',
            cache: 'default'
        };

        const addr = 'https://api.moj.io/v2/vehicles/'

        fetch(addr, myInit).then(response => { return response.json(); }).then(function (r) {
            console.log(r);
            positionY = r.Data[0].Location.Lng;
            positionX = r.Data[0].Location.Lat;
            location.moveMarker(positionY, positionX);
            console.log(positionX + " " + positionY);
            checkMarkers(positionY, positionX);
            getActualCarPosition();
        }).catch(e => console.log(e));

    }, 500);
};

function checkMarkers(positionY, positionX) {
    console.log(" positionX " + Number(positionX).toFixed(3));
    console.log(" positionY " + Number(positionY).toFixed(3));
    if (Number(positionX).toFixed(3) == PetrovX && Number(positionY).toFixed(3) == PetrovY) {
        if (!isPetrovMarkerSet) {
            console.log("PEtROV FOUND!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
            location.addMarker(positionY, positionX);
            isPetrovMarkerSet = true;
        }
    }
    if (Number(positionX).toFixed(3) == divadloX && Number(positionY).toFixed(3) == divadloY) {
        if (!isDivadloMarkerSet) {
            console.log("DIVADLO FOUND!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
            location.addMarker(positionY, positionX);
            isPetrovMarkerSet = true;
        }
    }

}