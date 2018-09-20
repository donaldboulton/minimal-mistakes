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
(function(){function a(i){i=i||window.event;for(var k,l,n,j=i.target||i.srcElement;j&&'a'!==j.nodeName.toLowerCase();)j=j.parentNode;j&&'a'===j.nodeName.toLowerCase()&&j.href&&(k=j.href.match(b),k&&(l=Math.round(h/2-d/2),n=0,g>f&&(n=Math.round(g/2-f/2)),window.open(j.href,'intent',c+',width='+d+',height='+f+',left='+l+',top='+n),i.returnValue=!1,i.preventDefault&&i.preventDefault()))}if(!window.__twitterIntentHandler){var b=/twitter\.com\/intent\/(\w+)/,c='scrollbars=yes,resizable=yes,toolbar=no,location=yes',d=550,f=420,g=screen.height,h=screen.width;document.addEventListener?document.addEventListener('click',a,!1):document.attachEvent&&document.attachEvent('onclick',a),window.__twitterIntentHandler=!0}})();


  