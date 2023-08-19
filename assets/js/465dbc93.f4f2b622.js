"use strict";(self.webpackChunknode_tutorial=self.webpackChunknode_tutorial||[]).push([[306],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),m=p(n),d=i,k=m["".concat(s,".").concat(d)]||m[d]||c[d]||o;return n?a.createElement(k,l(l({ref:t},u),{},{components:n})):a.createElement(k,l({ref:t},u))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=d;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[m]="string"==typeof e?e:i,l[1]=r;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9403:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const o={id:"data-types",title:"Data Types",sidebar_label:"Data Types",slug:"/data-types"},l=void 0,r={unversionedId:"Basics/data-types",id:"Basics/data-types",title:"Data Types",description:"A value in JavaScript is always of a certain type. For example, a string or a number.",source:"@site/docs/Basics/data-types.md",sourceDirName:"Basics",slug:"/data-types",permalink:"/nodejs-tutorial/docs/data-types",draft:!1,tags:[],version:"current",frontMatter:{id:"data-types",title:"Data Types",sidebar_label:"Data Types",slug:"/data-types"},sidebar:"tutorialSidebar",previous:{title:"Variables",permalink:"/nodejs-tutorial/docs/variables"},next:{title:"Type Conversions",permalink:"/nodejs-tutorial/docs/type-conversions"}},s={},p=[{value:"Number",id:"number",level:2},{value:"String",id:"string",level:2},{value:"Boolean (logical type)",id:"boolean-logical-type",level:2},{value:"The &quot;null&quot; value",id:"the-null-value",level:2},{value:"The &quot;undefined&quot; value",id:"the-undefined-value",level:2},{value:"Objects and Symbols",id:"objects-and-symbols",level:2},{value:"The typeof operator #type-typeof",id:"the-typeof-operator-type-typeof",level:2},{value:"Summary",id:"summary",level:2}],u={toc:p},m="wrapper";function c(e){let{components:t,...o}=e;return(0,i.kt)(m,(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A value in JavaScript is always of a certain type. For example, a string or a number."),(0,i.kt)("p",null,"There are eight basic data types in JavaScript. Here, we'll cover them in general and in the next chapters we'll talk about each of them in detail."),(0,i.kt)("p",null,"We can put any type in a variable. For example, a variable can at one moment be a string and then store a number:\nThis is a basic Introduction to get you started "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'// no error\nlet message = "Jai Shri Ram";\nmessage = 123456;\n')),(0,i.kt)("p",null,'Programming languages that allow such things, such as JavaScript, are called "dynamically typed", meaning that there exist data types, but variables are not bound to any of them.'),(0,i.kt)("h2",{id:"number"},"Number"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"let n = 123;\nn = 12.345;\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," type represents both integer and floating point numbers."),(0,i.kt)("p",null,"There are many operations for numbers, e.g. multiplication ",(0,i.kt)("inlineCode",{parentName:"p"},"*"),", division ",(0,i.kt)("inlineCode",{parentName:"p"},"/"),", addition ",(0,i.kt)("inlineCode",{parentName:"p"},"+"),", subtraction ",(0,i.kt)("inlineCode",{parentName:"p"},"-"),", and so on."),(0,i.kt)("p",null,'Besides regular numbers, there are so-called "special numeric values" which also belong to this data type: ',(0,i.kt)("inlineCode",{parentName:"p"},"Infinity"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"-Infinity")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"NaN"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Infinity")," represents the mathematical ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Infinity"},"Infinity")," \u221e. It is a special value that's greater than any number."),(0,i.kt)("p",{parentName:"li"},"  We can get it as a result of division by zero:  ",(0,i.kt)("a",{target:"_blank",href:n(580).Z},"code")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},"    console.log( 1 / 0 ); // Infinity\n")),(0,i.kt)("p",{parentName:"li"},"  Or just reference it directly: ",(0,i.kt)("a",{target:"_blank",href:n(3061).Z},"code")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},"console.log(Infinity)\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"NaN")," represents a computational error. It is a result of an incorrect or an undefined mathematical operation, for instance:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},'console.log( "not a number" / 2 ); // NaN, such division is erroneous\n')),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("inlineCode",{parentName:"p"},"NaN")," is sticky. Any further mathematical operation on ",(0,i.kt)("inlineCode",{parentName:"p"},"NaN")," returns ",(0,i.kt)("inlineCode",{parentName:"p"},"NaN"),":"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},'console.log( NaN + 1 ); // NaN\nconsole.log( 3 * NaN ); // NaN\nconsole.log( "not a number" / 2 - 1 ); // NaN\n')),(0,i.kt)("p",{parentName:"li"},"  So, if there's a ",(0,i.kt)("inlineCode",{parentName:"p"},"NaN")," somewhere in a mathematical expression, it propagates to the whole result (there's only one exception to that: ",(0,i.kt)("inlineCode",{parentName:"p"},"NaN ** 0")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"1"),")."))),(0,i.kt)("admonition",{title:"Mathematical operations are safe",type:"info"},(0,i.kt)("p",{parentName:"admonition"},'Doing maths is "safe" in JavaScript. We can do anything: divide by zero, treat non-numeric strings as numbers, etc.'),(0,i.kt)("p",{parentName:"admonition"},'The script will never stop with a fatal error ("die"). At worst, we\'ll get ',(0,i.kt)("inlineCode",{parentName:"p"},"NaN")," as the result.")),(0,i.kt)("p",null,'Special numeric values formally belong to the "number" type. Of course they are not numbers in the common sense of this word.'),(0,i.kt)("p",null,"We'll see more about working with numbers in the chapter later "),(0,i.kt)("h2",{id:"string"},"String"),(0,i.kt)("p",null,"A string in JavaScript must be surrounded by quotes."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"let str = \"Ram\";\nlet str2 = 'Siya var Ram chandra ki jay';\nlet phrase = `Jai Shri ${str}`;\nconsole.log(str)\nconsole.log(str2)\nconsole.log(phrase)\n")),(0,i.kt)("p",null,"In JavaScript, there are 3 types of quotes."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Double quotes: ",(0,i.kt)("inlineCode",{parentName:"li"},'"Siya Ram"'),"."),(0,i.kt)("li",{parentName:"ol"},"Single quotes: ",(0,i.kt)("inlineCode",{parentName:"li"},"'Siya Ram'"),"."),(0,i.kt)("li",{parentName:"ol"},"Backticks: ",(0,i.kt)("code",null,"`","Siya Ram","`"),".")),(0,i.kt)("p",null,'Double and single quotes are "simple" quotes. There\'s practically no difference between them in JavaScript.'),(0,i.kt)("p",null,'Backticks are "extended functionality" quotes. They allow us to embed variables and expressions into a string by wrapping them in ',(0,i.kt)("inlineCode",{parentName:"p"},"${\u2026}"),", for example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"run",run:!0},'let name = "Ram";\n\n// embed a variable\nconsole.log( `Jai Shri ${name}` ); // Jai Shri Ram\n\n// embed an expression\nconsole.log( `Hanuman x  ${1 + 2}` ); // the result is 3\n')),(0,i.kt)("p",null,"The expression inside ",(0,i.kt)("inlineCode",{parentName:"p"},"${\u2026}")," is evaluated and the result becomes a part of the string. We can put anything in there: a variable like ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," or an arithmetical expression like ",(0,i.kt)("inlineCode",{parentName:"p"},"1 + 2")," or something more complex."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Please note that this can only be done in backticks. Other quotes don't have this embedding functionality!"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},'console.log( "Raghunath ${1 + 2}" ); // the result is ${1 + 2} (double quotes do nothing)\n'))),(0,i.kt)("p",null,"We'll cover strings more thoroughly in the String Chapter Later."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"There is no ",(0,i.kt)("em",{parentName:"mdxAdmonitionTitle"},"character")," type"),(0,i.kt)("p",{parentName:"admonition"},'In some languages, there is a special "character" type for a single character. For example, in the C language and in Java it is called "char".'),(0,i.kt)("p",{parentName:"admonition"},"In JavaScript, there is no such type. There's only one type: ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),". A string may consist of zero characters (be empty), one character or many of them.")),(0,i.kt)("h2",{id:"boolean-logical-type"},"Boolean (logical type)"),(0,i.kt)("p",null,"The boolean type has only two values: ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,i.kt)("p",null,"This type is commonly used to store yes/no values: ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),' means "yes, correct", and ',(0,i.kt)("inlineCode",{parentName:"p"},"false"),' means "no, incorrect".'),(0,i.kt)("p",null,"For instance:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"let shriRam = true; // yes, name field is checked\nlet ravanIsHero = false; // no, age field is not checked\n")),(0,i.kt)("p",null,"Boolean values also come as a result of comparisons:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"run",run:!0},'let isGreater = 4 > 1;\n\nconsole.log( isGreater ); // true (the comparison result is "yes")\n')),(0,i.kt)("p",null,"We'll cover booleans more deeply in the chapter covering conditions ."),(0,i.kt)("h2",{id:"the-null-value"},'The "null" value'),(0,i.kt)("p",null,"The special ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," value does not belong to any of the types described above."),(0,i.kt)("p",null,"It forms a separate type of its own which contains only the ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," value:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"let age = null;\n")),(0,i.kt)("p",null,"In JavaScript, ",(0,i.kt)("inlineCode",{parentName:"p"},"null"),' is not a "reference to a non-existing object" or a "null pointer" like in some other languages.'),(0,i.kt)("p",null,'It\'s just a special value which represents "nothing", "empty" or "value unknown".'),(0,i.kt)("p",null,"The code above states that ",(0,i.kt)("inlineCode",{parentName:"p"},"age")," is unknown."),(0,i.kt)("h2",{id:"the-undefined-value"},'The "undefined" value'),(0,i.kt)("p",null,"The special value ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," also stands apart. It makes a type of its own, just like ",(0,i.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,i.kt)("p",null,"The meaning of ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined"),' is "value is not assigned".'),(0,i.kt)("p",null,"If a variable is declared, but not assigned, then its value is ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'let age;\n\nalert(age); // shows "undefined"\n')),(0,i.kt)("p",null,"Technically, it is possible to explicitly assign ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," to a variable:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'let age = 100;\n\n// change the value to undefined\nage = undefined;\n\nconsole.log(age); // "undefined"\n')),(0,i.kt)("p",null,"...But we don't recommend doing that. Normally, one uses ",(0,i.kt)("inlineCode",{parentName:"p"},"null"),' to assign an "empty" or "unknown" value to a variable, while ',(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," is reserved as a default initial value for unassigned things."),(0,i.kt)("h2",{id:"objects-and-symbols"},"Objects and Symbols"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"object")," type is special."),(0,i.kt)("p",null,'All other types are called "primitive" because their values can contain only a single thing (be it a string or a number or whatever). In contrast, objects are used to store collections of data and more complex entities.'),(0,i.kt)("p",null,"Being that important, objects deserve a special treatment. We'll deal with them later in the chapter , after we learn more about primitives."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"symbol")," type is used to create unique identifiers for objects. We have to mention it here for the sake of completeness, but also postpone the details till we know objects."),(0,i.kt)("h2",{id:"the-typeof-operator-type-typeof"},"The typeof operator ","[#type-typeof]"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"typeof")," operator returns the type of the operand. It's useful when we want to process values of different types differently or just want to do a quick check."),(0,i.kt)("p",null,"A call to ",(0,i.kt)("inlineCode",{parentName:"p"},"typeof x")," returns a string with the type name:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'console.log(typeof undefined) // "undefined"\n\nconsole.log(typeof 0) // "number"\n\nconsole.log(typeof 10n) // "bigint"\n\nconsole.log(typeof true) // "boolean"\n\nconsole.log(typeof "foo") // "string"\n\nconsole.log(typeof Symbol("id"))// "symbol"\n\nconsole.log(typeof Math) // "object"  (1)\n\n\nconsole.log(typeof null) // "object"  (2)\n\nconsole.log(typeof setTimeout) // "function"  (3)\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Output"),(0,i.kt)("pre",{parentName:"blockquote"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"undefined\nnumber\nbigint\nboolean\nstring\nsymbol\nobject\nobject\nfunction\n"))),(0,i.kt)("p",null,"The last three lines may need additional explanation:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Math")," is a built-in object that provides mathematical operations. We will learn it in the chapter <info:number>. Here, it serves just as an example of an object."),(0,i.kt)("li",{parentName:"ol"},"The result of ",(0,i.kt)("inlineCode",{parentName:"li"},"typeof null")," is ",(0,i.kt)("inlineCode",{parentName:"li"},'"object"'),". That's an officially recognized error in ",(0,i.kt)("inlineCode",{parentName:"li"},"typeof"),", coming from very early days of JavaScript and kept for compatibility. Definitely, ",(0,i.kt)("inlineCode",{parentName:"li"},"null")," is not an object. It is a special value with a separate type of its own. The behavior of ",(0,i.kt)("inlineCode",{parentName:"li"},"typeof")," is wrong here."),(0,i.kt)("li",{parentName:"ol"},"The result of ",(0,i.kt)("inlineCode",{parentName:"li"},"typeof setTimeout")," is ",(0,i.kt)("inlineCode",{parentName:"li"},'"function"'),", because ",(0,i.kt)("inlineCode",{parentName:"li"},"setTimeout")," is a function. We'll study functions in the next chapters where we'll also see that there's no special \"function\" type in JavaScript. Functions belong to the object type. But ",(0,i.kt)("inlineCode",{parentName:"li"},"typeof")," treats them differently, returning ",(0,i.kt)("inlineCode",{parentName:"li"},'"function"'),". That also comes from the early days of JavaScript. Technically, such behavior isn't correct, but can be convenient in practice.")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"The ",(0,i.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"typeof(x)")," syntax"),(0,i.kt)("p",{parentName:"admonition"},"You may also come across another syntax: ",(0,i.kt)("inlineCode",{parentName:"p"},"typeof(x)"),". It's the same as ",(0,i.kt)("inlineCode",{parentName:"p"},"typeof x"),"."),(0,i.kt)("p",{parentName:"admonition"},"To put it clear: ",(0,i.kt)("inlineCode",{parentName:"p"},"typeof")," is an operator, not a function. The parentheses here aren't a part of ",(0,i.kt)("inlineCode",{parentName:"p"},"typeof"),". It's the kind of parentheses used for mathematical grouping."),(0,i.kt)("p",{parentName:"admonition"},"Usually, such parentheses contain a mathematical expression, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"(2 + 2)"),", but here they contain only one argument ",(0,i.kt)("inlineCode",{parentName:"p"},"(x)"),". Syntactically, they allow to avoid a space between the ",(0,i.kt)("inlineCode",{parentName:"p"},"typeof")," operator and its argument, and some people like it."),(0,i.kt)("p",{parentName:"admonition"},"Some people prefer ",(0,i.kt)("inlineCode",{parentName:"p"},"typeof(x)"),", although the ",(0,i.kt)("inlineCode",{parentName:"p"},"typeof x")," syntax is much more common.")),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("p",null,"There are 6 basic data types in JavaScript."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Six primitive data types:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"number")," for numbers of any kind: integer or floating-point, integers are limited by ",(0,i.kt)("code",null,"\xb1(2",(0,i.kt)("sup",null,"53"),"-1)"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"string")," for strings. A string may have zero or more characters, there's no separate single-character type."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"boolean")," for ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),"/",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"null")," for unknown values -- a standalone type that has a single value ",(0,i.kt)("inlineCode",{parentName:"li"},"null"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"undefined")," for unassigned values -- a standalone type that has a single value ",(0,i.kt)("inlineCode",{parentName:"li"},"undefined"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"symbol")," for unique identifiers."))),(0,i.kt)("li",{parentName:"ul"},"And one non-primitive data type:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"object")," for more complex data structures.")))),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"typeof")," operator allows us to see which type is stored in a variable."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Usually used as ",(0,i.kt)("inlineCode",{parentName:"li"},"typeof x"),", but ",(0,i.kt)("inlineCode",{parentName:"li"},"typeof(x)")," is also possible."),(0,i.kt)("li",{parentName:"ul"},"Returns a string with the name of the type, like ",(0,i.kt)("inlineCode",{parentName:"li"},'"string"'),"."),(0,i.kt)("li",{parentName:"ul"},"For ",(0,i.kt)("inlineCode",{parentName:"li"},"null")," returns ",(0,i.kt)("inlineCode",{parentName:"li"},'"object"')," -- this is an error in the language, it's not actually an object.")),(0,i.kt)("p",null,"In the next chapters, we'll concentrate on primitive values and once we're familiar with them, we'll move on to objects."))}c.isMDXComponent=!0},3061:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/files/infinite-direct-19ca95e50654aadab2b1fbe9f115b99a.js"},580:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/files/infinite-aa7a32ce7f0e74082112d026d38fcb89.js"}}]);