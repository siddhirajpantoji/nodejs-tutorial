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

We'll see more about working with numbers in the chapter.