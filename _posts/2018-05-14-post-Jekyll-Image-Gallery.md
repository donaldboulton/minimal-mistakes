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
  - Isotope
  - LightGallery
  - images.weserv.nl
category:
  - Jekyll
locations:
  - OKC Oklahoma
toc: true
toc_label: "Contents"
read_time: true
comments: true
related: true
share: true
sidenav: true
reviews: true
adds: true
cookies: true

excerpt: "Create a Jekyll images Gallery that loops through all images in a folder. Not Configured by yml Frontmatter, thus much eaiser to create. Using [Images resizing by images.weserv.nl](weserv.nl), which gives a thumnail image displayed in the isotope arranged gallery and the origional images which is opened by lightgallery."

image:
  cover: true
  path: &image /assets/images/pages/jekyll.png
  feature: *image
  thumbnail: /assets/images/pages/jekyll-320.png
header:
  image: /assets/images/pages/jekyll.png
  teaser: /assets/images/pages/jekyll.png      

support: [adds, cookies]
folder: _posts
product: Jekyll-Image-Gallery
slug: Jekyll-Image-Gallery
---

{% include octo-arm.html %}

{% include page-intro.html %}

# Jekyll Simple Gallery

Create a Jekyll images Gallery that loops through all images in a folder. Displayed with [MetaFuzzy Isotope](https://isotope.metafizzy.co/) and viewed with [Sachinchoolur LightGallery](http://sachinchoolur.github.io/lightGallery/demos/). Not Configured by yml Frontmatter, thus much eaiser to create. Using [Images resizing by images.weserv.nl](weserv.nl), which gives a thumnail image displayed in the Isotope gallery and the origional images which is opened by LightGallery.

Below is the image gallery includes file as [image-gallery.html](https://raw.githubusercontent.com/donaldboulton/DWB/gh-pages/_includes/image-gallery.html) for Isotope arranged animated thumnails, resized online by [images.weserv.nl](weserv.nl) and displayed in LightGallery.

```html
<div id="aniimated-thumbnials{% if include.id_number %}-{{ include.id_number }}{% endif %}" class="gallery">
      <div id="gallery-sizer{% if include.id_number %}-{{ include.id_number }}{% endif %}" class="gallery-sizer"></div>
      {% for file in site.static_files %}
          {% if file.path contains include.folder %}
          {% if file.extname == '.jpg' or file.extname == '.jpeg' or file.extname == '.JPG' or file.extname == '.JPEG' %}
          <div class="image-wrapper" itemscope itemtype="http://schema.org/ImageObject">
              <a itemprop="contentUrl" href="{{ file.path }}" {% if picture.title %} itemprop="name" data-sub-html="<div class='lg-toolbar caption'><h4>{{ picture.title | escape }}</h4>{% if picture.caption %}<p>{{ picture.caption | escape }}</p>{% endif %}</div>"{% endif %} class="image">
                 <img itemprop="thumbnail" src="//images.weserv.nl/?url={{ site.url | replace: 'http://','' | replace: 'https://','' }}{{ file.path }}&w=300&h=300&output=jpg&q=50&t=square" />
              </a>
          </div>
          {% endif %}
          {% endif %}
      {% endfor %}
</div>
```

# The layout file for the gallery

Gallery layout download [galleryloop.html](https://raw.githubusercontent.com/donaldboulton/DWB/gh-pages/_layouts/galleryloop.html)

The gallery layout file code

```html
---
layout: default
author: Donald Boulton
author_profile: false
support: [lightbox]
---

<div id="main" role="main">
  <h1 class="gallery-title page__title">{{ page.title }}</h1>
  <div itemscope itemtype="http://schema.org/ImageGallery">
      {{ content }}
  </div>
</div>
```

## The Sass styling

The styling for my site gallery's several are included. The download of [gallery.scss](https://raw.githubusercontent.com/donaldboulton/DWB/gh-pages/_sass/minimal-mistakes/_gallery.scss) file.

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

## Jekyll Complex Gallery

This is a Gallery based on Isotope and LightGallery the same as my Simple Gallery, this on uses data yml and 5 pre configured images for the figure srcset display. Alot of coding is require for this and my cat gallerys are the only ones built like this, but for the best responsiveness and speed this is the way to go.

### The Gallery layout file

```
Working on code display, built on my repo click the Octocat at the top of the page for this page in my Github repo.

{% include links.html %}
