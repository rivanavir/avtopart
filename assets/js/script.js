$(document).ready(function(){

  $("nav.navbar .navbar-toggler").click(function(event) {
    $(this).parents('header.header').toggleClass('collapsed');
    $('body').toggleClass('backdroped');
  });
  
});