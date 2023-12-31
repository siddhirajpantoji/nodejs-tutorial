---
id: variables
title: Variables 
sidebar_label: Variables
slug: /variables
---
Most of the time, a Javascript/Node.js application needs to work with information. Here are two examples:

1. An online shop – the information might include goods being sold and a shopping cart.
2. A chat application – the information might include users, messages, and much more.

Variables are used to store this information.

## A variable 
A [variable](https://en.wikipedia.org/wiki/Variable_(computer_science)) is a “named storage” for data. We can use variables to store goodies, visitors, and other data.

To create a variable in Javascript/Node.js, use the `let` keyword.

The statement below creates (in other words: declares) a variable with the name “message”:

```js
let message
```

Now, we can put some data into it by using the assignment operator =:

```js
let message;
// highlight-next-line
message = 'Shree'; // store the string 'Shree' in the variable named message
```
The string is now saved into the memory area associated with the variable. We can access it using the variable name:

```js
let message;
message = '!!Shree!!';
// highlight-next-line
console.log(message); // shows the variable content
```

To be concise, we can combine the variable declaration and assignment into a single line:
```js
// highlight-next-line
let message = '||Shree||'; // define the variable and assign the value

console.log(message); // ||Shree||
```

We can also declare multiple variables in one line:
```js
let user = 'Siya Ram', age = 25, message = 'Shree';

```
That might seem shorter, but we don’t recommend it. For the sake of better readability, please use a single line per variable.

The multiline variant is a bit longer, but easier to read:


```js
let user = 'Siya Ram';
let age = 25;
let message = 'Shree';
```

Some people also define multiple variables in this multiline style:

```js
let user = 'Siya Ram',
  age = 25,
  message = 'Shree';

```
…Or even in the “comma-first” style:

```js
let user = 'Siya Ram'
  , age = 25
  , message = 'Shree';

```
Technically, all these variants do the same thing. So, it’s a matter of personal taste and aesthetics.

:::info

In older scripts, you may also find another keyword: `var` instead of `let`:

```js 
var heart = 'Ram';

```
The `var` keyword is almost the same as `let`. It also declares a variable, but in a slightly different, “old-school” way.

There are subtle differences between let and var, but they do not matter for us yet. We’ll cover them in detail in the chapter where we learn about functions and scope .
:::

## A real-life analogy

We can easily grasp the concept of a “variable” if we imagine it as a “box” for data, with a uniquely-named sticker on it.

For instance, the variable `heart` can be imagined as a box labeled `"heart"` with the value `"Ram"` in it:
![](variable.svg)

We can put any value in the box.

We can also change it as many times as we want:

```js 
let heart;

heart = 'Gussa!';
// highlight-next-line
heart = 'Ram Ram'; // value changed

console.log(heart);
```

When the value is changed, the old data is removed from the variable:

![](variable-change.svg)

We can also declare two variables and copy data from one into the other.
```js 
let hello = 'Siya Ram';

let message;


// copy 'Siya Ram' from hello into message
// highlight-next-line
message = hello;

// now two variables hold the same data
console.log(hello); // Siya Ram
console.log(message); // Siya Ram
```

:::warning A variable should be declared only once.

A variable should be declared only once.

A repeated declaration of the same variable is an error:

```js 
let message = "Krodh";

// repeated 'let' leads to an error
// highlight-next-line
let message = "Matsar"; // SyntaxError: 'message' has already been declared

```
So, we should declare a variable once and then refer to it without `let`.
:::

## Variable naming

There are two limitations on variable names in JavaScript:

1. The name must contain only letters, digits, or the symbols `$` and `_`.
2. The first character must not be a digit.

Examples of valid names:

```js
let userName;
let test123;
```


When the name contains multiple words, [camelCase](https://en.wikipedia.org/wiki/CamelCase) is commonly used. That is: words go one after another, each word except first starting with a capital letter: `siyaVarRamchandraKiJai`.

What's interesting -- the dollar sign `'$'` and the underscore `'_'` can also be used in names. They are regular symbols, just like letters, without any special meaning.


These names are valid refer [Example](https://github.com/siddhirajpantoji/nodejs-tutorial/blob/main/static/code-snippets/variables/declaration.js):

```js 
let $ = 1; // declared a variable with the name "$"
let _ = 2; // and now a variable with the name "_"

console.log($ + _); // 3
```


[Example](https://github.com/siddhirajpantoji/nodejs-tutorial/blob/main/static/code-snippets/variables/wrong-var-names.js) of incorrect variable names:

```js 
let 1a; // cannot start with a digit

let my-name; // hyphens '-' aren't allowed in the name
```

:::info Case matters
Variables named `ram` and `RAM` are two different variables.

:::

:::info Non-Latin letters are allowed, but not recommended
It is possible to use any language, including cyrillic letters, Chinese logograms and so on, like this:

```js
let имя = '...';
let 我 = '...';
let रावण = 'शिव भक्त '
```

Technically, there is no error here. Such names are allowed, but there is an international convention to use English in variable names. Even if we're writing a small script, it may have a long life ahead. People from other countries may need to read it some time.
:::


:::caution Reserved Names

There is a **[list of reserved words](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords)**, which cannot be used as variable names because they are used by the language itself.

For example: `let`, `class`, `return`, and `function` are reserved.

The code below gives a syntax error:

```js
// error-next-line
let let = 5; // can't name a variable "let", error!
// error-next-line
let return = 5; // also can't name it "return", error!
```
:::

:::info without `use strict`

Normally, we need to define a variable before using it. But in the old times, it was technically possible to create a variable by a mere assignment of the value without using `let`. This still works now if we don't put `use strict` in our scripts to maintain compatibility with old scripts.
```js 
// note: no "use strict" in this example

num = 5; // the variable "num" is created if it didn't exist

console.log(num); // 5
```

This is a bad practice and would cause an error in strict mode:
```js
"use strict";
// error-next-line
num = 5; // error: num is not defined
```
:::

## Constants 

To declare a constant (unchanging) variable, use `const` instead of `let`:

```js
const myBirthday = '27.07.1990';
```
Variables declared using `const` are called "constants". They cannot be reassigned. An attempt to do so would cause an error:

```js
const myBirthday = '27.07.1990';
// error-next-line
myBirthday = '01.01.2001'; // error, can't reassign the constant!
```

When a programmer is sure that a variable will never change, they can declare it with `const` to guarantee and clearly communicate that fact to everyone.

### Uppercase constants

There is a widespread practice to use constants as aliases for difficult-to-remember values that are known prior to execution.

Such constants are named using capital letters and underscores.

For instance, let's make constants for colors in so-called "web" (hexadecimal) format:

```js run
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// ...when we need to pick a color
let color = COLOR_ORANGE;
console.log(color); // #FF7F00
```

Benefits:

- `COLOR_ORANGE` is much easier to remember than `"#FF7F00"`.
- It is much easier to mistype `"#FF7F00"` than `COLOR_ORANGE`.
- When reading the code, `COLOR_ORANGE` is much more meaningful than `#FF7F00`.

When should we use capitals for a constant and when should we name it normally? Let's make that clear.

Being a "constant" just means that a variable's value never changes. But there are constants that are known prior to execution (like a hexadecimal value for red) and there are constants that are *calculated* in run-time, during the execution, but do not change after their initial assignment.

For instance:

```js
const pageLoadTime = /* time taken by a webpage to load */;
```

The value of `pageLoadTime` is not known prior to the page load, so it's named normally. But it's still a constant because it doesn't change after assignment.

In other words, capital-named constants are only used as aliases for "hard-coded" values.

## Name things right

Talking about variables, there's one more extremely important thing.

A variable name should have a clean, obvious meaning, describing the data that it stores.

Variable naming is one of the most important and complex skills in programming. A quick glance at variable names can reveal which code was written by a beginner versus an experienced developer.

In a real project, most of the time is spent modifying and extending an existing code base rather than writing something completely separate from scratch. When we return to some code after doing something else for a while, it's much easier to find information that is well-labeled. Or, in other words, when the variables have good names.

Please spend time thinking about the right name for a variable before declaring it. Doing so will repay you handsomely.

Some good-to-follow rules are:

- Use human-readable names like `userName` or `shoppingCart`.
- Stay away from abbreviations or short names like `a`, `b`, `c`, unless you really know what you're doing.
- Make names maximally descriptive and concise. Examples of bad names are `data` and `value`. Such names say nothing. It's only okay to use them if the context of the code makes it exceptionally obvious which data or value the variable is referencing.
- Agree on terms within your team and in your own mind. If a site visitor is called a "user" then we should name related variables `currentUser` or `newUser` instead of `currentVisitor` or `newManInTown`.

Sounds simple? Indeed it is, but creating descriptive and concise variable names in practice is not. Go for it.

:::tip Reuse or create?
And the last note. There are some lazy programmers who, instead of declaring new variables, tend to reuse existing ones.

As a result, their variables are like boxes into which people throw different things without changing their stickers. What's inside the box now? Who knows? We need to come closer and check.

Such programmers save a little bit on variable declaration but lose ten times more on debugging.

An extra variable is good, not evil.

Modern JavaScript minifiers and browsers optimize code well enough, so it won't create performance issues. Using different variables for different values can even help the engine optimize your code.
:::

## Summary

We can declare variables to store data by using the `var`, `let`, or `const` keywords.

- `let` -- is a modern variable declaration.
- `var` -- is an old-school variable declaration. Normally we don't use it at all, but we'll cover subtle differences from `let` in the chapter where we discuss functions, Scope etc 
- `const` -- is like `let`, but the value of the variable can't be changed.

Variables should be named in a way that allows us to easily understand what's inside them.