$(document).ready(function() {
  $('.poster').click(function() {
    var src = $(this).attr('value') + '.mp4';
    console.log(src);
    $('.video-player').css('max-height','1000px');
    console.log(src)

    setTimeout(function(){
        $('html,body').animate({scrollTop: $('body').offset().top}, 'slow');
    }, 250); //Adjust to match slideSpeed

    $.ajax({
      type:    "GET",
      url:     "/our-work",
      data:    { src: src },
      success: function(post){ console.log('success') },
      error:   function(post){ console.log('error') }
    })
  });
});
