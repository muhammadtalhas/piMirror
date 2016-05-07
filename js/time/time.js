var ampm = "am";

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var ap = "AM";
    if (h>11) {
        ap = "PM"
    }
    m = checkTime(m);
    s = checkTime(s);
    if (config.time.format == 12) {
        h= twelveHour(h);
        if (config.time.seconds) {
            console.log("12 hr format and seconds");
            var fullTime = h + ":" + m + ":" + s + " " +ap;
        }else{
            console.log("12 hr format and NO seconds");
            var fullTime = h + ":" + m +ap;
        }
    }
    else{
        if (config.time.seconds) {
            console.log("24 hr format and seconds");
            var fullTime = h + ":" + m + ":" + s;
        }else{
            console.log("24 hr format and NO seconds");
            var fullTime = h + ":" + m ;
        }
    }
    
    //var fullTime = h + ":" + m + ":" + s + " " +ap;
    document.getElementById('time').innerHTML = fullTime;
   
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
function twelveHour(h) {
    if (h > 12) {
        h = h- 12;
    };
    return h;
}

