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
      $('.delete-tasker').toggleClass('indicate')
      $('.create-task').toggleClass('indicate')
      if($( ".task-title" ).hasClass( "selected" )){
        var taskTitle = (this).innerHTML;
        console.log(taskTitle);
        $('.delete-tasker').on('click', function(){
          console.log('you suck! ' + taskTitle);
          window.location.href = 'http://localhost:1337/' + taskTitle;
        })
      }
    })
    resolve(tasks)
  })
};

function pushUpdates(tasks){
    $('.task-complete').on('click', function(){
      $(this).toggleClass('indicate');
      if($('.task-complete').hasClass('indicate')){
        var completed = (this).innerHTML;
        $('.create-task').on('click', function(){
          window.location.href = "http://localhost:1337/" + completed + '/whatever';
          console.log(completed)
        })
      }
    })
  console.log('connected');
}

function printTasks(tasks){
  return new Promise(function(resolve, reject){
    tasks.forEach(function(item, index, array){
      // task item container
      var taskItemContainer = document.createElement("div");
      taskItemContainer.className = 'task-container'
      var taskList = document.createElement('div');
      taskList.className = 'task-lister'
      // task name
      var taskItem = item.task;
      var taskName = document.createTextNode(item.task);
      var taskNameContainer = document.createElement('p');
      taskNameContainer.appendChild(taskName);
      taskNameContainer.setAttribute('id', 'task-id');
      taskNameContainer.className = 'task-title';
      // task points
      var taskPoints = item.points;
      var taskPoints = document.createTextNode(item.points);
      var taskPointsContainer = document.createElement('p');
      taskPointsContainer.appendChild(taskPoints);
      taskPointsContainer.className = 'task-points';
      // task status
      var taskComplete = item.complete;
      var taskComplete = document.createTextNode(item.complete);
      var taskCompleteContainer = document.createElement('p');
      taskCompleteContainer.appendChild(taskComplete);
      taskCompleteContainer.className ='task-complete';
      // var taskCompleteButton = document.createElement('button');
      //Create button
      var taskCreateButton = document.createElement('button');
      var createButtonText = document.createTextNode("Update");
      taskCreateButton.appendChild(createButtonText);
      var createButtonList = document.createElement('p');
      createButtonList.appendChild(taskCreateButton);
      taskCreateButton.className = 'create-task';
      // Delete Button
      var taskDeleteButton = document.createElement('button');
      var deleteButtonText = document.createTextNode("Delete");
      taskDeleteButton.appendChild(deleteButtonText);
      var deleteButtonList = document.createElement('p');
      deleteButtonList.appendChild(taskDeleteButton);
      taskDeleteButton.className = 'delete-tasker';
      // Append All
      taskList.appendChild(taskNameContainer);
      taskList.appendChild(taskPointsContainer);
      taskList.appendChild(taskCompleteContainer);
      // taskList.appendChild(taskCompleteButton);
      taskList.appendChild(createButtonList);
      taskList.appendChild(deleteButtonList);
      taskItemContainer.appendChild(taskList);
      // Append All
      var taskListItem = document.createElement("p");
      taskListItem.appendChild(taskItemContainer);
      $(".task-list").append(taskItemContainer);
    })
    resolve(tasks);
  });
};
