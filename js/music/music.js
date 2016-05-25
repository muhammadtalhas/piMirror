function getSongSample(title, artist, callback) {
    var baseURL = "https://api.spotify.com/v1/search?q=artist:"
    baseURL = baseURL + artist + " ";
    baseURL = baseURL + "title:";
    baseURL = baseURL + title;
    baseURL = baseURL + "&type=track&limit=1"

    var uri = encodeUrl(baseURL);
    console.log(uri);
    $.ajax({
        url: uri,
        type: "GET",
        success: function(data) {
            return callback(data)
          

        },
        error: function(e) {
            //alert(e.statusText);
        }
    })




}

function playSample(data){
            console.log(data);
            var sampleURL = data.tracks.items[0].preview_url;
            var audioElem = document.getElementById("audio");
            audioElem.setAttribute("src", sampleURL);
            audioElem.setAttribute("volume", 0.0);
            /*var audio = new Audio(sampleURL);
            audio.play();*/
            var albumArt = data.tracks.items[0].album.images[1].url;
            updateAlbumArt(albumArt);
            audioElem.play();
            //console.log("AFTER PLA");
            $(function() {
                //console.log("INFUNCIOTN");
                $("#audio").prop("volume", 0.0);
                $("#audio").on("timeupdate", function() {
                    //console.log(this.currentTime);
                    if (this.currentTime < 2) {
                        $(this).stop().animate({
                            volume: 1.0
                        }, 1000);
                    } else if (this.currentTime > 27) {
                        console.log("STUCK");
                        hideAlbumArt();
                        $(this).stop().animate({
                            volume: 0.0
                        }, 1000);
                    }
                });
                
            });
            
}
function updateAlbumArt(link) {
        console.log("UPDATING IMAGE")
        $("#art").slideUp(function(){
        var art = document.getElementById("art");
        console.log(art);
        console.log("UPDATING IMAGE CALLBACK")
        art.src = link;
        $("#art").slideDown()
        });
         
}
function hideAlbumArt() {
    $("#art").slideUp(function(){
     art.src = "resources/black.png";   
        
    });
}