(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{185:function(e,t,o){"use strict";o.r(t),o.d(t,"default",function(){return l});var n=o(0),r=o.n(n),i=o(204),a=o(201);function l(e){var t=e.location;return r.a.createElement(a.a,{data:i.a[4],nextData:i.a[5===i.a.length?0:5],location:t.pathname})}},198:function(e,t,o){var n=o(31).f,r=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in r||o(20)&&n(r,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(e){return""}}})},199:function(e,t,o){!function(){var t=o(196).window,n=o(196).document;if(void 0!==typeof t&&void 0!==typeof n){e.exports={polyfill:function(){var e=t,o=n;if(!("scrollBehavior"in o.documentElement.style&&!0!==e.__forceSmoothScrollPolyfill__)){var r,i=e.HTMLElement||e.Element,a=468,l={scroll:e.scroll||e.scrollTo,scrollBy:e.scrollBy,elementScroll:i.prototype.scroll||u,scrollIntoView:i.prototype.scrollIntoView},s=e.performance&&e.performance.now?e.performance.now.bind(e.performance):Date.now,c=(r=e.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(r)?1:0);e.scroll=e.scrollTo=function(){void 0!==arguments[0]&&(!0!==f(arguments[0])?h.call(e,o.body,void 0!==arguments[0].left?~~arguments[0].left:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:e.scrollY||e.pageYOffset):l.scroll.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:e.scrollY||e.pageYOffset))},e.scrollBy=function(){void 0!==arguments[0]&&(f(arguments[0])?l.scrollBy.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):h.call(e,o.body,~~arguments[0].left+(e.scrollX||e.pageXOffset),~~arguments[0].top+(e.scrollY||e.pageYOffset)))},i.prototype.scroll=i.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==f(arguments[0])){var e=arguments[0].left,t=arguments[0].top;h.call(this,this,void 0===e?this.scrollLeft:~~e,void 0===t?this.scrollTop:~~t)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");l.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},i.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==f(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):l.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},i.prototype.scrollIntoView=function(){if(!0!==f(arguments[0])){var t=function(e){for(;e!==o.body&&!1===m(e);)e=e.parentNode||e.host;return e}(this),n=t.getBoundingClientRect(),r=this.getBoundingClientRect();t!==o.body?(h.call(this,t,t.scrollLeft+r.left-n.left,t.scrollTop+r.top-n.top),"fixed"!==e.getComputedStyle(t).position&&e.scrollBy({left:n.left,top:n.top,behavior:"smooth"})):e.scrollBy({left:r.left,top:r.top,behavior:"smooth"})}else l.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function u(e,t){this.scrollLeft=e,this.scrollTop=t}function f(e){if(null===e||"object"!=typeof e||void 0===e.behavior||"auto"===e.behavior||"instant"===e.behavior)return!0;if("object"==typeof e&&"smooth"===e.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+e.behavior+" is not a valid value for enumeration ScrollBehavior.")}function d(e,t){return"Y"===t?e.clientHeight+c<e.scrollHeight:"X"===t?e.clientWidth+c<e.scrollWidth:void 0}function p(t,o){var n=e.getComputedStyle(t,null)["overflow"+o];return"auto"===n||"scroll"===n}function m(e){var t=d(e,"Y")&&p(e,"Y"),o=d(e,"X")&&p(e,"X");return t||o}function v(t){var o,n,r,i,l=(s()-t.startTime)/a;i=l=l>1?1:l,o=.5*(1-Math.cos(Math.PI*i)),n=t.startX+(t.x-t.startX)*o,r=t.startY+(t.y-t.startY)*o,t.method.call(t.scrollable,n,r),n===t.x&&r===t.y||e.requestAnimationFrame(v.bind(e,t))}function h(t,n,r){var i,a,c,f,d=s();t===o.body?(i=e,a=e.scrollX||e.pageXOffset,c=e.scrollY||e.pageYOffset,f=l.scroll):(i=t,a=t.scrollLeft,c=t.scrollTop,f=u),v({scrollable:i,method:f,startTime:d,startX:a,startY:c,x:n,y:r})}}}}}()},200:function(e,t,o){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var o=function(){return function(e,t,o){this.name=e,this.version=t,this.os=o}}();t.BrowserInfo=o;var n=function(){return function(t){this.version=t,this.name="node",this.os=e.platform}}();t.NodeInfo=n;var r=function(){return function(){this.bot=!0,this.name="bot",this.version=null,this.os=null}}();t.BotInfo=r;var i=3,a=[["aol",/AOLShield\/([0-9\._]+)/],["edge",/Edge\/([0-9\._]+)/],["yandexbrowser",/YaBrowser\/([0-9\._]+)/],["vivaldi",/Vivaldi\/([0-9\.]+)/],["kakaotalk",/KAKAOTALK\s([0-9\.]+)/],["samsung",/SamsungBrowser\/([0-9\.]+)/],["silk",/\bSilk\/([0-9._-]+)\b/],["miui",/MiuiBrowser\/([0-9\.]+)$/],["beaker",/BeakerBrowser\/([0-9\.]+)/],["edge-chromium",/Edg\/([0-9\.]+)/],["chrome",/(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["phantomjs",/PhantomJS\/([0-9\.]+)(:?\s|$)/],["crios",/CriOS\/([0-9\.]+)(:?\s|$)/],["firefox",/Firefox\/([0-9\.]+)(?:\s|$)/],["fxios",/FxiOS\/([0-9\.]+)/],["opera-mini",/Opera Mini.*Version\/([0-9\.]+)/],["opera",/Opera\/([0-9\.]+)(?:\s|$)/],["opera",/OPR\/([0-9\.]+)(:?\s|$)/],["ie",/Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],["ie",/MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],["ie",/MSIE\s(7\.0)/],["bb10",/BB10;\sTouch.*Version\/([0-9\.]+)/],["android",/Android\s([0-9\.]+)/],["ios",/Version\/([0-9\._]+).*Mobile.*Safari.*/],["safari",/Version\/([0-9\._]+).*Safari/],["facebook",/FBAV\/([0-9\.]+)/],["instagram",/Instagram\s([0-9\.]+)/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Mobile/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Gecko\)$/],["searchbot",/alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/]],l=[["iOS",/iP(hone|od|ad)/],["Android OS",/Android/],["BlackBerry OS",/BlackBerry|BB10/],["Windows Mobile",/IEMobile/],["Amazon OS",/Kindle/],["Windows 3.11",/Win16/],["Windows 95",/(Windows 95)|(Win95)|(Windows_95)/],["Windows 98",/(Windows 98)|(Win98)/],["Windows 2000",/(Windows NT 5.0)|(Windows 2000)/],["Windows XP",/(Windows NT 5.1)|(Windows XP)/],["Windows Server 2003",/(Windows NT 5.2)/],["Windows Vista",/(Windows NT 6.0)/],["Windows 7",/(Windows NT 6.1)/],["Windows 8",/(Windows NT 6.2)/],["Windows 8.1",/(Windows NT 6.3)/],["Windows 10",/(Windows NT 10.0)/],["Windows ME",/Windows ME/],["Open BSD",/OpenBSD/],["Sun OS",/SunOS/],["Chrome OS",/CrOS/],["Linux",/(Linux)|(X11)/],["Mac OS",/(Mac_PowerPC)|(Macintosh)/],["QNX",/QNX/],["BeOS",/BeOS/],["OS/2",/OS\/2/],["Search Bot",/(nuhk)|(Googlebot)|(Yammybot)|(Openbot)|(Slurp)|(MSNBot)|(Ask Jeeves\/Teoma)|(ia_archiver)/]];function s(e){var t=""!==e&&a.reduce(function(t,o){var n=o[0],r=o[1];if(t)return t;var i=r.exec(e);return!!i&&[n,i]},!1);if(!t)return null;var n=t[0],l=t[1];if("searchbot"===n)return new r;var s=l[1]&&l[1].split(/[._]/).slice(0,3);return s?s.length<i&&(s=s.concat(function(e){for(var t=[],o=0;o<e;o++)t.push("0");return t}(i-s.length))):s=[],new o(n,s.join("."),c(e))}function c(e){for(var t=0,o=l.length;t<o;t++){var n=l[t],r=n[0];if(n[1].test(e))return r}return null}function u(){return void 0!==e&&e.version?new n(e.version.slice(1)):null}t.detect=function(){return"undefined"!=typeof navigator?s(navigator.userAgent):u()},t.parseUserAgent=s,t.detectOS=c,t.getNodeVersion=u}).call(this,o(85))},201:function(e,t,o){"use strict";o(198);var n=o(0),r=o.n(n),i=(o(176),o(177),o(203)),a=o(202),l=o(196),s=o(199),c=o.n(s);var u=o(200),f=o(84);function d(e){var t=e.data,o=e.nextData,s=e.location,d=function(){var e=Object(n.useState)(l.window.pageYOffset),t=e[0],o=e[1];return Object(n.useEffect)(function(){var e=function(){o(l.window.pageYOffset)};return l.document.addEventListener("scroll",e),function(){l.document.removeEventListener("scroll",e)}},[]),0===t}(),p=Object(n.useRef)(null),m=Object(u.detect)().name;c.a.polyfill();var v=Object(n.useState)(!1),h=v[0],w=v[1],b=Object(n.useState)(!1),g=b[0],y=b[1];Object(n.useEffect)(function(){var e,t=function(){return l.window.scrollTo({top:p.current.offsetTop,left:0,behavior:"smooth"})};return e="firefox"===m?function(){t(),setTimeout(function(){t()},200),setTimeout(function(){t()},300)}:function(e){e.wheelDelta<0&&(t(),setTimeout(function(){t()},800))},d&&l.document.addEventListener("firefox"===m?"scroll":"wheel",e,{passive:!1}),function(){l.document.removeEventListener("firefox"===m?"scroll":"wheel",e)}},[d]);var E=function(){y(!0),setTimeout(function(){l.window.scrollTo(0,0),Object(f.navigate)("/projects/"+o.route)},1e3)};return r.a.createElement(i.a,{fontColor:"inherit",location:s},r.a.createElement(a.a,{title:"string"==typeof t.title?t.title:t.title.props.children,keywords:["karolina włoszek","product design","design","portfolio"]}),r.a.createElement("div",{id:"project-page",className:"background"},r.a.createElement("section",{className:"project-cover",style:{backgroundImage:"url("+t.contentData.coverImg+")"},onClick:function(){l.window.scrollTo({top:p.current.offsetTop,behavior:"smooth"})}}),r.a.createElement("div",{className:"center",ref:p},r.a.createElement("section",{className:"project-info"},r.a.createElement("div",{className:"title-section"},r.a.createElement("h2",{className:"title"},t.title),r.a.createElement("span",{className:"year"},"–",t.contentData.year)),r.a.createElement("div",{className:"description-section"},r.a.createElement("h4",{className:"subtitle"},t.contentData.subtitle),r.a.createElement("div",{className:"paragraphs"},t.contentData.paragraphs.map(function(e){return r.a.createElement(n.Fragment,{key:e.title},r.a.createElement("div",null,r.a.createElement("strong",null,e.title)),r.a.createElement("div",null,e.content))}))))),r.a.createElement("section",{className:"project-gallery"},t.contentData.gallery.map(function(e,o){return 1===e.length?r.a.createElement("div",{className:"one-photo",key:e},r.a.createElement("img",{src:e,alt:t.title+o})):2===e.length?r.a.createElement("div",{className:"two-photos",key:e},e.map(function(e,o){return r.a.createElement("div",{className:"photo",key:e},r.a.createElement("img",{src:e,alt:t.title+o}))})):4===e.length?r.a.createElement("div",{className:"four-photos",key:e},e.map(function(e,o){return r.a.createElement("div",{className:"photo",key:e},r.a.createElement("img",{src:e,alt:t.title+o}))})):null})),r.a.createElement("section",{className:"project-bottom",style:{backgroundImage:"url("+o.contentData.coverImg+")"}},r.a.createElement("div",{className:h?"background active":"background"},r.a.createElement("div",{className:g?"next-project active":"next-project"},r.a.createElement("div",{className:"wrapper"},r.a.createElement("h1",{className:"title",onClick:E,onMouseEnter:function(){return w(!0)},onMouseLeave:function(){return w(!1)}},o.title),r.a.createElement("span",{className:"subtitle",onClick:E,onMouseEnter:function(){return w(!0)},onMouseLeave:function(){return w(!1)}},"– ",o.previewData.caption)),r.a.createElement("span",{className:"see-next",onClick:E,onMouseEnter:function(){return w(!0)},onMouseLeave:function(){return w(!1)}},"See the next project ▶︎")),r.a.createElement("div",{className:"center"},r.a.createElement("div",{className:"footer"},r.a.createElement("span",null,"© 2019 – karolina włoszek"))),r.a.createElement("div",{className:g?"transition-circle active":"transition-circle"})))))}o.d(t,"a",function(){return d})}}]);
//# sourceMappingURL=component---src-pages-projects-moduu-js-dded7462e8a9451da605.js.map