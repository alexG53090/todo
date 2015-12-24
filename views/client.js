$(document).ready(function(){
  function getTaskData(){
    $.get( "/get", function( data ) {
      return new Promise(function(resolve, reject){
        console.log(data);
      })
    });
  } getTaskData().then(function(data){
    formatTaskData();
  });
})

function formatTaskData(data){
  console.log(data)
}

//
// function getNewTaskData(form){
//     var formValues = form.serializeArray();
//     return formValues.reduce(function(formattedTask, task){
//         formattedTask[task.name] = task.value;
//         return formattedTask;
//     }, {});
// }
