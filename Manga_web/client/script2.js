// $(document).ready(function() {
//     $.ajax(`http://localhost:3000/api/chap`, {
//       type: "GET",
//       success: function(data) {
//         for(let i=0;i<data.data.length;i++){
//           $(".chap").append(`
//             <h5 class="load_content" onclick="taiChapI(${i})">${data.data[i].name}</h5>
//           `)
//         }
//       },
//       error: function(err) {
//         console.log(err);
//       }
//     });
//   })
  // function taiChapI(chapIndex){
  //   $.ajax(`http://localhost:3000/api/chap`, {
  //     type: "GET",
  //     success: function(data) {
  //       //console.log(data.data[chapIndex].imageLinksId[0].link)
  //       $(".chap").text("");
  //       for(let i=0;i<data.data[chapIndex].imageLinksId.length;i++){
  //         $(".chap").append(`
  //         <img src=${data.data[chapIndex].imageLinksId[i].link} id="imgg">
  //       `)
  //   }
  //     },
  //     error: function(err) {
  //       console.log(err);
  //     }
  //   });
    
  // }
$(document).ready(function() {
  $.ajax(`http://localhost:3001/api/book`, {
    type: "GET",
    success: function(data) {
      let a=data.data[0].avartaLink;
      console.log(a);
      for(i=0; i<data.data.length;i++){

          $(".chap").append(`
            <div class="avatarFirst">
              <div class="avatarDiv">
                <img src="${data.data[i].avartaLink}" class="avatar">
              </div>
              <div class="titleDiv">
                <h5 class="load_content" onclick="taiMangaI('${a}')">${data.data[i].title}</h5>
              </div>
              
              
            </div>
            
          `)
      }
      // console.log(data.data[0].title);
    },
    error: function(err) {
      console.log(err);
    }
  });
})
function taiMangaI(a){
  $.ajax(`http://localhost:3001/api/chap`, {
    type: "GET",
    success: function(data) {
      $(".chap").text("");
      $(".chap2").append(`
        <img src="${a}" class="avatar-click">
      `)
      // $(".col-9").append(`
      //   <img src="${a}" class="avatar-click">
      // `)
      for(let i= 0; i<data.data.length;i++){
        //if(data.data[i].name == title){
          $(".chap2").append(`
            <h5 class="load_content" onclick="taiChapI(${i})">${data.data[i].name}</h5>
          `)
        //}
      }
      
    },
    error: function(err) {
      console.log(err);
    }
  });
  
}
  function taiChapI(chapIndex){
    $.ajax(`http://localhost:3001/api/chap`, {
      type: "GET",
      success: function(data) {
        //console.log(data.data[chapIndex].imageLinksId[0].link)
        $(".chap").text("");
        for(let i=0;i<data.data[chapIndex].imageLinksId.length;i++){
          $(".chap").append(`
          <img src=${data.data[chapIndex].imageLinksId[i].link} id="imgg">
        `)
    }
      },
      error: function(err) {
        console.log(err);
      }
    });
    
  }
