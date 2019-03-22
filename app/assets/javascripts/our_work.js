$(document).ready(function() {
  $('.poster').click(function() {
    let src = $(this).attr('value') + '.mp4';
    $('.video-player').css('max-height','1000px');
    console.log(src)
    $('.video').attr('src', src)
  });
});
