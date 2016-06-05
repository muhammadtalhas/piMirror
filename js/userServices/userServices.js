function loadUserData() {
   
        console.log("checking login status")
        $.ajax({
            url: "http://localhost:8081/getLoginData",
            type: "GET",
            dataType: "json",
            success: function(data) {
                console.log(data.primaryKey)
                if (data.primaryKey !== null) {
                    editSettings(data.primaryKey)
                    console.log("Logged in")
                    setTimeout(resetSettings(), 60000);
                }
                setTimeout(loadUserData(), 3000);
            },
            error: function(e) {
                console.log("There was an error communicating with the userServer service. Is it Running?");
                console.log(e.statusText);
                setTimeout(loadUserData(), 3000);
            },
            timeout: 15000
        })



}

function editSettings(key) {
    console.log("/userSettings/" + key + ".json")
    $.getJSON("/userSettings/" + key + ".json", function(data) {
        console.log(data);
        //console.log("Mor" + data.settings[0].compliments.morning)
        //console.log("Aftern" + data.settings[0].compliments.afternoon)
        //console.log("Even" + data.settings[0].compliments.evening)

        //handle compliments
        loadedSettings.compliments.morning = data.settings[0].compliments.morning.slice();
        loadedSettings.compliments.afternoon = data.settings[0].compliments.afternoon.slice();
        loadedSettings.compliments.evening = data.settings[0].compliments.evening.slice();

        //handle map and traffic stuff
        loadedSettings.destinations = {} // clean the object
        console.log(data.settings[1].destinations)
        for (var property in data.settings[1].destinations) {
            if (data.settings[1].destinations.hasOwnProperty(property)) {
                loadedSettings.destinations[property] = data.settings[1].destinations[property];
            }
        }
        loadedSettings.avoid = data.settings[1].avoid.slice();
        loadedSettings.method = data.settings[1].method;
        //console.log("destinations after login ")
        //console.log(loadedSettings.destinations
        //compliment_init();

        /*$.each( data, function( key, val ) {
            console.log(key + "value:: " + val );
        });*/
    });
}

function resetSettings() {
    
    loadedSettings.compliments.evening = config.compliments.morning.slice();
    loadedSettings.compliments.afternoon= config.compliments.afternoon.slice();
    loadedSettings.compliments.evening = config.compliments.evening.slice();
    
        destinations= jQuery.extend({}, config.maps.destinations);
        avoid= config.maps.avoid.slice();
        method= config.maps.method;
    
}