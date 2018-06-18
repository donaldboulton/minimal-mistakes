/*! New Window - 2018-06-16 */
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');ga('create','UA-30162465-2','auto');ga('require','GTM-T2NFHJ');ga('send','pageview');function onSubmit(token){document.getElementById("review-form").submit();}  document.documentElement.className = document.documentElement.className.replace(/\bno-js\b/g, '') + ' js ';
/*! New Window - 2018-06-16 */
function external_new_window(){for(var c=document.getElementsByTagName("a"),a=0;a<c.length;a++){var b=c[a];b.getAttribute("href")&&b.hostname!==location.hostname&&(b.target="_blank")}}
function pdf_new_window()
{if(!document.getElementsByTagName)return false;var links=document.getElementsByTagName("a");for(var eleLink=0;eleLink<links.length;eleLink++){if((links[eleLink].href.indexOf('.pdf')!==-1)||(links[eleLink].href.indexOf('.doc')!==-1)||(links[eleLink].href.indexOf('.docx')!==-1)){links[eleLink].onclick=function(){window.open(this.href);return false;}}}}
pdf_new_window()
external_new_window();
window.addEventListener("load",function(){window.cookieconsent.initialise({"palette":{"popup":{"background":"#031111","text":"#d6d6d6"},"button":{"background":"#1faaaa"}},revokable:true,onStatusChange:function(status){console.log(this.hasConsented() ? 'enable cookies':'disable cookies')},law:{regionalLaw:false,},location:true,"theme":"edgeless","position":"bottom-left","content":{"href":"https://donboulton.com/terms/#cookies-and-web-beacons"}});
$(document).ready(function() {
  svg4everybody();
  $("a").smoothScroll({ offset: -20 });
});