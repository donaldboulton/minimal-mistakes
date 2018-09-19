import { config } from "./firebaseConfig";
import firebase from "firebase";

firebase.initializeApp(config);

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
  