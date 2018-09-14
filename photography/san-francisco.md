---
layout: gallery
title: San Francisco
permalink: /photography/san-francisco/
date: 2018-04-03 16:16:01 -0600
last_modified_at: 2018-04-04T12:42:38-04:0
author: Donald Boulton
author_profile: false
gallery: true
comments: false
share: true
related: true
sidenav-gallery: true
adds: false
cookies: false
breadcrumb: true
locations:
  - San Francisco, California
category:
  - Gallerys
tags: [Gallery, San Francisco Ca] 
sidebar:
  - title: "Golden Gate"
    image: /dest/assets/photography/san-francisco-gallery/VS-2012-5948-2999x1999.jpg
    image_alt: "Golden Gate Bridge"
    text: "Take a walk across this baby"
  - title: "Golden Gate Bridge"
    text: "Drove walked rode a bicycle even took a nap on this bridge."
image:
    cover: true
    path: &image /dest/assets/photography/san-francisco/VS-2012-5930-2999x1999.jpg
    feature: *image
    thumbnail: /dest/assets/photography/san-francisco/VS-2012-5930-thumbnail.jpg

header:
  image: /assets/images/letter-avatar-header-1200.png
  teaser: /assets/images/letter-avatar-header-320.png
support: [gallery]
---
# Golden Gate park what a trip

Lived in San Francisco for about a year. Lived and hung out on hippy hill in Golden Gate park, how cool!

{% include gallery-layout.html gallery=site.data.galleries.san-francisco %}

{% for gallery in site.photography %}
  {% include archive-single.html %}
{% endfor %}
