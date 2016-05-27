var express = require('express');
var app = express();
var fs = require("fs");

var currentUser = {
    primaryKey: null

}

var loginMsg = {
    loggedIn: "Data recieved!"
}
var logoutTimerId;

app.get('/test/:imei', function(req, res) {
    console.log("Phone data recieved! " + req.params.imei);
    currentUser.primaryKey = req.params.imei;
    fs.readFile(__dirname + "/" + "response.json", 'utf8', function(err, data) {
        console.log(data);
        res.end(data);
    });
    console.log("Stored user " + currentUser.primaryKey)
    if (logoutTimerId!=null) {
        clearInterval(logoutTimerId)
    }
    logoutTimerId = setTimeout(function() {
        currentUser.primaryKey = null;
        console.log("Logged out after one minuite " + currentUser.primaryKey)
    }, 5000);
});

app.get('/getLoginData', function(req, res) {
    console.log("Got read request")
    res.setHeader('Content-Type', 'application/json');
    res.send(res.jsonp(currentUser));
});
var server = app.listen(8081, function() {

    var host = server.address().address
    var port = server.address().port
    console.log("Multi User app listening at http://%s:%s (TEST VERSION 1.1)", host, port)
    console.log("Reading data....")

})