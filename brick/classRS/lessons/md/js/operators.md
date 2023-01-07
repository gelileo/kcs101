# Operators

## Maths
The following math operations are supported:

- Addition +
- Subtraction -
- Multiplication *
- Division /
- Remainder %
- Exponentiation **

## String concatenation with binary +
Let’s meet features of JavaScript operators that are beyond school arithmetics.

Usually, the plus operator + sums numbers.

But, if the binary + is applied to strings, it merges (concatenates) them:
```
let s = "my" + "string";
console.log(s); // mystring
```

Note that if any of the operands is a string, then the other one is converted to a string too.

For example:
```
  console.log( '1' + 2 ); // "12"
  console.log( 2 + '1' ); // "21"
```
The binary + is the only operator that supports strings in such a way. Other arithmetic operators work only with numbers and always convert their operands to numbers.

Here’s the demo for subtraction and division:

```
  console.log( 6 - '2' ); // 4, converts '2' to a number
  console.log( '6' / '2' ); // 3, converts both operands to numbers
```

## Modify-in-place
We often need to apply an operator to a variable and store the new result in that same variable.

For example:
```
  let n = 2;
  n = n + 5;
  n = n * 2;
```
This notation can be shortened using the operators += and *=:
```
  let n = 2;
  n += 5; // now n = 7 (same as n = n + 5)
  n *= 2; // now n = 14 (same as n = n * 2)
  
  console.log( n ); // 14
```
Short “modify-and-assign” operators exist for all arithmetical and bitwise operators: /=, -=, etc.

Such operators have the same precedence as a normal assignment, so they run after most other calculations:
```
  let n = 2;
  
  n *= 3 + 5; // right part evaluated first, same as n *= 8
  
  console.log( n ); // 16
```
## Increment / Decrement


Increment ++ increases a variable by 1:
```
  let counter = 2;
  counter++;        // works the same as counter = counter + 1, but is shorter
  console.log( counter ); // 3
```
Decrement -- decreases a variable by 1:
```
  let counter = 2;
  counter--;        // works the same as counter = counter - 1, but is shorter
  console.log( counter ); // 1
```

The operators ++ and -- can be placed either before or after a variable.

When the operator goes after the variable, it is in “postfix form”: `counter++`.
The “prefix form” is when the operator goes before the variable: `++counter`.

if the result of increment/decrement is not used, there is no difference in which form to use:
```
  let counter = 0;
  counter++;
  ++counter;
  console.log( counter ); // 2, the lines above did the same
```
If we’d like to increase a value and immediately use the result of the operator, we need the prefix form:
```
  let counter = 0;
  console.log( ++counter ); // 1
```
If we’d like to increment a value but use its previous value, we need the postfix form:
```
  let counter = 0;
  console.log( counter++ ); // 0
```
## Bitwise operators
Bitwise operators treat arguments as 32-bit integer numbers and work on the level of their binary representation.

These operators are not JavaScript-specific. They are supported in most programming languages.

The list of operators:

- AND ( & )
- OR ( | )
- XOR ( ^ )
- NOT ( ~ )
- LEFT SHIFT ( << )
- RIGHT SHIFT ( >> )
- ZERO-FILL RIGHT SHIFT ( >>> )





## [Back To Home](./readme.md)