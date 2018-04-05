---
layout: gallery
title: Stray Cats
no_menu_item: true # required only for this example website because of menu construction
author: Donald Boulton
author_profile: false

comments: true
share: true
related: true

header:
  image: /assets/photography/stray-cat-gallery/Pretty-Girl-1200.jpg
  teaser: /assets/photography/stray-cat-gallery/ Pretty-Girl-th.jpg
sidebar:
  - title: "Role"
    image: /assets/photography/stray-cat-gallery/GrandPaw-My-Cats-th.jpg
    image_alt: "Idabel Girls"
    text: "Pretty Girl and Visitor"
  - title: "Responsibilities"
    text: "I take care of any kitty that comes my way."

support: [gallery]
---

Stray cats I take care of every day, and have since 1999.
Its my passion as I love kitty cats.

{% include gallery-layout.html gallery=site.data.galleries.stray-cat-gallery %}

{% for gallery in site.photography %}
  {% include archive-single.html %}
{% endfor %}