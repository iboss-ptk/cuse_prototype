$(window).scroll(function(){

  var scroll = $(window).scrollTop();
  var scroll_bound = 500;

  if (scroll > scroll_bound ) {
    $('nav').addClass('scrolled');
  }

  if (scroll <= scroll_bound ) {
    $('nav').removeClass('scrolled');
 }

});