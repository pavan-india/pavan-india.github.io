$(document).ready(function(){
   var scroll_start = 0;
   var startchange = $('#graphic2');
   var offset = startchange.offset();
    if (startchange.length){
      $(document).scroll(function() {
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $(".navbar").css('background-color', 'rgba(0,0,0,0.9)');
          $("ul.nav").css('background-color', 'transparent');
          $("#pavan-brand").css('background-color', 'transparent');
       } else {
          $('.navbar').css('background-color', 'transparent');
          $("ul.nav").css('background-color', 'rgba(0,0,0,0.9)');
          $("#pavan-brand").css('background-color', 'transparent');
       }
   });
    }
});
