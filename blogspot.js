if (document.location != &#39;<data:blog.canonicalUrl/>&#39;){
var dom = document.location.hostname;
var path = document.location.pathname;
var dot = dom.split(&quot;.&quot;);
var ex = dot[2];
var ex2 = dot[3];
if (ex != &quot;com&quot; || ex2 != null){
var name = dot[0] + &quot;.blogspot.com/ncr&quot;;
window.location.replace(&quot;https://&quot; + name + path);}}