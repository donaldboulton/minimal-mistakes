---
title: Reviews for Jekyll
name: Reviews for Jekyll
layout: single
read_time: true
comments: true
share: true
toc: false
search: true
author: Donald Boulton
author_profile: true
adds: true
places: true
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

locations:
  - OKC, Oklahoma

excerpt: "Comments Ratings, Built because of Google Positioning Micro data for Search Results. Built Using and extending Staticman's Popcorn Github repo. This is still a work in progress so Leave a Review for any page in donboulton.com and the page aggregate rating will increase after a successfull push to my github repo, not quite finished yet learning liquid math??? The aggregate rating and review per page are working review and rate and it soon will show up as a rating on that page."

support: [places, adds, cookies]
product: reviews-for-jekyll
folder: _posts
product: reviews-for-jekyll
slug: reviews-for-jekyll
github_editme_path: donaldboulton/DWB/blob/gh-pages/_posts/2018-05-27-post-reviews-for-jekyll.md
---

{% include octo-arm.html %}

{% include page-intro.html %}

# Site Reviews

Reviews [Powered by Staticman](https://staticman.net) Built for the need of Micro data used for Google Search Results and Search positioning. Built Using and extending Staticman's Popcorn Github repo. This is still a work in progress so Leave a Review for any page in donboulton.com and the page aggregate rating will increase after a successfull push to my github repo, not quite finished yet learning liquid math??? The aggregate rating and review per page are working review and rate and it soon will show up as a rating on that page.

## Review in the works

Working on single page reviews that when totaled together give a ratings for each post or page and then a overall site aggregate rating and review totals.

### Google Reviews

My goal is to have my Reviews-Ratings show up on Google search and increase my positioning and show a page review rating in search results, incorporated with Google Reviews.
Doing so ment perfect microdata with aggregate, "Averaged" page and site ratings, or it would be useless for my goal.

I searched the internet for someone using Jekyll that have a page retings system. Most all are for Books, Movies or Products. And some I found for products were liquid and "no js" with no external content as a database. But they were built with sliders,"not stars" for ratings and per product. And none had aggregate product ratings. So I used Staticman's Popcorn repo, basically the scss and the way he use images for the Stars Ratings and added the star.svg and star_border.svg to my icons.svg file, which needs svg4everybody.js to work.

When I make a repo for this and  I will just include or inline the svg's, not us a sprite so svg4everybody.js, will not be needed.

Unlike page or site Comments which Google nor any Search Engine gives no positioning weight to. So comments in a Website are just a page filler unless they are linked to some social media post for search enging access. In todays internet Commenting should be with Twitter or other Social Providers.

## How I built Jekyll Ratings

I have not completed this reviews system. It will post throught Staticman, send me a email, give me a review-rating for that page slug and calculate the sum, "average" of all ratings on that page with a review's per page count.

What I have left to finish is overall site aggregate averaged rating and a overall review total count.

And to have the reviews of that page just show up on that page. With 0 counts and 0 rating if there are none, should be a simple elseif for that.

This is also built with products, books, or movies in mind just change the slug from products to whatever.