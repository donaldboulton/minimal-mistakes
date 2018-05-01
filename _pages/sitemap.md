---
layout: single
title: "Sitemap"
permalink: /sitemap/
toc: false
adds: true
reviews: true
excerpt: "Using just links in Asp.NET Core 2 add like included below  @Context.Request.GetDisplayUrl(), to get the url of the page your sharing. View the source of this repo to see how to do it in Jekyll"

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
  {% include archive-single.html %}
{% endfor %}

{% for post in site.posts %}
  {% include tag-archive.html %}
{% endfor %}

{% capture written_label %}'None'{% endcapture %}