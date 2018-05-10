---
title: "Donate"
permalink: /donate/
excerpt: "Donate to feed stray cats or me."
no_menu_item: true
sitemap: false
sitemap: false
author_profile: true
adds: false
sidenav: true
layout: single
name: "Donate"

image: /assets/images/cart/sponser-us.png
layout: productdetails
header:
  image: /assets/images/cart/sponser-us.png
  teaser: /assets/images/cart/sponser-us-320.png
---

## About this donation page

Although the primary function of this donation page is to get help feeding stray cats, some tips for my web design and code, would be cool. Thank you, you are the best!

{% for product in site.products %}
  {% include product.html %}
{% endfor %}