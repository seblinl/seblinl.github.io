let maximum = parseInt(prompt("Enter a maximum number"));

while (!maximum) {
  maximum = parseInt(prompt("Not valid, Try again"));
}

console.log("Input 'q' to quit");

const random = Math.floor(Math.random() * maximum) + 1;
console.log(`The number is between 1 and ${maximum}`);

let guess = prompt("Make a guess");
let attempts = 1;

while (parseInt(guess) !== random && guess.toLowerCase() !== "q") {
  console.log(`Attempt: ${attempts}, Guess: ${guess}`);
  attempts++;
  if (parseInt(guess) > random) {
    guess = prompt(guess + " is too high, try again");
  } else {
    guess = prompt(guess + " is too low, try again");
  }
}

if (guess.toLowerCase() === "q") {
  console.log(
    `Quitting the game after ${attempts} attempt(s), the number was ${random}`
  );
} else {
  console.log(`You guessed the number (${random}) in ${attempts} attempt(s)`);
}
