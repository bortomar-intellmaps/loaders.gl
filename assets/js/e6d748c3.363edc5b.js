"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[7161],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>v});var l=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,l,r=function(e,n){if(null==e)return{};var t,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=l.createContext({}),p=function(e){var n=l.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=p(e.components);return l.createElement(s.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},c=l.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(t),c=r,v=u["".concat(s,".").concat(c)]||u[c]||m[c]||a;return t?l.createElement(v,o(o({ref:n},d),{},{components:t})):l.createElement(v,o({ref:n},d))}));function v(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=c;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<a;p++)o[p]=t[p];return l.createElement.apply(null,o)}return l.createElement.apply(null,t)}c.displayName="MDXCreateElement"},23493:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var l=t(87462),r=(t(67294),t(3905));const a={},o="Development Environment",i={unversionedId:"developer-guide/dev-env",id:"developer-guide/dev-env",title:"Development Environment",description:"The master branch is the active development branch.",source:"@site/../docs/developer-guide/dev-env.md",sourceDirName:"developer-guide",slug:"/developer-guide/dev-env",permalink:"/docs/developer-guide/dev-env",draft:!1,editUrl:"https://github.com/visgl/loaders.gl/tree/master/website/../docs/developer-guide/dev-env.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Creating New Loaders and Writers",permalink:"/docs/developer-guide/creating-loaders-and-writers"},next:{title:"Binary Data",permalink:"/docs/developer-guide/concepts/binary-data"}},s={},p=[{value:"Running Tests",id:"running-tests",level:2},{value:"Environment Setup",id:"environment-setup",level:2},{value:"Develop on Windows",id:"develop-on-windows",level:3},{value:"Develop on Linux",id:"develop-on-linux",level:3},{value:"Appendix: Installing JavaScript Development Tools",id:"appendix-installing-javascript-development-tools",level:2},{value:"Install Node and NPM",id:"install-node-and-npm",level:3},{value:"Option: Install NVM",id:"option-install-nvm",level:3},{value:"Install yarn",id:"install-yarn",level:3},{value:"Install jq",id:"install-jq",level:3}],d={toc:p},u="wrapper";function m(e){let{components:n,...t}=e;return(0,r.kt)(u,(0,l.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"development-environment"},"Development Environment"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"master")," branch is the active development branch."),(0,r.kt)("p",null,"Building loaders.gl locally from the source requires node.js ",(0,r.kt)("inlineCode",{parentName:"p"},">=10"),".\nWe use ",(0,r.kt)("a",{parentName:"p",href:"https://yarnpkg.com/en/docs/install"},"yarn")," to manage the dependencies."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git checkout master\nyarn bootstrap\n")),(0,r.kt)("h2",{id:"running-tests"},"Running Tests"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"yarn bootstrap"),": Install and build workers etc. Run every time you pull a new branch."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"yarn lint"),": Check coding standards and formatting"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"yarn lint fix"),": Fix errors with formatting"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"yarn test node"),": Quick test run under Node.js"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"yarn test browser"),": Test run under browser, good for interactive debugging"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"yarn test"),": Run lint, node test, browser tests (in headless mode)")),(0,r.kt)("h2",{id:"environment-setup"},"Environment Setup"),(0,r.kt)("p",null,"Note that our primary development environment is MacOS, but it is also possible to build loaders.gl on Linux and Windows."),(0,r.kt)("h3",{id:"develop-on-windows"},"Develop on Windows"),(0,r.kt)("p",null,"It is possible to build loaders.gl on Windows 10, but not directly in the Windows command prompt. You will need to install a Linux command line environment."),(0,r.kt)("p",null,"First, install ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows/wsl/install-win10"},"WSL (Windows Subsystem for Linux)")," on Windows 10, and follow the ",(0,r.kt)("a",{parentName:"p",href:"#develop-on-linux"},"Linux")," directions."),(0,r.kt)("p",null,"Note that you may also need to make some decisions on where to place your code and whether to link the linux subsystem to your windows drives."),(0,r.kt)("p",null,"Once this is done, follow the instructions for developing on Linux."),(0,r.kt)("h3",{id:"develop-on-linux"},"Develop on Linux"),(0,r.kt)("p",null,"On Linux systems, the following packages are necessary for running webgl-based headless render tests."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"mesa-utils"),(0,r.kt)("li",{parentName:"ul"},"xvfb"),(0,r.kt)("li",{parentName:"ul"},"libgl1-mesa-dri"),(0,r.kt)("li",{parentName:"ul"},"libglapi-mesa"),(0,r.kt)("li",{parentName:"ul"},"libosmesa6"),(0,r.kt)("li",{parentName:"ul"},"libxi-dev")),(0,r.kt)("p",null,"To get the headless tests working: ",(0,r.kt)("inlineCode",{parentName:"p"},"export DISPLAY=:99.0; sh -e /etc/init.d/xvfb start")),(0,r.kt)("h2",{id:"appendix-installing-javascript-development-tools"},"Appendix: Installing JavaScript Development Tools"),(0,r.kt)("p",null,"You will of course need to install the basic JavaScript development tools. Unless you are new to JavaScript development you most likely already have these in place. The following should work on a linux system."),(0,r.kt)("h3",{id:"install-node-and-npm"},"Install Node and NPM"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt update\nsudo apt install nodejs\n")),(0,r.kt)("h3",{id:"option-install-nvm"},"Option: Install NVM"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"https://www.liquidweb.com/kb/how-to-install-nvm-node-version-manager-for-node-js-on-ubuntu-12-04-lts/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"https://github.com/nvm-sh/nvm/releases"))),(0,r.kt)("h3",{id:"install-yarn"},"Install yarn"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.hostinger.com/tutorials/how-to-install-yarn-on-ubuntu/"},"https://www.hostinger.com/tutorials/how-to-install-yarn-on-ubuntu/")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt update\nsudo apt install yarn nodejs\nyarn \u2013version\n")),(0,r.kt)("h3",{id:"install-jq"},"Install jq"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get install jq\n")))}m.isMDXComponent=!0}}]);