$(document).ready(function () {

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top-wrapper').fadeIn();
    } else {
      $('.back-to-top-wrapper').fadeOut();
    }
  });

  $('.back-to-top-wrapper').click(function () {
    $("html, body").animate({
      scrollTop: 0
    }, 600);
    return false;
  });

});