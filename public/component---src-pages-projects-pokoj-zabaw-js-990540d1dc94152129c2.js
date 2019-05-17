(window.webpackJsonp=window.webpackJsonp||[]).push([[11,15],{142:function(e,a,t){"use strict";t.r(a),t.d(a,"default",function(){return i});var n=t(0),o=t.n(n),r=(t(192),t(193),t(164)),c=t(162);function i(e){var a=e.data,t=e.location;return o.a.createElement(r.a,{fontColor:"inherit",location:t},o.a.createElement(c.a,{title:a.title,keywords:["karolina włoszek","product design","design","portfolio"]}),o.a.createElement("div",{id:"project-page",className:"background"},o.a.createElement("section",{className:"project-cover",style:{backgroundImage:"url("+a.contentData.coverImg+")"}}),o.a.createElement("div",{className:"center"},o.a.createElement("section",{className:"project-info"},o.a.createElement("div",{className:"title-section"},o.a.createElement("h2",{className:"title"},a.title),o.a.createElement("span",{className:"year"},"–",a.contentData.year)),o.a.createElement("div",{className:"description-section"},o.a.createElement("h4",{className:"subtitle"},a.contentData.subtitle),o.a.createElement("div",{className:"paragraphs"},a.contentData.paragraphs.map(function(e){return o.a.createElement(n.Fragment,{key:e.title},o.a.createElement("div",null,o.a.createElement("strong",null,e.title)),o.a.createElement("div",null,e.content))}))))),o.a.createElement("section",{className:"project-gallery"},a.contentData.gallery.map(function(e,t){return 1===e.length?(console.log("1"),o.a.createElement("div",{className:"one-photo"},o.a.createElement("img",{src:e,alt:a.title+t}))):2===e.length?(console.log("2"),o.a.createElement("div",{className:"two-photos"},e.map(function(e,t){return o.a.createElement("div",{className:"photo"},o.a.createElement("img",{src:e,alt:a.title+t}))}))):4===e.length?(console.log("4"),o.a.createElement("div",{className:"four-photos"},e.map(function(e,t){return o.a.createElement("div",{className:"photo"},o.a.createElement("img",{src:e,alt:a.title+t}))}))):null}))))}},149:function(e,a,t){"use strict";t.r(a),t.d(a,"default",function(){return i});var n=t(0),o=t.n(n),r=t(188),c=t(142);function i(e){var a=e.location;return o.a.createElement(c.default,{data:r.a[5],location:a.pathname})}},158:function(e,a,t){"use strict";t.d(a,"b",function(){return u});var n=t(0),o=t.n(n),r=t(4),c=t.n(r),i=t(33),l=t.n(i);t.d(a,"a",function(){return l.a});t(159);var s=o.a.createContext({}),u=function(e){return o.a.createElement(s.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},159:function(e,a,t){var n;e.exports=(n=t(161))&&n.default||n},160:function(e){e.exports={data:{site:{siteMetadata:{title:"Karolina Włoszek"}}}}},161:function(e,a,t){"use strict";t.r(a);t(34);var n=t(0),o=t.n(n),r=t(4),c=t.n(r),i=t(55),l=t(2),s=function(e){var a=e.location,t=l.default.getResourcesForPathnameSync(a.pathname);return t?o.a.createElement(i.a,Object.assign({location:a,pageResources:t},t.json)):null};s.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},a.default=s},162:function(e,a,t){"use strict";var n=t(163),o=t(0),r=t.n(o),c=t(4),i=t.n(c),l=t(191),s=t.n(l);function u(e){var a=e.description,t=e.lang,o=e.meta,c=e.keywords,i=e.title,l=n.data.site,u=a||l.siteMetadata.description;return r.a.createElement(s.a,{htmlAttributes:{lang:t},title:i,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:i},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:u}].concat(c.length>0?{name:"keywords",content:c.join(", ")}:[]).concat(o)})}u.defaultProps={lang:"en",meta:[],keywords:[],description:""},u.propTypes={description:i.a.string,lang:i.a.string,meta:i.a.arrayOf(i.a.object),keywords:i.a.arrayOf(i.a.string),title:i.a.string.isRequired},a.a=u},163:function(e){e.exports={data:{site:{siteMetadata:{title:"Karolina Włoszek",description:"Portfolio - Karolina Włoszek",author:"@gatsbyjs"}}}}},164:function(e,a,t){"use strict";var n=t(160),o=t(0),r=t.n(o),c=t(4),i=t.n(c),l=t(158),s=(t(189),t(190).a.header.withConfig({displayName:"header__HeaderContainer",componentId:"sc-31ozxh-0"})(["color:",";.center{ul{.hoverable:before,.hoverable:after{content:'';position:absolute;width:0%;height:0.12rem;top:50%;margin-top:-0.5px;background:#fff;}.hoverable:before{left:0;}.hoverable:after{right:0;background:",";transition:width 0.8s cubic-bezier(0.22,0.61,0.36,1);}.hoverable:hover:before{background:",";width:100%;transition:width 0.5s cubic-bezier(0.22,0.61,0.36,1);}.hoverable:hover:after{background:transparent;width:100%;transition:0s;}}}"],function(e){return e.color},function(e){return"inherit"===e.color?"#282828":e.color},function(e){return"inherit"===e.color?"#282828":e.color})),u=function(e){var a=e.fontColor,t=e.location;return r.a.createElement(s,{id:"header",color:a},r.a.createElement("div",{className:"center"},r.a.createElement(l.a,{to:"/"},"Karolina Włoszek"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(l.a,{to:"/projects/"!==t?"/projects/":"/",className:"/projects/"!==t?"hoverable":null},"/projects/"!==t?"PROJEKTY":"X")),r.a.createElement("li",null,r.a.createElement(l.a,{to:"/about-me/"!==t?"/about-me/":"/",className:"/about-me/"!==t?"hoverable":null},"/about-me/"!==t?"O MNIE":"X")))))},d=function(e){var a=e.children,t=e.fontColor,o=(e.renderFooter,e.location);return r.a.createElement(l.b,{query:"2994927498",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement(u,{fontColor:t,location:o}),r.a.createElement("main",null,a)))},data:n})};d.propTypes={children:i.a.node.isRequired,fontColor:i.a.string,renderFooter:i.a.bool},d.defaultProps={fontColor:"black",renderFooter:!1};a.a=d},165:function(e,a,t){e.exports=t.p+"static/1_mula-c7c5ad42fbb9f555a2da050a4863684b.jpg"},166:function(e,a,t){e.exports=t.p+"static/2.1_soap_company-fc30802d3b74b7427dc924285d887810.jpg"},167:function(e,a,t){e.exports=t.p+"static/3.rogi-5fe9a0e264945183d184d906d719f8cf.jpg"},168:function(e,a,t){e.exports=t.p+"static/4.skadak-84afb030679f8c2aba413ccb50a5af9c.jpg"},169:function(e,a,t){e.exports=t.p+"static/5.moduu-3678a11e68ece11443748b9b36c4b72f.jpg"},170:function(e,a,t){e.exports=t.p+"static/6.pokój_zabaw-667d622d3038ea62080d0bcb1a12567d.jpg"},171:function(e,a,t){e.exports=t.p+"static/7.cośtam_ilustracje-8ea051cf279ebfe7a5f6e01f64c5e8e6.jpg"},172:function(e,a,t){e.exports=t.p+"static/8.ilustracje-c3bafb2980db3c4e36964c4c4c606acc.jpg"},173:function(e,a,t){e.exports=t.p+"static/9.ulicznicy-633646d1817c913de9291ea8e5bd4882.jpg"},174:function(e,a,t){e.exports=t.p+"static/10.album_cover-ccc19d87fde4bf026cdac08ca3d1b853.jpg"},175:function(e,a,t){e.exports=t.p+"static/11.voicemail-2636c4308e578c6ae9d178bb3cb45996.jpg"},176:function(e,a,t){e.exports=t.p+"static/cover-cf3b75cfb8d6dcecc5f841987896ca39.jpg"},177:function(e,a,t){e.exports=t.p+"static/1-1-2c6ae870259ecd2e376926080eba12d6.png"},178:function(e,a,t){e.exports=t.p+"static/1-2-bacb79f8d5b14c2303befa31fc7aa85e.png"},179:function(e,a,t){e.exports=t.p+"static/1-3-78a04b2dafc1f5cacadd47e1c6d7b2d8.png"},180:function(e,a,t){e.exports=t.p+"static/1-4-eef09f51859b4ae5e4f4956cc75557ee.png"},181:function(e,a,t){e.exports=t.p+"static/2-8dfbd4f74c6446b2d426e35473b00af1.png"},182:function(e,a,t){e.exports=t.p+"static/3-e3e0d97141c8cb412fcdaaefcbb39e0b.jpg"},183:function(e,a,t){e.exports=t.p+"static/4-1-de14c3c44cf71d9e839c935e7d45c4bb.jpg"},184:function(e,a,t){e.exports=t.p+"static/4-2-e5d7f131c8e637b051d4f496f11b394c.jpg"},185:function(e,a,t){e.exports=t.p+"static/4-3-1a00657d9f5f2fd3fbd08d1d75fe56d4.jpg"},186:function(e,a,t){e.exports=t.p+"static/4-4-e68ce5acb772f41a06546e3432888f1d.jpg"},187:function(e,a,t){e.exports=t.p+"static/5-a48b788093f70741f2ec09bcf4a0d28c.jpg"},188:function(e,a,t){"use strict";var n=t(0),o=t.n(n),r=t(165),c=t.n(r),i=t(166),l=t.n(i),s=t(167),u=t.n(s),d=t(168),p=t.n(d),m=t(169),f=t.n(m),w=t(170),g=t.n(w),b=t(171),z=t.n(b),y=t(172),j=t.n(y),k=t(173),h=t.n(k),v=t(174),E=t.n(v),x=t(175),N=t.n(x),D={mula:c.a,soapCompany:l.a,rogi:u.a,skladak:p.a,moduu:f.a,pokojZabaw:g.a,costam:z.a,ilustracje:j.a,ulicznicy:h.a,albumCover:E.a,voicemail:N.a},P=t(176),C=t.n(P),I=t(177),q=t.n(I),F=t(178),O=t.n(F),R=t(179),M=t.n(R),A=t(180),S=t.n(A),T=t(181),_=t.n(T),J=t(182),W=t.n(J),L=t(183),K=t.n(L),U=t(184),Z=t.n(U),X=t(185),B=t.n(X),G=t(186),H=t.n(G),Q=t(187),V=t.n(Q),Y={mula:[],soap:[C.a,q.a,O.a,M.a,S.a,_.a,W.a,K.a,Z.a,B.a,H.a,V.a]},$=[];$[0]={title:"mu.la",route:"mu-la",previewData:{caption:"Batchelor’s Thesis, Product Design",img:D.mula},contentData:{coverImg:"asd",year:"2018",subtitle:"Modułowy instrument muzyczny wspomagający rozwój psychoruchowy dziecka.",paragraphs:[{title:"OPIS",content:o.a.createElement(n.Fragment,null,o.a.createElement("p",null,o.a.createElement("strong",null,"mu.la")," czyli muzyczne laboratorium pozwalające na zaangażowanie, oprócz słuchu, najważniejszego w przypadku muzyki zmysłu, także zmysłów wzroku i dotyku. Czy zastanawialiście się kiedyś jak wygląda dźwięk, jaki jest w dotyku? Albo jak jest zbudowany instrument? Z ",o.a.createElement("strong",null,"mu.lą")," dzieci mogą zaobserwować powstawanie fal dźwiękowych, zbadać właściwości różnych materiałów wydających dźwięki oraz tworzyć własne wersje instrumentu."),o.a.createElement("p",null,"Podczas zabawy kategoria błędnego doświadczenia nie istnieje – każde doświadczenie, nawet to zakończone niepowodzeniem jest wartościowe. Umożliwia to rozwój myślenia wyjętego ze schematów oraz angażuje wyobraźnię i całą pomysłowość dziecka."))},{title:"MOJA ROLA",content:"Projektowanie Produktu, Praca Licencjacka"},{title:"WIĘCEJ INFO",content:"Praca licencjacka realizowana w Pracowni Projektowania Narzędzi i Środowiska Pracy na ASP we Wrocławiu"}],gallery:[["url zdj1"],["url zdj1","url zdj2"],["url zdj1","url zdj2","url zdj3","url zdj4"]]},thumbnailData:{previewImg:"tu bd url zdj do preview"}},$[1]={title:"The Soap Company",route:"soap-company",previewData:{caption:"Lorem ipsum dolor",img:D.soapCompany},contentData:{coverImg:Y.soap[0],year:"2019",subtitle:"Projekt opakownań oraz logo dla manufaktury ręcznie wytwarzającej mydła",paragraphs:[{title:"OPIS",content:o.a.createElement(n.Fragment,null,o.a.createElement("p",null,o.a.createElement("strong",null,"mu.la")," czyli muzyczne laboratorium pozwalające na zaangażowanie, oprócz słuchu, najważniejszego w przypadku muzyki zmysłu, także zmysłów wzroku i dotyku. Czy zastanawialiście się kiedyś jak wygląda dźwięk, jaki jest w dotyku? Albo jak jest zbudowany instrument? Z ",o.a.createElement("strong",null,"mu.lą")," dzieci mogą zaobserwować powstawanie fal dźwiękowych, zbadać właściwości różnych materiałów wydających dźwięki oraz tworzyć własne wersje instrumentu."),o.a.createElement("p",null,"Podczas zabawy kategoria błędnego doświadczenia nie istnieje – każde doświadczenie, nawet to zakończone niepowodzeniem jest wartościowe. Umożliwia to rozwój myślenia wyjętego ze schematów oraz angażuje wyobraźnię i całą pomysłowość dziecka."))},{title:"MOJA ROLA",content:o.a.createElement("p",null,"Projektowanie Graficzne, Ilustracje")},{title:"WIĘCEJ INFO",content:o.a.createElement("p",null,"Personal project")}],gallery:[[Y.soap[1],Y.soap[2],Y.soap[3],Y.soap[4]],[Y.soap[5]],[Y.soap[6]],[Y.soap[7],Y.soap[8],Y.soap[9],Y.soap[10]],[Y.soap[11]]]},thumbnailData:{previewImg:"tu bd url zdj do preview"}},$[2]={title:"Rogi",route:"rogi",previewData:{caption:o.a.createElement(n.Fragment,null,"Costume Design"),img:D.rogi}},$[3]={title:"Składak",route:"skladak",previewData:{caption:"elit, sed do eiusmod tempor incididunt",img:D.skladak}},$[4]={title:"Moduu",route:"moduu",previewData:{caption:"quis nostrud exercitation ullamco laboris nisi ut aliquip",img:D.moduu}},$[5]={title:o.a.createElement(n.Fragment,null,"Pokój zabaw"),route:"pokoj-zabaw",previewData:{caption:"reprehenderit in voluptate velit esse cillum dolore eu fugiat",img:D.pokojZabaw}},$[6]={title:"Cośtam",route:"costam",previewData:{caption:"Ut enim ad minim veniam, quis",img:D.costam}},$[7]={title:"Ilustracje",route:"ilustracje",previewData:{caption:"kurde bela ładne ilustracje jakieś",img:D.ilustracje}},$[8]={title:"Ulicznicy",route:"ulicznicy",previewData:{caption:"incididunt ut labore et dolore",img:D.ulicznicy}},$[9]={title:o.a.createElement(n.Fragment,null,"Album cover"),route:"album-cover",previewData:{caption:"Lorem ipsum dolor sit amet, consectetur",img:D.albumCover}},$[10]={title:"Voicemail",route:"voicemail",previewData:{caption:"Excepteur sint occaecat cupidatat non proident",img:D.voicemail}};a.a=$}}]);
//# sourceMappingURL=component---src-pages-projects-pokoj-zabaw-js-990540d1dc94152129c2.js.map