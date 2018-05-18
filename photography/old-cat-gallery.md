---
layout: gallery
title: Old Cat Gallery
permalink: /photography/old-cat-gallery/
date: 2018-04-03 16:18:01 -0600
last_modified_at: 2018-04-04T12:42:38-04:0
author: Donald Boulton
author_profile: false
comments: true
share: true
related: true
breadcrumb: true
sidenav: true
adds: true
cookies: true
category:
  - Gallerys

sidebar:
  - title: "My Hun Kitty"
    image: /assets/photography/old-cat-gallery/Little-Hun-th.jpg
    image_alt: "Hun Kitty"
    text: "Hun at 3 weaks"
  - title: "Responsibilities"
    text: "I take care of about 20 stray cats in three different parts of OKC and any kitty that comes my way."
category:
  - Gallerys
header:
  image: /assets/photography/cat-gallery/Little-Hun.jpg
  teaser: /assets/photography/cat-gallery/Little-Hun-th.jpg

locations:
  - Oklahoma City, Oklahoma
  - Idabel Oklahoma
support: [gallery]
---
# Cats from the past

{% include gallery-layout.html gallery=site.data.galleries.old-cat-gallery %}

{% for gallery in site.photography %}
  {% include archive-single.html %}
{% endfor %}