/*This is actually really nice code
 *LOL, I based it off of Michael Teeuws solution, although have redone some of it to work with
 *my callbacks.
 *
 *This uses geo services from geo.js which is very basic (but works).
 * I will probably make the whole location services a tad bit better and more secure
 *TODO comment this better and make it better
 */

var icon = {
    'clear-day': 'wi-day-sunny',
    'clear-night': 'wi-night-clear',
    'rain': 'wi-rain',
    'snow': 'wi-snow',
    'wind': 'wi-strong-wind',
    'fog': 'wi-fog',
    'cloudy': 'wi-cloudy',
    'partly-cloudy-day': 'wi-day-cloudy',
    'partly-cloudy-night': 'wi-night-alt-cloudy'
}
var currentData = {
    temp: 'null',
    summary: 'null'
}

function updateCurrentWeather(address) {
    var locationData = makeGoogleCall(address);
    locationData.success(function(data) {
        var Geo = [];
        Geo.push(data.results[0].geometry.location.lat);
        Geo.push(data.results[0].geometry.location.lng);
        var uri = "https://api.forecast.io/forecast/" + config.weather.apikey + "/" + Geo[0] + "," + Geo[1];
        $.getJSON(uri + "?callback=?", function(data) {
            if (config.weather.units === "metric") {
                var currentTemp = toCelsius(data.currently.temperature);
                var units = "&#8451"
            } else {
                var currentTemp = data.currently.temperature;
                var units = "&#8457"
            }

            if (icon[data.currently.icon] == null) {
                var iconTag = "<i class=\"wi wi-na\"></i>";
            } else {
                var iconTag = "<i class=\"wi " + icon[data.currently.icon] + "\"></i>";
            }
            if (currentData.summary.localeCompare(data.hourly.summary)!=0) {
                currentData.summary = data.hourly.summary;
                updateText(document.getElementById('daySummary'), currentData.summary)
            }
            
            if (currentData.temp.localeCompare(Math.round(currentTemp) + units) != 0) {
                currentData.temp = Math.round(currentTemp) + units;
                //console.log("currentTemp " + currentData.temp);
                updateText(document.getElementById('Temp'), Math.round(currentTemp) + units);
            }
            if (document.getElementById('wIcon').innerHTML != iconTag) {
                updateText(document.getElementById('wIcon'), iconTag);
            }

        });
       });
}

function weather_init() {
    updateCurrentWeather(config.weather.location)
    window.setInterval(function() {
        updateCurrentWeather(config.weather.location)
    }, (config.weather.refreshTime) * 60000 || 1800000);

}