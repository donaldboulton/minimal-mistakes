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
  image: /assets/photography/stray-cat-gallery/DSCN1260.jpg
  teaser: /assets/photography/stray-cat-gallery/DSCN1260-th.jpg
sidebar:
  - title: "Role"
    image: /assets/photography/stray-cat-gallery/DSCN1260-th.jpg
    image_alt: "Idabel Girls"
    text: "Pretty Girl and Visitor"
  - title: "Responsibilities"
    text: "I take care of any kitty that comes my way."
gallery:
  - url: /assets/photography/stray-cat-gallery/DSCN1260.jpg
    title: Moma Kitties
    image_path: /assets/photography/stray-cat-gallery/DSCN1260-th.jpg
    alt: "Moma Kitties"
    caption: Moma Kitties
  - url: /assets/photography/stray-cat-gallery/DSCN1479.jpg
    title: Young Top Cat
    image_path: /assets/photography/stray-cat-gallery/DSCN1479-th.jpg
    alt: Young Top Cat"
    caption: Young Top Cat
  - url: /assets/photography/stray-cat-gallery/Topcat-hood.jpg
    title: Top Cat
    image_path: /assets/photography/stray-cat-gallery/Topcat-hood-th.jpg
    alt: "Top Cat"
    caption: Top Cat

support: [gallery]
---

Stray cats I take care of every day, and have since 1999.
Its my passion as I love kitty cats.

Stray Cats:
{% include gallery-layout.html gallery=site.data.galleries.stray-cat-gallery %}

{% for gallery in site.photography %}
  {% include archive-single.html %}
{% endfor %}

{% include gallery caption="This is a Kitty Gallery." %}