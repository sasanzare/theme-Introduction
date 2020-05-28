window.onload = function() {
   setTimeout (function () {
    scrollTo(0,0);
  }, 0);
}
$( document ).ready(function() {
  $(function() {
      $(window).scroll(function() {
          if ($(window).scrollTop() != 0) {
              $("#header").removeClass("header-none").addClass("header");
          } else {
            $("#header").addClass("header-none");
          }
      });
  });
});
