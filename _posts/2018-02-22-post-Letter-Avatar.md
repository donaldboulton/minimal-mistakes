---
layout: single
title: "Letter Avatar"
permalink: 2018-02-22-post-Letter-Avatar.html
date: 2018-02-22 16:16:01 -0600
last_modified_at: 2018-06-06T12:42:38-04:00
search: true
author: Donald Boulton
author_profile: true
sidenav: true
reviews: true
adds: true
cookies: true
footnotes: true
tags:
  - Gravatar
  - Letter Avatar
  - Staticman
  - Jekyll
category:
  - Programing
locations:
  - OKC Oklahoma
  - Rockwell Rv Park
toc: true
toc_label: "Page Contents"
read_time: true
comments: true
share: false
web-intents: true
tweet_id: 145116818707714048
social-share: twitter --twitter-hashtags facebook
related: true
anchor: true
excerpt: "Many of us got really tired of the Gravatar Service being down or slow and having multiple server calls to download the Gravatar. 
Alot of people do not even know about gravatar and you get a generic image for the User Avatar."
image:
  cover: true
  path: &image /assets/images/pages/letter-avatar-header.png
  feature: *image
  thumbnail: /assets/images/pages/letter-avatar-single-letter-320.png
header:
  image: /assets/images/pages/letter-avatar-header-1200.png
  teaser: /assets/images/pages/letter-avatar-header-320.png        
support: [adds, cookies]
product: letter-avatar 
slug: letter-avatar
github_editme_path: donaldboulton/DWB/blob/gh-pages/_posts/2018-02-22-post-Letter-Avatar.md
lcb: "{"
---

{% include octo-arm.html %}

{% include page-intro.html %}

How to easily create Letter Avatars for your comments in Minimal Mistakes. This coversion is a work in progress as I am just learning liquid.

# Letter Avatar Origional gist

## Gihub code as a Gihub Gist, by [Lee Crossly](https://gist.github.com/leecrossley/6027780)

Avatar Generator from - Commenter name [^names] as input and a canvas element as output using the initials from the name and a background colour.

[^names]: based on the first name & surname first letter.

The background colours are from from [Flat Ui Colors](http://flatuicolors.com/) Now with retina support.

### The Canvas html snippet

```html
<canvas id="user-icon" width="60" height="60"></canvas>
```

### The Code before conversion

```javascript
var colours = ["#1abc9c", "#2ecc71", "#3498db", "#9b59b6", "#34495e", "#16a085", "#27ae60", "#2980b9", "#8e44ad", "#2c3e50", "#f1c40f", "#e67e22", "#e74c3c", "#ecf0f1", "#95a5a6", "#f39c12", "#d35400", "#c0392b", "#bdc3c7", "#7f8c8d"];

var name = "Lee Crossley",
    nameSplit = name.split(" "),
    initials = nameSplit[0].charAt(0).toUpperCase() + nameSplit[1].charAt(0).toUpperCase();

var charIndex = initials.charCodeAt(0) - 64,
    colourIndex = charIndex % 20;

var canvas = document.getElementById("user-icon");
var context = canvas.getContext("2d");

var canvasWidth = $(canvas).attr("width"),
    canvasHeight = $(canvas).attr("height"),
    canvasCssWidth = canvasWidth,
    canvasCssHeight = canvasHeight;

if (window.devicePixelRatio) {
    $(canvas).attr("width", canvasWidth * window.devicePixelRatio);
    $(canvas).attr("height", canvasHeight * window.devicePixelRatio);
    $(canvas).css("width", canvasCssWidth);
    $(canvas).css("height", canvasCssHeight);
    context.scale(window.devicePixelRatio, window.devicePixelRatio);
}

context.fillStyle = colours[colourIndex - 1];
context.fillRect (0, 0, canvas.width, canvas.height);
context.font = "128px Arial";
context.textAlign = "center";
context.fillStyle = "#FFF";
context.fillText(initials, canvasCssWidth / 2, canvasCssHeight / 1.5);
```

## MVC Implimentation

I Still Use Asp.Net Core2 for Mansbooks and use letter avatar with the MVC changes.

### Image tag changes for MVC

```html
<img itemprop="image" avatar="@comment.Author" alt="@comment.Author" class="comments-media-object" />
```

### My Script Changes for MVC

```javascript
    (function (w, d) {
        function LetterAvatar(name, size) {

            name = name || '';
            size = size || 60;

            var colours = [
                    "#1abc9c", "#2ecc71", "#3498db", "#9b59b6", "#34495e", "#16a085", "#27ae60", "#2980b9", "#8e44ad", "#2c3e50",
                    "#f1c40f", "#e67e22", "#e74c3c", "#ecf0f1", "#95a5a6", "#f39c12", "#d35400", "#c0392b", "#bdc3c7", "#7f8c8d"
            ],

                nameSplit = String(name).toUpperCase().split(' '),
                initials, charIndex, colourIndex, canvas, context, dataURI;


            if (nameSplit.length == 1) {
                initials = nameSplit[0] ? nameSplit[0].charAt(0) : '?';
            } else {
                initials = nameSplit[0].charAt(0) + nameSplit[1].charAt(0);
            }

            if (w.devicePixelRatio) {
                size = (size * w.devicePixelRatio);
            }

            charIndex = (initials == '?' ? 72 : initials.charCodeAt(0)) - 64;
            colourIndex = charIndex % 20;
            canvas = d.createElement('canvas');
            canvas.width = size;
            canvas.height = size;
            context = canvas.getContext("2d");

            context.fillStyle = colours[colourIndex - 1];
            context.fillRect(0, 0, canvas.width, canvas.height);
            context.font = Math.round(canvas.width / 2) + "px Arial";
            context.textAlign = "center";
            context.fillStyle = "#FFF";
            context.fillText(initials, size / 2, size / 1.5);

            dataURI = canvas.toDataURL();
            canvas = null;

            return dataURI;
        }

        LetterAvatar.transform = function () {

            Array.prototype.forEach.call(d.querySelectorAll('img[avatar]'), function (img, name) {
                name = img.getAttribute('avatar');
                img.src = LetterAvatar(name, img.getAttribute('width'));
                img.removeAttribute('avatar');
                img.setAttribute('alt', name);
            });
        };

        // AMD support
        if (typeof define === 'function' && define.amd) {

            define(function () { return LetterAvatar; });

            // CommonJS and Node.js module support.
        } else if (typeof exports !== 'undefined') {

            // Support Node.js specific `module.exports` (which can be a function)
            if (typeof module != 'undefined' && module.exports) {
                exports = module.exports = LetterAvatar;
            }

            // But always support CommonJS module 1.1.1 spec (`exports` cannot be a function)
            exports.LetterAvatar = LetterAvatar;

        } else {

            window.LetterAvatar = LetterAvatar;

            d.addEventListener('DOMContentLoaded', function (event) {
                LetterAvatar.transform();
            });
        }

    })(window, document);
```

## Jekyll Liquid Conversion

Super simple and added to my reviews [reviews.html](https://github.com/donaldboulton/DWB/blob/gh-pages/_includes/reviews.html)

Added to my reviews layout with just a link to avatar="" + reviewData.name, or if your using comments its commentsData.name

```html
<div itemprop="author" itemscope itemtype="http://schema.org/Person">
    <img itemprop="image" avatar="{{ page.lcb }}{ reviewData.name }}" alt=" {{ page.lcb }}{ reviewData.name }}" class="review-avatar-image text-left" />
    &nbsp;<span itemprop="name">{{ page.lcb }}{ reviewData.name }}</span>
</div>
```

## Add letter-avatar.js

Adding the modified MVC [letter-avatar.js](https://raw.githubusercontent.com/donaldboulton/DWB/gh-pages/assets/js/vendor/letter-avatar/letter-avatar.js) to my /assets/js/vendor/letter-avatar/letter-avatar.js.

Link to it in scripts.html

```html
<script src="{{ page.lcb }}{ '/assets/js/vendor/letter-avatar/letter-avatar.js' | absolute_url }}"></script>
```

Or in a pages markdown frontmatter as.

```html
footer:
  - /assets/js/vendor/letter-avatar/letter-avatar.js
```

### Adding Scripts Site wide in _config.yaml

To add scripts to the head or closing </body> elements by adding paths to following arrays in _config.yml.

```yaml
head_scripts:
  - https://code.jquery.com/jquery-3.2.1.min.js
  - /assets/js/your-custom-head-script.js

footer_scripts:
  - /assets/js/your-custom-footer-script.js
```

Then create avatar.scss and register the avatar.scss file in minimal-mistakes.scss, for width, height and rounded images.