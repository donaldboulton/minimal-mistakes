/**
       * Dynamically loading multiple modules
       * See: https://webpack.js.org/api/module-methods/#import-
       * See: http://2ality.com/2017/01/import-operator.html
       */
      Promise.all([
        import(
           /* webpackChunkName: "lightgallery" */
           'lightgallery.js'), // lightgallery.js must be first
        import('lg-thumbnail.js'),
        import('lg-autoplay.js'),
        import('lg-fullscreen.js'),
        import('lg-zoom.js'),
        import('lg-share.js'),
        import('lg-pager.js')
        // import('lg-hash.js')
     ])
        .then(([]) => {
           lightGallery(document.getElementById('lightgallery'), {
              thumbnail: true,
              selector : '.gallery-item'
           });
        })
        .catch(error => {
           console.log(error);
           toastr.error('An error occurred while loading the lightgallery module', "Module Load Failed");
        });
