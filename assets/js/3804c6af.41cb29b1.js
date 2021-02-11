(window.webpackJsonp=window.webpackJsonp||[]).push([[206],{1048:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=i.a.createContext({}),p=function(e){var n=i.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},b=function(e){var n=p(e.components);return i.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},u=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(t),u=r,m=b["".concat(o,".").concat(u)]||b[u]||d[u]||a;return t?i.a.createElement(m,c(c({ref:n},s),{},{components:t})):i.a.createElement(m,c({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=u;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<a;s++)o[s]=t[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},277:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return p}));var r=t(3),i=t(8),a=(t(0),t(1048)),o={id:"knex.knex.sql",title:"Interface: Sql",sidebar_label:"Sql",hide_title:!0},c={unversionedId:"api/interfaces/knex.knex.sql",id:"version-4.4/api/interfaces/knex.knex.sql",isDocsHomePage:!1,title:"Interface: Sql",description:"Interface: Sql",source:"@site/versioned_docs/version-4.4/api/interfaces/knex.knex.sql.md",slug:"/api/interfaces/knex.knex.sql",permalink:"/docs/api/interfaces/knex.knex.sql",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.4/api/interfaces/knex.knex.sql.md",version:"4.4",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1613074849,sidebar_label:"Sql",sidebar:"version-4.4/API",previous:{title:"Interface: SocketConnectionConfig",permalink:"/docs/api/interfaces/knex.knex.socketconnectionconfig"},next:{title:"Interface: SqlNative",permalink:"/docs/api/interfaces/knex.knex.sqlnative"}},l=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"bindings",id:"bindings",children:[]},{value:"method",id:"method",children:[]},{value:"options",id:"options",children:[]},{value:"sql",id:"sql",children:[]}]},{value:"Methods",id:"methods",children:[{value:"toNative",id:"tonative",children:[]}]}],s={toc:l};function p(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"interface-sql"},"Interface: Sql"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"/docs/api/modules/knex"},"knex"),".",Object(a.b)("a",{parentName:"p",href:"/docs/api/modules/knex.knex-1"},"Knex"),".Sql"),Object(a.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Sql"))),Object(a.b)("h2",{id:"properties"},"Properties"),Object(a.b)("h3",{id:"bindings"},"bindings"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("strong",{parentName:"p"},"bindings"),": readonly ",Object(a.b)("a",{parentName:"p",href:"/docs/api/modules/knex.knex-1#value"},Object(a.b)("em",{parentName:"a"},"Value")),"[]"),Object(a.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1619"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"method"},"method"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("strong",{parentName:"p"},"method"),": ",Object(a.b)("em",{parentName:"p"},"string")),Object(a.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1617"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"options"},"options"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("strong",{parentName:"p"},"options"),": ",Object(a.b)("em",{parentName:"p"},"any")),Object(a.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1618"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"sql"},"sql"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("strong",{parentName:"p"},"sql"),": ",Object(a.b)("em",{parentName:"p"},"string")),Object(a.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1620"),Object(a.b)("h2",{id:"methods"},"Methods"),Object(a.b)("h3",{id:"tonative"},"toNative"),Object(a.b)("p",null,"\u25b8 ",Object(a.b)("strong",{parentName:"p"},"toNative"),"(): ",Object(a.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex.sqlnative"},Object(a.b)("em",{parentName:"a"},"SqlNative"))),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Returns:")," ",Object(a.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex.sqlnative"},Object(a.b)("em",{parentName:"a"},"SqlNative"))),Object(a.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1621"))}p.isMDXComponent=!0}}]);