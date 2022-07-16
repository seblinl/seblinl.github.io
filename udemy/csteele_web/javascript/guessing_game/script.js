const guessNumber = document.querySelector("#guessNumber");
const guessButton = document.querySelector("#guessButton");
const gameStatus = document.querySelector("#gameStatus");
const guessList = document.querySelector("#guessList");

const targetNumber = Math.floor(Math.random() * 100) + 1;
let guesses = 1;

const addGuess = (guesses, list, guess) => {
  const guessItem = document.createElement("li");
  guessItem.textContent = `Guess #${guesses}: ${guess}`;

  list.appendChild(guessItem);
};

const gameState = (input, button, target) => {
  if (parseInt(input.value) === target) {
    input.setAttribute("readonly", true);
    button.disabled = true;

    const restart = document.createElement("p");
    restart.textContent = "Refresh the page to try again.";
    gameStatus.parentElement.appendChild(restart);
  }
};

const checkGuess = (guess, target, status, guesses) => {
  let statusMsg = "The guess was too ";

  if (guess > target) {
    status.textContent = statusMsg + "high.";
  } else if (guess < target) {
    status.textContent = statusMsg + "low.";
  } else {
    status.textContent = `You guessed the number in ${guesses} tries!`;
  }
};

guessButton.addEventListener("click", () => {
  checkGuess(guessNumber.value, targetNumber, gameStatus, guesses);
  gameState(guessNumber, guessButton, targetNumber);
  addGuess(guesses, guessList, guessNumber.value);
  guesses++;
});
