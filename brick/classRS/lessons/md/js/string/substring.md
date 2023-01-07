
## Getting a substring

`substring`, `substr` and `slice`
  
  ```  
    let str = "javascript";
    console.log( str.slice(0, 5) ); // 'javas', the substring from 0 to 5 (not including 5)
    console.log( str.slice(0, 1) ); // 'j', from 0 to 1, but not including 1, so only character at 0
  ```
  
  If there is no second argument, then slice goes till the end of the string:    
  ```
    console.log( str.slice(2) ); // 'vascript', from the 2nd position till the end
  ```  
    
  Negative values for start/end are also possible. They mean the position is counted from the string end:
    
  start at the 4th position from the right, end at the 1st from the right
    
  ```
    console.log( str.slice(-4, -1) ); // 'rip'
  ```

  |method|	selects…|	negatives|
  |-- |-- |-- |
  |slice(start, end)	|from start to end (not including end)|	allows negatives|
  |substring(start, end)|	between start and end (not including end)	|negative values mean 0|
  |substr(start, length)|	from start get length characters	allows |negative start|

## Get Substring Position

`indexOf(str[, pos])`, 2nd parameter `pos` is optional
  ```
    let str = 'Widget with id';
    
    console.log( str.indexOf('Widget') ); // 0, because 'Widget' is found at the beginning
    console.log( str.indexOf('widget') ); // -1, not found, the search is case-sensitive    
    console.log( str.indexOf("id") ); // 1, "id" is found at the position 1 (..idget with id)

    The first occurrence of "id" is at position 1. To look for the next occurrence, let’s start the search from position 2:  

    console.log( str.indexOf('id', 2) ) // 12
  ```
## Check SubString

`includes`, `startsWith`, `endsWith`

  ```
    console.log( "Widget with id".includes("Widget") ); // true    
    console.log( "Hello".includes("Bye") ); // false
    
    The optional second argument of str.includes is the position to start searching from:
    
    console.log( "Widget".includes("id") ); // true
    console.log( "Widget".includes("id", 3) ); // false, from position 3 there is no "id"
    
    The methods str.startsWith and str.endsWith do exactly what they say:
    
    console.log( "Widget".startsWith("Wid") ); // true, "Widget" starts with "Wid"
    console.log( "Widget".endsWith("get") ); // true, "Widget" ends with "get"
  ```

## [Back To Strings](../strings.md)