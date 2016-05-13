function voicecontrol_init() {
    if (annyang) {
        console.log("annyang active")
        var commands = {
            'test': function() {
                console.log("Voice heard")
                clock_init();
                }
        };

    annyang.addCommands(commands);
    annyang.start();
}

}