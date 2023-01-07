## Quotes
Strings can be enclosed within either single quotes, double quotes or backticks:

  ```
    let single = 'single-quoted';
    let double = "double-quoted";
    let backticks = `backticks`;
  ```

  Single and double quotes are essentially the same. Backticks, however, allow us to embed any expression into the string, by wrapping it in ${…}
  ```
    console.log(` 1 + 2 equals to ${1+2}`)
  ```

  Backsticks also enables multi-line string

  ```
    let ingredients = `
    Ingredients:   
     * Flour
     * Beef
     * Olive oil)
    `;
    console.log(ingredients)  // Ingredients:
                              //  * Flour
                              //  * Beef
                              //  * Olive oil
  ```
## [Back To Strings](../strings.md)