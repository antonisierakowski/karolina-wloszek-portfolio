(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{155:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=(a(193),a(164)),o=a(163),c=(a(165),a(167)),l=a(239),s=a.n(l),u=a(169);function m(e){var t=e.title,a=e.description,n=e.cursorScreenHalf;return r.a.createElement("div",{className:"project-caption",style:"right"===n?{right:"50%",textAlign:"right"}:{left:"50%"}},r.a.createElement("p",{className:"project-title"},t),r.a.createElement("span",{className:"project-description"},"– ",a))}var d=a(157);t.default=function(e){var t=e.location,a=Object(n.useState)(!1),l=a[0],p=a[1],f=Object(n.useState)(null),v=f[0],E=f[1],w=function(){var e=Object(n.useState)(null),t=e[0],a=e[1];return Object(n.useEffect)(function(){function e(e){var t=e.clientX,n=d.window.innerWidth;a(t>n/2?"right":"left")}return d.document.addEventListener("mousemove",e),function(){d.document.removeEventListener("mousemove",e)}},[]),t}(),g=function(){p(!1),E(null)},k=c.a.map(function(e,t){return r.a.createElement("div",{className:"slide-container",key:e.title,onMouseEnter:function(){return function(e){p(!0),E(e)}(t)},onMouseLeave:g},r.a.createElement(u.a,{to:"/projects/"+e.route,key:"link"+e.title},r.a.createElement("img",{alt:"img"+e.title,src:e.previewData.img,className:l&&v!==t?"out-of-focus":null})),l&&v===t?r.a.createElement(m,{title:e.title,description:e.previewData.caption,cursorScreenHalf:w}):null)}),j=c.a.map(function(e,t){return r.a.createElement("div",{key:e.title+t,className:v===t?"dot active":"dot"})});return r.a.createElement(i.a,{fontColor:"inherit",location:t.pathname},r.a.createElement(o.a,{title:"Projekty",keywords:["karolina włoszek","product design","design","portfolio"]}),r.a.createElement("div",{id:"projects-page",className:"background"},r.a.createElement("div",{className:"slider-wrapper"},r.a.createElement(s.a,{dots:!1,slidesToShow:4,infinite:!0,arrows:!0,slidesToScroll:2,lazyLoad:"progressive",speed:400},k)),r.a.createElement("div",{className:"dots"},j)))}}}]);
//# sourceMappingURL=component---src-pages-projects-js-54ef3e099dfb46ff9937.js.map