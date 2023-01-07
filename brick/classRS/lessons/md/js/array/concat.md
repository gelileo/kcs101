

## Concat

The method arr.concat creates a new array that includes values from other arrays and additional items.

The syntax is:
```
arr.concat(arg1, arg2...)
```
It accepts any number of arguments – either arrays or values.

The result is a new array containing items from arr, then arg1, arg2 etc.

If an argument argN is an array, then all its elements are copied. Otherwise, the argument itself is copied.

For instance:
```
let arr = [1, 2];

// create an array from: arr and [3,4]
console.log( arr.concat([3, 4]) ); // 1,2,3,4

// create an array from: arr and [3,4] and [5,6]
console.log( arr.concat([3, 4], [5, 6]) ); // 1,2,3,4,5,6

// create an array from: arr and [3,4], then add values 5 and 6
console.log( arr.concat([3, 4], 5, 6) ); // 1,2,3,4,5,6
```
Normally, it only copies elements from arrays. Other objects, even if they look like arrays, are added as a whole:
```
let arr = [1, 2];

let arrayLike = {
  0: "something",
  length: 1
};

console.log( arr.concat(arrayLike) ); // 1,2,[object Object]
```
…But if an array-like object has a special Symbol.isConcatSpreadable property, then it’s treated as an array by concat: its elements are added instead:
```
let arr = [1, 2];

let arrayLike = {
  0: "something",
  1: "else",
  [Symbol.isConcatSpreadable]: true,
  length: 2
};

console.log( arr.concat(arrayLike) ); // 1,2,something,else
```

## [Back To Arrays](../arrays.md)