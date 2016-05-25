function voicecontrol_init() {
    if (annyang) {
        var commands = {
            'Test': function() {
                clock_init();
            },
            'traffic to *passedLocation': function(passedLocation) {
                getTravelTime(config.maps.origin, passedLocation, config.maps.avoid, function(trafficOb) {
                    var imageUrl = generateMap(config.maps.origin, passedLocation, config.maps.avoid);
                    updateFrameWithTravel(imageUrl, trafficOb.travelTime, trafficOb.travelCondition);
                })
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