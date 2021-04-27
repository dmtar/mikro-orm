(window.webpackJsonp=window.webpackJsonp||[]).push([[715],{1026:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return O}));var r=a(0),b=a.n(r);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,b=function(e,t){if(null==e)return{};var a,r,b={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(b[a]=e[a])}return b}var l=b.a.createContext({}),o=function(e){var t=b.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},m=function(e){var t=o(e.components);return b.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},s=b.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=o(a),s=r,O=m["".concat(i,".").concat(s)]||m[s]||d[s]||n;return a?b.a.createElement(O,c(c({ref:t},l),{},{components:a})):b.a.createElement(O,c({ref:t},l))}));function O(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=s;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<n;l++)i[l]=a[l];return b.a.createElement.apply(null,i)}return b.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"},787:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return o}));var r=a(3),b=a(8),n=(a(0),a(1026)),i={id:"knex.criterianode",title:"Class: CriteriaNode",sidebar_label:"CriteriaNode",custom_edit_url:null,hide_title:!0},c={unversionedId:"api/classes/knex.criterianode",id:"version-4.5/api/classes/knex.criterianode",isDocsHomePage:!1,title:"Class: CriteriaNode",description:"Class: CriteriaNode",source:"@site/versioned_docs/version-4.5/api/classes/knex.criterianode.md",slug:"/api/classes/knex.criterianode",permalink:"/docs/api/classes/knex.criterianode",editUrl:null,version:"4.5",lastUpdatedBy:"Renovate Bot",lastUpdatedAt:1619481666,formattedLastUpdatedAt:"4/27/2021",sidebar_label:"CriteriaNode",sidebar:"version-4.5/API",previous:{title:"Class: ArrayCriteriaNode",permalink:"/docs/api/classes/knex.arraycriterianode"},next:{title:"Class: CriteriaNodeFactory",permalink:"/docs/api/classes/knex.criterianodefactory"}},p=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"entityName",id:"entityname",children:[]},{value:"key",id:"key",children:[]},{value:"metadata",id:"metadata",children:[]},{value:"parent",id:"parent",children:[]},{value:"payload",id:"payload",children:[]},{value:"prop",id:"prop",children:[]}]},{value:"Methods",id:"methods",children:[{value:"custom",id:"custom",children:[]},{value:"getPath",id:"getpath",children:[]},{value:"getPivotPath",id:"getpivotpath",children:[]},{value:"isPivotJoin",id:"ispivotjoin",children:[]},{value:"process",id:"process",children:[]},{value:"renameFieldToPK",id:"renamefieldtopk",children:[]},{value:"shouldInline",id:"shouldinline",children:[]},{value:"shouldRename",id:"shouldrename",children:[]},{value:"willAutoJoin",id:"willautojoin",children:[]},{value:"isCustomExpression",id:"iscustomexpression",children:[]}]}],l={toc:p};function o(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(n.b)("wrapper",Object(r.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"class-criterianode"},"Class: CriteriaNode"),Object(n.b)("p",null,Object(n.b)("a",{parentName:"p",href:"/docs/api/modules/knex"},"knex"),".CriteriaNode"),Object(n.b)("p",null,"Helper for working with deeply nested where/orderBy/having criteria. Uses composite pattern to build tree from the payload.\nAuto-joins relations and converts payload from { books: { publisher: { name: '...' } } } to { 'publisher_alias.name': '...' }"),Object(n.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"CriteriaNode")),Object(n.b)("p",{parentName:"li"},"\u21b3 ",Object(n.b)("a",{parentName:"p",href:"/docs/api/classes/knex.arraycriterianode"},Object(n.b)("em",{parentName:"a"},"ArrayCriteriaNode"))),Object(n.b)("p",{parentName:"li"},"\u21b3 ",Object(n.b)("a",{parentName:"p",href:"/docs/api/classes/knex.objectcriterianode"},Object(n.b)("em",{parentName:"a"},"ObjectCriteriaNode"))),Object(n.b)("p",{parentName:"li"},"\u21b3 ",Object(n.b)("a",{parentName:"p",href:"/docs/api/classes/knex.scalarcriterianode"},Object(n.b)("em",{parentName:"a"},"ScalarCriteriaNode"))))),Object(n.b)("h2",{id:"constructors"},"Constructors"),Object(n.b)("h3",{id:"constructor"},"constructor"),Object(n.b)("p",null,"+"," ",Object(n.b)("strong",{parentName:"p"},"new CriteriaNode"),"(",Object(n.b)("inlineCode",{parentName:"p"},"metadata"),": ",Object(n.b)("a",{parentName:"p",href:"/docs/api/classes/core.metadatastorage"},Object(n.b)("em",{parentName:"a"},"MetadataStorage")),", ",Object(n.b)("inlineCode",{parentName:"p"},"entityName"),": ",Object(n.b)("em",{parentName:"p"},"string"),", ",Object(n.b)("inlineCode",{parentName:"p"},"parent?"),": ",Object(n.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.icriterianode"},Object(n.b)("em",{parentName:"a"},"ICriteriaNode")),", ",Object(n.b)("inlineCode",{parentName:"p"},"key?"),": ",Object(n.b)("em",{parentName:"p"},"string"),", ",Object(n.b)("inlineCode",{parentName:"p"},"validate?"),": ",Object(n.b)("em",{parentName:"p"},"boolean"),"): ",Object(n.b)("a",{parentName:"p",href:"/docs/api/classes/knex.criterianode"},Object(n.b)("em",{parentName:"a"},"CriteriaNode"))),Object(n.b)("h4",{id:"parameters"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:"left"},"Name"),Object(n.b)("th",{parentName:"tr",align:"left"},"Type"),Object(n.b)("th",{parentName:"tr",align:"left"},"Default value"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"metadata")),Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("a",{parentName:"td",href:"/docs/api/classes/core.metadatastorage"},Object(n.b)("em",{parentName:"a"},"MetadataStorage"))),Object(n.b)("td",{parentName:"tr",align:"left"},"-")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"entityName")),Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("em",{parentName:"td"},"string")),Object(n.b)("td",{parentName:"tr",align:"left"},"-")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"parent?")),Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("a",{parentName:"td",href:"/docs/api/interfaces/knex.icriterianode"},Object(n.b)("em",{parentName:"a"},"ICriteriaNode"))),Object(n.b)("td",{parentName:"tr",align:"left"},"-")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"key?")),Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("em",{parentName:"td"},"string")),Object(n.b)("td",{parentName:"tr",align:"left"},"-")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"validate")),Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("em",{parentName:"td"},"boolean")),Object(n.b)("td",{parentName:"tr",align:"left"},"true")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("a",{parentName:"p",href:"/docs/api/classes/knex.criterianode"},Object(n.b)("em",{parentName:"a"},"CriteriaNode"))),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/knex/src/query/CriteriaNode.ts#L12"},"packages/knex/src/query/CriteriaNode.ts:12")),Object(n.b)("h2",{id:"properties"},"Properties"),Object(n.b)("h3",{id:"entityname"},"entityName"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(n.b)("strong",{parentName:"p"},"entityName"),": ",Object(n.b)("em",{parentName:"p"},"string")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"key"},"key"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(n.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(n.b)("strong",{parentName:"p"},"key"),": ",Object(n.b)("em",{parentName:"p"},"string")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"metadata"},"metadata"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("inlineCode",{parentName:"p"},"Protected")," ",Object(n.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(n.b)("strong",{parentName:"p"},"metadata"),": ",Object(n.b)("a",{parentName:"p",href:"/docs/api/classes/core.metadatastorage"},Object(n.b)("em",{parentName:"a"},"MetadataStorage"))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"parent"},"parent"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(n.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(n.b)("strong",{parentName:"p"},"parent"),": ",Object(n.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.icriterianode"},Object(n.b)("em",{parentName:"a"},"ICriteriaNode"))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"payload"},"payload"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("strong",{parentName:"p"},"payload"),": ",Object(n.b)("em",{parentName:"p"},"any")),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/knex/src/query/CriteriaNode.ts#L11"},"packages/knex/src/query/CriteriaNode.ts:11")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"prop"},"prop"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(n.b)("strong",{parentName:"p"},"prop"),": ",Object(n.b)("a",{parentName:"p",href:"/docs/api/interfaces/core.entityproperty"},Object(n.b)("em",{parentName:"a"},"EntityProperty")),"<any",">"),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/knex/src/query/CriteriaNode.ts#L12"},"packages/knex/src/query/CriteriaNode.ts:12")),Object(n.b)("h2",{id:"methods"},"Methods"),Object(n.b)("h3",{id:"custom"},"[custom]"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"[custom]"),"(): ",Object(n.b)("em",{parentName:"p"},"string")),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"string")),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/knex/src/query/CriteriaNode.ts#L119"},"packages/knex/src/query/CriteriaNode.ts:119")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"getpath"},"getPath"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"getPath"),"(): ",Object(n.b)("em",{parentName:"p"},"string")),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"string")),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/knex/src/query/CriteriaNode.ts#L78"},"packages/knex/src/query/CriteriaNode.ts:78")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"getpivotpath"},"getPivotPath"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"getPivotPath"),"(",Object(n.b)("inlineCode",{parentName:"p"},"path"),": ",Object(n.b)("em",{parentName:"p"},"string"),"): ",Object(n.b)("em",{parentName:"p"},"string")),Object(n.b)("h4",{id:"parameters-1"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:"left"},"Name"),Object(n.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"path")),Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("em",{parentName:"td"},"string"))))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"string")),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/knex/src/query/CriteriaNode.ts#L115"},"packages/knex/src/query/CriteriaNode.ts:115")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"ispivotjoin"},"isPivotJoin"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("inlineCode",{parentName:"p"},"Private"),Object(n.b)("strong",{parentName:"p"},"isPivotJoin"),"(): ",Object(n.b)("em",{parentName:"p"},"boolean")),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"boolean")),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/knex/src/query/CriteriaNode.ts#L103"},"packages/knex/src/query/CriteriaNode.ts:103")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"process"},"process"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"process"),"<T",">","(",Object(n.b)("inlineCode",{parentName:"p"},"qb"),": ",Object(n.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.iquerybuilder"},Object(n.b)("em",{parentName:"a"},"IQueryBuilder")),"<T",">",", ",Object(n.b)("inlineCode",{parentName:"p"},"alias?"),": ",Object(n.b)("em",{parentName:"p"},"string"),"): ",Object(n.b)("em",{parentName:"p"},"any")),Object(n.b)("h4",{id:"type-parameters"},"Type parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:"left"},"Name"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"T"))))),Object(n.b)("h4",{id:"parameters-2"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:"left"},"Name"),Object(n.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"qb")),Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("a",{parentName:"td",href:"/docs/api/interfaces/knex.iquerybuilder"},Object(n.b)("em",{parentName:"a"},"IQueryBuilder")),"<T",">")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"alias?")),Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("em",{parentName:"td"},"string"))))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"any")),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/knex/src/query/CriteriaNode.ts#L32"},"packages/knex/src/query/CriteriaNode.ts:32")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"renamefieldtopk"},"renameFieldToPK"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"renameFieldToPK"),"<T",">","(",Object(n.b)("inlineCode",{parentName:"p"},"qb"),": ",Object(n.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.iquerybuilder"},Object(n.b)("em",{parentName:"a"},"IQueryBuilder")),"<T",">","): ",Object(n.b)("em",{parentName:"p"},"string")),Object(n.b)("h4",{id:"type-parameters-1"},"Type parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:"left"},"Name"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"T"))))),Object(n.b)("h4",{id:"parameters-3"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:"left"},"Name"),Object(n.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"qb")),Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("a",{parentName:"td",href:"/docs/api/interfaces/knex.iquerybuilder"},Object(n.b)("em",{parentName:"a"},"IQueryBuilder")),"<T",">")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"string")),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/knex/src/query/CriteriaNode.ts#L64"},"packages/knex/src/query/CriteriaNode.ts:64")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"shouldinline"},"shouldInline"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"shouldInline"),"(",Object(n.b)("inlineCode",{parentName:"p"},"payload"),": ",Object(n.b)("em",{parentName:"p"},"any"),"): ",Object(n.b)("em",{parentName:"p"},"boolean")),Object(n.b)("h4",{id:"parameters-4"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:"left"},"Name"),Object(n.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"payload")),Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("em",{parentName:"td"},"any"))))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"boolean")),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/knex/src/query/CriteriaNode.ts#L36"},"packages/knex/src/query/CriteriaNode.ts:36")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"shouldrename"},"shouldRename"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"shouldRename"),"(",Object(n.b)("inlineCode",{parentName:"p"},"payload"),": ",Object(n.b)("em",{parentName:"p"},"any"),"): ",Object(n.b)("em",{parentName:"p"},"boolean")),Object(n.b)("h4",{id:"parameters-5"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:"left"},"Name"),Object(n.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"payload")),Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("em",{parentName:"td"},"any"))))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"boolean")),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/knex/src/query/CriteriaNode.ts#L44"},"packages/knex/src/query/CriteriaNode.ts:44")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"willautojoin"},"willAutoJoin"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"willAutoJoin"),"<T",">","(",Object(n.b)("inlineCode",{parentName:"p"},"qb"),": ",Object(n.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.iquerybuilder"},Object(n.b)("em",{parentName:"a"},"IQueryBuilder")),"<T",">",", ",Object(n.b)("inlineCode",{parentName:"p"},"alias?"),": ",Object(n.b)("em",{parentName:"p"},"string"),"): ",Object(n.b)("em",{parentName:"p"},"boolean")),Object(n.b)("h4",{id:"type-parameters-2"},"Type parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:"left"},"Name"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"T"))))),Object(n.b)("h4",{id:"parameters-6"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:"left"},"Name"),Object(n.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"qb")),Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("a",{parentName:"td",href:"/docs/api/interfaces/knex.iquerybuilder"},Object(n.b)("em",{parentName:"a"},"IQueryBuilder")),"<T",">")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"alias?")),Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("em",{parentName:"td"},"string"))))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"boolean")),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/knex/src/query/CriteriaNode.ts#L40"},"packages/knex/src/query/CriteriaNode.ts:40")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"iscustomexpression"},"isCustomExpression"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("inlineCode",{parentName:"p"},"Static"),Object(n.b)("strong",{parentName:"p"},"isCustomExpression"),"(",Object(n.b)("inlineCode",{parentName:"p"},"field"),": ",Object(n.b)("em",{parentName:"p"},"string"),"): ",Object(n.b)("em",{parentName:"p"},"boolean")),Object(n.b)("h4",{id:"parameters-7"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:"left"},"Name"),Object(n.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"field")),Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("em",{parentName:"td"},"string"))))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"boolean")),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/knex/src/query/CriteriaNode.ts#L123"},"packages/knex/src/query/CriteriaNode.ts:123")))}o.isMDXComponent=!0}}]);