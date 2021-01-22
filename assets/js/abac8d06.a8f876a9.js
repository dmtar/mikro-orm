(window.webpackJsonp=window.webpackJsonp||[]).push([[729],{1140:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return j}));var a=r(0),c=r.n(a);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,c=function(e,t){if(null==e)return{};var r,a,c={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var s=c.a.createContext({}),i=function(e){var t=c.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},l=function(e){var t=i(e.components);return c.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},O=c.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,b=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),l=i(r),O=a,j=l["".concat(b,".").concat(O)]||l[O]||m[O]||n;return r?c.a.createElement(j,p(p({ref:t},s),{},{components:r})):c.a.createElement(j,p({ref:t},s))}));function j(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,b=new Array(n);b[0]=O;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,b[1]=p;for(var s=2;s<n;s++)b[s]=r[s];return c.a.createElement.apply(null,b)}return c.a.createElement.apply(null,r)}O.displayName="MDXCreateElement"},798:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return b})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return o})),r.d(t,"default",(function(){return i}));var a=r(3),c=r(7),n=(r(0),r(1140)),b={id:"core.syntaxerrorexception",title:"Class: SyntaxErrorException",sidebar_label:"SyntaxErrorException",hide_title:!0},p={unversionedId:"api/classes/core.syntaxerrorexception",id:"api/classes/core.syntaxerrorexception",isDocsHomePage:!1,title:"Class: SyntaxErrorException",description:"Class: SyntaxErrorException",source:"@site/docs/api/classes/core.syntaxerrorexception.md",slug:"/api/classes/core.syntaxerrorexception",permalink:"/docs/next/api/classes/core.syntaxerrorexception",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/docs/api/classes/core.syntaxerrorexception.md",version:"current",sidebar_label:"SyntaxErrorException",sidebar:"API",previous:{title:"Class: ServerException",permalink:"/docs/next/api/classes/core.serverexception"},next:{title:"Class: TableExistsException",permalink:"/docs/next/api/classes/core.tableexistsexception"}},o=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"code",id:"code",children:[]},{value:"errmsg",id:"errmsg",children:[]},{value:"errno",id:"errno",children:[]},{value:"message",id:"message",children:[]},{value:"name",id:"name",children:[]},{value:"prepareStackTrace",id:"preparestacktrace",children:[]},{value:"sqlMessage",id:"sqlmessage",children:[]},{value:"sqlState",id:"sqlstate",children:[]},{value:"stack",id:"stack",children:[]},{value:"stackTraceLimit",id:"stacktracelimit",children:[]}]},{value:"Methods",id:"methods",children:[{value:"captureStackTrace",id:"capturestacktrace",children:[]}]}],s={toc:o};function i(e){var t=e.components,r=Object(c.a)(e,["components"]);return Object(n.b)("wrapper",Object(a.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"class-syntaxerrorexception"},"Class: SyntaxErrorException"),Object(n.b)("p",null,Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/api/modules/core"}),"core"),".SyntaxErrorException"),Object(n.b)("p",null,"Exception for a syntax error in a statement detected in the driver."),Object(n.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/api/classes/core.serverexception"}),Object(n.b)("em",{parentName:"a"},"ServerException"))),Object(n.b)("p",{parentName:"li"},"\u21b3 ",Object(n.b)("strong",{parentName:"p"},"SyntaxErrorException")))),Object(n.b)("h2",{id:"constructors"},"Constructors"),Object(n.b)("h3",{id:"constructor"},"constructor"),Object(n.b)("p",null,"+"," ",Object(n.b)("strong",{parentName:"p"},"new SyntaxErrorException"),"(",Object(n.b)("inlineCode",{parentName:"p"},"previous"),": Error): ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/api/classes/core.syntaxerrorexception"}),Object(n.b)("em",{parentName:"a"},"SyntaxErrorException"))),Object(n.b)("h4",{id:"parameters"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"previous")),Object(n.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Error")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/api/classes/core.syntaxerrorexception"}),Object(n.b)("em",{parentName:"a"},"SyntaxErrorException"))),Object(n.b)("p",null,"Inherited from: ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/api/classes/core.serverexception"}),"ServerException")),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/88e0c77/packages/core/src/exceptions.ts#L10"}),"packages/core/src/exceptions.ts:10")),Object(n.b)("h2",{id:"properties"},"Properties"),Object(n.b)("h3",{id:"code"},"code"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(n.b)("strong",{parentName:"p"},"code"),": ",Object(n.b)("em",{parentName:"p"},"undefined")," | ",Object(n.b)("em",{parentName:"p"},"string")),Object(n.b)("p",null,"Inherited from: ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/api/classes/core.serverexception"}),"ServerException"),".",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/api/classes/core.serverexception#code"}),"code")),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/88e0c77/packages/core/src/exceptions.ts#L6"}),"packages/core/src/exceptions.ts:6")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"errmsg"},"errmsg"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(n.b)("strong",{parentName:"p"},"errmsg"),": ",Object(n.b)("em",{parentName:"p"},"undefined")," | ",Object(n.b)("em",{parentName:"p"},"string")),Object(n.b)("p",null,"Inherited from: ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/api/classes/core.serverexception"}),"ServerException"),".",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/api/classes/core.serverexception#errmsg"}),"errmsg")),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/88e0c77/packages/core/src/exceptions.ts#L10"}),"packages/core/src/exceptions.ts:10")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"errno"},"errno"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(n.b)("strong",{parentName:"p"},"errno"),": ",Object(n.b)("em",{parentName:"p"},"undefined")," | ",Object(n.b)("em",{parentName:"p"},"number")),Object(n.b)("p",null,"Inherited from: ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/api/classes/core.serverexception"}),"ServerException"),".",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/api/classes/core.serverexception#errno"}),"errno")),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/88e0c77/packages/core/src/exceptions.ts#L7"}),"packages/core/src/exceptions.ts:7")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"message"},"message"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("strong",{parentName:"p"},"message"),": ",Object(n.b)("em",{parentName:"p"},"string")),Object(n.b)("p",null,"Inherited from: ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/api/classes/core.serverexception"}),"ServerException"),".",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/api/classes/core.serverexception#message"}),"message")),Object(n.b)("p",null,"Defined in: docs/node_modules/typescript/lib/lib.es5.d.ts:974"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"name"},"name"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("strong",{parentName:"p"},"name"),": ",Object(n.b)("em",{parentName:"p"},"string")),Object(n.b)("p",null,"Inherited from: ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/api/classes/core.serverexception"}),"ServerException"),".",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/api/classes/core.serverexception#name"}),"name")),Object(n.b)("p",null,"Defined in: docs/node_modules/typescript/lib/lib.es5.d.ts:973"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"preparestacktrace"},"prepareStackTrace"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(n.b)("strong",{parentName:"p"},"prepareStackTrace"),": ",Object(n.b)("em",{parentName:"p"},"undefined")," | (",Object(n.b)("inlineCode",{parentName:"p"},"err"),": Error, ",Object(n.b)("inlineCode",{parentName:"p"},"stackTraces"),": CallSite[]) => ",Object(n.b)("em",{parentName:"p"},"any")),Object(n.b)("p",null,"Optional override for formatting stack traces"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},Object(n.b)("inlineCode",{parentName:"strong"},"see"))," ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/v8/v8/wiki/Stack%20Trace%20API#customizing-stack-traces"}),"https://github.com/v8/v8/wiki/Stack%20Trace%20API#customizing-stack-traces")),Object(n.b)("p",null,"Inherited from: ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/api/classes/core.serverexception"}),"ServerException"),".",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/api/classes/core.serverexception#preparestacktrace"}),"prepareStackTrace")),Object(n.b)("p",null,"Defined in: node_modules/@types/node/globals.d.ts:11"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"sqlmessage"},"sqlMessage"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(n.b)("strong",{parentName:"p"},"sqlMessage"),": ",Object(n.b)("em",{parentName:"p"},"undefined")," | ",Object(n.b)("em",{parentName:"p"},"string")),Object(n.b)("p",null,"Inherited from: ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/api/classes/core.serverexception"}),"ServerException"),".",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/api/classes/core.serverexception#sqlmessage"}),"sqlMessage")),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/88e0c77/packages/core/src/exceptions.ts#L9"}),"packages/core/src/exceptions.ts:9")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"sqlstate"},"sqlState"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(n.b)("strong",{parentName:"p"},"sqlState"),": ",Object(n.b)("em",{parentName:"p"},"undefined")," | ",Object(n.b)("em",{parentName:"p"},"string")),Object(n.b)("p",null,"Inherited from: ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/api/classes/core.serverexception"}),"ServerException"),".",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/api/classes/core.serverexception#sqlstate"}),"sqlState")),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/88e0c77/packages/core/src/exceptions.ts#L8"}),"packages/core/src/exceptions.ts:8")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"stack"},"stack"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(n.b)("strong",{parentName:"p"},"stack"),": ",Object(n.b)("em",{parentName:"p"},"undefined")," | ",Object(n.b)("em",{parentName:"p"},"string")),Object(n.b)("p",null,"Inherited from: ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/api/classes/core.serverexception"}),"ServerException"),".",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/api/classes/core.serverexception#stack"}),"stack")),Object(n.b)("p",null,"Defined in: docs/node_modules/typescript/lib/lib.es5.d.ts:975"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"stacktracelimit"},"stackTraceLimit"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("strong",{parentName:"p"},"stackTraceLimit"),": ",Object(n.b)("em",{parentName:"p"},"number")),Object(n.b)("p",null,"Inherited from: ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/api/classes/core.serverexception"}),"ServerException"),".",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/api/classes/core.serverexception#stacktracelimit"}),"stackTraceLimit")),Object(n.b)("p",null,"Defined in: node_modules/@types/node/globals.d.ts:13"),Object(n.b)("h2",{id:"methods"},"Methods"),Object(n.b)("h3",{id:"capturestacktrace"},"captureStackTrace"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"captureStackTrace"),"(",Object(n.b)("inlineCode",{parentName:"p"},"targetObject"),": ",Object(n.b)("em",{parentName:"p"},"object"),", ",Object(n.b)("inlineCode",{parentName:"p"},"constructorOpt?"),": Function): ",Object(n.b)("em",{parentName:"p"},"void")),Object(n.b)("p",null,"Create .stack property on a target object"),Object(n.b)("h4",{id:"parameters-1"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"targetObject")),Object(n.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(n.b)("em",{parentName:"td"},"object"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"constructorOpt?")),Object(n.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Function")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"void")),Object(n.b)("p",null,"Inherited from: ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/api/classes/core.serverexception"}),"ServerException")),Object(n.b)("p",null,"Defined in: node_modules/@types/node/globals.d.ts:4"))}i.isMDXComponent=!0}}]);