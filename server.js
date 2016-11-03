var express = require('express');
var app     = express();

var bodyParser = require('body-parser');

var mongoose = require('mongoose');
var db = mongoose.connection;

mongoose.connect('mongodb://localhost/toApi');
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("connected to database !");
});

const allowHeaders = ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Cache-Control'];
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', allowHeaders);
  res.header('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS, PUT');
  next();
})

app.use(require('morgan')('dev'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.options('/api/$', function(req, res) {
  res.send();
});

app.get('/', function(req, res) {
  res.send('hello world');
});

todoRoutes = require("./routes/todo")(express);
app.use("/api", todoRoutes);

app.listen(3000, function() {
  console.log('TodoApi listen on port 3000');
})
