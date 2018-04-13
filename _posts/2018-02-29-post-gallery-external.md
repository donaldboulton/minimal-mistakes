---
title: Gallerys
layout: single
redirect_to:
  - /photography/
read_time: true
comments: true
share: true
date: 2018-03-28 16:16:01 -0600
last_modified_at: 2018-03-29T12:42:38-04:00
search: true
author: false

tags:
  - Gallery
  - Cats
  - Stray Cats

category:
  - Gallerys

excerpt: "Pictures of my Kitty Cats and Travels. My Kitty Gallery has my 4 male House Cats, Past Cats and the 20 or so strays I feed every day. Computers Cats are my passion, I love kitty cats"
image:
  cover: true
  path: &image /assets/photography/cat-gallery/einstine.jpg
  feature: *image
  thumbnail: /assets/photography/cat-gallery/einstine-320.jpg
sidebar:
  - title: "My Hun Kitty"
    image: /assets/photography/old-cat-gallery/Little-Hun-th.jpg
    image_alt: "Hun Kitty"
    text: "Hun at 3 weaks"
  - title: "Responsibilities"
    text: "I take care of any kitty that comes my way."

header:
  image: /assets/photography/cat-gallery/einstine-1200.jpg
  teaser: /assets/photography/cat-gallery/einstine-320.jpg
---

{% include page-intro.html %}

# Picture Gallery

Pictures of my Kitty Cats and Travels.
Alot of old Pics taken from old slides so the quality is not so good, but still memorys reside in them.

Banjo My Black Kitty

I have my 15th Tabby cat Which is Tiger.

The Father and Son Mr. Einstein and Jr. Einstein who look and act allot alike.

Computers Cats are my passion, I love kitty cats.

This is a positioning redirect page for seo on Gallerys. All Gallery Search Terms included

{% for gallery in site.photography %}
  {% include archive-single.html %}
{% endfor %}