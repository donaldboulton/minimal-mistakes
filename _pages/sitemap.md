---
layout: single
title: "Sitemap"
permalink: /sitemap/
toc: false
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
---

A Sitemap Listing of all posts.

For a list of all posts and pages found on this site. Or for your viewing and or all robots out there. Here is an [XML version]({{ "sitemap.xml" | absolute_url }}) and a [Atom Version]({{ "atom.xml" | absolute_url }}) or a [Json Feed]({{ "feed.json" | absolute_url }}) available for digesting as well.

# Posts

{% for post in site.posts %}
  {% include posts-all.html %}
{% endfor %}

{% include tag-archive.html %}

{% capture written_label %}'None'{% endcapture %}