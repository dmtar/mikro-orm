(window.webpackJsonp=window.webpackJsonp||[]).push([[1025],{1095:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return a})),n.d(r,"metadata",(function(){return o})),n.d(r,"toc",(function(){return l})),n.d(r,"default",(function(){return d}));var t=n(3),i=n(7),u=(n(0),n(1256)),a={title:"Query Builder API"},o={unversionedId:"query-builder-api",id:"query-builder-api",isDocsHomePage:!1,title:"Query Builder API",description:"QueryBuilder provides fluent interface with these methods:",source:"@site/docs/query-builder-api.md",slug:"/query-builder-api",permalink:"/docs/next/query-builder-api",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/docs/query-builder-api.md",version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1612369190,sidebar:"docs",previous:{title:"EntityRepository API",permalink:"/docs/next/repositories-api"},next:{title:"Decorators",permalink:"/docs/next/decorators"}},l=[],s={toc:l};function d(e){var r=e.components,n=Object(i.a)(e,["components"]);return Object(u.b)("wrapper",Object(t.a)({},s,n,{components:r,mdxType:"MDXLayout"}),Object(u.b)("p",null,Object(u.b)("inlineCode",{parentName:"p"},"QueryBuilder")," provides fluent interface with these methods:"),Object(u.b)("pre",null,Object(u.b)("code",Object(t.a)({parentName:"pre"},{className:"language-typescript"}),"select(fields: Field<T> | Field<T>[], distinct?: boolean): QueryBuilder;\naddSelect(fields: string | string[]): QueryBuilder;\ninsert(data: any): QueryBuilder;\nupdate(data: any): QueryBuilder;\ndelete(cond?: QBFilterQuery): QueryBuilder;\ntruncate(): QueryBuilder;\ncount(field?: string | string[], distinct?: boolean): QueryBuilder;\njoin(field: string, alias: string, cond?: QBFilterQuery, type?: 'leftJoin' | 'innerJoin' | 'pivotJoin', path?: string): QueryBuilder;\nleftJoin(field: string, alias: string, cond?: QBFilterQuery): QueryBuilder;\nwithSubQuery(subQuery: KnexQueryBuilder, alias: string): QueryBuilder;\nwhere(cond: QBFilterQuery<T>, operator?: keyof typeof GroupOperator): QueryBuilder;\nwhere(cond: string, params?: any[], operator?: keyof typeof GroupOperator): QueryBuilder;\nandWhere(cond: QBFilterQuery<T>): QueryBuilder;\nandWhere(cond: string, params?: any[]): QueryBuilder;\norWhere(cond: QBFilterQuery<T>): QueryBuilder;\norWhere(cond: string, params?: any[]): QueryBuilder;\norderBy(orderBy: QueryOrderMap): QueryBuilder;\ngroupBy(fields: (string | keyof T) | (string | keyof T)[]): QueryBuilder;\nhaving(cond?: QBFilterQuery | string, params?: any[]): QueryBuilder;\nraw(sql: string): Raw;\nlimit(limit?: number, offset?: number): QueryBuilder;\noffset(offset?: number): QueryBuilder;\nwithSchema(schema?: string): QueryBuilder;\nsetLockMode(mode?: LockMode): QueryBuilder;\nsetFlag(flag: QueryFlag): QueryBuilder;\nunsetFlag(flag: QueryFlag): QueryBuilder;\ngetKnexQuery(): KnexQueryBuilder;\ngetQuery(): string;\ngetParams(): readonly Value[];\ngetAliasForJoinPath(path: string): string | undefined;\ngetNextAlias(prefix?: string): string;\nexecute<U = any>(method?: 'all' | 'get' | 'run', mapResults?: boolean): Promise<U>;\ngetResult(): Promise<T[]>;\ngetResultList(): Promise<T[]>;\ngetSingleResult(): Promise<T | null>;\n/**\n * Returns knex instance with sub-query aliased with given alias.\n * You can provide `EntityName.propName` as alias, then the field name will be used based on the metadata\n */\nas(alias: string): KnexQueryBuilder;\nclone(): QueryBuilder<T>;\ngetKnex(): KnexQueryBuilder;\n")))}d.isMDXComponent=!0},1256:function(e,r,n){"use strict";n.d(r,"a",(function(){return c})),n.d(r,"b",(function(){return f}));var t=n(0),i=n.n(t);function u(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){u(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},u=Object.keys(e);for(t=0;t<u.length;t++)n=u[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(t=0;t<u.length;t++)n=u[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),d=function(e){var r=i.a.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},c=function(e){var r=d(e.components);return i.a.createElement(s.Provider,{value:r},e.children)},y={inlineCode:"code",wrapper:function(e){var r=e.children;return i.a.createElement(i.a.Fragment,{},r)}},p=i.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,u=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=d(n),p=t,f=c["".concat(a,".").concat(p)]||c[p]||y[p]||u;return n?i.a.createElement(f,o(o({ref:r},s),{},{components:n})):i.a.createElement(f,o({ref:r},s))}));function f(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var u=n.length,a=new Array(u);a[0]=p;var o={};for(var l in r)hasOwnProperty.call(r,l)&&(o[l]=r[l]);o.originalType=e,o.mdxType="string"==typeof e?e:t,a[1]=o;for(var s=2;s<u;s++)a[s]=n[s];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);