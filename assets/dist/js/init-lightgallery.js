$(document).ready(function() {

  window.prettyPrint && prettyPrint()

  // Animated thumbnails
  var $animThumb = $('#aniimated-thumbnials');
  if ($animThumb.length) {
      $animThumb.justifiedGallery({
          border: 6
      }).on('jg.complete', function() {
          $animThumb.lightGallery({
              thumbnail: true
          });
      });
  };

  //thumbnails without animation
  var $thumb = $('#thumbnials-without-animation');
  if ($thumb.length) {
      $thumb.justifiedGallery({
          border: 6
      }).on('jg.complete', function() {
          $thumb.lightGallery({
              thumbnail: true,
              animateThumb: false,
              showThumbByDefault: false
          });
      });
  };

  $('#html5-videos').lightGallery({
      thumbnail: false
  });

  $('#html5-videos-videojs').lightGallery({
      videojs: true
  });

  $('#videos').lightGallery();
  $('#videos-without-poster').lightGallery();
  $('#video-player-param').lightGallery({
      youtubePlayerParams: {
          modestbranding: 1,
          showinfo: 0,
          rel: 0,
          controls: 0
      },
      vimeoPlayerParams: {
          byline: 0,
          portrait: 0,
          color: 'A90707'
      }
  });

  $('#video-thumbnails').lightGallery({
      loadYoutubeThumbnail: true,
      youtubeThumbSize: 'default',
      loadVimeoThumbnail: true,
      vimeoThumbSize: 'thumbnail_medium'
  });

  $('#select-trans').on('change', function() {
      $('#custom-transitions').data('lightGallery').destroy(true);
      customTransitions($(this).val());
  });

  function customEasing(ease) {
      $('#custom-easing').lightGallery({
          cssEasing: ease
      })
  }

  customEasing('cubic-bezier(0.680, -0.550, 0.265, 1.550)');

  $('#select-ease').on('change', function() {

      var val = $(this).val();
      prompt('You can copy cubic-bezier from here', val);

      $('#custom-easing').data('lightGallery').destroy(true);
      customEasing('cubic-bezier(' + val + ')');
  });

  // Custom events
  var $customEvents = $('#custom-events');
  $customEvents.lightGallery();

  var colours = ['rgb(33, 23, 26)', 'rgb(129, 87, 94)', 'rgb(156, 80, 67)', 'rgb(143, 101, 93)'];
  $customEvents.on('onBeforeSlide.lg', function(event, prevIndex, index) {
      $('.lg-outer').css('background-color', colours[index])
  });

  // Responsive images
  $('#responsive-images').lightGallery();
  $('#srcset-images').lightGallery();

  // iframe
  $('#open-website').lightGallery({
      selector: 'this'
  });

  // Google map
  $('#google-map').lightGallery({
      selector: 'this',
      iframeMaxWidth: '80%'
  });

  $('#captions').lightGallery();
  $('#relative-caption').lightGallery({
      subHtmlSelectorRelative: true
  });
  $('#hash').lightGallery();

  $('#lg-share-demo').lightGallery();

});

// init isotope
var $grid = $('#responsive-images').isotope({
  percentPosition: true,
  columnWidth: '#gallery-sizer',
  itemSelector: '.image-wrapper',
  layoutMode: "masonry"
});

// layout Isotope after each image loads
$grid.imagesLoaded().progress( function() {
  $grid.masonry();
});
