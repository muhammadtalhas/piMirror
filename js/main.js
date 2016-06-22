    //loaded settings will change when user logs in
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
            //This thing right here. Oh how i hate this thing right here
            //Gather around kids lemme tell u a stroy.
            //I spent 4 hours trying to figure out why a certain property wouldnt load
            //from a local file when loading user data
            //turns out my browser had cahced it. So this is the only work around I have for right now
            //Ill look into it later
            cache: false
        });
        clock_init();//clock
        weather_init();//weater
        hideCenterFrame();//hides center for right now
        compliment_init();//starts up compliments
        if (config.news.active) {
            news_init();//starts news if user wants them active
        } else {
            console.log("Config has indicated that news ticker is deactive. Will not load");
            $("#news").remove();//just gonna remove the DOM obj cause idk
        }
        voicecontrol_init();//start up the voice stuff, first of heavy inits
        if (config.multiUserServer) {
            loadUserData();//start up pooling the login server, second of heavy inits
        } else {
            console.log("Config has indicated that multi user service is not running. Will not ping");
        }
        calendar_init();//low priority calendar load
    });