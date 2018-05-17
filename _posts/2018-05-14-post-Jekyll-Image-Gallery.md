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

excerpt: "Create a Jekyll images Gallery that loops through all images in a folder. Not Configured by yml Frontmatter, thus much eaiser to create. Using [Images resizing by images.weserv.nl](weserv.nl), which gives a thumnail image displayed in the isotope arranged gallery and the origional images which is opened by lightgallery.

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
product: post-Jekyll-Image-Gallery
slug: post-Jekyll-Image-Gallery
---

{% include octo-arm.html %}

{% include page-intro.html %}

# Jekyll Image Gallery

Create a Jekyll images Gallery that loops through all images in a folder. Displayed with [MetaFuzzy Isotope](https://isotope.metafizzy.co/) and viewed with [Sachinchoolur LightGallery](http://sachinchoolur.github.io/lightGallery/demos/). Not Configured by yml Frontmatter, thus much eaiser to create. Using [Images resizing by images.weserv.nl](weserv.nl), which gives a thumnail image displayed in the Isotope gallery and the origional images which is opened by LightGallery.

Below is the image gallery layout file as image-gallery.html for Isotope arranged animated thumnails, resized online by [images.weserv.nl](weserv.nl) and displayed in LightGallery.

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

Working on code display, built on my repo click the Octocat at the top of the page for this page in my Github repo.

{% include links.html %}
