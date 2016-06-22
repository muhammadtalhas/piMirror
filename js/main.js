    var loadedSettings = {
        userLoggedIn: 0,
        compliments: {
            morning: config.compliments.morning.slice(),
            afternoon: config.compliments.afternoon.slice(),
            evening: config.compliments.evening.slice()
        },
        destinations: jQuery.extend({}, config.maps.destinations),
        avoid: config.maps.avoid.slice(),
        method: config.maps.method,

        googleCalendar: config.googleCalendar.ical

    }

    $(document).ready(function() {
        $.ajaxSetup({
            cache: false
        });
        clock_init();
        weather_init();
        hideCenterFrame();
        compliment_init();
        if (config.news.active) {
            news_init();
        } else {
            console.log("Config has indicated that news ticker is deactive. Will not load");
            $("#news").remove();
        }
        voicecontrol_init();
        if (config.multiUserServer) {
            loadUserData();
        } else {
            console.log("Config has indicated that multi user service is not running. Will not ping");
        }
        calendar_init();
    });