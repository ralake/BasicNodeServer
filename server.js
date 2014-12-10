var express = require('express');
var app = express();
var server = require('http').createServer(app);
var path = require('path');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render("index");
});

app.get('/next', function(request, response) {
  response.render("nextPage");	
});

server.listen(3000, function() {
  console.log("Server listenning on port 3000");	
});

module.exports = server;
