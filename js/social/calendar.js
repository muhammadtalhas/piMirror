function getICAL(url) {
        new ical_parser("js/test.php" + "?url="+encodeURIComponent(config.googleCalendar.ical), function(cal){
        events = cal.getEvents();
        console.log(events);
        var futureEvents = [];
        var numberOfEvents = events.length;
        var now = moment();
        for (var i in events) {
            var currentEvent = events[i];
            
            var day = moment(currentEvent.start_date, "DD/MM/YYYY");
            if (day.isSameOrAfter(now)) {
                console.log(day);
                var div = document.getElementsByClassName("social");
                div.innerHtml = "TEST"
            }
            
        }
    }); 
}



function calendar_init() {
    getICAL(config.googleCalendar.ical)
}