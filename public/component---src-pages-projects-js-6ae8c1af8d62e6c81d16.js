(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{142:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(150),i=a(148);t.default=function(e){var t=e.location;return r.a.createElement(o.a,{fontColor:"black",location:t.pathname},r.a.createElement(i.a,{title:"Projekty",keywords:["karolina włoszek","product design","design","portfolio"]}))}},145:function(e,t,a){var n;e.exports=(n=a(147))&&n.default||n},146:function(e){e.exports={data:{site:{siteMetadata:{title:"Karolina Włoszek"}}}}},147:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),o=a(4),i=a.n(o),l=a(56),c=a(2),s=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},148:function(e,t,a){"use strict";var n=a(149),r=a(0),o=a.n(r),i=a(4),l=a.n(i),c=a(152),s=a.n(c);function u(e){var t=e.description,a=e.lang,r=e.meta,i=e.keywords,l=e.title,c=n.data.site,u=t||c.siteMetadata.description;return o.a.createElement(s.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:l},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:u}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})}u.defaultProps={lang:"en",meta:[],keywords:[],description:""},u.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.arrayOf(l.a.object),keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=u},149:function(e){e.exports={data:{site:{siteMetadata:{title:"Karolina Włoszek",description:"Portfolio - Karolina Włoszek",author:"@gatsbyjs"}}}}},150:function(e,t,a){"use strict";var n=a(146),r=a(0),o=a.n(r),i=a(4),l=a.n(i),c=a(33),s=a.n(c),u=(a(145),o.a.createContext({})),d=function(e){return o.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func};a(151);var p=function(e){var t=e.fontColor,a=e.location;return o.a.createElement("header",{id:"header",style:{color:t}},o.a.createElement("div",{className:"center"},o.a.createElement("p",null,o.a.createElement(s.a,{to:"/"},"Karolina Włoszek")),o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(s.a,{to:"/projects/"!==a?"/projects/":"/",className:"/projects/"!==a?"hoverable":null},"/projects/"!==a?"PROJEKTY":"X")),o.a.createElement("li",null,o.a.createElement(s.a,{to:"/about-me/"!==a?"/about-me/":"/",className:"/about-me/"!==a?"hoverable":null},"/about-me/"!==a?"O MNIE":"X")))))},m=function(e){var t=e.children,a=e.fontColor,r=(e.renderFooter,e.location);return o.a.createElement(d,{query:"2994927498",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",null,o.a.createElement(p,{fontColor:a,location:r}),o.a.createElement("main",null,t)))},data:n})};m.propTypes={children:l.a.node.isRequired,fontColor:l.a.string,renderFooter:l.a.bool},m.defaultProps={fontColor:"black",renderFooter:!1};t.a=m}}]);
//# sourceMappingURL=component---src-pages-projects-js-6ae8c1af8d62e6c81d16.js.map