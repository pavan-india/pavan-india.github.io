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

var twitter = document.getElementById("twitter");

twitter.addEventListener("click", function() {
    var style = window.getComputedStyle(twitterinfo).getPropertyValue('display');
    if(style == 'none'){
        console.log(style);
        $("#twitterinfo").css('display','inline-block');
        $("#twitterinfo").css('padding','3px');
    }else{
        $("#twitterinfo").css('display','none');
    }
});

var action_change_bg = setInterval(changeBG, 3000);
var bgcount = 0;
var newURL = "url('../media/homepage/New_Delhi_0.jpg')";

function changeBG() {
    for (var i=0; i<6; i++){
        console.log(bgcount);
        if (bgcount == i){
            newURL = "url('static/media/homepage/New_Delhi_"+i+".jpg')";
            $("#graphic1").css('background-image', newURL);
            $("#graphic1").css('transition', 'background-image 2s ease-out');
        }
        if (bgcount == 6){
            bgcount = 0;
        }
    }
    bgcount += 1;
}
