let number = parseInt(prompt("Enter a number under 20 and let others to guess", ''));

let guess = parseInt(prompt('Guess a number?', ''), 10);
let done = false;
while (!done) {
  
  if (guess === number) {
    done = true
  } else if (guess > number) {
    guess = parseInt(prompt('Guess a smaller number?', ''), 10);
  } else if (guess < number) {
    guess = parseInt(prompt('Guess a big number?', ''), 10);
  }   
}