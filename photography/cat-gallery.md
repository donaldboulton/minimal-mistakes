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

My kitty cats past and present. House cats and my past cats I take care of every day and have since 1999.

Its my passion as I love kitty cats.

House cats:

{% include gallery-layout.html gallery=site.data.galleries.cat-gallery %}

{% for gallery in site.photography %}
  {% include archive-single.html %}
{% endfor %}