Promise.all([
  import('lightgallery'),
  import('lg-thumbnail.js'),
  import('lg-autoplay.js'),
  import('lg-fullscreen.js'),
  import('lg-zoom.js'),
  import('lg-share.js'),
  import('lg-pager.js')
])
.then(([]) => {
  
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
          
          // layout Isotope after each image loads
          $grid.imagesLoaded().progress( function() {
            $grid.masonry();
          });          
        })
        .catch(error => {
           console.log(error);
           toastr.error('An error occurred while loading the lightgallery module', "Module Load Failed");
});
