## The “if” statement
The `if(...)` statement evaluates a condition in parentheses and, if the result is true, executes a block of code.

For example:
```
  if ( 5-1 === 4) {
    console.log ((5-1) === 4)
  }
```

```
  let hobbies = "soccer, coding, video game"
  if ( hobbies.includes("game")) {
     console.log(true) 
  }

```
## Boolean conversion
The if (…) statement evaluates the expression in its parentheses and converts the result to a boolean.

Let’s recall the conversion rules from the chapter Type Conversions:

- A number 0, an empty string "", null, undefined, and NaN all become false. Because of that they are called “falsy” values.
- Other values become true, so they are called “truthy”.
So, the code under this condition would never execute:
```
  if (0) { // 0 is falsy
    ...
  }
  …and inside this condition – it always will:
  
  if (1) { // 1 is truthy
    ...
  }
```

## `else` Statement
```
  let did_you_behave_today = true
  
  if (did_you_behave_today) {
    console.log("Come eat icecream!")
  } else {
    console.log("Go to bed!")
  }

```
## multiple conditions, `else if`
```
  let number = 5
  if (number === 0) {
    console.log ( `${number} is zero`)
  } else if (number > 0) {
    console.log ( `${number} is a positive number`)
  } else {
    console.log ( `${number} is a negative number`)
  }
```

## Conditional operator ‘?’

There's a shorthand for the `did_you_behave_today` example above

```
did_you_behave_today ? console.log("Come eat icecream!") : console.log("Go to bed!")
```
The operator is represented by a question mark ?. Sometimes it’s called “ternary”, because the operator has three operands. It is actually the one and only operator in JavaScript which has that many.

The syntax is:
```
let result = condition ? value1 : value2;
```
The condition is evaluated: if it’s truthy then value1 is returned, otherwise – value2.



## [Back To Home](./readme.md)