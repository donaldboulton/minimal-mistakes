---
layout: gallery
title: MY Cats
no_menu_item: true # required only for this example website because of menu construction
support: [jquery, gallery]
---

My kitty cats past and present. House cats and my past cats I take care of every day and have since 1999.
Its my passion as I love kitty cats.

House cats:

{% include gallery-layout.html gallery=site.data.galleries.cat-gallery-1 id_number=1 %}

Past Cats:

{% include gallery-layout.html gallery=site.data.galleries.cat-gallery-2 id_number=2 %}