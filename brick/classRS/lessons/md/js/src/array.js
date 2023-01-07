
document.write("<h2>")
var arr = [1, 2, 3, 4];

// size of array
var N = arr.length;

// Traverse the element of arr
for (i = 0; i < N; i++) {
  // Print the element
  document.write(arr[i] + " ");
}

document.write("</h2>")

//traversal in an stack   

// Function to print the element in stack
function printStack(St) {
  // Traverse the stack
  while (St.length != 0) {
    // Print top element
    document.write(St.pop() + " ");
  }
}
// Initialise stack
var stack = [];

// Insert Element in stack
stack.push(4);
stack.push(3);
stack.push(2);
stack.push(1);

console.log(stack.toString())
// Print elements in stack
printStack(stack);

