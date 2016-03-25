var PORT = 3000;
var express = require('express');
var session = require('express-session');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var logger = require('morgan');
var handlebars = require('handlebars');
var expressHandlebars = require('express-handlebars');
var path = require('path');
var server = require('http').Server(app);
var io = require('socket.io')(server);
mongoose.connect("mongodb://localhost/associateme");

app.engine('handlebars', expressHandlebars({
  defaultLayout: 'main'
}));
app.set('view engine','handlebars');



app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');
  if (req.method == 'OPTIONS') {
    res.status(200).end();
  } else {
    next();
  }
});



app.use(logger('dev'));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'client', 'public')));
app.use(express.static(path.join(__dirname, 'client', 'js')));
app.use(express.static(path.resolve(__dirname, 'client', 'js', 'controllers')));


app.get('*', function(req, res, next){
 res.sendFile(process.cwd() + "/client/views/index.html");
  

});


// app.get('/', function(req, res, next){
//  res.sendFile(process.cwd() + "/client/views/index.html");
  

// });











app.listen(PORT, function() {
  console.log("LISTENING ON %s", PORT);
});