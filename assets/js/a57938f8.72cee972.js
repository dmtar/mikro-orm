(window.webpackJsonp=window.webpackJsonp||[]).push([[659],{1110:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),b=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,b=function(e,t){if(null==e)return{};var n,a,b={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(b[n]=e[n]);return b}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(b[n]=e[n])}return b}var p=b.a.createContext({}),o=function(e){var t=b.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=o(e.components);return b.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},u=b.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=o(n),u=a,m=d["".concat(i,".").concat(u)]||d[u]||s[u]||r;return n?b.a.createElement(m,l(l({ref:t},p),{},{components:n})):b.a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return b.a.createElement.apply(null,i)}return b.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},732:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return o}));var a=n(3),b=n(8),r=(n(0),n(1110)),i={id:"knex.knex-1.mysqlconnectionconfig",title:"Interface: MySqlConnectionConfig",sidebar_label:"MySqlConnectionConfig",custom_edit_url:null,hide_title:!0},l={unversionedId:"api/interfaces/knex.knex-1.mysqlconnectionconfig",id:"version-4.5/api/interfaces/knex.knex-1.mysqlconnectionconfig",isDocsHomePage:!1,title:"Interface: MySqlConnectionConfig",description:"Interface: MySqlConnectionConfig",source:"@site/versioned_docs/version-4.5/api/interfaces/knex.knex-1.mysqlconnectionconfig.md",slug:"/api/interfaces/knex.knex-1.mysqlconnectionconfig",permalink:"/docs/api/interfaces/knex.knex-1.mysqlconnectionconfig",editUrl:null,version:"4.5",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1617893515,formattedLastUpdatedAt:"4/8/2021",sidebar_label:"MySqlConnectionConfig",sidebar:"version-4.5/API",previous:{title:"Interface: MySqlAlterColumnBuilder",permalink:"/docs/api/interfaces/knex.knex-1.mysqlaltercolumnbuilder"},next:{title:"Interface: OnConflictQueryBuilder<TRecord, TResult>",permalink:"/docs/api/interfaces/knex.knex-1.onconflictquerybuilder"}},c=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"bigNumberStrings",id:"bignumberstrings",children:[]},{value:"charset",id:"charset",children:[]},{value:"connectTimeout",id:"connecttimeout",children:[]},{value:"database",id:"database",children:[]},{value:"dateStrings",id:"datestrings",children:[]},{value:"debug",id:"debug",children:[]},{value:"decimalNumbers",id:"decimalnumbers",children:[]},{value:"flags",id:"flags",children:[]},{value:"host",id:"host",children:[]},{value:"insecureAuth",id:"insecureauth",children:[]},{value:"localAddress",id:"localaddress",children:[]},{value:"multipleStatements",id:"multiplestatements",children:[]},{value:"password",id:"password",children:[]},{value:"port",id:"port",children:[]},{value:"queryFormat",id:"queryformat",children:[]},{value:"socketPath",id:"socketpath",children:[]},{value:"ssl",id:"ssl",children:[]},{value:"stringifyObjects",id:"stringifyobjects",children:[]},{value:"supportBigNumbers",id:"supportbignumbers",children:[]},{value:"timezone",id:"timezone",children:[]},{value:"trace",id:"trace",children:[]},{value:"typeCast",id:"typecast",children:[]},{value:"user",id:"user",children:[]}]},{value:"Methods",id:"methods",children:[{value:"expirationChecker",id:"expirationchecker",children:[]}]}],p={toc:c};function o(e){var t=e.components,n=Object(b.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"interface-mysqlconnectionconfig"},"Interface: MySqlConnectionConfig"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"/docs/api/modules/knex"},"knex"),".",Object(r.b)("a",{parentName:"p",href:"/docs/api/modules/knex.knex-1"},"Knex"),".MySqlConnectionConfig"),Object(r.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"MySqlConnectionConfig")),Object(r.b)("p",{parentName:"li"},"\u21b3 ",Object(r.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.mysql2connectionconfig"},Object(r.b)("em",{parentName:"a"},"MySql2ConnectionConfig"))))),Object(r.b)("h2",{id:"properties"},"Properties"),Object(r.b)("h3",{id:"bignumberstrings"},"bigNumberStrings"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(r.b)("strong",{parentName:"p"},"bigNumberStrings"),": ",Object(r.b)("em",{parentName:"p"},"boolean")),Object(r.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2000"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"charset"},"charset"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(r.b)("strong",{parentName:"p"},"charset"),": ",Object(r.b)("em",{parentName:"p"},"string")),Object(r.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1992"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"connecttimeout"},"connectTimeout"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(r.b)("strong",{parentName:"p"},"connectTimeout"),": ",Object(r.b)("em",{parentName:"p"},"number")),Object(r.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1994"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"database"},"database"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(r.b)("strong",{parentName:"p"},"database"),": ",Object(r.b)("em",{parentName:"p"},"string")),Object(r.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1991"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"datestrings"},"dateStrings"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(r.b)("strong",{parentName:"p"},"dateStrings"),": ",Object(r.b)("em",{parentName:"p"},"boolean")),Object(r.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2001"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"debug"},"debug"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(r.b)("strong",{parentName:"p"},"debug"),": ",Object(r.b)("em",{parentName:"p"},"boolean")),Object(r.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2002"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"decimalnumbers"},"decimalNumbers"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(r.b)("strong",{parentName:"p"},"decimalNumbers"),": ",Object(r.b)("em",{parentName:"p"},"boolean")),Object(r.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2007"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"flags"},"flags"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(r.b)("strong",{parentName:"p"},"flags"),": ",Object(r.b)("em",{parentName:"p"},"string")),Object(r.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2005"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"host"},"host"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(r.b)("strong",{parentName:"p"},"host"),": ",Object(r.b)("em",{parentName:"p"},"string")),Object(r.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1985"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"insecureauth"},"insecureAuth"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(r.b)("strong",{parentName:"p"},"insecureAuth"),": ",Object(r.b)("em",{parentName:"p"},"boolean")),Object(r.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1996"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"localaddress"},"localAddress"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(r.b)("strong",{parentName:"p"},"localAddress"),": ",Object(r.b)("em",{parentName:"p"},"string")),Object(r.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1987"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"multiplestatements"},"multipleStatements"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(r.b)("strong",{parentName:"p"},"multipleStatements"),": ",Object(r.b)("em",{parentName:"p"},"boolean")),Object(r.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2004"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"password"},"password"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(r.b)("strong",{parentName:"p"},"password"),": ",Object(r.b)("em",{parentName:"p"},"string")),Object(r.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1990"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"port"},"port"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(r.b)("strong",{parentName:"p"},"port"),": ",Object(r.b)("em",{parentName:"p"},"number")),Object(r.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1986"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"queryformat"},"queryFormat"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(r.b)("strong",{parentName:"p"},"queryFormat"),": (",Object(r.b)("inlineCode",{parentName:"p"},"query"),": ",Object(r.b)("em",{parentName:"p"},"string"),", ",Object(r.b)("inlineCode",{parentName:"p"},"values"),": ",Object(r.b)("em",{parentName:"p"},"any"),") => ",Object(r.b)("em",{parentName:"p"},"string")),Object(r.b)("h4",{id:"type-declaration"},"Type declaration:"),Object(r.b)("p",null,"\u25b8 (",Object(r.b)("inlineCode",{parentName:"p"},"query"),": ",Object(r.b)("em",{parentName:"p"},"string"),", ",Object(r.b)("inlineCode",{parentName:"p"},"values"),": ",Object(r.b)("em",{parentName:"p"},"any"),"): ",Object(r.b)("em",{parentName:"p"},"string")),Object(r.b)("h4",{id:"parameters"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"left"},"Name"),Object(r.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"query")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("em",{parentName:"td"},"string"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"values")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("em",{parentName:"td"},"any"))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"string")),Object(r.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1998"),Object(r.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1998"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"socketpath"},"socketPath"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(r.b)("strong",{parentName:"p"},"socketPath"),": ",Object(r.b)("em",{parentName:"p"},"string")),Object(r.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1988"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"ssl"},"ssl"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(r.b)("strong",{parentName:"p"},"ssl"),": ",Object(r.b)("em",{parentName:"p"},"string")," ","|"," ",Object(r.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.mariasslconfiguration"},Object(r.b)("em",{parentName:"a"},"MariaSslConfiguration"))),Object(r.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2006"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"stringifyobjects"},"stringifyObjects"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(r.b)("strong",{parentName:"p"},"stringifyObjects"),": ",Object(r.b)("em",{parentName:"p"},"boolean")),Object(r.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1995"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"supportbignumbers"},"supportBigNumbers"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(r.b)("strong",{parentName:"p"},"supportBigNumbers"),": ",Object(r.b)("em",{parentName:"p"},"boolean")),Object(r.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1999"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"timezone"},"timezone"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(r.b)("strong",{parentName:"p"},"timezone"),": ",Object(r.b)("em",{parentName:"p"},"string")),Object(r.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1993"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"trace"},"trace"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(r.b)("strong",{parentName:"p"},"trace"),": ",Object(r.b)("em",{parentName:"p"},"boolean")),Object(r.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2003"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"typecast"},"typeCast"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(r.b)("strong",{parentName:"p"},"typeCast"),": ",Object(r.b)("em",{parentName:"p"},"any")),Object(r.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1997"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"user"},"user"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(r.b)("strong",{parentName:"p"},"user"),": ",Object(r.b)("em",{parentName:"p"},"string")),Object(r.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1989"),Object(r.b)("h2",{id:"methods"},"Methods"),Object(r.b)("h3",{id:"expirationchecker"},"expirationChecker"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("inlineCode",{parentName:"p"},"Optional"),Object(r.b)("strong",{parentName:"p"},"expirationChecker"),"(): ",Object(r.b)("em",{parentName:"p"},"boolean")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"boolean")),Object(r.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2008"))}o.isMDXComponent=!0}}]);