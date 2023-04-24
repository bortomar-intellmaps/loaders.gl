"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[7995],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(a),m=n,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return a?r.createElement(h,l(l({ref:t},p),{},{components:a})):r.createElement(h,l({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:n,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},56061:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const o={},l="parseInBatches",i={unversionedId:"modules/core/api-reference/parse-in-batches",id:"modules/core/api-reference/parse-in-batches",title:"parseInBatches",description:'The parseInBatches function can parse incrementally from a stream of data as it arrives and emit "batches" of parsed data.',source:"@site/../docs/modules/core/api-reference/parse-in-batches.md",sourceDirName:"modules/core/api-reference",slug:"/modules/core/api-reference/parse-in-batches",permalink:"/docs/modules/core/api-reference/parse-in-batches",draft:!1,editUrl:"https://github.com/visgl/loaders.gl/tree/master/website/../docs/modules/core/api-reference/parse-in-batches.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"parseSync",permalink:"/docs/modules/core/api-reference/parse-sync"},next:{title:"selectLoader",permalink:"/docs/modules/core/api-reference/select-loader"}},s={},c=[{value:"Usage",id:"usage",level:2},{value:"Functions",id:"functions",level:2},{value:"async parseInBatches(data: DataSource, loaders: object | object[], options?: object): AsyncIterator",id:"async-parseinbatchesdata-datasource-loaders-object--object-options-object-asynciterator",level:3},{value:"async parseInBatches(data: DataSource, options?: object]]): AsyncIterator",id:"async-parseinbatchesdata-datasource-options-object-asynciterator",level:3},{value:"Input Types",id:"input-types",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"parseinbatches"},"parseInBatches"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"parseInBatches"),' function can parse incrementally from a stream of data as it arrives and emit "batches" of parsed data.'),(0,n.kt)("p",null,"Batched parsing is only supported by a subset of loaders. Check documentation of each loader before using this function."),(0,n.kt)("p",null,"From ",(0,n.kt)("a",{parentName:"p",href:"http://shields.io"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/v2.3-blue.svg?style=flat-square",alt:"Website shields.io"}))," ",(0,n.kt)("inlineCode",{parentName:"p"},"parseInBatches")," can be used with all loaders. Non-supporting loaders will wait until all data has arrived, and emit a single batch containing the parsed data for the entire input (effectively behave as if ",(0,n.kt)("inlineCode",{parentName:"p"},"parse")," had been called)."),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("p",null,"Parse CSV in batches (emitting a batch of rows every time data arrives from the network):"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"import {fetchFile, parseInBatches} from '@loaders.gl/core';\nimport {CSVLoader} from '@loaders.gl/obj';\n\nconst batchIterator = await parseInBatches(fetchFile(url), CSVLoader);\nfor await (const batch of batchIterator) {\n  console.log(batch.length);\n}\n")),(0,n.kt)("p",null,"Parse CSV in batches, requesting an initial metadata batch:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"import {fetchFile, parseInBatches} from '@loaders.gl/core';\nimport {CSVLoader} from '@loaders.gl/obj';\n\nconst batchIterator = await parseInBatches(fetchFile(url), CSVLoader, {metadata: true});\nfor await (const batch of batchIterator) {\n  switch (batch.batchType) {\n    case 'metadata':\n      console.log(batch.metadata);\n      break;\n    default:\n      processBatch(batch.data);\n  }\n}\n")),(0,n.kt)("h2",{id:"functions"},"Functions"),(0,n.kt)("h3",{id:"async-parseinbatchesdata-datasource-loaders-object--object-options-object-asynciterator"},"async parseInBatches(data: DataSource, loaders: object | object","[","], options?: object): AsyncIterator"),(0,n.kt)("h3",{id:"async-parseinbatchesdata-datasource-options-object-asynciterator"},"async parseInBatches(data: DataSource, options?: object]]): AsyncIterator"),(0,n.kt)("p",null,"Parses data in batches from a stream, releasing each batch to the application while the stream is still being read."),(0,n.kt)("p",null,"Parses data with the selected ",(0,n.kt)("em",{parentName:"p"},"loader object"),". An array of ",(0,n.kt)("inlineCode",{parentName:"p"},"loaders")," can be provided, in which case an attempt will be made to autodetect which loader is appropriate for the file (using url extension and header matching)."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"data"),": loaded data or an object that allows data to be loaded. Plese refer to the table below for valid types."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"loaders")," can be a single loader or an array of loaders. If ommitted, will use the list of registered loaders (see ",(0,n.kt)("inlineCode",{parentName:"li"},"registerLoaders"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"options"),": See ",(0,n.kt)("a",{parentName:"li",href:"./loader-options"},(0,n.kt)("inlineCode",{parentName:"a"},"LoaderOptions"))," for documentation of options."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"url"),": optional, assists in the autoselection of a loader if multiple loaders are supplied to ",(0,n.kt)("inlineCode",{parentName:"li"},"loader"),".")),(0,n.kt)("p",null,"Returns:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Returns an async iterator that yields batches of data. The exact format for the batches depends on the ",(0,n.kt)("em",{parentName:"li"},"loader object")," category.")),(0,n.kt)("p",null,"Notes:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("inlineCode",{parentName:"li"},"loaders")," parameter can also be ommitted, in which case any ",(0,n.kt)("em",{parentName:"li"},"loaders")," previously registered with ",(0,n.kt)("a",{parentName:"li",href:"docs/api-reference/core/register-loaders"},(0,n.kt)("inlineCode",{parentName:"a"},"registerLoaders"))," will be used.")),(0,n.kt)("h2",{id:"input-types"},"Input Types"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"Response")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"Response")," object, e.g returned by ",(0,n.kt)("inlineCode",{parentName:"td"},"fetch")," or ",(0,n.kt)("inlineCode",{parentName:"td"},"fetchFile"),"."),(0,n.kt)("td",{parentName:"tr",align:null},"Data will be streamed from the ",(0,n.kt)("inlineCode",{parentName:"td"},"response.body")," stream.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"AsyncIterator")),(0,n.kt)("td",{parentName:"tr",align:null},"iterator that yields promises that resolve to binary (",(0,n.kt)("inlineCode",{parentName:"td"},"ArrayBuffer"),") chunks or string chunks."),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"converted into async iterators behind the scenes.)"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"Iterator")),(0,n.kt)("td",{parentName:"tr",align:null},"Iterator that yields binary chunks (",(0,n.kt)("inlineCode",{parentName:"td"},"ArrayBuffer"),") or string chunks"),(0,n.kt)("td",{parentName:"tr",align:null},"string chunks only work for loaders that support textual input.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"Promise")),(0,n.kt)("td",{parentName:"tr",align:null},"A promise that resolves to any of the other supported data types can also be supplied."),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("p",null,"Note that many other data sources can also be parsed by first converting them to ",(0,n.kt)("inlineCode",{parentName:"p"},"Response")," objects, e.g. with ",(0,n.kt)("inlineCode",{parentName:"p"},"fetchResoure"),": http urls, data urls, ",(0,n.kt)("inlineCode",{parentName:"p"},"ArrayBuffer"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"String"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"File"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Blob"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"ReadableStream")," etc."))}u.isMDXComponent=!0}}]);