// curry functions
function add (a) {
  return function (b) {
    return a + b;
  }
}

console.log(add(3)(4));

var add3 = add(3);

console.log(add3(4));