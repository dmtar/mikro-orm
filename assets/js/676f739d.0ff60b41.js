(window.webpackJsonp=window.webpackJsonp||[]).push([[460],{1256:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},b=Object.keys(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),o=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=o(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,b=e.originalType,c=e.parentName,l=m(e,["components","mdxType","originalType","parentName"]),s=o(n),d=a,O=s["".concat(c,".").concat(d)]||s[d]||p[d]||b;return n?r.a.createElement(O,i(i({ref:t},l),{},{components:n})):r.a.createElement(O,i({ref:t},l))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var b=n.length,c=new Array(b);c[0]=d;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<b;l++)c[l]=n[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},529:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return m})),n.d(t,"default",(function(){return o}));var a=n(3),r=n(7),b=(n(0),n(1256)),c={id:"generateentitiescommand",title:"Class: GenerateEntitiesCommand<U>",sidebar_label:"GenerateEntitiesCommand"},i={unversionedId:"api/classes/generateentitiescommand",id:"version-4.3/api/classes/generateentitiescommand",isDocsHomePage:!1,title:"Class: GenerateEntitiesCommand<U>",description:"Type parameters",source:"@site/versioned_docs/version-4.3/api/classes/generateentitiescommand.md",slug:"/api/classes/generateentitiescommand",permalink:"/docs/4.3/api/classes/generateentitiescommand",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.3/api/classes/generateentitiescommand.md",version:"4.3",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1612369190,sidebar_label:"GenerateEntitiesCommand",sidebar:"version-4.3/API",previous:{title:"Class: GenerateCacheCommand",permalink:"/docs/4.3/api/classes/generatecachecommand"},next:{title:"Class: Hydrator",permalink:"/docs/4.3/api/classes/hydrator"}},m=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Implements",id:"implements",children:[]},{value:"Properties",id:"properties",children:[{value:"command",id:"command",children:[]},{value:"describe",id:"describe",children:[]}]},{value:"Methods",id:"methods",children:[{value:"builder",id:"builder",children:[]},{value:"handler",id:"handler",children:[]}]}],l={toc:m};function o(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h2",{id:"type-parameters"},"Type parameters"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"U")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"/docs/4.3/api#options"}),"Options")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Options")))),Object(b.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"GenerateEntitiesCommand"))),Object(b.b)("h2",{id:"implements"},"Implements"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"CommandModule","<","unknown, U>")),Object(b.b)("h2",{id:"properties"},"Properties"),Object(b.b)("h3",{id:"command"},"command"),Object(b.b)("p",null,"\u2022  ",Object(b.b)("strong",{parentName:"p"},"command"),': string = "generate-entities"'),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/cli/src/commands/GenerateEntitiesCommand.ts#L10"}),"packages/cli/src/commands/GenerateEntitiesCommand.ts:10"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"describe"},"describe"),Object(b.b)("p",null,"\u2022  ",Object(b.b)("strong",{parentName:"p"},"describe"),': string = "Generate entities based on current database schema"'),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/cli/src/commands/GenerateEntitiesCommand.ts#L11"}),"packages/cli/src/commands/GenerateEntitiesCommand.ts:11"))),Object(b.b)("h2",{id:"methods"},"Methods"),Object(b.b)("h3",{id:"builder"},"builder"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"builder"),"(",Object(b.b)("inlineCode",{parentName:"p"},"args"),": Argv): Argv","<","U>"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/cli/src/commands/GenerateEntitiesCommand.ts#L16"}),"packages/cli/src/commands/GenerateEntitiesCommand.ts:16"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("inlineCode",{parentName:"strong"},"inheritdoc"))," "),Object(b.b)("h4",{id:"parameters"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"args")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Argv")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Argv","<","U>"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"handler"},"handler"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"handler"),"(",Object(b.b)("inlineCode",{parentName:"p"},"args"),": Arguments","<","U>): Promise","<","void>"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/cli/src/commands/GenerateEntitiesCommand.ts#L39"}),"packages/cli/src/commands/GenerateEntitiesCommand.ts:39"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},Object(b.b)("inlineCode",{parentName:"strong"},"inheritdoc"))," "),Object(b.b)("h4",{id:"parameters-1"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"args")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Arguments","<","U>")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Promise","<","void>"))}o.isMDXComponent=!0}}]);