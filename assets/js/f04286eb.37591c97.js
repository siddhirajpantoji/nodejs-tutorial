"use strict";(self.webpackChunknode_tutorial=self.webpackChunknode_tutorial||[]).push([[693],{3905:(e,a,t)=>{t.d(a,{Zo:()=>d,kt:()=>N});var n=t(7294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=n.createContext({}),m=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},d=function(e){var a=m(e.components);return n.createElement(s.Provider,{value:a},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=m(t),u=i,N=c["".concat(s,".").concat(u)]||c[u]||p[u]||l;return t?n.createElement(N,r(r({ref:a},d),{},{components:t})):n.createElement(N,r({ref:a},d))}));function N(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var l=t.length,r=new Array(l);r[0]=u;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o[c]="string"==typeof e?e:i,r[1]=o;for(var m=2;m<l;m++)r[m]=t[m];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9445:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var n=t(7462),i=(t(7294),t(3905));const l={id:"variables",title:"Variables",sidebar_label:"Variables",slug:"/variables"},r=void 0,o={unversionedId:"Basics/variables/variables",id:"Basics/variables/variables",title:"Variables",description:"Most of the time, a Javascript/Node.js application needs to work with information. Here are two examples:",source:"@site/docs/Basics/variables/variables.md",sourceDirName:"Basics/variables",slug:"/variables",permalink:"/nodejs-tutorial/docs/variables",draft:!1,tags:[],version:"current",frontMatter:{id:"variables",title:"Variables",sidebar_label:"Variables",slug:"/variables"},sidebar:"tutorialSidebar",previous:{title:"First App",permalink:"/nodejs-tutorial/docs/first-node-js-app"},next:{title:"Data Types",permalink:"/nodejs-tutorial/docs/data-types"}},s={},m=[{value:"A variable",id:"a-variable",level:2},{value:"A real-life analogy",id:"a-real-life-analogy",level:2},{value:"Variable naming",id:"variable-naming",level:2},{value:"Constants",id:"constants",level:2},{value:"Uppercase constants",id:"uppercase-constants",level:3},{value:"Name things right",id:"name-things-right",level:2},{value:"Summary",id:"summary",level:2}],d={toc:m},c="wrapper";function p(e){let{components:a,...l}=e;return(0,i.kt)(c,(0,n.Z)({},d,l,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Most of the time, a Javascript/Node.js application needs to work with information. Here are two examples:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"An online shop \u2013 the information might include goods being sold and a shopping cart."),(0,i.kt)("li",{parentName:"ol"},"A chat application \u2013 the information might include users, messages, and much more.")),(0,i.kt)("p",null,"Variables are used to store this information."),(0,i.kt)("h2",{id:"a-variable"},"A variable"),(0,i.kt)("p",null,"A ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Variable_(computer_science)"},"variable")," is a \u201cnamed storage\u201d for data. We can use variables to store goodies, visitors, and other data."),(0,i.kt)("p",null,"To create a variable in Javascript/Node.js, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"let")," keyword."),(0,i.kt)("p",null,"The statement below creates (in other words: declares) a variable with the name \u201cmessage\u201d:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"let message\n")),(0,i.kt)("p",null,"Now, we can put some data into it by using the assignment operator =:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"let message;\n// highlight-next-line\nmessage = 'Shree'; // store the string 'Shree' in the variable named message\n")),(0,i.kt)("p",null,"The string is now saved into the memory area associated with the variable. We can access it using the variable name:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"let message;\nmessage = '!!Shree!!';\n// highlight-next-line\nconsole.log(message); // shows the variable content\n")),(0,i.kt)("p",null,"To be concise, we can combine the variable declaration and assignment into a single line:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// highlight-next-line\nlet message = '||Shree||'; // define the variable and assign the value\n\nconsole.log(message); // ||Shree||\n")),(0,i.kt)("p",null,"We can also declare multiple variables in one line:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"let user = 'Siya Ram', age = 25, message = 'Shree';\n\n")),(0,i.kt)("p",null,"That might seem shorter, but we don\u2019t recommend it. For the sake of better readability, please use a single line per variable."),(0,i.kt)("p",null,"The multiline variant is a bit longer, but easier to read:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"let user = 'Siya Ram';\nlet age = 25;\nlet message = 'Shree';\n")),(0,i.kt)("p",null,"Some people also define multiple variables in this multiline style:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"let user = 'Siya Ram',\n  age = 25,\n  message = 'Shree';\n\n")),(0,i.kt)("p",null,"\u2026Or even in the \u201ccomma-first\u201d style:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"let user = 'Siya Ram'\n  , age = 25\n  , message = 'Shree';\n\n")),(0,i.kt)("p",null,"Technically, all these variants do the same thing. So, it\u2019s a matter of personal taste and aesthetics."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"In older scripts, you may also find another keyword: ",(0,i.kt)("inlineCode",{parentName:"p"},"var")," instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"let"),":"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},"var heart = 'Ram';\n\n")),(0,i.kt)("p",{parentName:"admonition"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"var")," keyword is almost the same as ",(0,i.kt)("inlineCode",{parentName:"p"},"let"),". It also declares a variable, but in a slightly different, \u201cold-school\u201d way."),(0,i.kt)("p",{parentName:"admonition"},"There are subtle differences between let and var, but they do not matter for us yet. We\u2019ll cover them in detail in the chapter where we learn about functions and scope .")),(0,i.kt)("h2",{id:"a-real-life-analogy"},"A real-life analogy"),(0,i.kt)("p",null,"We can easily grasp the concept of a \u201cvariable\u201d if we imagine it as a \u201cbox\u201d for data, with a uniquely-named sticker on it."),(0,i.kt)("p",null,"For instance, the variable ",(0,i.kt)("inlineCode",{parentName:"p"},"heart")," can be imagined as a box labeled ",(0,i.kt)("inlineCode",{parentName:"p"},'"heart"')," with the value ",(0,i.kt)("inlineCode",{parentName:"p"},'"Ram"')," in it:\n",(0,i.kt)("img",{src:t(2998).Z,width:"166",height:"145"})),(0,i.kt)("p",null,"We can put any value in the box."),(0,i.kt)("p",null,"We can also change it as many times as we want:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"let heart;\n\nheart = 'Gussa!';\n// highlight-next-line\nheart = 'Ram Ram'; // value changed\n\nconsole.log(heart);\n")),(0,i.kt)("p",null,"When the value is changed, the old data is removed from the variable:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(673).Z,width:"392",height:"192"})),(0,i.kt)("p",null,"We can also declare two variables and copy data from one into the other."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"let hello = 'Siya Ram';\n\nlet message;\n\n\n// copy 'Siya Ram' from hello into message\n// highlight-next-line\nmessage = hello;\n\n// now two variables hold the same data\nconsole.log(hello); // Siya Ram\nconsole.log(message); // Siya Ram\n")),(0,i.kt)("admonition",{title:"A variable should be declared only once.",type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"A variable should be declared only once."),(0,i.kt)("p",{parentName:"admonition"},"A repeated declaration of the same variable is an error:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},"let message = \"Krodh\";\n\n// repeated 'let' leads to an error\n// highlight-next-line\nlet message = \"Matsar\"; // SyntaxError: 'message' has already been declared\n\n")),(0,i.kt)("p",{parentName:"admonition"},"So, we should declare a variable once and then refer to it without ",(0,i.kt)("inlineCode",{parentName:"p"},"let"),".")),(0,i.kt)("h2",{id:"variable-naming"},"Variable naming"),(0,i.kt)("p",null,"There are two limitations on variable names in JavaScript:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The name must contain only letters, digits, or the symbols ",(0,i.kt)("inlineCode",{parentName:"li"},"$")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"_"),"."),(0,i.kt)("li",{parentName:"ol"},"The first character must not be a digit.")),(0,i.kt)("p",null,"Examples of valid names:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"let userName;\nlet test123;\n")),(0,i.kt)("p",null,"When the name contains multiple words, ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/CamelCase"},"camelCase")," is commonly used. That is: words go one after another, each word except first starting with a capital letter: ",(0,i.kt)("inlineCode",{parentName:"p"},"siyaVarRamchandraKiJai"),"."),(0,i.kt)("p",null,"What's interesting -- the dollar sign ",(0,i.kt)("inlineCode",{parentName:"p"},"'$'")," and the underscore ",(0,i.kt)("inlineCode",{parentName:"p"},"'_'")," can also be used in names. They are regular symbols, just like letters, without any special meaning."),(0,i.kt)("p",null,"These names are valid refer ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/siddhirajpantoji/nodejs-tutorial/blob/main/static/code-snippets/variables/declaration.js"},"Example"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'let $ = 1; // declared a variable with the name "$"\nlet _ = 2; // and now a variable with the name "_"\n\nconsole.log($ + _); // 3\n')),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/siddhirajpantoji/nodejs-tutorial/blob/main/static/code-snippets/variables/wrong-var-names.js"},"Example")," of incorrect variable names:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"let 1a; // cannot start with a digit\n\nlet my-name; // hyphens '-' aren't allowed in the name\n")),(0,i.kt)("admonition",{title:"Case matters",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Variables named ",(0,i.kt)("inlineCode",{parentName:"p"},"ram")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"RAM")," are two different variables.")),(0,i.kt)("admonition",{title:"Non-Latin letters are allowed, but not recommended",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"It is possible to use any language, including cyrillic letters, Chinese logograms and so on, like this:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},"let \u0438\u043c\u044f = '...';\nlet \u6211 = '...';\nlet \u0930\u093e\u0935\u0923 = '\u0936\u093f\u0935 \u092d\u0915\u094d\u0924 '\n")),(0,i.kt)("p",{parentName:"admonition"},"Technically, there is no error here. Such names are allowed, but there is an international convention to use English in variable names. Even if we're writing a small script, it may have a long life ahead. People from other countries may need to read it some time.")),(0,i.kt)("admonition",{title:"Reserved Names",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"There is a ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords"},"list of reserved words")),", which cannot be used as variable names because they are used by the language itself."),(0,i.kt)("p",{parentName:"admonition"},"For example: ",(0,i.kt)("inlineCode",{parentName:"p"},"let"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"class"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"return"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"function")," are reserved."),(0,i.kt)("p",{parentName:"admonition"},"The code below gives a syntax error:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},'let let = 5; // can\'t name a variable "let", error!\nlet return = 5; // also can\'t name it "return", error!\n'))),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"without ",(0,i.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"use strict")),(0,i.kt)("p",{parentName:"admonition"},"Normally, we need to define a variable before using it. But in the old times, it was technically possible to create a variable by a mere assignment of the value without using ",(0,i.kt)("inlineCode",{parentName:"p"},"let"),". This still works now if we don't put ",(0,i.kt)("inlineCode",{parentName:"p"},"use strict")," in our scripts to maintain compatibility with old scripts."),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},'// note: no "use strict" in this example\n\nnum = 5; // the variable "num" is created if it didn\'t exist\n\nconsole.log(num); // 5\n')),(0,i.kt)("p",{parentName:"admonition"},"This is a bad practice and would cause an error in strict mode:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},'"use strict";\nnum = 5; // error: num is not defined\n'))),(0,i.kt)("h2",{id:"constants"},"Constants"),(0,i.kt)("p",null,"To declare a constant (unchanging) variable, use ",(0,i.kt)("inlineCode",{parentName:"p"},"const")," instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"let"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const myBirthday = '27.07.1990';\n")),(0,i.kt)("p",null,"Variables declared using ",(0,i.kt)("inlineCode",{parentName:"p"},"const"),' are called "constants". They cannot be reassigned. An attempt to do so would cause an error:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const myBirthday = '27.07.1990';\n\nmyBirthday = '01.01.2001'; // error, can't reassign the constant!\n")),(0,i.kt)("p",null,"When a programmer is sure that a variable will never change, they can declare it with ",(0,i.kt)("inlineCode",{parentName:"p"},"const")," to guarantee and clearly communicate that fact to everyone."),(0,i.kt)("h3",{id:"uppercase-constants"},"Uppercase constants"),(0,i.kt)("p",null,"There is a widespread practice to use constants as aliases for difficult-to-remember values that are known prior to execution."),(0,i.kt)("p",null,"Such constants are named using capital letters and underscores."),(0,i.kt)("p",null,'For instance, let\'s make constants for colors in so-called "web" (hexadecimal) format:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"run",run:!0},'const COLOR_RED = "#F00";\nconst COLOR_GREEN = "#0F0";\nconst COLOR_BLUE = "#00F";\nconst COLOR_ORANGE = "#FF7F00";\n\n// ...when we need to pick a color\nlet color = COLOR_ORANGE;\nconsole.log(color); // #FF7F00\n')),(0,i.kt)("p",null,"Benefits:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"COLOR_ORANGE")," is much easier to remember than ",(0,i.kt)("inlineCode",{parentName:"li"},'"#FF7F00"'),"."),(0,i.kt)("li",{parentName:"ul"},"It is much easier to mistype ",(0,i.kt)("inlineCode",{parentName:"li"},'"#FF7F00"')," than ",(0,i.kt)("inlineCode",{parentName:"li"},"COLOR_ORANGE"),"."),(0,i.kt)("li",{parentName:"ul"},"When reading the code, ",(0,i.kt)("inlineCode",{parentName:"li"},"COLOR_ORANGE")," is much more meaningful than ",(0,i.kt)("inlineCode",{parentName:"li"},"#FF7F00"),".")),(0,i.kt)("p",null,"When should we use capitals for a constant and when should we name it normally? Let's make that clear."),(0,i.kt)("p",null,'Being a "constant" just means that a variable\'s value never changes. But there are constants that are known prior to execution (like a hexadecimal value for red) and there are constants that are ',(0,i.kt)("em",{parentName:"p"},"calculated")," in run-time, during the execution, but do not change after their initial assignment."),(0,i.kt)("p",null,"For instance:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const pageLoadTime = /* time taken by a webpage to load */;\n")),(0,i.kt)("p",null,"The value of ",(0,i.kt)("inlineCode",{parentName:"p"},"pageLoadTime")," is not known prior to the page load, so it's named normally. But it's still a constant because it doesn't change after assignment."),(0,i.kt)("p",null,'In other words, capital-named constants are only used as aliases for "hard-coded" values.'),(0,i.kt)("h2",{id:"name-things-right"},"Name things right"),(0,i.kt)("p",null,"Talking about variables, there's one more extremely important thing."),(0,i.kt)("p",null,"A variable name should have a clean, obvious meaning, describing the data that it stores."),(0,i.kt)("p",null,"Variable naming is one of the most important and complex skills in programming. A quick glance at variable names can reveal which code was written by a beginner versus an experienced developer."),(0,i.kt)("p",null,"In a real project, most of the time is spent modifying and extending an existing code base rather than writing something completely separate from scratch. When we return to some code after doing something else for a while, it's much easier to find information that is well-labeled. Or, in other words, when the variables have good names."),(0,i.kt)("p",null,"Please spend time thinking about the right name for a variable before declaring it. Doing so will repay you handsomely."),(0,i.kt)("p",null,"Some good-to-follow rules are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use human-readable names like ",(0,i.kt)("inlineCode",{parentName:"li"},"userName")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"shoppingCart"),"."),(0,i.kt)("li",{parentName:"ul"},"Stay away from abbreviations or short names like ",(0,i.kt)("inlineCode",{parentName:"li"},"a"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"b"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"c"),", unless you really know what you're doing."),(0,i.kt)("li",{parentName:"ul"},"Make names maximally descriptive and concise. Examples of bad names are ",(0,i.kt)("inlineCode",{parentName:"li"},"data")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"value"),". Such names say nothing. It's only okay to use them if the context of the code makes it exceptionally obvious which data or value the variable is referencing."),(0,i.kt)("li",{parentName:"ul"},'Agree on terms within your team and in your own mind. If a site visitor is called a "user" then we should name related variables ',(0,i.kt)("inlineCode",{parentName:"li"},"currentUser")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"newUser")," instead of ",(0,i.kt)("inlineCode",{parentName:"li"},"currentVisitor")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"newManInTown"),".")),(0,i.kt)("p",null,"Sounds simple? Indeed it is, but creating descriptive and concise variable names in practice is not. Go for it."),(0,i.kt)("admonition",{title:"Reuse or create?",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"And the last note. There are some lazy programmers who, instead of declaring new variables, tend to reuse existing ones."),(0,i.kt)("p",{parentName:"admonition"},"As a result, their variables are like boxes into which people throw different things without changing their stickers. What's inside the box now? Who knows? We need to come closer and check."),(0,i.kt)("p",{parentName:"admonition"},"Such programmers save a little bit on variable declaration but lose ten times more on debugging."),(0,i.kt)("p",{parentName:"admonition"},"An extra variable is good, not evil."),(0,i.kt)("p",{parentName:"admonition"},"Modern JavaScript minifiers and browsers optimize code well enough, so it won't create performance issues. Using different variables for different values can even help the engine optimize your code.")),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("p",null,"We can declare variables to store data by using the ",(0,i.kt)("inlineCode",{parentName:"p"},"var"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"let"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},"const")," keywords."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"let")," -- is a modern variable declaration."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"var")," -- is an old-school variable declaration. Normally we don't use it at all, but we'll cover subtle differences from ",(0,i.kt)("inlineCode",{parentName:"li"},"let")," in the chapter where we discuss functions, Scope etc "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"const")," -- is like ",(0,i.kt)("inlineCode",{parentName:"li"},"let"),", but the value of the variable can't be changed.")),(0,i.kt)("p",null,"Variables should be named in a way that allows us to easily understand what's inside them."))}p.isMDXComponent=!0},673:(e,a,t)=>{t.d(a,{Z:()=>n});const n="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzOTIiIGhlaWdodD0iMTkyIiB2aWV3Qm94PSIwIDAgMzkyIDE5MiI+PGRlZnM+PHN0eWxlPkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PcGVuK1NhbnM6Ym9sZCxpdGFsaWMsYm9sZGl0YWxpYyU3Q1BUK01vbm8pO0Bmb250LWZhY2V7Zm9udC1mYW1pbHk6JmFwb3M7UFQgTW9ubyZhcG9zOztmb250LXdlaWdodDo3MDA7Zm9udC1zdHlsZTpub3JtYWw7c3JjOmxvY2FsKCZhcG9zO1BUIE1vbm9Cb2xkJmFwb3M7KSx1cmwoL2ZvbnQvUFRNb25vQm9sZC53b2ZmMikgZm9ybWF0KCZhcG9zO3dvZmYyJmFwb3M7KSx1cmwoL2ZvbnQvUFRNb25vQm9sZC53b2ZmKSBmb3JtYXQoJmFwb3M7d29mZiZhcG9zOyksdXJsKC9mb250L1BUTW9ub0JvbGQudHRmKSBmb3JtYXQoJmFwb3M7dHJ1ZXR5cGUmYXBvczspfTwvc3R5bGU+PC9kZWZzPjxnIGlkPSJjb21iaW5lZCIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSI+PGcgaWQ9InZhcmlhYmxlLWNoYW5nZS5zdmciPjxnIGlkPSJub3VuXzEyMTFfY2MiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUyLjU4NSAtMy45NTgpIj48cGF0aCBpZD0iU2hhcGUiIGZpbGw9IiNEQkFGODgiIGQ9Ik0yNC40MTUgOTMuMTU0aDExMi41NTd2NDIuOTVjMCAuMzczLS4wNzguODYzLS4yNzggMS4yOTUtLjIuNDMyLTE2LjU3NSAzNS41Ni0xNi41NzUgMzUuNTZ2LTU0LjM2bDE2Ljg1NS0yNS40NDUgMTguNDQtMjguMTk2SDQyLjg1NmwtMTguNDQgMjguMTk2ek0yNC40MTUgMTIxLjk1OHYtMjhsLTE1IDI4Ii8+PGcgaWQ9IlJlY3RhbmdsZS01LSstJnF1b3Q7UmFtIFJhbSZxdW90OyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCA1Ni4zNTQpIj48cGF0aCBpZD0iUmVjdGFuZ2xlLTUiIGZpbGw9IiNGQkYyRUMiIHN0cm9rZT0iI0FGNkUyNCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNMTguMjc2IDEuNDEzTDcxLjQxNiA1OC40IDU0LjU1MyA3NC4xMjQgMS40MTMgMTcuMTM4IDE4LjI3NiAxLjQxM3oiLz48dGV4dCBpZD0iJnF1b3Q7UmFtIFJhbSZxdW90OyIgZmlsbD0iI0FGNkUyNCIgZm9udC1mYW1pbHk9Ik9wZW5TYW5zLUJvbGQsIE9wZW4gU2FucyIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9ImJvbGQiIHRyYW5zZm9ybT0icm90YXRlKDQ3IDM4LjQ5OCA0MC4zNjcpIj48dHNwYW4geD0iOS4wMDYiIHk9IjQ2Ljg2NyI+UmFtIFJhbTwvdHNwYW4+PC90ZXh0PjwvZz48ZyBpZD0iUmVjdGFuZ2xlLTUtKy0mcXVvdDtSYW0gUmFtJnF1b3Q7LTIiIHRyYW5zZm9ybT0icm90YXRlKC02NyA5NS43NSAtMzQuNjMpIj48cGF0aCBpZD0iUmVjdGFuZ2xlLTUiIGZpbGw9IiNGQkYyRUMiIHN0cm9rZT0iI0FGNkUyNCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNMTguMjc2IDEuNDEzTDcxLjQxNiA1OC40IDU0LjU1MyA3NC4xMjQgMS40MTMgMTcuMTM4IDE4LjI3NiAxLjQxM3oiLz48dGV4dCBpZD0iJnF1b3Q7R3Vzc2EhJnF1b3Q7IiBmaWxsPSIjQUY2RTI0IiBmb250LWZhbWlseT0iT3BlblNhbnMtQm9sZCwgT3BlbiBTYW5zIiBmb250LXNpemU9IjE0IiBmb250LXdlaWdodD0iYm9sZCIgdHJhbnNmb3JtPSJyb3RhdGUoNDcgMzguNTc4IDM5Ljc1OCkiPjx0c3BhbiB4PSI5LjA4NSIgeT0iNDYuMjU4Ij4mcXVvdDtHdXNzYSEmcXVvdDs8L3RzcGFuPjwvdGV4dD48L2c+PHBhdGggaWQ9IlNoYXBlIiBmaWxsPSIjREJBRjg4IiBkPSJNNy40MTUgMTIzLjk1OHY1NC43M2MwIDMuNDIgMS40ODMgNS4yNyA0LjM4NyA1LjI3aDEwMC4wODZjMy4xMjIgMCA1LjUyNy0yLjU0NyA1LjUyNy0zLjQ3NXYtNTYuNTI1aC0xMTB6Ii8+PC9nPjx0ZXh0IGlkPSJtZXNzYWdlIiBmaWxsPSIjRkZGIiBmb250LWZhbWlseT0iT3BlblNhbnMtQm9sZCwgT3BlbiBTYW5zIiBmb250LXNpemU9IjE4IiBmb250LXdlaWdodD0iYm9sZCI+PHRzcGFuIHg9Ijc3IiB5PSIxNTciPmhlYXJ0PC90c3Bhbj48L3RleHQ+PHBhdGggaWQ9IkZpbGwtNTQiIGZpbGw9IiNEQkFGODgiIGQ9Ik01OC4xMTIgNTEuODA4UzQ3LjY1NyA0MC42MjMgNDAuNzE5IDM2LjE1NWwtLjUwNSA1LjU0MmE3Ni4wMzYgNzYuMDM2IDAgMDAtMzMuNzY5IDQuNTk1bDQuMTY5IDExLjAzMmE2NC4yNDggNjQuMjQ4IDAgMDEyOC41MzEtMy44ODJsLS41MDUgNS41NDJjNS41ODEtMy4zMjkgMTkuNDcyLTcuMTc2IDE5LjQ3Mi03LjE3NiIgdHJhbnNmb3JtPSJyb3RhdGUoMTEgMzIuMjc4IDQ3LjU3KSIvPjxwYXRoIGlkPSJGaWxsLTU0IiBmaWxsPSIjREJBRjg4IiBkPSJNMjg3Ljc5NyAyOC4xODZzLTEwLjQ1NC0xMS4xODUtMTcuMzkzLTE1LjY1M2wtLjUwNSA1LjU0MWE3Ni4wMzYgNzYuMDM2IDAgMDAtMzMuNzY5IDQuNTk2bDQuMTY5IDExLjAzMmE2NC4yNDggNjQuMjQ4IDAgMDEyOC41MzEtMy44ODJsLS41MDQgNS41NDFjNS41OC0zLjMyOCAxOS40Ny03LjE3NSAxOS40Ny03LjE3NSIgdHJhbnNmb3JtPSJyb3RhdGUoMiAyNjEuOTY0IDIzLjk0NykiLz48ZyBpZD0ibm91bl80ODkxMF9jYyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjk4IDUpIj48cGF0aCBpZD0iU2hhcGUiIGQ9Ik01MC45ODMgNkgzNi4wMTZDMzUuNDU2IDYgMzUgNi42MjYgMzUgNy4zOTVWMTJoMTdWNy4zOTVDNTIgNi42MjYgNTEuNTQzIDYgNTAuOTgzIDZ6Ii8+PHBhdGggaWQ9IlNoYXBlIiBmaWxsPSIjREJBRjg4IiBkPSJNODQuMTkzIDkuMzZoLTI2LjM5VjYuMDg1QzU3LjgwMyAyLjcyOSA1NC45OSAwIDUxLjUyOCAwSDM2LjQ3Yy0zLjQ2IDAtNi4yNzUgMi43MjktNi4yNzUgNi4wODVWOS4zNkgzLjgwN0MxLjcwNSA5LjM2IDAgMTEuMDEyIDAgMTMuMDV2LjI2QzAgMTUuMzQ4IDEuNzA1IDE3IDMuODA3IDE3aDgwLjM4NkM4Ni4yOTUgMTcgODggMTUuMzQ4IDg4IDEzLjMxdi0uMjZjMC0yLjAzOC0xLjcwNi0zLjY5LTMuODA3LTMuNjl6TTUzIDEySDM2VjcuMzk1QzM2IDYuNjI2IDM2LjQ1NyA2IDM3LjAxNiA2aDE0Ljk2OEM1Mi41NDQgNiA1MyA2LjYyNiA1MyA3LjM5NVYxMnpNNzQuOTU1IDIwLjA0NUg4LjA0NGMtMy44OSAwLTcuMDQ0LS42OC03LjA0NCAzLjI2Nmw1LjI4MiA3OC4zODJjMCAzLjk0MyAzLjE1NSA3LjMwNyA3LjA0NSA3LjMwN2g1Ni4zNDdjMy44OSAwIDcuMDQ0LTMuMzY0IDcuMDQ0LTcuMzA3TDgyIDIzLjMxYy0uMDAxLTMuOTQ3LTMuMTU1LTMuMjY2LTcuMDQ1LTMuMjY2ek0yNi43NTcgOTguOTk5Yy0xLjI4My4wMzktMi4zNTMtLjgtMi4zOTYtMS44NzhsLTIuMzYtNjEuMDk1Yy0uMDQxLTEuMDc4Ljk2NC0xLjk4NSAyLjI0Mi0yLjAyNSAxLjI4My0uMDQgMi4zNTMuODAxIDIuMzk2IDEuODc5bDIuMzYgNjEuMDk2Yy4wNDEgMS4wNzYtLjk2MyAxLjk4NC0yLjI0MiAyLjAyM3pNNDMgOTcuMDQ5QzQzIDk4LjEyNiA0Mi4zMjggOTkgNDEuNSA5OXMtMS41LS44NzYtMS41LTEuOTUxVjM1Ljk1YzAtMS4wNzguNjcyLTEuOTUxIDEuNS0xLjk1MXMxLjUuODczIDEuNSAxLjk1MVY5Ny4wNXptMTguNjM5LjA3MmMtLjA0MiAxLjA3OC0xLjExMyAxLjkxNy0yLjM5NiAxLjg3OC0xLjI4LS4wNC0yLjI4My0uOTQ3LTIuMjQyLTIuMDI0bDIuMzYtNjEuMDk1Yy4wNDItMS4wNzggMS4xMTItMS45MTkgMi4zOTQtMS44NzkgMS4yOC4wNDIgMi4yODUuOTQ3IDIuMjQ0IDIuMDI1bC0yLjM2IDYxLjA5NXoiLz48L2c+PC9nPjwvZz48L3N2Zz4="},2998:(e,a,t)=>{t.d(a,{Z:()=>n});const n="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjYiIGhlaWdodD0iMTQ1IiB2aWV3Qm94PSIwIDAgMTY2IDE0NSI+PGRlZnM+PHN0eWxlPkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PcGVuK1NhbnM6Ym9sZCxpdGFsaWMsYm9sZGl0YWxpYyU3Q1BUK01vbm8pO0Bmb250LWZhY2V7Zm9udC1mYW1pbHk6JmFwb3M7UFQgTW9ubyZhcG9zOztmb250LXdlaWdodDo3MDA7Zm9udC1zdHlsZTpub3JtYWw7c3JjOmxvY2FsKCZhcG9zO1BUIE1vbm9Cb2xkJmFwb3M7KSx1cmwoL2ZvbnQvUFRNb25vQm9sZC53b2ZmMikgZm9ybWF0KCZhcG9zO3dvZmYyJmFwb3M7KSx1cmwoL2ZvbnQvUFRNb25vQm9sZC53b2ZmKSBmb3JtYXQoJmFwb3M7d29mZiZhcG9zOyksdXJsKC9mb250L1BUTW9ub0JvbGQudHRmKSBmb3JtYXQoJmFwb3M7dHJ1ZXR5cGUmYXBvczspfTwvc3R5bGU+PC9kZWZzPjxnIGlkPSJjb21iaW5lZCIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSI+PGcgaWQ9Im5vdW5fMTIxMV9jYy0rLU1lc3NhZ2UiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEzIDMpIj48ZyBpZD0ibm91bl8xMjExX2NjIj48cGF0aCBpZD0iU2hhcGUiIGZpbGw9IiNEQkFGODgiIGQ9Ik0xNyAzNy4xOTZoMTEyLjU1OHY0Mi45NWMwIC4zNzMtLjA3OS44NjItLjI3OSAxLjI5NC0uMi40MzMtMTYuNTc0IDM1LjU2LTE2LjU3NCAzNS41NlY2Mi42NGwxNi44NTQtMjUuNDQ0TDE0OCA5SDM1LjQ0TDE3IDM3LjE5NnpNMTcgNjZWMzhMMiA2NiIvPjxnIGlkPSJSZWN0YW5nbGUtNS0rLSZxdW90O1dvcmxkISZxdW90OyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTUpIj48cGF0aCBpZD0iUmVjdGFuZ2xlLTUiIGZpbGw9IiNGQkYyRUMiIHN0cm9rZT0iI0FGNkUyNCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNMTguODYxIDEuODA5bDUzLjE0IDU2Ljk4NUw1NS4xNCA3NC41MiAxLjk5OSAxNy41MzMgMTguODYgMS44MXoiLz48dGV4dCBpZD0iJnF1b3Q7U2l5YSBSYW0mcXVvdDsiIGZpbGw9IiNBRjZFMjQiIGZvbnQtZmFtaWx5PSJPcGVuU2Fucy1Cb2xkLCBPcGVuIFNhbnMiIGZvbnQtc2l6ZT0iMTQiIGZvbnQtd2VpZ2h0PSJib2xkIiB0cmFuc2Zvcm09InJvdGF0ZSg0NyA0MC4wODMgMzkuNzYyKSI+PHRzcGFuIHg9IjEwLjU5MSIgeT0iNDYuMjYyIj4mcXVvdDtSYW0mcXVvdDs8L3RzcGFuPjwvdGV4dD48L2c+PHBhdGggaWQ9IlNoYXBlIiBmaWxsPSIjREJBRjg4IiBkPSJNMCA2OHY1NC43M2MwIDMuNDIgMS40ODQgNS4yNyA0LjM4NyA1LjI3aDEwMC4wODZjMy4xMjIgMCA1LjUyNy0yLjU0OCA1LjUyNy0zLjQ3NlY2OEgweiIvPjwvZz48dGV4dCBpZD0ibWVzc2FnZSIgZmlsbD0iI0ZGRiIgZm9udC1mYW1pbHk9Ik9wZW5TYW5zLUJvbGQsIE9wZW4gU2FucyIgZm9udC1zaXplPSIxOCIgZm9udC13ZWlnaHQ9ImJvbGQiPjx0c3BhbiB4PSIxNyIgeT0iMTA1Ij5oZWFydDwvdHNwYW4+PC90ZXh0PjwvZz48L2c+PC9zdmc+"}}]);