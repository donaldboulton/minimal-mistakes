---
layout: galleryloop
title: Unsorted
permalink: /photography/unsorted/
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
category:
  - Gallerys
header:
  image: /assets/photography/unsorted-gallery/jesus_500.jpg
  teaser: /assets/photography/unsorted-gallery/jesus_500.jpg

locations:
  - All

support: [gallery]
---

## Unsorted

{% for gallery in site.photography %}
  {% include archive-single.html %}
{% endfor %}

{% include image-gallery.html folder="/assets/photography/unsorted-gallery" %}