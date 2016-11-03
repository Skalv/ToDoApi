var express = require('express')
var app     = express()

var bodyParser = require('body-parser')

var mongoose = require('mongoose');
var db = mongoose.connection;

mongoose.connect('mongodb://localhost/toApi');
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("connected to database !");
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.send('hello world');
});

todoRoutes = require("./routes/todo")(express);
app.use("/api", todoRoutes);

app.listen(3000, function() {
  console.log('TodoApi listen on port 3000');
})
