"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[5246],{33244:(e,s,o)=>{o.r(s),o.d(s,{assets:()=>i,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>t});var n=o(85893),d=o(11151);const r={},l="BSONLoader",c={id:"modules/bson/api-reference/bson-loader",title:"BSONLoader",description:"bson-logo",source:"@site/../docs/modules/bson/api-reference/bson-loader.md",sourceDirName:"modules/bson/api-reference",slug:"/modules/bson/api-reference/bson-loader",permalink:"/docs/modules/bson/api-reference/bson-loader",draft:!1,unlisted:!1,editUrl:"https://github.com/visgl/loaders.gl/tree/master/website/../docs/modules/bson/api-reference/bson-loader.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GeoArrowLoader",permalink:"/docs/modules/arrow/api-reference/geoarrow-loader"},next:{title:"BSONWriter",permalink:"/docs/modules/bson/api-reference/bson-writer"}},i={},t=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2}];function a(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"bsonloader",children:"BSONLoader"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"bson-logo",src:o(28853).Z+"",width:"717",height:"105"})}),"\n",(0,n.jsx)("p",{class:"badges",children:(0,n.jsx)("img",{src:"https://img.shields.io/badge/From-v3.4-blue.svg?style=flat-square",alt:"From-v3.4"})}),"\n",(0,n.jsxs)(s.p,{children:["This loader is part of the ",(0,n.jsx)(s.a,{href:"/docs/modules/bson",children:(0,n.jsx)(s.code,{children:"@loaders.gl/bson"})})," module."]}),"\n",(0,n.jsx)(s.p,{children:"Streaming loader for BSON encoded files."}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Loader"}),(0,n.jsx)(s.th,{children:"Characteristic"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"File Format"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"/docs/modules/bson/formats/bson",children:"BSON"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Data Format"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"/docs/specifications/category-json",children:"Unstructured/JSON"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"File Extension"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:".bson"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Media Type"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"application/bson"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"File Type"}),(0,n.jsx)(s.td,{children:"Binary"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Supported APIs"}),(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.code,{children:"load"}),", ",(0,n.jsx)(s.code,{children:"parse"}),", ",(0,n.jsx)(s.code,{children:"parseSync"})]})]})]})]}),"\n",(0,n.jsx)(s.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(s.p,{children:"For simple usage, you can load and parse a BSON file atomically:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-typescript",children:"import {BSONLoader} from '@loaders.gl/bson';\nimport {load} from '@loaders.gl/core';\n\nconst data = await load(url, BSONLoader, {bson: options});\n"})}),"\n",(0,n.jsx)(s.h2,{id:"options",children:"Options"}),"\n",(0,n.jsxs)(s.p,{children:["Supports table category options such as ",(0,n.jsx)(s.code,{children:"batchType"})," and ",(0,n.jsx)(s.code,{children:"batchSize"}),"."]}),"\n",(0,n.jsx)(s.table,{children:(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Option"}),(0,n.jsx)(s.th,{children:"From"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Default"}),(0,n.jsx)(s.th,{children:"Description"})]})})}),"\n",(0,n.jsxs)(s.p,{children:["Note: Currently passes through options to the underlying ",(0,n.jsx)(s.code,{children:"js-bson"})," module\nbut this may change in future versions and should not be relied upon."]})]})}function h(e={}){const{wrapper:s}={...(0,d.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},28853:(e,s,o)=>{o.d(s,{Z:()=>n});const n="data:image/png;base64,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"},11151:(e,s,o)=>{o.d(s,{Z:()=>c,a:()=>l});var n=o(67294);const d={},r=n.createContext(d);function l(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:l(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);