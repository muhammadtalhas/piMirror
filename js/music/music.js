function getSongSample(title, artist) {
    var baseURL = "https://api.spotify.com/v1/search?q=artist:"
    baseURL = baseURL + artist + " ";
    baseURL = baseURL + "title:";
    baseURL = baseURL + title;
    baseURL = baseURL + "&type=track&limit=1"

    var uri = encodeUrl(baseURL);

    $.ajax({
        url: uri,
        type: "GET",
        success: function(data) {
            console.log(data);
            var sampleURL = data.tracks.items[0].preview_url;
            var x = document.getElementById("audio");
            x.setAttribute("src", sampleURL);
            x.setAttribute("volume", 0.0);
            /*var audio = new Audio(sampleURL);
            audio.play();*/
            x.play();
            //console.log("AFTER PLA");
            $(function() {
                //console.log("INFUNCIOTN");
                $("#audio").prop("volume", 0.0);
                $("#audio").on("timeupdate", function() {
                    console.log(this.currentTime);
                    if (this.currentTime < 2) {
                        $(this).stop().animate({
                            volume: 1.0
                        }, 1000);
                    } else if (this.currentTime > 27) {
                        $(this).stop().animate({
                            volume: 0.0
                        }, 1000);
                    }
                });
            });

        },
        error: function(e) {
            //alert(e.statusText);
        }
    })




}