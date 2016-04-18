function scrollNav() {
  $('.nav a').click(function(){  
    //Animate
    $('html, body').stop().animate({
        scrollTop: $( $(this).attr('href') ).offset().top - 50
    }, 400);
    return false;
  });
  $('.scrollTop a').scrollTop();
}
scrollNav();