$(document).ready(function() {
  $('.hamburger').click(function(e) {
    e.preventDefault();
    $(this).toggleClass('is-active');
    $('.menu').toggleClass('open');
    $('.black-logo, .white-logo').toggleClass('hide');
    console.log('click');
  });
});
