---
layout: galleryloop
title: Unsorted
permalink: /photography/unsorted-gallery/
picture_path: unsorted-gallery
gallery: true
date: 2018-05-16 16:18:01 -0600
last_modified_at: 2018-05-16T12:42:38-04:0
author: Donald Boulton
author_profile: false
comments: true
share: true
related: true
breadcrumb: true
sidenav-gallery: true
adds: true
cookies: true
sidebar:
  - title: "My Hun Kitty"
    image: /assets/photography/old-cat-gallery/Little-Hun-th.jpg
    image_alt: "Hun Kitty"
    text: "Hun at 3 weaks"
  - title: "Responsibilities"
    text: "I take care of about 20 stray cats in three different parts of OKC and any kitty that comes my way."
category:
  - Gallerys
tags: [Gallery]
header:
  image: /assets/photography/unsorted-gallery/jesus_500.jpg
  teaser: /assets/photography/unsorted-gallery/jesus_500.jpg
locations:
  - All
support: [gallery]
---
# Unsorted

{% for gallery in site.photography %}
  {% include archive-single.html %}
{% endfor %}

{% include image-gallery.html folder="/assets/photography/unsorted-gallery" %}