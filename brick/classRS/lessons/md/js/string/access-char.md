## Accessing Charaters

  ```
    let str = `Hello`;
    
    // the first character
    console.log( str[0] ); // H
    console.log( str.charAt(0) ); // H
    
    // the last character
    console.log( str[str.length - 1] ); // o
  ```
  We can also iterate over characters using for..of:
  ```
    for (let char of "Hello") {
      console.log(char); 
    }
  ```
## [Back To Strings](../strings.md)