
## String Comparison

  ```
    console.log('a' > 'Z') // true
  ```
  Strings are encoded using UTF-16. That is: each character has a corresponding numeric code.
  
  `codePointAt(pos)`

  ```
    console.log('a'.codePointAt(0)) // 97
    console.log('Z'.codePointAt(0)) // 90
  ```
and, `String.fromCodePoint(code)` creates a character by its numeric code
  ```
    String.fromCodePoint(90) // 'Z'

    let str = '';
    for (let i = 'A'.codePointAt(0); i <= 'Z'.codePointAt(0); i++) {
      str += String.fromCodePoint(i);
    }
    console.log(str) // “ABCDEFGHIJKLMNOPQRSTUVWXYZ“
  ```

## [Back To Strings](../strings.md)