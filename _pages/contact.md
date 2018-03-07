---
permalink: /contact/
title: "Contact"
last_modified_at: 2018-03-06T12:42:38-04:00
toc: true
toc_label: "Site Links"
toc_icon: "file"
---

{% include octo-arm.html %}
## Social Contacts

### Twitter
<div>
            <a class="twitter-timeline"  href="https://twitter.com/donboulton" data-widget-id="422369327291957248">Tweets by @donboulton</a>
            <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>
</div>        

### Google+

<script async type="text/javascript" src="//apis.google.com/js/plusone.js?callback=gpcb"></script>
<noscript>Please enable JavaScript to view the <a href="https://plus.google.com/">comments powered by Google+.</a></noscript>

### Facebook

<div id="fb-root"></div>
<script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5{% if site.comments.facebook.appid %}&appId={{ site.comments.facebook.appid }}{% endif %}";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>

## Discussions Disqus

  <script>
    var disqus_config = function () {
      this.page.url = "{{ page.url | absolute_url }}";  // Replace PAGE_URL with your page's canonical URL variable
      this.page.identifier = "{{ page.id }}"; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    };
    (function() { // DON'T EDIT BELOW THIS LINE
      var d = document, s = d.createElement('script');
      s.src = 'https://{{ site.comments.disqus.shortname }}.disqus.com/embed.js';
      s.setAttribute('data-timestamp', +new Date());
      (d.head || d.body).appendChild(s);
    })();
  </script>
<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>


{% include affiliate-disclosure.html %}