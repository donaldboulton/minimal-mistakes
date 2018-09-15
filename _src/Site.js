/* ==========================================================================
   jQuery plugin settings and other scripts
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
    let stickySideBar = function() {
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
    $('a').smoothScroll({ offset: -20 });
  });

svg4everybody(); $('a').smoothScroll({ offset: -20 }); }); let coll = document.getElementsByClassName('collapsible'); var i; for (i = 0; i < coll.length; i++) { coll[i].addEventListener('click', function () { this.classList.toggle('active'); let content = this.nextElementSibling; if (content.style.maxHeight) { content.style.maxHeight = null; } else{ content.style.maxHeight = `${content.scrollHeight}px`; } }); }
function external_new_window() {
  for (let c = document.getElementsByTagName('a'), a = 0; a < c.length; a++) {
    let b = c[a];
    b.getAttribute('href') && b.hostname !== location.hostname && (b.target = '_blank');
  }
}
external_new_window();
grecaptcha.ready(() => {
  grecaptcha.execute('6Le-JGIUAAAAAItP3anxYzixThXd6EUvsDjXZevh', { action: 'home' }).then((token) => {
    });
});
function addEvent(node, type, callback) { if (node.addEventListener) { node.addEventListener(type, (e) => { callback(e, e.target); }, !1) ;} else if (node.attachEvent) { node.attachEvent('on' + type, (e) => { callback(e, e.srcElement) ;}); } }
function shouldBeValidated(field) { return (!(field.getAttribute('readonly') || field.readonly) && !(field.getAttribute('disabled') || field.disabled) && (field.getAttribute('pattern') || field.getAttribute('required'))) ;}
function instantValidation(field) { if (shouldBeValidated(field)) { let invalid = (field.getAttribute('required') && !field.value) || (field.getAttribute('pattern') && field.value && !new RegExp(field.getAttribute('pattern')).test(field.value)); if (!invalid && field.getAttribute('aria-invalid')) { field.removeAttribute('aria-invalid'); } else if (invalid && !field.getAttribute('aria-invalid')) { field.setAttribute('aria-invalid', 'true') ;} } }
let fields = [document.getElementsByTagName('input'), document.getElementsByTagName('textarea')]; for (var a = fields.length, i = 0; i < a; i++) { for (let b = fields[i].length, j = 0; j < b; j++) { addEvent(fields[i][j], 'change', (e, target) => { instantValidation(target) ;}); } }
function checkForm(form) { if (!form.conditions.checked) { alert('Please indicate that you accept the Terms and Conditions'); form.conditions.focus(); return !1; }
  return !0; 
}
$('.author__urls_masthead button').on('click', () => {
  $('.author__urls_masthead').toggleClass('is--visible');
  $('.author__urls_masthead button').toggleClass('open');
});
function readURL(input) {
  if (input.files && input.files[0]) {
    let reader = new FileReader();
    reader.onload = function (e) {
      $('#blah')
        .attr('src', e.target.result);
    };

    reader.readAsDataURL(input.files[0]);
  }
}
