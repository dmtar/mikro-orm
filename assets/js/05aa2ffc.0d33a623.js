(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{1048:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return u}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var b=o.a.createContext({}),s=function(e){var t=o.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=s(e.components);return o.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),l=s(r),d=n,u=l["".concat(a,".").concat(d)]||l[d]||m[d]||i;return r?o.a.createElement(u,c(c({ref:t},b),{},{components:r})):o.a.createElement(u,c({ref:t},b))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var b=2;b<i;b++)a[b]=r[b];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},99:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return s}));var n=r(3),o=r(8),i=(r(0),r(1048)),a={id:"core.factoryoptions",title:"Interface: FactoryOptions",sidebar_label:"FactoryOptions",hide_title:!0},c={unversionedId:"api/interfaces/core.factoryoptions",id:"version-4.4/api/interfaces/core.factoryoptions",isDocsHomePage:!1,title:"Interface: FactoryOptions",description:"Interface: FactoryOptions",source:"@site/versioned_docs/version-4.4/api/interfaces/core.factoryoptions.md",slug:"/api/interfaces/core.factoryoptions",permalink:"/docs/api/interfaces/core.factoryoptions",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.4/api/interfaces/core.factoryoptions.md",version:"4.4",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1613074849,sidebar_label:"FactoryOptions",sidebar:"version-4.4/API",previous:{title:"Interface: EventSubscriber<T>",permalink:"/docs/api/interfaces/core.eventsubscriber"},next:{title:"Interface: FindOneOptions<T, P>",permalink:"/docs/api/interfaces/core.findoneoptions"}},p=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"convertCustomTypes",id:"convertcustomtypes",children:[]},{value:"initialized",id:"initialized",children:[]},{value:"merge",id:"merge",children:[]},{value:"newEntity",id:"newentity",children:[]},{value:"refresh",id:"refresh",children:[]}]}],b={toc:p};function s(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"interface-factoryoptions"},"Interface: FactoryOptions"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"/docs/api/modules/core"},"core"),".FactoryOptions"),Object(i.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"FactoryOptions"))),Object(i.b)("h2",{id:"properties"},"Properties"),Object(i.b)("h3",{id:"convertcustomtypes"},"convertCustomTypes"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"convertCustomTypes"),": ",Object(i.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(i.b)("em",{parentName:"p"},"boolean")),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/entity/EntityFactory.ts#L12"},"packages/core/src/entity/EntityFactory.ts:12")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"initialized"},"initialized"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"initialized"),": ",Object(i.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(i.b)("em",{parentName:"p"},"boolean")),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/entity/EntityFactory.ts#L8"},"packages/core/src/entity/EntityFactory.ts:8")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"merge"},"merge"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"merge"),": ",Object(i.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(i.b)("em",{parentName:"p"},"boolean")),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/entity/EntityFactory.ts#L10"},"packages/core/src/entity/EntityFactory.ts:10")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"newentity"},"newEntity"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"newEntity"),": ",Object(i.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(i.b)("em",{parentName:"p"},"boolean")),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/entity/EntityFactory.ts#L9"},"packages/core/src/entity/EntityFactory.ts:9")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"refresh"},"refresh"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"refresh"),": ",Object(i.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(i.b)("em",{parentName:"p"},"boolean")),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/entity/EntityFactory.ts#L11"},"packages/core/src/entity/EntityFactory.ts:11")))}s.isMDXComponent=!0}}]);