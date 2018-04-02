---
layout: gallery
title: San Francisco
no_menu_item: true # required only for this example website because of menu construction
support: [jquery, gallery]
---

Lived in San Francisco for about a year. Lived and hung out on hippy hill in Golden Gate park, how cool!

{% for gallery in site.photography %}
  {% include archive-single.html %}  
{% endfor %}

{% include gallery-layout.html gallery=site.data.galleries.san-francisco %}
