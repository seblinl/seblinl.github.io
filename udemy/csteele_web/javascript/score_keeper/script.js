const buttons = document.querySelector("#buttons");
const p1Button = document.querySelector("#player1Button");
const p2Button = document.querySelector("#player2Button");
const p1Score = document.querySelector("#p1Score");
const p2Score = document.querySelector("#p2Score");
const gamePoints = document.querySelector("#gamePoints");

let p1Points = 0;
let p2Points = 0;
let winPoint = 3;

const playerButtons = [p1Button, p2Button];

const updateScore = (btnId) => {
  switch (btnId) {
    case "player1Button":
      p1Points++;
      p1Score.innerText = p1Points;
      break;
    case "player2Button":
      p2Points++;
      p2Score.innerText = p2Points;
      break;
    case "reset":
      p1Points = 0;
      p1Score.innerText = p1Points;
      p1Score.classList.remove("has-text-success", "has-text-danger");
      p2Points = 0;
      p2Score.innerText = p2Points;
      p2Score.classList.remove("has-text-success", "has-text-danger");
      break;
  }
};

const checkWinCondition = (
  btns = playerButtons,
  p1P = p1Points,
  p2P = p2Points,
  winP = winPoint
) => {
  if (p1P === winP || p2P === winP) {
    for (let btn of btns) {
      btn.disabled = true;
    }

    if (p1P > p2P) {
      p1Score.classList.add("has-text-success");
      p2Score.classList.add("has-text-danger");
    } else {
      p1Score.classList.add("has-text-danger");
      p2Score.classList.add("has-text-success");
    }
  } else {
    for (let btn of btns) {
      btn.disabled = false;
    }
  }
};

buttons.addEventListener("click", (e) => {
  updateScore(e.target.id);
  checkWinCondition();
});

gamePoints.addEventListener("change", (e) => {
  winPoint = parseInt(e.target.value);
  updateScore("reset");
  checkWinCondition();
});
