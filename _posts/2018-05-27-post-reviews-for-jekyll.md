---
title: Reviews for Jekyll
name: Reviews for Jekyll
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
date: 2018-05-27 16:16:01 -0600
last_modified_at: 2018-05-28T10:42:38-04:00
tags:
  - Jekyll
  - Reviews
  - Ratings
category:
  - Jekyll
permalink: 2018-05-27-post-reviews-for-jekyll.html
image:
  cover: true
  path: &image /assets/images/pages/reviews.jpg
  feature: *image
  thumbnail: /assets/images/pages/reviews-320.jpg
header:
  image: /assets/images/pages/reviews.jpg
  teaser: /assets/images/pages/reviews-320.jpg
locations:
  - OKC, Oklahoma

excerpt: "Comments Ratings, Built because I could use it for Google Positioning with correct microdata for Search Results with a page review and aggregate rating. Built Using and extending Staticman's Popcorn Github repo. This is still a work in progress so Leave a Review for any page in donboulton.com and the page aggregate rating will increase after a successfull push to my github repo, not quite finished yet learning liquid math??? The aggregate rating and review per page are working review and rate and it soon will show up as a rating on that page."

support: [adds, cookies]
product: reviews-for-jekyll
folder: _posts
product: reviews-for-jekyll
slug: reviews-for-jekyll
github_editme_path: donaldboulton/DWB/blob/gh-pages/_posts/2018-05-27-post-reviews-for-jekyll.md
lcb: "{"
---

{% include octo-arm.html %}

{% include page-intro.html %}

# Site Reviews

Reviews [Powered by Staticman](https://staticman.net) Built for the need of Micro data used for Google Search Results and Search positioning. Built Using and extending Staticman's Popcorn Github repo. This is still a work in progress so Leave a Review for any page in donboulton.com and the page aggregate rating will increase after a successfull push to my github repo. The aggregate rating and review count per page are working, review and ratings for just that page so it show up as a review rating for just that page, its simple reversed for now and not page specific so something will show up for reviews on every page my frontmatter is set to reviews: true

## Site Reviews Count & Ratings Average

Working on single page reviews that show up specific to the page, then overall site aggregate rating and review totals.

## Google Reviews

My goal is to have my Reviews-Ratings show up on Google search and increase my positioning and show a page review rating in search results, incorporated with Google Reviews.
Doing so ment perfect microdata with aggregate, "Averaged" page and site ratings, or it would be useless for my goal.

{% include figure image_path="/assets/images/pages/google-individual-reviews.png" alt="Search Results" caption="Search Results" %}
Hoping to get somthing like this on search results

## Reviews and the Web

Here are several prespectives on website reviews I found. [Advanced Web Ranking](https://www.advancedwebranking.com/blog/how-to-use-schema-markup-for-reviews/) and [Nick Pierno at Whitespark](https://whitespark.ca/blog/how-to-use-aggregate-review-schema-to-get-stars-in-the-serps/).

There is not a real good way to do this if it is not data-database javascript driven. All the internet examples are hard coded json files which work with google's structured data testing tool, but not what I want to do, I want to get the accurate user review counts and rating sum averages. I could not find any examples of doing it the Jekyll way.

## Jekyll Reviews-Anyone

I searched the internet for someone using Jekyll having a page reviews - ratings system. Most all are for Books, Movies or Products. And some I found for products were liquid and "no js" with no external content as a database. But they were built with sliders,"not stars" for ratings and per several products on a single page. And none had aggregate product ratings. So I used Staticman's Popcorn repo, basically the scss and the way he used images for the Stars Ratings without material design styling and images. I added a star.svg and star_border.svg to my icons.svg file for the stars, which needs svg4everybody.js to work.

When I make a repo for this and  I will just include or inline the svg's, not us a sprite so svg4everybody.js, will not be needed.

Unlike page or site Comments which Google nor any Search Engine gives no positioning weight to. Comments in a Website are just a page filler unless they are linked to some social media post for search enging access or linked socially. Todays site, page or product commenting should be inclusive with Twitter or other Social Providers.

## How I built Jekyll Ratings

I have not completed this reviews system. It will post throught Staticman, send me a email, give me a review-rating for that page slug and calculate the sum, "average" of all ratings on that page with a review's per page count.

What I have left to finish is overall site aggregate averaged rating and a overall review total count.

And to have the reviews of that page just show up on that page. With 0 counts and 0 rating if there are none, should be a simple elseif for that.

This is also built with products, books, or movies in mind just change the slug from products to whatever.

## The Images

The svg sprite I use for all icons in my site, ther are two types of star included font awsome as icon-ratings-star-open and icon-ratings-star-open which I chose not to use and then two I created with paint in 1999 that I have used in may site since then as star an star_border

```html
<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" style="display:none"><symbol id="icon-calendar-alt" viewBox="0 0 448 512"><path fill="currentColor" d="M436 160H12c-6.6 0-12-5.4-12-12v-36c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48v36c0 6.6-5.4 12-12 12zM12 192h424c6.6 0 12 5.4 12 12v260c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V204c0-6.6 5.4-12 12-12zm116 204c0-6.6-5.4-12-12-12H76c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-40zm0-128c0-6.6-5.4-12-12-12H76c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-40zm128 128c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-40zm0-128c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-40zm128 128c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-40zm0-128c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-40z"></path></symbol><symbol id="icon-comments-alt" viewBox="0 0 576 512"><path d="M416 192c0-88.4-93.1-160-208-160S0 103.6 0 192c0 34.3 14.1 65.9 38 92-13.4 30.2-35.5 54.2-35.8 54.5-2.2 2.3-2.8 5.7-1.5 8.7S4.8 352 8 352c36.6 0 66.9-12.3 88.7-25 32.2 15.7 70.3 25 111.3 25 114.9 0 208-71.6 208-160zm122 220c23.9-26 38-57.7 38-92 0-66.9-53.5-124.2-129.3-148.1.9 6.6 1.3 13.3 1.3 20.1 0 105.9-107.7 192-240 192-10.8 0-21.3-.8-31.7-1.9C207.8 439.6 281.8 480 368 480c41 0 79.1-9.2 111.3-25 21.8 12.7 52.1 25 88.7 25 3.2 0 6.1-1.9 7.3-4.8 1.3-2.9.7-6.3-1.5-8.7-.3-.3-22.4-24.2-35.8-54.5z"></path></symbol><symbol id="icon-download" viewBox="0 0 16 16"><path d="M15.4 4.9C13.7.8 9-1.1 4.9.6S-1.1 7 .6 11.1s6.4 6 10.5 4.3c3-1.2 4.9-4.2 4.9-7.4 0-1.1-.2-2.1-.6-3.1zm-5.9 7.4L8 13.7l-1.4-1.4-3.5-3.5 1.4-1.4L7 9.8V2.7h2v7.1l2.5-2.5L13 8.8l-3.5 3.5z"></path></symbol><symbol id="icon-email" viewBox="313.1 3.7 16 16"><path d="M318.5 8.9c0-.2.2-.4.4-.4h4.5c.2 0 .4.2.4.4s-.2.4-.4.4h-4.5c-.3 0-.4-.2-.4-.4zm.4 2.1h4.5c.2 0 .4-.2.4-.4s-.2-.4-.4-.4h-4.5c-.2 0-.4.2-.4.4s.1.4.4.4zm3.5 1.2c0-.2-.2-.4-.4-.4h-3.1c-.2 0-.4.2-.4.4s.2.4.4.4h3.1c.2.1.4-.1.4-.4zm-1.5-8.4l-1.7 1.4c-.2.1-.2.4 0 .6s.4.2.6 0l1.4-1.2 1.4 1.2c.2.1.4.1.6 0s.1-.4 0-.6l-1.7-1.4c-.3-.1-.5-.1-.6 0zm7.8 6.2c.1.1.1.2.1.3v7.9c0 .8-.7 1.5-1.5 1.5h-12.5c-.8 0-1.5-.7-1.5-1.5v-7.9c0-.1.1-.2.1-.3l1.6-1.3c.2-.1.4-.1.6 0s.1.4 0 .6l-1.2 1 1.8 1.3v-4c0-.6.5-1.1 1.1-1.1h7.5c.6 0 1.1.5 1.1 1.1v4l1.8-1.3-1.2-1c-.2-.1-.2-.4 0-.6s.4-.2.6 0l1.6 1.3zm-11.6 2.2l4 2.8 4-2.8V7.6c0-.1-.1-.2-.2-.2h-7.5c-.1 0-.2.1-.2.2v4.6zm10.9-1l-4.7 3.4 3.4 2.6c.2.1.2.4.1.6-.1.2-.4.2-.6.1l-3.6-2.8-1.2.8c-.1.1-.3.1-.5 0l-1.2-.8-3.6 2.8c-.2.1-.4.1-.6-.1-.1-.2-.1-.4.1-.6l3.4-2.6-4.7-3.4v7.1c0 .4.3.6.6.6h12.5c.4 0 .6-.3.6-.6v-7.1z"></path></symbol><symbol id="icon-facebook" viewBox="0 0 16 16"><path d="M15.117 0H.883A.883.883 0 0 0 0 .883v14.234c0 .488.395.883.883.883h7.663V9.804H6.46V7.39h2.086V5.607c0-2.066 1.262-3.19 3.106-3.19.883 0 1.642.064 1.863.094v2.16h-1.28c-1 0-1.195.48-1.195 1.18v1.54h2.39l-.31 2.42h-2.08V16h4.077a.883.883 0 0 0 .883-.883V.883A.883.883 0 0 0 15.117 0" fill-rule="nonzero"></path></symbol><symbol id="icon-folder-open" viewBox="0 0 576 512"><path d="M527.943 224H480v-48c0-26.51-21.49-48-48-48H272l-64-64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h400a48.001 48.001 0 0 0 40.704-22.56l79.942-128c19.948-31.917-3.038-73.44-40.703-73.44zM54 112h134.118l64 64H426a6 6 0 0 1 6 6v42H152a48 48 0 0 0-41.098 23.202L48 351.449V117.993A5.993 5.993 0 0 1 54 112zm394 288H72l77.234-128H528l-80 128z"></path></symbol><symbol id="icon-github" viewBox="0 0 16 16"><path d="M8 0a8 8 0 0 0-8 8 8 8 0 0 0 5.47 7.59c.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.09-.202-.36-1.015.07-2.117 0 0 .67-.215 2.2.82a7.67 7.67 0 0 1 2-.27 7.67 7.67 0 0 1 2 .27c1.52-1.035 2.19-.82 2.19-.82.43 1.102.16 1.915.08 2.117a3.1 3.1 0 0 1 .82 2.147c0 3.073-1.87 3.75-3.65 3.947.28.24.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.14.46.55.38A7.972 7.972 0 0 0 16 8a8 8 0 0 0-8-8"></path></symbol><symbol id="icon-loading" viewBox="149.8 37.8 499.818 525"><path d="M557.8 187.8c13.8 0 24.601-10.8 24.601-24.6S571.6 138.6 557.8 138.6s-24.6 10.8-24.6 24.6c0 13.2 10.8 24.6 24.6 24.6zm61.2 90.6c-16.8 0-30.6 13.8-30.6 30.6s13.8 30.6 30.6 30.6 30.6-13.8 30.6-30.6c.6-16.8-13.2-30.6-30.6-30.6zm-61.2 145.2c-20.399 0-36.6 16.2-36.6 36.601 0 20.399 16.2 36.6 36.6 36.6 20.4 0 36.601-16.2 36.601-36.6C595 439.8 578.2 423.6 557.8 423.6zM409 476.4c-24 0-43.2 19.199-43.2 43.199s19.2 43.2 43.2 43.2 43.2-19.2 43.2-43.2S433 476.4 409 476.4zM260.8 411c-27 0-49.2 22.2-49.2 49.2s22.2 49.2 49.2 49.2 49.2-22.2 49.2-49.2-22.2-49.2-49.2-49.2zm-10.2-102c0-27.6-22.8-50.4-50.4-50.4-27.6 0-50.4 22.8-50.4 50.4 0 27.6 22.8 50.4 50.4 50.4 27.6 0 50.4-22.2 50.4-50.4zm10.2-199.8c-30 0-54 24-54 54s24 54 54 54 54-24 54-54-24.6-54-54-54zM409 37.8c-35.4 0-63.6 28.8-63.6 63.6S374.2 165 409 165s63.6-28.8 63.6-63.6-28.2-63.6-63.6-63.6z"></path></symbol><symbol id="icon-reply" viewBox="0 0 16 16"><path d="M11.6 12.8l-1-1 2.7-2.7H5.5C.2 9.1 0 3.9 0 3.7v-.5h1.4v.5c0 .2 0 4.1 4.1 4.1h7.8L10.6 5l1-1L16 8.4l-4.4 4.4z"></path></symbol><symbol id="icon-rss" viewBox="0 0 16 16"><path d="M12.8 16C12.8 8.978 7.022 3.2 0 3.2V0c8.777 0 16 7.223 16 16h-3.2zM2.194 11.61c1.21 0 2.195.985 2.195 2.196 0 1.21-.99 2.194-2.2 2.194A2.192 2.192 0 0 1 0 13.806c0-1.21.983-2.195 2.194-2.195zM10.606 16h-3.11c0-4.113-3.383-7.497-7.496-7.497v-3.11c5.818 0 10.606 4.79 10.606 10.607z"></path></symbol><symbol id="icon-stopwatch" viewBox="15 309.7 16 16"><path d="M23.9 315.1v3.6c0 .5-.4.9-.9.9s-.9-.4-.9-.9v-3.6h1.8z"/><path d="M30.1 317.7c.5 3.9-2.3 7.5-6.2 7.9-3.9.5-7.5-2.3-7.9-6.2-.5-3.9 2.3-7.5 6.2-7.9v-1.8H24v1.8c1.1.1 2.7.7 3.5 1.4l1.3-1.3 1.3 1.3-1.3 1.3c.5.9 1.2 2.5 1.3 3.5zm-1.8.9c0-2.9-2.4-5.3-5.3-5.3s-5.3 2.4-5.3 5.3 2.4 5.3 5.3 5.3 5.3-2.3 5.3-5.3z"></path></symbol><symbol id="icon-twitter" viewBox="0 0 16 16"><path d="M16 3.038a6.62 6.62 0 0 1-1.885.517 3.299 3.299 0 0 0 1.443-1.816c-.634.37-1.337.64-2.085.79a3.282 3.282 0 0 0-5.593 2.99 9.307 9.307 0 0 1-6.766-3.42A3.222 3.222 0 0 0 .67 3.75c0 1.14.58 2.143 1.46 2.732a3.278 3.278 0 0 1-1.487-.41v.04c0 1.59 1.13 2.918 2.633 3.22a3.336 3.336 0 0 1-1.475.056 3.29 3.29 0 0 0 3.07 2.28 6.578 6.578 0 0 1-4.85 1.359 9.332 9.332 0 0 0 5.04 1.474c6.04 0 9.34-5 9.34-9.33 0-.14 0-.28-.01-.42a6.63 6.63 0 0 0 1.64-1.7z" fill-rule="nonzero"></path></symbol><symbol id="icon-star" fill="#EBBD5B" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/><path d="M0 0h24v24H0z" fill="none"></path></symbol><symbol id="icon-star_border" fill="#EBBD5B" viewBox="0 0 24 24"><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/><path d="M0 0h24v24H0z" fill="none"></path></symbol><symbol id="icon-clock" viewBox="0 0 16 16"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"></path></symbol><symbol id="icon-link" viewBox="0 0 512 512"><path d="M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"></path></symbol><symbol id="icon-google-plus-g" viewBox="0 0 448 512"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM164 356c-55.3 0-100-44.7-100-100s44.7-100 100-100c27 0 49.5 9.8 67 26.2l-27.1 26.1c-7.4-7.1-20.3-15.4-39.8-15.4-34.1 0-61.9 28.2-61.9 63.2 0 34.9 27.8 63.2 61.9 63.2 39.6 0 54.4-28.5 56.8-43.1H164v-34.4h94.4c1 5 1.6 10.1 1.6 16.6 0 57.1-38.3 97.6-96 97.6zm220-81.8h-29v29h-29.2v-29h-29V245h29v-29H355v29h29v29.2z"></path><symbol id="icon-map-marker-alt" viewBox="0 0 384 512"><path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></symbol><symbol id="icon-search" viewBox="0 0 512 512"><path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></symbol><symbol id="icon-tags" viewBox="0 0 640 512"><path d="M497.941 225.941L286.059 14.059A48 48 0 0 0 252.118 0H48C21.49 0 0 21.49 0 48v204.118a48 48 0 0 0 14.059 33.941l211.882 211.882c18.744 18.745 49.136 18.746 67.882 0l204.118-204.118c18.745-18.745 18.745-49.137 0-67.882zM112 160c-26.51 0-48-21.49-48-48s21.49-48 48-48 48 21.49 48 48-21.49 48-48 48zm513.941 133.823L421.823 497.941c-18.745 18.745-49.137 18.745-67.882 0l-.36-.36L527.64 323.522c16.999-16.999 26.36-39.6 26.36-63.64s-9.362-46.641-26.36-63.64L331.397 0h48.721a48 48 0 0 1 33.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882z"></path></symbol><symbol id="icon-file" viewBox="0 0 384 512"><path d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm160-14.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z"></path></symbol><symbol id="icon-paypal" viewBox="0 0 384 512"><path d="M111.4 295.9c-3.5 19.2-17.4 108.7-21.5 134-.3 1.8-1 2.5-3 2.5H12.3c-7.6 0-13.1-6.6-12.1-13.9L58.8 46.6c1.5-9.6 10.1-16.9 20-16.9 152.3 0 165.1-3.7 204 11.4 60.1 23.3 65.6 79.5 44 140.3-21.5 62.6-72.5 89.5-140.1 90.3-43.4.7-69.5-7-75.3 24.2zM357.1 152c-1.8-1.3-2.5-1.8-3 1.3-2 11.4-5.1 22.5-8.8 33.6-39.9 113.8-150.5 103.9-204.5 103.9-6.1 0-10.1 3.3-10.9 9.4-22.6 140.4-27.1 169.7-27.1 169.7-1 7.1 3.5 12.9 10.6 12.9h63.5c8.6 0 15.7-6.3 17.4-14.9.7-5.4-1.1 6.1 14.4-91.3 4.6-22 14.3-19.7 29.3-19.7 71 0 126.4-28.8 142.9-112.3 6.5-34.8 4.6-71.4-23.8-92.6z"></path></symbol><symbol id="icon-slack-hash" viewBox="0 0 448 512"><path d="M446.2 270.4c-6.2-19-26.9-29.1-46-22.9l-45.4 15.1-30.3-90 45.4-15.1c19.1-6.2 29.1-26.8 23-45.9-6.2-19-26.9-29.1-46-22.9l-45.4 15.1-15.7-47c-6.2-19-26.9-29.1-46-22.9-19.1 6.2-29.1 26.8-23 45.9l15.7 47-93.4 31.2-15.7-47c-6.2-19-26.9-29.1-46-22.9-19.1 6.2-29.1 26.8-23 45.9l15.7 47-45.3 15c-19.1 6.2-29.1 26.8-23 45.9 5 14.5 19.1 24 33.6 24.6 6.8 1 12-1.6 57.7-16.8l30.3 90L78 354.8c-19 6.2-29.1 26.9-23 45.9 5 14.5 19.1 24 33.6 24.6 6.8 1 12-1.6 57.7-16.8l15.7 47c5.9 16.9 24.7 29 46 22.9 19.1-6.2 29.1-26.8 23-45.9l-15.7-47 93.6-31.3 15.7 47c5.9 16.9 24.7 29 46 22.9 19.1-6.2 29.1-26.8 23-45.9l-15.7-47 45.4-15.1c19-6 29.1-26.7 22.9-45.7zm-254.1 47.2l-30.3-90.2 93.5-31.3 30.3 90.2-93.5 31.3z"></path></symbol><symbol id="icon-linkedin" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></symbol><symbol id="icon-globe" viewBox="0 0 496 512"><path d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"></path></symbol><symbol id="icon-rating-star" viewBox="0 0 576 512"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></symbol><symbol id="icon-ratings-star-open" viewBox="0 0 576 512"><path d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path></symbol><symbol id="icon-chevron-right" viewBox="0 0 320 512"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></symbol><symbol id="icon-chevron-left" viewBox="0 0 320 512"><path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path></symbol><symbol id="icon-balance-scale" viewBox="0 0 640 512"><path d="M256 336h-.02c0-16.18 1.34-8.73-85.05-181.51-17.65-35.29-68.19-35.36-85.87 0C-2.06 328.75.02 320.33.02 336H0c0 44.18 57.31 80 128 80s128-35.82 128-80zM128 176l72 144H56l72-144zm511.98 160c0-16.18 1.34-8.73-85.05-181.51-17.65-35.29-68.19-35.36-85.87 0-87.12 174.26-85.04 165.84-85.04 181.51H384c0 44.18 57.31 80 128 80s128-35.82 128-80h-.02zM440 320l72-144 72 144H440zm88 128H352V153.25c23.51-10.29 41.16-31.48 46.39-57.25H528c8.84 0 16-7.16 16-16V48c0-8.84-7.16-16-16-16H383.64C369.04 12.68 346.09 0 320 0s-49.04 12.68-63.64 32H112c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h129.61c5.23 25.76 22.87 46.96 46.39 57.25V448H112c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h416c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z"></path></symbol><symbol id="icon-power-off" viewBox="0 0 512 512"><path d="M400 54.1c63 45 104 118.6 104 201.9 0 136.8-110.8 247.7-247.5 248C120 504.3 8.2 393 8 256.4 7.9 173.1 48.9 99.3 111.8 54.2c11.7-8.3 28-4.8 35 7.7L162.6 90c5.9 10.5 3.1 23.8-6.6 31-41.5 30.8-68 79.6-68 134.9-.1 92.3 74.5 168.1 168 168.1 91.6 0 168.6-74.2 168-169.1-.3-51.8-24.7-101.8-68.1-134-9.7-7.2-12.4-20.5-6.5-30.9l15.8-28.1c7-12.4 23.2-16.1 34.8-7.8zM296 264V24c0-13.3-10.7-24-24-24h-32c-13.3 0-24 10.7-24 24v240c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24z"></path></symbol></svg>
```

## My code for the ratings form

```html
<div id="respond" class="js-comments">
    <header class="section-title">
        <h3 class="nav__title1"><svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" class="icon icon--megaphone" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <g id="Octicons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="megaphone" fill="#ffffff">
                  <path d="M10,1 C9.83,1 9.64,1.05 9.48,1.14 C8.04,2.02 4.5,4.58 3,5 C1.62,5 0,5.67 0,7.5 C0,9.33 1.63,10 3,10 C3.3,10.08 3.64,10.23 4,10.41 L4,15 L6,15 L6,11.55 C7.34,12.41 8.69,13.38 9.48,13.86 C9.64,13.95 9.82,14 10,14 C10.52,14 11,13.58 11,13 L11,2 C11,1.42 10.52,1 10,1 L10,1 Z M10,13 C9.62,12.77 9.11,12.42 8.5,12 C8.34,11.89 8.17,11.78 8,11.66 L8,3.31 C8.16,3.2 8.31,3.11 8.47,3 C9.08,2.59 9.63,2.23 10,2 L10,13 L10,13 Z M12,7 L16,7 L16,8 L12,8 L12,7 L12,7 Z M12,9 L16,11 L16,12 L12,10 L12,9 L12,9 Z M16,3 L16,4 L12,6 L12,5 L16,3 L16,3 Z" id="Shape"></path>
              </g>
          </g>
      </svg> Add A Page Review</h3>
      </header>
  <form id="review-form" class="page__form js-form form" method="post" action="https://api.staticman.net/v2/entry/donaldboulton/DWB/gh-pages/reviews" oninput="result.value=parseInt(this['fields[review]'].value)">
    <div class="field-group rating-select"> <span>Add A Rating:&nbsp;</span> <label class="rating-radio-label" for="comment-form[star-1]"> <svg class="icon icon--star rating-star rating-radio-star--on"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/assets/icons/icons.svg#icon-star"></use>star</svg> </label> <input class="rating-radio" type="radio" value="1" name="fields[review]" id="comment-form[star-1]" checked=""> <label class="rating-radio-label" for="comment-form[star-2]"> <svg class="icon icon--star_border rating-star rating-radio-star--off"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/assets/icons/icons.svg#icon-star_border"></use>star_border</svg> <svg class="icon icon--star rating-star rating-radio-star--on"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/assets/icons/icons.svg#icon-star"></use>star</svg> </label> <input class="rating-radio" type="radio" value="2" name="fields[review]" id="comment-form[star-2]"> <label class="rating-radio-label" for="comment-form[star-3]"> <svg class="icon icon--star_border rating-star rating-radio-star--off"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/assets/icons/icons.svg#icon-star_border"></use>star_border</svg> <svg class="icon icon--star rating-star rating-radio-star--on"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/assets/icons/icons.svg#icon-star"></use>star</svg> </label> <input class="rating-radio" type="radio" value="3" name="fields[review]" id="comment-form[star-3]"> <label class="rating-radio-label" for="comment-form[star-4]"> <svg class="icon icon--star_border rating-star rating-radio-star--off"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/assets/icons/icons.svg#icon-star_border"></use>star_border</svg> <svg class="icon icon--star rating-star rating-radio-star--on"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/assets/icons/icons.svg#icon-star"></use>star</svg> </label> <input class="rating-radio" type="radio" value="4" name="fields[review]" id="comment-form[star-4]"> <label class="rating-radio-label" for="comment-form[star-5]"> <svg class="icon icon--star_border rating-star rating-radio-star--off"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/assets/icons/icons.svg#icon-star_border"></use>star_border</svg> <svg class="icon icon--star rating-star rating-radio-star--on"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/assets/icons/icons.svg#icon-star"></use>star</svg> </label> <input class="rating-radio" type="radio" value="5" name="fields[review]" id="comment-form[star-5]"></div>
      <div class="form-group">
        <label class="sr-only" for="review-form[name]">Your name</label>
        <input type="text" id="review-form[name]" name="fields[name]" required placeholder="Your Name *"/>
      </div>
      <div class="form-group">
        <label class="sr-only" for="review-form[email]">Your email</label>
        <input type="email" id="review-form[email]" name="fields[email]" required placeholder="Your Email *"/>
      </div>
      <div class="form-group">
        <label class="sr-only" for="review-form[url]"><strong>Website</strong> <small>(optional)</small></label>
        <input type="url" id="review-form[url]" name="fields[url]" placeholder="Website (optional)"/>
      </div>
      <div class="form-group hidden" style="display: none">
        <label class="sr-only" for="review-form[address]">Address</label>
        <input type="text" id="review-form[address]" name="fields[address]"/>
      </div>
      <div class="form-group">
        <label class="sr-only" for="review-form[title]">Review Title</label>
        <input type="text" id="review-form[title]" name="fields[title]" required placeholder="Review Title *"/>
      </div>
      <div class="form-group">
        <label for="review-form[description]"><small>(<a href="https://kramdown.gettalong.org/quickref.html">Markdown</a> is ok!)</small></label>
        <textarea maxlength="200" name="fields[description]" type="text" rows= "3" id="review-form[description]" placeholder="Message * 200 chars"></textarea>
      </div>
      <div class="form-group" style="display: none;">
        <input type="hidden" name="options[origin]" value="{{ page.lcb }}{ page.url | relative_url }}">
        <input type="hidden" name="options[parent]" value="{{ page.lcb }}{ page.url | relative_url }}">
        <input type="hidden" id="review-post-id" name="options[slug]" value="{{ page.lcb }}{ page.slug }}">
        <input name="fields[product]" type="hidden" value="{{ page.lcb }}{ page.slug }}" />
        <input name="options[redirect]" type="hidden" value="{{ page.lcb }}{site.url}}{{site.baseurl}}{{ page.url }}" />
        <label for="review-form-address">Leave blank if you are a human</label>
        <input type="text" id="review-form-address" name="fields[hidden]" autocomplete="off">
        <input type="hidden" name="options[reCaptcha][siteKey]" value="6LerR1MUAAAAACWH7t30s7V4aApQZaIVVPcvH21X">
        <input type="hidden" name="options[reCaptcha][secret]" value="{{ page.lcb }}{ site.reCaptcha.secret }}">
      </div>
      <!-- Start revies form alert messaging -->
      <p class="hidden js-notice">
        <span class="js-notice-text"></span>
      </p>
      <!-- End review form alert messaging -->
      <div class="form-group">
          <div id="recaptcha2" class="g-recaptcha" data-theme="dark" data-tabindex="5" data-sitekey="6LerR1MUAAAAACWH7t30s7V4aApQZaIVVPcvH21X"></div>
      </div>
      <div class="form-group">
          <button type="submit" id="review-form-submit" class="btn btn--primary">
            Submit
           </button>
        </div>
  </form>
</div>
{{ page.lcb }}% include reviews-staticman_v2.html %}
```

## Staticman Code for Posting Reviews

Used as a include reviews-staticman_v2.html

And the loading icon is from the icons.svg file

```javascript
<script>
(function ($) {
    var $reviews = $('.js-comments');

    $('#review-form').submit(function () {
      var form = this;

      $(form).addClass('disabled');
      $("#review-form-submit").html(
        '<svg class="icon spin"><use xlink:href="/assets/icons/icons.svg#icon-loading"></use></svg> Loading...'
      );

      $.ajax({
        type: $(this).attr('method'),
        url: $(this).attr('action'),
        data: $(this).serialize(),
        contentType: 'application/x-www-form-urlencoded',
        success: function (data) {
          $('#review-form-submit').html('{{ site.data.ui-text[site.locale].review_btn_submitted | default: "Submitted" }}');
          $('.page__reviews-form.js-notice').removeClass('notice--danger');
          $('.page__reviews-form.js-notice').addClass('notice--success');
          showAlert('{{ site.data.ui-text[site.locale].review_success_msg | default: "Thanks for your review and ratings! It will show on the site once it has been approved." }}');
        },
        error: function (err) {
          console.log(err);
          $('#review-form-submit').html('{{ site.data.ui-text[site.locale].review_btn_submit  | default: "Submit Review" }}');
          $('.page__reviews-form.js-notice').removeClass('notice--success');
          $('.page__reviews-form.js-notice').addClass('notice--danger');
          showAlert('{{ site.data.ui-text[site.locale].review_error_msg | default: "Sorry, there was an error with your submission. Please make sure all required fields have been completed and try again." }}');
          $(form).removeClass('disabled');
        }
      });

      return false;
    });

    function showAlert(message) {
      $('.page__reviews-form.js-notice').removeClass('hidden');
      $('.page__reviews-form.js-notice-text').html(message);
    }
    })(jQuery);
</script>
```

## The reviews page

The code for my reviews page with a [Letter Avatar](https://donboulton.com/2018-02-22-post-Letter-Avatar.html) for the user image.

This code below is to be changed to have the reviews show up just on the page that was reviewed.

```liquid
<div id="reviews" class="js-comments">
{{ page.lcb }}% if page.reviews == true and site.data.reviews | where:'product',page.slug.size > 1 %}
{{ page.lcb }}% assign reviews = site.data.reviews | where:'product',page.slug %}
{{ page.lcb }}% assign reviews = site.data.reviews | sort %}

{{ page.lcb }}% for review in reviews reversed limit:3 %}
{{ page.lcb }}% assign reviewData = review[1] %}
<article itemscope itemtype="http://schema.org/Review" class="toc1">
<span class="section-title">
<h3 class="nav__title1"><svg width="14px" height="16px" class="icon icon--pulse" viewBox="0 0 14 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="Octicons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
<g id="pulse" fill="#ffffff">
<polygon id="Shape" points="11.5 8 8.8 5.4 6.6 8.5 5.5 1.6 2.38 8 0 8 0 10 3.6 104.5 8.2 5.4 13.6 9 8.5 10.6 10 14 10 14 8"></polygon>
</g>
</g>
</svg> Page Review</span></h3>
</span>
<div class="review-content">
<div class="form-group">
            <div itemscope itemtype="http://schema.org/Thing">
               <span class="item-reviewed text-center">Item Reviewed</span>
               <p itemprop="itemReviewed">{{ page.lcb }}{ reviewData.title }}</p>
            </div>
  Title:&nbsp;<span class="title-text">{{ page.lcb }}{ reviewData.title }}</span>
</div>
<div class="form-group form">
             <div class="field-group1" itemprop="reviewRating" itemscope itemtype="http://schema.org/Rating">
<span>Rating</span>
{{ page.lcb }}% for i in (1..reviewData.review) %}
<svg class="icon icon--star rating-star rating-radio-star--on"><use xlink:href="{{ 'icons.svg#icon-star' | prepend: 'assets/icons/' | relative_url }}"></use></svg>
{{ page.lcb }}% endfor %}
<meta class="hidden" itemprop="ratingValue" content="{{ page.lcb }}{ reviewData.review }}">
</div>
</div>
        <div itemprop="author" class="review-author" itemscope itemtype="http://schema.org/Person">
          <div>Author</div>
            <img itemprop="image" avatar="{{ page.lcb }}{ reviewData.name }}" alt="{{ page.lcb }}{ reviewData.name }}" class="review-avatar-image text-left" />
            <span itemprop="name" class="review-author-name"><small>{{ page.lcb }}{ reviewData.name }}</small>
            <small>{{ page.lcb }}{ reviewData.url }}</small></span>
        </div>
<div class="form-group">
            <span>Message</span><span itemprop="description"></span> {{ page.lcb }}{ reviewData.description | markdownify }}</span>
</div>
</div>
<span style="display: none;" itemprop="publisher" itemscope itemtype="http://schema.org/Organization">
          <meta class="hidden" itemprop="name" content="donboulton.com">
        </span>
        <meta itemprop="url" type="hidden" value="{{ page.lcb }}{ page.url | absolute_url }}">
        <input type="hidden" name="options[parent]" value="{{ page.lcb }}{ page.url | absolute_url }}">
</article>
  {{ page.lcb }}% endfor %}
  {{ page.lcb }}% endif %}
</div>
```

## Review Count & Aggregate Rating

I use the review count and aggregate rating per page at the top of each post in a include page-intro.html file

### The Code

```html
<p class="entry-meta" itemprop="aggregateRating" itemscope itemtype="http://schema.org/AggregateRating">
            {{ page.lcb }}% if page.reviews == true and site.data.reviews | where:'product',page.slug.size > 0 %}
              <span class="byline-item"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="icon icon--chart-area"><path d="M500 384c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H12c-6.6 0-12-5.4-12-12V76c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v308h436zM372.7 159.5L288 216l-85.3-113.7c-5.1-6.8-15.5-6.3-19.9 1L96 248v104h384l-89.9-187.8c-3.2-6.5-11.4-8.7-17.4-4.7z"/></svg>&nbsp;<span itemprop="reviewCount">{{ page.lcb }}{ site.data.reviews | where:'product',page.slug | size }}</span> Page Review{{ page.lcb }}% if site.data.reviews | where:'product',page.slug.size > 1 %}s{{ page.lcb }}% endif %}</span>
            {{ page.lcb }}% endif %}
            {{ page.lcb }}% assign reviews = site.data.reviews | where:'product',page.slug %}
            {{ page.lcb }}% assign reviewCount = reviews | size %}
            {{ page.lcb }}% assign sum = 0 %}
            {{ page.lcb }}% for review in reviews %}
              {{ page.lcb }}% assign sum = sum | plus: review.review %}
            {{ page.lcb }}% endfor %}
            <span class="byline-item text-right"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="icon rating-star"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/></svg>&nbsp;Page Rating
              {{ page.lcb }}% if reviewCount > 0 %}
                {{ page.lcb }}% assign sum = sum | divided_by:reviewCount %}
                (&nbsp;Average:&nbsp;<span itemprop="ratingValue">{{ page.lcb }}{ sum | round: 1 }}&nbsp;</span>)
              {{ page.lcb }}% endif %}
            </span>
          </p>
          <div style="display:none;">
          <meta class="hidden" itemprop="bestRating" value="5">
          <meta class="hidden" itemprop="worstRating" value="1">
          <span class="hidden" itemprop="name">{{ page.lcb }}{ page.slug }}</span>
          <input name="fields[product]" type="hidden" value="{{ page.lcb }}{ page.slug }}" />
          <input type="hidden" name="options[origin]" value="{{ page.lcb }}{ page.url | relative_url }}">
          <meta class="hidden" content="donboulton.com">
```

Working on examples without the icons.svg file and adding a elsif statement for 0 counts and 0 ratings.

Any input on how to finish this would be nice. Leave a review below or use any of the social liks in any page to Question or comment on this page.