var express = require('express');
var app = express();
var fs = require("fs");

var currentUser = {
    primaryKey: null

}

var logoutTimerId;

app.get('/test/:imei', function(req, res) {
    console.log("Phone data recieved! " + req.params.imei);
    //if (currentUser.primaryKey != null) {
        //console.log("Setting user")
        currentUser.primaryKey = req.params.imei;
        //}
    
    fs.readFile(__dirname + "/" + "response.json", 'utf8', function(err, data) {
        console.log(data);
        res.end(data);
    });
    console.log("Stored user " + currentUser.primaryKey)
    if (logoutTimerId != null) {
        clearInterval(logoutTimerId)
    }
    logoutTimerId = setTimeout(function() {
        currentUser.primaryKey = null;
        console.log("Logged out after one minuite " + currentUser.primaryKey)
    }, 10000);
});

app.get('/getLoginData', function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost');
    console.log("Got read request")
    res.setHeader('Content-Type', 'application/json');
    //console.log("data to send " + res.jsonp(currentUser))
    //res.send(res.jsonp(currentUser));

    console.log(eval(currentUser))
    var numberOfLoops = 0;
    var loopId = setInterval(function() {
            if (currentUser.primaryKey != null || numberOfLoops >=5) {
                clearInterval(loopId);
                res.send(eval(currentUser))
            } else {
                console.log("null val")
            }
            numberOfLoops++;
        }, 2000)
        //res.send(eval(currentUser))
});
var server = app.listen(8081, function() {

    var host = server.address().address
    var port = server.address().port
    console.log("Multi User app listening at http://%s:%s (TEST VERSION 1.1)", host, port)
    console.log("Reading data....")

});