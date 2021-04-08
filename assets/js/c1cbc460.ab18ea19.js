(window.webpackJsonp=window.webpackJsonp||[]).push([[772],{1110:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),b=r,d=u["".concat(i,".").concat(b)]||u[b]||m[b]||o;return n?a.a.createElement(d,s(s({ref:t},l),{},{components:n})):a.a.createElement(d,s({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},844:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(8),o=(n(0),n(1110)),i={title:"Defining Entities via EntitySchema"},s={unversionedId:"entity-schema",id:"version-4.1/entity-schema",isDocsHomePage:!1,title:"Defining Entities via EntitySchema",description:"With EntitySchema helper you define the schema programmatically.",source:"@site/versioned_docs/version-4.1/entity-schema.md",slug:"/entity-schema",permalink:"/docs/4.1/entity-schema",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.1/entity-schema.md",version:"4.1",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1617893515,formattedLastUpdatedAt:"4/8/2021",sidebar:"version-4.1/docs",previous:{title:"Separating Concerns using Embeddables",permalink:"/docs/4.1/embeddables"},next:{title:"Metadata Providers",permalink:"/docs/4.1/metadata-providers"}},c=[{value:"Using custom entity classes",id:"using-custom-entity-classes",children:[]},{value:"Using BaseEntity",id:"using-baseentity",children:[]},{value:"Configuration Reference",id:"configuration-reference",children:[]},{value:"MongoDB example",id:"mongodb-example",children:[]}],l={toc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"With ",Object(o.b)("inlineCode",{parentName:"p"},"EntitySchema")," helper you define the schema programmatically. "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript",metastring:'title="./entities/Book.ts"',title:'"./entities/Book.ts"'},"export interface Book extends BaseEntity {\n  title: string;\n  author: Author;\n  publisher: Publisher;\n  tags: Collection<BookTag>;\n}\n\nexport const schema = new EntitySchema<Book, BaseEntity>({\n  name: 'Book',\n  extends: 'BaseEntity',\n  properties: {\n    title: { type: 'string' },\n    author: { reference: 'm:1', entity: 'Author', inversedBy: 'books' },\n    publisher: { reference: 'm:1', entity: 'Publisher', inversedBy: 'books' },\n    tags: { reference: 'm:n', entity: 'BookTag', inversedBy: 'books', fixedOrder: true },\n  },\n});\n")),Object(o.b)("p",null,"When creating new entity instances, you will need to use ",Object(o.b)("inlineCode",{parentName:"p"},"em.create()")," method that will\ncreate instance of internally created class. "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"const repo = em.getRepository<Author>('Author');\nconst author = repo.create('Author', { name: 'name', email: 'email' }); // instance of internal Author class\nawait repo.persistAndFlush(author);\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Using this approach, metadata caching is automatically disabled as it is not needed.")),Object(o.b)("h2",{id:"using-custom-entity-classes"},"Using custom entity classes"),Object(o.b)("p",null,"You can optionally use custom class for entity instances.  "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript",metastring:'title="./entities/Author.ts"',title:'"./entities/Author.ts"'},"export class Author extends BaseEntity {\n  name: string;\n  email: string;\n  age?: number;\n  termsAccepted?: boolean;\n  identities?: string[];\n  born?: Date;\n  books = new Collection<Book>(this);\n  favouriteBook?: Book;\n  version?: number;\n  \n  constructor(name: string, email: string) {\n    this.name = name;\n    this.email = email;\n  }\n}\n\nexport const schema = new EntitySchema<Author, BaseEntity>({\n  class: Author,\n  properties: {\n    name: { type: 'string' },\n    email: { type: 'string', unique: true },\n    age: { type: 'number', nullable: true },\n    termsAccepted: { type: 'boolean', default: 0, onCreate: () => false },\n    identities: { type: 'string[]', nullable: true },\n    born: { type: DateType, nullable: true, length: 3 },\n    books: { reference: '1:m', entity: () => 'Book', mappedBy: book => book.author },\n    favouriteBook: { reference: 'm:1', type: 'Book' },\n    version: { type: 'number', persist: false },\n  },\n});\n")),Object(o.b)("p",null,"Then you can use the entity class as usual:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"const repo = em.getRepository(Author);\nconst author = new Author('name', 'email');\nawait repo.persistAndFlush(author);\n")),Object(o.b)("h2",{id:"using-baseentity"},"Using BaseEntity"),Object(o.b)("p",null,"Do not forget that base entities needs to be discovered just like normal entities. "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript",metastring:'title="./entities/BaseEntity.ts"',title:'"./entities/BaseEntity.ts"'},"export interface BaseEntity {\n  id: number;\n  createdAt: Date;\n  updatedAt: Date;\n}\n\nexport const schema = new EntitySchema<BaseEntity>({\n  name: 'BaseEntity',\n  abstract: true,\n  properties: {\n    id: { type: 'number', primary: true },\n    createdAt: { type: 'Date', onCreate: () => new Date(), nullable: true },\n    updatedAt: { type: 'Date', onCreate: () => new Date(), onUpdate: () => new Date(), nullable: true },\n  },\n});\n")),Object(o.b)("h2",{id:"configuration-reference"},"Configuration Reference"),Object(o.b)("p",null,"The parameter of ",Object(o.b)("inlineCode",{parentName:"p"},"EntitySchema")," requires to provide either ",Object(o.b)("inlineCode",{parentName:"p"},"name")," or ",Object(o.b)("inlineCode",{parentName:"p"},"class")," parameters.\nWhen using ",Object(o.b)("inlineCode",{parentName:"p"},"class"),", ",Object(o.b)("inlineCode",{parentName:"p"},"extends")," will be automatically inferred. You can optionally pass\nthese additional parameters:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"name: string;\nclass: Constructor<T>;\nextends: string;\ntableName: string; // alias for `collection: string`\nproperties: { [K in keyof T & string]: EntityProperty<T[K]> };\nindexes: { properties: string | string[]; name?: string; type?: string }[];\nuniques: { properties: string | string[]; name?: string }[];\ncustomRepository: () => Constructor<EntityRepository<T>>;\nhooks: Partial<Record<HookType, (string & keyof T)[]>>;\nabstract: boolean;\n")),Object(o.b)("p",null,"Every property then needs to contain a type specification - one of ",Object(o.b)("inlineCode",{parentName:"p"},"type"),"/",Object(o.b)("inlineCode",{parentName:"p"},"customType"),"/",Object(o.b)("inlineCode",{parentName:"p"},"entity"),".\nHere are some examples of various property types:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"export enum MyEnum {\n  LOCAL = 'local',\n  GLOBAL = 'global',\n}\n\nexport const schema = new EntitySchema<FooBar>({\n  name: 'FooBar',\n  tableName: 'tbl_foo_bar',\n  indexes: [{ name: 'idx1', properties: 'name' }],\n  uniques: [{ name: 'unq1', properties: ['name', 'email'] }],\n  customRepository: () => FooBarRepository,\n  properties: {\n    id: { type: 'number', primary: true },\n    name: { type: 'string' },\n    baz: { reference: '1:1', entity: 'FooBaz', orphanRemoval: true, nullable: true },\n    fooBar: { reference: '1:1', entity: 'FooBar', nullable: true },\n    publisher: { reference: 'm:1', entity: 'Publisher', inversedBy: 'books' },\n    books: { reference: '1:m', entity: () => 'Book', mappedBy: book => book.author },\n    tags: { reference: 'm:n', entity: 'BookTag', inversedBy: 'books', fixedOrder: true },\n    version: { type: 'Date', version: true, length: 0 },\n    type: { enum: true, items: () => MyEnum, default: MyEnum.LOCAL },\n  },\n});\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"As a value for ",Object(o.b)("inlineCode",{parentName:"p"},"type")," you can also use one of ",Object(o.b)("inlineCode",{parentName:"p"},"String"),"/",Object(o.b)("inlineCode",{parentName:"p"},"Number"),"/",Object(o.b)("inlineCode",{parentName:"p"},"Boolean"),"/",Object(o.b)("inlineCode",{parentName:"p"},"Date"),".")),Object(o.b)("h2",{id:"mongodb-example"},"MongoDB example"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"export class BookTag {\n  _id!: ObjectId;\n  id!: string;\n  name: string;\n  books = new Collection<Book>(this);\n\n  constructor(name: string) {\n    this.name = name;\n  }\n}\n\nexport const schema = new EntitySchema<BookTag>({\n  class: BookTag,\n  properties: {\n    _id: { type: 'ObjectId', primary: true },\n    id: { type: 'string', serializedPrimaryKey: true },\n    name: { type: 'string' },\n    books: { reference: 'm:n', entity: () => Book, mappedBy: book => book.tags },\n  },\n});\n")))}p.isMDXComponent=!0}}]);