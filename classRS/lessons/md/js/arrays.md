# Arrays
An array is an ordered collection of values.

There are two syntaxes for creating an empty array:

```
let arr = new Array();
let arr = [];
```
Almost all the time, the second syntax is used. We can supply initial elements in the brackets:
```
let fruits = ["Apple", "Orange", "Plum"];
```
Array elements are numbered, starting with zero.

We can get an element by its number in square brackets:
```
let fruits = ["Apple", "Orange", "Plum"];

console.log( fruits[0] ); // Apple
console.log( fruits[1] ); // Orange
console.log( fruits[2] ); // Plum
```

We can replace an element:

```
fruits[2] = 'Pear'; // now ["Apple", "Orange", "Pear"]
```
…Or add a new one to the array:
```
fruits[3] = 'Lemon'; // now ["Apple", "Orange", "Pear", "Lemon"]
```
The total count of the elements in the array is its length:
```
let fruits = ["Apple", "Orange", "Plum"];

console.log( fruits.length ); // 3We can replace an element:
```


## Push and Pop

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


## Multidimensional arrays
Arrays can have items that are also arrays. We can use it for multidimensional arrays, for example to store matrices:
```
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log( matrix[1][1] ); // 5, the central element
```