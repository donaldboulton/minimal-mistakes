$(document).ready(function() {

    window.prettyPrint && prettyPrint()

    var $gallery = $("#aniimated-thumbnials").lightGallery({
        thumbnail: true,
        selector: '.image'
    });
      
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

    // Fixed size
    $('#fixed-size').lightGallery({
        width: '700px',
        height: '470px',
        mode: 'lg-fade',
        addClass: 'fixed-size',
        counter: false,
        download: false,
        startClass: '',
        enableSwipe: false,
        enableDrag: false,
        speed: 500
    });

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

    function customTransitions(trans) {
        $('#custom-transitions').lightGallery({
            mode: trans
        })
    }

    customTransitions('lg-slide');

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

    var $commentBox = $('#comment-box');
    $commentBox.lightGallery({
        appendSubHtmlTo: '.lg-item',
        addClass: 'fb-comments',
        mode: 'lg-fade',
        download: false,
        enableDrag: false,
        enableSwipe: false
    });
    $commentBox.on('onAfterSlide.lg', function(event, prevIndex, index) {
        if (!$('.lg-outer .lg-item').eq(index).attr('data-fb')) {
            try {
                $('.lg-outer .lg-item').eq(index).attr('data-fb', 'loaded');
                FB.XFBML.parse();
            } catch (err) {
                $(window).on('fbAsyncInit', function() {
                    $('.lg-outer .lg-item').eq(index).attr('data-fb', 'loaded');
                    FB.XFBML.parse();
                });
            }
        }
    });

    var $commentBoxSep = $('#comment-box-sep');
    $commentBoxSep.lightGallery({
        addClass: 'fb-comments',
        download: false,
        galleryId: 2
    });
    $commentBoxSep.on('onAfterAppendSubHtml.lg', function() {
        try {
            FB.XFBML.parse();
        } catch (err) {
            $(window).on('fbAsyncInit', function() {
                FB.XFBML.parse();
            });
        }
    });

});

$(document).ready(function() {
    var $gallery = $("#aniimated-thumbnials").lightGallery({
      thumbnail: true,
      selector: '.image'
    });
  });

// init isotope
var $grid = $('#aniimated-thumbnials').isotope({
  percentPosition: true,
  columnWidth: '#gallery-sizer',
  itemSelector: '.image-wrapper',
  layoutMode: "masonry"
});

// layout Isotope after each image loads
$grid.imagesLoaded().progress( function() {
  $grid.masonry();
});
