"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[5951],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(f,l(l({ref:t},s),{},{components:r})):n.createElement(f,l({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},22373:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const i={},l="ZipWriter",o={unversionedId:"modules/zip/api-reference/zip-writer",id:"modules/zip/api-reference/zip-writer",title:"ZipWriter",description:"Encodes a filemap into a Zip Archive. Returns an ArrayBuffer that is a valid Zip Archive and can be written to file.",source:"@site/../docs/modules/zip/api-reference/zip-writer.md",sourceDirName:"modules/zip/api-reference",slug:"/modules/zip/api-reference/zip-writer",permalink:"/docs/modules/zip/api-reference/zip-writer",draft:!1,editUrl:"https://github.com/visgl/loaders.gl/tree/master/website/../docs/modules/zip/api-reference/zip-writer.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ZipLoader",permalink:"/docs/modules/zip/api-reference/zip-loader"},next:{title:"tile-converter",permalink:"/docs/modules/tile-converter/cli-reference/tile-converter"}},p={},c=[{value:"Usage",id:"usage",level:2},{value:"File Format",id:"file-format",level:2},{value:"Options",id:"options",level:2}],s={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"zipwriter"},"ZipWriter"),(0,a.kt)("p",null,"Encodes a filemap into a Zip Archive. Returns an ",(0,a.kt)("inlineCode",{parentName:"p"},"ArrayBuffer")," that is a valid Zip Archive and can be written to file."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Loader"),(0,a.kt)("th",{parentName:"tr",align:null},"Characteristic"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"File Extension"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},".zip"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"File Type"),(0,a.kt)("td",{parentName:"tr",align:null},"Binary")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Data Format"),(0,a.kt)("td",{parentName:"tr",align:null},'"File Map"')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"File Format"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://en.wikipedia.org/wiki/Zip_(file_format)"},"ZIP Archive"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Encoder Type"),(0,a.kt)("td",{parentName:"tr",align:null},"Asynchronous")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Worker Thread"),(0,a.kt)("td",{parentName:"tr",align:null},"No")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Streaming"),(0,a.kt)("td",{parentName:"tr",align:null},"No")))),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import {encode, writeFile} from '@loaders.gl/core';\nimport {ZipWriter} from '@loaders.gl/zip';\n\nconst FILEMAP = {\n  filename1: arrayBuffer1,\n  'directory/filename2': ...\n};\n\nconst arrayBuffer = await encode(FILE_MAP, ZipWriter)\nwriteFile(zipFileName, arrayBuffer);\n")),(0,a.kt)("h2",{id:"file-format"},"File Format"),(0,a.kt)("p",null,"The file map is an object with keys representing file names or relative paths in the zip file, and values being the contents of each sub file (either ",(0,a.kt)("inlineCode",{parentName:"p"},"ArrayBuffer")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"String"),")."),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("p",null,"Options are forwarded to ",(0,a.kt)("a",{parentName:"p",href:"https://stuk.github.io/jszip/documentation/api_jszip/generate_async.html"},"JSZip.generateAsync"),", however type is always set to ",(0,a.kt)("inlineCode",{parentName:"p"},"arraybuffer")," to ensure compatibility with writer driver functions in ",(0,a.kt)("inlineCode",{parentName:"p"},"@loaders.gl/core"),"."))}d.isMDXComponent=!0}}]);