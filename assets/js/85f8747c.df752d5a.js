(window.webpackJsonp=window.webpackJsonp||[]).push([[531],{1110:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return s}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),c=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},d=function(e){var t=c(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),u=r,s=d["".concat(l,".").concat(u)]||d[u]||m[u]||a;return n?i.a.createElement(s,b(b({ref:t},p),{},{components:n})):i.a.createElement(s,b({ref:t},p))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=u;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b.mdxType="string"==typeof e?e:r,l[1]=b;for(var p=2;p<a;p++)l[p]=n[p];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},604:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return c}));var r=n(3),i=n(8),a=(n(0),n(1110)),l={id:"knex.knex-1.poolconfig",title:"Interface: PoolConfig",sidebar_label:"PoolConfig",custom_edit_url:null,hide_title:!0},b={unversionedId:"api/interfaces/knex.knex-1.poolconfig",id:"version-4.5/api/interfaces/knex.knex-1.poolconfig",isDocsHomePage:!1,title:"Interface: PoolConfig",description:"Interface: PoolConfig",source:"@site/versioned_docs/version-4.5/api/interfaces/knex.knex-1.poolconfig.md",slug:"/api/interfaces/knex.knex-1.poolconfig",permalink:"/docs/api/interfaces/knex.knex-1.poolconfig",editUrl:null,version:"4.5",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1617893515,formattedLastUpdatedAt:"4/8/2021",sidebar_label:"PoolConfig",sidebar:"version-4.5/API",previous:{title:"Interface: PgConnectionConfig",permalink:"/docs/api/interfaces/knex.knex-1.pgconnectionconfig"},next:{title:"Interface: PostgreSqlColumnBuilder",permalink:"/docs/api/interfaces/knex.knex-1.postgresqlcolumnbuilder"}},o=[{value:"Properties",id:"properties",children:[{value:"acquireTimeoutMillis",id:"acquiretimeoutmillis",children:[]},{value:"afterCreate",id:"aftercreate",children:[]},{value:"createRetryIntervalMillis",id:"createretryintervalmillis",children:[]},{value:"createTimeoutMillis",id:"createtimeoutmillis",children:[]},{value:"destroyTimeoutMillis",id:"destroytimeoutmillis",children:[]},{value:"idleTimeoutMillis",id:"idletimeoutmillis",children:[]},{value:"log",id:"log",children:[]},{value:"max",id:"max",children:[]},{value:"min",id:"min",children:[]},{value:"name",id:"name",children:[]},{value:"priorityRange",id:"priorityrange",children:[]},{value:"propagateCreateError",id:"propagatecreateerror",children:[]},{value:"reapIntervalMillis",id:"reapintervalmillis",children:[]},{value:"refreshIdle",id:"refreshidle",children:[]},{value:"returnToHead",id:"returntohead",children:[]}]}],p={toc:o};function c(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"interface-poolconfig"},"Interface: PoolConfig"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"/docs/api/modules/knex"},"knex"),".",Object(a.b)("a",{parentName:"p",href:"/docs/api/modules/knex.knex-1"},"Knex"),".PoolConfig"),Object(a.b)("h2",{id:"properties"},"Properties"),Object(a.b)("h3",{id:"acquiretimeoutmillis"},"acquireTimeoutMillis"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"acquireTimeoutMillis"),": ",Object(a.b)("em",{parentName:"p"},"number")),Object(a.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2095"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"aftercreate"},"afterCreate"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"afterCreate"),": Function"),Object(a.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2080"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"createretryintervalmillis"},"createRetryIntervalMillis"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"createRetryIntervalMillis"),": ",Object(a.b)("em",{parentName:"p"},"number")),Object(a.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2092"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"createtimeoutmillis"},"createTimeoutMillis"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"createTimeoutMillis"),": ",Object(a.b)("em",{parentName:"p"},"number")),Object(a.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2093"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"destroytimeoutmillis"},"destroyTimeoutMillis"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"destroyTimeoutMillis"),": ",Object(a.b)("em",{parentName:"p"},"number")),Object(a.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2094"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"idletimeoutmillis"},"idleTimeoutMillis"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"idleTimeoutMillis"),": ",Object(a.b)("em",{parentName:"p"},"number")),Object(a.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2084"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"log"},"log"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"log"),": (",Object(a.b)("inlineCode",{parentName:"p"},"message"),": ",Object(a.b)("em",{parentName:"p"},"string"),", ",Object(a.b)("inlineCode",{parentName:"p"},"logLevel"),": ",Object(a.b)("em",{parentName:"p"},"string"),") => ",Object(a.b)("em",{parentName:"p"},"void")),Object(a.b)("h4",{id:"type-declaration"},"Type declaration:"),Object(a.b)("p",null,"\u25b8 (",Object(a.b)("inlineCode",{parentName:"p"},"message"),": ",Object(a.b)("em",{parentName:"p"},"string"),", ",Object(a.b)("inlineCode",{parentName:"p"},"logLevel"),": ",Object(a.b)("em",{parentName:"p"},"string"),"): ",Object(a.b)("em",{parentName:"p"},"void")),Object(a.b)("h4",{id:"parameters"},"Parameters:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",{parentName:"tr",align:"left"},"Name"),Object(a.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:"left"},Object(a.b)("inlineCode",{parentName:"td"},"message")),Object(a.b)("td",{parentName:"tr",align:"left"},Object(a.b)("em",{parentName:"td"},"string"))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:"left"},Object(a.b)("inlineCode",{parentName:"td"},"logLevel")),Object(a.b)("td",{parentName:"tr",align:"left"},Object(a.b)("em",{parentName:"td"},"string"))))),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Returns:")," ",Object(a.b)("em",{parentName:"p"},"void")),Object(a.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2088"),Object(a.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2088"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"max"},"max"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"max"),": ",Object(a.b)("em",{parentName:"p"},"number")),Object(a.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2082"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"min"},"min"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"min"),": ",Object(a.b)("em",{parentName:"p"},"number")),Object(a.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2081"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"name"},"name"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"name"),": ",Object(a.b)("em",{parentName:"p"},"string")),Object(a.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2079"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"priorityrange"},"priorityRange"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"priorityRange"),": ",Object(a.b)("em",{parentName:"p"},"number")),Object(a.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2087"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"propagatecreateerror"},"propagateCreateError"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"propagateCreateError"),": ",Object(a.b)("em",{parentName:"p"},"boolean")),Object(a.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2091"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"reapintervalmillis"},"reapIntervalMillis"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"reapIntervalMillis"),": ",Object(a.b)("em",{parentName:"p"},"number")),Object(a.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2085"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"refreshidle"},"refreshIdle"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"refreshIdle"),": ",Object(a.b)("em",{parentName:"p"},"boolean")),Object(a.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2083"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"returntohead"},"returnToHead"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"returnToHead"),": ",Object(a.b)("em",{parentName:"p"},"boolean")),Object(a.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2086"))}c.isMDXComponent=!0}}]);