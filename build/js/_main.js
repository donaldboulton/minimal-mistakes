/* ==========================================================================
   jQuery plugin settings and other scripts
   ========================================================================== */

$(document).ready(function() {
  var bumpIt = function() {
      $("body").css("margin-bottom", $(".page__footer").outerHeight(true));
    },
    didResize = false;

  bumpIt();

  $(window).resize(function() {
    didResize = true;
  });
  setInterval(function() {
    if (didResize) {
      didResize = false;
      bumpIt();
    }
  }, 250);

  var stickySideBar = function() {
    var show =
      $(".author__urls-wrapper button").length === 0
        ? $(window).width() > 1024
        : !$(".author__urls-wrapper button").is(":visible");
    if (show) {

      $(".sidebar").addClass("sticky");
    } else {

      $(".sidebar").removeClass("sticky");
    }
  };

  stickySideBar();

  $(window).resize(function() {
    stickySideBar();
  });

  $(".author__urls-wrapper button").on("click", function() {
    $(".author__urls").toggleClass("is--visible");
    $(".author__urls-wrapper button").toggleClass("open");
  });

  $(".search__toggle").on("click", function() {
    $(".search-content").toggleClass("is--visible");
    $(".initial-content").toggleClass("is--hidden");
    setTimeout(function() {
      $(".search-content input").focus();
    }, 400);
  });
});
$(window).bind("hashchange", function(event) {
  $.smoothScroll({
    // Replace '#/' with '#' to go to the correct target
    scrollTarget: location.hash.replace(/^\#\/?/, "#"),
    offset: -20
  });
});
$('a[href*="#"]').bind("click", function(event) {
  // Remove '#' from the hash.
  var hash = this.hash.replace(/^#/, "");
  if (this.pathname === location.pathname && hash) {
    event.preventDefault();
    // Change '#' (removed above) to '#/' so it doesn't jump without the smooth scrolling
    location.hash = "#/" + hash;
  }
});
// Trigger hashchange event on page load if there is a hash in the URL.
if (location.hash) {
  $(window).trigger("hashchange");
}
$('.gallery').each( function() {
  var $pic     = $(this),
      getItems = function() {
          var items = [];
          $pic.find('a').each(function() {
              var $href   = $(this).attr('href'),
                  $size   = $(this).data('size').split('x'),
                  $width  = $size[0],
                  $height = $size[1];

              var item = {
                  src : $href,
                  w   : $width,
                  h   : $height
              };

              items.push(item);
          });
          return items;
      };

  var items = getItems();
});
