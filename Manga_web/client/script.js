$(document).ready(function() {
    $.ajax(`http://localhost:3001/api/chap`, {
      type: "GET",
      success: function(data) {
        console.log(data);
        // $("#add").append(`
        //     <h3 id="imgs">Nanatsu no taizai</h3>
        // `)
        // for(i=0;i<data.data.length;i++){
        //     let a= data.data[i].link;

        //     $("#add").append(`
        //         <img src=${a} id="imgs">
        //     `)
        //     console.log(data.data[i]);
        // }

        // $("#send").click(function(event){
        //   var name = document.getElementById("input_name").value;
        //   var comment = document.getElementById("input_cm").value;
        //   console.log(name);
        //   console.log(comment);
        // })
        
      },
      error: function(err) {
        console.log(err);
      }
    })
  })