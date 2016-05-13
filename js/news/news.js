var news = {
    url: 'https://query.yahooapis.com/v1/public/yql?',
    query:'q=select%20title%20from%20rss%20where%20url%3D%22http%3A%2F%2Frss.news.yahoo.com%2Frss%2Ftopstories%22&format=json&diagnostics=true&callback=', 
    currentHeadlines: 'null'
}
function updateNewsTicker() {
    var tickerStr = ' ';
    $.getJSON(news.url + news.query, function(data) {
        //console.log(data.query.results.item[0].title);
        var newsArray = data.query.results.item;
        var items = (data.query.results.item).length;
        
        for (i=0; i<items; i++){
            var currentArray =data.query.results.item[i]
           tickerStr=tickerStr.concat("     ");
            tickerStr=tickerStr.concat(currentArray.title);
            tickerStr=tickerStr.concat("     ");
        }
        //console.log("AFTER LOOP "+tickerStr);
        if (news.currentHeadlines !== tickerStr) {
            news.currentHeadlines = tickerStr;
            //console.log("ADDING "+data.query.results.item[i].title)
            var formattedHTML = "<marquee><pre>"+tickerStr+"<\pre><marquee>"
            //console.log(formattedHTML)
            updateText(document.getElementById("news"), formattedHTML, 800)
        }
    });

}

function news_init() {
    updateNewsTicker()
    window.setInterval(function() {
        updateNewsTicker()
    }, (config.news.refreshInterval) * 60000 || 1800000);
}