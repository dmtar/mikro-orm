(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[16648],{3905:function(t,e,a){"use strict";a.d(e,{Zo:function(){return l},kt:function(){return c}});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function p(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function m(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?p(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},p=Object.keys(t);for(r=0;r<p.length;r++)a=p[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(t);for(r=0;r<p.length;r++)a=p[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var o=r.createContext({}),d=function(t){var e=r.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):m(m({},e),t)),a},l=function(t){var e=d(t.components);return r.createElement(o.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,p=t.originalType,o=t.parentName,l=i(t,["components","mdxType","originalType","parentName"]),s=d(a),c=n,N=s["".concat(o,".").concat(c)]||s[c]||k[c]||p;return a?r.createElement(N,m(m({ref:e},l),{},{components:a})):r.createElement(N,m({ref:e},l))}));function c(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var p=a.length,m=new Array(p);m[0]=s;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i.mdxType="string"==typeof t?t:n,m[1]=i;for(var d=2;d<p;d++)m[d]=a[d];return r.createElement.apply(null,m)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},8063:function(t,e,a){"use strict";a.r(e),a.d(e,{frontMatter:function(){return m},metadata:function(){return i},toc:function(){return o},default:function(){return l}});var r=a(74034),n=a(79973),p=(a(67294),a(3905)),m={id:"core.metadatastorage",title:"Class: MetadataStorage",sidebar_label:"MetadataStorage",custom_edit_url:null,hide_title:!0},i={unversionedId:"api/classes/core.metadatastorage",id:"version-4.5/api/classes/core.metadatastorage",isDocsHomePage:!1,title:"Class: MetadataStorage",description:"core.MetadataStorage",source:"@site/versioned_docs/version-4.5/api/classes/core.metadatastorage.md",sourceDirName:"api/classes",slug:"/api/classes/core.metadatastorage",permalink:"/docs/api/classes/core.metadatastorage",editUrl:null,version:"4.5",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1620664450,formattedLastUpdatedAt:"5/10/2021",sidebar_label:"MetadataStorage",frontMatter:{id:"core.metadatastorage",title:"Class: MetadataStorage",sidebar_label:"MetadataStorage",custom_edit_url:null,hide_title:!0},sidebar:"version-4.5/API",previous:{title:"Class: MetadataProvider",permalink:"/docs/api/classes/core.metadataprovider"},next:{title:"Class: MetadataValidator",permalink:"/docs/api/classes/core.metadatavalidator"}},o=[{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"metadata",id:"metadata",children:[]},{value:"metadata",id:"metadata-1",children:[]},{value:"subscribers",id:"subscribers",children:[]}]},{value:"Methods",id:"methods",children:[{value:"decorate",id:"decorate",children:[]},{value:"find",id:"find",children:[]},{value:"get",id:"get",children:[]},{value:"getAll",id:"getall",children:[]},{value:"getByDiscriminatorColumn",id:"getbydiscriminatorcolumn",children:[]},{value:"has",id:"has",children:[]},{value:"reset",id:"reset",children:[]},{value:"set",id:"set",children:[]},{value:"clear",id:"clear",children:[]},{value:"getMetadata",id:"getmetadata",children:[]},{value:"getMetadataFromDecorator",id:"getmetadatafromdecorator",children:[]},{value:"getSubscriberMetadata",id:"getsubscribermetadata",children:[]},{value:"init",id:"init",children:[]},{value:"isKnownEntity",id:"isknownentity",children:[]}]}],d={toc:o};function l(t){var e=t.components,a=(0,n.Z)(t,["components"]);return(0,p.kt)("wrapper",(0,r.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/docs/api/modules/core"},"core"),".MetadataStorage"),(0,p.kt)("h2",{id:"constructors"},"Constructors"),(0,p.kt)("h3",{id:"constructor"},"constructor"),(0,p.kt)("p",null,"+"," ",(0,p.kt)("strong",{parentName:"p"},"new MetadataStorage"),"(",(0,p.kt)("inlineCode",{parentName:"p"},"metadata?"),": ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/modules/core#dictionary"},(0,p.kt)("em",{parentName:"a"},"Dictionary")),"<",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.entitymetadata"},(0,p.kt)("em",{parentName:"a"},"EntityMetadata")),"<any",">",">","): ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.metadatastorage"},(0,p.kt)("em",{parentName:"a"},"MetadataStorage"))),(0,p.kt)("h4",{id:"parameters"},"Parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"metadata")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("a",{parentName:"td",href:"/docs/api/modules/core#dictionary"},(0,p.kt)("em",{parentName:"a"},"Dictionary")),"<",(0,p.kt)("a",{parentName:"td",href:"/docs/api/classes/core.entitymetadata"},(0,p.kt)("em",{parentName:"a"},"EntityMetadata")),"<any",">",">")))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.metadatastorage"},(0,p.kt)("em",{parentName:"a"},"MetadataStorage"))),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/metadata/MetadataStorage.ts#L12"},"packages/core/src/metadata/MetadataStorage.ts:12")),(0,p.kt)("h2",{id:"properties"},"Properties"),(0,p.kt)("h3",{id:"metadata"},"metadata"),(0,p.kt)("p",null,"\u2022 ",(0,p.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,p.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,p.kt)("strong",{parentName:"p"},"metadata"),": ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/modules/core#dictionary"},(0,p.kt)("em",{parentName:"a"},"Dictionary")),"<",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.entitymetadata"},(0,p.kt)("em",{parentName:"a"},"EntityMetadata")),"<any",">",">"),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/metadata/MetadataStorage.ts#L12"},"packages/core/src/metadata/MetadataStorage.ts:12")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"metadata-1"},"metadata"),(0,p.kt)("p",null,"\u25aa ",(0,p.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,p.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,p.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,p.kt)("strong",{parentName:"p"},"metadata"),": ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/modules/core#dictionary"},(0,p.kt)("em",{parentName:"a"},"Dictionary")),"<",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.entitymetadata"},(0,p.kt)("em",{parentName:"a"},"EntityMetadata")),"<any",">",">"),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/metadata/MetadataStorage.ts#L10"},"packages/core/src/metadata/MetadataStorage.ts:10")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"subscribers"},"subscribers"),(0,p.kt)("p",null,"\u25aa ",(0,p.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,p.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,p.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,p.kt)("strong",{parentName:"p"},"subscribers"),": ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/modules/core#dictionary"},(0,p.kt)("em",{parentName:"a"},"Dictionary")),"<",(0,p.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.eventsubscriber"},(0,p.kt)("em",{parentName:"a"},"EventSubscriber")),"<any",">",">"),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/metadata/MetadataStorage.ts#L11"},"packages/core/src/metadata/MetadataStorage.ts:11")),(0,p.kt)("h2",{id:"methods"},"Methods"),(0,p.kt)("h3",{id:"decorate"},"decorate"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"decorate"),"(",(0,p.kt)("inlineCode",{parentName:"p"},"em"),": ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.entitymanager"},(0,p.kt)("em",{parentName:"a"},"EntityManager")),"<",(0,p.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.idatabasedriver"},(0,p.kt)("em",{parentName:"a"},"IDatabaseDriver")),"<",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.connection"},(0,p.kt)("em",{parentName:"a"},"Connection")),">",">","): ",(0,p.kt)("em",{parentName:"p"},"void")),(0,p.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"em")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("a",{parentName:"td",href:"/docs/api/classes/core.entitymanager"},(0,p.kt)("em",{parentName:"a"},"EntityManager")),"<",(0,p.kt)("a",{parentName:"td",href:"/docs/api/interfaces/core.idatabasedriver"},(0,p.kt)("em",{parentName:"a"},"IDatabaseDriver")),"<",(0,p.kt)("a",{parentName:"td",href:"/docs/api/classes/core.connection"},(0,p.kt)("em",{parentName:"a"},"Connection")),">",">")))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"void")),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/metadata/MetadataStorage.ts#L103"},"packages/core/src/metadata/MetadataStorage.ts:103")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"find"},"find"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"find"),"<T",">","(",(0,p.kt)("inlineCode",{parentName:"p"},"entity"),": ",(0,p.kt)("em",{parentName:"p"},"string"),"): ",(0,p.kt)("em",{parentName:"p"},"undefined")," ","|"," ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.entitymetadata"},(0,p.kt)("em",{parentName:"a"},"EntityMetadata")),"<T",">"),(0,p.kt)("h4",{id:"type-parameters"},"Type parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"T")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("a",{parentName:"td",href:"/docs/api/modules/core#anyentity"},(0,p.kt)("em",{parentName:"a"},"AnyEntity")),"<T",">"),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("em",{parentName:"td"},"any"))))),(0,p.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"entity")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("em",{parentName:"td"},"string"))))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"undefined")," ","|"," ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.entitymetadata"},(0,p.kt)("em",{parentName:"a"},"EntityMetadata")),"<T",">"),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/metadata/MetadataStorage.ts#L87"},"packages/core/src/metadata/MetadataStorage.ts:87")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"get"},"get"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"get"),"<T",">","(",(0,p.kt)("inlineCode",{parentName:"p"},"entity"),": ",(0,p.kt)("em",{parentName:"p"},"string"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"init?"),": ",(0,p.kt)("em",{parentName:"p"},"boolean"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"validate?"),": ",(0,p.kt)("em",{parentName:"p"},"boolean"),"): ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.entitymetadata"},(0,p.kt)("em",{parentName:"a"},"EntityMetadata")),"<T",">"),(0,p.kt)("h4",{id:"type-parameters-1"},"Type parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"T")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("a",{parentName:"td",href:"/docs/api/modules/core#anyentity"},(0,p.kt)("em",{parentName:"a"},"AnyEntity")),"<T",">"),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("em",{parentName:"td"},"any"))))),(0,p.kt)("h4",{id:"parameters-3"},"Parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Default value"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"entity")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("em",{parentName:"td"},"string")),(0,p.kt)("td",{parentName:"tr",align:"left"},"-")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"init")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("em",{parentName:"td"},"boolean")),(0,p.kt)("td",{parentName:"tr",align:"left"},"false")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"validate")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("em",{parentName:"td"},"boolean")),(0,p.kt)("td",{parentName:"tr",align:"left"},"true")))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.entitymetadata"},(0,p.kt)("em",{parentName:"a"},"EntityMetadata")),"<T",">"),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/metadata/MetadataStorage.ts#L75"},"packages/core/src/metadata/MetadataStorage.ts:75")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"getall"},"getAll"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"getAll"),"(): ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/modules/core#dictionary"},(0,p.kt)("em",{parentName:"a"},"Dictionary")),"<",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.entitymetadata"},(0,p.kt)("em",{parentName:"a"},"EntityMetadata")),"<any",">",">"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/modules/core#dictionary"},(0,p.kt)("em",{parentName:"a"},"Dictionary")),"<",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.entitymetadata"},(0,p.kt)("em",{parentName:"a"},"EntityMetadata")),"<any",">",">"),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/metadata/MetadataStorage.ts#L59"},"packages/core/src/metadata/MetadataStorage.ts:59")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"getbydiscriminatorcolumn"},"getByDiscriminatorColumn"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"getByDiscriminatorColumn"),"<T",">","(",(0,p.kt)("inlineCode",{parentName:"p"},"meta"),": ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.entitymetadata"},(0,p.kt)("em",{parentName:"a"},"EntityMetadata")),"<T",">",", ",(0,p.kt)("inlineCode",{parentName:"p"},"data"),": ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/modules/core#entitydata"},(0,p.kt)("em",{parentName:"a"},"EntityData")),"<T",">","): ",(0,p.kt)("em",{parentName:"p"},"undefined")," ","|"," ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.entitymetadata"},(0,p.kt)("em",{parentName:"a"},"EntityMetadata")),"<T",">"),(0,p.kt)("h4",{id:"type-parameters-2"},"Type parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"T"))))),(0,p.kt)("h4",{id:"parameters-4"},"Parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"meta")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("a",{parentName:"td",href:"/docs/api/classes/core.entitymetadata"},(0,p.kt)("em",{parentName:"a"},"EntityMetadata")),"<T",">")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"data")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("a",{parentName:"td",href:"/docs/api/modules/core#entitydata"},(0,p.kt)("em",{parentName:"a"},"EntityData")),"<T",">")))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"undefined")," ","|"," ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.entitymetadata"},(0,p.kt)("em",{parentName:"a"},"EntityMetadata")),"<T",">"),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/metadata/MetadataStorage.ts#L63"},"packages/core/src/metadata/MetadataStorage.ts:63")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"has"},"has"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"has"),"(",(0,p.kt)("inlineCode",{parentName:"p"},"entity"),": ",(0,p.kt)("em",{parentName:"p"},"string"),"): ",(0,p.kt)("em",{parentName:"p"},"boolean")),(0,p.kt)("h4",{id:"parameters-5"},"Parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"entity")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("em",{parentName:"td"},"string"))))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"boolean")),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/metadata/MetadataStorage.ts#L91"},"packages/core/src/metadata/MetadataStorage.ts:91")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"reset"},"reset"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"reset"),"(",(0,p.kt)("inlineCode",{parentName:"p"},"entity"),": ",(0,p.kt)("em",{parentName:"p"},"string"),"): ",(0,p.kt)("em",{parentName:"p"},"void")),(0,p.kt)("h4",{id:"parameters-6"},"Parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"entity")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("em",{parentName:"td"},"string"))))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"void")),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/metadata/MetadataStorage.ts#L99"},"packages/core/src/metadata/MetadataStorage.ts:99")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"set"},"set"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"set"),"(",(0,p.kt)("inlineCode",{parentName:"p"},"entity"),": ",(0,p.kt)("em",{parentName:"p"},"string"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"meta"),": ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.entitymetadata"},(0,p.kt)("em",{parentName:"a"},"EntityMetadata")),"<any",">","): ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.entitymetadata"},(0,p.kt)("em",{parentName:"a"},"EntityMetadata")),"<any",">"),(0,p.kt)("h4",{id:"parameters-7"},"Parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"entity")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("em",{parentName:"td"},"string"))),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"meta")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("a",{parentName:"td",href:"/docs/api/classes/core.entitymetadata"},(0,p.kt)("em",{parentName:"a"},"EntityMetadata")),"<any",">")))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.entitymetadata"},(0,p.kt)("em",{parentName:"a"},"EntityMetadata")),"<any",">"),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/metadata/MetadataStorage.ts#L95"},"packages/core/src/metadata/MetadataStorage.ts:95")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"clear"},"clear"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("inlineCode",{parentName:"p"},"Static"),(0,p.kt)("strong",{parentName:"p"},"clear"),"(): ",(0,p.kt)("em",{parentName:"p"},"void")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"void")),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/metadata/MetadataStorage.ts#L54"},"packages/core/src/metadata/MetadataStorage.ts:54")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"getmetadata"},"getMetadata"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("inlineCode",{parentName:"p"},"Static"),(0,p.kt)("strong",{parentName:"p"},"getMetadata"),"(): ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/modules/core#dictionary"},(0,p.kt)("em",{parentName:"a"},"Dictionary")),"<",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.entitymetadata"},(0,p.kt)("em",{parentName:"a"},"EntityMetadata")),"<any",">",">"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/modules/core#dictionary"},(0,p.kt)("em",{parentName:"a"},"Dictionary")),"<",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.entitymetadata"},(0,p.kt)("em",{parentName:"a"},"EntityMetadata")),"<any",">",">"),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/metadata/MetadataStorage.ts#L18"},"packages/core/src/metadata/MetadataStorage.ts:18")),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("inlineCode",{parentName:"p"},"Static"),(0,p.kt)("strong",{parentName:"p"},"getMetadata"),"<T",">","(",(0,p.kt)("inlineCode",{parentName:"p"},"entity"),": ",(0,p.kt)("em",{parentName:"p"},"string"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"path"),": ",(0,p.kt)("em",{parentName:"p"},"string"),"): ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.entitymetadata"},(0,p.kt)("em",{parentName:"a"},"EntityMetadata")),"<T",">"),(0,p.kt)("h4",{id:"type-parameters-3"},"Type parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"T")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("a",{parentName:"td",href:"/docs/api/modules/core#anyentity"},(0,p.kt)("em",{parentName:"a"},"AnyEntity")),"<T",">"),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("em",{parentName:"td"},"any"))))),(0,p.kt)("h4",{id:"parameters-8"},"Parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"entity")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("em",{parentName:"td"},"string"))),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"path")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("em",{parentName:"td"},"string"))))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.entitymetadata"},(0,p.kt)("em",{parentName:"a"},"EntityMetadata")),"<T",">"),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/metadata/MetadataStorage.ts#L19"},"packages/core/src/metadata/MetadataStorage.ts:19")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"getmetadatafromdecorator"},"getMetadataFromDecorator"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("inlineCode",{parentName:"p"},"Static"),(0,p.kt)("strong",{parentName:"p"},"getMetadataFromDecorator"),"<T",">","(",(0,p.kt)("inlineCode",{parentName:"p"},"target"),": T & ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/modules/core#dictionary"},(0,p.kt)("em",{parentName:"a"},"Dictionary")),"<any",">","): ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.entitymetadata"},(0,p.kt)("em",{parentName:"a"},"EntityMetadata")),"<T",">"),(0,p.kt)("h4",{id:"type-parameters-4"},"Type parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"T")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("em",{parentName:"td"},"any"))))),(0,p.kt)("h4",{id:"parameters-9"},"Parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"target")),(0,p.kt)("td",{parentName:"tr",align:"left"},"T & ",(0,p.kt)("a",{parentName:"td",href:"/docs/api/modules/core#dictionary"},(0,p.kt)("em",{parentName:"a"},"Dictionary")),"<any",">")))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.entitymetadata"},(0,p.kt)("em",{parentName:"a"},"EntityMetadata")),"<T",">"),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/metadata/MetadataStorage.ts#L38"},"packages/core/src/metadata/MetadataStorage.ts:38")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"getsubscribermetadata"},"getSubscriberMetadata"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("inlineCode",{parentName:"p"},"Static"),(0,p.kt)("strong",{parentName:"p"},"getSubscriberMetadata"),"(): ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/modules/core#dictionary"},(0,p.kt)("em",{parentName:"a"},"Dictionary")),"<",(0,p.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.eventsubscriber"},(0,p.kt)("em",{parentName:"a"},"EventSubscriber")),"<any",">",">"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/modules/core#dictionary"},(0,p.kt)("em",{parentName:"a"},"Dictionary")),"<",(0,p.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.eventsubscriber"},(0,p.kt)("em",{parentName:"a"},"EventSubscriber")),"<any",">",">"),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/metadata/MetadataStorage.ts#L46"},"packages/core/src/metadata/MetadataStorage.ts:46")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"init"},"init"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("inlineCode",{parentName:"p"},"Static"),(0,p.kt)("strong",{parentName:"p"},"init"),"(): ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.metadatastorage"},(0,p.kt)("em",{parentName:"a"},"MetadataStorage"))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.metadatastorage"},(0,p.kt)("em",{parentName:"a"},"MetadataStorage"))),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/metadata/MetadataStorage.ts#L50"},"packages/core/src/metadata/MetadataStorage.ts:50")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"isknownentity"},"isKnownEntity"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("inlineCode",{parentName:"p"},"Static"),(0,p.kt)("strong",{parentName:"p"},"isKnownEntity"),"(",(0,p.kt)("inlineCode",{parentName:"p"},"name"),": ",(0,p.kt)("em",{parentName:"p"},"string"),"): ",(0,p.kt)("em",{parentName:"p"},"boolean")),(0,p.kt)("h4",{id:"parameters-10"},"Parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"name")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("em",{parentName:"td"},"string"))))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"boolean")),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/metadata/MetadataStorage.ts#L34"},"packages/core/src/metadata/MetadataStorage.ts:34")))}l.isMDXComponent=!0}}]);