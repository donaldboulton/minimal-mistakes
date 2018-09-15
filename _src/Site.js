document.addEventListener('DOMContentLoaded', () => {
    const stickySideBar = function() {
      let show =
        $('.author__urls-wrapper button').length === 0
          ? $(window).width() > 1024 // width should match $large Sass variable
          : !$('.author__urls-wrapper button').is(':visible');
      if (show) {
        // fix
        $('.sidebar').addClass('sticky');
      } else {
        // unfix
        $('.sidebar').removeClass('sticky');
      }
    };
  
    stickySideBar();
  
    $(window).resize(function() {
      stickySideBar();
    });
    $('#main').fitVids();

    // Follow menu drop down
    $('.author__urls-wrapper button').on('click', function() {
      $('.author__urls').toggleClass('is--visible');
      $('.author__urls-wrapper button').toggleClass('open');
    });
  
    // Search toggle
    $('.search__toggle').on('click', function() {
      $('.search-content').toggleClass('is--visible');
      $('.initial-content').toggleClass('is--hidden');
      // set focus on input
      setTimeout(function() {
        $('.search-content input').focus();
      }, 400);
    });
  
    // init smooth scroll
    $('a').smoothScroll({ offset: -20 })
}
