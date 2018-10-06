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
  smoothScroll();
  svg4everybody();
});
