(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{195:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=(a(180),a(203)),i=a(202),c=(a(176),a(86),a(213)),l=a.n(c);function s(e){var t=e.children;return r.a.createElement("p",{className:"intro-text"},t[0].split(" ").map(function(e,t){return r.a.createElement(n.Fragment,{key:e+t},r.a.createElement(u,{word:e}),r.a.createElement("span",null," "))}),r.a.createElement(l.a,{cover:!0,bg:"pink",to:"/projects/"},r.a.createElement(d,{char:t[1].props.children})))}function u(e){var t=e.word;return r.a.createElement("span",{style:{display:"inline-block"}},t.split("").map(function(e,t){return r.a.createElement(d,{key:e+t,char:e})}))}function d(e){var t=e.char,a=Object(n.useState)("single-letter"),o=a[0],i=a[1];return r.a.createElement("span",{className:o,onMouseOver:function(){return i("single-letter hovered")},onMouseLeave:function(){return i("single-letter unhovered")}},t)}var m=a(270);t.default=function(e){var t=e.location;return r.a.createElement(o.a,{fontColor:"white",location:t},r.a.createElement(i.a,{title:"Portfolio",keywords:["karolina włoszek","product design","design","portfolio"]}),r.a.createElement("div",{id:"index-page",className:"background"},r.a.createElement("div",{className:"center"},r.a.createElement("div",{className:"introduction-wrapper"},r.a.createElement(m.Fade,{duration:1500},r.a.createElement(s,null,"Hi, I'm Karolina, a freelance designer based in Wrocław. Ice cream gummies carrot cake chocolate bar tootsie roll. Liquorice macaroon soufflé gingerbread. ",r.a.createElement("span",null,"Tu se obejrzyj.")))))))}},202:function(e,t,a){"use strict";var n=a(215),r=a(0),o=a.n(r),i=a(1),c=a.n(i),l=a(220),s=a.n(l);function u(e){var t=e.description,a=e.lang,r=e.meta,i=e.keywords,c=e.title,l=n.data.site,u=t||l.siteMetadata.description;return o.a.createElement(s.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:c},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:u}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})}u.defaultProps={lang:"en",meta:[],keywords:[],description:""},u.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=u},203:function(e,t,a){"use strict";var n=a(212),r=a(0),o=a.n(r),i=a(1),c=a.n(i),l=a(84),s=(a(178),a(219)),u=a(209),d=s.a.header.withConfig({displayName:"header__HeaderContainer",componentId:"sc-31ozxh-0"})(["color:",";.center{ul{.hoverable:before,.hoverable:after{content:'';position:absolute;width:0%;height:0.12rem;top:50%;margin-top:-0.5px;background:#fff;}.hoverable:before{left:0;}.hoverable:after{right:0;background:",";transition:width 0.8s cubic-bezier(0.22,0.61,0.36,1);}.hoverable:hover:before{background:",";width:100%;transition:width 0.5s cubic-bezier(0.22,0.61,0.36,1);}.hoverable:hover:after{background:transparent;width:100%;transition:0s;}}}"],function(e){return e.color},function(e){return"inherit"===e.color?"#282828":e.color},function(e){return"inherit"===e.color?"#282828":e.color}),m=function(e){var t=e.fontColor,a=e.location;return console.log("nowa wersja2"),o.a.createElement(d,{id:"header",color:t},o.a.createElement("div",{className:"center"},o.a.createElement(u.a,{to:"/"},"Karolina Włoszek"),o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(u.a,{to:"/projects/"!==a?"/projects/":"/",className:"/projects/"!==a?"hoverable":null},"/projects/"!==a?"PROJEKTY":"X")),o.a.createElement("li",null,o.a.createElement(u.a,{to:"/about-me/"!==a?"/about-me/":"/",className:"/about-me/"!==a?"hoverable":null},"/about-me/"!==a?"O MNIE":"X")))))},p=function(e){var t=e.children,a=e.fontColor,r=e.location;return o.a.createElement(l.StaticQuery,{query:"2994927498",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",null,o.a.createElement(m,{fontColor:a,location:r}),o.a.createElement("main",null,t)))},data:n})};p.propTypes={children:c.a.node.isRequired,fontColor:c.a.string,renderFooter:c.a.bool},p.defaultProps={fontColor:"black",renderFooter:!1};t.a=p},209:function(e,t,a){"use strict";a.d(t,"a",function(){return c});a(33);var n=a(0),r=a.n(n),o=a(213),i=a.n(o);a(207),a(208);function c(e){return r.a.createElement(i.a,Object.assign({fade:!0},e))}},212:function(e){e.exports={data:{site:{siteMetadata:{title:"Karolina Włoszek"}}}}},215:function(e){e.exports={data:{site:{siteMetadata:{title:"Karolina Włoszek",description:"Portfolio - Karolina Włoszek",author:"@gatsbyjs"}}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-454c433c3dcd7eefeca0.js.map