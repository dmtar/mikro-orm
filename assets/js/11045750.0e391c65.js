(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{1110:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):b(b({},t),e)),r},p=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=l(r),u=n,f=p["".concat(o,".").concat(u)]||p[u]||m[u]||c;return r?a.a.createElement(f,b(b({ref:t},s),{},{components:r})):a.a.createElement(f,b({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=u;var b={};for(var i in t)hasOwnProperty.call(t,i)&&(b[i]=t[i]);b.originalType=e,b.mdxType="string"==typeof e?e:n,o[1]=b;for(var s=2;s<c;s++)o[s]=r[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},132:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return b})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(8),c=(r(0),r(1110)),o={id:"core.eventtype",title:"Enumeration: EventType",sidebar_label:"EventType",custom_edit_url:null,hide_title:!0},b={unversionedId:"api/enums/core.eventtype",id:"version-4.5/api/enums/core.eventtype",isDocsHomePage:!1,title:"Enumeration: EventType",description:"Enumeration: EventType",source:"@site/versioned_docs/version-4.5/api/enums/core.eventtype.md",slug:"/api/enums/core.eventtype",permalink:"/docs/api/enums/core.eventtype",editUrl:null,version:"4.5",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1617893515,formattedLastUpdatedAt:"4/8/2021",sidebar_label:"EventType",sidebar:"version-4.5/API",previous:{title:"Enumeration: ChangeSetType",permalink:"/docs/api/enums/core.changesettype"},next:{title:"Enumeration: GroupOperator",permalink:"/docs/api/enums/core.groupoperator"}},i=[{value:"Enumeration members",id:"enumeration-members",children:[{value:"afterCreate",id:"aftercreate",children:[]},{value:"afterDelete",id:"afterdelete",children:[]},{value:"afterFlush",id:"afterflush",children:[]},{value:"afterTransactionCommit",id:"aftertransactioncommit",children:[]},{value:"afterTransactionRollback",id:"aftertransactionrollback",children:[]},{value:"afterTransactionStart",id:"aftertransactionstart",children:[]},{value:"afterUpdate",id:"afterupdate",children:[]},{value:"beforeCreate",id:"beforecreate",children:[]},{value:"beforeDelete",id:"beforedelete",children:[]},{value:"beforeFlush",id:"beforeflush",children:[]},{value:"beforeTransactionCommit",id:"beforetransactioncommit",children:[]},{value:"beforeTransactionRollback",id:"beforetransactionrollback",children:[]},{value:"beforeTransactionStart",id:"beforetransactionstart",children:[]},{value:"beforeUpdate",id:"beforeupdate",children:[]},{value:"onFlush",id:"onflush",children:[]},{value:"onInit",id:"oninit",children:[]}]}],s={toc:i};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"enumeration-eventtype"},"Enumeration: EventType"),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"/docs/api/modules/core"},"core"),".EventType"),Object(c.b)("h2",{id:"enumeration-members"},"Enumeration members"),Object(c.b)("h3",{id:"aftercreate"},"afterCreate"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"afterCreate"),': = "afterCreate"'),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/enums.ts#L99"},"packages/core/src/enums.ts:99")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"afterdelete"},"afterDelete"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"afterDelete"),': = "afterDelete"'),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/enums.ts#L103"},"packages/core/src/enums.ts:103")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"afterflush"},"afterFlush"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"afterFlush"),': = "afterFlush"'),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/enums.ts#L106"},"packages/core/src/enums.ts:106")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"aftertransactioncommit"},"afterTransactionCommit"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"afterTransactionCommit"),': = "afterTransactionCommit"'),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/enums.ts#L110"},"packages/core/src/enums.ts:110")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"aftertransactionrollback"},"afterTransactionRollback"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"afterTransactionRollback"),': = "afterTransactionRollback"'),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/enums.ts#L112"},"packages/core/src/enums.ts:112")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"aftertransactionstart"},"afterTransactionStart"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"afterTransactionStart"),': = "afterTransactionStart"'),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/enums.ts#L108"},"packages/core/src/enums.ts:108")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"afterupdate"},"afterUpdate"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"afterUpdate"),': = "afterUpdate"'),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/enums.ts#L101"},"packages/core/src/enums.ts:101")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"beforecreate"},"beforeCreate"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"beforeCreate"),': = "beforeCreate"'),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/enums.ts#L98"},"packages/core/src/enums.ts:98")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"beforedelete"},"beforeDelete"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"beforeDelete"),': = "beforeDelete"'),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/enums.ts#L102"},"packages/core/src/enums.ts:102")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"beforeflush"},"beforeFlush"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"beforeFlush"),': = "beforeFlush"'),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/enums.ts#L104"},"packages/core/src/enums.ts:104")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"beforetransactioncommit"},"beforeTransactionCommit"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"beforeTransactionCommit"),': = "beforeTransactionCommit"'),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/enums.ts#L109"},"packages/core/src/enums.ts:109")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"beforetransactionrollback"},"beforeTransactionRollback"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"beforeTransactionRollback"),': = "beforeTransactionRollback"'),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/enums.ts#L111"},"packages/core/src/enums.ts:111")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"beforetransactionstart"},"beforeTransactionStart"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"beforeTransactionStart"),': = "beforeTransactionStart"'),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/enums.ts#L107"},"packages/core/src/enums.ts:107")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"beforeupdate"},"beforeUpdate"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"beforeUpdate"),': = "beforeUpdate"'),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/enums.ts#L100"},"packages/core/src/enums.ts:100")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"onflush"},"onFlush"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"onFlush"),': = "onFlush"'),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/enums.ts#L105"},"packages/core/src/enums.ts:105")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"oninit"},"onInit"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"onInit"),': = "onInit"'),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/enums.ts#L97"},"packages/core/src/enums.ts:97")))}l.isMDXComponent=!0}}]);