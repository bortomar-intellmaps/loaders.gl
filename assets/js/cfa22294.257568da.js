"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[9255],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),p=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},s="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=p(a),u=r,g=s["".concat(d,".").concat(u)]||s[u]||k[u]||l;return a?n.createElement(g,i(i({ref:t},m),{},{components:a})):n.createElement(g,i({ref:t},m))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[s]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},85464:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const l={},i="Upgrade Guide",o={unversionedId:"upgrade-guide",id:"upgrade-guide",title:"Upgrade Guide",description:"Upgrading to v3.4",source:"@site/../docs/upgrade-guide.md",sourceDirName:".",slug:"/upgrade-guide",permalink:"/docs/upgrade-guide",draft:!1,editUrl:"https://github.com/visgl/loaders.gl/tree/master/website/../docs/upgrade-guide.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"What's New",permalink:"/docs/whats-new"},next:{title:"Get Started",permalink:"/docs/developer-guide/get-started"}},d={},p=[{value:"Upgrading to v3.4",id:"upgrading-to-v34",level:2},{value:"Upgrading to v3.2",id:"upgrading-to-v32",level:2},{value:"Upgrading to v3.0",id:"upgrading-to-v30",level:2},{value:"Upgrading to v2.3",id:"upgrading-to-v23",level:2},{value:"Upgrading to v2.2",id:"upgrading-to-v22",level:2},{value:"Upgrading to v2.1",id:"upgrading-to-v21",level:2},{value:"Upgrading to v2.0",id:"upgrading-to-v20",level:2},{value:"<code>@loaders.gl/core</code>",id:"loadersglcore",level:3},{value:"<code>@loaders.gl/images</code>",id:"loadersglimages",level:3},{value:"Loader Objects",id:"loader-objects",level:3},{value:"<code>@loaders.gl/gltf</code>",id:"loadersglgltf",level:3},{value:"<code>@loaders.gl/draco</code>",id:"loadersgldraco",level:3},{value:"Loader Objects",id:"loader-objects-1",level:3},{value:"Upgrading from v1.2 to v1.3",id:"upgrading-from-v12-to-v13",level:2},{value:"Upgrading from v1.0 to v1.1",id:"upgrading-from-v10-to-v11",level:2},{value:"@loaders.gl/core",id:"loadersglcore-1",level:3},{value:"@loaders.gl/images",id:"loadersglimages-1",level:3},{value:"@loaders.gl/gltf",id:"loadersglgltf-1",level:3},{value:"v1.0",id:"v10",level:2}],m={toc:p},s="wrapper";function k(e){let{components:t,...a}=e;return(0,r.kt)(s,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"upgrade-guide"},"Upgrade Guide"),(0,r.kt)("h2",{id:"upgrading-to-v34"},"Upgrading to v3.4"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"WMSService")," - the ",(0,r.kt)("inlineCode",{parentName:"li"},"srs")," parameters has been renamed to ",(0,r.kt)("inlineCode",{parentName:"li"},"crs")," preferring the WMS 1.3.0 conventions.")),(0,r.kt)("h2",{id:"upgrading-to-v32"},"Upgrading to v3.2"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"@loaders.gl/geopackage")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The default data format returned is now ",(0,r.kt)("inlineCode",{parentName:"li"},"options.gis.format: 'tables'"),", which returns the type ",(0,r.kt)("inlineCode",{parentName:"li"},"Tables<ObjectRowTable>"),", where the ",(0,r.kt)("inlineCode",{parentName:"li"},"data")," of each table is an array of GeoJSON features. (The ",(0,r.kt)("inlineCode",{parentName:"li"},"Tables")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"ObjectRowTable")," types are exported from ",(0,r.kt)("inlineCode",{parentName:"li"},"@loaders.gl/schema"),".) You can use ",(0,r.kt)("inlineCode",{parentName:"li"},"options.gis.format: 'geojson'")," to return an object mapping table names to an array of GeoJSON features.")),(0,r.kt)("h2",{id:"upgrading-to-v30"},"Upgrading to v3.0"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Platform Support Updates")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Node.js 10 is no longer supported (LTS maintenance of Node.js 10 ended in May 2021)."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"module")," entry point in the published module is no longer transpiled to ES5 as modern JavaScript is supported now support recent evergreen browsers resulting bundle size reduction and better performance. The ",(0,r.kt)("inlineCode",{parentName:"li"},"main")," entry point is still fully transpiled to ",(0,r.kt)("inlineCode",{parentName:"li"},"es5"),", you can select this entry point using e.g. the ",(0,r.kt)("inlineCode",{parentName:"li"},"mainField")," option in webpack.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Worker Concurrency")),(0,r.kt)("p",null,"Default number of worker threads for each loader has been reduced from ",(0,r.kt)("inlineCode",{parentName:"p"},"5")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"3")," on non-mobile devices and to ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," on mobile devices to reduce memory use. Generally, increasing the number of workers has diminishing returns."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"@loaders.gl/core")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Passing ",(0,r.kt)("inlineCode",{parentName:"li"},"fetch")," options (such as ",(0,r.kt)("inlineCode",{parentName:"li"},"headers"),") to ",(0,r.kt)("inlineCode",{parentName:"li"},"load()")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"parse()")," etc. should now be done via the ",(0,r.kt)("inlineCode",{parentName:"li"},"options.fetch")," options object (e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"options.fetch.headers"),"). Specifying ",(0,r.kt)("inlineCode",{parentName:"li"},"fetch")," options on the root options object was deprecated in v2.3 and is no longer supported in v3.0.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"@loaders.gl/compression")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"Transform")," API in v2.3 has been replaced with ",(0,r.kt)("inlineCode",{parentName:"li"},"Compression")," classes that handle both compression and decompression. Please refer to the documentation.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"@loaders.gl/crypto")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"Transform")," API in v2.3 has been replaced with ",(0,r.kt)("inlineCode",{parentName:"li"},"Hash")," classes that handle both compression and decompression. Please refer to the documentation.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"@loaders.gl/csv")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The format of parsed data (i.e. whether table rows are objects or arrays) is now controlled by ",(0,r.kt)("inlineCode",{parentName:"li"},"options.csv.shape")," instead of being dynamically selected based on whether the CSV file has a header row. The default ",(0,r.kt)("inlineCode",{parentName:"li"},"shape")," is now ",(0,r.kt)("inlineCode",{parentName:"li"},"object-row-table"),". Default column names are generated if no header row is present. This is a breaking change when loading CSV files without header rows."),(0,r.kt)("li",{parentName:"ul"},"Duplicate column names will have a counter suffix added to ensure that they are unique. In rare cases this could be a breaking change.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"@loaders.gl/gltf")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GLTFScenegraph")," is updated to provide modifying capabilities. Signatures of some methods have been changed to use named parameters (rather than positional parameters)."),(0,r.kt)("li",{parentName:"ul"},"The deprecated ",(0,r.kt)("inlineCode",{parentName:"li"},"GLBBuilder")," class and ",(0,r.kt)("inlineCode",{parentName:"li"},"encodeGLTFSync")," functions have now been removed.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"@loaders.gl/basis")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Module has been moved to ",(0,r.kt)("inlineCode",{parentName:"li"},"@loaders.gl/textures"),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"@loaders.gl/images")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The texture API ",(0,r.kt)("inlineCode",{parentName:"li"},"loadImage"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"loadImageArray"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"loadImageCube")," has been moved to the new ",(0,r.kt)("inlineCode",{parentName:"li"},"@loaders.gl/textures")," module, and have been renamed to ",(0,r.kt)("inlineCode",{parentName:"li"},"loadImageTexture*"),"."),(0,r.kt)("li",{parentName:"ul"},"The binary image API has been consolidated in a single function ",(0,r.kt)("inlineCode",{parentName:"li"},"getBinaryImageMetadata()"),":"),(0,r.kt)("li",{parentName:"ul"},"A number of previously deprecated exports have been removed:")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Export"),(0,r.kt)("th",{parentName:"tr",align:null},"Replacement"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"isBinaryImage(arrayBuffer)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Boolean(getBinaryImageMetadata(arrayBuffer))"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"getBinaryImageMIMEType(arrayBuffer)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"getBinaryImageMetadata(arrayBuffer)?.mimeType"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"getBinaryImageSize(arrayBuffer)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"getBinaryImageMetadata(arrayBuffer)?.{width, height}"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"HTMLImageLoader")),(0,r.kt)("td",{parentName:"tr",align:null},"Use ",(0,r.kt)("inlineCode",{parentName:"td"},"ImageLoader")," with options ",(0,r.kt)("inlineCode",{parentName:"td"},"{image: type: 'image'}"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"getDefaultImageType()")),(0,r.kt)("td",{parentName:"tr",align:null},"N/A")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"getSupportedImageType(imageType?)")," NA"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"@loaders.gl/kml")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"KMLLoader"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"GPXLoader"),", and ",(0,r.kt)("inlineCode",{parentName:"li"},"TCXLoader")," now require a value for ",(0,r.kt)("inlineCode",{parentName:"li"},"options.gis.format"),'. Previously, the lack of a value would return data in "raw" format, i.e. not normalized to GeoJSON. To return GeoJSON-formatted data, use ',(0,r.kt)("inlineCode",{parentName:"li"},"options.gis.format: 'geojson'"),". Other options are ",(0,r.kt)("inlineCode",{parentName:"li"},"binary")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"raw"),"."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"kml.normalize")," option has been deprecated. When ",(0,r.kt)("inlineCode",{parentName:"li"},"options.gis.format")," is ",(0,r.kt)("inlineCode",{parentName:"li"},"geojson"),", coordinates will always be in longitude-latitude ordering.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"@loaders.gl/loader-utils")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"createWorker()")," now creates a generic worker. For loader workers use the new ",(0,r.kt)("inlineCode",{parentName:"li"},"createLoaderWorker()")," function.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"@loaders.gl/tiles-3d-loader")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Added ",(0,r.kt)("inlineCode",{parentName:"li"},"featureIds")," attribute to i3s tile content. It is an array of feature ids which specify which feature each vertex belongs to. Can be used for picking functionality.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"@loaders.gl/tables")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The (undocumented) ",(0,r.kt)("inlineCode",{parentName:"li"},"@loaders.gl/tables")," module has been renamed to ",(0,r.kt)("inlineCode",{parentName:"li"},"@loaders.gl/schema"),".")),(0,r.kt)("h2",{id:"upgrading-to-v23"},"Upgrading to v2.3"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"@loaders.gl/core"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"selectLoader()")," is now async and returns a ",(0,r.kt)("inlineCode",{parentName:"li"},"Promise")," that resolves to a loader."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"selectLoaderSync()")," is available for situations when calling an async function is inconvenient."),(0,r.kt)("li",{parentName:"ul"},"Passing ",(0,r.kt)("inlineCode",{parentName:"li"},"fetch")," options to ",(0,r.kt)("inlineCode",{parentName:"li"},"load()")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"parse()")," etc. should now be done via the ",(0,r.kt)("inlineCode",{parentName:"li"},"options.fetch")," sub-options object. fetch options on the root object are now deprecated.")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"@loaders.gl/kml"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"KMLAsGeoJsonLoader")," has been removed, use ",(0,r.kt)("inlineCode",{parentName:"li"},"KMLLoader"),", with ",(0,r.kt)("inlineCode",{parentName:"li"},"options.gis.format: 'geojson'"),".")),(0,r.kt)("h2",{id:"upgrading-to-v22"},"Upgrading to v2.2"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"@loaders.gl/core"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"selectLoader")," is no longer experimental. If you were using the experimental export, replace ",(0,r.kt)("inlineCode",{parentName:"li"},"_selectLoader")," with ",(0,r.kt)("inlineCode",{parentName:"li"},"selectLoader"),". Also note that argument order has changed and now aligns with ",(0,r.kt)("inlineCode",{parentName:"li"},"load")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"parse")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"parseInBatchesSync")," has been removed, all batched parsing is now performed asynchronously.")),(0,r.kt)("p",null,"Some iterator utilities that are mostly used internally have been changed."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Function"),(0,r.kt)("th",{parentName:"tr",align:null},"Replacement / Status"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"makeChunkIterator")),(0,r.kt)("td",{parentName:"tr",align:null},"combined into ",(0,r.kt)("inlineCode",{parentName:"td"},"makeIterator"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"makeStreamIterator")),(0,r.kt)("td",{parentName:"tr",align:null},"combined into ",(0,r.kt)("inlineCode",{parentName:"td"},"makeIterator"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"textDecoderAsyncIterator")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"makeTextDecoderIterator"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"lineAsyncIterator")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"makeLineIterator"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"numberedLineAsyncIterator")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"makeNumberedLineIterator"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"getStreamIterator")),(0,r.kt)("td",{parentName:"tr",align:null},"Deprecated in 2.1, now removed in 2.2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"contatenateAsyncIterator")),(0,r.kt)("td",{parentName:"tr",align:null},"Deprecated in 2.1, now removed in 2.2")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"@loaders.gl/csv"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Header auto-detection now requires ",(0,r.kt)("inlineCode",{parentName:"li"},"options.csv.header")," to be set to ",(0,r.kt)("inlineCode",{parentName:"li"},"'auto'")," instead of ",(0,r.kt)("inlineCode",{parentName:"li"},"undefined"),". ",(0,r.kt)("inlineCode",{parentName:"li"},"'auto'")," is the new default value for this option, so this change is unlikely to affect applications.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"@loaders.gl/json"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The experimental ",(0,r.kt)("inlineCode",{parentName:"li"},"json._rootObjectBatches")," option is now deprecated. Use the top-level ",(0,r.kt)("inlineCode",{parentName:"li"},"metadata: true")," option instead. Note that the ",(0,r.kt)("inlineCode",{parentName:"li"},"batchType")," names have also changed, see the JSONLoader docs for details.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"@loaders.gl/ply"))),(0,r.kt)("p",null,"The experimental streaming ",(0,r.kt)("inlineCode",{parentName:"p"},"_PLYStreamingLoader")," has been removed. Use the non-streaming ",(0,r.kt)("inlineCode",{parentName:"p"},"PLYLoader")," instead."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"@loaders.gl/images"))),(0,r.kt)("p",null,"The new function ",(0,r.kt)("inlineCode",{parentName:"p"},"getBinaryImageMetadata()")," replaces ",(0,r.kt)("inlineCode",{parentName:"p"},"isBinaryImage()"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"getBinaryImageSize()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"getBinaryImageMIMEType()"),". The old functions are now deprecated, but still available."),(0,r.kt)("h2",{id:"upgrading-to-v21"},"Upgrading to v2.1"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"@loaders.gl/core"))),(0,r.kt)("p",null,"Some iterator helper functions have been renamed, the old naming is now deprecated."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Old Name"),(0,r.kt)("th",{parentName:"tr",align:null},"New Name"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"getStreamIterator")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"makeStreamIterator"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"contatenateAsyncIterator")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"concatenateChunksAsync"))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"@loaders.gl/json"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Experimental exports have been removed ",(0,r.kt)("inlineCode",{parentName:"li"},"JSONParser"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"StreamingJSONParser"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"ClarinetParser"),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"@loaders.gl/images"))),(0,r.kt)("p",null,"The experimental ImageLoaders for individual formats introduced in 2.0 have been removed, use ",(0,r.kt)("inlineCode",{parentName:"p"},"ImageLoader")," for all formats.\n",(0,r.kt)("inlineCode",{parentName:"p"},"@loaders.gl/images")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"getImageData(image)")," now returns an object with ",(0,r.kt)("inlineCode",{parentName:"li"},"{data, width, height}")," instead of just the ",(0,r.kt)("inlineCode",{parentName:"li"},"data")," array. This small breaking change ensures that the concept of ",(0,r.kt)("em",{parentName:"li"},"image data")," is consistent across the API."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ImageLoader"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"options.image.type"),": The ",(0,r.kt)("inlineCode",{parentName:"li"},"html")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"ndarray")," image types are now deprecated and replaced with ",(0,r.kt)("inlineCode",{parentName:"li"},"image")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"data")," respectively.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"@loaders.gl/3d-tiles"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Tileset3DLoader")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Tile3DLoader")," are replaced by ",(0,r.kt)("inlineCode",{parentName:"p"},"Tiles3DLoader"),", which supports loading both a 3D tileset file and a tile. Check ",(0,r.kt)("inlineCode",{parentName:"p"},"loaders.gl/3d-tiles")," for loaded data format."),(0,r.kt)("h2",{id:"upgrading-to-v20"},"Upgrading to v2.0"),(0,r.kt)("p",null,"Version 2.0 is a major release that consolidates functionality and APIs, and a number of deprecated functions have been removed."),(0,r.kt)("p",null,"Some general changes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"All exported loader and writer objects now expose a ",(0,r.kt)("inlineCode",{parentName:"li"},"mimeType")," field. This field is not yet used by ",(0,r.kt)("inlineCode",{parentName:"li"},"@loaders.gl/core")," but is available for applications (e.g. see ",(0,r.kt)("inlineCode",{parentName:"li"},"selectLoader"),")."),(0,r.kt)("li",{parentName:"ul"},"All (non-worker) loaders are now required to expose a ",(0,r.kt)("inlineCode",{parentName:"li"},"parse")," function (in addition to any more specialized ",(0,r.kt)("inlineCode",{parentName:"li"},"parseSync/parseText/parseInBatches")," functions). This simplifies using loaders without ",(0,r.kt)("inlineCode",{parentName:"li"},"@loaders.gl/core"),", which can reduce footprint in small applications.")),(0,r.kt)("h3",{id:"loadersglcore"},(0,r.kt)("inlineCode",{parentName:"h3"},"@loaders.gl/core")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Removal"),(0,r.kt)("th",{parentName:"tr",align:null},"Replacement"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"TextEncoder")),(0,r.kt)("td",{parentName:"tr",align:null},"Use global ",(0,r.kt)("inlineCode",{parentName:"td"},"TextEncoder")," instead and ",(0,r.kt)("inlineCode",{parentName:"td"},"@loaders.gl/polyfills")," if needed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"TextDecoder")),(0,r.kt)("td",{parentName:"tr",align:null},"Use global ",(0,r.kt)("inlineCode",{parentName:"td"},"TextDecoder")," instead and ",(0,r.kt)("inlineCode",{parentName:"td"},"@loaders.gl/polyfills")," if needed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"createReadStream")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"fetch().then(resp => resp.body)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"parseFile")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"parse"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"parseFileSync")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"parseSync"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"loadFile")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"load"))))),(0,r.kt)("h3",{id:"loadersglimages"},(0,r.kt)("inlineCode",{parentName:"h3"},"@loaders.gl/images")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Removal"),(0,r.kt)("th",{parentName:"tr",align:null},"Replacement"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ImageHTMLLoader")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ImageLoader")," with ",(0,r.kt)("inlineCode",{parentName:"td"},"options.images.format: 'image'"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ImageBitmapLoader")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ImageLoader")," with ",(0,r.kt)("inlineCode",{parentName:"td"},"options.images.format: 'imagebitmap'"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"decodeImage")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"parse(arrayBuffer, ImageLoader)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"isImage")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"isBinaryImage"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"getImageMIMEType")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"getBinaryImageMIMEType"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"getImageSize")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"getBinaryImageSize"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"getImageMetadata")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"getBinaryImageMIMEType")," + ",(0,r.kt)("inlineCode",{parentName:"td"},"getBinaryImageSize"))))),(0,r.kt)("h3",{id:"loader-objects"},"Loader Objects"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Loaders can no longer have a ",(0,r.kt)("inlineCode",{parentName:"li"},"loadAndParse")," method. Remove it, and just make sure you define ",(0,r.kt)("inlineCode",{parentName:"li"},"parse")," on your loaders instead.")),(0,r.kt)("h3",{id:"loadersglgltf"},(0,r.kt)("inlineCode",{parentName:"h3"},"@loaders.gl/gltf")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"GLTFLoader")," now always uses the new v2 parser, and the original ",(0,r.kt)("inlineCode",{parentName:"p"},"GLTFParser")," has been removed."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Removal"),(0,r.kt)("th",{parentName:"tr",align:null},"Replacement"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"GLBParser")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"GLBLoader"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"GLBBuilder")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"GLBWriter"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"GLTFParser")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"GLTFLoader"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"GLTFBuilder")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"GLTFWriter"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"packBinaryJson")),(0,r.kt)("td",{parentName:"tr",align:null},"N/A")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"unpackBinaryJson")),(0,r.kt)("td",{parentName:"tr",align:null},"N/A")))),(0,r.kt)("p",null,'Note that automatic packing of binary data (aka "packed JSON" support) was only implemented in the v1 ',(0,r.kt)("inlineCode",{parentName:"p"},"GLTFLoader")," and has thus also been removed. Experience showed that packing of binary data for ",(0,r.kt)("inlineCode",{parentName:"p"},".glb")," files is best handled by applications."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"GLTFLoader option changes")),(0,r.kt)("p",null,"The foillowing top-level options are deprecated and will be removed in v2.0"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Removed Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Replacement"),(0,r.kt)("th",{parentName:"tr",align:null},"Descriptions"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"gltf.parserVersion")),(0,r.kt)("td",{parentName:"tr",align:null},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},"No longer needs to be specied, only the new gltf parser is available.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"fetchLinkedResources")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"gltf.fetchBuffers"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"gltf.fetchImages")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"fetchImages")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"gltf.fetchImages")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"createImages")),(0,r.kt)("td",{parentName:"tr",align:null},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},"Images are now always created when fetched")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"decompress")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"gltf.decompressMeshes")),(0,r.kt)("td",{parentName:"tr",align:null},"Decompress Draco compressed meshes (if DracoLoader available).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DracoLoader")),(0,r.kt)("td",{parentName:"tr",align:null},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},"Supply ",(0,r.kt)("inlineCode",{parentName:"td"},"DracoLoader")," to ",(0,r.kt)("inlineCode",{parentName:"td"},"parse"),", or call ",(0,r.kt)("inlineCode",{parentName:"td"},"registerLoaders(pDracoLoader])"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"postProcess")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"gltf.postProcess")),(0,r.kt)("td",{parentName:"tr",align:null},"Perform additional post processing before returning data.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"uri")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"baseUri")),(0,r.kt)("td",{parentName:"tr",align:null},"Auto-populated when loading from a url-equipped source")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"fetch")),(0,r.kt)("td",{parentName:"tr",align:null},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},"fetch is automatically available to sub-loaders.")))),(0,r.kt)("h3",{id:"loadersgldraco"},(0,r.kt)("inlineCode",{parentName:"h3"},"@loaders.gl/draco")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Removal"),(0,r.kt)("th",{parentName:"tr",align:null},"Replacement"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DracoParser")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DracoLoader"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DracoBuilder")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DracoWriter"))))),(0,r.kt)("h3",{id:"loader-objects-1"},"Loader Objects"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Loaders no longer have a ",(0,r.kt)("inlineCode",{parentName:"li"},"loadAndParse")," removed. Just define ",(0,r.kt)("inlineCode",{parentName:"li"},"parse")," on your loaders.")),(0,r.kt)("h2",{id:"upgrading-from-v12-to-v13"},"Upgrading from v1.2 to v1.3"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"As with v1.1, ",(0,r.kt)("inlineCode",{parentName:"li"},"GLTFLoader")," will no longer return a ",(0,r.kt)("inlineCode",{parentName:"li"},"GLTFParser")," object in v2.0. A new option ",(0,r.kt)("inlineCode",{parentName:"li"},"options.gltf.parserVersion: 2")," is provided to opt in to the new behavior now.")),(0,r.kt)("h2",{id:"upgrading-from-v10-to-v11"},"Upgrading from v1.0 to v1.1"),(0,r.kt)("p",null,"A couple of functions have been deprecated and will be removed in v2.0. They now emit console warnings. Start replacing your use of these functions now to remove the console warnings and ensure a smooth future upgrade to v2.0."),(0,r.kt)("p",null,"Also, Node support now requires installing ",(0,r.kt)("inlineCode",{parentName:"p"},"@loaders.gl/polyfills")," before use."),(0,r.kt)("h3",{id:"loadersglcore-1"},"@loaders.gl/core"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Removal: Node support for ",(0,r.kt)("inlineCode",{parentName:"li"},"fetchFile")," now requires importing ",(0,r.kt)("inlineCode",{parentName:"li"},"@loaders.gl/polyfills")," before use."),(0,r.kt)("li",{parentName:"ul"},"Removal: Node support for ",(0,r.kt)("inlineCode",{parentName:"li"},"TextEncoder"),", and ",(0,r.kt)("inlineCode",{parentName:"li"},"TextDecoder")," now requires importing ",(0,r.kt)("inlineCode",{parentName:"li"},"@loaders.gl/polyfills")," before use."),(0,r.kt)("li",{parentName:"ul"},"Deprecation: ",(0,r.kt)("inlineCode",{parentName:"li"},"TextEncoder")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"TextDecoder")," will not be exported from ",(0,r.kt)("inlineCode",{parentName:"li"},"loaders.gl/core")," in v2.0.")),(0,r.kt)("h3",{id:"loadersglimages-1"},"@loaders.gl/images"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Removal: Node support for images now requires importing ",(0,r.kt)("inlineCode",{parentName:"li"},"@loaders.gl/polyfills")," before use.")),(0,r.kt)("h3",{id:"loadersglgltf-1"},"@loaders.gl/gltf"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Deprecation: ",(0,r.kt)("inlineCode",{parentName:"li"},"GLBParser"),"/",(0,r.kt)("inlineCode",{parentName:"li"},"GLBBuilder")," - These will be merged into GLTF classes.."),(0,r.kt)("li",{parentName:"ul"},"Deprecation: ",(0,r.kt)("inlineCode",{parentName:"li"},"GLTFParser"),"/",(0,r.kt)("inlineCode",{parentName:"li"},"GLTFBuilder")," - The new ",(0,r.kt)("inlineCode",{parentName:"li"},"GLTF")," class can hold GLTF data and lets application access/modify it."),(0,r.kt)("li",{parentName:"ul"},"Deprecation: ",(0,r.kt)("inlineCode",{parentName:"li"},"GLTFLoader")," will no longer return a ",(0,r.kt)("inlineCode",{parentName:"li"},"GLTFParser")," object in v2.0. Instead it will return a pure javascript object containing the parse json and any binary chunks. This object can be accessed through the ",(0,r.kt)("inlineCode",{parentName:"li"},"GLTF")," class. Set ",(0,r.kt)("inlineCode",{parentName:"li"},"options.GLTFParser")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"false")," to opt in to the new behavior now.")),(0,r.kt)("h2",{id:"v10"},"v1.0"),(0,r.kt)("p",null,"First official release of loaders.gl."))}k.isMDXComponent=!0}}]);