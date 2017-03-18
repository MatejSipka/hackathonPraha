


function getPlaces(lat, lng)
{
    const addr = 'https://maps.googleapis.com/maps/api/place/textsearch/json?query=landmarks&location=' + lat + ',' + lng + '&radius=20000&key=AIzaSyDiuRwKIU044ppK_GHVCZxcDHpw3aVpYh4'
    fetch(addr).then(response => { return response.json(); }).then(function (r) {
        return r.results;
    }).catch(failOnError(done));
}


module.exports = {
    getPlaces: getPlaces
}