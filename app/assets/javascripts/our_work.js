$(document).ready(function() {
  $('.poster').click(function() {
    let src = $(this).attr('value') + '.mp4';
    $('.video-player').css('max-height','1000px');

    $.ajax({
      type:    "GET",
      url:     "/our-work",
      data:    src,
      success: function(post){ console.log('success') },
      error:   function(post){ console.log('error') }
    })
  });
});
