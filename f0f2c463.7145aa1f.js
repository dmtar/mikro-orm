(window.webpackJsonp=window.webpackJsonp||[]).push([[939],{1009:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(3),o=n(7),i=(n(0),n(1086)),a={title:"Using QueryBuilder"},u={unversionedId:"query-builder",id:"version-2.7/query-builder",isDocsHomePage:!1,title:"Using QueryBuilder",description:"When you need to execute some SQL query without all the ORM stuff involved, you can either",source:"@site/versioned_docs/version-2.7/query-builder.md",slug:"/query-builder",permalink:"/docs/2.7/query-builder",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-2.7/query-builder.md",version:"2.7",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1608932425,sidebar:"version-2.7/docs",previous:{title:"Smart query conditions",permalink:"/docs/2.7/query-conditions"},next:{title:"Serializing",permalink:"/docs/2.7/serializing"}},l=[{value:"Running native SQL query",id:"running-native-sql-query",children:[]},{value:"Executing the query",id:"executing-the-query",children:[]},{value:"Mapping raw results to entities",id:"mapping-raw-results-to-entities",children:[]},{value:"Implicit joining",id:"implicit-joining",children:[]},{value:"Explicit joining",id:"explicit-joining",children:[]},{value:"Complex where conditions",id:"complex-where-conditions",children:[{value:"Custom SQL in where",id:"custom-sql-in-where",children:[]},{value:"andWhere() and orWhere()",id:"andwhere-and-orwhere",children:[]},{value:"Condition object",id:"condition-object",children:[]}]},{value:"Locking support",id:"locking-support",children:[]},{value:"QueryBuilder API",id:"querybuilder-api",children:[]}],c={rightToc:l};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"When you need to execute some SQL query without all the ORM stuff involved, you can either\ncompose the query yourself, or use the ",Object(i.b)("inlineCode",{parentName:"p"},"QueryBuilder")," helper to construct the query for you:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"const qb = orm.em.createQueryBuilder(Author);\nqb.update({ name: 'test 123', type: PublisherType.GLOBAL }).where({ id: 123, type: PublisherType.LOCAL });\n\nconsole.log(qb.getQuery());\n// UPDATE `publisher2` SET `name` = ?, `type` = ? WHERE `id` = ? AND `type` = ?\n\nconsole.log(qb.getParams());\n// ['test 123', PublisherType.GLOBAL, 123, PublisherType.LOCAL]\n\n// run the query\nconst res1 = await qb.execute();\n")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"QueryBuilder")," also supports ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/2.7/query-conditions"}),"smart query conditions"),"."),Object(i.b)("h2",{id:"running-native-sql-query"},"Running native SQL query"),Object(i.b)("p",null,"You can run native SQL via underlying connection"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"const connection = orm.em.getConnection();\nconst res = await connection.execute('SELECT 1 as count');\nconsole.log(res); // res is array of objects: `[ { count: 1 } ]`\n")),Object(i.b)("h2",{id:"executing-the-query"},"Executing the query"),Object(i.b)("p",null,"You can use ",Object(i.b)("inlineCode",{parentName:"p"},"execute(method = 'all', mapResults = true)"),"'s parameters to control form of result:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"const res1 = await qb.execute('all'); // returns array of objects, default behavior\nconst res2 = await qb.execute('get'); // returns single object\nconst res3 = await qb.execute('run'); // returns object like `{ affectedRows: number, insertId: number, row: any }`\n")),Object(i.b)("p",null,"Second argument can be used to disable mapping of database columns to property names (which\nis enabled by default). In following example, ",Object(i.b)("inlineCode",{parentName:"p"},"Book")," entity has ",Object(i.b)("inlineCode",{parentName:"p"},"createdAt")," property defined\nwith implicit underscored field name ",Object(i.b)("inlineCode",{parentName:"p"},"created_at"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"const res4 = await orm.em.createQueryBuilder(Book).select('*').execute('get', true);\nconsole.log(res4); // `createdAt` will be defined, while `created_at` will be missing\nconst res5 = await orm.em.createQueryBuilder(Book).select('*').execute('get', false);\nconsole.log(res5); // `created_at` will be defined, while `createdAt` will be missing\n")),Object(i.b)("p",null,"To create entities from query builder result, you can use ",Object(i.b)("inlineCode",{parentName:"p"},"merge()")," method of ",Object(i.b)("inlineCode",{parentName:"p"},"EntityManager"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"const res6 = await orm.em.createQueryBuilder(Book).select('*').execute();\nconst entities = res6.map(data => orm.em.merge(Book, data));\nconsole.log(entities); // array of Book entities\n")),Object(i.b)("h2",{id:"mapping-raw-results-to-entities"},"Mapping raw results to entities"),Object(i.b)("p",null,"Another way to create entity from raw results (that are not necessarily mapped to entity properties)\nis to use ",Object(i.b)("inlineCode",{parentName:"p"},"map()")," method of ",Object(i.b)("inlineCode",{parentName:"p"},"EntityManager"),", that is basically a shortcut for mapping results\nvia ",Object(i.b)("inlineCode",{parentName:"p"},"IDatabaseDriver.mapResult()")," (which converts field names to property names - e.g. ",Object(i.b)("inlineCode",{parentName:"p"},"created_at"),"\nto ",Object(i.b)("inlineCode",{parentName:"p"},"createdAt"),") and ",Object(i.b)("inlineCode",{parentName:"p"},"merge()")," which converts the data to entity instance and makes it managed. "),Object(i.b)("p",null,"This method comes handy when you want to use 3rd party query builder like ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://knexjs.org/"}),"Knex.js"),",\nwhere the result is not mapped to entity properties automatically:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"const results = await knex.select('*').from('users').where(knex.raw('id = ?', [id]));\nconst users = results.map(user => orm.em.map(User, user));\n\n// or use EntityRepository.map()\nconst repo = orm.em.getRepository(User);\nconst users = results.map(user => repo.map(user));\n")),Object(i.b)("h2",{id:"implicit-joining"},"Implicit joining"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"QueryBuilder")," supports automatic joining based on entity metadata:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"const qb = orm.em.createQueryBuilder(BookTag, 't');\nqb.select('*').where({ books: 123 });\n\nconsole.log(qb.getQuery());\n// SELECT `t`.*, `e1`.`book_tag_id`, `e1`.`book_uuid_pk`\n// FROM `book_tag` AS `t`\n// LEFT JOIN `book_to_book_tag` AS `e1` ON `t`.`id` = `e1`.`book_tag_id`\n// WHERE `e1`.`book_uuid_pk` = ?\n")),Object(i.b)("h2",{id:"explicit-joining"},"Explicit joining"),Object(i.b)("p",null,"Another way is to manually specify join property via ",Object(i.b)("inlineCode",{parentName:"p"},"join()"),"/",Object(i.b)("inlineCode",{parentName:"p"},"leftJoin()")," methods:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"const qb = orm.em.createQueryBuilder(BookTag, 't');\nqb.select(['b.uuid', 'b.*', 't.*'], true)\n  .join('t.books', 'b')\n  .where({ 'b.title': 'test 123' })\n  .limit(2, 1);\n\nconsole.log(qb.getQuery());\n// SELECT DISTINCT `b`.`uuid_pk`, `b`.*, `t`.*, `e1`.`book_tag_id`, `e1`.`book_uuid_pk` FROM `book_tag` AS `t`\n// JOIN `book_to_book_tag` AS `e1` ON `t`.`id` = `e1`.`book_tag_id`\n// JOIN `book` AS `b` ON `e1`.`book_uuid_pk` = `b`.`uuid_pk`\n// WHERE `b`.`title` = ?\n// LIMIT ? OFFSET ?\n")),Object(i.b)("h2",{id:"complex-where-conditions"},"Complex where conditions"),Object(i.b)("p",null,"There are multiple ways to construct complex query conditions. You can either write parts of SQL\nmanually, use ",Object(i.b)("inlineCode",{parentName:"p"},"andWhere()"),"/",Object(i.b)("inlineCode",{parentName:"p"},"orWhere()"),", or provide condition object:"),Object(i.b)("h3",{id:"custom-sql-in-where"},"Custom SQL in where"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"const qb = orm.em.createQueryBuilder(BookTag, 't');\nqb.select(['b.*', 't.*'])\n  .leftJoin('t.books', 'b')\n  .where('b.title = ? OR b.title = ?', ['test 123', 'lol 321'])\n  .andWhere('1 = 1')\n  .orWhere('1 = 2')\n  .limit(2, 1);\n\nconsole.log(qb.getQuery());\n// SELECT `b`.*, `t`.*, `e1`.`book_tag_id`, `e1`.`book_uuid_pk` FROM `book_tag` AS `t`\n// LEFT JOIN `book_to_book_tag` AS `e1` ON `t`.`id` = `e1`.`book_tag_id`\n// LEFT JOIN `book` AS `b` ON `e1`.`book_uuid_pk` = `b`.`uuid_pk`\n// WHERE (((b.title = ? OR b.title = ?) AND (1 = 1)) OR (1 = 2))\n// LIMIT ? OFFSET ?\n")),Object(i.b)("h3",{id:"andwhere-and-orwhere"},"andWhere() and orWhere()"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"const qb = orm.em.createQueryBuilder(BookTag, 't');\nqb.select(['b.*', 't.*'])\n  .leftJoin('t.books', 'b')\n  .where('b.title = ? OR b.title = ?', ['test 123', 'lol 321'])\n  .andWhere('1 = 1')\n  .orWhere('1 = 2')\n  .limit(2, 1);\n\nconsole.log(qb.getQuery());\n// SELECT `b`.*, `t`.*, `e1`.`book_tag_id`, `e1`.`book_uuid_pk` FROM `book_tag` AS `t`\n// LEFT JOIN `book_to_book_tag` AS `e1` ON `t`.`id` = `e1`.`book_tag_id`\n// LEFT JOIN `book` AS `b` ON `e1`.`book_uuid_pk` = `b`.`uuid_pk`\n// WHERE (((b.title = ? OR b.title = ?) AND (1 = 1)) OR (1 = 2))\n// LIMIT ? OFFSET ?\n")),Object(i.b)("h3",{id:"condition-object"},"Condition object"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"const qb = orm.em.createQueryBuilder(Test);\nqb.select('*').where({ $and: [{ id: { $nin: [3, 4] } }, { id: { $gt: 2 } }] });\n\nconsole.log(qb.getQuery());\n// SELECT `e0`.* FROM `test` AS `e0` WHERE (`e0`.`id` NOT IN (?, ?) AND `e0`.`id` > ?)\n")),Object(i.b)("h2",{id:"locking-support"},"Locking support"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"const qb = orm.em.createQueryBuilder(Test);\nqb.select('*').where({ name: 'Lol 321' }).setLockMode(LockMode.PESSIMISTIC_READ);\n\nconsole.log(qb.getQuery()); // for MySQL\n// SELECT `e0`.* FROM `test` AS `e0` WHERE `e0`.`name` = ? LOCK IN SHARE MODE\n")),Object(i.b)("h2",{id:"querybuilder-api"},"QueryBuilder API"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"QueryBuilder")," provides fluent interface with these methods:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"QueryBuilder.select(fields: string | string[], distinct?: boolean): QueryBuilder;\nQueryBuilder.insert(data: any): QueryBuilder;\nQueryBuilder.update(data: any): QueryBuilder;\nQueryBuilder.delete(cond: any): QueryBuilder;\nQueryBuilder.count(fields: string | string[], distinct?: boolean): QueryBuilder;\nQueryBuilder.join(field: string, alias?: string): QueryBuilder;\nQueryBuilder.leftJoin(field: string, alias?: string): QueryBuilder;\nQueryBuilder.where(cond: any, operator: '$and' | '$or'): QueryBuilder;\nQueryBuilder.andWhere(cond: any): QueryBuilder;\nQueryBuilder.orWhere(cond: any): QueryBuilder;\nQueryBuilder.groupBy(fields: string | string[]): QueryBuilder;\nQueryBuilder.having(cond: any): QueryBuilder;\nQueryBuilder.populate(populate: string[]): QueryBuilder;\nQueryBuilder.limit(limit: number, offset?: number): QueryBuilder;\nQueryBuilder.offset(offset: number): QueryBuilder;\nQueryBuilder.setLockMode(mode: LockMode): QueryBuilder;\nQueryBuilder.getQuery(): string;\nQueryBuilder.getParams(): any;\nQueryBuilder.clone(): QueryBuilder;\n")))}s.isMDXComponent=!0},1086:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),s=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},b=function(e){var t=s(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=s(n),p=r,m=b["".concat(a,".").concat(p)]||b[p]||d[p]||i;return n?o.a.createElement(m,u(u({ref:t},c),{},{components:n})):o.a.createElement(m,u({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=p;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:r,a[1]=u;for(var c=2;c<i;c++)a[c]=n[c];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);