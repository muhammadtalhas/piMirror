function updateText(div, newText, speed) {
    //I made this to update text wiles its on the screen. Decent fading in and fading out. I think i used it like twice
    if (speed == null) {
        speed = 400;
    }
    $(div).fadeOut(speed, function() {
        div.innerHTML = newText;
    });

    $(div).fadeIn(speed);
}

function toCelsius(f) {
    //Lol 'MURICA
    return (5 / 9) * (f - 32);
}

function encodeUrl(url) {
    return url.split(' ').join('%20');
}

function hideCenterFrame() {
    //Hides the big map thing in the middle
    $("#desc").slideUp("slow",function(){
     $("#frame").slideUp("slow");
    })
}
function secondsToMins(seconds) {
    //converting complex Calculus derivatives. jk secs -> mins
    return Math.round(seconds/60);
}