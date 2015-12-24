// req modules
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var cors = require('cors');
var port = 1337;
var knex = require("knex")({ client: "pg", connection: 'postgres://localhost/todo'});
var Tasks = function () {return knex('tasks');}
require('dotenv').load();

// usemodules
app.use(express.static('./views'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// Read crud routes
app.get('/', function(request, response, next){
  response.send('what up dawg')
})
// Create crud routes
app.post("/set", function(req, res){
    knex("tasks").insert({
        task: req.body.task,
        complete: req.body.complete,
        points: req.body.points,
    }, "id").then(function(id){
        req.body.id = id[0];
        res.status(201).redirect('/index.html');
    });
});
// Update crud routes

// Delete crud route
app.listen(port, function(){
  console.log('you are now locked into port: ' + port);
})
