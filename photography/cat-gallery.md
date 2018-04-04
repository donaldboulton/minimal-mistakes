---
layout: gallery
title: MY Cats
no_menu_item: true # required only for this example website because of menu construction
author: Donald Boulton
author_profile: false

comments: true
share: true
related: true

header:
  image: /assets/photography/cat-gallery/Little-Hun-1200.jpg
  teaser: /assets/photography/cat-gallery/Little-Hun-th.jpg"

support: [gallery]
---

My kitty cats, Tiger the Tabby, Banjo the black Kitty, and The Father and Son Team Mr. Einstein and Jr. Einstein who look and act allot alike.

Cats my passion as I love kitty cats.

{% include gallery-layout.html gallery=site.data.galleries.cat-gallery %}

{% for gallery in site.photography %}
  {% include archive-single.html %}
{% endfor %}