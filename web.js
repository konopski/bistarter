var express = require('express');
var fs = require('fs');

var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
  var stuffFromIndex = fs.readFileSync('index.html',{encoding: 'utf-8'});
  response.send(stuffFromIndex);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
