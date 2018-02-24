---
layout: single
title: "Letter Avatar"
permalink: /2018-02-22-post-Letter-Avatar/
date: 2018-02-22 16:16:01 -0600
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
toc_label: "Page Contents"
toc_icon: "file"

read_time: true
comments: true
share: true
related: true

excerpt: "Many of us got really tired of the Gravatar Service being down or slow and having multiple server calls to download the Gravatar. 
Alot of people do not even know about gravatar and your get a generic image for the User Avatar."
header:
  image: /assets/images/letter-avatar-header.png
  teaser: /assets/images/letter-avatar-header.png
gallery:
  - url: /assets/images/gravatar-icon-600.jpg
    image_path: /assets/images/gravatar-icon-225.jpg
    alt: "Gravtar Image"
  - url: /assets/images/avatar-600.png
    image_path: /assets/images/avatar-225.png
    alt: "Gravtar Generic Image"
  - url: /assets/images/myLetterAvatar-600.png
    image_path: /assets/images/myLetterAvatar-225.png
    alt: "Letter Avatar"
---

## Letter Avatar

How to easily create Letter Avatars for your comments in Minimal Mistakes. This coversion is a work in progress as I am just learning liquid.

### Gihub code By Lee Crossly

Gihub Gist, by [Lee Crossly](https://gist.github.com/leecrossley/6027780)

Avatar Generator from - Commenter name as - (first name and surname) as input and a canvas element as output using the initials from the name and a background colour (based on the first name & surname first letter). 

The background colours are from from [Flat Ui Colors](http://flatuicolors.com/) Now with retina support.

### The Canvas html snippet. 

```python
<canvas id="user-icon" width="60" height="60"></canvas>
```

### The Code before conversion

```python
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

```python
<img itemprop="image" avatar="@comment.Author" alt="@comment.Author" class="comments-media-object" />
```


### My Script Changes for MVC

```python
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

## Liquid Conversion

Lets take a look a Minimal Mistakes post on Staticman Comments, at [Improving Jekyll Staticman Comments](https://mademistakes.com/articles/improving-jekyll-static-comments/)

The comments include form in: _includes/comment.html, lines 

```python
<img src="/assets/images/avatar-60.png" srcset="/assets/images/avatar-120.png 2x" alt="{{ include.name | escape }}">
```

### Image changes

Modifying the Image link From:
```ruby
<img src="/assets/images/avatar-60.png" srcset="/assets/images/avatar-120.png 2x; 
```

I am sure this will work just fine in Minimal Mistakes - Staticman Comments form.

Changed To: Letter Avatar
```ruby
<img class="user-icon" avatar="{{ include.name | escape }}" alt="{{ include.name | escape }}">
```

I Modified to the file at _ includes/comment.html

To include avatar="{{ include.name | escape }}" 

Removed src="..." and srcset="..." 

As in the above example.

### Modify _main.js_

Adding the modified MVC .js to my _main.js and add a avatar.scss file for width and height.

{% include gallery caption="Gravtar, Avatar, Letter Avatar." %}
 
## Pre implementation comments.

If your reading this before I get Staticman working. I need to see if this is really works or not.
Use disqus below to comment or add ideas to this conception.