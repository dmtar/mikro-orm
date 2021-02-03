(window.webpackJsonp=window.webpackJsonp||[]).push([[451],{1256:function(e,t,a){"use strict";a.d(t,"a",(function(){return O})),a.d(t,"b",(function(){return d}));var r=a(0),b=a.n(r);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,b=function(e,t){if(null==e)return{};var a,r,b={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(b[a]=e[a])}return b}var m=b.a.createContext({}),i=function(e){var t=b.a.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},O=function(e){var t=i(e.components);return b.a.createElement(m.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},o=b.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),O=i(a),o=r,d=O["".concat(c,".").concat(o)]||O[o]||j[o]||n;return a?b.a.createElement(d,p(p({ref:t},m),{},{components:a})):b.a.createElement(d,p({ref:t},m))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,c=new Array(n);c[0]=o;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,c[1]=p;for(var m=2;m<n;m++)c[m]=a[m];return b.a.createElement.apply(null,c)}return b.a.createElement.apply(null,a)}o.displayName="MDXCreateElement"},520:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return p})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return i}));var r=a(3),b=a(7),n=(a(0),a(1256)),c={id:"core.queryhelper",title:"Class: QueryHelper",sidebar_label:"QueryHelper",hide_title:!0},p={unversionedId:"api/classes/core.queryhelper",id:"version-4.4/api/classes/core.queryhelper",isDocsHomePage:!1,title:"Class: QueryHelper",description:"Class: QueryHelper",source:"@site/versioned_docs/version-4.4/api/classes/core.queryhelper.md",slug:"/api/classes/core.queryhelper",permalink:"/docs/api/classes/core.queryhelper",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.4/api/classes/core.queryhelper.md",version:"4.4",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1612369190,sidebar_label:"QueryHelper",sidebar:"version-4.4/API",previous:{title:"Class: Platform",permalink:"/docs/api/classes/core.platform"},next:{title:"Class: ReadOnlyException",permalink:"/docs/api/classes/core.readonlyexception"}},l=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"SUPPORTED_OPERATORS",id:"supported_operators",children:[]}]},{value:"Methods",id:"methods",children:[{value:"getActiveFilters",id:"getactivefilters",children:[]},{value:"inlinePrimaryKeyObjects",id:"inlineprimarykeyobjects",children:[]},{value:"isFilterActive",id:"isfilteractive",children:[]},{value:"isSupportedOperator",id:"issupportedoperator",children:[]},{value:"processCustomType",id:"processcustomtype",children:[]},{value:"processEntity",id:"processentity",children:[]},{value:"processExpression",id:"processexpression",children:[]},{value:"processObjectParams",id:"processobjectparams",children:[]},{value:"processParams",id:"processparams",children:[]},{value:"processWhere",id:"processwhere",children:[]}]}],m={toc:l};function i(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(n.b)("wrapper",Object(r.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"class-queryhelper"},"Class: QueryHelper"),Object(n.b)("p",null,Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/modules/core"}),"core"),".QueryHelper"),Object(n.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"QueryHelper"))),Object(n.b)("h2",{id:"constructors"},"Constructors"),Object(n.b)("h3",{id:"constructor"},"constructor"),Object(n.b)("p",null,"+"," ",Object(n.b)("strong",{parentName:"p"},"new QueryHelper"),"(): ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/core.queryhelper"}),Object(n.b)("em",{parentName:"a"},"QueryHelper"))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/core.queryhelper"}),Object(n.b)("em",{parentName:"a"},"QueryHelper"))),Object(n.b)("h2",{id:"properties"},"Properties"),Object(n.b)("h3",{id:"supported_operators"},"SUPPORTED","_","OPERATORS"),Object(n.b)("p",null,"\u25aa ",Object(n.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(n.b)("inlineCode",{parentName:"p"},"Static")," ",Object(n.b)("strong",{parentName:"p"},"SUPPORTED","_","OPERATORS"),": ",Object(n.b)("em",{parentName:"p"},"string"),"[]"),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/utils/QueryHelper.ts#L10"}),"packages/core/src/utils/QueryHelper.ts:10")),Object(n.b)("h2",{id:"methods"},"Methods"),Object(n.b)("h3",{id:"getactivefilters"},"getActiveFilters"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("inlineCode",{parentName:"p"},"Static"),Object(n.b)("strong",{parentName:"p"},"getActiveFilters"),"(",Object(n.b)("inlineCode",{parentName:"p"},"entityName"),": ",Object(n.b)("em",{parentName:"p"},"string"),", ",Object(n.b)("inlineCode",{parentName:"p"},"options"),": ",Object(n.b)("em",{parentName:"p"},"boolean")," ","|"," ",Object(n.b)("em",{parentName:"p"},"string"),"[] ","|"," ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/modules/core#dictionary"}),Object(n.b)("em",{parentName:"a"},"Dictionary")),"<",Object(n.b)("em",{parentName:"p"},"boolean")," ","|"," ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/modules/core#dictionary"}),Object(n.b)("em",{parentName:"a"},"Dictionary")),"<",Object(n.b)("em",{parentName:"p"},"any"),">",">",", ",Object(n.b)("inlineCode",{parentName:"p"},"filters"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/modules/core#dictionary"}),Object(n.b)("em",{parentName:"a"},"Dictionary")),"<",Object(n.b)("em",{parentName:"p"},"FilterDef"),"<",Object(n.b)("em",{parentName:"p"},"any"),">",">","): ",Object(n.b)("em",{parentName:"p"},"FilterDef"),"<",Object(n.b)("em",{parentName:"p"},"any"),">","[]"),Object(n.b)("h4",{id:"parameters"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"entityName")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("em",{parentName:"td"},"string"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"options")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("em",{parentName:"td"},"boolean")," ","|"," ",Object(n.b)("em",{parentName:"td"},"string"),"[] ","|"," ",Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/modules/core#dictionary"}),Object(n.b)("em",{parentName:"a"},"Dictionary")),"<",Object(n.b)("em",{parentName:"td"},"boolean")," ","|"," ",Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/modules/core#dictionary"}),Object(n.b)("em",{parentName:"a"},"Dictionary")),"<",Object(n.b)("em",{parentName:"td"},"any"),">",">")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"filters")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/modules/core#dictionary"}),Object(n.b)("em",{parentName:"a"},"Dictionary")),"<",Object(n.b)("em",{parentName:"td"},"FilterDef"),"<",Object(n.b)("em",{parentName:"td"},"any"),">",">")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"FilterDef"),"<",Object(n.b)("em",{parentName:"p"},"any"),">","[]"),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/utils/QueryHelper.ts#L160"}),"packages/core/src/utils/QueryHelper.ts:160")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"inlineprimarykeyobjects"},"inlinePrimaryKeyObjects"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("inlineCode",{parentName:"p"},"Static"),Object(n.b)("strong",{parentName:"p"},"inlinePrimaryKeyObjects"),"<T",">","(",Object(n.b)("inlineCode",{parentName:"p"},"where"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/modules/core#dictionary"}),Object(n.b)("em",{parentName:"a"},"Dictionary")),"<",Object(n.b)("em",{parentName:"p"},"any"),">",", ",Object(n.b)("inlineCode",{parentName:"p"},"meta"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/core.entitymetadata"}),Object(n.b)("em",{parentName:"a"},"EntityMetadata")),"<T",">",", ",Object(n.b)("inlineCode",{parentName:"p"},"metadata"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/core.metadatastorage"}),Object(n.b)("em",{parentName:"a"},"MetadataStorage")),", ",Object(n.b)("inlineCode",{parentName:"p"},"key?"),": ",Object(n.b)("em",{parentName:"p"},"string"),"): ",Object(n.b)("em",{parentName:"p"},"boolean")),Object(n.b)("h4",{id:"type-parameters"},"Type parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"T")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/modules/core#anyentity"}),Object(n.b)("em",{parentName:"a"},"AnyEntity")),"<T",">")))),Object(n.b)("h4",{id:"parameters-1"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"where")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/modules/core#dictionary"}),Object(n.b)("em",{parentName:"a"},"Dictionary")),"<",Object(n.b)("em",{parentName:"td"},"any"),">")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"meta")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/classes/core.entitymetadata"}),Object(n.b)("em",{parentName:"a"},"EntityMetadata")),"<T",">")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"metadata")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/classes/core.metadatastorage"}),Object(n.b)("em",{parentName:"a"},"MetadataStorage")))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"key?")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("em",{parentName:"td"},"string"))))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"boolean")),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/utils/QueryHelper.ts#L44"}),"packages/core/src/utils/QueryHelper.ts:44")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"isfilteractive"},"isFilterActive"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("inlineCode",{parentName:"p"},"Static"),Object(n.b)("strong",{parentName:"p"},"isFilterActive"),"(",Object(n.b)("inlineCode",{parentName:"p"},"entityName"),": ",Object(n.b)("em",{parentName:"p"},"string"),", ",Object(n.b)("inlineCode",{parentName:"p"},"filterName"),": ",Object(n.b)("em",{parentName:"p"},"string"),", ",Object(n.b)("inlineCode",{parentName:"p"},"filter"),": ",Object(n.b)("em",{parentName:"p"},"FilterDef"),"<",Object(n.b)("em",{parentName:"p"},"any"),">",", ",Object(n.b)("inlineCode",{parentName:"p"},"options"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/modules/core#dictionary"}),Object(n.b)("em",{parentName:"a"},"Dictionary")),"<",Object(n.b)("em",{parentName:"p"},"boolean")," ","|"," ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/modules/core#dictionary"}),Object(n.b)("em",{parentName:"a"},"Dictionary")),"<",Object(n.b)("em",{parentName:"p"},"any"),">",">","): ",Object(n.b)("em",{parentName:"p"},"boolean")),Object(n.b)("h4",{id:"parameters-2"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"entityName")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("em",{parentName:"td"},"string"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"filterName")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("em",{parentName:"td"},"string"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"filter")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("em",{parentName:"td"},"FilterDef"),"<",Object(n.b)("em",{parentName:"td"},"any"),">")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"options")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/modules/core#dictionary"}),Object(n.b)("em",{parentName:"a"},"Dictionary")),"<",Object(n.b)("em",{parentName:"td"},"boolean")," ","|"," ",Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/modules/core#dictionary"}),Object(n.b)("em",{parentName:"a"},"Dictionary")),"<",Object(n.b)("em",{parentName:"td"},"any"),">",">")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"boolean")),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/utils/QueryHelper.ts#L181"}),"packages/core/src/utils/QueryHelper.ts:181")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"issupportedoperator"},"isSupportedOperator"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("inlineCode",{parentName:"p"},"Private")," ",Object(n.b)("inlineCode",{parentName:"p"},"Static"),Object(n.b)("strong",{parentName:"p"},"isSupportedOperator"),"(",Object(n.b)("inlineCode",{parentName:"p"},"key"),": ",Object(n.b)("em",{parentName:"p"},"string"),"): ",Object(n.b)("em",{parentName:"p"},"boolean")),Object(n.b)("h4",{id:"parameters-3"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"key")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("em",{parentName:"td"},"string"))))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"boolean")),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/utils/QueryHelper.ts#L235"}),"packages/core/src/utils/QueryHelper.ts:235")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"processcustomtype"},"processCustomType"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("inlineCode",{parentName:"p"},"Static"),Object(n.b)("strong",{parentName:"p"},"processCustomType"),"<T",">","(",Object(n.b)("inlineCode",{parentName:"p"},"prop"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/interfaces/core.entityproperty"}),Object(n.b)("em",{parentName:"a"},"EntityProperty")),"<T",">",", ",Object(n.b)("inlineCode",{parentName:"p"},"cond"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/modules/core#filterquery"}),Object(n.b)("em",{parentName:"a"},"FilterQuery")),"<T",">",", ",Object(n.b)("inlineCode",{parentName:"p"},"platform"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/core.platform"}),Object(n.b)("em",{parentName:"a"},"Platform")),", ",Object(n.b)("inlineCode",{parentName:"p"},"key?"),": ",Object(n.b)("em",{parentName:"p"},"string"),", ",Object(n.b)("inlineCode",{parentName:"p"},"fromQuery?"),": ",Object(n.b)("em",{parentName:"p"},"boolean"),"): ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/modules/core#filterquery"}),Object(n.b)("em",{parentName:"a"},"FilterQuery")),"<T",">"),Object(n.b)("h4",{id:"type-parameters-1"},"Type parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"T"))))),Object(n.b)("h4",{id:"parameters-4"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"prop")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/interfaces/core.entityproperty"}),Object(n.b)("em",{parentName:"a"},"EntityProperty")),"<T",">")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"cond")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/modules/core#filterquery"}),Object(n.b)("em",{parentName:"a"},"FilterQuery")),"<T",">")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"platform")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/classes/core.platform"}),Object(n.b)("em",{parentName:"a"},"Platform")))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"key?")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("em",{parentName:"td"},"string"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"fromQuery?")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("em",{parentName:"td"},"boolean"))))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/modules/core#filterquery"}),Object(n.b)("em",{parentName:"a"},"FilterQuery")),"<T",">"),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/utils/QueryHelper.ts#L193"}),"packages/core/src/utils/QueryHelper.ts:193")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"processentity"},"processEntity"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("inlineCode",{parentName:"p"},"Private")," ",Object(n.b)("inlineCode",{parentName:"p"},"Static"),Object(n.b)("strong",{parentName:"p"},"processEntity"),"(",Object(n.b)("inlineCode",{parentName:"p"},"entity"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/modules/core#anyentity"}),Object(n.b)("em",{parentName:"a"},"AnyEntity")),"<",Object(n.b)("em",{parentName:"p"},"any"),">",", ",Object(n.b)("inlineCode",{parentName:"p"},"root?"),": ",Object(n.b)("em",{parentName:"p"},"boolean"),"): ",Object(n.b)("em",{parentName:"p"},"any")),Object(n.b)("h4",{id:"parameters-5"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"entity")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/modules/core#anyentity"}),Object(n.b)("em",{parentName:"a"},"AnyEntity")),"<",Object(n.b)("em",{parentName:"td"},"any"),">")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"root?")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("em",{parentName:"td"},"boolean"))))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"any")),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/utils/QueryHelper.ts#L213"}),"packages/core/src/utils/QueryHelper.ts:213")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"processexpression"},"processExpression"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("inlineCode",{parentName:"p"},"Private")," ",Object(n.b)("inlineCode",{parentName:"p"},"Static"),Object(n.b)("strong",{parentName:"p"},"processExpression"),"<T",">","(",Object(n.b)("inlineCode",{parentName:"p"},"expr"),": ",Object(n.b)("em",{parentName:"p"},"string"),", ",Object(n.b)("inlineCode",{parentName:"p"},"value"),": T): ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/modules/core#dictionary"}),Object(n.b)("em",{parentName:"a"},"Dictionary")),"<T",">"),Object(n.b)("h4",{id:"type-parameters-2"},"Type parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"T"))))),Object(n.b)("h4",{id:"parameters-6"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"expr")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("em",{parentName:"td"},"string"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"value")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"T")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/modules/core#dictionary"}),Object(n.b)("em",{parentName:"a"},"Dictionary")),"<T",">"),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/utils/QueryHelper.ts#L223"}),"packages/core/src/utils/QueryHelper.ts:223")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"processobjectparams"},"processObjectParams"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("inlineCode",{parentName:"p"},"Static"),Object(n.b)("strong",{parentName:"p"},"processObjectParams"),"(",Object(n.b)("inlineCode",{parentName:"p"},"params?"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/modules/core#dictionary"}),Object(n.b)("em",{parentName:"a"},"Dictionary")),"<",Object(n.b)("em",{parentName:"p"},"any"),">","): ",Object(n.b)("em",{parentName:"p"},"any")),Object(n.b)("h4",{id:"parameters-7"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default value"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"params")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/modules/core#dictionary"}),Object(n.b)("em",{parentName:"a"},"Dictionary")),"<",Object(n.b)("em",{parentName:"td"},"any"),">"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"...")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"any")),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/utils/QueryHelper.ts#L36"}),"packages/core/src/utils/QueryHelper.ts:36")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"processparams"},"processParams"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("inlineCode",{parentName:"p"},"Static"),Object(n.b)("strong",{parentName:"p"},"processParams"),"(",Object(n.b)("inlineCode",{parentName:"p"},"params"),": ",Object(n.b)("em",{parentName:"p"},"any"),", ",Object(n.b)("inlineCode",{parentName:"p"},"root?"),": ",Object(n.b)("em",{parentName:"p"},"boolean"),"): ",Object(n.b)("em",{parentName:"p"},"any")),Object(n.b)("h4",{id:"parameters-8"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"params")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("em",{parentName:"td"},"any"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"root?")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("em",{parentName:"td"},"boolean"))))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"any")),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/utils/QueryHelper.ts#L12"}),"packages/core/src/utils/QueryHelper.ts:12")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"processwhere"},"processWhere"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("inlineCode",{parentName:"p"},"Static"),Object(n.b)("strong",{parentName:"p"},"processWhere"),"<T",">","(",Object(n.b)("inlineCode",{parentName:"p"},"where"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/modules/core#filterquery"}),Object(n.b)("em",{parentName:"a"},"FilterQuery")),"<T",">",", ",Object(n.b)("inlineCode",{parentName:"p"},"entityName"),": ",Object(n.b)("em",{parentName:"p"},"string"),", ",Object(n.b)("inlineCode",{parentName:"p"},"metadata"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/core.metadatastorage"}),Object(n.b)("em",{parentName:"a"},"MetadataStorage")),", ",Object(n.b)("inlineCode",{parentName:"p"},"platform"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/core.platform"}),Object(n.b)("em",{parentName:"a"},"Platform")),", ",Object(n.b)("inlineCode",{parentName:"p"},"convertCustomTypes?"),": ",Object(n.b)("em",{parentName:"p"},"boolean"),", ",Object(n.b)("inlineCode",{parentName:"p"},"root?"),": ",Object(n.b)("em",{parentName:"p"},"boolean"),"): ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/modules/core#filterquery"}),Object(n.b)("em",{parentName:"a"},"FilterQuery")),"<T",">"),Object(n.b)("h4",{id:"type-parameters-3"},"Type parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"T")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/modules/core#anyentity"}),Object(n.b)("em",{parentName:"a"},"AnyEntity")),"<T",">")))),Object(n.b)("h4",{id:"parameters-9"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default value"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"where")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/modules/core#filterquery"}),Object(n.b)("em",{parentName:"a"},"FilterQuery")),"<T",">"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"entityName")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("em",{parentName:"td"},"string")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"metadata")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/classes/core.metadatastorage"}),Object(n.b)("em",{parentName:"a"},"MetadataStorage"))),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"platform")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/classes/core.platform"}),Object(n.b)("em",{parentName:"a"},"Platform"))),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"convertCustomTypes")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("em",{parentName:"td"},"boolean")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"true")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"root")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("em",{parentName:"td"},"boolean")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"true")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/modules/core#filterquery"}),Object(n.b)("em",{parentName:"a"},"FilterQuery")),"<T",">"),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/utils/QueryHelper.ts#L72"}),"packages/core/src/utils/QueryHelper.ts:72")))}i.isMDXComponent=!0}}]);