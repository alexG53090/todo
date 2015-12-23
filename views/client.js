$(document).ready(function(){
  function getTaskData(){
      return new Promise(function(resolve, reject){
          $.ajax({
              method: "GET",
              url: "https://localhost/1337",
              success: resolve,
              error: reject
          });
      });
  } getTaskData();
})
