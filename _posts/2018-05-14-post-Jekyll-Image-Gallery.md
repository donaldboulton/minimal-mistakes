---
layout: single
title: "Jekyll Image Gallery"
permalink: 2018-05-14-post-Jekyll-Image-Gallery.html
date: 2018-05-14 16:16:01 -0600
last_modified_at: 2018-05-16T12:42:38-04:00
search: true
author: Donald Boulton
author_profile: true
tags:
  - Jekyll
  - Gallery
  - Isotope
  - LightGallery
  - images.weserv.nl
  - Programing
category:
  - Jekyll
  - Gallerys
locations:
  - OKC Oklahoma
toc: true
toc_label: "Contents"
read_time: true
comments: true
related: true
share: true
social-share: twitter --twitter-hashtags facebook linkedin
sidenav: true
reviews: true
adds: true
cookies: true

excerpt: "Create a Jekyll image Gallery that loops through all images in a folder. Not Configured by yml Frontmatter, thus much eaiser to create. Using [Images resizing by images.weserv.nl](weserv.nl), which gives a thumbnail image displayed in the isotope arranged gallery and the origional images which are opened by lightgallery."

image:
  cover: true
  path: &image /assets/images/pages/jekyll.png
  feature: *image
  thumbnail: /assets/images/pages/jekyll-320.png
header:
  image: /assets/images/pages/jekyll.png
  teaser: /assets/images/pages/jekyll.png      
share: twitter --twitter-hashtags facebook linkedin
support: [adds, cookies]
folder: _posts
product: jekyll-image-gallery
slug: jekyll-image-gallery
github_editme_path: donaldboulton/DWB/blob/gh-pages/_posts/2018-05-14-post-Jekyll-Image-Gallery.md
lcb: "{"
---

{% include octo-arm.html %}

{% include page-intro.html %}

# A Simple or Complex Image Gallery

There are two ways displayed below to build Image Gallerys with Jekyll using [MetaFuzzy Isotope](https://isotope.metafizzy.co/) and [Sachinchoolur LightGallery](http://sachinchoolur.github.io/lightGallery/demos/)

The First is a Simple Gallery that Loops throught all images in a folder resizing the isotope gallery page, display image online, the origional image is opened in LightGallery.

The Second is a Complex Gallery is driven off of a data yml file, a hard way to do it, but it gives you a mobile responsive - data-responsive set of images kind of like a data-srcset but for a Isotope - LightGallery responsive display, using 4 or more image sizes.

## Image sizing

Getting the four or more image sizes for the complex gallery is alot of work. If your on Github Pages, Cloudinary will not work. So I use Graphics Magic locally and then add the correct file extenshions for the size as image-th.jpg for the thumnail size, using 320px for the thumbnail size. Including 3 others image-320.jpg, image-800.jpg and image-1200.jpg, the main display image in lightgallery as image-1200.jpg. You can use different sizes to fit the needs for your site but they must have differing file size extenshions as image-1234.jpg or whatever.

## Config and folder structure

The config yml should look simular to the below if your gallery.md files are in a folder named, photography no underscore as _photography.

```yml
# Collections
collections:
  photography:
    output: true
    permalink: /:photography/:name/
```

With defaults as:

```yml
# Defaults
defaults:
  - scope:
      path: "photography"
      type: "photograpny"
    values:
      layout: single
      breadcrumbs:
        - label: "photography"
          url: /photography/
      permalink: /:path/:basename:output_ext
      // I use:basename:output_ext for redirection, could be /:photography/:name/
```

## Adding Images

I added images in my /assets/images/photography/ folders for each gallery. as listed in my data/overwiew.yml file and configured in each of my /photography/Gallery.md files

## Data YML Files

Both the simple and Complex Gallerys are driven by the data/gallerys/overview.yml data file as displayed below, this is from my site and gallerys.
 The fist set is for the complex gallery with 5 images, you only need 4, with different sizes and ending with different size extenshion as -1234. The second is for the simple gallery with just one image listed.

### Gallerys main datafile overview.yml

```yml
// Complex yml 5 images
-
 title: San Francisco
 directory: san-francisco
 picture_path: san-francisco
 preview:
  filename: VS-2012-5948-4242x2828
  original: VS-2012-6013-6000x4000.jpg
  sizes:
  - VS-2012-5948-4242x2828.jpg
  - VS-2012-5948-2121x1414.jpg
  - VS-2012-5948-2999x1999.jpg
  thumbnail: VS-2012-5948-320-thumbnail.jpg

// Simple yml one image and thumbnails provided by online resizing
-
 title: Family
 directory: family-gallery
 picture_path: family-gallery
 preview:
  filename: first-grade
  original: First-Grade.jpg
  sizes:
  - First-Grade.jpg
  thumbnail: First-Grade.jpg

```

### Individual Gallerys Frontmatter

Below the individual gallery frontmatter and the 5th image is not listed as with its extenshion as .jpg but it will be looking for a file with just the name as image.jpg not image-12345.jpg. So it uses 5 images of differing extenshions & sizes.

```yaml
picture_path: stray-cat-gallery
preview:
  filename: DSCN1261
  original: DSCN1261-1200.jpg
  sizes:
  - DSCN1261-1200.jpg
  - DSCN1261-800.jpg
  - DSCN1261-320.jpg
  thumbnail: DSCN1261-th.jpg
pictures:
- filename: DSCN1252
  original: DSCN1252-1200.jpg
  sizes:
  - DSCN1252-1200.jpg
  - DSCN1252-800.jpg
  - DSCN1252-320.jpg
  thumbnail: DSCN1252-th.jpg
- filename: DSCN1260
  original: DSCN1260-1200.jpg
  sizes:
  - DSCN1260-1200.jpg
  - DSCN1260-800.jpg
  - DSCN1260-320.jpg
  thumbnail: DSCN1260-th.jpg
- filename: Casper
  original: Casper-1200.jpg
  sizes:
  - Casper-1200.jpg
  - Casper-800.jpg
  - Casper-320.jpg
  thumbnail: Casper-th.jpg
- filename: Casper-Mousee
  original: Casper-Mousee-1200.jpg
  sizes:
  - Casper-Mousee-1200.jpg
  - Casper-Mousee-800.jpg
  - Casper-Mousee-320.jpg
  thumbnail: Casper-Mousee-th.jpg
- filename: DSCN1269
  original: DSCN1269-1200.jpg
  sizes:
  - DSCN1269-1200.jpg
  - DSCN1269-800.jpg
  - DSCN1269-320.jpg
  thumbnail: DSCN1269-th.jpg
```

## Page Frontmatter

```yml
---
layout: gallery
title: Cat Gallery
permalink: /photography/cat-gallery/
category:
  - Gallerys
support: [gallery]
---
```

## The Included Js And Css

I Included the [lightgallery.js](https://raw.githubusercontent.com/sachinchoolur/lightGallery/master/src/js/lightgallery.js){:id="open-website" rel="nofollow"} minified to my main site main.min.js file as to have it initilized at all times for any page. I included it right after jquery.js and before any other Conjugated scripts.

Adding all other LightGallery css and scripts in a assets/dist folder. In the same folder structure as in the [lightgallery repo](https://github.com/sachinchoolur/lightGallery){:id="open-website" rel="nofollow"}, adding isotope.js, mousewheel.js and picturefill.js from CloudFlare CDN.

Isotope.js latest at github repo: [isotope.js](https://raw.githubusercontent.com/metafizzy/isotope/master/js/isotope.js){:id="open-website" rel="nofollow"} and LightGallery Js and Css are required for this gallery including the below _gallery.sass file.

### Gallery Assets

To gather the required scripts and css we need to download and add them to our assets folder.
Adding included Isotope and LightGallery files as below seen in my [includes/scripts.html](https://raw.githubusercontent.com/donaldboulton/DWB/gh-pages/_includes/scripts.html){:id="open-website" rel="nofollow"} file.

```html
{{ page.lcb }}% if page.support contains 'gallery' %}
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.isotope/3.0.5/isotope.pkgd.min.js" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/picturefill/3.0.3/picturefill.min.js" crossorigin="anonymous"></script>
  <script src="{{ page.lcb }}{ '/assets/dist/js/imagesloaded.pkgd.min.js' | relative_url }}"></script>
  <script src="{{ page.lcb }}{ '/assets/dist/modules/lg-autoplay.min.js' | relative_url }}"></script>
  <script src="{{ page.lcb }}{ '/assets/dist/modules/lg-fullscreen.min.js' | relative_url }}"></script>
  <script src="{{ page.lcb }}{ '/assets/dist/modules/lg-share.min.js' | relative_url }}"></script>
  <script src="{{ page.lcb }}{ '/assets/dist/modules/lg-thumbnail.min.js' | relative_url }}"></script>
  <script src="{{ page.lcb }}{ '/assets/dist/modules/lg-zoom.min.js' | relative_url }}"></script>
  <script src="{{ page.lcb }}{ '/assets/dist/js/init-lightgallery.js' | relative_url }}"></script>
{{ page.lcb }}% endif %}
```

There is one script above init-lightgallery.js that is initializes all of LightGalley resources including links,iframe, maps = all.

## LightGallery init-lightgallery.js

```javascript
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
```

In each Gallery.md file to use the included above scripts add the below to your gallery page frontmatter. Using a liquid conditional if page.support contains 'gallery'

```html
support: [gallery]
```

I added the Css  same way to my [/includes/head.html](https://raw.githubusercontent.com/donaldboulton/DWB/gh-pages/_includes/head.html) file and the above frontmatter support will include the lightgallery.min.css, with a conditional if statement % if page.support contains 'gallery' %

```html
   <link rel="stylesheet" href="{{ page.lcb }}{ '/assets/dist/css/lightgallery.min.css' | relative_url }}">
```

### The Sass styling

The styling for my site gallery's, several are included. The download of [gallery.scss](https://raw.githubusercontent.com/donaldboulton/DWB/gh-pages/_sass/minimal-mistakes/_gallery.scss){:id="open-website" rel="nofollow"} file.

The gallery.scss code below

```css
.image-wrapper,
.gallery-sizer {
  width: 25%;
}

.gallery {

  display: block;

  .image-wrapper {
    float: left;
    padding: 3px;

    // hack required if no padding
    .image {
      width: 100.1%;
      width: calc( 100% + 1px );
      height: 100%;
    }
  }

  &:after {
    content: '';
    display: block;
    clear: both;
  }
}

.caption {
  position: static;
  color: #AAA;
}

.gallery-3-col {
  display: grid;
  grid-gap: 0.5em;
  align-items: stretch;
  justify-items: center;

  @include breakpoint($small) {
    grid-template-columns: repeat(3, 1fr);
  }

  caption {
    width: 100%;
    grid-column: 1 / -1;
  }
}

.gallery-3-col-unjustified {
  display: grid;
  grid-gap: 0.5em;
  align-items: stretch;

  @include breakpoint($small) {
    grid-template-columns: repeat(3, 1fr);
  }

  caption {
    width: 100%;
    grid-column: 1 / -1;
  }
}

.grid,
.grid-sizer {
  width: 25%;
}

.grid {

  max-width: 1200px;

  .grid-item {
    float: left;
    width: 320px;
    padding: 3px;

    // hack required if no padding
    .thumb {
      width: 100.1%;
      width: calc( 100% + 1px );
      height: 100%;
    }
  }

  &:after {
    content: '';
    display: block;
    clear: both;
  }
}

.list-unstyled {
  padding: 0px!important;
  margin: 0px!important;
  list-style: none;
}

.gallery-2-col {
  display: grid;
  grid-gap: 0.5em;
  align-items: stretch;
  justify-items: center;

  @include breakpoint($small) {
    grid-template-columns: repeat(2, 1fr);
  }

  caption {
    width: 100%;
    grid-column: 1 / -1;
  }
}

.gallery-2-col-unjustified {
  display: grid;
  grid-gap: 0.5em;
  align-items: stretch;

  @include breakpoint($small) {
    grid-template-columns: repeat(2, 1fr);
  }

  caption {
    width: 100%;
    grid-column: 1 / -1;
  }
}
// Vertical Gallery

.gallery-vertical {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;

  @include breakpoint($large) {
    flex-wrap: wrap;
    overflow-x: inherit;
  }

  .gallery-image {
    padding: 0 1em 1em 1em;
    max-width: ($small - ($small * 0.25 + 0px));
    flex-shrink: 0;

    @include breakpoint($medium) {
      max-width: ($medium - ($medium * 0.45 + 0px));
    }

    @include breakpoint($large) {
      max-width: ($large - ($large * 0.5 + 0px));
      flex-shrink: 1;
      flex-basis: calc(100% / 3);
    }

    img {
      display: block;
      width: 100%;
      border-radius: 3px;
    }
  }
}

// Thumbnail Gallery

.gallery-thumbnails {
  display: grid;
  grid-gap: 0.5em;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  padding-left: 0; // reset

  li {
    float: left;
    width: 100px;
    margin: 0.25em;
    list-style: none;

    @supports (display: grid) {
      margin: 0;
    }

    a {
      display: block;
    }

    img {
      width: 100%;
      height: auto;
      min-height: 100px;
      border-radius: 3px;
    }
  }
}

.gallery-image{
  width: 219px!important;
  height: 165px!important;
}
```

## Jekyll Simple Gallery

Create a Jekyll images Gallery that loops through all images in a folder. Displayed with [MetaFuzzy Isotope](https://isotope.metafizzy.co/) and viewed with [Sachinchoolur LightGallery](http://sachinchoolur.github.io/lightGallery/demos/){:id="open-website" rel="nofollow"}. Not Configured by yml Frontmatter, thus much eaiser to create. Using [Images resizing by images.weserv.nl](weserv.nl), which gives a thumnail image displayed in the Isotope gallery and the origional images which are opened by LightGallery.

### The _includes file Simple Gallery

The image gallery includes file as [image-gallery.html](https://raw.githubusercontent.com/donaldboulton/DWB/gh-pages/_includes/image-gallery.html){:id="open-website" rel="nofollow"} for Isotope arranged animated thumnails, resized online by [images.weserv.nl](weserv.nl) and displayed in LightGallery.

### The _layout file Simple Gallery

Gallery layout download [galleryloop.html](https://raw.githubusercontent.com/donaldboulton/DWB/gh-pages/_layouts/galleryloop.html){:id="open-website" rel="nofollow"}

The gallery layout file code with the tile of my page being in my single layout or your default layout file.

```html
---
layout: single
author: Donald Boulton
author_profile: false
support: [gallery]
---

<div id="main" role="main">
  <div itemscope itemtype="http://schema.org/ImageGallery">
      {{ page.lcb }}{ content }}
  </div>
</div>
```

## Jekyll Complex Gallery

This is a Gallery based on Isotope and LightGallery the same as my Simple Gallery, this Complex one uses a data yml file and 5 pre configured images for a figure srcset display. Alot of coding is require for this and my cat gallerys are the only ones built like this, but for the best mobile speed with responsiveness, this is the way to go.

### The _include file

This include file at: [gallery-layout.html](https://raw.githubusercontent.com/donaldboulton/DWB/gh-pages/_includes/gallery-layout.html){:id="open-website" rel="nofollow"} builds a srcset out of Five preconfigured images. Sizes as example image-320.jpg or 320px wide, image-800.jpg or 800px wide, image-1200px or 1200px wide, and the origional image in your stock size twice once with its origional name and once with the extenshion to the file name as above image-lg.WHATEVER .png .jpg .gif...

### The _layout file

The layout file at: [gallery.html](https://github.com/donaldboulton/DWB/blob/gh-pages/_layouts/gallery.html`){:id="open-website" rel="nofollow"} for the Complex Gallery simular to the simple gallery with a added class on the div as class="gallery".

```html
---
layout: single
author: Donald Boulton
author_profile: false
support: [gallery]
---

<div id="main" role="main">
  <div class="gallery" itemscope itemtype="http://schema.org/ImageGallery">
      {{ page.lcb }}{ content }}
  </div>
</div>
```

If there is any confusion to the contents of this post add a review, tweet or a comment below, and or go to the repo for, Donald Boulton at: [Github Repo](https://github.com/donaldboulton/DWB){:id="open-website" rel="nofollow"} and view the code. Both my Simple and Complex Gallerys displayed on my Gallery Page.

> The only Gallerys that are Complex or yml driven are my CAT Gallerys.

{% include lightgallery-maps-iframe.html %}
