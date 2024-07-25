
$(document).ready(function () {
  $(".bar").on("click", function () {
    $("#cross").show();
    $(".bar").hide();
    $(".menu").slideDown();
  });

  $("#cross").on("click", function () {
    $(".menu").slideUp();
    $(".bar").show();
    $("#cross").hide();
  });
});

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}