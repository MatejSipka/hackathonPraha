var location = require("./location");

var PetrovX = 49.190;
var PetrovY = 16.607;

var divadloX = 49.198;
var divadloY = 16.613;
var page;
var view;
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
            location.addMarker(PetrovY, PetrovX);
            fillPetrov();
            isPetrovMarkerSet = true;
        }
    }
    if (Number(positionX).toFixed(3) == divadloX && Number(positionY).toFixed(3) == divadloY) {
        if (!isDivadloMarkerSet) {
            console.log("DIVADLO FOUND!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
            location.addMarker(divadloY, divadloX);
            isPetrovMarkerSet = true;
        }
    }
}

function setPage(pageLocal, viewLocal) {
    page = pageLocal;
    view = viewLocal;
}

function fillPetrov() {
    view.getViewById(page, "explain-info").text = "Cathedral of St. Peter and Paul";
    view.getViewById(page, "explain-text").text = "The Cathedral of Saints Peter and Paul is located on the Petrov hill in the centre of the city of Brno in the Czech Republic. It is a national cultural monument and one of the most important pieces of architecture in South Moravia.";
    view.getViewById(page, "explain-text").text += "The interior is mostly Baroque in style, while the impressive 84-metre-high towers were constructed to the Gothic Revival designs of the architect August Kirstein in 1904–5 .";
    view.getViewById(page, "explain-text").text += "In the 14th century, the Cathedral was rebuilt on an earlier construction as a three-nave Gothic basilica.";

}

//

exports.setPage = setPage;
