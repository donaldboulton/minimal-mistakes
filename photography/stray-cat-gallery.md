---
layout: gallery
title: Stray Cat Gallery
permalink: /photography/stray-cat-gallery/
date: 2018-04-04 16:16:01 -0600
last_modified_at: 2018-04-05T12:42:38-04:0
author: Donald Boulton
author_profile: false
gallery: true
comments: true
share: true
reviews: false
related: true
sidenav-gallery: true
adds: false
cookies: false
breadcrumb: true
category:
  - Gallerys
tags: [Gallery, Stray Cats] 
sidebar:
  - title: "My Hun Kitty"
    image: /build/photography/old-cat-gallery/Little-Hun-th.jpg
    image_alt: "Hun Kitty"
    text: "Hun at 3 weaks"
  - title: "Responsibilities"
    text: "I take care of about 20 stray cats in three different parts of OKC and any kitty that comes my way."
header:
  image: /build/photography/stray-cat-gallery/Pretty-Girl-1200.jpg
  teaser: /build/photography/stray-cat-gallery/Pretty-Girl-th.jpg
locations:
  - Idabel Oklahoma
  - 4 Oaks Storaage
support: [gallery]
---
# Feed stray cats every morning

Stray cats I take care of every day, and have since 1999.
Its my passion as I love kitty cats.

{% include gallery-layout.html gallery=site.data.galleries.stray-cat-gallery %}

{% for gallery in site.photography %}
  {% include archive-single.html %}
{% endfor %}
