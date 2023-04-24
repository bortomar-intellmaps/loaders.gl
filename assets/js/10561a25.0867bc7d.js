"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[2058],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>N});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),p=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},k="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),k=p(a),u=r,N=k["".concat(d,".").concat(u)]||k[u]||s[u]||l;return a?n.createElement(N,i(i({ref:t},m),{},{components:a})):n.createElement(N,i({ref:t},m))}));function N(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[k]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},93030:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const l={},i="Geospatial Loaders",o={unversionedId:"specifications/category-gis",id:"specifications/category-gis",title:"Geospatial Loaders",description:"The Geospatial category is experimental",source:"@site/../docs/specifications/category-gis.md",sourceDirName:"specifications",slug:"/specifications/category-gis",permalink:"/docs/specifications/category-gis",draft:!1,editUrl:"https://github.com/visgl/loaders.gl/tree/master/website/../docs/specifications/category-gis.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Image Loaders",permalink:"/docs/specifications/category-image"},next:{title:"Mesh and PointCloud Loaders",permalink:"/docs/specifications/category-mesh"}},d={},p=[{value:"Geospatial Category Loaders",id:"geospatial-category-loaders",level:2},{value:"Data Format",id:"data-format",level:2},{value:"Data Structure",id:"data-structure",level:2},{value:"GeoJSON",id:"geojson",level:3},{value:"Binary",id:"binary",level:3},{value:"Raw",id:"raw",level:3},{value:"GeoJSON Conversion",id:"geojson-conversion",level:3}],m={toc:p},k="wrapper";function s(e){let{components:t,...a}=e;return(0,r.kt)(k,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"geospatial-loaders"},"Geospatial Loaders"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The Geospatial category is experimental")),(0,r.kt)("p",null,"Several geospatial formats return data in the form of lists of lng/lat encoded geometric objects."),(0,r.kt)("h2",{id:"geospatial-category-loaders"},"Geospatial Category Loaders"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Loader"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"geojson")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"binary")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"raw")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"batch")),(0,r.kt)("th",{parentName:"tr",align:null},"comments"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/modules/kml/api-reference/gpx-loader"},(0,r.kt)("inlineCode",{parentName:"a"},"GPXLoader"))),(0,r.kt)("td",{parentName:"tr",align:null},"Layers"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"FeatureCollection")),(0,r.kt)("td",{parentName:"tr",align:null},"attributes object"),(0,r.kt)("td",{parentName:"tr",align:null},"parsed XML"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/modules/kml/api-reference/kml-loader"},(0,r.kt)("inlineCode",{parentName:"a"},"KMLLoader"))),(0,r.kt)("td",{parentName:"tr",align:null},"Layers"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"FeatureCollection")),(0,r.kt)("td",{parentName:"tr",align:null},"attributes object"),(0,r.kt)("td",{parentName:"tr",align:null},"parsed XML"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/modules/kml/api-reference/tcx-loader"},(0,r.kt)("inlineCode",{parentName:"a"},"TCXLoader"))),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"FeatureCollection")),(0,r.kt)("td",{parentName:"tr",align:null},"attributes object"),(0,r.kt)("td",{parentName:"tr",align:null},"parsed XML"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"GeoJSONLoader")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"FeatureCollection")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ShapefileLoader")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"FeatureCollection")),(0,r.kt)("td",{parentName:"tr",align:null},"attributes object"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"SHPLoader")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"FeatureCollection")),(0,r.kt)("td",{parentName:"tr",align:null},"attributes object"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"only geometries"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"FlatGeobufLoader")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"FeatureCollection")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/modules/mvt/api-reference/mvt-loader"},(0,r.kt)("inlineCode",{parentName:"a"},"MVTLoader"))),(0,r.kt)("td",{parentName:"tr",align:null},"Layers"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"FeatureCollections")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"GeoPackageLoader")),(0,r.kt)("td",{parentName:"tr",align:null},"Layers"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"FeatureCollections")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/modules/wkt/api-reference/wkb-loader"},(0,r.kt)("inlineCode",{parentName:"a"},"WKBLoader"))),(0,r.kt)("td",{parentName:"tr",align:null},"Single"),(0,r.kt)("td",{parentName:"tr",align:null},"a single geojson geometry (not feature)"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"only geometry"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/modules/wkt/api-reference/wkt-loader"},(0,r.kt)("inlineCode",{parentName:"a"},"WKTLoader"))),(0,r.kt)("td",{parentName:"tr",align:null},"Single"),(0,r.kt)("td",{parentName:"tr",align:null},"a single geojson geometry (not feature)"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"only geometry"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h2",{id:"data-format"},"Data Format"),(0,r.kt)("p",null,"For geospatial formats that contain a single layer:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"category"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"string")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"gis")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"schema?"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"Schema")," - Apache Arrow style schema"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"data"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"*")," - Data is formatted according to ",(0,r.kt)("inlineCode",{parentName:"li"},"options.gis.format")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"format"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"string")," - The encoding of ",(0,r.kt)("inlineCode",{parentName:"li"},"data")," layers, corresponds to ",(0,r.kt)("inlineCode",{parentName:"li"},"options.gis.format"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"loaderMetadata?"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"object")," - Loader specific metadata, see documentation for each loader")),(0,r.kt)("p",null,"For geospatial loaders that contain multiple layers:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"category"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"string")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"gis-layers")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"layers"),": A map of layers keyed by layer names. Each layer is formatted according to ",(0,r.kt)("inlineCode",{parentName:"li"},"options.gis.format")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"loaderMetadata?"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"object")," - Top-level loader specific metadata, see documentation for each loader")),(0,r.kt)("p",null,"For geospatial loaders that contain a single geometry:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"category"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"string")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"gis-geometry")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"schema?"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"Schema")," - Apache Arrow style schema"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"data"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"*")," - Data is formatted according to ",(0,r.kt)("inlineCode",{parentName:"li"},"options.gis.format")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"format"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"string")," - The encoding of ",(0,r.kt)("inlineCode",{parentName:"li"},"data")," layers, corresponds to ",(0,r.kt)("inlineCode",{parentName:"li"},"options.gis.format"),".")),(0,r.kt)("h2",{id:"data-structure"},"Data Structure"),(0,r.kt)("h3",{id:"geojson"},"GeoJSON"),(0,r.kt)("h3",{id:"binary"},"Binary"),(0,r.kt)("p",null,"A JavaScript object with a number of top-level array-valued fields:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"points")),(0,r.kt)("td",{parentName:"tr",align:null},"A ",(0,r.kt)("a",{parentName:"td",href:"https://geojson.org/"},"GeoJson")," FeatureCollection.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"lines")),(0,r.kt)("td",{parentName:"tr",align:null},"A ",(0,r.kt)("a",{parentName:"td",href:"https://geojson.org/"},"GeoJson")," FeatureCollection.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"polygons")),(0,r.kt)("td",{parentName:"tr",align:null},"A ",(0,r.kt)("a",{parentName:"td",href:"https://geojson.org/"},"GeoJson")," FeatureCollection.")))),(0,r.kt)("h3",{id:"raw"},"Raw"),(0,r.kt)("h3",{id:"geojson-conversion"},"GeoJSON Conversion"),(0,r.kt)("p",null,"Geospatial category data can be converted to GeoJSON (sometimes with a loss of information). Most geospatial applications can consume geojson."))}s.isMDXComponent=!0}}]);