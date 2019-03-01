$(document).ready(function() {
  $('.hamburger').click(function(e) {
    e.preventDefault();
    $(this).toggleClass('is-active');
    $('.menu').toggleClass('open');
    $('.black-logo, .white-logo').toggleClass('hide');
    changeHeader(false);
    $('body').toggleClass('fixed');
  });

  function changeHeader(bool) {
    if (bool) {
      $('header').css('background-color','black');
      $('.logo').css('max-width', '150px');
    } else {
      $('header').css('background-color','transparent');
      $('.logo').css('max-width', '275px');
    }
  }

  $(window).scroll(function() {
    changeHeader($(this).scrollTop() > 675);
  });

});
