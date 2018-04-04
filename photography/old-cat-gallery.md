---
layout: gallery
title: MY Past Cats
no_menu_item: true # required only for this example website because of menu construction
author: Donald Boulton
author_profile: false

comments: true
share: true
related: true

header:
  image: /assets/photography/cat-gallery/Little-Hun.jpg
  teaser: /assets/photography/cat-gallery/Little-Hun-th.jpg

support: [gallery]
---

{% include gallery-layout.html gallery=site.data.galleries.old-cat-gallery %}

{% for gallery in site.photography %}
  {% include archive-single.html %}
{% endfor %}