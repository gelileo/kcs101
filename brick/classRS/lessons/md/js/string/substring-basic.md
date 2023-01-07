## Get a substring using slice()
`slice(start[, end])`

``` 
  let str = "I love coding";
  
  console.log( str.slice(0, 1)) // I
  console.log( str.slice(2, 6)) // love
  console.log( str.slice(7)) // coding
  console.log( str.slice(-6)) // coding
```

## Get substring position
```
  let str = "I love coding";
  
  console.log( str.indexOf("love")) // 2
```


## Check if String Contains a Substring

```
  let str = "I love coding";
  
  console.log( str.startsWith("I")) // true
  console.log( str.includes("love")) // true
  console.log( str.endsWith("ing")) // true
```

## [Back To Strings](../strings.md)