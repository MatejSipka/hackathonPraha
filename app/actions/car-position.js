var location = require("./location");

var PetrovX = 49.190;
var PetrovY = 16.607;

//49.191022, 16.607595
var realPetrovX = 49.191022;
var realPetrovY = 16.607595;

var divadloX = 49.198;
var divadloY = 16.613;

//49.198320, 16.611004
var realdivadloX = 49.198320;
var realdivadloY = 16.611004;

var vilaX = 49.207;
var vilaY = 16.617;

//49.207206, 16.616012
var realvilaX = 49.207206;
var realvilaY = 16.616012;

var page;
var view;
var isPetrovMarkerSet = false;
var isVilaSet = false;
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
            location.addMarker(realPetrovY, realPetrovX);
            fillPetrov();
            isPetrovMarkerSet = true;
        }
    }
    if (Number(positionX).toFixed(3) == divadloX && Number(positionY).toFixed(3) == divadloY) {
        if (!isDivadloMarkerSet) {
            console.log("DIVADLO FOUND!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
            location.addMarker(realdivadloY, realdivadloX);
            fillDivadlo();
            isPetrovMarkerSet = true;
        }
    }
    if (Number(positionX).toFixed(3) == vilaX && Number(positionY).toFixed(3) == vilaY) {
        if (!isVilaSet) {
            console.log("VILA FOUND!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
            location.addMarker(realvilaY, realvilaX);
            fillVila();
            isVilaSet = true;
        }
    }
}

function setPage(pageLocal, viewLocal) {
    page = pageLocal;
    view = viewLocal;
}

function fillVila() {
    view.getViewById(page, "explain-info").text = "Villa Tugendhat";
    view.getViewById(page, "explain-text").text = "Villa Tugendhat is a historical building in the wealthy neighbourhood of Černá Pole in Brno, Czech Republic. It is one of the pioneering prototypes of modern architecture in Europe, and was designed by the German architect Ludwig Mies van der Rohe.";
    view.getViewById(page, "explain-text").text += "Built of reinforced concrete between 1928 and 1930[1] for Fritz Tugendhat and his wife Greta, the villa soon became an icon of modernism.";
}

function fillPetrov() {
    view.getViewById(page, "explain-info").text = "Cathedral of St. Peter and Paul";
    view.getViewById(page, "explain-text").text = "The Cathedral of Saints Peter and Paul is located on the Petrov hill in the centre of the city of Brno in the Czech Republic. It is a national cultural monument and one of the most important pieces of architecture in South Moravia.";
    view.getViewById(page, "explain-text").text += "The interior is mostly Baroque in style, while the impressive 84-metre-high towers were constructed to the Gothic Revival designs of the architect August Kirstein in 1904–5 .";
    view.getViewById(page, "explain-text").text += "In the 14th century, the Cathedral was rebuilt on an earlier construction as a three-nave Gothic basilica.";

}

function fillDivadlo() {
    view.getViewById(page, "explain-info").text = "National Theatre Brno";
    view.getViewById(page, "explain-text").text = "The National Theatre Brno is the major theatre house in Brno. It was established in 1884 and modeled on the National Theatre in Prague.";
    view.getViewById(page, "explain-text").text += "It now consists of three stages:";
    view.getViewById(page, "explain-text").text += "Mahen Theatre (drama), originally the German-language Theatre on the Walls (construction finished in 1882), the first theatre building on the continent with electric lighting (designed by Thomas Alva Edison himself).";
    view.getViewById(page, "explain-text").text += "Janáček Theatre (opera, ballet), a modern building from 1961–1965. Zdenĕk Neverla was appointed general director of the Janáček Opera House in 1990.";
    view.getViewById(page, "explain-text").text += "Reduta Theatre, the oldest theatre house in Central Europe, recently reconstructed. In December 1767 the twelve-year-old Wolfgang Amadeus Mozart gave a concert there.";
}

exports.setPage = setPage;
