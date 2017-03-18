exports.getCarPosition = function getActualCarPosition() {
    setInterval(function () {

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
            // getActualCarPosition();
        });

    }, 3000);
};