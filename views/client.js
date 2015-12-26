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
    tasks.forEach(function(item, index, array){
      var taskItem = item.task;
      var taskPoints = item.points;
      var taskComplete = item.complete;

      var taskCompleteButton = document.createElement('button');
      var taskDeleteButton = document.createElement('button');
      var deleteButtonText = document.createTextNode("Delete task");
      var taskItemContainer = document.createElement("ul");
      var taskName = document.createTextNode(item.task);
      var taskPoints = document.createTextNode(item.points);
      var taskComplete = document.createTextNode(item.complete);

      taskDeleteButton.appendChild(deleteButtonText);
      taskItemContainer.appendChild(taskName);
      taskItemContainer.appendChild(taskPoints);
      taskItemContainer.appendChild(taskComplete);
      taskItemContainer.appendChild(taskCompleteButton);
      taskItemContainer.appendChild(taskDeleteButton);

      var taskListItem = document.createElement("li");
      taskListItem.appendChild(taskItemContainer);
      $(".task-list").append(taskItemContainer);
    })
    resolve(tasks);
  });
};

function makeElements(tasks){
  console.log(tasks)
}
