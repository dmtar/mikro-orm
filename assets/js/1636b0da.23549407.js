(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{1140:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return o}));var n=a(0),b=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,b=function(e,t){if(null==e)return{};var a,n,b={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(b[a]=e[a])}return b}var O=b.a.createContext({}),j=function(e){var t=b.a.useContext(O),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},i=function(e){var t=j(e.components);return b.a.createElement(O.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},d=b.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,O=p(e,["components","mdxType","originalType","parentName"]),i=j(a),d=n,o=i["".concat(l,".").concat(d)]||i[d]||m[d]||r;return a?b.a.createElement(o,c(c({ref:t},O),{},{components:a})):b.a.createElement(o,c({ref:t},O))}));function o(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var O=2;O<r;O++)l[O]=a[O];return b.a.createElement.apply(null,l)}return b.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},160:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return j}));var n=a(3),b=a(7),r=(a(0),a(1140)),l={id:"knex.knex-1.table",title:"Interface: Table<TRecord, TResult>",sidebar_label:"Table",hide_title:!0},c={unversionedId:"api/interfaces/knex.knex-1.table",id:"api/interfaces/knex.knex-1.table",isDocsHomePage:!1,title:"Interface: Table<TRecord, TResult>",description:"Interface: Table",source:"@site/docs/api/interfaces/knex.knex-1.table.md",slug:"/api/interfaces/knex.knex-1.table",permalink:"/docs/next/api/interfaces/knex.knex-1.table",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/docs/api/interfaces/knex.knex-1.table.md",version:"current",sidebar_label:"Table",sidebar:"API",previous:{title:"Interface: StringTagSupport",permalink:"/docs/next/api/interfaces/knex.knex-1.stringtagsupport"},next:{title:"Interface: TableBuilder",permalink:"/docs/next/api/interfaces/knex.knex-1.tablebuilder"}},p=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Callable",id:"callable",children:[]}],O={toc:p};function j(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},O,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"interface-tabletrecord-tresult"},"Interface: Table<TRecord, TResult",">"),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/modules/knex"}),"knex"),".",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/modules/knex.knex-1"}),"Knex"),".Table"),Object(r.b)("h2",{id:"type-parameters"},"Type parameters"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"TRecord")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"{}"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"any"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"TResult")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"{}"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"any"))))),Object(r.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Table"))),Object(r.b)("h2",{id:"callable"},"Callable"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"Table"),"<TTable, TRecord2, TResult2",">","(",Object(r.b)("inlineCode",{parentName:"p"},"tableName"),": TTable, ",Object(r.b)("inlineCode",{parentName:"p"},"options?"),": PgTableOptions): ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/knex.knex-1.querybuilder"}),Object(r.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord2, TResult2",">"),Object(r.b)("h4",{id:"type-parameters-1"},"Type parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"TTable")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"never")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"TRecord2")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/modules/knex.knex-1#tabletype"}),Object(r.b)("em",{parentName:"a"},"TableType")),"<TTable","\\",">")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"TResult2")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"ReplaceBase"),"<TResult, ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/modules/knex.knex-1#resolvetabletype"}),Object(r.b)("em",{parentName:"a"},"ResolveTableType")),"<TRecord2, ",Object(r.b)("em",{parentName:"td"},"base"),"\\",">","\\",">")))),Object(r.b)("h4",{id:"parameters"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"tableName")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"TTable")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"options?")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"PgTableOptions")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/knex.knex-1.querybuilder"}),Object(r.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord2, TResult2",">"),Object(r.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:981"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"Table"),"<TRecord2, TResult2",">","(",Object(r.b)("inlineCode",{parentName:"p"},"tableName"),": ",Object(r.b)("em",{parentName:"p"},"string")," | ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/interfaces/knex.knex-1.raw"}),Object(r.b)("em",{parentName:"a"},"Raw")),"<",Object(r.b)("em",{parentName:"p"},"any"),">"," | ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/knex.knex-1.querybuilder"}),Object(r.b)("em",{parentName:"a"},"QueryBuilder")),"<",Object(r.b)("em",{parentName:"p"},"any"),", ",Object(r.b)("em",{parentName:"p"},"any"),">"," | ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/interfaces/knex.knex-1.aliasdict"}),Object(r.b)("em",{parentName:"a"},"AliasDict")),", ",Object(r.b)("inlineCode",{parentName:"p"},"options?"),": PgTableOptions): ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/knex.knex-1.querybuilder"}),Object(r.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord2, TResult2",">"),Object(r.b)("h4",{id:"type-parameters-2"},"Type parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"TRecord2")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"unknown"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"TResult2")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"ReplaceBase"),"<TResult, TRecord2","\\",">")))),Object(r.b)("h4",{id:"parameters-1"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"tableName")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"string"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"options?")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"PgTableOptions")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/knex.knex-1.querybuilder"}),Object(r.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord2, TResult2",">"),Object(r.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:989"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"Table"),"<TRecord2, TResult2",">","(",Object(r.b)("inlineCode",{parentName:"p"},"callback"),": Function, ",Object(r.b)("inlineCode",{parentName:"p"},"options?"),": PgTableOptions): ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/knex.knex-1.querybuilder"}),Object(r.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord2, TResult2",">"),Object(r.b)("h4",{id:"type-parameters-3"},"Type parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"TRecord2")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"unknown"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"TResult2")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"ReplaceBase"),"<TResult, TRecord2","\\",">")))),Object(r.b)("h4",{id:"parameters-2"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"callback")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Function")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"options?")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"PgTableOptions")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/knex.knex-1.querybuilder"}),Object(r.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord2, TResult2",">"),Object(r.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:996"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"Table"),"<TRecord2, TResult2",">","(",Object(r.b)("inlineCode",{parentName:"p"},"raw"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/interfaces/knex.knex-1.raw"}),Object(r.b)("em",{parentName:"a"},"Raw")),"<",Object(r.b)("em",{parentName:"p"},"any"),">",", ",Object(r.b)("inlineCode",{parentName:"p"},"options?"),": PgTableOptions): ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/knex.knex-1.querybuilder"}),Object(r.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord2, TResult2",">"),Object(r.b)("h4",{id:"type-parameters-4"},"Type parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"TRecord2")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"unknown"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"TResult2")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"ReplaceBase"),"<TResult, TRecord2","\\",">")))),Object(r.b)("h4",{id:"parameters-3"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"raw")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/interfaces/knex.knex-1.raw"}),Object(r.b)("em",{parentName:"a"},"Raw")),"<",Object(r.b)("em",{parentName:"td"},"any"),">")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"options?")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"PgTableOptions")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/classes/knex.knex-1.querybuilder"}),Object(r.b)("em",{parentName:"a"},"QueryBuilder")),"<TRecord2, TResult2",">"),Object(r.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1003"))}j.isMDXComponent=!0}}]);