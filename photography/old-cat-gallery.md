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

gallery:
  - url: /assets/photography/cat-gallery/Little Hun.jpg
    image_path: /assets/photography/cat-gallery/Little Hun-th.jpg
    alt: "My Hun Kitty"
  - url: /assets/photography/cat-gallery/Boys-Idabel-bed.jpg
    image_path: /assets/photography/cat-gallery/Boys-Idabel-bed-th.jpg
    alt: "Boys on the Bed"
  - url: /assets/photography/cat-gallery/Banjo-on-the-Bed.jpg
    image_path: /assets/photography/cat-gallery/Banjo-on-the-Bed-th.jpg
    alt: "Banjo on the Bed"

support: [gallery]
---
Past Cats:

{% include gallery-layout.html gallery=site.data.galleries.old-cat-gallery %}