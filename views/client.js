$(document).ready(function(){
  getTaskData().then(function(data){
    formatTaskData(data).then(function(tasks){
      printTasks(tasks).then(function(tasks){
        makeElements(tasks);
      })
    });
  }).catch(function(error){
    console.error("Couldn't get task data", error);
  });
});

function getTaskData(){
  return new Promise(function(resolve, reject){
    $.get('/get', function(data){
      resolve(data);
    });
  });
};

function formatTaskData(data){
  return new Promise(function(resolve, reject){
    var tasks = [];
    for(var i = 0; i < data.tasks.length; i = i + 1){
      var task = data.tasks[i];
      tasks.push(task);
    }
      resolve(tasks);
  });
};

function printTasks(tasks){
  return new Promise(function(resolve, reject){
    resolve(tasks);
  });
};

function makeElements(tasks){
  tasks.forEach(function(item, index, array){
    var taskItem = item.task;
    var taskPoints = item.points;
    var taskComplete = item.complete;
    $(".task-list").append(taskItem + " " + taskPoints + " " + taskComplete + " " + index);
    console.log(taskItem + taskPoints, taskComplete)
  })
}
