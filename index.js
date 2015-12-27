// req modules
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var cors = require('cors');
var port = 1337;
require('dotenv').load();

var knex = require("knex")({
  client: "pg",
  connection: 'postgres://localhost/todo',
  });

var Tasks = function () {
  return knex('tasks');
}

// use modules
app.use(express.static('./views'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// Delete all crud route
app.use('/delete', function(req, res, next){
  knex("tasks").where('points', '>', 0 ).del().then(function(tasks){
    res.redirect('/index.html');
  });
});

// Read crud routes
app.get('/get', function(request, response){
  knex('tasks').select().then(function(tasks){
    response.status(200).json({tasks: tasks});
  });
});

// Update task to complete
app.get('/:complete/whatever', function(req, res){
  var status = req.params.complete;
  console.log(status)
  knex("tasks").where('complete', '=', status).update('complete', true).then(function(){
    res.redirect('/index.html');
  });
});

// Create crud routes
app.post("/set", function(req, res){
    knex("tasks").insert({
        task: req.body.task,
        complete: req.body.complete,
        points: req.body.points,
    }, "task").then(function(task){
      res.redirect('/index.html');
    });
});

// Delete crud routes
app.get('/:task', function(req, res){
  var task = req.params.task;
  knex("tasks").where('task', '=', task).del().then(function(tasks){
    res.redirect('/index.html');
  });
});

//bad request
app.get('/bad.html', function(req, res){
  res.redirect('/bad.html');
});

app.listen(port, function(){
  console.log('you are now locked into port: ' + port);
});
