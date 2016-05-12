/*var geo={
    lng:'.lng',
    lat:'.lat'
}*/
function getGeo(address) {
    var Geo = [];
    console.log("GETTING COORDS")
    var uri = "https://maps.googleapis.com/maps/api/geocode/json?address=";
    uri = uri + config.location.location;
    var locationData = makeGoogleCall(uri);
    locationData.success(function(data) {

        //this.lng = data.results[0].geometry.location.lng;
        //this.lat = data.results[0].geometry.location.lat;
        Geo.push(data.results[0].geometry.location.lat);
        Geo.push(data.results[0].geometry.location.lng);
        //console.log(Geo[0]);
        //console.log(Geo[1]);


    });
    console.log(Geo[0]);
    console.log(Geo[1]);

}

function makeGoogleCall(address) {
    return $.ajax({
        url: "http://maps.googleapis.com/maps/api/geocode/json?address=" + address,
        type: 'GET'
    });
}