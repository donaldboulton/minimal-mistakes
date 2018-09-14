/* ==========================================================================
   jQuery plugin settings and other scripts
   ========================================================================== */

function () {
  let bumpIt = function () {
      $("body").css("margin-bottom", $(".page__footer").outerHeight(true));
    },
    didResize = false;
  
  bumpIt();
  
  $(window).resize(function () {
    didResize = true;
  });
  setInterval(function () {
    if (didResize) {
      didResize = false;
      bumpIt();
    }
  }, 250);
  
  let stickySideBar = function () {
    let show =
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
  
  $(window).resize(function () {
    stickySideBar();
  });
  
  $(".author__urls-wrapper button").on("click", function () {
    $(".author__urls").toggleClass("is--visible");
    $(".author__urls-wrapper button").toggleClass("open");
  });
  
  $(".search__toggle").on("click", function () {
    $(".search-content").toggleClass("is--visible");
    $(".initial-content").toggleClass("is--hidden");
    setTimeout(function () {
      $(".search-content input").focus();
    }, 400);
  });
}
$('.gallery').each( function () {
  let $pic     = $(this),
    getItems = function () {
      let items = [];
      $pic.find('a').each(function () {
        let $href   = $(this).attr('href'),
          $size   = $(this).data('size').split('x'),
          $width  = $size[0],
          $height = $size[1];
  
        let item = {
          src : $href,
          w   : $width,
          h   : $height
        };
  
        items.push(item);
      });
      return items;
    };
  
  let items = getItems();
});

$(document).ready(function(){svg4everybody();$("a").smoothScroll({offset:-20})});var coll=document.getElementsByClassName("collapsible");var i;for(i=0;i<coll.length;i++){coll[i].addEventListener("click",function(){this.classList.toggle("active");var content=this.nextElementSibling;if(content.style.maxHeight){content.style.maxHeight=null}else{content.style.maxHeight=content.scrollHeight+"px"}})}
  function external_new_window() {
    for(var c = document.getElementsByTagName("a"), a = 0;a < c.length;a++) {
    var b = c[a];
    b.getAttribute("href") && b.hostname !== location.hostname && (b.target = "_blank")
    }
  }
  external_new_window();
  grecaptcha.ready(function() {
      grecaptcha.execute('6Le-JGIUAAAAAItP3anxYzixThXd6EUvsDjXZevh', {action: 'home'}).then(function(token) {
    });
});
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
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#blah')
                .attr('src', e.target.result);
            };

        reader.readAsDataURL(input.files[0]);
    }
}
