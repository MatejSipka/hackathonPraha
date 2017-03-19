var location = require("./location");

exports.getCarPosition = function getActualCarPosition() {
    setInterval(function () {
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
            location.addMarkers(positionY, positionX);
            console.log(positionX + " " + positionY);
            // getActualCarPosition();
        }).catch(e => console.log(e));

    }, 3000);
};