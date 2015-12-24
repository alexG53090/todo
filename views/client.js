// $(document).ready(function(){
//   function getTaskData(){
//       return new Promise(function(resolve, reject){
//           $.ajax({
//               method: "GET",
//               url: "https://localhost/1337/get",
//               success: resolve,
//               error: reject
//           });
//       });
//   } getTaskData());
//   console.log('sanity check!')
// })

//
// function getNewTaskData(form){
//     var formValues = form.serializeArray();
//     return formValues.reduce(function(formattedTask, task){
//         formattedTask[task.name] = task.value;
//         return formattedTask;
//     }, {});
// }
