---
layout: single
author_profile: true
permalink: /posts/2018-02-26-post-Staticman-with-Gitlab/
read_time: true
comments: true
share: true
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
image:
  cover: true
  path: &image /assets/images/pages/staticman-github-gitlab.png
  feature: *image
  thumbnail: /assets/images/pages/staticman-github-gitlab-320.png
header:
  image: /assets/images/pages/staticman-github-gitlab.png
  teaser: /assets/images/pages/staticman-github-gitlab-320.png
 
read_time: true
comments: true
share: true
related: true
adds: true
---

{% include octo-arm.html %}
{% include page-intro.html %}

# Use webhooks

Taken From [Zong Ren's blog](https://zongren.me/2016/09/23/use-staticman-in-gitlab-pages/#%E5%88%9B%E5%BB%BAstaticmanapp)

1. Create a staticmanapp
2. Create a trigger
3. Create a webhook

Staticman is a very handy static blog commenting implementation, but unfortunately only supports github and jekyll, but using staticman on gitlab pages is possible by using the github webhooks and gitlab triggers features.

## Create staticmanapp

The first step is to create staticman app, according to the official document operation, you can also view the repository I created.

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

### asarkar comment

The target of comment form is https://api.staticman.net/v2/entry/zongren/comment/master/,so there will be not https issues.
I only maintain my comments on github,and whenever there is a comment pushed to github repository by staticmanapp,it triggers gitlab to run page runner
The key is gitlab clones from github comment repository

```yaml
  - npm install hexo-cli -g -s
  - npm install -s
  - git clone "https://github.com/zongren/comment.git"
  - mv comment/_data source/
  - hexo clean --silent
  - hexo algolia --silent true --vscode false
  - hexo deploy --silent --vscode false
and uses them in theme file
```

### And uses them in theme file

```yaml

for(i in site.data){
    var nameArray = i.split('/');
        var postName = nameArray[0];
            if(postName == slug){
               site.data[i]["fileName"] = nameArray[1];
                  commentArray.push(site.data[i]);
        }
}

````

## Staticman Issues

Or from: [Staticman issue 22](https://github.com/eduardoboucas/staticman/issues/22)

zburgermeiszter commented on Feb 28, 2017
For this we should add the git provider domain to the request as a path element.
so it would look like.

```html
/v3/entry/<github|gitlab>/<vendor>/<repo>/<branch>/<configKey>
```

But because one can have it's own GitLab on it's own domain, we should also handle that.
And GitLab Pages are now available on GitLab Community Edition

Required Node libs for future reference:
gitlab
gitlab-webhook