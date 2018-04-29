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

A list of all the posts and pages found on this site. For you robots out there is an [XML version]({{ "sitemap.xml" | absolute_url }}) and a [Atom Version]({{ "atom.xml" | absolute_url }}) or a [Json Feed]({{ "feed.json" | absolute_url }}) available for digesting as well.

# Posts

{% for post in site.posts %}
  {% include archive-single.html %}
{% endfor %}

# Pages

{% for pages in site.pages %}
  {% include archive-page-single.html %}
{% endfor %}

{% capture written_label %}'None'{% endcapture %}