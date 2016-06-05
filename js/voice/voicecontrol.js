function voicecontrol_init() {
    if (annyang) {
        var commands = {
            /*'Test': function() {
                clock_init();
            },*/
            '(what is the)traffic to *passedLocation (today)': function(passedLocation) {
                if (config.maps.active) {
                getTravelTime(config.maps.origin, passedLocation, loadedSettings.avoid, function(trafficOb) {
                    var imageUrl = generateMap(config.maps.origin, passedLocation, loadedSettings.avoid);
                    updateFrameWithTravel(imageUrl, trafficOb.travelTime, trafficOb.travelCondition);
                })
                }
                else{console.log("Sorry, the maps and travel feature is not active. Please check your config.js file")}
            },
            'play *title by *artist': function(title, artist) {
                console.log(title + " By " +artist )
                    getSongSample(title, artist, function(data){
                    playSample(data);
                    console.log("DONE")
                    });
                    console.log("OUT")

            },
            'stop music': function(){
                 var audioElem = document.getElementById("audio");
                 if (audioElem) {
                    audioElem.pause();
                 }
                 hideAlbumArt();
            },
            'reset':function(){
                location.reload();
            }
        };

        annyang.addCommands(commands);
        annyang.start();
    }

}