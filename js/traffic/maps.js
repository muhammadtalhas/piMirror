var refreshId;//Gonna hold the ID so we can reset the timer

function generateMap(origin, destination, avoidArray) {
    var avoidStr = "";//what to avoid will be here

    for (i = 0; i < avoidArray.length; i++) {
        //adding everything that should be avoided
        avoidStr = avoidStr.concat(avoidArray[i]);
        avoidStr = avoidStr.concat(',');
    }
    if (avoidStr.slice(-1) == ',') {
        //im lazy so remove that comma
        avoidStr = avoidStr.substring(0, avoidStr.length - 1);
    }

    if (destination in loadedSettings.destinations) {
        //If the destination is a keyword, look up the address. HOW COOL IS THAT HAHAHAH
        destination = loadedSettings.destinations[destination];
    }

    //generate a URL,encode it and return
    var url = "http://dev.virtualearth.net/REST/v1/Imagery/Map/Road/Routes/" + loadedSettings.method + "?mapLayer=TrafficFlow&mapSize=300,250&waypoint.1=" + origin + "&waypoint.2=" + destination + "&avoid=" + avoidStr + "&key=" + config.maps.bingAPIKey;
    url = encodeUrl(url);
    //console.log("URL " + url)
    return url;

}

function getTravelTime(origin, destination, avoidArray, callback) {

    var avoidStr = "";//what to avoid will be here

    for (i = 0; i < avoidArray.length; i++) {
        //yada yada same as function above
        avoidStr = avoidStr.concat(avoidArray[i]);
        avoidStr = avoidStr.concat(',');
    }
    if (avoidStr.slice(-1) == ',') {
        //lol still lazy
        avoidStr = avoidStr.substring(0, avoidStr.length - 1);
    }

    if (destination in loadedSettings.destinations) {
        //The coolness
        destination = loadedSettings.destinations[destination];
    }

    //Generate the url, encode it
    var uri = "http://dev.virtualearth.net/REST/V1/Routes/" + loadedSettings.method + "?wp.0=" + origin + "&wp.1=" + destination + "&avoid=" + avoidStr + "&key=" + config.maps.bingAPIKey;
    uri = encodeUrl(uri);
    //console.log("TRAFFIC DATA URI " + uri)
    var data;
    
    //call up the homie ajaxToRoute
    ajaxToRoute(uri, data, function(trafficObj) {
        //console.log("data inside" + trafficObj.travelTime)
        return callback(trafficObj);//return the object from BING to the call back for processing TODO: EVALUATE AND CATCH ERRORS EARLIER
    })


}

function updateFrameWithTravel(map, information, congestion) {
    /*This is crazy Jquery stuff to
     *1) Hide Frame
     *2) Update map and travel Time
     *3) Show Frame
     *4) Hide frame when we're done
     */
    if (refreshId != null) {
        clearInterval(refreshId)
    }
    $("#desc").slideUp("slow", function() {
        $("#frame").slideUp("slow", function() {
            console.log("Image updating");
            var image = document.getElementById('framePic');
            image.src = map;
            var paragraph = document.getElementById('trafficInfo');
            if (congestion == "None" || congestion == "Mild") {
                paragraph.style.color = "green"
            } else if (congestion == "Medium") {
                paragraph.style.color = "yellow"
            } else {
                paragraph.style.color = "red"
            }
            paragraph.innerHTML = information + " Minuites";

        });
    })
    setTimeout(function() {
        $("#frame").slideDown("slow")
        $("#desc").slideDown("slow")
    }, 1000);
    refreshId = setTimeout(function() {
        hideCenterFrame()
    }, 10000)

}

function ajaxToRoute(uri, data, callback) {
    $.ajax({
        url: uri,
        dataType: "jsonp",//jsonp cause Bing is whack
        jsonp: "jsonp",//idrk what im doing here but it works
        data: data,
        success: function(data) {

            var travelInformation = {
                //gonna hold travel time and condition
                travelTime: "",
                travelCondition: ""
            }
            /*TODO/NOTE: Ive been told by BING not to use the travel Condition since its not "supported"
             *Testing it in the USA I havent found anywhere where it dosent work
             *Ill need to redo this part so it wont break if the condition is not returned
             *see: https://social.msdn.microsoft.com/Forums/en-US/98776564-38f8-4fff-adda-a8164d16c0ff/missing-documentation-for-trafficcongestion-parameter-on-routes-api?forum=bingmaps
             */
            console.log(data);
            travelInformation.travelTime = String(secondsToMins((data.resourceSets[0].resources[0].travelDurationTraffic)))
            travelInformation.travelCondition = String(data.resourceSets[0].resources[0].trafficCongestion)
            return callback(travelInformation);

        },
        error: function(e) {
            //TODO tell user ur on earth and not on mars
            //alert(e.statusText);
        }
    });
}