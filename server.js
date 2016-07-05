var express = require('express');
var path = require('path');
var app = express();

// Define the port to run on
app.set('port', 3000);

app.set('views', __dirname + '/public');
app.set('node_modules',__dirname + '/node_modules');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
// Listen for requests

app.use('/node_modules', express.static(__dirname + '/node_modules/'));
app.use('/scripts', express.static(__dirname + '/public/scripts'));
app.use('/styles', express.static(__dirname + '/public/styles'));
app.use('/views', express.static(__dirname + '/public/views'));

app.get('/',function(req,res){
   res.render('index.html');
});

var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('Magic happens on port ' + port);
});
