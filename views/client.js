$(document).ready(function(){
  getTaskData().then(function(data){
    formatTaskData(data).then(function(tasks){
      printTasks(tasks).then(function(tasks){
        makeElements(tasks).then(function(tasks){
          updater(tasks).then(function(tasks){
            pushUpdates(tasks);
          });
        });
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
      // task item container
      var taskItemContainer = document.createElement("ul");
      // task name
      var taskItem = item.task;
      var taskName = document.createTextNode(item.task);
      var taskNameContainer = document.createElement('li');
      taskNameContainer.appendChild(taskName);
      taskNameContainer.setAttribute('id', 'task-id');
      taskNameContainer.className = 'task-title';
      // task points
      var taskPoints = item.points;
      var taskPoints = document.createTextNode('points: ' + item.points + " ");
      var taskPointsContainer = document.createElement('li');
      taskPointsContainer.appendChild(taskPoints);
      // task status
      var taskComplete = item.complete;
      var taskComplete = document.createTextNode('complete: ' + item.complete + " ");
      var taskCompleteContainer = document.createElement('li');
      taskCompleteContainer.appendChild(taskComplete);
      taskCompleteContainer.className ='task-complete';
      // buttons
      var taskCompleteButton = document.createElement('button');
      var taskDeleteButton = document.createElement('button');
      var deleteButtonText = document.createTextNode("Delete task");

      taskDeleteButton.className = 'delete-task';
      taskItemContainer.className = 'task-container';

      taskDeleteButton.appendChild(deleteButtonText);
      taskItemContainer.appendChild(taskNameContainer);
      taskItemContainer.appendChild(taskPointsContainer);
      taskItemContainer.appendChild(taskCompleteContainer);
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
  return new Promise(function(resolve, reject){
    $('.task-title').on('click', function(){
       $(this).toggleClass('selected');
    })
    resolve(tasks)
  })
}

function updater(tasks){
  return new Promise(function(resolve, reject){
    $('.task-title').on('click', function(){
      if($( ".task-title" ).hasClass( "selected" )){
        var taskTitle = (this).innerHTML;
        console.log(taskTitle);
        $('.delete-task').on('click', function(){
          console.log('you suck! ' + taskTitle);
          window.location.href = 'http://localhost:1337/' + taskTitle;
        })
      }
    })
    resolve(tasks)
  })
};

function pushUpdates(tasks){
  // return setInterval(function(){
  //   if($( ".task-container" ).hasClass( "selected" )){
  //     console.log('boo yeah!')
  //   }
  // }, 100);
  console.log('connected');
}
