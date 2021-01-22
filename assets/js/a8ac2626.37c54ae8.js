(window.webpackJsonp=window.webpackJsonp||[]).push([[714],{1140:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return d}));var r=a(0),b=a.n(r);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,b=function(e,t){if(null==e)return{};var a,r,b={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(b[a]=e[a])}return b}var l=b.a.createContext({}),o=function(e){var t=b.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},m=function(e){var t=o(e.components);return b.a.createElement(l.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},j=b.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=o(a),j=r,d=m["".concat(c,".").concat(j)]||m[j]||O[j]||n;return a?b.a.createElement(d,p(p({ref:t},l),{},{components:a})):b.a.createElement(d,p({ref:t},l))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,c=new Array(n);c[0]=j;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,c[1]=p;for(var l=2;l<n;l++)c[l]=a[l];return b.a.createElement.apply(null,c)}return b.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"},783:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return p})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return o}));var r=a(3),b=a(7),n=(a(0),a(1140)),c={id:"identitymap",title:"Class: IdentityMap",sidebar_label:"IdentityMap"},p={unversionedId:"api/classes/identitymap",id:"version-4.3/api/classes/identitymap",isDocsHomePage:!1,title:"Class: IdentityMap",description:"Hierarchy",source:"@site/versioned_docs/version-4.3/api/classes/identitymap.md",slug:"/api/classes/identitymap",permalink:"/docs/api/classes/identitymap",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.3/api/classes/identitymap.md",version:"4.3",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1611310070,sidebar_label:"IdentityMap",sidebar:"version-4.3/API",previous:{title:"Class: Hydrator",permalink:"/docs/api/classes/hydrator"},next:{title:"Class: ImportCommand",permalink:"/docs/api/classes/importcommand"}},i=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"registry",id:"registry",children:[]}]},{value:"Methods",id:"methods",children:[{value:"clear",id:"clear",children:[]},{value:"delete",id:"delete",children:[]},{value:"get",id:"get",children:[]},{value:"getByHash",id:"getbyhash",children:[]},{value:"getStore",id:"getstore",children:[]},{value:"keys",id:"keys",children:[]},{value:"store",id:"store",children:[]},{value:"values",id:"values",children:[]}]}],l={toc:i};function o(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(n.b)("wrapper",Object(r.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"IdentityMap"))),Object(n.b)("h2",{id:"properties"},"Properties"),Object(n.b)("h3",{id:"registry"},"registry"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("inlineCode",{parentName:"p"},"Private")," ",Object(n.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(n.b)("strong",{parentName:"p"},"registry"),": Map","<",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api#constructor"}),"Constructor"),"<",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api#anyentity"}),"AnyEntity"),"<","any>>, Map","<","string, ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api#anyentity"}),"AnyEntity"),"<","any>>> = new Map","<","Constructor","<","AnyEntity>, Map","<","string, AnyEntity>>()"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/unit-of-work/IdentityMap.ts#L5"}),"packages/core/src/unit-of-work/IdentityMap.ts:5"))),Object(n.b)("h2",{id:"methods"},"Methods"),Object(n.b)("h3",{id:"clear"},"clear"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"clear"),"(): void"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/unit-of-work/IdentityMap.ts#L33"}),"packages/core/src/unit-of-work/IdentityMap.ts:33"))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," void"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"delete"},"delete"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"delete"),"<","T>(",Object(n.b)("inlineCode",{parentName:"p"},"item"),": T): void"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/unit-of-work/IdentityMap.ts#L11"}),"packages/core/src/unit-of-work/IdentityMap.ts:11"))),Object(n.b)("h4",{id:"type-parameters"},"Type parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"T")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api#anyentity"}),"AnyEntity"),"<","T>")))),Object(n.b)("h4",{id:"parameters"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"item")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"T")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," void"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"get"},"get"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"get"),"<","T>(",Object(n.b)("inlineCode",{parentName:"p"},"hash"),": string): T ","|"," undefined"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/unit-of-work/IdentityMap.ts#L60"}),"packages/core/src/unit-of-work/IdentityMap.ts:60"))),Object(n.b)("p",null,"For back compatibility only."),Object(n.b)("h4",{id:"type-parameters-1"},"Type parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"T"))))),Object(n.b)("h4",{id:"parameters-1"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"hash")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," T ","|"," undefined"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"getbyhash"},"getByHash"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"getByHash"),"<","T>(",Object(n.b)("inlineCode",{parentName:"p"},"meta"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/entitymetadata"}),"EntityMetadata"),"<","T>, ",Object(n.b)("inlineCode",{parentName:"p"},"hash"),": string): T ","|"," undefined"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/unit-of-work/IdentityMap.ts#L15"}),"packages/core/src/unit-of-work/IdentityMap.ts:15"))),Object(n.b)("h4",{id:"type-parameters-2"},"Type parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"T"))))),Object(n.b)("h4",{id:"parameters-2"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"meta")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/classes/entitymetadata"}),"EntityMetadata"),"<","T>")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"hash")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," T ","|"," undefined"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"getstore"},"getStore"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"getStore"),"<","T>(",Object(n.b)("inlineCode",{parentName:"p"},"meta"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/entitymetadata"}),"EntityMetadata"),"<","T>): Map","<","string, T>"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/unit-of-work/IdentityMap.ts#L20"}),"packages/core/src/unit-of-work/IdentityMap.ts:20"))),Object(n.b)("h4",{id:"type-parameters-3"},"Type parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"T")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api#anyentity"}),"AnyEntity"),"<","T>")))),Object(n.b)("h4",{id:"parameters-3"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"meta")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/classes/entitymetadata"}),"EntityMetadata"),"<","T>")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," Map","<","string, T>"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"keys"},"keys"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"keys"),"(): string[]"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/unit-of-work/IdentityMap.ts#L47"}),"packages/core/src/unit-of-work/IdentityMap.ts:47"))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," string[]"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"store"},"store"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"store"),"<","T>(",Object(n.b)("inlineCode",{parentName:"p"},"item"),": T): void"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/unit-of-work/IdentityMap.ts#L7"}),"packages/core/src/unit-of-work/IdentityMap.ts:7"))),Object(n.b)("h4",{id:"type-parameters-4"},"Type parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"T")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api#anyentity"}),"AnyEntity"),"<","T>")))),Object(n.b)("h4",{id:"parameters-4"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"item")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"T")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," void"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"values"},"values"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"values"),"(): ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api#anyentity"}),"AnyEntity"),"[]"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/unit-of-work/IdentityMap.ts#L37"}),"packages/core/src/unit-of-work/IdentityMap.ts:37"))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api#anyentity"}),"AnyEntity"),"[]"))}o.isMDXComponent=!0}}]);