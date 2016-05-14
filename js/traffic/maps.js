var refreshId;

function generateMap(origin, destination, avoidArray) {
//http://dev.virtualearth.net/REST/v1/Imagery/Map/Road/Routes/Driving?mapLayer=TrafficFlow&mapSize=300,250&waypoint.1=1300%20Mistyvale%20st%20Herndon%20Va%2020170&waypoint.2=4530%20Walney%20Rd%20Chantilly%20VA%2020151&avoid=minimizeTolls&key=AnHMMpXtH0UtKIYmOskwyLNwZJHCXFs-AGypOAvhw_i3M0JHOL06axvJ1Bb7dOTL
  var avoidStr ="";

  for(i=0; i<avoidArray.length; i++)
  {
    console.log("in for loop");
    avoidStr = avoidStr.concat(avoidArray[i]);
    avoidStr = avoidStr.concat(',');
  }
  if (avoidStr.slice(-1) == ',') {
    console.log("removing last comma");
    avoidStr = avoidStr.substring(0, avoidStr.length - 1);
  }
  
  if (destination in config.maps.destinations) {
    destination = config.maps.destinations[destination];
  }
  
  var url = "http://dev.virtualearth.net/REST/v1/Imagery/Map/Road/Routes/"+config.maps.method+"?mapLayer=TrafficFlow&mapSize=300,250&waypoint.1="+origin+"&waypoint.2="+destination+"&avoid="+avoidStr+"&key="+config.maps.bingAPIKey;
  url = encodeUrl(url);
  console.log("URL "+url)
  return url;

}
function getTravelTime(origin, destination, avoidArray,callback) {

  var avoidStr ="";

  for(i=0; i<avoidArray.length; i++)
  {
    console.log("in for loop");
    avoidStr = avoidStr.concat(avoidArray[i]);
    avoidStr = avoidStr.concat(',');
  }
  if (avoidStr.slice(-1) == ',') {
    console.log("removing last comma");
    avoidStr = avoidStr.substring(0, avoidStr.length - 1);
  }
  
    if (destination in config.maps.destinations) {
    destination = config.maps.destinations[destination];
  }
  
  
  var uri = "http://dev.virtualearth.net/REST/V1/Routes/"+config.maps.method+"?wp.0="+origin+"&wp.1="+destination+"&avoid="+avoidStr+"&key="+config.maps.bingAPIKey;
  uri = encodeUrl(uri);
  console.log("TRAFFIC DATA URI " +uri)
  var data;
  ajaxToRoute(uri,data,function(trafficObj){
    console.log("data inside" + trafficObj.travelTime)
    return callback(trafficObj);
  })
  
  
  

  
  /*$.getJSON(uri + "?callback=?", function(data) {
   console.log(data); 
  });*/
}

function updateFrameWithTravel(map, information,congestion) {
  if (refreshId != null) {
  clearInterval(refreshId)
  }
  $("#desc").slideUp("slow",function(){
  $("#frame").slideUp("slow",function() {
    console.log("Image updating");
    var image = document.getElementById('framePic');
    image.src = map;
    var paragraph = document.getElementById('trafficInfo');
    if (congestion == "None"||congestion == "Mild") {
        paragraph.style.color = "green"
    }else if (congestion == "Medium") {
        paragraph.style.color = "yellow"
    }else{
        paragraph.style.color = "red"
    }
    paragraph.innerHTML = information + " Minuites";
    
  });
  }
  )
  setTimeout( function(){
    $("#frame").slideDown("slow")
    $("#desc").slideDown("slow")
  }, 1000 );
  refreshId =setTimeout(function(){
    hideCenterFrame()
  },10000)
  
}

function ajaxToRoute(uri,data,callback) {
     $.ajax({
        url: uri,
        dataType: "jsonp",
        jsonp: "jsonp",
        data: data,
        success: function (data) {
          
          var travelInformation={
            travelTime:"",
            travelCondition:""
          }
            console.log(data);
            travelInformation.travelTime = String(secondsToMins((data.resourceSets[0].resources[0].travelDurationTraffic)))
            travelInformation.travelCondition = String(data.resourceSets[0].resources[0].trafficCongestion)
            return callback(travelInformation);
            
        },
        error: function (e) {
            //alert(e.statusText);
        }
    });
}