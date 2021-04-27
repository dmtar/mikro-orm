(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{1026:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return y}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=p(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=p(n),u=r,y=b["".concat(a,".").concat(u)]||b[u]||d[u]||o;return n?i.a.createElement(y,s(s({ref:t},l),{},{components:n})):i.a.createElement(y,s({ref:t},l))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},106:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),i=n(8),o=(n(0),n(1026)),a={title:"Defining entities"},s={unversionedId:"defining-entities",id:"version-2.7/defining-entities",isDocsHomePage:!1,title:"Defining entities",description:"Entities are simple javascript objects (so called POJO), decorated with @Entity decorator.",source:"@site/versioned_docs/version-2.7/defining-entities.md",slug:"/defining-entities",permalink:"/docs/2.7/defining-entities",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-2.7/defining-entities.md",version:"2.7",lastUpdatedBy:"Renovate Bot",lastUpdatedAt:1619481666,formattedLastUpdatedAt:"4/27/2021",sidebar:"version-2.7/docs",previous:{title:"Installation & Usage",permalink:"/docs/2.7/installation"},next:{title:"Working with Entity Manager",permalink:"/docs/2.7/entity-manager"}},c=[{value:"Entity file names",id:"entity-file-names",children:[]},{value:"Using BaseEntity",id:"using-baseentity",children:[]},{value:"Note about SQL drivers and @PrimaryKey",id:"note-about-sql-drivers-and-primarykey",children:[]}],l={toc:c};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Entities are simple javascript objects (so called POJO), decorated with ",Object(o.b)("inlineCode",{parentName:"p"},"@Entity")," decorator.\nNo real restrictions are made, you do not have to extend any base class, you are more than welcome\nto ",Object(o.b)("a",{parentName:"p",href:"/docs/2.7/entity-constructors"},"use entity constructors"),", just do not forget to specify primary key with\n",Object(o.b)("inlineCode",{parentName:"p"},"@PrimaryKey")," decorator."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript",metastring:'title="./entities/Book.ts"',title:'"./entities/Book.ts"'},"@Entity()\nexport class Book {\n\n  @PrimaryKey()\n  _id: ObjectID;\n\n  @Property()\n  createdAt = new Date();\n\n  @Property({ onUpdate: () => new Date() })\n  updatedAt = new Date();\n\n  @Property()\n  title: string;\n\n  @ManyToOne() // when you provide correct type hint, ORM will read it for you\n  author: Author;\n\n  @ManyToOne({ entity: () => Publisher }) // or you can specify the entity as class reference or string name\n  publisher: Publisher;\n\n  @ManyToMany({ entity: () => BookTag, inversedBy: 'books' })\n  tags = new Collection<BookTag>(this);\n\n  constructor(title: string, author: Author) {\n    this.title = title;\n    this.author = author;\n  }\n\n}\n\nexport interface Book extends IEntity<string> { }\n")),Object(o.b)("p",null,"You will need to extend Book's interface with ",Object(o.b)("inlineCode",{parentName:"p"},"IEntity"),". The interface represents internal\nmethods added to your entity's prototype via ",Object(o.b)("inlineCode",{parentName:"p"},"@Entity")," decorator."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("inlineCode",{parentName:"p"},"IEntity")," is generic interface, its type parameter depends on data type of normalized primary\nkey produced by used driver. SQL drivers usually use ",Object(o.b)("inlineCode",{parentName:"p"},"number")," and Mongo driver uses ",Object(o.b)("inlineCode",{parentName:"p"},"string"),".\nThis type default to union type ",Object(o.b)("inlineCode",{parentName:"p"},"number | string"),". Keep in mind that you have to worry about\nthis only when you define your primary key as ",Object(o.b)("inlineCode",{parentName:"p"},"_id")," instead of ",Object(o.b)("inlineCode",{parentName:"p"},"id"),".")),Object(o.b)("p",null,"As you can see, entity properties are decorated either with ",Object(o.b)("inlineCode",{parentName:"p"},"@Property")," decorator, or with one\nof reference decorators: ",Object(o.b)("inlineCode",{parentName:"p"},"@ManyToOne"),", ",Object(o.b)("inlineCode",{parentName:"p"},"@OneToMany"),", ",Object(o.b)("inlineCode",{parentName:"p"},"@OneToOne")," and ",Object(o.b)("inlineCode",{parentName:"p"},"@ManyToMany"),". "),Object(o.b)("p",null,"Here is another example of ",Object(o.b)("inlineCode",{parentName:"p"},"Author")," entity, that was referenced from the ",Object(o.b)("inlineCode",{parentName:"p"},"Book")," one:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript",metastring:'title="./entities/Author.ts"',title:'"./entities/Author.ts"'},"@Entity()\nexport class Author {\n\n  @PrimaryKey()\n  _id: ObjectID;\n\n  @Property()\n  createdAt = new Date();\n\n  @Property({ onUpdate: () => new Date() })\n  updatedAt = new Date();\n\n  @Property()\n  name: string;\n\n  @Property()\n  email: string;\n\n  @Property()\n  age: number;\n\n  @Property()\n  termsAccepted = false;\n\n  @Property()\n  identities: string[];\n\n  @Property()\n  born: Date;\n\n  @OneToMany({ entity: () => Book, mappedBy: 'author' })\n  books = new Collection<Book>(this);\n\n  @ManyToOne()\n  favouriteBook: Book;\n\n  version: number;\n  versionAsString: string;\n\n  constructor(name: string, email: string) {\n    this.name = name;\n    this.email = email;\n  }\n\n}\n\nexport interface Author extends IEntity { }\n")),Object(o.b)("p",null,"More information about how collections work can be found on ",Object(o.b)("a",{parentName:"p",href:"/docs/2.7/collections"},"collections page"),"."),Object(o.b)("p",null,"If you want to define your entity in Vanilla JavaScript, take a look ",Object(o.b)("a",{parentName:"p",href:"/docs/2.7/usage-with-js"},"here"),"."),Object(o.b)("h2",{id:"entity-file-names"},"Entity file names"),Object(o.b)("p",null,"You are free to choose one of those formats for entity filename (for a ",Object(o.b)("inlineCode",{parentName:"p"},"BookTag")," entity):"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"BookTag.ts")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"BookTag.model.ts")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"book-tag.ts")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"book-tag.model.ts")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"book-tag.entity.ts"))),Object(o.b)("p",null,"Entity name is inferred from the first part of file name before first dot occurs, so you can\nadd any suffix behind the dot, not just ",Object(o.b)("inlineCode",{parentName:"p"},".model.ts")," or ",Object(o.b)("inlineCode",{parentName:"p"},".entity.ts"),". "),Object(o.b)("h2",{id:"using-baseentity"},"Using BaseEntity"),Object(o.b)("p",null,"You can define your own base entity with properties that you require on all entities, like\nprimary key and created/updated time. "),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"If you are initializing the ORM via ",Object(o.b)("inlineCode",{parentName:"p"},"entities")," option, you need to specify all your\nbase entities as well.")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript",metastring:'title="./entities/BaseEntity.ts"',title:'"./entities/BaseEntity.ts"'},"export abstract class BaseEntity {\n\n  @PrimaryKey()\n  _id: ObjectID;\n\n  @Property()\n  createdAt = new Date();\n\n  @Property({ onUpdate: () => new Date() })\n  updatedAt = new Date();\n\n}\n")),Object(o.b)("h2",{id:"note-about-sql-drivers-and-primarykey"},"Note about SQL drivers and @PrimaryKey"),Object(o.b)("p",null,"All entities described above were defined with ",Object(o.b)("inlineCode",{parentName:"p"},"_id: ObjectID")," primary key - those were Mongo\nentities. "),Object(o.b)("p",null,"For SQL drivers, you will want to define your primary key as ",Object(o.b)("inlineCode",{parentName:"p"},"id: number")," instead:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"@PrimaryKey()\nid: number;\n")),Object(o.b)("p",null,"With your entities set up, you can start ",Object(o.b)("a",{parentName:"p",href:"/docs/2.7/entity-manager"},"using entity manager")," and\n",Object(o.b)("a",{parentName:"p",href:"/docs/2.7/repositories"},"repositories")," as described in following sections. "),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/docs/2.7/index#table-of-contents"},"\u2190"," Back to table of contents")))}p.isMDXComponent=!0}}]);