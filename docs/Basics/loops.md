---
id: loops
title: Loops While , Do While 
sidebar_label: Loops
slug: /loops
---

# Loops: while and for

We often need to repeat actions.

For example, outputting goods from a list one after another or just running the same code for each number from 1 to 10.

*Loops* are a way to repeat the same code multiple times.

:::info The for..of and for..in loops"
A small announcement for advanced readers.

This article covers only basic loops: `while`, `do..while` and `for(..;..;..)`.

If you came to this article searching for other types of loops, here are the pointers:

- See for..in  to loop over object properties.
- See for..of  and  iterables for looping over arrays and iterable objects.

Otherwise, please read on.
:::


## The "while" loop

The `while` loop has the following syntax:

```js
while (condition) {
  // code
  // so-called "loop body"
}
```

While the `condition` is truthy, the `code` from the loop body is executed.

For instance, the loop below outputs `i` while `i < 3`:

```js run
let i = 0;
while (i < 3) { // shows 0, then 1, then 2
  console.log( i );
  i++;
}
```

A single execution of the loop body is called *an iteration*. The loop in the example above makes three iterations.

If `i++` was missing from the example above, the loop would repeat (in theory) forever. In practice, the browser provides ways to stop such loops, and in server-side JavaScript, we can kill the process.

Any expression or variable can be a loop condition, not just comparisons: the condition is evaluated and converted to a boolean by `while`.

For instance, a shorter way to write `while (i != 0)` is `while (i)`:

```js
let i = 3;
// highlight-next-line
while (i) { // when i becomes 0, the condition becomes falsy, and the loop stops
  console.log( i );
  i--;
}    
```

:::note Curly braces are not required for a single-line body"
If the loop body has a single statement, we can omit the curly braces `{…}`:

```js run
let i = 3;
// highlight-next-line
while (i) console.log(i--);
```
:::

## The "do..while" loop

The condition check can be moved *below* the loop body using the `do..while` syntax:

```js
do {
  // loop body
} while (condition);
```

The loop will first execute the body, then check the condition, and, while it's truthy, execute it again and again.

For example:

```js run
let i = 0;
do {
  console.log( i );
  i++;
} while (i < 3);
```

This form of syntax should only be used when you want the body of the loop to execute **at least once** regardless of the condition being truthy. Usually, the other form is preferred: `while(…) {…}`.

## The "for" loop

The `for` loop is more complex, but it's also the most commonly used loop.

It looks like this:

```js
for (begin; condition; step) {
  // ... loop body ...
}
```

Let's learn the meaning of these parts by example. The loop below runs `console.log(i)` for `i` from `0` up to (but not including) `3`:

```js
for (let i = 0; i < 3; i++) { // shows 0, then 1, then 2
  console.log(i);
}
```

Let's examine the `for` statement part-by-part:

| part  |          |                                                                            |
|-------|----------|----------------------------------------------------------------------------|
| begin | `let i = 0`    | Executes once upon entering the loop.                                      |
| condition | `i < 3`| Checked before every loop iteration. If false, the loop stops.              |
| body | `console.log(i)`| Runs again and again while the condition is truthy.                         |
| step| `i++`      | Executes after the body on each iteration. |

The general loop algorithm works like this:

```
Run begin
→ (if condition → run body and run step)
→ (if condition → run body and run step)
→ (if condition → run body and run step)
→ ...
```

That is, `begin` executes once, and then it iterates: after each `condition` test, `body` and `step` are executed.

If you are new to loops, it could help to go back to the example and reproduce how it runs step-by-step on a piece of paper.

Here's exactly what happens in our case:

```js
// for (let i = 0; i < 3; i++) console.log(i)

// run begin
let i = 0
// if condition → run body and run step
if (i < 3) { console.log(i); i++ }
// if condition → run body and run step
if (i < 3) { console.log(i); i++ }
// if condition → run body and run step
if (i < 3) { console.log(i); i++ }
// ...finish, because now i == 3
```


:::tip Inline variable declaration
Here, the "counter" variable `i` is declared right in the loop. This is called an "inline" variable declaration. Such variables are visible only inside the loop.

```js run
// highlight-next-line
for (let i = 0; i < 3; i++) {
  console.log(i); // 0, 1, 2
}
// error-next-line
console.log(i); // error, no such variable
```

Instead of defining a variable, we could use an existing one:

```js run
let i = 0;

for (i = 0; i < 3; i++) { // use an existing variable
  console.log(i); // 0, 1, 2
}

console.log(i); // 3, visible, because declared outside of the loop
```
:::

### Skipping parts

Any part of `for` can be skipped.

For example, we can omit `begin` if we don't need to do anything at the loop start.

Like here:

```js 
let i = 0; // we have i already declared and assigned

for (; i < 3; i++) { // no need for "begin"
  console.log( i ); // 0, 1, 2
}
```

We can also remove the `step` part:

```js 
let i = 0;

for (; i < 3;) {
  console.log( i++ );
}
```

This makes the loop identical to `while (i < 3)`.

We can actually remove everything, creating an infinite loop:

```js
for (;;) {
  // repeats without limits
}
```

:::note
Please note that the two `for` semicolons `;` must be present. Otherwise, there would be a syntax error.
:::

## Breaking the loop

Normally, a loop exits when its condition becomes falsy.

But we can force the exit at any time using the special `break` directive.

For example, the loop below expects input from user while running code  for a series of numbers, "breaking" when no number is entered:

```js 
let sum = 0;

while (true) {

  let value = process.argv[2]

// highlight-next-line
  if (!value) break; // (*)

  sum += value;

}
console.log( 'Sum: ' + sum );
```
Sample code will be found [here](https://github.com/siddhirajpantoji/nodejs-tutorial/blob/main/static/code-snippets/loops/break-example.js)
When you will execute this with below command 
```sh
node break-example.js 
```

The `break` directive is activated at the line `(*)` if the user enters an empty line or cancels the input. It stops the loop immediately, passing control to the first line after the loop. Namely, `console.log`.

The combination "infinite loop + `break` as needed" is great for situations when a loop's condition must be checked not in the beginning or end of the loop, but in the middle or even in several places of its body.

:::tip Accepting Value from user
Code above accepts value from user using `process.argv[2]`. User can pass values as shown below by running code and passing arguments to program
```sh
node break-example.js 2
```
This will run your code indefinitely as no exit value has been specified. Kill the terminal to exit or stop the process 
:::


## Continue to the next iteration 

The `continue` directive is a "lighter version" of `break`. It doesn't stop the whole loop. Instead, it stops the current iteration and forces the loop to start a new one (if the condition allows).

We can use it if we're done with the current iteration and would like to move on to the next one.

The loop below uses `continue` to output only odd values:

```js
for (let i = 0; i < 10; i++) {

  // if true, skip the remaining part of the body
  // highlight-next-line
  if (i % 2 == 0) continue;

  console.log(i); // 1, then 3, 5, 7, 9
}
```

For even values of `i`, the `continue` directive stops executing the body and passes control to the next iteration of `for` (with the next number). So the `console.log` is only called for odd values.

:::tip The `continue` directive helps decrease nesting
A loop that shows odd values could look like this:

```js 
for (let i = 0; i < 10; i++) {

  if (i % 2) {
    console.log( i );
  }

}
```

From a technical point of view, this is identical to the example above. Surely, we can just wrap the code in an `if` block instead of using `continue`.

But as a side effect, this created one more level of nesting (the `console.log` call inside the curly braces). If the code inside of `if` is longer than a few lines, that may decrease the overall readability.
:::

:::caution No `break/continue` to the right side of '?'

Please note that syntax constructs that are not expressions cannot be used with the ternary operator `?`. In particular, directives such as `break/continue` aren't allowed there.

For example, if we take this code:

```js
if (i > 5) {
  console.log(i);
} else {
  continue;
}
```

...and rewrite it using a question mark:

```js 
//error-next-line
(i > 5) ? console.log(i) : continue; // continue isn't allowed here
```

...it stops working: there's a syntax error.

This is just another reason not to use the question mark operator `?` instead of `if`.
:::

## Summary

We covered 3 types of loops:

- `while` -- The condition is checked before each iteration.
- `do..while` -- The condition is checked after each iteration.
- `for (;;)` -- The condition is checked before each iteration, additional settings available.

To make an "infinite" loop, usually the `while(true)` construct is used. Such a loop, just like any other, can be stopped with the `break` directive.

If we don't want to do anything in the current iteration and would like to forward to the next one, we can use the `continue` directive.


## Test your knowledge 
1. Accept input from user as a number and print all odd numbers till that number 
2. Accept num of lines from user and print below pattern ( Considering number as 5 )
```
*
* *
* * *
* * * *
* * * * *

* * * * *
* * * *
* * *
* *
*

        *
      * *
    * * *
  * * * *
* * * * *

* * * * *
  * * * *
    * * *
      * *
        *


```

