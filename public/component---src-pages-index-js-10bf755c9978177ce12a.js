(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{147:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=(a(163),a(156)),i=a(154);a(161),a(75);function l(e){var t=e.char,a=Object(n.useState)("single-letter"),o=a[0],i=a[1];return" "===t?r.a.createElement("span",null," "):r.a.createElement("span",{className:o,onMouseOver:function(){return i("single-letter hovered")},onMouseLeave:function(){return i("single-letter unhovered")}},t)}function c(e){var t=e.word;return r.a.createElement("span",{style:{display:"inline-block"}},t.split("").map(function(e,t){return r.a.createElement(l,{index:t,char:e})}))}function s(e){var t=e.children;return r.a.createElement("div",null,r.a.createElement("p",{className:"intro-text"},t.split(" ").map(function(e,t){return r.a.createElement(n.Fragment,null,r.a.createElement(c,{key:t,word:e}),r.a.createElement("span",null," "))})))}t.default=function(e){var t=e.location;return r.a.createElement(o.a,{fontColor:"white",location:t.pathname},r.a.createElement(i.a,{title:"Portfolio",keywords:["karolina włoszek","product design","design","portfolio"]}),r.a.createElement("div",{id:"index-page",className:"background"},r.a.createElement("div",{className:"center"},r.a.createElement("div",{className:"introduction-wrapper"},r.a.createElement(s,null,"Hi, I'm Karolina, a freelance designer based in Wrocław. Ice cream gummies carrot cake chocolate bar tootsie roll. Liquorice macaroon soufflé powder gingerbread.")))))}},148:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),o=a(4),i=a.n(o),l=a(33),c=a.n(l);a.d(t,"a",function(){return c.a});a(149);var s=r.a.createContext({}),u=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},149:function(e,t,a){var n;e.exports=(n=a(153))&&n.default||n},152:function(e){e.exports={data:{site:{siteMetadata:{title:"Karolina Włoszek"}}}}},153:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),o=a(4),i=a.n(o),l=a(56),c=a(2),s=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},154:function(e,t,a){"use strict";var n=a(155),r=a(0),o=a.n(r),i=a(4),l=a.n(i),c=a(159),s=a.n(c);function u(e){var t=e.description,a=e.lang,r=e.meta,i=e.keywords,l=e.title,c=n.data.site,u=t||c.siteMetadata.description;return o.a.createElement(s.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:l},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:u}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})}u.defaultProps={lang:"en",meta:[],keywords:[],description:""},u.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.arrayOf(l.a.object),keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=u},155:function(e){e.exports={data:{site:{siteMetadata:{title:"Karolina Włoszek",description:"Portfolio - Karolina Włoszek",author:"@gatsbyjs"}}}}},156:function(e,t,a){"use strict";var n=a(152),r=a(0),o=a.n(r),i=a(4),l=a.n(i),c=a(148),s=(a(157),a(158).a.header.withConfig({displayName:"header__HeaderContainer",componentId:"sc-31ozxh-0"})(["color:",";.center{ul{.hoverable:before,.hoverable:after{content:'';position:absolute;width:0%;height:1px;top:50%;margin-top:-0.5px;background:#fff;}.hoverable:before{left:-2.5px;}.hoverable:after{right:2.5px;background:",";transition:width 0.8s cubic-bezier(0.22,0.61,0.36,1);}.hoverable:hover:before{background:",";width:100%;transition:width 0.5s cubic-bezier(0.22,0.61,0.36,1);}.hoverable:hover:after{background:transparent;width:100%;transition:0s;}}}"],function(e){return e.color},function(e){return e.color},function(e){return e.color})),u=function(e){var t=e.fontColor,a=e.location;return o.a.createElement(s,{id:"header",color:t},o.a.createElement("div",{className:"center"},o.a.createElement("p",null,o.a.createElement(c.a,{to:"/"},"Karolina Włoszek")),o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(c.a,{to:"/projects/"!==a?"/projects/":"/",className:"/projects/"!==a?"hoverable":null},"/projects/"!==a?"PROJEKTY":"X")),o.a.createElement("li",null,o.a.createElement(c.a,{to:"/about-me/"!==a?"/about-me/":"/",className:"/about-me/"!==a?"hoverable":null},"/about-me/"!==a?"O MNIE":"X")))))},d=function(e){var t=e.children,a=e.fontColor,r=(e.renderFooter,e.location);return o.a.createElement(c.b,{query:"2994927498",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",null,o.a.createElement(u,{fontColor:a,location:r}),o.a.createElement("main",null,t)))},data:n})};d.propTypes={children:l.a.node.isRequired,fontColor:l.a.string,renderFooter:l.a.bool},d.defaultProps={fontColor:"black",renderFooter:!1};t.a=d}}]);
//# sourceMappingURL=component---src-pages-index-js-10bf755c9978177ce12a.js.map