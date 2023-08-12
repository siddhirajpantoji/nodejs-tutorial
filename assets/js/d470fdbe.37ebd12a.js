"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[122],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),h=a,m=d["".concat(p,".").concat(h)]||d[h]||u[h]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5886:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={id:"first-node-js-app",title:"Create First Node.js App",sidebar_label:"First App",slug:"/first-node-js-app"},i=void 0,l={unversionedId:"Fundamentals/first-node-js-app",id:"Fundamentals/first-node-js-app",title:"Create First Node.js App",description:"Lets create a Simple HTTP Endpoint which says hello world in response when we hit it with Browser",source:"@site/docs/Fundamentals/first-node-js-app..md",sourceDirName:"Fundamentals",slug:"/first-node-js-app",permalink:"/nodejs-tutorial/docs/first-node-js-app",draft:!1,tags:[],version:"current",frontMatter:{id:"first-node-js-app",title:"Create First Node.js App",sidebar_label:"First App",slug:"/first-node-js-app"},sidebar:"tutorialSidebar",previous:{title:"IDE Setup",permalink:"/nodejs-tutorial/docs/setup-ide-for-coding"}},p={},s=[{value:"Write a Simple Application",id:"write-a-simple-application",level:2},{value:"Run the application",id:"run-the-application",level:2},{value:"Test the application",id:"test-the-application",level:2},{value:"Understanding the code",id:"understanding-the-code",level:2}],c={toc:s},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Lets create a Simple HTTP Endpoint which says hello world in response when we hit it with Browser "),(0,a.kt)("h2",{id:"write-a-simple-application"},"Write a Simple Application"),(0,a.kt)("p",null,"Create a new File named ",(0,a.kt)("inlineCode",{parentName:"p"},"hello-world-app.js")," and copy below code into it "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const http = require('http');\n\nconst hostname = '127.0.0.1';\nconst port = 3000;\n\nconst server = http.createServer((req, res) => {\n  res.statusCode = 200;\n  res.setHeader('Content-Type', 'text/plain');\n  res.end('Hello, World!');\n});\n\nserver.listen(port, hostname, () => {\n  console.log(`Server running at http://${hostname}:${port}/`);\n});\n\n")),(0,a.kt)("p",null,"You can find the file ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"code-snippets/Fundamentals/hello-world-app.js"},"here"))," which you can easily copy in your local machine "),(0,a.kt)("p",null,"We will be understanding all concepts one by one in Further Sections "),(0,a.kt)("h2",{id:"run-the-application"},"Run the application"),(0,a.kt)("p",null,"Open your terminal and go to the folder where this js file is located and type below command "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"node hello-world-app.js\n")),(0,a.kt)("h2",{id:"test-the-application"},"Test the application"),(0,a.kt)("p",null,"Open your browser and enter in url ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:3000/"),"\nYour browser will display "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"Hello, World!\n")),(0,a.kt)("h2",{id:"understanding-the-code"},"Understanding the code"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"require")," loads module ",(0,a.kt)("inlineCode",{parentName:"p"},"http")," into our code . modules are re-usable packages . Which will be covered into further sections.\nConstant variables are declared using cons with values. ",(0,a.kt)("inlineCode",{parentName:"p"},"127.0.0.1")," refers to local machine "),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"createServer")," methods creates an instance of Simple HTTP Server and ",(0,a.kt)("inlineCode",{parentName:"p"},"listen")," methods starts the server\nwhich runs on Specified hosts and port "),(0,a.kt)("p",null,"Dont worry if you have not understood above section . We will be covering all of it in detail"))}u.isMDXComponent=!0}}]);