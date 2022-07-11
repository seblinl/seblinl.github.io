const buttons = document.querySelectorAll("button");

const randomRGB = () => {
  return Math.floor(Math.random() * 256);
};

const randomColor = () => {
  const r = randomRGB();
  const g = randomRGB();
  const b = randomRGB();

  return `rgb(${r}, ${g}, ${b})`;
};

const colorize = function () {
  this.style.color = randomColor();
  this.style.backgroundColor = randomColor();
  this.style.borderColor = randomColor();
};

for (let button of buttons) {
  button.addEventListener("click", colorize);
  button.addEventListener("mouseover", function () {
    this.style.borderRadius = `${Math.floor(Math.random() * 51)}%`;
  });
  button.addEventListener("keyup", (e) => {
    switch (e.code) {
      case "ArrowUp":
        e.target.style.borderWidth = "10px";
        break;
      case "ArrowDown":
        e.target.style.borderStyle = "dashed";
        break;
    }
  });
}
