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
  image: /assets/photography/cat-gallery/part1/Little-Hun.jpg
  teaser: /assets/photography/cat-gallery/part1/Little-Hun-th.jpg

gallery:
  - url: /assets/photography/cat-gallery/part1/Little Hun.jpg
    image_path: /assets/photography/cat-gallery/part1/Little Hun-th.jpg
    alt: "My Hun Kitty"
  - url: /assets/photography/cat-gallery/part1/Boys-Idabel-bed.jpg
    image_path: /assets/photography/cat-gallery/part1/Boys-Idabel-bed-th.jpg
    alt: "Boys on the Bed"
  - url: /assets/photography/cat-gallery/part1/Banjo-on-the-Bed.jpg
    image_path: /assets/photography/cat-gallery/part1/Banjo-on-the-Bed-th.jpg
    alt: "Banjo on the Bed"

support: [jquery, gallery]
---

My kitty cats past and present. House cats and my past cats I take care of every day and have since 1999.

Its my passion as I love kitty cats.

House cats:

{% include gallery-layout.html gallery=site.data.galleries.cat-gallery-1 id_number=1 %}

Past Cats:

{% include gallery-layout.html gallery=site.data.galleries.cat-gallery-2 id_number=2 %}

{% for gallery in site.photography %}
  {% include archive-single.html %}
{% endfor %}

{% include gallery caption="This is a Kitty Gallery." %}