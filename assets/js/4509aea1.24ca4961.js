(window.webpackJsonp=window.webpackJsonp||[]).push([[299],{1256:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return O}));var a=r(0),n=r.n(a);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=n.a.createContext({}),s=function(e){var t=n.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=s(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,p=b(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,O=m["".concat(i,".").concat(d)]||m[d]||l[d]||c;return r?n.a.createElement(O,o(o({ref:t},p),{},{components:r})):n.a.createElement(O,o({ref:t},p))}));function O(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,i=new Array(c);i[0]=d;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<c;p++)i[p]=r[p];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},368:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return b})),r.d(t,"default",(function(){return s}));var a=r(3),n=r(7),c=(r(0),r(1256)),i={id:"core.countoptions",title:"Interface: CountOptions<T>",sidebar_label:"CountOptions",hide_title:!0},o={unversionedId:"api/interfaces/core.countoptions",id:"version-4.4/api/interfaces/core.countoptions",isDocsHomePage:!1,title:"Interface: CountOptions<T>",description:"Interface: CountOptions",source:"@site/versioned_docs/version-4.4/api/interfaces/core.countoptions.md",slug:"/api/interfaces/core.countoptions",permalink:"/docs/api/interfaces/core.countoptions",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.4/api/interfaces/core.countoptions.md",version:"4.4",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1612369190,sidebar_label:"CountOptions",sidebar:"version-4.4/API",previous:{title:"Interface: ConnectionOptions",permalink:"/docs/api/interfaces/core.connectionoptions"},next:{title:"Interface: DeleteOptions<T>",permalink:"/docs/api/interfaces/core.deleteoptions"}},b=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"cache",id:"cache",children:[]},{value:"filters",id:"filters",children:[]},{value:"groupBy",id:"groupby",children:[]},{value:"having",id:"having",children:[]},{value:"schema",id:"schema",children:[]}]}],p={toc:b};function s(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"interface-countoptionst"},"Interface: CountOptions<T",">"),Object(c.b)("p",null,Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/modules/core"}),"core"),".CountOptions"),Object(c.b)("h2",{id:"type-parameters"},"Type parameters"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"T"))))),Object(c.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"CountOptions"))),Object(c.b)("h2",{id:"properties"},"Properties"),Object(c.b)("h3",{id:"cache"},"cache"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"cache"),": ",Object(c.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(c.b)("em",{parentName:"p"},"number")," ","|"," ",Object(c.b)("em",{parentName:"p"},"boolean")," ","|"," ","[",Object(c.b)("em",{parentName:"p"},"string"),", ",Object(c.b)("em",{parentName:"p"},"number"),"]"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/drivers/IDatabaseDriver.ts#L114"}),"packages/core/src/drivers/IDatabaseDriver.ts:114")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"filters"},"filters"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"filters"),": ",Object(c.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(c.b)("em",{parentName:"p"},"boolean")," ","|"," ",Object(c.b)("em",{parentName:"p"},"string"),"[] ","|"," ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/modules/core#dictionary"}),Object(c.b)("em",{parentName:"a"},"Dictionary")),"<",Object(c.b)("em",{parentName:"p"},"boolean")," ","|"," ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/modules/core#dictionary"}),Object(c.b)("em",{parentName:"a"},"Dictionary")),"<",Object(c.b)("em",{parentName:"p"},"any"),">",">"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/drivers/IDatabaseDriver.ts#L110"}),"packages/core/src/drivers/IDatabaseDriver.ts:110")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"groupby"},"groupBy"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"groupBy"),": ",Object(c.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(c.b)("em",{parentName:"p"},"string")," ","|"," ",Object(c.b)("em",{parentName:"p"},"string"),"[]"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/drivers/IDatabaseDriver.ts#L112"}),"packages/core/src/drivers/IDatabaseDriver.ts:112")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"having"},"having"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"having"),": ",Object(c.b)("em",{parentName:"p"},"undefined")," ","|"," { ",Object(c.b)("inlineCode",{parentName:"p"},"__@PrimaryKeyType@41543?"),": ",Object(c.b)("em",{parentName:"p"},"any"),"  } ","|"," { ",Object(c.b)("inlineCode",{parentName:"p"},"__@PrimaryKeyType@41543?"),": ",Object(c.b)("em",{parentName:"p"},"any"),"  } & ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/modules/core#dictionary"}),Object(c.b)("em",{parentName:"a"},"Dictionary")),"<",Object(c.b)("em",{parentName:"p"},"any"),">"," ","|"," ",Object(c.b)("em",{parentName:"p"},"NonNullable"),"<",Object(c.b)("em",{parentName:"p"},"Query"),"<T",">",">"," ","|"," ",Object(c.b)("em",{parentName:"p"},"NonNullable"),"<",Object(c.b)("em",{parentName:"p"},"Query"),"<T",">",">"," & ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/modules/core#dictionary"}),Object(c.b)("em",{parentName:"a"},"Dictionary")),"<",Object(c.b)("em",{parentName:"p"},"any"),">"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/drivers/IDatabaseDriver.ts#L113"}),"packages/core/src/drivers/IDatabaseDriver.ts:113")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"schema"},"schema"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"schema"),": ",Object(c.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/drivers/IDatabaseDriver.ts#L111"}),"packages/core/src/drivers/IDatabaseDriver.ts:111")))}s.isMDXComponent=!0}}]);