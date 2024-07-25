
$(document).ready(function () {
  $(".bar").on("click", function () {
    $("#cross").show();
    $(".bar").hide();
    $("#menu").slideDown();
  });

  $("#cross").on("click", function () {
    $("#menu").slideUp();
    $(".bar").show();
    $("#cross").hide();
  });
});
