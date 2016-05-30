    var loadedSettings = {
        compliments: {
            morning:config.compliments.morning.slice(),
            afternoon:config.compliments.afternoon.slice(),
            evening:config.compliments.evening.slice()
    },
        destinations: jQuery.extend({}, config.maps.destinations),
        avoid: config.maps.avoid.slice(),
        method: config.maps.method
        
        
    }

$(document).ready(function() {

    console.log(loadedSettings.destinations)
    clock_init();
    weather_init();
    hideCenterFrame();
    compliment_init();
    news_init();
    voicecontrol_init();
    loadUserData();
    //calendar_init();
});