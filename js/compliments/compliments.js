// TO-DO: make timed compliments a optional thing
var complientData={
    currentCompliment: 'null'//just holds the current compliment thats on screen
}
function updateCompliment() {
    var timedCompliment = [];
    var moment = new Date();//right now
    var hour =moment.getHours();//right now now
    if (hour>= 3 && hour <12) {//if morn
        timedCompliment = loadedSettings.compliments.morning.slice();
    }
    else if (hour>=12 && hour <17) {//If afternoon
        timedCompliment = loadedSettings.compliments.afternoon.slice();
    }
    else if (hour >=17 || hour <3) {//If nite
        timedCompliment = loadedSettings.compliments.evening.slice();
    }
    else {//If the world is ending
        console.log("World is ending")
        timedCompliment = timedCompliment.concat(loadedSettings.compliments.morning.slice(),
                                                 loadedSettings.compliments.afternoon.slice(),
                                                 loadedSettings.compliments.evening.slice()
                                                 )
    }
    //console.log("compliments "+ timedCompliment)
    var isActive = timedCompliment.indexOf(complientData.currentCompliment);//holds index of current compliment
    
    if (isActive!== -1) {
        timedCompliment.splice(isActive,1);//Take out the one we see right now
    }
    
    var randomIndex = Math.floor(Math.random() * timedCompliment.length);//random compliemt from whats left
    complientData.currentCompliment = timedCompliment[randomIndex];
    
    updateText(document.getElementById('compliment'), timedCompliment[randomIndex], config.compliments.fadeIntervel)//do yo thang
}

function compliment_init() {//Init the whole thing yo
    updateCompliment();
    window.setInterval(function() {
        updateCompliment();
    }, (config.compliments.fadeInterval) * 1000 || 30000);
}