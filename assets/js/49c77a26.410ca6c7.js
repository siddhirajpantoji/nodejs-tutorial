"use strict";(self.webpackChunknode_tutorial=self.webpackChunknode_tutorial||[]).push([[283],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=p(n),c=r,h=u["".concat(s,".").concat(c)]||u[c]||d[c]||o;return n?a.createElement(h,l(l({ref:t},m),{},{components:n})):a.createElement(h,l({ref:t},m))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1987:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={id:"operators",title:"Operators",sidebar_label:"Operators",slug:"/operators"},l="Basic operators, maths",i={unversionedId:"Basics/operators",id:"Basics/operators",title:"Operators",description:"We know many operators from school. They are things like addition +, multiplication *, subtraction -, and so on.",source:"@site/docs/Basics/operators.md",sourceDirName:"Basics",slug:"/operators",permalink:"/nodejs-tutorial/docs/operators",draft:!1,tags:[],version:"current",frontMatter:{id:"operators",title:"Operators",sidebar_label:"Operators",slug:"/operators"},sidebar:"tutorialSidebar",previous:{title:"Type Conversions",permalink:"/nodejs-tutorial/docs/type-conversions"}},s={},p=[{value:"Terms: &quot;unary&quot;, &quot;binary&quot;, &quot;operand&quot;",id:"terms-unary-binary-operand",level:2},{value:"Maths",id:"maths",level:2},{value:"Remainder %",id:"remainder-",level:3},{value:"Exponentiation **",id:"exponentiation-",level:3},{value:"String concatenation with binary +",id:"string-concatenation-with-binary-",level:2},{value:"Numeric conversion, unary +",id:"numeric-conversion-unary-",level:2},{value:"Operator precedence",id:"operator-precedence",level:2},{value:"Assignment",id:"assignment",level:2},{value:"Assignment = returns a value",id:"assignment--returns-a-value",level:3},{value:"Chaining assignments",id:"chaining-assignments",level:3},{value:"Modify-in-place",id:"modify-in-place",level:2},{value:"Increment/decrement",id:"incrementdecrement",level:2},{value:"Bitwise operators",id:"bitwise-operators",level:2},{value:"Comma",id:"comma",level:2}],m={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"basic-operators-maths"},"Basic operators, maths"),(0,r.kt)("p",null,"We know many operators from school. They are things like addition ",(0,r.kt)("inlineCode",{parentName:"p"},"+"),", multiplication ",(0,r.kt)("inlineCode",{parentName:"p"},"*"),", subtraction ",(0,r.kt)("inlineCode",{parentName:"p"},"-"),", and so on."),(0,r.kt)("p",null,"In this chapter, we\u2019ll start with simple operators, then concentrate on JavaScript-specific aspects, not covered by school arithmetic."),(0,r.kt)("h2",{id:"terms-unary-binary-operand"},'Terms: "unary", "binary", "operand"'),(0,r.kt)("p",null,"Before we move on, let's grasp some common terminology."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"An operand")," -- is what operators are applied to. For instance, in the multiplication of ",(0,r.kt)("inlineCode",{parentName:"p"},"5 * 2")," there are two operands: the left operand is ",(0,r.kt)("inlineCode",{parentName:"p"},"5")," and the right operand is ",(0,r.kt)("inlineCode",{parentName:"p"},"2"),'. Sometimes, people call these "arguments" instead of "operands".')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"An operator is ",(0,r.kt)("em",{parentName:"p"},"unary")," if it has a single operand. For example, the unary negation ",(0,r.kt)("inlineCode",{parentName:"p"},"-")," reverses the sign of a number:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let x = 1;\n\n// highlight-start\nx = -x;\n// highlight-end\nconsole.log( x ); // -1, unary negation was applied\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"An operator is ",(0,r.kt)("em",{parentName:"p"},"binary")," if it has two operands. The same minus exists in binary form as well:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let x = 1, y = 3;\nconsole.log( y - x ); // 2, binary minus subtracts values\n")),(0,r.kt)("p",{parentName:"li"},"  Formally, in the examples above we have two different operators that share the same symbol: the negation operator, a unary operator that reverses the sign, and the subtraction operator, a binary operator that subtracts one number from another."))),(0,r.kt)("h2",{id:"maths"},"Maths"),(0,r.kt)("p",null,"The following math operations are supported:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Addition ",(0,r.kt)("inlineCode",{parentName:"li"},"+"),","),(0,r.kt)("li",{parentName:"ul"},"Subtraction ",(0,r.kt)("inlineCode",{parentName:"li"},"-"),","),(0,r.kt)("li",{parentName:"ul"},"Multiplication ",(0,r.kt)("inlineCode",{parentName:"li"},"*"),","),(0,r.kt)("li",{parentName:"ul"},"Division ",(0,r.kt)("inlineCode",{parentName:"li"},"/"),","),(0,r.kt)("li",{parentName:"ul"},"Remainder ",(0,r.kt)("inlineCode",{parentName:"li"},"%"),","),(0,r.kt)("li",{parentName:"ul"},"Exponentiation ",(0,r.kt)("inlineCode",{parentName:"li"},"**"),".")),(0,r.kt)("p",null,"The first four are straightforward, while ",(0,r.kt)("inlineCode",{parentName:"p"},"%")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"**")," need a few words about them."),(0,r.kt)("h3",{id:"remainder-"},"Remainder %"),(0,r.kt)("p",null,"The remainder operator ",(0,r.kt)("inlineCode",{parentName:"p"},"%"),", despite its appearance, is not related to percents."),(0,r.kt)("p",null,"The result of ",(0,r.kt)("inlineCode",{parentName:"p"},"a % b")," is the ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Remainder"},"remainder")," of the integer division of ",(0,r.kt)("inlineCode",{parentName:"p"},"a")," by ",(0,r.kt)("inlineCode",{parentName:"p"},"b"),"."),(0,r.kt)("p",null,"For instance:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"console.log( 5 % 2 ); // 1, the remainder of 5 divided by 2\nconsole.log( 8 % 3 ); // 2, the remainder of 8 divided by 3\nconsole.log( 8 % 4 ); // 0, the remainder of 8 divided by 4\n")),(0,r.kt)("h3",{id:"exponentiation-"},"Exponentiation **"),(0,r.kt)("p",null,"The exponentiation operator ",(0,r.kt)("inlineCode",{parentName:"p"},"a ** b")," raises ",(0,r.kt)("inlineCode",{parentName:"p"},"a")," to the power of ",(0,r.kt)("inlineCode",{parentName:"p"},"b"),"."),(0,r.kt)("p",null,"In school maths, we write that as a",(0,r.kt)("sup",null,"b"),"."),(0,r.kt)("p",null,"For instance:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"console.log( 2 ** 2 ); // 2\xb2 = 4\nconsole.log( 2 ** 3 ); // 2\xb3 = 8\nconsole.log( 2 ** 4 ); // 2\u2074 = 16\n")),(0,r.kt)("p",null,"Just like in maths, the exponentiation operator is defined for non-integer numbers as well."),(0,r.kt)("p",null,"For example, a square root is an exponentiation by \xbd:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"console.log( 4 ** (1/2) ); // 2 (power of 1/2 is the same as a square root)\nconsole.log( 8 ** (1/3) ); // 2 (power of 1/3 is the same as a cubic root)\n")),(0,r.kt)("h2",{id:"string-concatenation-with-binary-"},"String concatenation with binary +"),(0,r.kt)("p",null,"Let's meet the features of JavaScript operators that are beyond school arithmetics."),(0,r.kt)("p",null,"Usually, the plus operator ",(0,r.kt)("inlineCode",{parentName:"p"},"+")," sums numbers."),(0,r.kt)("p",null,"But, if the binary ",(0,r.kt)("inlineCode",{parentName:"p"},"+")," is applied to strings, it merges (concatenates) them:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'let s = "my" + "string";\nconsole.log(s); // mystring\n')),(0,r.kt)("p",null,"Note that if any of the operands is a string, then the other one is converted to a string too."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"console.log( '1' + 2 ); // \"12\"\nconsole.log( 2 + '1' ); // \"21\"\n")),(0,r.kt)("p",null,"See, it doesn't matter whether the first operand is a string or the second one."),(0,r.kt)("p",null,"Here's a more complex example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'console.log(2 + 2 + \'1\' ); // "41" and not "221"\n')),(0,r.kt)("p",null,"Here, operators work one after another. The first ",(0,r.kt)("inlineCode",{parentName:"p"},"+")," sums two numbers, so it returns ",(0,r.kt)("inlineCode",{parentName:"p"},"4"),", then the next ",(0,r.kt)("inlineCode",{parentName:"p"},"+")," adds the string ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," to it, so it's like ",(0,r.kt)("inlineCode",{parentName:"p"},"4 + '1' = '41'"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'console.log(\'1\' + 2 + 2); // "122" and not "14"\n')),(0,r.kt)("p",null,"Here, the first operand is a string, the compiler treats the other two operands as strings too. The ",(0,r.kt)("inlineCode",{parentName:"p"},"2")," gets concatenated to ",(0,r.kt)("inlineCode",{parentName:"p"},"'1'"),", so it's like ",(0,r.kt)("inlineCode",{parentName:"p"},"'1' + 2 = \"12\"")," and ",(0,r.kt)("inlineCode",{parentName:"p"},'"12" + 2 = "122"'),"."),(0,r.kt)("p",null,"The binary ",(0,r.kt)("inlineCode",{parentName:"p"},"+")," is the only operator that supports strings in such a way. Other arithmetic operators work only with numbers and always convert their operands to numbers."),(0,r.kt)("p",null,"Here's the demo for subtraction and division:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"console.log( 6 - '2' ); // 4, converts '2' to a number\nconsole.log( '6' / '2' ); // 3, converts both operands to numbers\n")),(0,r.kt)("h2",{id:"numeric-conversion-unary-"},"Numeric conversion, unary +"),(0,r.kt)("p",null,"The plus ",(0,r.kt)("inlineCode",{parentName:"p"},"+")," exists in two forms: the binary form that we used above and the unary form."),(0,r.kt)("p",null,"The unary plus or, in other words, the plus operator ",(0,r.kt)("inlineCode",{parentName:"p"},"+")," applied to a single value, doesn't do anything to numbers. But if the operand is not a number, the unary plus converts it into a number."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'// No effect on numbers\nlet x = 1;\nconsole.log( +x ); // 1\n\nlet y = -2;\nconsole.log( +y ); // -2\n\n// highlight-start\n// Converts non-numbers\nconsole.log( +true ); // 1\nconsole.log( +"" );   // 0\n// highlight-end\n')),(0,r.kt)("p",null,"It actually does the same thing as ",(0,r.kt)("inlineCode",{parentName:"p"},"Number(...)"),", but is shorter."),(0,r.kt)("p",null,"The need to convert strings to numbers arises very often. For example, if we are getting values from HTML form fields, they are usually strings. What if we want to sum them?"),(0,r.kt)("p",null,"The binary plus would add them as strings:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'let apples = "2";\nlet oranges = "3";\n\nconsole.log( apples + oranges ); // "23", the binary plus concatenates strings\n')),(0,r.kt)("p",null,"If we want to treat them as numbers, we need to convert and then sum them:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'let apples = "2";\nlet oranges = "3";\n\n// highlight-start\n// both values converted to numbers before the binary plus\nconsole.log( +apples + +oranges ); // 5\n// highlight-end\n\n// the longer variant\n// console.log( Number(apples) + Number(oranges) ); // 5\n')),(0,r.kt)("p",null,"From a mathematician's standpoint, the abundance of pluses may seem strange. But from a programmer's standpoint, there's nothing special: unary pluses are applied first, they convert strings to numbers, and then the binary plus sums them up."),(0,r.kt)("p",null,"Why are unary pluses applied to values before the binary ones? As we're going to see, that's because of their ",(0,r.kt)("em",{parentName:"p"},"higher precedence"),"."),(0,r.kt)("h2",{id:"operator-precedence"},"Operator precedence"),(0,r.kt)("p",null,"If an expression has more than one operator, the execution order is defined by their ",(0,r.kt)("em",{parentName:"p"},"precedence"),", or, in other words, the default priority order of operators."),(0,r.kt)("p",null,"From school, we all know that the multiplication in the expression ",(0,r.kt)("inlineCode",{parentName:"p"},"1 + 2 * 2")," should be calculated before the addition. That's exactly the precedence thing. The multiplication is said to have ",(0,r.kt)("em",{parentName:"p"},"a higher precedence")," than the addition."),(0,r.kt)("p",null,"Parentheses override any precedence, so if we're not satisfied with the default order, we can use them to change it. For example, write ",(0,r.kt)("inlineCode",{parentName:"p"},"(1 + 2) * 2"),"."),(0,r.kt)("p",null,"There are many operators in JavaScript. Every operator has a corresponding precedence number. The one with the larger number executes first. If the precedence is the same, the execution order is from left to right."),(0,r.kt)("p",null,"Here's an extract from the ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence"},"precedence table")," (you don't need to remember this, but note that unary operators are higher than corresponding binary ones):"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Precedence"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Sign"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"..."),(0,r.kt)("td",{parentName:"tr",align:null},"..."),(0,r.kt)("td",{parentName:"tr",align:null},"...")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"14"),(0,r.kt)("td",{parentName:"tr",align:null},"unary plus"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"+"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"14"),(0,r.kt)("td",{parentName:"tr",align:null},"unary negation"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"13"),(0,r.kt)("td",{parentName:"tr",align:null},"exponentiation"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"**"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"12"),(0,r.kt)("td",{parentName:"tr",align:null},"multiplication"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"*"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"12"),(0,r.kt)("td",{parentName:"tr",align:null},"division"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"11"),(0,r.kt)("td",{parentName:"tr",align:null},"addition"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"+"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"11"),(0,r.kt)("td",{parentName:"tr",align:null},"subtraction"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"..."),(0,r.kt)("td",{parentName:"tr",align:null},"..."),(0,r.kt)("td",{parentName:"tr",align:null},"...")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"assignment"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"="))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"..."),(0,r.kt)("td",{parentName:"tr",align:null},"..."),(0,r.kt)("td",{parentName:"tr",align:null},"...")))),(0,r.kt)("p",null,'As we can see, the "unary plus" has a priority of ',(0,r.kt)("inlineCode",{parentName:"p"},"14")," which is higher than the ",(0,r.kt)("inlineCode",{parentName:"p"},"11"),' of "addition" (binary plus). That\'s why, in the expression ',(0,r.kt)("inlineCode",{parentName:"p"},'"+apples + +oranges"'),", unary pluses work before the addition."),(0,r.kt)("h2",{id:"assignment"},"Assignment"),(0,r.kt)("p",null,"Let's note that an assignment ",(0,r.kt)("inlineCode",{parentName:"p"},"=")," is also an operator. It is listed in the precedence table with the very low priority of ",(0,r.kt)("inlineCode",{parentName:"p"},"2"),"."),(0,r.kt)("p",null,"That's why, when we assign a variable, like ",(0,r.kt)("inlineCode",{parentName:"p"},"x = 2 * 2 + 1"),", the calculations are done first and then the ",(0,r.kt)("inlineCode",{parentName:"p"},"=")," is evaluated, storing the result in ",(0,r.kt)("inlineCode",{parentName:"p"},"x"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let x = 2 * 2 + 1;\n\nconsole.log( x ); // 5\n")),(0,r.kt)("h3",{id:"assignment--returns-a-value"},"Assignment = returns a value"),(0,r.kt)("p",null,"The fact of ",(0,r.kt)("inlineCode",{parentName:"p"},"="),' being an operator, not a "magical" language construct has an interesting implication.'),(0,r.kt)("p",null,"All operators in JavaScript return a value. That's obvious for ",(0,r.kt)("inlineCode",{parentName:"p"},"+")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"-"),", but also true for ",(0,r.kt)("inlineCode",{parentName:"p"},"="),"."),(0,r.kt)("p",null,"The call ",(0,r.kt)("inlineCode",{parentName:"p"},"x = value")," writes the ",(0,r.kt)("inlineCode",{parentName:"p"},"value")," into ",(0,r.kt)("inlineCode",{parentName:"p"},"x")," ",(0,r.kt)("em",{parentName:"p"},"and then returns it"),"."),(0,r.kt)("p",null,"Here's a demo that uses an assignment as part of a more complex expression:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let a = 1;\nlet b = 2;\n\n// highlight-start\nlet c = 3 - (a = b + 1);\n// highlight-end\n\nconsole.log( a ); // 3\nconsole.log( c ); // 0\n")),(0,r.kt)("p",null,"In the example above, the result of expression ",(0,r.kt)("inlineCode",{parentName:"p"},"(a = b + 1)")," is the value which was assigned to ",(0,r.kt)("inlineCode",{parentName:"p"},"a")," (that is ",(0,r.kt)("inlineCode",{parentName:"p"},"3"),"). It is then used for further evaluations."),(0,r.kt)("p",null,"Funny code, isn't it? We should understand how it works, because sometimes we see it in JavaScript libraries."),(0,r.kt)("p",null,"Although, please don't write the code like that. Such tricks definitely don't make code clearer or readable."),(0,r.kt)("h3",{id:"chaining-assignments"},"Chaining assignments"),(0,r.kt)("p",null,"Another interesting feature is the ability to chain assignments:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let a, b, c;\n\n// highlight-start\na = b = c = 2 + 2;\n// highlight-end\n\nconsole.log( a ); // 4\nconsole.log( b ); // 4\nconsole.log( c ); // 4\n")),(0,r.kt)("p",null,"Chained assignments evaluate from right to left. First, the rightmost expression ",(0,r.kt)("inlineCode",{parentName:"p"},"2 + 2")," is evaluated and then assigned to the variables on the left: ",(0,r.kt)("inlineCode",{parentName:"p"},"c"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"b")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"a"),". At the end, all the variables share a single value."),(0,r.kt)("p",null,"Once again, for the purposes of readability it's better to split such code into few lines:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"c = 2 + 2;\nb = c;\na = c;\n")),(0,r.kt)("p",null,"That's easier to read, especially when eye-scanning the code fast."),(0,r.kt)("h2",{id:"modify-in-place"},"Modify-in-place"),(0,r.kt)("p",null,"We often need to apply an operator to a variable and store the new result in that same variable."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let n = 2;\nn = n + 5;\nn = n * 2;\n")),(0,r.kt)("p",null,"This notation can be shortened using the operators ",(0,r.kt)("inlineCode",{parentName:"p"},"+=")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"*="),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let n = 2;\nn += 5; // now n = 7 (same as n = n + 5)\nn *= 2; // now n = 14 (same as n = n * 2)\n\nconsole.log( n ); // 14\n")),(0,r.kt)("p",null,'Short "modify-and-assign" operators exist for all arithmetical and bitwise operators: ',(0,r.kt)("inlineCode",{parentName:"p"},"/="),", ",(0,r.kt)("inlineCode",{parentName:"p"},"-="),", etc."),(0,r.kt)("p",null,"Such operators have the same precedence as a normal assignment, so they run after most other calculations:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let n = 2;\n\nn *= 3 + 5; // right part evaluated first, same as n *= 8\n\nconsole.log( n ); // 16\n")),(0,r.kt)("h2",{id:"incrementdecrement"},"Increment/decrement"),(0,r.kt)("p",null,"Increasing or decreasing a number by one is among the most common numerical operations."),(0,r.kt)("p",null,"So, there are special operators for it:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Increment")," ",(0,r.kt)("inlineCode",{parentName:"p"},"++")," increases a variable by 1:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"no-beautify","no-beautify":!0},"let counter = 2;\ncounter++;        // works the same as counter = counter + 1, but is shorter\nconsole.log( counter ); // 3\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Decrement")," ",(0,r.kt)("inlineCode",{parentName:"p"},"--")," decreases a variable by 1:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"no-beautify","no-beautify":!0},"let counter = 2;\ncounter--;        // works the same as counter = counter - 1, but is shorter\nconsole.log( counter ); // 1\n")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-warn"},"Increment/decrement can only be applied to variables. Trying to use it on a value like `5++` will give an error.\n")),(0,r.kt)("p",null,"The operators ",(0,r.kt)("inlineCode",{parentName:"p"},"++")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"--")," can be placed either before or after a variable."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'When the operator goes after the variable, it is in "postfix form": ',(0,r.kt)("inlineCode",{parentName:"li"},"counter++"),"."),(0,r.kt)("li",{parentName:"ul"},'The "prefix form" is when the operator goes before the variable: ',(0,r.kt)("inlineCode",{parentName:"li"},"++counter"),".")),(0,r.kt)("p",null,"Both of these statements do the same thing: increase ",(0,r.kt)("inlineCode",{parentName:"p"},"counter")," by ",(0,r.kt)("inlineCode",{parentName:"p"},"1"),"."),(0,r.kt)("p",null,"Is there any difference? Yes, but we can only see it if we use the returned value of ",(0,r.kt)("inlineCode",{parentName:"p"},"++/--"),"."),(0,r.kt)("p",null,"Let's clarify. As we know, all operators return a value. Increment/decrement is no exception. The prefix form returns the new value while the postfix form returns the old value (prior to increment/decrement)."),(0,r.kt)("p",null,"To see the difference, here's an example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let counter = 1;\nlet a = ++counter; // (*)\n\nconsole.log(a); // // highlight-start2// highlight-end\n")),(0,r.kt)("p",null,"In the line ",(0,r.kt)("inlineCode",{parentName:"p"},"(*)"),", the ",(0,r.kt)("em",{parentName:"p"},"prefix")," form ",(0,r.kt)("inlineCode",{parentName:"p"},"++counter")," increments ",(0,r.kt)("inlineCode",{parentName:"p"},"counter")," and returns the new value, ",(0,r.kt)("inlineCode",{parentName:"p"},"2"),". So, the ",(0,r.kt)("inlineCode",{parentName:"p"},"console.log")," shows ",(0,r.kt)("inlineCode",{parentName:"p"},"2"),"."),(0,r.kt)("p",null,"Now, let's use the postfix form:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let counter = 1;\nlet a = counter++; // (*) changed ++counter to counter++\n\nconsole.log(a); // // highlight-start1// highlight-end\n")),(0,r.kt)("p",null,"In the line ",(0,r.kt)("inlineCode",{parentName:"p"},"(*)"),", the ",(0,r.kt)("em",{parentName:"p"},"postfix")," form ",(0,r.kt)("inlineCode",{parentName:"p"},"counter++")," also increments ",(0,r.kt)("inlineCode",{parentName:"p"},"counter")," but returns the ",(0,r.kt)("em",{parentName:"p"},"old")," value (prior to increment). So, the ",(0,r.kt)("inlineCode",{parentName:"p"},"console.log")," shows ",(0,r.kt)("inlineCode",{parentName:"p"},"1"),"."),(0,r.kt)("p",null,"To summarize:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If the result of increment/decrement is not used, there is no difference in which form to use:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let counter = 0;\ncounter++;\n++counter;\nconsole.log( counter ); // 2, the lines above did the same\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If we'd like to increase a value ",(0,r.kt)("em",{parentName:"p"},"and")," immediately use the result of the operator, we need the prefix form:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let counter = 0;\nconsole.log( ++counter ); // 1\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If we'd like to increment a value but use its previous value, we need the postfix form:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let counter = 0;\nconsole.log( counter++ ); // 0\n")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-smart",metastring:'header="Increment/decrement among other operators"',header:'"Increment/decrement',among:!0,other:!0,'operators"':!0},'The operators `++/--` can be used inside expressions as well. Their precedence is higher than most other arithmetical operations.\n\nFor instance:\n\n```js\nlet counter = 1;\nconsole.log( 2 * ++counter ); // 4\n```\n\nCompare with:\n\n```js\nlet counter = 1;\nconsole.log( 2 * counter++ ); // 2, because counter++ returns the "old" value\n```\n\nThough technically okay, such notation usually makes code less readable. One line does multiple things -- not good.\n\nWhile reading code, a fast "vertical" eye-scan can easily miss something like `counter++` and it won\'t be obvious that the variable increased.\n\nWe advise a style of "one line -- one action":\n\n```js\nlet counter = 1;\nconsole.log( 2 * counter );\ncounter++;\n```\n')),(0,r.kt)("h2",{id:"bitwise-operators"},"Bitwise operators"),(0,r.kt)("p",null,"Bitwise operators treat arguments as 32-bit integer numbers and work on the level of their binary representation."),(0,r.kt)("p",null,"These operators are not JavaScript-specific. They are supported in most programming languages."),(0,r.kt)("p",null,"The list of operators:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"AND ( ",(0,r.kt)("inlineCode",{parentName:"li"},"&")," )"),(0,r.kt)("li",{parentName:"ul"},"OR ( ",(0,r.kt)("inlineCode",{parentName:"li"},"|")," )"),(0,r.kt)("li",{parentName:"ul"},"XOR ( ",(0,r.kt)("inlineCode",{parentName:"li"},"^")," )"),(0,r.kt)("li",{parentName:"ul"},"NOT ( ",(0,r.kt)("inlineCode",{parentName:"li"},"~")," )"),(0,r.kt)("li",{parentName:"ul"},"LEFT SHIFT ( ",(0,r.kt)("inlineCode",{parentName:"li"},"<<")," )"),(0,r.kt)("li",{parentName:"ul"},"RIGHT SHIFT ( ",(0,r.kt)("inlineCode",{parentName:"li"},">>")," )"),(0,r.kt)("li",{parentName:"ul"},"ZERO-FILL RIGHT SHIFT ( ",(0,r.kt)("inlineCode",{parentName:"li"},">>>")," )")),(0,r.kt)("p",null,"These operators are used very rarely, when we need to fiddle with numbers on the very lowest (bitwise) level. We won't need these operators any time soon, as web development has little use of them, but in some special areas, such as cryptography, they are useful. You can read the ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#bitwise_operators"},"Bitwise Operators")," chapter on MDN when a need arises."),(0,r.kt)("h2",{id:"comma"},"Comma"),(0,r.kt)("p",null,"The comma operator ",(0,r.kt)("inlineCode",{parentName:"p"},",")," is one of the rarest and most unusual operators. Sometimes, it's used to write shorter code, so we need to know it in order to understand what's going on."),(0,r.kt)("p",null,"The comma operator allows us to evaluate several expressions, dividing them with a comma ",(0,r.kt)("inlineCode",{parentName:"p"},","),". Each of them is evaluated but only the result of the last one is returned."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// highlight-start\nlet a = (1 + 2, 3 + 4);\n// highlight-end\n\nconsole.log( a ); // 7 (the result of 3 + 4)\n")),(0,r.kt)("p",null,"Here, the first expression ",(0,r.kt)("inlineCode",{parentName:"p"},"1 + 2")," is evaluated and its result is thrown away. Then, ",(0,r.kt)("inlineCode",{parentName:"p"},"3 + 4")," is evaluated and returned as the result."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-smart",metastring:'header="Comma has a very low precedence"',header:'"Comma',has:!0,a:!0,very:!0,low:!0,'precedence"':!0},"Please note that the comma operator has very low precedence, lower than `=`, so parentheses are important in the example above.\n\nWithout them: `a = 1 + 2, 3 + 4` evaluates `+` first, summing the numbers into `a = 3, 7`, then the assignment operator `=` assigns `a = 3`, and the rest is ignored. It's like `(a = 1 + 2), 3 + 4`.\n")),(0,r.kt)("p",null,"Why do we need an operator that throws away everything except the last expression?"),(0,r.kt)("p",null,"Sometimes, people use it in more complex constructs to put several actions in one line."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// three operations in one line\nfor ( a = 1, b = 3, c = a * b ; a < 10; a++) {\n ...\n}\n")),(0,r.kt)("p",null,"Such tricks are used in many JavaScript frameworks. That's why we're mentioning them. But usually they don't improve code readability so we should think well before using them."))}d.isMDXComponent=!0}}]);