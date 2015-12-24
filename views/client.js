$(document).ready(function(){
  getTaskData().then(function(data){
    formatTaskData(data);
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
      console.log('this is your data ', data)
      for(var i = 0; i < data.tasks.length; i = i + 1){
        var task = data.tasks[i];
        console.log(task);
      }
    });
  };

////////////////
//
// function getNewTaskData(form){
//     var formValues = form.serializeArray();
//     return formValues.reduce(function(formattedTask, task){
//         formattedTask[task.name] = task.value;
//         return formattedTask;
//     }, {});
// }
