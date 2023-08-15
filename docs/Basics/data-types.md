---
id: data-types
title: Data Types 
sidebar_label: Data Types
slug: /data-types
---


A value in JavaScript is always of a certain type. For example, a string or a number.

There are eight basic data types in JavaScript. Here, we'll cover them in general and in the next chapters we'll talk about each of them in detail.

We can put any type in a variable. For example, a variable can at one moment be a string and then store a number:
This is a basic Introduction to get you started 

```js
// no error
let message = "Ram";
message = 123456;
```

Programming languages that allow such things, such as JavaScript, are called "dynamically typed", meaning that there exist data types, but variables are not bound to any of them.

## Number

```js
let n = 123;
n = 12.345;
```

The `number` type represents both integer and floating point numbers.

There are many operations for numbers, e.g. multiplication `*`, division `/`, addition `+`, subtraction `-`, and so on.

Besides regular numbers, there are so-called "special numeric values" which also belong to this data type: `Infinity`, `-Infinity` and `NaN`.

- `Infinity` represents the mathematical [Infinity](https://en.wikipedia.org/wiki/Infinity) ∞. It is a special value that's greater than any number.

    We can get it as a result of division by zero:  [code](/code-snippets/variables/infinite.js)
    ```js
        console.log( 1 / 0 ); // Infinity
    ```
    Or just reference it directly: [code](/code-snippets/variables/infinite-direct.js)
    
    ```js
    console.log(Infinity)
    ```

- `NaN` represents a computational error. It is a result of an incorrect or an undefined mathematical operation, for instance:

    ```js 
    console.log( "not a number" / 2 ); // NaN, such division is erroneous
    ```

    `NaN` is sticky. Any further mathematical operation on `NaN` returns `NaN`:

    ```js 
    console.log( NaN + 1 ); // NaN
    console.log( 3 * NaN ); // NaN
    console.log( "not a number" / 2 - 1 ); // NaN
    ```

    So, if there's a `NaN` somewhere in a mathematical expression, it propagates to the whole result (there's only one exception to that: `NaN ** 0` is `1`).


:::info Mathematical operations are safe
Doing maths is "safe" in JavaScript. We can do anything: divide by zero, treat non-numeric strings as numbers, etc.

The script will never stop with a fatal error ("die"). At worst, we'll get `NaN` as the result.
:::

Special numeric values formally belong to the "number" type. Of course they are not numbers in the common sense of this word.

We'll see more about working with numbers in the chapter later 

## String

A string in JavaScript must be surrounded by quotes.

```js
let str = "Ram";
let str2 = 'Siya var Ram chandra ki jay';
let phrase = `Jai Shri ${str}`;
console.log(str)
console.log(str2)
console.log(phrase)
```

In JavaScript, there are 3 types of quotes.

1. Double quotes: `"Siya Ram"`.
2. Single quotes: `'Siya Ram'`.
3. Backticks: <code>&#96;Siya Ram&#96;</code>.

Double and single quotes are "simple" quotes. There's practically no difference between them in JavaScript.

Backticks are "extended functionality" quotes. They allow us to embed variables and expressions into a string by wrapping them in `${…}`, for example:

```js run
let name = "Ram";

// embed a variable
console.log( `Jai Shri ${name}` ); // Jai Shri Ram

// embed an expression
console.log( `Hanuman x  ${1 + 2}` ); // the result is 3
```


The expression inside `${…}` is evaluated and the result becomes a part of the string. We can put anything in there: a variable like `name` or an arithmetical expression like `1 + 2` or something more complex.

:::info
Please note that this can only be done in backticks. Other quotes don't have this embedding functionality!
```js
console.log( "Raghunath ${1 + 2}" ); // the result is ${1 + 2} (double quotes do nothing)
```
:::
We'll cover strings more thoroughly in the String Chapter Later.

:::info There is no *character* type
In some languages, there is a special "character" type for a single character. For example, in the C language and in Java it is called "char".

In JavaScript, there is no such type. There's only one type: `string`. A string may consist of zero characters (be empty), one character or many of them.
:::

## Boolean (logical type)

The boolean type has only two values: `true` and `false`.

This type is commonly used to store yes/no values: `true` means "yes, correct", and `false` means "no, incorrect".

For instance:

```js
let shriRam = true; // yes, name field is checked
let ravanIsHero = false; // no, age field is not checked
```

Boolean values also come as a result of comparisons:

```js run
let isGreater = 4 > 1;

console.log( isGreater ); // true (the comparison result is "yes")
```

We'll cover booleans more deeply in the chapter covering conditions .

## The "null" value

The special `null` value does not belong to any of the types described above.

It forms a separate type of its own which contains only the `null` value:

```js
let age = null;
```

In JavaScript, `null` is not a "reference to a non-existing object" or a "null pointer" like in some other languages.

It's just a special value which represents "nothing", "empty" or "value unknown".

The code above states that `age` is unknown.