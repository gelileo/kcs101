
## Primitive Types

  - Numbers
    - [Numbers](./numbers.md)
  - Strings
    - [Strings](./strings.md)
    
  - Booleans
    `true` / `false`
    ```
      console.log("hello" === "hello") // true
    ```
  - The “null” value

```
  let age = null;
```
In JavaScript, null is not a “reference to a non-existing object” or a “null pointer” like in some other languages.

It’s just a special value which represents “nothing”, “empty” or “value unknown”.

  - The “undefined” value
Another special value just like null.

The meaning of undefined is “value is not assigned”.

If a variable is declared, but not assigned, then its value is undefined:

```
  let age;
  console.log(age); // shows "undefined"
```
Normally, we don't explicitly assign `undefined` to a variable, we use null to assign an “empty” or “unknown” value, while undefined is reserved as a default initial value for unassigned things.
  - BigInt

  A BigInt value is created by appending n to the end of an integer:
  ```
  // the "n" at the end means it's a BigInt
  const bigInt = 1234567890123456789012345678901234567890n;
  ```


  - Symbols
   
    A “symbol” represents a unique identifier.

    A value of this type can be created using Symbol():
    ```
      let id = Symbol()
    ```

## [Back To Home](./readme.md)