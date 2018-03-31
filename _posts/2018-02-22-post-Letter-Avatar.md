---
layout: single
title: "Letter Avatar"
permalink: /2018-02-22-post-Letter-Avatar/
date: 2018-02-22 16:16:01 -0600
last_modified_at: 2018-02-28T12:42:38-04:00
search: true
author: Donald Boulton
author_profile: true
tags:
  - Gravatar
  - Letter Avatar
  - Staticman
  - MMistakes
category:
  - Programing

toc: true
toc_label: "Contents"

read_time: true
comments: true
share: true
related: true

excerpt: "Many of us got really tired of the Gravatar Service being down or slow and having multiple server calls to download the Gravatar. 
Alot of people do not even know about gravatar and your get a generic image for the User Avatar."
header:
  image: /assets/images/pages/letter-avatar-header.png
  teaser: /assets/images/pages/letter-avatar-header.png

gallery:
  - url: /assets/images/pages/gravatar-icon-600.jpeg
    image_path: /assets/images/pages/gravatar-icon-256.jpg
    alt: "Gravtar Image"
  - url: /assets/images/pages/avatar-600.png
    image_path: /assets/images/pages/avatar-225.png
    alt: "Gravtar Generic Image"
  - url: /assets/images/pages/myLetterAvatar-600.png
    image_path: /assets/images/pages/myLetterAvatar-225.png
    alt: "Letter Avatar"

---

{% include octo-arm.html %}

## Letter Avatar

How to easily create Letter Avatars for your comments in Minimal Mistakes. This coversion is a work in progress as I am just learning liquid.

### Gihub code as a Gihub Gist, by [Lee Crossly](https://gist.github.com/leecrossley/6027780)

Avatar Generator from - Commenter name as - (first name and surname) as input and a canvas element as output using the initials from the name and a background colour (based on the first name & surname first letter). 

The background colours are from from [Flat Ui Colors](http://flatuicolors.com/) Now with retina support.

### The Canvas html snippet. 

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
        },

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

## Liquid Conversion

Lets take a look a Minimal Mistakes post on Staticman Comments, at [Improving Jekyll Staticman Comments](https://mademistakes.com/articles/improving-jekyll-static-comments/)

The comments include form in: _includes/comment.html, line 8

```html
8 <img src="/assets/images/avatar-60.png" srcset="/assets/images/avatar-120.png 2x" alt="{{ include.name | escape }}">
```

### Image changes

Modifying the Image link From:
```html
8 <img src="/assets/images/avatar-60.png" srcset="/assets/images/avatar-120.png 2x; 
```
Changed To: Letter Avatar

Removed src="..." and srcset="..." 

Added

```html
avatar="include.name | escape" class="avatar" alt="include.name | escape"
```
Then the link to the Gravatar image you have to change for yur own genertic image, orLetter Avatar generated.

As discribed at [Stack Overflow](https://stackoverflow.com/questions/2683803/gravatar-is-there-a-default-image)

I will Change Line 6

```html
<img src="https://www.gravatar.com/avatar/{{ include.email }}?d=mm&s=60" srcset="https://www.gravatar.com/avatar/{{ include.email }}?d=mm&s=120 2x" alt="{{ include.name | escape }}">
```
From:
```html
?d=mm&s=60 
and also 
?d=mm&s=120 2x
```
To nothing for fallback image in gravatar links, then it falls back to 

```html
    <img src="https://www.gravatar.com/avatar/{{ include.email }}?d=avatar" srcset="https://www.gravatar.com/avatar/{{ include.email }}?d=avatar=120 2x" alt="{{ include.name | escape }}">
% else %
    <img class="avatar" avatar="{{ include.name | escape }}" alt="{{ include.name | escape }}" />
% endif %
```

### Add avatar.js

Adding the modified MVC Letter Avatar.js to my /assets/js/avatar.js.

Link to it in scripts.html

```html
<script src="{{ '/assets/js/avatar.js' | absolute_url }}"></script>
```
Or in a mardown page as.

```html
footer:
  - /assets/js/avatar.js
```
### Adding Scripts Site wide in _config.yaml

To add scripts to the <head> or closing </body> elements by adding paths to following arrays in _config.yml.

```yaml
head_scripts:
  - https://code.jquery.com/jquery-3.3.1.min.js
  - /assets/js/your-custom-head-script.js

footer_scripts:
  - /assets/js/your-custom-footer-script.js
```

Then create avatar.scss and register the avatar.scss file in minimal-mistakes.scss, for width, height and rounded images.

{% include gallery caption="Gravtar, Avatar, Letter Avatar." %}
 
## Pre implementation comments.

If your reading this before I get Staticman working. I need to see if this is really works or not.
Use disqus below to comment or add ideas to this conception.