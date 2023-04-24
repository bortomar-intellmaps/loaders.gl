"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[8970],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(a),u=n,k=c["".concat(s,".").concat(u)]||c[u]||m[u]||o;return a?r.createElement(k,l(l({ref:t},d),{},{components:a})):r.createElement(k,l({ref:t},d))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},89797:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const o={},l="parse",i={unversionedId:"modules/core/api-reference/parse",id:"modules/core/api-reference/parse",title:"parse",description:'This function "atomically" parses data (i.e. parses the entire data set in one operation). It can be called on "already loaded" data such as ArrayBuffer and string objects.',source:"@site/../docs/modules/core/api-reference/parse.md",sourceDirName:"modules/core/api-reference",slug:"/modules/core/api-reference/parse",permalink:"/docs/modules/core/api-reference/parse",draft:!1,editUrl:"https://github.com/visgl/loaders.gl/tree/master/website/../docs/modules/core/api-reference/parse.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"loadInBatches",permalink:"/docs/modules/core/api-reference/load-in-batches"},next:{title:"parseSync",permalink:"/docs/modules/core/api-reference/parse-sync"}},s={},p=[{value:"Usage",id:"usage",level:2},{value:"Functions",id:"functions",level:2},{value:"parse(data: Response | ArrayBuffer | String, loaders: Object | Object[], options?: Object) : Promise&lt;Any&gt;",id:"parsedata-response--arraybuffer--string-loaders-object--object-options-object--promiseany",level:3}],d={toc:p},c="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(c,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"parse"},"parse"),(0,n.kt)("p",null,'This function "atomically" parses data (i.e. parses the entire data set in one operation). It can be called on "already loaded" data such as ',(0,n.kt)("inlineCode",{parentName:"p"},"ArrayBuffer")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"string")," objects."),(0,n.kt)("p",null,"In contrast to ",(0,n.kt)("inlineCode",{parentName:"p"},"load"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"parse")," does not accept URLs (it treats strings as data to be parsed) however it does read data from ",(0,n.kt)("inlineCode",{parentName:"p"},"Response")," objects (which can involve loading data from a source). ",(0,n.kt)("inlineCode",{parentName:"p"},"Response")," objects are returned by ",(0,n.kt)("inlineCode",{parentName:"p"},"fetch")," but can also be manually created to wrap other data types, which makes ",(0,n.kt)("inlineCode",{parentName:"p"},"parse")," quite flexible."),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("p",null,"The return value from ",(0,n.kt)("inlineCode",{parentName:"p"},"fetch")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"fetchFile")," is a ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise")," that resolves to the fetch ",(0,n.kt)("inlineCode",{parentName:"p"},"Response")," object and can be passed directly to the non-sync parser functions:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"import {fetchFile, parse} from '@loaders.gl/core';\nimport {OBJLoader} from '@loaders.gl/obj';\n\ndata = await parse(fetchFile(url), OBJLoader);\n// Application code here\n...\n")),(0,n.kt)("p",null,"Batched (streaming) parsing is supported by some loaders"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"import {fetchFile, parseInBatches} from '@loaders.gl/core';\nimport {CSVLoader} from '@loaders.gl/obj';\n\nconst batchIterator = await parseInBatches(fetchFile(url), CSVLoader);\nfor await (const batch of batchIterator) {\n  console.log(batch.length);\n}\n")),(0,n.kt)("p",null,"Handling errors"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"try {\n  const response = await fetch(url); // fetch can throw in case of network errors\n  const data = await parse(response); // parse will throw if server reports an error\n} catch (error) {\n  console.log(error);\n}\n")),(0,n.kt)("h2",{id:"functions"},"Functions"),(0,n.kt)("h3",{id:"parsedata-response--arraybuffer--string-loaders-object--object-options-object--promiseany"},"parse(data: Response | ArrayBuffer | String, loaders: Object | Object","[","], options?: Object) : Promise\\<Any",">"),(0,n.kt)("p",null,"Parses data asynchronously either using the provided loader or loaders, or using the pre-registered loaders (see ",(0,n.kt)("inlineCode",{parentName:"p"},"register-loaders"),")."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"data"),": loaded data or an object that allows data to be loaded. This parameter can be any of the following types:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Response")," - response object returned by ",(0,n.kt)("inlineCode",{parentName:"li"},"fetchFile")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"fetch"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"ArrayBuffer")," - Parse from binary data in an array buffer"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"String")," - Parse from text data in a string. (Only works for loaders that support textual input)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Iterator")," - Iterator that yeilds binary (",(0,n.kt)("inlineCode",{parentName:"li"},"ArrayBuffer"),") chunks or string chunks (string chunks only work for loaders that support textual input)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"AsyncIterator")," - iterator that yeilds promises that resolve to binary (",(0,n.kt)("inlineCode",{parentName:"li"},"ArrayBuffer"),") chunks or string chunks."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"ReadableStream")," - A DOM or Node stream."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"File")," - A browser file object (from drag-and-drop or file selection operations)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Promise")," - A promise that resolves to any of the other supported data types can also be supplied."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"loaders")," - can be a single loader or an array of loaders. If single loader is provided, will force to use it. If ommitted, will use the list of pre-registered loaders (see ",(0,n.kt)("inlineCode",{parentName:"p"},"registerLoaders"),")")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"data"),": loaded data or an object that allows data to be loaded. See table below for valid input types for this parameter.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"loaders")," - can be a single loader or an array of loaders. If ommitted, will use the list of pre-registered loaders (see ",(0,n.kt)("inlineCode",{parentName:"p"},"registerLoaders"),")")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"options"),": See ",(0,n.kt)("a",{parentName:"p",href:"./loader-options"},(0,n.kt)("inlineCode",{parentName:"a"},"LoaderOptions")),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"url"),": optional, assists in the autoselection of a loader if multiple loaders are supplied to ",(0,n.kt)("inlineCode",{parentName:"p"},"loader"),"."))),(0,n.kt)("p",null,"Returns:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Return value depends on the ",(0,n.kt)("em",{parentName:"li"},"loader object")," category")),(0,n.kt)("p",null,"Notes:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"If multiple ",(0,n.kt)("inlineCode",{parentName:"li"},"loaders")," are provided (or pre-registered), an attempt will be made to autodetect which loader is appropriate for the file (using url extension and header matching).")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"Response")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"fetch")," response object returned by e.g. ",(0,n.kt)("inlineCode",{parentName:"td"},"fetchFile")," or ",(0,n.kt)("inlineCode",{parentName:"td"},"fetch"),"."),(0,n.kt)("td",{parentName:"tr",align:null},"Data will be streamed from the ",(0,n.kt)("inlineCode",{parentName:"td"},"response.body")," stream.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"ArrayBuffer")),(0,n.kt)("td",{parentName:"tr",align:null},"Parse from binary data in an array buffer"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"String")),(0,n.kt)("td",{parentName:"tr",align:null},"Parse from text data in a string."),(0,n.kt)("td",{parentName:"tr",align:null},"Only works for loaders that support textual input.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"converted into async iterators behind the scenes."),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"File")),(0,n.kt)("td",{parentName:"tr",align:null},"A browser file object (from drag-and-drop or file selection operations)."),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"Promise")),(0,n.kt)("td",{parentName:"tr",align:null},"A promise that resolves to any of the other supported data types can also be supplied."),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("p",null,"| ",(0,n.kt)("inlineCode",{parentName:"p"},"Iterator")," | Iterator that yields binary (",(0,n.kt)("inlineCode",{parentName:"p"},"ArrayBuffer"),") chunks or string chunks | string chunks only work for loaders that support textual input. |\n| ",(0,n.kt)("inlineCode",{parentName:"p"},"AsyncIterator")," | iterator that yields promises that resolve to binary (",(0,n.kt)("inlineCode",{parentName:"p"},"ArrayBuffer"),") chunks or string chunks. |"),(0,n.kt)("p",null,"Note that additional data types can be converted to ",(0,n.kt)("inlineCode",{parentName:"p"},"Response")," objects and used with ",(0,n.kt)("inlineCode",{parentName:"p"},"parse"),", e.g. with ",(0,n.kt)("inlineCode",{parentName:"p"},"new Response(new FormData(...))"),". See browser documentation for the ",(0,n.kt)("inlineCode",{parentName:"p"},"Response")," class for more details."))}m.isMDXComponent=!0}}]);