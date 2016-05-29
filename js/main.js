$(document).ready(function() {
    clock_init();
    voicecontrol_init();
    weather_init();

    compliment_init();
    
    news_init();
    hideCenterFrame();
    loadUserData();
    //window.location.assign("https://calendar.google.com/calendar/ical/talhanator%40gmail.com/public/basic.ics");
    calendar_init();
    
    

    
    

    //alert("News init")
    //var imageUrl=generateMap(config.maps.origin, config.maps.destinations.school, config.maps.avoid);
    //console.log("Length of avoid array" + (config.maps.avoid).length)
    //console.log("Origin "+config.maps.origin)
    //console.log("Dest "+config.maps.destinations[0]);
    //console.log(config.maps.avoid)
    //alert("IMAGE URL GENERATED" + imageUrl)
    //document.getElementById('framePic').src = "http://dev.virtualearth.net/REST/v1/Imagery/Map/Road/Routes/Driving?mapLayer=TrafficFlow&mapSize=300,250&waypoint.1=1300%20Mistyvale%20st%20Herndon%20Va%2020170&waypoint.2=4530%20Walney%20Rd%20Chantilly%20VA%2020151&avoid=&key=AnHMMpXtH0UtKIYmOskwyLNwZJHCXFs-AGypOAvhw_i3M0JHOL06axvJ1Bb7dOTL"
    //updateFrameWithTravel(imageUrl, "TEST")
    //initMap();
    //var obj =
    //var trafficTime= "";
    /*getTravelTime(config.maps.origin, config.maps.destinations.school, config.maps.avoid,function(trafficOb){

       var imageUrl=generateMap(config.maps.origin, config.maps.destinations.school, config.maps.avoid);
       updateFrameWithTravel(imageUrl, trafficOb.travelTime);
        }
        )*/
    //console.log("data "+obj);
    //console.log("Fin "+trafficTime);
});