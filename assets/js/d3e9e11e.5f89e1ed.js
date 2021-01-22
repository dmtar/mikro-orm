(window.webpackJsonp=window.webpackJsonp||[]).push([[883],{1140:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),s=p(r),u=n,d=s["".concat(i,".").concat(u)]||s[u]||m[u]||c;return r?a.a.createElement(d,o(o({ref:t},l),{},{components:r})):a.a.createElement(d,o({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,i=new Array(c);i[0]=u;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var l=2;l<c;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},953:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return b})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),c=(r(0),r(1140)),i={id:"foreignkey",title:"Interface: ForeignKey",sidebar_label:"ForeignKey"},o={unversionedId:"api/interfaces/foreignkey",id:"version-4.2/api/interfaces/foreignkey",isDocsHomePage:!1,title:"Interface: ForeignKey",description:"Hierarchy",source:"@site/versioned_docs/version-4.2/api/interfaces/foreignkey.md",slug:"/api/interfaces/foreignkey",permalink:"/docs/4.2/api/interfaces/foreignkey",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.2/api/interfaces/foreignkey.md",version:"4.2",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1611310070,sidebar_label:"ForeignKey",sidebar:"version-4.2/API",previous:{title:"Interface: FlushEventArgs",permalink:"/docs/4.2/api/interfaces/flusheventargs"},next:{title:"Interface: Highlighter",permalink:"/docs/4.2/api/interfaces/highlighter"}},b=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"columnName",id:"columnname",children:[]},{value:"constraintName",id:"constraintname",children:[]},{value:"deleteRule",id:"deleterule",children:[]},{value:"referencedColumnName",id:"referencedcolumnname",children:[]},{value:"referencedTableName",id:"referencedtablename",children:[]},{value:"updateRule",id:"updaterule",children:[]}]}],l={toc:b};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"ForeignKey"))),Object(c.b)("h2",{id:"properties"},"Properties"),Object(c.b)("h3",{id:"columnname"},"columnName"),Object(c.b)("p",null,"\u2022  ",Object(c.b)("strong",{parentName:"p"},"columnName"),": string"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/knex/src/typings.ts#L45"}),"packages/knex/src/typings.ts:45"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"constraintname"},"constraintName"),Object(c.b)("p",null,"\u2022  ",Object(c.b)("strong",{parentName:"p"},"constraintName"),": string"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/knex/src/typings.ts#L46"}),"packages/knex/src/typings.ts:46"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"deleterule"},"deleteRule"),Object(c.b)("p",null,"\u2022  ",Object(c.b)("strong",{parentName:"p"},"deleteRule"),": string"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/knex/src/typings.ts#L50"}),"packages/knex/src/typings.ts:50"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"referencedcolumnname"},"referencedColumnName"),Object(c.b)("p",null,"\u2022  ",Object(c.b)("strong",{parentName:"p"},"referencedColumnName"),": string"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/knex/src/typings.ts#L48"}),"packages/knex/src/typings.ts:48"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"referencedtablename"},"referencedTableName"),Object(c.b)("p",null,"\u2022  ",Object(c.b)("strong",{parentName:"p"},"referencedTableName"),": string"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/knex/src/typings.ts#L47"}),"packages/knex/src/typings.ts:47"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"updaterule"},"updateRule"),Object(c.b)("p",null,"\u2022  ",Object(c.b)("strong",{parentName:"p"},"updateRule"),": string"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/knex/src/typings.ts#L49"}),"packages/knex/src/typings.ts:49"))))}p.isMDXComponent=!0}}]);