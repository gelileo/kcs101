
## Splice

can be used to insert, remove and replace elements.

The syntax is:
```
arr.splice(start[, deleteCount, elem1, ..., elemN])
```
It modifies arr starting from the index start: removes deleteCount elements and then inserts `elem1, ..., elemN` at their place. Returns the array of removed elements.

Remove an element
```
let arr = ["I", "study", "JavaScript"];

let removed = arr.splice(1, 1); // from index 1 remove 1 element

console.log( arr ); // ["I", "JavaScript"]
console.log( removed ); // ["study"]
```

Remove and replace
```
let arr = ["I", "study", "JavaScript", "right", "now"];

// remove 3 first elements and replace them with another
arr.splice(0, 3, "Let's", "dance");

console.log( arr ) // now ["Let's", "dance", "right", "now"]
```

The splice method is also able to insert the elements without any removals. For that we need to set deleteCount to 0:
```
let arr = ["I", "study", "JavaScript"];

// from index 2
// delete 0
// then insert "complex" and "language"
arr.splice(2, 0, "complex", "language");

console.log( arr ); // "I", "study", "complex", "language", "JavaScript"
```

Negative indexes allowed
Here and in other array methods, negative indexes are allowed. They specify the position from the end of the array, like here:
```
let arr = [1, 2, 5];

// from index -1 (one step from the end)
// delete 0 elements,
// then insert 3 and 4
arr.splice(-1, 0, 3, 4);

console.log( arr ); // 1,2,3,4,5
```


## [Back To Arrays](../arrays.md)