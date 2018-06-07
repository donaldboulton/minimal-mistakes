---
title: No Spambots
name: No Spambots
layout: single
read_time: true
comments: true
share: true
toc: true
search: true
author: Donald Boulton
author_profile: true
adds: true
cookies: true
reviews: true
date: 2018-06-06 16:16:01 -0600
last_modified_at: 2018-06-06T10:42:38-04:00

tags:
  - Jekyll
  - Spam
category:
  - Jekyll
permalink: 2018-06-06-post-No-Spambots.html
image:
  cover: true
  path: &image /assets/images/pages/stop-spam.png
  feature: *image
  thumbnail: /assets/images/pages/stop-spam-320.jpg
header:
  image: /assets/images/pages/stop-spam.jpg
  teaser: /assets/images/pages/stop-spam-320.jpg
locations:
  - OKC, Oklahoma

excerpt: "Several times in the past I have had hidden forms though slidng sidebars and hidden forms.

I did not click to the fact that thoes forms did not ever get spamed on comments, except by users that were jerks or malicious."

support: [adds, cookies]
folder: _posts
product: reviews-for-jekyll
slug: reviews-for-jekyll
github_editme_path: donaldboulton/DWB/blob/gh-pages/_posts/2018-05-27-post-reviews-for-jekyll.md
lcb: "{"
---

{% include octo-arm.html %}

{% include page-intro.html %}

# Defeat Spambots with hidden forms

Several times in the past I have had hidden forms though slidng sidebars with a hidden form.
What are spambots [Stack Exchange](https://webmasters.stackexchange.com/questions/3588/how-do-spambots-work/3799?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa)

I did not click to the fact that thoes forms did not ever get spamed, only by comments by users that were jerks or malicious.

Never noticed how effective the forms that were under a class of hidden did not get filled out by spam bots.

I have a comment form and a reviews form and I got tired of looking at them back to back so I hid the comments form with sass. And added a button and only sass to open the form. Previous to this my comments form was getting Russan Spam every hour. I only had recaptcha on the reviews form. I could not find a good no .js error free way of adding recaptcha on two forms.

The next day no spam and I started reflecting on the past sites with ASP.Net DNN, MVC, Orchard CMS and Core2 which I had forms that were hidden and they got no spam.

Spam bot's are smart enought not to fill our honey pots and get around other hidden fields, so lets play along and hide the article or div for your form.

My comments form looks like a hidden field now to the spam bots, and they bypass the Reviews form which has recaptcha protecting it, and no spam on either form.

## Implementation

Taken from [w3schools.com](https://www.w3schools.com/howto/howto_js_collapsible.asp)

### The button to open the form

```html
<button class="collapsible btn btn--light-outline">Open Comment Form</button>
```

Add a class of content to a div surrounding your form.

```html
<div class="content">
```

### The Css

Some css to open and close the form

```css
/* Style the button that is used to open and close the collapsible content */
.collapsible {
  background-color: #eee;
  color: #444;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 15px;
}

/* Add a background color to the button if it is clicked on (add the .active class with JS), and when you move the mouse over it (hover) */
.active, .collapsible:hover {
  background-color: #ccc;
}

/* Style the collapsible content. Note: hidden by default */
.content {
  padding: 0 18px;
  display: none;
  overflow: hidden;
  background-color: #f1f1f1;
}

/* Add some Icons */
.collapsible:after {
    content: '\02795'; /* Unicode character for "plus" sign (+) */
    font-size: 13px;
    color: white;
    float: right;
    margin-left: 5px;
}

.active:after {
    content: "\2796"; /* Unicode character for "minus" sign (-) */
}
```

### Animated Collapsible (Slide Down)

To make an animated collapsible, add max-height: 0, overflow: hidden and a transition for the max-height property, to the panel class.

Then, use JavaScript to slide down the content by setting a calculated max-height, depending on the panel's height on different screen sizes:

```css
.content {
    padding: 0 18px;
    background-color: white;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.2s ease-out;
}
```

### The javascript

```javascript
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
```