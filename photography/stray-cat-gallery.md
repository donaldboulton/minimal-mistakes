---
layout: gallery
title: Stray Cat Gallery
date: 2018-04-04 16:16:01 -0600
last_modified_at: 2018-04-05T12:42:38-04:0
author: Donald Boulton
author_profile: false

comments: true
share: true
related: true
breadcrumb: true
header:
  image: /assets/photography/stray-cat-gallery/Pretty-Girl-1200.jpg
  teaser: /assets/photography/stray-cat-gallery/Pretty-Girl-th.jpg

support: [gallery]
---

Stray cats I take care of every day, and have since 1999.
Its my passion as I love kitty cats.

{% include gallery-layout.html gallery=site.data.galleries.stray-cat-gallery %}

{% for gallery in site.photography %}
  {% include archive-single.html %}
{% endfor %}