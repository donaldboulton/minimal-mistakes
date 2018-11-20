---
layout: single
author_profile: true
title: User Profile
permalink: /userProfile.html
tags:
  - Home
  - Donald Boulton
email: donaldboulton@gmail.com
adds: true
toc: false
chat: true
sidenav: true
reviews: false
comments: false
cookies: true
notifications: false

image:
  cover: true
  path: &image /assets/images/support.jpg
  feature: *image
  thumbnail: /assets/images/support-320.jpg

header:
  overlay_image: /assets/images/support.jpg
  cta_label: "Posts"
  cta_url: "/categories/#posts"
  caption: Lost In A Digital Box
excerpt: 'User Profile and Subscriptions Page.<br /> <small><a title="Don Boulton" href="https://donboulton.com">Jekyll Node Netlify CMS & React Webpack Identity Build</a></small><br /><br /> {::nomarkdown}<iframe title="Github" style="display: inline-block;" src="https://ghbtns.com/github-btn.html?user=donaldboulton&repo=DWB&type=star&count=true&size=large" frameborder="0" scrolling="0" width="160px" height="30px"></iframe> <iframe title="Fork" style="display: inline-block;" src="https://ghbtns.com/github-btn.html?user=donaldboulton&repo=DWB&type=fork&count=true&size=large" frameborder="0" scrolling="0" width="158px" height="30px"></iframe>{:/nomarkdown}'
support: [adds, cookies, validate]
folder: /
slug: userProfile
product: userProfile
github_editme_path: donaldboulton/DWB/blob/gh-pages/_pages/userProfile.html
---

# User Profile Admin

{% include octo-arm.html %}

Your User Profile will be saved as a Netlify form, as this Sites User's data.

Exported to netlify as cvs, zapped to google sheets then zapped to my site and saved as json in Jekyll data directory.

JWT authentication tokens automatically added.

{% include octo-arm.html %}

{% include userprofile.html %}
