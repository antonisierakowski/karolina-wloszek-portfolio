(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{157:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=(n(188),n(159)),o=n(158),c=(n(160),n(162)),l=n(217),s=n.n(l),u=n(163);function m(e){var t=e.title,n=e.description,a=e.cursorScreenHalf;return r.a.createElement("div",{className:"project-caption",style:"right"===a?{right:"50%",textAlign:"right"}:{left:"50%"}},r.a.createElement("p",{className:"project-title"},t),r.a.createElement("span",{className:"project-description"},"– ",n))}var d=n(233);t.default=function(e){var t=e.location,n=Object(a.useState)(!1),l=n[0],p=n[1],f=Object(a.useState)(null),v=f[0],E=f[1],w=function(){var e=Object(a.useState)(null),t=e[0],n=e[1];return Object(a.useEffect)(function(){function e(e){var t=e.clientX,a=d.window.innerWidth;n(t>a/2?"right":"left")}return d.document.addEventListener("mousemove",function(t){return e(t)}),function(){return d.document.removeEventListener("mousemove",function(t){return e(t)})}},[]),t}(),g=function(){p(!1),E(null)},k=c.a.map(function(e,t){return r.a.createElement("div",{className:"slide-container",key:e.title,onMouseEnter:function(){return function(e){p(!0),E(e)}(t)},onMouseLeave:g},r.a.createElement(u.a,{to:"/projects/"+e.route,key:"link"+e.title},r.a.createElement("img",{alt:"img"+e.title,src:e.previewData.img,className:l&&v!==t?"out-of-focus":null})),l&&v===t?r.a.createElement(m,{title:e.title,description:e.previewData.caption,cursorScreenHalf:w}):null)}),j=c.a.map(function(e,t){return r.a.createElement("div",{key:e.title+t,className:v===t?"dot active":"dot"})});return r.a.createElement(i.a,{fontColor:"inherit",location:t.pathname},r.a.createElement(o.a,{title:"Projekty",keywords:["karolina włoszek","product design","design","portfolio"]}),r.a.createElement("div",{id:"projects-page",className:"background"},r.a.createElement("div",{className:"slider-wrapper"},r.a.createElement(s.a,{dots:!1,slidesToShow:4,infinite:!0,arrows:!0,slidesToScroll:2,lazyLoad:"progressive",speed:400},k)),r.a.createElement("div",{className:"dots"},j)))}}}]);
//# sourceMappingURL=component---src-pages-projects-js-7f9cdb8e2b45aad0a913.js.map