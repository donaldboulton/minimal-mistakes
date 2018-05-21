---
layout: single
title: "Website Tweaks"
permalink: /posts/2018-03-26-post-Website-Tweaks/
date: 2018-03-26 15:16:01 -0600
last_modified_at: 2018-03-26T12:42:38-04:00
search: true
author: Donald Boulton
author_profile: true
tags:
  - Performance
  - Asp.Net Core2
  - Orchard Cms
category:
  - Programing

toc: true
toc_label: "Contents"

read_time: true
comments: true
share: true
related: true
sidenav: true
reviews: true
adds: true
excerpt: "Website Tweaks in my ASP.Core2 apps. Discussions on changes to Orchard 1.10 web.config, zipping files for AWS to Cloud-front, Proper Response and Request headers 
Including jquery-pajax"
image:
  cover: true
  path: &image /assets/images/pages/performance/speedtest_donboulton.jpg
  feature: *image
  thumbnail: /assets/images/pages/performance/speedtest_donboulton-320.jpg
header:
  image: /assets/images/pages/performance/speedtest_donboulton.jpg
  teaser: /assets/images/pages/performance/speedtest_donboulton-320.jpg
support: [adds, cookies]  
product: post-website-tweaks
id: post-website-tweaks
github_editme_path: donaldboulton/DWB/blob/gh-pages/_posts/2018-03-27-post-Website-Tweaks.md
---

{% include octo-arm.html %}
{% include page-intro.html %}

# Any Site, Orchard CMS

Discussions on changes to Orchard 1.10 web.config, zipping files for AWS to Cloud-front, Proper Response and Request headers.

Web.config additions and changes, with different performance alternatives.

Most of this post is specific For Orchard CMS
Orchard Cache, iDeliverable widgets, HTML Minified settings will be discussed. Conjugation routines of .css and .js before 7-zipping them with gzip Ultra format.

This page is always under development. Web .config section is questionable.

You want straight A's from webpagetest.org.

I almost got straight A's; just one image and google-analytics.com stops straight A's.

Extensive caching section s Orchard up to 1.10.0 does not client cache correctly with VARY* have to change it in Orchard Cache filter and in the web.config to get proper response headers. Ad Caching in Orchard form 1.8.1 to 1.10 caches .xml and .rss making it unreadable to servers and browsers. Even if you tell orchard in the various was to not cache these routes it does anyway = more changes to the web.config.

How to use gzip on a shared server when they deny access to gzip.dll.

Follow the below content and test things locally first.

{% include figure image_path="/assets/images/pages/performance/orchard-performance.jpg" alt="Performance" caption="Performance" class="align-center" %}

My full test results: [Details](http://www.webpagetest.org/result/160227_P1_4P4/1/details/)

I am getting a repeat view of 0kb and initially 380kb which is 1gb lower that a stock Orchard site with bootstrap and some images.

* [Cache](#cache)
* [Web Config](#webconfig)
* [HTML Minifier](#htmlminifier)
* [Gzip](#gzip)
* [AWS S3](#aws)
* [Http Headers](#httpheaders)
* [x-pjax](#x-pjax)

## Orchard Cache settings

First Orchard caching still messes up .xml files like your sitemap.xml and the needed changes so caching in IIS or Orchard leaves it in the correct format. Then I add sitemap.xml at the root of my site, hard coding is pain in the ass, use a sitemap generator to do it for ya.

Cache settings of 259200 seconds or 72 hours on duration and max age. And a Accept-Encoding: gzip, deflate, sdhc = response header.

{% include figure image_path="/assets/images/pages/performance/cache-settings.jpg" alt="Cache Settings" caption="Cache Settings" class="align-center" %}

Default Grace time of 600 so I get a Grace time of 10 minutes, fine for me as I have nothing changing in 10 min.

Ignoring url /sitemap.xml

{% include figure image_path="/assets/images/pages/performance/cache-duration-min.jpg" alt="Cache Duration" caption="Cache Duration" class="align-center" %}

## Web.config

Here is my web.config for Orchard 1.9.1 and it Orchard changed alot in 1.10, if using 1.10 check changes carefully. I comment in and on soon.

Leveraging prefetch cache and Vary policys, and caching on XML.

```html
  <httpHandlers>
    <clear />
    <add verb="*" path="sitemap.xml" type="System.Web.StaticFileHandler" />
  </httpHandlers>
  <caching>
    <outputCache omitVaryStar="true" />
        <outputCacheSettings>
            <outputCacheProfiles>
                 <clientCache cacheControlCustom="public" cacheControlMode="UseMaxAge"cacheControlMaxAge="3.00:00:00" />
            </outputCacheProfiles>
        </outputCacheSettings>
  </caching>
</system.web>
```

Under System.WebServer we add the custom headers url compression and caching profiles with .xml exclusion.

```html
</security>
   <httpProtocol>
      <customHeaders>
         <remove name="X-Powered-By" />
         <remove name="X-Aspnet-Version" />
         <remove name="Vary" />
         <add name="Vary" value="Accept-Encoding" />
         <add name="allowKeepAlive" value="true" />
         <add name="Expires" value="Mon, 25 Dec 2017 21:31:12 GMT" />
         <add name="Access-Control-Allow-Origin" value="https://donboulton.com" />
         <add name="Access-Control-Allow-Credentials" value="true" />
         <add name="Accept-Encoding" value="gzip,deflate,sdhc" />
      </customHeaders>
    </httpProtocol>
    <urlCompression dynamicCompressionBeforeCache="true" doStaticCompression="true" doDynamicCompression="true" />
    <staticContent>
      <clientCache cacheControlCustom="public" cacheControlMode="UseMaxAge" cacheControlMaxAge="3.00:00:00" />
      <remove fileExtension=".mp3" />
      <mimeMap fileExtension=".mp3" mimeType="audio/mpeg" />
      <remove fileExtension=".mp4" />
      <mimeMap fileExtension=".mp4" mimeType="video/mp4" />
      <remove fileExtension=".pdf" />
      <mimeMap fileExtension=".pdf" mimeType="application/pdf" />
      <remove fileExtension=".svg" />
      <mimeMap fileExtension=".svg" mimeType="image/svg+xml" />
      <remove fileExtension=".woff"/>
      <mimeMap fileExtension=".woff" mimeType="application/font-woff"/>
      <remove fileExtension=".woff2"/>
      <mimeMap fileExtension=".woff2" mimeType="application/font-woff2" />
    </staticContent>
    <caching>
      <profiles>
         <add extension=".js" policy="CacheUntilChange" kernelCachePolicy="CacheUntilChange" location="Any" varyByHeaders="Accept-Encoding" />
         <add extension=".css" policy="CacheUntilChange" kernelCachePolicy="CacheUntilChange" location="Any" varyByHeaders="Accept-Encoding" />
          <add extension=".jpeg" policy="CacheForTimePeriod" kernelCachePolicy="CacheForTimePeriod" duration="7.00:00:00" varyByHeaders="Accept-Encoding" />
          <add extension=".jpg" policy="CacheForTimePeriod" kernelCachePolicy="CacheForTimePeriod" duration="7.00:00:00" varyByHeaders="Accept-Encoding" />
          <add extension=".png" policy="CacheForTimePeriod" kernelCachePolicy="CacheForTimePeriod" duration="7.00:00:00" varyByHeaders="Accept-Encoding" />
          <add extension=".gif" policy="CacheForTimePeriod" kernelCachePolicy="CacheForTimePeriod" duration="7.00:00:00" varyByHeaders="Accept-Encoding" />
          <add extension=".xml" policy="DisableCache" kernelCachePolicy="DisableCache" />
     </profiles>
  </caching>
</system.webServer>
```

## Minify Html

[JadeX](https://github.com/JadeX)
[Orchard.HtmlMinifier](https://github.com/JadeX/Orchard.HtmlMinifier)

JadeX HTML Minifaction at: [https://github.com/JadeX/Orchard.HtmlMinifier](https://github.com/JadeX/Orchard.HtmlMinifier "HTML Minifier")

Module designed to reduce size of output HTML to bare minimum while maintaining same functionality for your Orchard website.

Size for simple pages gets reduced by 10% (gzipped) or 20% (uncompressed) respectively. As page gets more complex with more shapes and content, reduction ratio grows.

Minification makes full use of Output caching provided by Orchard.OutputCache module to prevent recurring minification for responses that were already recently minified.

**Supported versions:** Orchard 1.9+

I use all the stock settings seems to work great and works with Orchard 1.10. The only thing you might do is set up the `Statistics Info Window Pattern instructions at:

[Stats patterns](https://github.com/JadeX/Orchard.HtmlMinifier/wiki/Statistics-info-window)

## Gzip

Gzipped file settings on upload I use reduuced redundancy storage and the on mime types uncheck figure out mime types automatically and the add Content type for .js add application/x-javascript for .css files add text/css,

I set Cache-Control to public, max-age=2592000,

Expires Wed, 01-Feb-2017 16:32:35 GMT should be at least a year ahead of today. Mine is not.

Content-Encoding set to gzip

The files uploaded will still have the extenshion like site-slate.min.css.gz so just rename them like site-slate.min.css no .gz.

Now if you read about this you should have one file gzipped and one file not, if you do not have the correct HTTP Request and Resopnse header for older browsers = I do not care anything about older browsers. so judge for yourself

## AWS S3

There is allot of information on setting up AWS S3 and Cloudfront so I will not go into that; just how I use it for file distribution, and I use my own static cookiesless, "except for oauth cookie from Cloud Front", subweb for my link as static.donboulton.com which can be set up on your server and then on AWS S3 and Cloud Front adding to your web.config

```html
<add name="Access-Control-Allow-Origin" value="http://yoursite.com" />
<add name="Access-Control-Allow-Credentials" value="true" />
```

For a Poor Mans CDN "WoW", for me about $0.30 a month added to the $25.00 Ultimate plan at Winhost.com and its very affordable and as you can see donboulton.com is super fast. A stock installation of Orchard on winhost servers is way slower.

All my static files are congregated, minified, then if its .css or .js its Gzipped and served from AWS through Cloudfront.

I used to use Combinator but it adds to the end of the file a timestamp =?whatever, well servers complain about the ? and sometimes it did what it wanted; so I just started to congregate or combine them together. My jquary.js file has about 12 other minified scripts added to it and then using 7-zip I gzip it to the Ultra max. ends up about 40kb would be served individually over 500kb and 12 round trips for the individual files. Even added pjax minified version at the bottom of my jquary file, works great.

Doing the same for all of my .css files. I use PJS.Bootstrap which has the ability to change styles so it injects the style sheet from settings through Models and Handlers, so eliminated Models and Handlers all the reference's to injection and add a direct link to my site-slate.min.css file minified and Gzipped to the Ultimate max, adding all font files .less files .sass file and progressive minified images to my AWS CDN so all static content is on AWS keeping the bootstrap file structure in tact.

So I get one .js file and one.css file for most of my site, have to add some others on certain pages like jquary- lightbox image gallery for my portfolios'.

### Web Fundamentals Http Caching

Taken from:
[Page Insites Google developers](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching?hl=en)

Fetching something over the network is both slow and expensive: large responses require many roundtrips between the client and server, which delays when they are available and can be processed by the browser, and also incurs data costs for the visitor. As a result, the ability to cache and reuse previously fetched resources is a critical aspect of optimizing for performance.

Contents

Validating cached responses with ETags
Cache-Control
Defining optimal Cache-Control policy
Invalidating and updating cached responses
Caching checklist

Great news, every browser ships with an implementation of an HTTP cache! All we have to do is ensure that each server response provides correct HTTP header directives to instruct the browser on when and for how long the response can be cached by the browser.

Remember

If you are using a Webview to fetch and display web content in your application, you may need to provide additional configuration flags to ensure that the HTTP cache is enabled, its size is set to a reasonable number to match your use case, and that the cache is persisted. Check the platform documentation and confirm your settings!

{% include figure image_path="/assets/images/pages/performance/http-request.png" alt="Http-Request" caption="Http-Request" class="align-left" %}

When the server returns a response it also emits a collection of HTTP headers, describing its content-type, length, caching directives, validation token, and more. For example, in the above exchange the server returns a 1024 byte response, instructs the client to cache it for up to 120 seconds, and provides a validation token (x234dff) that can be used after the response has expired to check if the resource has been modified.

Validating cached responses with ETags

Validation token is communicated by the server via the ETag HTTP header
Validation token enables efficient resource update checks: no data transfer if the resource has not changed.

Lets assume 120 seconds have passed since our initial fetch and the browser has initiated a new request for the same resource. First, the browser checks the local cache and finds the previous response, unfortunately it cannot use it as the response has now expired. At this point it could simply dispatch a new request and fetch the new full response, but thats inefficient because if the resource has not changed then there is no reason to download the exact same bytes that are already in cache!

Thats the problem that validation tokens, as specified in the ETag header, are designed to solve: the server generates and returns an arbitrary token which is typically a hash or some other fingerprint of the contents of the file. The client does not need to know how the fingerprint is generated, it only needs to send it to the server on the next request: if the fingerprint is still the same then the resource has not changed and we can skip the download.

{% include figure image_path="/assets/images/pages/performance/http-cache-control.png" alt="Cache Control" caption="Cache Control" class="align-left" %}

In above example the client automatically provides the ETag token within the If-None-Match HTTP request header, the server checks the token against the current resource, and if it has not changed returns a 304 Not Modified response which tells the browser that the response it has in cache has not changed and can be renewed for another 120 seconds. Note that we do not have to download the response once more - this saves time and bandwidth.

As a web developer, how do you take advantage of efficient revalidation? The browser does all the work on our behalf. It will automatically detect if a validation token has been previously specified, it will append it to an outgoing request, and it will update the cache timestamps as necessary based on received response from the server. The only thing thats left for us to do is to ensure that the server is, in fact, providing the necessary ETag tokens: check your server documentation for necessary configuration flags.

Remember

Tip: HTML5 Boilerplate project contains sample configuration files for all the most popular servers with detailed comments for each configuration flag and setting: find your favorite server in the list, look for appropriate settings, and copy / confirm that your server is configured with recommended settings.

Cache-Control

Each resource can define its caching policy via Cache-Control HTTP header
Cache-Control directives control who can cache the response, under which conditions, and for how long

The best request is a request that does not need to communicate with the server: a local copy of the response allows us to eliminate all network latency and avoid data charges for the data transfer. To achieve this, the HTTP specification allows the server to return a number of different Cache-Control directives that control how, and for how long, the individual response can be cached by the browser and other intermediate caches.

Remember

Cache-Control header was defined as part of the HTTP/1.1 specification and supersedes previous headers (e.g. Expires) used to define response caching policies. All modern browsers support Cache-Control, hence that is all we will need.

{% include figure image_path="/assets/images/pages/performance/http-cache-control-highlight.png" alt="Cache Control" caption="Cache Control" class="align-left" %}

no-cache and no-store

no-cache indicates that the returned response cannot be used to satisfy a subsequent request to the same URL without first checking with the server if the response has changed. As a result, if a proper validation token (ETag) is present, no-cache will incur a roundtrip to validate the cached response, but can eliminate the download if the resource has not changed.

By contrast, no-store is much simpler, as it simply disallows the browser and all intermediate caches to store any version of the returned response - e.g. one containing private personal or banking data. Everytime the user requests this asset, a request is sent to the server and a full response is downloaded each and every time.

public vs. private

If the response is marked as public then it can be cached, even if it has HTTP authentication associated with it, and even when the response status code isnt normally cacheable. Most of the time, public isnt necessary, because explicit caching information (like max-age) indicates that the response is cacheable anyway.

By contrast, private responses can be cached by the browser but are typically intended for a single user and hence are not allowed to be cached by any intermediate cache - e.g. an HTML page with private user information can be cached by that users browser, but not by a CDN.

max-age

This directive specifies the maximum time in seconds that the fetched response is allowed to be reused for from the time of the request - e.g. max-age=60 indicates that the response can be cached and reused for the next 60 seconds.

Defining optimal Cache-Control policy

{% include figure image_path="/assets/images/pages/performance/http-cache-decision-tree.png" alt="Http Cache" caption="Cache Http Cache" class="align-center" %}

Follow the decision tree above to determine the optimal caching policy for a particular resource, or a set of resources used by your application. Ideally, you should aim to cache as many responses as possible on the client for the longest possible period, and provide validation tokens for each response to enable efficient revalidation.

Cache-Control directives Explanation
max-age=86400 Response can be cached by browser and any intermediary caches (i.e. it is "public") for up to 1 day (60 seconds x 60 minutes x 24 hours)
private, max-age=600 Response can be cached by the clients browser only for up to 10 minutes (60 seconds x 10 minutes)
no-store Response is not allowed to be cached and must be fetched in full on every request.

According to HTTP Archive, amongst the top 300,000 sites (by Alexa rank), nearly half of all the downloaded responses can be cached by the browser, which is a huge savings for repeat pageviews and visits! Of course, that doesnt mean that your particular application will have 50% of resources that can be cached: some sites can cache 90%+ of their resources, while others may have a lot of private or time-sensitive data that cant be cached at all.

Audit your pages to identify which resources can be cached and ensure that they are returning appropriate Cache-Control and ETag headers.

Invalidating and updating cached responses

Locally cached responses are used until the resource 'expires'
Embedding a file content fingerprint in the URL enables us to force the client to update to a new version of the response
Each application needs to define its own cache hierarchy for optimal performance

All HTTP requests made by the browser are first routed to the browser cache to check if there is a valid cached response that can be used to fulfill the request. If there is a match, the response is read from the cache and we eliminate both the network latency and the data costs incurred by the transfer. However, what if we want to update or invalidate a cached response?

For example, lets say weve told our visitors to cache a CSS stylesheet for up to 24 hours (max-age=86400), but our designer has just committed an update that we would like to make available to all users. How do we notify all the visitors with what is now a stale cached copy of our CSS to update their caches? Its a trick question - we cant, at least not without changing the URL of the resource.

Once the response is cached by the browser, the cached version will be used until it is no longer fresh, as determined by max-age or expires, or until it is evicted from cache for some other reason - e.g. the user clearing their browser cache. As a result, different users might end up using different versions of the file when the page is constructed; users who just fetched the resource will use the new version, while users who cached an earlier (but still valid) copy will use an older version of its response.

So, how do we get the best of both worlds: client-side caching and quick updates? Simple, we can change the URL of the resource and force the user to download the new response whenever its content changes. Typically, this is done by embedding a fingerprint of the file, or a version number, in its filename - e.g. style.x234dff.css.

{% include figure image_path="/assets/images/pages/performance/http-cache-hierarchy.png" alt="Cache Hierarchy" caption="Cache Hierarchy" class="align-left" %}

The ability to define per-resource caching policies allows us to define cache hierarchies that allow us to control not only how long each is cached for, but also how quickly new versions are seen by visitor. For example, lets analyze the above example:

The HTML is marked with no-cache, which means that the browser will always revalidate the document on each request and fetch the latest version if the contents change. Also, within the HTML markup we embed fingerprints in the URLs for CSS and JavaScript assets: if the contents of those files change, then the HTML of the page will change as well and new copy of the HTML response will be downloaded.
The CSS is allowed to be cached by browsers and intermediate caches (e.g. a CDN), and is set to expire in 1 year. Note that we can use the far future expires of 1 year safely because we embed the file fingerprint its filename: if the CSS is updated, the URL will change as well.
The JavaScript is also set to expire in 1 year, but is marked as private, perhaps because it contains some private user data that the CDN shouldnt cache.
The image is cached without a version or unique fingerprint and is set to expire in 1 day.

The combination of ETag, Cache-Control, and unique URLs allows us to deliver the best of all worlds: long-lived expiry times, control over where the response can be cached, and on-demand updates.

Caching checklist

There is no one best cache policy. Depending on your traffic patterns, type of data served, and application-specific requirements for data freshness, you will have to define and configure the appropriate per-resource settings, as well as the overall caching hierarchy.

Some tips and techniques to keep in mind as you work on caching strategy:

Use consistent URLs: if you serve the same content on different URLs, then that content will be fetched and stored multiple times. Tip: note that URLs are case sensitive!
Ensure the server provides a validation token (ETag): validation tokens eliminate the need to transfer the same bytes when a resource has not changed on the server.
Identify which resources can be cached by intermediaries: those with responses that are identical for all users are great candidates to be cached by a CDN and other intermediaries.
Determine the optimal cache lifetime for each resource: different resources may have different freshness requirements. Audit and determine the appropriate max-age for each one.
Determine the best cache hierarchy for your site: the combination of resource URLs with content fingerprints, and short or no-cache lifetimes for HTML documents allows you to control how quickly updates are picked up by the client.
Minimize churn: some resources are updated more frequently than others. If there is a particular part of resource (e.g. JavaScript function, or set of CSS styles) that are often updated, consider delivering that code as a separate file. Doing so allows the remainder of the content (e.g. library code that does not change very often), to be fetched from cache and minimizes the amount of downloaded content whenever an update is fetched.

Authors: [Ilya Grigorik](https://www.igvita.com/)

{% include figure image_path="/assets/images/pages/performance/ilyagrigorik.jpg" alt="Profile photo of Ilya Grigorik" caption="Profile photo of Ilya Grigorik" class="align-left" %}

Ilya Grigorik is a web performance engineer at Google, co-chair of the W3C Web Performance Working group, and author of High Performance Browser Networking (O'Reilly) book. In short, an internet plumber. In off time, you'll find him working on open source projects, exploring the outdoors with a camera, or simply enjoying a good book.

## My HTTP Headers

Check web.config section for changes to Orchard to achive Vary: Accept-Encoding, With Accept-Encoding: gzip,deflate; With out these response headers we get no client cache

Request Headers

GET /blogs/are-you-human-checker HTTP/1.1

Host: donboulton.com

Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8

Accept-Encoding: gzip, deflate, sdch

Accept-Language: en-US,en;q=0.8

Cookie: cc_cookie_accept=cc_cookie_accept; _ga=GA1.2.6125818.1454086529; _gat=1

```html
Referer: http://donboulton.com/blogs/prettyphoto
```

Upgrade-Insecure-Requests: 1

User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.47 Safari/537.36

## Responsed Headers

HTTP/1.1 200 OK

Accept-Encoding: gzip,deflate,sdhc

Access-Control-Allow-Credentials: true

Access-Control-Allow-Origin

```html
https://donboulton.com
```

allowKeepAlive: true

Cache-Control: public, max-age=258425

Connection: closev

Content-Length: 66745

Content-Type: text/html

Date: Mon, 15 Feb 2016 00:20:56 GMT

ETag: 45989130

Expires: Mon, 25 Dec 2017 21:31:12 GMT

Server: Microsoft-IIS/8.5

Vary: Accept-Encoding: gzip, deflate, HOST,Accept-Encoding

X-AspNet-Version: 4.0.30319

X-AspNetMvc-Version: 5.2

X-Generator: Orchard

## Pjax

Using [jQuary-pjaxpjax](https://github.com/defunkt/jquery-pjax "Jquary pjax") is a jQuery plugin that uses ajax and pushState to deliver a fast browsing experience with real permalinks, page titles, and a working back button. pjax works by grabbing html from your server via ajax and replacing the content of a container on your page with the ajaxed html. It then updates the browser's current URL using pushState without reloading your page's layout or any resources (JS, CSS), giving the appearance of a fast, full page load. But really it's just ajax and pushState. Developed by Github Co-Founder [Chris Wanstrath](https://github.com/defunkt "defunkt"), and is in all Github pages.

## What is pjax and why we should use it

[Taken from pixelstech.net](http://www.pixelstech.net/article/1366737736-What-is-pjax-and-why-we-should-use-it "Jquary pjax")

Now many websites such as Facebook, Twitter support one browsing style which is when you click one link on their sites, the page will not be redirected, instead only the page contents are updated and URL on address bar is changed. This kind of user experience is much better compared to load the whole page with a blink.

There is one important component in the above browsing experience, these websites' AJAX refresh support browser history, when refreshing the page, the address on the address bar will also get updated, and when we click back button we can go back to the previous page.

How do we implement this function? Here we introduce one open source project named pjax which can realize this. The project URL is:

```html
https://github.com/defunkt/jquery-pjax
```

The demo page is:

```html
http://pjax.heroku.com/
```

If we don't check the pjax option, then the page will be redirected on clicking the link, after checking that option, the link will change to AJAX refresh.

Why use pjax?

pjax has some advantages:

Good user experience

When the whole page is redirected, our eyes will re-checking the new page, while only updating partial page, we only need to check the page which gets updated.

Reduce bandwidth and server cost

Since only part of the page is updated, many requests such as CSS/JS requests will not be sent anymore. Although no testings did on how much cost can be saved, the estimation is around 40% and the server cost can be reduced by 30%.

pjax also has some disadvantages:

No support of IE6

Since pjax uses the new standard, old browsers may encounter some problems while running pjax. But pjax itself supports fallback, when it finds that the browser doesn't support this function, it will go back to the original redirect way.

Complex server side support.

Server side should decide whether a complete page refresh is required or a partial page refresh is required according to the request sent to the server. The server side complexity will be increased, but for the well designed server side codes, it's not a big issue to support this.

How to use pjax?

You can read the official documentation here.

How does pjax work?

[Pjax only has one source file](https://github.com/defunkt/jquery-pjax/blob/master/jquery.pjax.js)

You can read through all the codes if you want. Here is a brief explanation:

First users should specify what links should use pjax requests and what are the contents to be updated after clicking the links.

## First install Pjax.Mvc

Pjax.Mvc is a library to integrate ASP.NET MVC with [jQuery.pjax](https://github.com/defunkt/jquery-pjax).

## Installation

To install Pjax.Mvc, run the following command in the [Package Manager Console](http://docs.nuget.org/docs/start-here/using-the-package-manager-console).

MVC 5

    PM> Install-Package Pjax.Mvc5

MVC 4

    PM> Install-Package Pjax.Mvc4

MVC 3

    PM> Install-Package Pjax.Mvc3

Adding to your root packages.config

```html
 <package id="Pjax.Mvc5" version="0.1.1" targetFramework="net452" />
```

Then add jquery.pjax.min.js to your Orchard.Resources or a link to jQuary.pjax CDN at:

[jquery.pjax.min.js](https://cdnjs.cloudflare.com/ajax/libs/jquery.pjax/1.9.6/jquery.pjax.min.js)

Adding to Themes\Views\Layout.cshtml for pjax enabled page to return just the main body contents, as the rest of my page does not change.

just wrapped @Zone(Model.Content) in a div as:

```html
<div id="pjax-container" data-pjax-container>
```

In the Layout.cshtml file

```html
@* the model content for the page is in the Content zone
@ the default position (nothing, zero, zilch) *@
@if (Model.Content != null) {
<div id="pjax-container" data-pjax-container>
<div id="content" class="group"
@Zone(Model.Content)}
```

My nav links, Recent Blog Posts links and Recent content links have data-pjax inserted.

```html
<a data-original-title="prettyPhoto" href="/blogs/prettyphoto" title="prettyPhoto" data-pjax></a>
```

All your have to do then is add a script file at the bottom of the Layout.cshtml file;

```javascript
<script type="text/javascript">
    if ($.support.pjax) {
    $(document).on('click', 'a[data-pjax]', function(event) {
     var container = $(this).closest('[data-pjax-container]')
    $.pjax.click(event, {container: container})
     })
 }
 </script>
```

Last we need to add two meta tags. If you are using the latest verion of Pjax.Mvc5.0.1.1 in your library the below version is yours.

```html
<meta name="pjax-timeout" content="1000">
<meta http-equiv="x-pjax-version" content="d4d26263aff43b9e6848743a02fdedef">
```

My tabs are pjaxed and I added this to Zone after content so the origional pjax container is bypassed for having no content in the content main pjax container.

```html
<div id="tabs-container" class="data-pjax-container" data-pjax-container>
```

{% include links.html %}