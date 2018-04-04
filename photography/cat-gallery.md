---
layout: gallery
title: My House Cat Gallery
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

Banjo My Black Kitty

I have my 15th Tabby cat Which is Tiger.

The Father and Son Mr. Einstein and Jr. Einstein who look and act allot alike.

Cats my passion, I love kitty cats.

{% include gallery-layout.html gallery=site.data.galleries.cat-gallery %}

{% for gallery in site.photography %}
  {% include archive-single.html %}
{% endfor %}