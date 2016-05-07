function getGeo(address) {
    var Geo=[];
    var uri = "http://maps.googleapis.com/maps/api/geocode/json?address=";
    uri = uri + config.location.location;
   $.ajax({
    url: uri,
    type: 'GET',
    success: function(data){
        Geo.push(data.results.geometry.location.lat);
        Geo.push(data.results.geometry.location.lng);
        return Geo;
    },
    error: function(data) {
        return "Error getting location"
    }
});
}