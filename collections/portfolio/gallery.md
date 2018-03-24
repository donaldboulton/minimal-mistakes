---
layout: single
date: 2018-03-20 16:16:01 -0900
last_modified_at: 2018-03-21T12:42:38-04:00
excerpt: "All my Kitties last 5 years"
search: true
author: Donald Boulton
author_profile: false
category:
  - Portfolio

comments: true
share: true
related: true

header:
  image: /assets/images/gallery-1/Tiger.jpg
  teaser: /assets/images/gallery-1/Tiger-th.jpg
sidebar:
  - title: "Role"
    image: /assets/images/gallery-1/DSCN1269-th.jpg
    image_alt: "Idabel Girls"
    text: "Pretty Girl and Visitor"
  - title: "Responsibilities"
    text: "I take care of any kitty that comes my way."
gallery:
  - url: /assets/images/gallery-1/Little Hun.jpg
    image_path: assets/images/gallery-1/Little Hun-th.jpg
    alt: "My Hun Kitty"
  - url: /assets/images/gallery-1/Boys-Idabel-bed.jpg
    image_path: assets/images/gallery-1/Boys-Idabel-bed-th.jpg
    alt: "Boys on the Bed"
  - url: /assets/images/gallery-1/Banjo-on-the-Bed.jpg
    image_path: assets/images/gallery-1/Banjo-on-the-Bed-th.jpg
    alt: "Banjo on the Bed"
---

{% for post in site.portfolio %}
  {% include archive-single.html %}  
{% endfor %}

{% include gallery caption="This is a Kitty Gallery." %}