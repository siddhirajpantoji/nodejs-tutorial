"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[921],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=d(n),m=r,f=p["".concat(s,".").concat(m)]||p[m]||c[m]||a;return n?o.createElement(f,l(l({ref:t},u),{},{components:n})):o.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var d=2;d<a;d++)l[d]=n[d];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8563:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var o=n(7462),r=(n(7294),n(3905));const a={id:"index",title:"Introduction to Node.js",sidebar_label:"Introduction",slug:"/"},l=void 0,i={unversionedId:"Fundamentals/index",id:"Fundamentals/index",title:"Introduction to Node.js",description:"Welocme all to world of Node.js . Node.js is Server Side Javascript.",source:"@site/docs/Fundamentals/index.md",sourceDirName:"Fundamentals",slug:"/",permalink:"/nodejs-tutorial/docs/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Fundamentals/index.md",tags:[],version:"current",frontMatter:{id:"index",title:"Introduction to Node.js",sidebar_label:"Introduction",slug:"/"},sidebar:"tutorialSidebar",next:{title:"installation-of-node-js",permalink:"/nodejs-tutorial/docs/Fundamentals/installation-of-node-js"}},s={},d=[{value:"What is Node.js",id:"what-is-nodejs",level:2},{value:"Key Features of Node.js",id:"key-features-of-nodejs",level:2},{value:"Installation of Node.js",id:"installation-of-nodejs",level:2},{value:"Writing a Hello world program",id:"writing-a-hello-world-program",level:2},{value:"Next Steps",id:"next-steps",level:2}],u={toc:d},p="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Welocme all to world of Node.js . Node.js is Server Side Javascript.\nI will be introducing you all to fundamental concepts of Nodejs and how you can utilise it fully to Enhance your Web Development Skills s"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#what-is-nodejs",title:"Basic About Node.js"},"What is Node.js")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#key-features-of-nodejs",title:"Key Features of Node.js"},"Key Features of Node.js")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#installation-of-nodejs",title:"Installation of Node.js"},"Installation of Node.js")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#writing-a-hello-world-program",title:"Hello World Program"},"Writing Hello World program")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#next-steps",title:"Next Steps"},"Next Steps")," ")),(0,r.kt)("h2",{id:"what-is-nodejs"},"What is Node.js"),(0,r.kt)("p",null,"Node JS is Server Side JavaScript\nNode.js is an open-source, cross-platform runtime environment that allows us to run JavaScript code on the server-side. It uses the V8 JavaScript engine, originally created for Google Chrome.\nNode.js runs on various platforms (Windows, Linux, Unix, Mac OS X, etc.)"),(0,r.kt)("h2",{id:"key-features-of-nodejs"},"Key Features of Node.js"),(0,r.kt)("p",null,"Node.js offers several key features that make it popular among developers. First, it's non-blocking and event-driven, which means it can handle multiple concurrent requests efficiently without blocking other operations.\nNode.js is commonly used for building real-time applications like chat servers, collaborative tools, and streaming services. Its ability to handle a large number of simultaneous connections makes it ideal for such scenarios."),(0,r.kt)("h2",{id:"installation-of-nodejs"},"Installation of Node.js"),(0,r.kt)("p",null,"To get started with Node.js, you'll need to install it on your machine. If you have already installed it on your machine then skip this\nVisit the ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/en/download"},"official Node.js website")," and download the installer for your operating system. Follow the installation instructions, and you'll be ready to go. I will be covering Intsallation in Detail in further Section "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"node --version\n")),(0,r.kt)("p",null,"Should give Nodejs Version which you have installed. Mine is ",(0,r.kt)("strong",{parentName:"p"},"v18.16.1")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm --version\n")),(0,r.kt)("p",null,"Should give npm version installed. Mine is ",(0,r.kt)("strong",{parentName:"p"},"9.5.1")),(0,r.kt)("h2",{id:"writing-a-hello-world-program"},"Writing a Hello world program"),(0,r.kt)("p",null,"Simple code to print Hello World on Console\nCreate a simple file ",(0,r.kt)("em",{parentName:"p"},"hello-world.js")," in a folder and write Below code in it "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'console.log("Hello World!")\n')),(0,r.kt)("p",null,"open the folder in your terminal and run below command "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"node hello-world.js\n")),(0,r.kt)("p",null,"Output of Below Program is "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"Hello World!\n")),(0,r.kt)("p",null,"You can find above code in ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"[this]","({{ site.github.repository_url }}/blob/main/src/introduction-to-nodejs/hello-world.js)"))," file "),(0,r.kt)("h2",{id:"next-steps"},"Next Steps"),(0,r.kt)("p",null,"This was just a basic introduction to Node.js, but there's so much more to explore! You can dive deeper into modules, asynchronous programming, building APIs, and integrating databases. Keep learning and experimenting to unlock the full potential of Node.js."))}c.isMDXComponent=!0}}]);