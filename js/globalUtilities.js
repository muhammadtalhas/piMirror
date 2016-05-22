function updateText(div, newText, speed) {
    if (speed == null) {
        speed = 400;
    }
    $(div).fadeOut(speed, function() {
        div.innerHTML = newText;
    });

    $(div).fadeIn(speed);
}

function toCelsius(f) {
    return (5 / 9) * (f - 32);
}

function encodeUrl(url) {
    return url.split(' ').join('%20');
}

function hideCenterFrame() {
    $("#desc").slideUp("slow",function(){
     $("#frame").slideUp("slow");
    })
}
function secondsToMins(seconds) {
    return Math.round(seconds/60);
}