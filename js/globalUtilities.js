function updateText(div, newText) {
    $(div).fadeOut('slow', function() {
    div.innerHTML = newText;
    });
    
    $(div).fadeIn();
}

/*function fadeOut(element) {
    console.log("Fading out");
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 50);
}

function fadeIn(element) {
        console.log("Fading in");
    var op = 0.1;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 10);
}*/

function toCelsius(f) {
    return (5/9) * (f-32);
}