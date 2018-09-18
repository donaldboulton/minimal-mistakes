require(['./lightgallery-all.js'], function() {
  require([], function() {
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
  });
});
