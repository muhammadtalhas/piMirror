var complientData={
    currentCompliment: 'null'
}
function updateCompliment() {
    //console.log("Update Compliments");
    var timedCompliment = [];
    var moment = new Date();
    var hour =moment.getHours();
    //console.log("Hour is "+ hour);
    if (hour>= 3 && hour <12) {
        timedCompliment = config.compliments.morning.slice();
    }
    else if (hour>=12 && hour <17) {
        timedCompliment = config.compliments.afternoon.slice();
    }
    else if (hour >=17 || hour <3) {
        timedCompliment = config.compliments.evening.slice();
    }
    else {
        //If the world is ending
        //console.log("World is ending")
        timedCompliment = timedCompliment.concat(config.compliments.morning.slice(),
                                                 config.compliments.afternoon.slice(),
                                                 config.compliments.evening.slice()
                                                 )
    }
    //console.log("compliments "+ timedCompliment)
    var isActive = timedCompliment.indexOf(complientData.currentCompliment);
    
    if (isActive!== -1) {
        timedCompliment.splice(isActive,1);
    }
    
    var randomIndex = Math.floor(Math.random() * timedCompliment.length);
    //console.log("index "+ randomIndex )
    complientData.currentCompliment = timedCompliment[randomIndex];
    
    updateText(document.getElementById('compliment'), timedCompliment[randomIndex], config.compliments.fadeIntervel)
}

function compliment_init() {
    updateCompliment();
    window.setInterval(function() {
        updateCompliment();
    }, (config.compliments.fadeInterval) * 1000 || 30000);
}