var fs = require('fs');
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
})

app.post('/', function (req, res) {
  console.log('req');
  console.log(req);
  // the spec wants us to return 204.
  res.status(204).end();
})


app.listen(3000, function () {
  console.log('web-beacon-example app listening on port 3000!')
})
