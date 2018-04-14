---
layout: archive
title: "Sitemap"
permalink: /sitemap/
toc: true
adds: true
---

A list of all the posts and pages found on this site. For you robots out there is an [XML version]({{ "sitemap.xml" | absolute_url }}) and a [Atom Version]({{ "atom.xml" | absolute_url }}) or a [Json Feed]({{ "feed.json" | absolute_url }} available for digesting as well.

# Posts

{% for post in site.posts %}
  {% include archive-single.html %}
{% endfor %}

## Pages

{% for post in site.pages %}
  {% include archive-single.html %}
{% endfor %}

{% capture written_label %}'None'{% endcapture %}