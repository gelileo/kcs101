
## Add and Remove Array Items

`push` adds an element to the end.

`pop` takes an element from the end.

Like a stack of cards

pop
Extracts the last element of the array and returns it:
```
let fruits = ["Apple", "Orange", "Pear"];

console.log( fruits.pop() ); // remove "Pear" and alert it

console.log( fruits ); // Apple, Orange
```
Both `fruits.pop()` and `fruits.at(-1)` return the last element of the array, but `fruits.pop()` also modifies the array by removing it.

push
Append the element to the end of the array:
```
let fruits = ["Apple", "Orange"];

fruits.push("Pear");

console.log( fruits ); // Apple, Orange, Pear
```
The call `fruits.push(...)` is equal to `fruits[fruits.length] = ...`.


## [Back To Arrays](../arrays.md)

