$(document).ready(function() {
  $('.hamburger').click(function(e) {
    e.preventDefault();
    $(this).toggleClass('is-active');
    $('.menu').toggleClass('open');
    $('.black-logo, .white-logo').toggleClass('hide');
    changeHeader(false);
    $('body').toggleClass('menu-open');
    if (window.location.pathname !== '/') {
      if (!$('.menu').hasClass('open')) {
        changeHeader(true);
      }
    }
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

  if (window.location.pathname === '/') {
    $(window).scroll(function() {
      changeHeader($(this).scrollTop() > 75);
    });
  } else {
    changeHeader(true);
  }

  console.log(window.location.pathname)
});
