$(document).ready(function() {

  $("#change-red").on("click",function() {
      $(".red").css("background-color","red");

  });

  $("#change-green").on("click",function() {
      $(".green").css("background-color","green");

  });

  $("#change-blue").on("click",function() {
      $(".blue").css("background-color","blue");

  });

  $("#make-big").on("click",function() {
    $(".bigger").toggleClass("big-boy");

  });

  $("#make-small").on("click",function() {
    $(".smaller").toggleClass("small-boy");
  });

  $("#animate-div").on("click",function(){
    $(".animate").css("transform","rotate(7deg)");

  });

});
