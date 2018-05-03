---
layout: gallery
title: San Francisco
permalink: /photography/san-francisco/
date: 2018-04-03 16:16:01 -0600
last_modified_at: 2018-04-04T12:42:38-04:0
locations:
  - San Francisco, California
author_profile: false
comments: true
share: true
related: true
breadcrumb: true
category:
  - Gallerys
image:
    cover: true
    path: &image /assets/photography/san-francisco/VS-2012-5930-2999x1999.jpg
    feature: *image
    thumbnail: /assets/photography/san-francisco/VS-2012-5930-thumbnail.jpg

header:
  image: /assets/images/pages/letter-avatar-header-1200.png
  teaser: /assets/images/pages/letter-avatar-header-320.png
support: [gallery]
---

Lived in San Francisco for about a year. Lived and hung out on hippy hill in Golden Gate park, how cool!

{% include gallery-layout.html gallery=site.data.galleries.san-francisco %}

{% for gallery in site.photography %}
  {% include archive-single.html %}
{% endfor %}