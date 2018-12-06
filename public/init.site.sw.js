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
    $(".author__urls_masthead button").on("click", function() {
    $(".author__urls_masthead").toggleClass("is--visible");
    $(".author__urls_masthead button").toggleClass("open");
  });
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
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
(function() {

  const headings = document.querySelectorAll('#mmain h3');
  
  Array.prototype.forEach.call(headings, heading => {
    heading.innerHTML = `
      <button aria-expanded="false">
        ${heading.textContent}
        <svg aria-hidden="true" focusable="false" viewBox="0 0 10 10">
          <rect class="vert" height="8" width="2" y="1" x="4"/>
          <rect height="2" width="8" y="4" x="1"/>
        </svg>
      </button>
    `;
    const getContent = (elem) => {
      let elems = [];
      while (elem.nextElementSibling && elem.nextElementSibling.tagName !== 'H3') {
        elems.push(elem.nextElementSibling);
        elem = elem.nextElementSibling;
      }
      
      elems.forEach((node) => {
        node.parentNode.removeChild(node);
      });

      return elems;
    };
    
    let contents = getContent(heading);
    
    let wrapper = document.createElement('div');
    wrapper.hidden = true;
    
    contents.forEach(node => {
      wrapper.appendChild(node);
    });
    
    heading.parentNode.insertBefore(wrapper, heading.nextElementSibling);
    
    let btn = heading.querySelector('button');
    
    btn.onclick = () => {
      let expanded = btn.getAttribute('aria-expanded') === 'true' || false;
      
      btn.setAttribute('aria-expanded', !expanded);
      wrapper.hidden = expanded;
    }
  });
})();
var dialog = document.getElementById('my-accessible-dialog');

var btn = document.getElementById("myBtn");
btn.onclick = function() {
    dialog.style.display = "block";
};

btn.onclick = function() {
    dialog.style.display = "none";
};

