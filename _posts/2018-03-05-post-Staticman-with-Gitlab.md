---
layout: single
author_profile: true
read_time: true
comments: true
share: true
related: true
title: Staticman with Gitlab
date: 2018-03-05 16:16:01 -0600
last_modified_at: 2018-03-06T12:42:38-04:00
search: true
author: Donald Boulton

tags:
  - Staticman
  - Github
  - Gitlab

category:
  - Staticman

toc: true
toc_label: "Contents"
toc_icon: "file"

excerpt: "Use Staticman push to Gitlab"
header:
  image: /assets/images/pages/staticman-github-gitlab.png
  teaser: /assets/images/pages/staticman-github-gitlab.png
 
read_time: true
comments: true
share: true
related: true
---

{% include octo-arm.html %}

## Use staticman For Gitlab Comments

Taken From [Zong Ren's blog](https://zongren.me/2016/09/23/use-staticman-in-gitlab-pages/#%E5%88%9B%E5%BB%BAstaticmanapp)

1. Create a staticmanapp
2. Create a trigger
3. Create a webhook
Staticman is a very handy static blog commenting implementation, but unfortunately only supports github and jekyll, but using staticman on gitlab pages is possible by using the github webhooks and gitlab triggers features.

### Create staticmanapp

The first step is to create staticman app, according to the official document operation, you can also view the repository I created .

### Create a trigger

Select in the gitlab project menu Triggers > Add triggerand copy the link below
```curl
curl -X POST \
     -F token=TOKEN \
     -F ref=REF_NAME \
     https://gitlab.com/api/v3/projects/1400576/trigger/builds
```
### Create a webhook

Click on the github project Settings>Webhooks>Add webhook, Payload URL fill in the link above and add parameters, for example
```html
https://gitlab.com/api/v3/projects/1400576/trigger/builds?token=5e763611ads5fb89598220414e334b&ref=master
```
Notice that the token is replaced