
# Basic Loops
## The “while” loop
The while loop has the following syntax:
  ```
  while (condition) {
    // code
    // so-called "loop body"
  }
  ```
While the condition is truthy, the code from the loop body is executed.

For instance, the loop below outputs i while i < 3:
```
  let i = 0;
  while (i < 3) { // shows 0, then 1, then 2
    console.log( i );
    i++;
}
```

## The “do…while” loop
The condition check can be moved below the loop body using the do..while syntax:
```
do {
  // loop body
} while (condition);
```
The loop will first execute the body, then check the condition, and, while it’s truthy, execute it again and again.

For example:
```
  let i = 0;
  do {
    console.log( i );
    i++;
  } while (i < 3);
```
Note that `do ..while` executes **at least once**.


## The “for” loop
The for loop is more complex, but it’s also the most commonly used loop.

It looks like this:
```
for (begin; condition; step) {
  // ... loop body ...
}
```
Let’s learn the meaning of these parts by example. The loop below runs alert(i) for i from 0 up to (but not including) 3:
```
 for (let i = 0; i < 3; i++) { // shows 0, then 1, then 2
  console.log(i);
}
```

## `break` and `continue`
Normally, a loop exits when its condition becomes falsy.

But we can force the exit at any time using a `break` statement.

```
  let i = 10
  while (true) {
    if (i == 5) {
      break;
    }
    console.log( i );
    i --;
  }
```

## Continue to the next iteration
`continue` skips the current iteration and jumps to the next if available.

The loop below uses continue to output only odd values:

```
 for (let i = 0; i < 10; i++) {

  // if true, skip the remaining part of the body
  if (i % 2 == 0) continue;

  console.log(i); // 1, then 3, 5, 7, 9
}
```
# Advanced
See [Objects](./objects.md) and [Arrays](./array.md)

## [Back To Home](./readme.md)