$(document).ready(function() {
  $(".clickable").click(function() {
    $("#hippo-showing").slideToggle();
    $("#hippo-hidden").slideToggle();
  });
  $(".clickable1").click(function(){
    $("#otter-showing").fadeToggle(); 
    $("#otter-hidden").fadeToggle(); 
  })
});