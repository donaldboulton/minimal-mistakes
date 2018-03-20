---
title: Sitemap
permalink: "/sitemap/"
author_profile: true
toc: true
toc_label: Page Contents
toc_icon: file
---

A list of all the posts and pages found on the site. For you robots out there is an [XML version]({{ "sitemap.xml" | absolute_url }}) and a [Atom Version]({{ "atom.xml" | absolute_url }}) available for digesting as well.


<h2>Posts</h2>
{% for post in site.posts %}
{% include archive-single.html %}
{% endfor %}

<h2>Pages</h2>
{% for post in site.pages %}
{% include archive-single.html %}
{% endfor %}

{% capture written_label %}'None'{% endcapture %}

{% for collection in site.collections %}
{% unless collection.output == false or collection.label == "posts" %}
{% capture label %}{{ collection.label }}{% endcapture %}
{% if label != written_label %}
<h2>{{ label }}</h2>
{% capture written_label %}{{ label }}{% endcapture %}
{% endif %}
{% endunless %}
{% for post in collection.docs %}
{% unless collection.output == false or collection.label == "posts" %}
{% include archive-single.html %}
{% endunless %}
{% endfor %}
{% endfor %}
