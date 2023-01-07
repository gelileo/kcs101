# Objects
Unlike primitive data types that contains only one single thing.  Objects are used to store keyed collections or various data.

An object can be created with figure brackets {…} with an optional list of properties. A property is a “key: value” pair, where key is a string (also called a “property name”), and value can be anything.
```
  let user = new Object(); // "object constructor" syntax
  let user = {};  // "object literal" syntax
```

## Literals and properties
We can immediately put some properties into {...} as “key: value” pairs:
  ```
  let user = {     // an object
    name: "John",  // by key "name" store value "John"
    age: 30        // by key "age" store value 30
  };
```
A property has a key (also known as “name” or “identifier”) before the colon ":" and a value to the right of it.

In the user object, there are two properties:

The first property has the name "name" and the value "John".
The second one has the name "age" and the value 30.
The resulting user object can be imagined as a cabinet with two signed files labeled “name” and “age”.
## [Back To Home](./readme.md)