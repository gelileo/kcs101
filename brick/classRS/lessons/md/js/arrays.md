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
## Commonly Used 
### [Add and Remove Items](./array/push-pop.md)
### [Multi-dimension Array](./array/multi-dim.md)

## Advanced

### [Splice](./array/splice.md)
### [Slice](./array/slice-pop.md)
### [Concat](./array/concat.md)


## [Back To Home](./readme.md)