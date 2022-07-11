const h1 = document.querySelector("h1");
const button = document.querySelector("button");

const random = (min, max) => {
  return Math.floor(Math.random() * max) + min;
};
const randomRGB = () => {
  const r = random(0, 256);
  const g = random(0, 256);
  const b = random(0, 256);

  return `rgb(${r}, ${g}, ${b})`;
};

button.addEventListener("click", () => {
  const color = randomRGB();
  const colorValues = color
    .slice(4, -1)
    .split(", ")
    .map((val) => parseInt(val));

  for (let value of colorValues) {
    if (value >= 210) {
      h1.style.color = "black";
      break;
    } else {
      h1.style.color = "white";
    }
  }

  document.body.style.backgroundColor = color;
  h1.innerText = color;
});
