# Numbers

- use underscore as seperators for big numbers
  ```
  let billion = 1000000000;
  let billion = 1_000_000_000;
  ```
- shorten a number by appending the letter "e" to it and specifying the zeroes count
  ```
  let billion = 1e9;  // 1 billion, literally: 1 and 9 zeroes
  
  console.log( 7.3e9 );  // 7.3 billions (same as 7300000000 or 7_300_000_000)
  
  In other words, e multiplies the number by 1 with the given zeroes count.
  1e3 === 1 * 1000; // e3 means *1000
  1.23e6 === 1.23 * 1000000; // e6 means *1000000    
  ```
  
  If we count the zeroes in 0.000001, there are 6 of them. So naturally it’s 1e-6.

  ```
  let mсs = 0.000001;
  let mcs = 1e-6; // five zeroes to the left from 1
  ```
  
  In other words, a negative number after "e" means a division by 1 with the given number of zeroes:
  ```
  // -3 divides by 1 with 3 zeroes
  1e-3 === 1 / 1000; // 0.001
  
  // -6 divides by 1 with 6 zeroes
  1.23e-6 === 1.23 / 1000000; // 0.00000123
  
  // an example with a bigger number
  1234e-2 === 1234 / 100; // 12.34, decimal point moves 2 times
  ```

###  Hex, binary and octal numbers
  - Hexadecimal numbers are widely used in JavaScript to represent colors (`color:#F0F5CA8F;` ), encode characters, and for many other things. For example,  
    ```  
    let number = 0xff; // 255 
    let number = 0xFF; // 255 (the same, case doesn't matter)
    ```

    ```
    let a = 0b11111111; // binary form of 255
    let b = 0o377; // octal form of 255
  
    // console.log("Binary number 0b11111111 is: " + a)
    // console.log("Octal number 0o377 is: " + b)
    ```
### Number methods
- toString(radix)
   ```
  console.log(number.toString(10)) // "255"
  console.log(number.toString(8)) // "377"
  console.log(number.toString(16)) // "ff"
  console.log(number.toString(2)) // "11111111"
   ```

 
- toFixed()
 
  rounds the number to n digits after the point and returns a string representation of the result.
  ```
  let num = 12.34;
  console.log( num.toFixed(1) ); // "12.3"
  console.log( num.toFixed(5) ); // "12.34000", added zeroes to make exactly 5 digits
  ```
  precision with fraction/floating numbers

  Does the following return true?
  ```
  0.1 + 0.2 === 0.3
  ``` 
- parseInt() and parseFloat()
  
  extract a numeric value out of a string

  ```
  console.log( parseInt('100px') ); // 100
  console.log( parseFloat('12.5em') ); // 12.5
  console.log( parseInt('12.3') ); // 12, only the integer part is returned
  console.log( parseFloat('12.3.4') ); // 12.3, the second point stops the reading
  console.log( parseInt('a123') ); // NaN, the first symbol stops the process
  ```

  you can also pass an optional second parameter to parseInt, that is `parseInt(str, radix)`. It specifies the base of the numeral system.

  ```
  console.log( parseInt('0xff', 16) ); // 255
  console.log( parseInt('ff', 16) ); // 255, without 0x also works
  console.log( parseInt('11111111',2) ); // 255
  ```
  
- Other math functions
  ```
  Math.random() // returns a random number between 0 and 1
  Math.pow(n, power) // raise n to the given power
  Math.max(3, 5, -10, 0, 1) // 5
  Math.min(1, 2) // 1
  ```
  rounding functions

  |number	|Math.floor|	Math.ceil	|Math.round	|Math.trunc|
  |--|--|--|--|--|
  |3.1	|3|	4|	3|	3|
  |3.6	|3| 4|	4|	3|
  |-1.1	|-2|	-1|	-1|	-1|
  |-1.6	|-2|	-1|	-2|	-1|

  