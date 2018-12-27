function is_youtubelink(url) {
    var p = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
    return (url.match(p)) ? RegExp.$1 : false;
  }
  function is_imagelink(url) {
      var p = /([a-z\-_0-9\/\:\.]*\.(jpg|jpeg|png|gif))/i;
      return (url.match(p)) ? true : false;
  }
  function is_vimeolink(url,el) {
      var id = false;
      $.ajax({
        url: 'https://vimeo.com/api/oembed.json?url='+url,
        async: true,
        success: function(response) {
          if(response.video_id) {
            id = response.video_id;
            $(el).addClass('lightbox-vimeo').attr('data-id',id);
          }
        }
      });
  }
  
  $(document).ready(function() {
      //add classes to links to be able to initiate lightboxes
      $("a").each(function(){
          var url = $(this).attr('href');
          if(url) {
              if(url.indexOf('vimeo') !== -1 && !$(this).hasClass('no-lightbox')) is_vimeolink(url,$(this));
              if(is_youtubelink(url) && !$(this).hasClass('no-lightbox')) $(this).addClass('lightbox-youtube').attr('data-id',is_youtubelink(url));
              if(is_imagelink(url) && !$(this).hasClass('no-lightbox')) {
                  $(this).addClass('lightbox-image');
                  var href = $(this).attr('href');
                  var filename = href.split('/').pop();
                  var split = filename.split(".");
                  var name = split[0];
                  $(this).attr('title',name);
              }
          }
      });
      //remove the clicked lightbox
      $("body").on("click", ".lightbox", function(event){
          if($(this).hasClass('gallery')) {
              $(this).remove();
              if($(event.target).attr('id')=='next') {
                  //next item
                  if($("a.gallery.current").nextAll("a.gallery:first").length) $("a.gallery.current").nextAll("a.gallery:first").click();
                  else $("a.gallery.current").parent().find("a.gallery").first().click();
              }
              else if ($(event.target).attr('id')=='prev') {
                  //prev item
                  if($("a.gallery.current").prevAll("a.gallery:first").length) $("a.gallery.current").prevAll("a.gallery:first").click();
                  else $("a.gallery.current").parent().find("a.gallery").last().click();
              }
              else {
                  $("a.gallery").removeClass('gallery');
              }
          }
          else $(this).remove();
      });
      //prevent image from being draggable (for swipe)
      $("body").on('dragstart', ".lightbox img", function(event) { event.preventDefault(); });
      //add the youtube lightbox on click
      $("a.lightbox-youtube").click(function(event){
          event.preventDefault();
          $('<div class="lightbox"><a id="close"></a><a id="next">&rsaquo;</a><a id="prev">&lsaquo;</a><div class="videoWrapperContainer"><div class="videoWrapper"><iframe src="https://www.youtube.com/embed/'+$(this).attr('data-id')+'?autoplay=1&showinfo=0&rel=0"></iframe></div></div></div>').appendTo('body');
      });
      //add the image lightbox on click
      $("a.lightbox-image").click(function(event){
          event.preventDefault();
          $('<div class="lightbox"><a id="close"></a><a id="next">&rsaquo;</a><a id="prev">&lsaquo;</a><img src="'+$(this).attr('href')+'" alt="'+$(this).attr('title')+'" title="'+$(this).attr('title')+'" /><span>'+$(this).attr('title')+'</span></div>').appendTo('body');
      });
      //add the vimeo lightbox on click
      $("body").on("click", "a.lightbox-vimeo", function(event){
          event.preventDefault();
          $('<div class="lightbox"><a id="close"></a><a id="next">&rsaquo;</a><a id="prev">&lsaquo;</a><div class="videoWrapperContainer"><div class="videoWrapper"><iframe src="https://player.vimeo.com/video/'+$(this).attr('data-id')+'/?autoplay=1&byline=0&title=0&portrait=0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div></div></div>').appendTo('body');
      });
  
      $("body").on("click", "a[class*='lightbox-']", function(){
          var link_elements = $(this).parent().find("a[class*='lightbox-']");
          $(link_elements).removeClass('current');
          for (var i=0; i<link_elements.length; i++) {
              if($(this).attr('href') == $(link_elements[i]).attr('href')) {
                  $(link_elements[i]).addClass('current');
              }
          }
          if(link_elements.length>1) {
              $('.lightbox').addClass('gallery');
              $(link_elements).addClass('gallery');
          }
      });
  
      
  });
  
  $(document).keydown(function(e) {
      switch(e.which) {
          case 37: // left
          $("#prev").click();
          break;
          case 39: // right
          $("#next").click();
          break;
      case 27: // esc
          $("#close").click();
          break;
          default: return; // exit this handler for other keys
      }
      e.preventDefault(); // prevent the default action (scroll / move caret)
  });
  
    /*===========================
    Swipe-it v1.4.1
    An event listener for swiping gestures with vanilla js.
    https://github.com/tri613/swipe-it#readme
   
    @Create 2016/09/22
    @Update 2017/08/11
    @Author Trina Lu
    ===========================*/
    "use strict";var _slicedToArray=function(){function n(n,t){var e=[],i=!0,o=!1,r=void 0;try{for(var u,c=n[Symbol.iterator]();!(i=(u=c.next()).done)&&(e.push(u.value),!t||e.length!==t);i=!0);}catch(n){o=!0,r=n}finally{try{!i&&c.return&&c.return()}finally{if(o)throw r}}return e}return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return n(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();!function(n,t,e){function i(n){function e(){o("touchstart",m,w),o("touchmove",d,w),o("touchend",p,w),E.mouseEvent&&o("mousedown",s,w)}function i(){y=!1,D=!1,A=!1,b=!1,a=!1}function s(n){a=this,y=n.clientX,D=n.clientY,o("mousemove",l,v),o("mouseup",h,v)}function l(n){n.preventDefault(),y&&D&&(A=n.clientX,b=n.clientY)}function h(n){r("mousemove",l,v),r("mouseup",h,v),p(n)}function m(n){a=this,y=n.touches[0].clientX,D=n.touches[0].clientY}function d(n){A=n.touches[0].clientX,b=n.touches[0].clientY}function p(n){if(y&&D&&A&&b){var t=y-A,e=D-b,o=[t,e].map(Math.abs),r=_slicedToArray(o,2),c=r[0],s=r[1],v=E.minDistance;if(c>v){var f=y<A?"swipeRight":"swipeLeft";u(f,a,{distance:t,start:y,end:A})}if(s>v){var l=D>b?"swipeUp":"swipeDown";u(l,a,{distance:e,start:D,end:b})}(c>v||s>v)&&u("swipe",a)}i()}var E=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},w=c(t.querySelectorAll(n)),y=void 0,D=void 0,A=void 0,b=void 0;E.mouseEvent=void 0===E.mouseEvent?f.mouseEvent:E.mouseEvent,E.minDistance=void 0===E.minDistance?f.minDistance:E.minDistance,i(),e(),this.on=function(n,t){return o(n,t,w),this}}function o(n,t,e){s(e).forEach(function(e){return e.addEventListener(n,t)})}function r(n,t,e){s(e).forEach(function(e){return e.removeEventListener(n,t)})}function u(n,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=t.createEvent("Event");o.initEvent(n,!0,!0),o.swipe=i,s(e).forEach(function(n){return n.dispatchEvent(o)})}function c(n){for(var t=[],e=0;e<n.length;e++)t.push(n[e]);return t}function s(n){return Array.isArray(n)?n:[n]}var a=!1,v=[n],f={mouseEvent:!0,minDistance:30};n[e]=i}(window,document,"SwipeIt");
  
  var mySwipeIt = new SwipeIt('body');
  mySwipeIt.on('swipeLeft',function(e){
      //check if lightbox is present
      if($('.lightbox').length >  0 ) {
          $("#next").click();
      }
  }).on('swipeRight',function(e){
      //check if lightbox is present
      if($('.lightbox').length >  0 ) {
          $("#prev").click();
      }
  });