(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[37892],{3905:function(t,e,a){"use strict";a.d(e,{Zo:function(){return d},kt:function(){return c}});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function p(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?p(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},p=Object.keys(t);for(r=0;r<p.length;r++)a=p[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(t);for(r=0;r<p.length;r++)a=p[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var m=r.createContext({}),l=function(t){var e=r.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},d=function(t){var e=l(t.components);return r.createElement(m.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,p=t.originalType,m=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),s=l(a),c=n,N=s["".concat(m,".").concat(c)]||s[c]||k[c]||p;return a?r.createElement(N,o(o({ref:e},d),{},{components:a})):r.createElement(N,o({ref:e},d))}));function c(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var p=a.length,o=new Array(p);o[0]=s;var i={};for(var m in e)hasOwnProperty.call(e,m)&&(i[m]=e[m]);i.originalType=t,i.mdxType="string"==typeof t?t:n,o[1]=i;for(var l=2;l<p;l++)o[l]=a[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},13093:function(t,e,a){"use strict";a.r(e),a.d(e,{frontMatter:function(){return o},metadata:function(){return i},toc:function(){return m},default:function(){return d}});var r=a(74034),n=a(79973),p=(a(67294),a(3905)),o={id:"core.hydrator",title:"Class: Hydrator",sidebar_label:"Hydrator",custom_edit_url:null,hide_title:!0},i={unversionedId:"api/classes/core.hydrator",id:"version-4.5/api/classes/core.hydrator",isDocsHomePage:!1,title:"Class: Hydrator",description:"core.Hydrator",source:"@site/versioned_docs/version-4.5/api/classes/core.hydrator.md",sourceDirName:"api/classes",slug:"/api/classes/core.hydrator",permalink:"/docs/api/classes/core.hydrator",editUrl:null,version:"4.5",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1620664450,formattedLastUpdatedAt:"5/10/2021",sidebar_label:"Hydrator",frontMatter:{id:"core.hydrator",title:"Class: Hydrator",sidebar_label:"Hydrator",custom_edit_url:null,hide_title:!0},sidebar:"version-4.5/API",previous:{title:"Class: ForeignKeyConstraintViolationException",permalink:"/docs/api/classes/core.foreignkeyconstraintviolationexception"},next:{title:"Class: IdentityMap",permalink:"/docs/api/classes/core.identitymap"}},m=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Implements",id:"implements",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"config",id:"config",children:[]},{value:"metadata",id:"metadata",children:[]},{value:"platform",id:"platform",children:[]}]},{value:"Methods",id:"methods",children:[{value:"getProperties",id:"getproperties",children:[]},{value:"hydrate",id:"hydrate",children:[]},{value:"hydrateProperty",id:"hydrateproperty",children:[]},{value:"hydrateReference",id:"hydratereference",children:[]}]}],l={toc:m};function d(t){var e=t.components,a=(0,n.Z)(t,["components"]);return(0,p.kt)("wrapper",(0,r.Z)({},l,a,{components:e,mdxType:"MDXLayout"}),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/docs/api/modules/core"},"core"),".Hydrator"),(0,p.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},"Hydrator")),(0,p.kt)("p",{parentName:"li"},"\u21b3 ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.objecthydrator"},(0,p.kt)("em",{parentName:"a"},"ObjectHydrator"))))),(0,p.kt)("h2",{id:"implements"},"Implements"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("em",{parentName:"li"},"IHydrator"))),(0,p.kt)("h2",{id:"constructors"},"Constructors"),(0,p.kt)("h3",{id:"constructor"},"constructor"),(0,p.kt)("p",null,"+"," ",(0,p.kt)("strong",{parentName:"p"},"new Hydrator"),"(",(0,p.kt)("inlineCode",{parentName:"p"},"metadata"),": ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.metadatastorage"},(0,p.kt)("em",{parentName:"a"},"MetadataStorage")),", ",(0,p.kt)("inlineCode",{parentName:"p"},"platform"),": ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.platform"},(0,p.kt)("em",{parentName:"a"},"Platform")),", ",(0,p.kt)("inlineCode",{parentName:"p"},"config"),": ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.configuration"},(0,p.kt)("em",{parentName:"a"},"Configuration")),"<",(0,p.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.idatabasedriver"},(0,p.kt)("em",{parentName:"a"},"IDatabaseDriver")),"<",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.connection"},(0,p.kt)("em",{parentName:"a"},"Connection")),">",">","): ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.hydrator"},(0,p.kt)("em",{parentName:"a"},"Hydrator"))),(0,p.kt)("h4",{id:"parameters"},"Parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"metadata")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("a",{parentName:"td",href:"/docs/api/classes/core.metadatastorage"},(0,p.kt)("em",{parentName:"a"},"MetadataStorage")))),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"platform")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("a",{parentName:"td",href:"/docs/api/classes/core.platform"},(0,p.kt)("em",{parentName:"a"},"Platform")))),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"config")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("a",{parentName:"td",href:"/docs/api/classes/core.configuration"},(0,p.kt)("em",{parentName:"a"},"Configuration")),"<",(0,p.kt)("a",{parentName:"td",href:"/docs/api/interfaces/core.idatabasedriver"},(0,p.kt)("em",{parentName:"a"},"IDatabaseDriver")),"<",(0,p.kt)("a",{parentName:"td",href:"/docs/api/classes/core.connection"},(0,p.kt)("em",{parentName:"a"},"Connection")),">",">")))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.hydrator"},(0,p.kt)("em",{parentName:"a"},"Hydrator"))),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/hydration/Hydrator.ts#L8"},"packages/core/src/hydration/Hydrator.ts:8")),(0,p.kt)("h2",{id:"properties"},"Properties"),(0,p.kt)("h3",{id:"config"},"config"),(0,p.kt)("p",null,"\u2022 ",(0,p.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,p.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,p.kt)("strong",{parentName:"p"},"config"),": ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.configuration"},(0,p.kt)("em",{parentName:"a"},"Configuration")),"<",(0,p.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.idatabasedriver"},(0,p.kt)("em",{parentName:"a"},"IDatabaseDriver")),"<",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.connection"},(0,p.kt)("em",{parentName:"a"},"Connection")),">",">"),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"metadata"},"metadata"),(0,p.kt)("p",null,"\u2022 ",(0,p.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,p.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,p.kt)("strong",{parentName:"p"},"metadata"),": ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.metadatastorage"},(0,p.kt)("em",{parentName:"a"},"MetadataStorage"))),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"platform"},"platform"),(0,p.kt)("p",null,"\u2022 ",(0,p.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,p.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,p.kt)("strong",{parentName:"p"},"platform"),": ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.platform"},(0,p.kt)("em",{parentName:"a"},"Platform"))),(0,p.kt)("h2",{id:"methods"},"Methods"),(0,p.kt)("h3",{id:"getproperties"},"getProperties"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("inlineCode",{parentName:"p"},"Protected"),(0,p.kt)("strong",{parentName:"p"},"getProperties"),"<T",">","(",(0,p.kt)("inlineCode",{parentName:"p"},"meta"),": ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.entitymetadata"},(0,p.kt)("em",{parentName:"a"},"EntityMetadata")),"<T",">",", ",(0,p.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,p.kt)("em",{parentName:"p"},"reference")," ","|"," ",(0,p.kt)("em",{parentName:"p"},"full")," ","|"," ",(0,p.kt)("em",{parentName:"p"},"returning"),"): ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.entityproperty"},(0,p.kt)("em",{parentName:"a"},"EntityProperty")),"<T",">","[]"),(0,p.kt)("h4",{id:"type-parameters"},"Type parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"T")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("a",{parentName:"td",href:"/docs/api/modules/core#anyentity"},(0,p.kt)("em",{parentName:"a"},"AnyEntity")),"<T",">")))),(0,p.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"meta")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("a",{parentName:"td",href:"/docs/api/classes/core.entitymetadata"},(0,p.kt)("em",{parentName:"a"},"EntityMetadata")),"<T",">")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"type")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("em",{parentName:"td"},"reference")," ","|"," ",(0,p.kt)("em",{parentName:"td"},"full")," ","|"," ",(0,p.kt)("em",{parentName:"td"},"returning"))))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.entityproperty"},(0,p.kt)("em",{parentName:"a"},"EntityProperty")),"<T",">","[]"),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/hydration/Hydrator.ts#L34"},"packages/core/src/hydration/Hydrator.ts:34")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"hydrate"},"hydrate"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"hydrate"),"<T",">","(",(0,p.kt)("inlineCode",{parentName:"p"},"entity"),": T, ",(0,p.kt)("inlineCode",{parentName:"p"},"meta"),": ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.entitymetadata"},(0,p.kt)("em",{parentName:"a"},"EntityMetadata")),"<T",">",", ",(0,p.kt)("inlineCode",{parentName:"p"},"data"),": ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/modules/core#entitydata"},(0,p.kt)("em",{parentName:"a"},"EntityData")),"<T",">",", ",(0,p.kt)("inlineCode",{parentName:"p"},"factory"),": ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.entityfactory"},(0,p.kt)("em",{parentName:"a"},"EntityFactory")),", ",(0,p.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,p.kt)("em",{parentName:"p"},"reference")," ","|"," ",(0,p.kt)("em",{parentName:"p"},"full")," ","|"," ",(0,p.kt)("em",{parentName:"p"},"returning"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"newEntity?"),": ",(0,p.kt)("em",{parentName:"p"},"boolean"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"convertCustomTypes?"),": ",(0,p.kt)("em",{parentName:"p"},"boolean"),"): ",(0,p.kt)("em",{parentName:"p"},"void")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"strong"},"inheritdoc"))," "),(0,p.kt)("h4",{id:"type-parameters-1"},"Type parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"T")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("a",{parentName:"td",href:"/docs/api/modules/core#anyentity"},(0,p.kt)("em",{parentName:"a"},"AnyEntity")),"<T",">")))),(0,p.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Default value"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"entity")),(0,p.kt)("td",{parentName:"tr",align:"left"},"T"),(0,p.kt)("td",{parentName:"tr",align:"left"},"-")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"meta")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("a",{parentName:"td",href:"/docs/api/classes/core.entitymetadata"},(0,p.kt)("em",{parentName:"a"},"EntityMetadata")),"<T",">"),(0,p.kt)("td",{parentName:"tr",align:"left"},"-")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"data")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("a",{parentName:"td",href:"/docs/api/modules/core#entitydata"},(0,p.kt)("em",{parentName:"a"},"EntityData")),"<T",">"),(0,p.kt)("td",{parentName:"tr",align:"left"},"-")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"factory")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("a",{parentName:"td",href:"/docs/api/classes/core.entityfactory"},(0,p.kt)("em",{parentName:"a"},"EntityFactory"))),(0,p.kt)("td",{parentName:"tr",align:"left"},"-")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"type")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("em",{parentName:"td"},"reference")," ","|"," ",(0,p.kt)("em",{parentName:"td"},"full")," ","|"," ",(0,p.kt)("em",{parentName:"td"},"returning")),(0,p.kt)("td",{parentName:"tr",align:"left"},"-")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"newEntity")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("em",{parentName:"td"},"boolean")),(0,p.kt)("td",{parentName:"tr",align:"left"},"false")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"convertCustomTypes")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("em",{parentName:"td"},"boolean")),(0,p.kt)("td",{parentName:"tr",align:"left"},"false")))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"void")),(0,p.kt)("p",null,"Implementation of: void"),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/hydration/Hydrator.ts#L17"},"packages/core/src/hydration/Hydrator.ts:17")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"hydrateproperty"},"hydrateProperty"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("inlineCode",{parentName:"p"},"Protected"),(0,p.kt)("strong",{parentName:"p"},"hydrateProperty"),"<T",">","(",(0,p.kt)("inlineCode",{parentName:"p"},"entity"),": T, ",(0,p.kt)("inlineCode",{parentName:"p"},"prop"),": ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.entityproperty"},(0,p.kt)("em",{parentName:"a"},"EntityProperty")),"<any",">",", ",(0,p.kt)("inlineCode",{parentName:"p"},"data"),": ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/modules/core#entitydata"},(0,p.kt)("em",{parentName:"a"},"EntityData")),"<T",">",", ",(0,p.kt)("inlineCode",{parentName:"p"},"factory"),": ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.entityfactory"},(0,p.kt)("em",{parentName:"a"},"EntityFactory")),", ",(0,p.kt)("inlineCode",{parentName:"p"},"newEntity?"),": ",(0,p.kt)("em",{parentName:"p"},"boolean"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"convertCustomTypes?"),": ",(0,p.kt)("em",{parentName:"p"},"boolean"),"): ",(0,p.kt)("em",{parentName:"p"},"void")),(0,p.kt)("h4",{id:"type-parameters-2"},"Type parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"T")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("a",{parentName:"td",href:"/docs/api/modules/core#anyentity"},(0,p.kt)("em",{parentName:"a"},"AnyEntity")),"<T",">")))),(0,p.kt)("h4",{id:"parameters-3"},"Parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"entity")),(0,p.kt)("td",{parentName:"tr",align:"left"},"T")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"prop")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("a",{parentName:"td",href:"/docs/api/interfaces/core.entityproperty"},(0,p.kt)("em",{parentName:"a"},"EntityProperty")),"<any",">")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"data")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("a",{parentName:"td",href:"/docs/api/modules/core#entitydata"},(0,p.kt)("em",{parentName:"a"},"EntityData")),"<T",">")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"factory")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("a",{parentName:"td",href:"/docs/api/classes/core.entityfactory"},(0,p.kt)("em",{parentName:"a"},"EntityFactory")))),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"newEntity?")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("em",{parentName:"td"},"boolean"))),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"convertCustomTypes?")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("em",{parentName:"td"},"boolean"))))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"void")),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/hydration/Hydrator.ts#L47"},"packages/core/src/hydration/Hydrator.ts:47")),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"hydratereference"},"hydrateReference"),(0,p.kt)("p",null,"\u25b8 ",(0,p.kt)("strong",{parentName:"p"},"hydrateReference"),"<T",">","(",(0,p.kt)("inlineCode",{parentName:"p"},"entity"),": T, ",(0,p.kt)("inlineCode",{parentName:"p"},"meta"),": ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.entitymetadata"},(0,p.kt)("em",{parentName:"a"},"EntityMetadata")),"<T",">",", ",(0,p.kt)("inlineCode",{parentName:"p"},"data"),": ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/modules/core#entitydata"},(0,p.kt)("em",{parentName:"a"},"EntityData")),"<T",">",", ",(0,p.kt)("inlineCode",{parentName:"p"},"factory"),": ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/classes/core.entityfactory"},(0,p.kt)("em",{parentName:"a"},"EntityFactory")),", ",(0,p.kt)("inlineCode",{parentName:"p"},"convertCustomTypes?"),": ",(0,p.kt)("em",{parentName:"p"},"boolean"),"): ",(0,p.kt)("em",{parentName:"p"},"void")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"strong"},"inheritdoc"))," "),(0,p.kt)("h4",{id:"type-parameters-3"},"Type parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"T")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("a",{parentName:"td",href:"/docs/api/modules/core#anyentity"},(0,p.kt)("em",{parentName:"a"},"AnyEntity")),"<T",">")))),(0,p.kt)("h4",{id:"parameters-4"},"Parameters:"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,p.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"entity")),(0,p.kt)("td",{parentName:"tr",align:"left"},"T")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"meta")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("a",{parentName:"td",href:"/docs/api/classes/core.entitymetadata"},(0,p.kt)("em",{parentName:"a"},"EntityMetadata")),"<T",">")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"data")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("a",{parentName:"td",href:"/docs/api/modules/core#entitydata"},(0,p.kt)("em",{parentName:"a"},"EntityData")),"<T",">")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"factory")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("a",{parentName:"td",href:"/docs/api/classes/core.entityfactory"},(0,p.kt)("em",{parentName:"a"},"EntityFactory")))),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("inlineCode",{parentName:"td"},"convertCustomTypes?")),(0,p.kt)("td",{parentName:"tr",align:"left"},(0,p.kt)("em",{parentName:"td"},"boolean"))))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")," ",(0,p.kt)("em",{parentName:"p"},"void")),(0,p.kt)("p",null,"Implementation of: void"),(0,p.kt)("p",null,"Defined in: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/hydration/Hydrator.ts#L28"},"packages/core/src/hydration/Hydrator.ts:28")))}d.isMDXComponent=!0}}]);