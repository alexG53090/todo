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
      var taskItem = item.task;
      var taskPoints = item.points;
      var taskComplete = item.complete;
      var taskCompleteButton = document.createElement('button');
      var taskDeleteButton = document.createElement('button');
      var deleteButtonText = document.createTextNode("Delete task");
      var taskItemContainer = document.createElement("ul");
      var taskName = document.createTextNode('task: ' + item.task + " ");
      var taskNameContainer = document.createElement('li');
      taskNameContainer.appendChild(taskName);
      var taskPoints = document.createTextNode('points: ' + item.points + " ");
      var taskPointsContainer = document.createElement('li');
      taskPointsContainer.appendChild(taskPoints);
      var taskComplete = document.createTextNode('complete: ' + item.complete + " ");
      taskDeleteButton.className = 'delete-task';
      taskItemContainer.className = 'task-container';
      taskNameContainer.className = 'task-title';
      taskDeleteButton.appendChild(deleteButtonText);
      taskItemContainer.appendChild(taskNameContainer);
      taskItemContainer.appendChild(taskPointsContainer);
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
  return new Promise(function(resolve, reject){
    $('.task-title').on('click', function(){
       $(this).toggleClass('selected');
    })
    resolve(tasks)
  })
}

function updater(tasks){
  return new Promise(function(resolve, reject){
    $('.delete-task').on('click', function(){
      if($( ".task-title" ).hasClass( "selected" )){

        var taskParamName = $('task-title');

          console.log(taskParamName);

        // for(i = 0; i < taskParamName; i = i +1){
        // }

        // window.location.href = 'http://localhost:1337/deletethis';
        // $.get('/deletethis', function(data){
        //   console.log(data)
        // })
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
