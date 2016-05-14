function voicecontrol_init() {
    if (annyang) {
        var commands = {
            'Test': function() {
                clock_init();
                },
            'traffic to *passedLocation':function(passedLocation){
                getTravelTime(config.maps.origin, passedLocation, config.maps.avoid,function(trafficOb){
                    var imageUrl=generateMap(config.maps.origin, passedLocation, config.maps.avoid);
                    updateFrameWithTravel(imageUrl, trafficOb.travelTime,trafficOb.travelCondition);
        }
        )
            }
        };

    annyang.addCommands(commands);
    annyang.start();
}

}