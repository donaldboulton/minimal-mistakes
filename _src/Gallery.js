require('lightgallery.js');
require('lg-thumbnail.js');
require('lg-autoplay.js');
require('lg-zoom.js');
require('lg-fullscreen.js');
require('lg-pager.js');
require('lg-autoplay.js');
  
window.prettyPrint && prettyPrint()

var $gallery = $("#aniimated-thumbnials").lightGallery({
    thumbnail: true,
    selector: '.image'
});
var $grid = $('#aniimated-thumbnials').isotope({
    percentPosition: true,
    columnWidth: '#gallery-sizer',
    itemSelector: '.image-wrapper',
    layoutMode: "masonry"
});
          
$grid.imagesLoaded().progress( function() {
    $grid.masonry();    
});
