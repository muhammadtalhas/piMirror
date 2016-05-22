var express = require('express');
var app = express();
var fs = require("fs");


app.get('/test/:imei', function (req, res) {
  console.log("TEST " + req.params.imei);
});

app.get('/test2/:imei', function (req, res) {
  console.log("TEST2 " + req.params.imei);
});

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)

})