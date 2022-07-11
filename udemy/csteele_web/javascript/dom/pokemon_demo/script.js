//https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png
const container = document.querySelector("#container");
const baseURL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

for (let i = 1; i < 152; i++) {
  const content = document.createElement("div");
  content.classList.add("content");

  const sprite = document.createElement("img");
  sprite.src = `${baseURL}${i}.png`;

  const number = document.createElement("span");
  number.innerText = "# " + i;

  content.appendChild(sprite);
  content.appendChild(number);
  container.appendChild(content);
}
