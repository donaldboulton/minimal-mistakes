document.addEventListener('DOMContentLoaded', function() {
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
  function external_new_window() {
    for(var c = document.getElementsByTagName("a"), a = 0;a < c.length;a++) {
    var b = c[a];
    b.getAttribute("href") && b.hostname !== location.hostname && (b.target = "_blank")
    }
  }
  external_new_window();
  function addEvent(node,type,callback){if(node.addEventListener){node.addEventListener(type,function(e){callback(e,e.target)},!1)}else if(node.attachEvent){node.attachEvent("on"+type,function(e){callback(e,e.srcElement)})}}
  function shouldBeValidated(field){return(!(field.getAttribute("readonly")||field.readonly)&&!(field.getAttribute("disabled")||field.disabled)&&(field.getAttribute("pattern")||field.getAttribute("required")))}
  function instantValidation(field){if(shouldBeValidated(field)){var invalid=(field.getAttribute("required")&&!field.value)||(field.getAttribute("pattern")&&field.value&&!new RegExp(field.getAttribute("pattern")).test(field.value));if(!invalid&&field.getAttribute("aria-invalid")){field.removeAttribute("aria-invalid")}else if(invalid&&!field.getAttribute("aria-invalid")){field.setAttribute("aria-invalid","true")}}}
  var fields=[document.getElementsByTagName("input"),document.getElementsByTagName("textarea")];for(var a=fields.length,i=0;i<a;i++){for(var b=fields[i].length,j=0;j<b;j++){addEvent(fields[i][j],"change",function(e,target){instantValidation(target)})}}
  function checkForm(form)
    {if(!form.conditions.checked){alert("Please indicate that you accept the Terms and Conditions");form.conditions.focus();return!1}
    return!0}
    $(".author__urls_masthead button").on("click", function() {
    $(".author__urls_masthead").toggleClass("is--visible");
    $(".author__urls_masthead button").toggleClass("open");
  });

  var $btn = $("nav.greedy-nav .greedy-nav__toggle");
  var $vlinks = $("nav.greedy-nav .visible-links");
  var $hlinks = $("nav.greedy-nav .hidden-links");

  var numOfItems = 0;
  var totalSpace = 0;
  var closingTime = 1000;
  var breakWidths = [];

  // Get initial state
  $vlinks.children().outerWidth(function(i, w) {
    totalSpace += w;
    numOfItems += 1;
    breakWidths.push(totalSpace);
  });

  var availableSpace, numOfVisibleItems, requiredSpace, timer;

  function check() {
    // Get instant state
    availableSpace = $vlinks.width() - $btn.width();
    numOfVisibleItems = $vlinks.children().length;
    requiredSpace = breakWidths[numOfVisibleItems - 1];

    // There is not enough space
    if (requiredSpace > availableSpace) {
      $vlinks
        .children()
        .last()
        .prependTo($hlinks);
      numOfVisibleItems -= 1;
      check();
      // There is more than enough space
    } else if (availableSpace > breakWidths[numOfVisibleItems]) {
      $hlinks
        .children()
        .first()
        .appendTo($vlinks);
      numOfVisibleItems += 1;
      check();
    }
    // Update the button accordingly
    $btn.attr("count", numOfItems - numOfVisibleItems);
    if (numOfVisibleItems === numOfItems) {
      $btn.addClass("hidden");
    } else {
      $btn.removeClass("hidden");
    }
  }

  // Window listeners
  $(window).resize(function() {
    check();
  });

  $btn.on("click", function() {
    $hlinks.toggleClass("hidden");
    $(this).toggleClass("close");
    clearTimeout(timer);
  });

  $hlinks
    .on("mouseleave", function() {
      // Mouse has left, start the timer
      timer = setTimeout(function() {
        $hlinks.addClass("hidden");
        $btn.toggleClass("close");
      }, closingTime);
    })
    .on("mouseenter", function() {
      // Mouse is back, cancel the timer
      clearTimeout(timer);
    });

  check();
});
(function() {
  if (window.__twitterIntentHandler) return;
  var intentRegex = /twitter\.com\/intent\/(\w+)/,
      windowOptions = 'scrollbars=yes,resizable=yes,toolbar=no,location=yes',
      width = 550,
      height = 420,
      winHeight = screen.height,
      winWidth = screen.width;

  function handleIntent(e) {
    e = e || window.event;
    var target = e.target || e.srcElement,
        m, left, top;

    while (target && target.nodeName.toLowerCase() !== 'a') {
      target = target.parentNode;
    }

    if (target && target.nodeName.toLowerCase() === 'a' && target.href) {
      m = target.href.match(intentRegex);
      if (m) {
        left = Math.round((winWidth / 2) - (width / 2));
        top = 0;

        if (winHeight > height) {
          top = Math.round((winHeight / 2) - (height / 2));
        }

        window.open(target.href, 'intent', windowOptions + ',width=' + width +
                                           ',height=' + height + ',left=' + left + ',top=' + top);
        e.returnValue = false;
        e.preventDefault && e.preventDefault();
      }
    }
  }

  if (document.addEventListener) {
    document.addEventListener('click', handleIntent, false);
  } else if (document.attachEvent) {
    document.attachEvent('onclick', handleIntent);
  }
  window.__twitterIntentHandler = true;
}());
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/service-worker.js');
  });

  navigator.serviceWorker.ready.then(function (registration) {
    console.log('Service worker successfully registered on scope', registration.scope);
  });
}
$(document).ready(function(){$("a").smoothScroll({offset:-20})});var coll=document.getElementsByClassName("collapsible");var i;for(i=0;i<coll.length;i++){coll[i].addEventListener("click",function(){this.classList.toggle("active");var content=this.nextElementSibling;if(content.style.maxHeight){content.style.maxHeight=null}else{content.style.maxHeight=content.scrollHeight+"px"}})}
