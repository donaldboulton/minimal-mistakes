---
layout: single
title: "Sitemap"
permalink: /sitemap/
toc: false
sidenav: true
adds: true
reviews: true
excerpt: "Sitemap with Post by Catagories, by Tags and by Years"

image:
  cover: true
  path: &image /assets/images/pages/sitemap.png
  feature: *image
  thumbnail: /assets/images/pages/sitemap-320.png
header:
  image: /assets/images/pages/sitemap-1200.png
  teaser: /assets/images/pages/sitemap-320.png
  excerpt: "Sitemap of Posts"
---

{% include octo-arm.html %}

Sitemap with Posts by Catagories, by Tags and by Years.

For your viewing and or all robots out there. Here is an [XML version]({{ "sitemap.xml" | absolute_url }}) and a [Atom Version]({{ "atom.xml" | absolute_url }}) or a [Json Feed]({{ "feed.json" | absolute_url }}) with a listing of all Pages and Posts, available for digesting as well.

# Posts

{% include posts-all.html %}

{% include post_pagination.html %}