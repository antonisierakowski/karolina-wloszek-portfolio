(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{146:function(e,t,o){"use strict";o.r(t),o.d(t,"default",function(){return a});var n=o(0),r=o.n(n),i=o(167),l=o(162);function a(e){var t=e.location;return r.a.createElement(l.a,{data:i.a[4],location:t.pathname})}},157:function(e,t,o){"use strict";var n=o(158),r=n.Nothing,i=n.isNothing,l="undefined"!=typeof window?window:r,a="undefined"!=typeof document?document:r;e.exports.window=l,e.exports.document=a,e.exports.exists=function(e){return!i(e)}},158:function(e,t,o){"use strict";o.r(t),o.d(t,"Nothing",function(){return r}),o.d(t,"toBool",function(){return i}),o.d(t,"isNothing",function(){return l}),o.d(t,"isSomething",function(){return a}),o.d(t,"serialize",function(){return s}),o.d(t,"deserialize",function(){return c});var n,r=((n=function(){return r}).toString=n.toLocaleString=n[Symbol.toPrimitive]=function(){return""},n.valueOf=function(){return!1},new Proxy(Object.freeze(n),{get:function(e,t){return e.hasOwnProperty(t)?e[t]:r}})),i=function(e){return!(!e||!e.valueOf())},l=function(e){return e===r},a=function(e){return!(e===r||null==e)},s=function(e){return JSON.stringify(e,function(e,t){return t===r?null:t})},c=function(e){return JSON.parse(e,function(e,t){return null===t?r:t})}},159:function(e,t,o){var n=o(25).f,r=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in r||o(18)&&n(r,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(e){return""}}})},160:function(e,t,o){!function(){"use strict";if(void 0!==typeof window&&void 0!==typeof document){e.exports={polyfill:function(){var e=window,t=document;if(!("scrollBehavior"in t.documentElement.style&&!0!==e.__forceSmoothScrollPolyfill__)){var o,n=e.HTMLElement||e.Element,r=468,i={scroll:e.scroll||e.scrollTo,scrollBy:e.scrollBy,elementScroll:n.prototype.scroll||s,scrollIntoView:n.prototype.scrollIntoView},l=e.performance&&e.performance.now?e.performance.now.bind(e.performance):Date.now,a=(o=e.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(o)?1:0);e.scroll=e.scrollTo=function(){void 0!==arguments[0]&&(!0!==c(arguments[0])?m.call(e,t.body,void 0!==arguments[0].left?~~arguments[0].left:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:e.scrollY||e.pageYOffset):i.scroll.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:e.scrollY||e.pageYOffset))},e.scrollBy=function(){void 0!==arguments[0]&&(c(arguments[0])?i.scrollBy.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):m.call(e,t.body,~~arguments[0].left+(e.scrollX||e.pageXOffset),~~arguments[0].top+(e.scrollY||e.pageYOffset)))},n.prototype.scroll=n.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==c(arguments[0])){var e=arguments[0].left,t=arguments[0].top;m.call(this,this,void 0===e?this.scrollLeft:~~e,void 0===t?this.scrollTop:~~t)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");i.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},n.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==c(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):i.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},n.prototype.scrollIntoView=function(){if(!0!==c(arguments[0])){var o=function(e){for(;e!==t.body&&!1===d(e);)e=e.parentNode||e.host;return e}(this),n=o.getBoundingClientRect(),r=this.getBoundingClientRect();o!==t.body?(m.call(this,o,o.scrollLeft+r.left-n.left,o.scrollTop+r.top-n.top),"fixed"!==e.getComputedStyle(o).position&&e.scrollBy({left:n.left,top:n.top,behavior:"smooth"})):e.scrollBy({left:r.left,top:r.top,behavior:"smooth"})}else i.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function s(e,t){this.scrollLeft=e,this.scrollTop=t}function c(e){if(null===e||"object"!=typeof e||void 0===e.behavior||"auto"===e.behavior||"instant"===e.behavior)return!0;if("object"==typeof e&&"smooth"===e.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+e.behavior+" is not a valid value for enumeration ScrollBehavior.")}function u(e,t){return"Y"===t?e.clientHeight+a<e.scrollHeight:"X"===t?e.clientWidth+a<e.scrollWidth:void 0}function f(t,o){var n=e.getComputedStyle(t,null)["overflow"+o];return"auto"===n||"scroll"===n}function d(e){var t=u(e,"Y")&&f(e,"Y"),o=u(e,"X")&&f(e,"X");return t||o}function p(t){var o,n,i,a,s=(l()-t.startTime)/r;a=s=s>1?1:s,o=.5*(1-Math.cos(Math.PI*a)),n=t.startX+(t.x-t.startX)*o,i=t.startY+(t.y-t.startY)*o,t.method.call(t.scrollable,n,i),n===t.x&&i===t.y||e.requestAnimationFrame(p.bind(e,t))}function m(o,n,r){var a,c,u,f,d=l();o===t.body?(a=e,c=e.scrollX||e.pageXOffset,u=e.scrollY||e.pageYOffset,f=i.scroll):(a=o,c=o.scrollLeft,u=o.scrollTop,f=s),p({scrollable:a,method:f,startTime:d,startX:c,startY:u,x:n,y:r})}}}}}()},161:function(e,t,o){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var o=function(){return function(e,t,o){this.name=e,this.version=t,this.os=o}}();t.BrowserInfo=o;var n=function(){return function(t){this.version=t,this.name="node",this.os=e.platform}}();t.NodeInfo=n;var r=function(){return function(){this.bot=!0,this.name="bot",this.version=null,this.os=null}}();t.BotInfo=r;var i=3,l=[["aol",/AOLShield\/([0-9\._]+)/],["edge",/Edge\/([0-9\._]+)/],["yandexbrowser",/YaBrowser\/([0-9\._]+)/],["vivaldi",/Vivaldi\/([0-9\.]+)/],["kakaotalk",/KAKAOTALK\s([0-9\.]+)/],["samsung",/SamsungBrowser\/([0-9\.]+)/],["silk",/\bSilk\/([0-9._-]+)\b/],["miui",/MiuiBrowser\/([0-9\.]+)$/],["beaker",/BeakerBrowser\/([0-9\.]+)/],["edge-chromium",/Edg\/([0-9\.]+)/],["chrome",/(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["phantomjs",/PhantomJS\/([0-9\.]+)(:?\s|$)/],["crios",/CriOS\/([0-9\.]+)(:?\s|$)/],["firefox",/Firefox\/([0-9\.]+)(?:\s|$)/],["fxios",/FxiOS\/([0-9\.]+)/],["opera-mini",/Opera Mini.*Version\/([0-9\.]+)/],["opera",/Opera\/([0-9\.]+)(?:\s|$)/],["opera",/OPR\/([0-9\.]+)(:?\s|$)/],["ie",/Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],["ie",/MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],["ie",/MSIE\s(7\.0)/],["bb10",/BB10;\sTouch.*Version\/([0-9\.]+)/],["android",/Android\s([0-9\.]+)/],["ios",/Version\/([0-9\._]+).*Mobile.*Safari.*/],["safari",/Version\/([0-9\._]+).*Safari/],["facebook",/FBAV\/([0-9\.]+)/],["instagram",/Instagram\s([0-9\.]+)/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Mobile/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Gecko\)$/],["searchbot",/alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/]],a=[["iOS",/iP(hone|od|ad)/],["Android OS",/Android/],["BlackBerry OS",/BlackBerry|BB10/],["Windows Mobile",/IEMobile/],["Amazon OS",/Kindle/],["Windows 3.11",/Win16/],["Windows 95",/(Windows 95)|(Win95)|(Windows_95)/],["Windows 98",/(Windows 98)|(Win98)/],["Windows 2000",/(Windows NT 5.0)|(Windows 2000)/],["Windows XP",/(Windows NT 5.1)|(Windows XP)/],["Windows Server 2003",/(Windows NT 5.2)/],["Windows Vista",/(Windows NT 6.0)/],["Windows 7",/(Windows NT 6.1)/],["Windows 8",/(Windows NT 6.2)/],["Windows 8.1",/(Windows NT 6.3)/],["Windows 10",/(Windows NT 10.0)/],["Windows ME",/Windows ME/],["Open BSD",/OpenBSD/],["Sun OS",/SunOS/],["Chrome OS",/CrOS/],["Linux",/(Linux)|(X11)/],["Mac OS",/(Mac_PowerPC)|(Macintosh)/],["QNX",/QNX/],["BeOS",/BeOS/],["OS/2",/OS\/2/],["Search Bot",/(nuhk)|(Googlebot)|(Yammybot)|(Openbot)|(Slurp)|(MSNBot)|(Ask Jeeves\/Teoma)|(ia_archiver)/]];function s(e){var t=""!==e&&l.reduce(function(t,o){var n=o[0],r=o[1];if(t)return t;var i=r.exec(e);return!!i&&[n,i]},!1);if(!t)return null;var n=t[0],a=t[1];if("searchbot"===n)return new r;var s=a[1]&&a[1].split(/[._]/).slice(0,3);return s?s.length<i&&(s=s.concat(function(e){for(var t=[],o=0;o<e;o++)t.push("0");return t}(i-s.length))):s=[],new o(n,s.join("."),c(e))}function c(e){for(var t=0,o=a.length;t<o;t++){var n=a[t],r=n[0];if(n[1].test(e))return r}return null}function u(){return void 0!==e&&e.version?new n(e.version.slice(1)):null}t.detect=function(){return"undefined"!=typeof navigator?s(navigator.userAgent):u()},t.parseUserAgent=s,t.detectOS=c,t.getNodeVersion=u}).call(this,o(166))},162:function(e,t,o){"use strict";o(159);var n=o(0),r=o.n(n),i=(o(165),o(168),o(164)),l=o(163),a=o(157),s=o(160),c=o.n(s);var u=o(161);function f(e){var t,o,s,f=e.data,d=e.location,p=(t=Object(n.useState)(a.window.pageYOffset),o=t[0],s=t[1],Object(n.useEffect)(function(){var e=function(){s(a.window.pageYOffset)};return a.document.addEventListener("scroll",e),function(){a.document.removeEventListener("scroll",e)}},[]),0===o),m=Object(n.useRef)(null),v=Object(u.detect)().name;a.window.__forceSmoothScrollPolyfill__=!0,c.a.polyfill(),Object(n.useEffect)(function(){var e,t=function(){return a.window.scrollTo({top:m.current.offsetTop,left:0,behavior:"smooth"})};return e="firefox"===v?function(){t(),setTimeout(function(){t()},200),setTimeout(function(){t()},300)}:function(e){e.wheelDelta<0&&(t(),setTimeout(function(){t()},800))},p&&a.document.addEventListener("firefox"===v?"scroll":"wheel",e,{passive:!1}),function(){a.document.removeEventListener("firefox"===v?"scroll":"wheel",e)}},[p]);return r.a.createElement(i.a,{fontColor:"inherit",location:d},r.a.createElement(l.a,{title:"string"==typeof f.title?f.title:f.title.props.children,keywords:["karolina włoszek","product design","design","portfolio"]}),r.a.createElement("div",{id:"project-page",className:"background"},r.a.createElement("section",{className:"project-cover",style:{backgroundImage:"url("+f.contentData.coverImg+")"},onClick:function(){a.window.scrollTo({top:m.current.offsetTop,behavior:"smooth"})}}),r.a.createElement("div",{className:"center",ref:m},r.a.createElement("section",{className:"project-info"},r.a.createElement("div",{className:"title-section"},r.a.createElement("h2",{className:"title"},f.title),r.a.createElement("span",{className:"year"},"–",f.contentData.year)),r.a.createElement("div",{className:"description-section"},r.a.createElement("h4",{className:"subtitle"},f.contentData.subtitle),r.a.createElement("div",{className:"paragraphs"},f.contentData.paragraphs.map(function(e){return r.a.createElement(n.Fragment,{key:e.title},r.a.createElement("div",null,r.a.createElement("strong",null,e.title)),r.a.createElement("div",null,e.content))}))))),r.a.createElement("section",{className:"project-gallery"},f.contentData.gallery.map(function(e,t){return 1===e.length?r.a.createElement("div",{className:"one-photo",key:e},r.a.createElement("img",{src:e,alt:f.title+t})):2===e.length?r.a.createElement("div",{className:"two-photos",key:e},e.map(function(e,t){return r.a.createElement("div",{className:"photo",key:e},r.a.createElement("img",{src:e,alt:f.title+t}))})):4===e.length?r.a.createElement("div",{className:"four-photos",key:e},e.map(function(e,t){return r.a.createElement("div",{className:"photo",key:e},r.a.createElement("img",{src:e,alt:f.title+t}))})):null}))))}o.d(t,"a",function(){return f})}}]);
//# sourceMappingURL=component---src-pages-projects-moduu-js-463b783d9f550b1ea88e.js.map