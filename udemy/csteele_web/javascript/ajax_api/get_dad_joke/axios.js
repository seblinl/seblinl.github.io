const newJoke = async () => {
  try {
    const config = { headers: { Accept: "application/json" } };
    const res = await axios.get("https://icanhazdadjoke.com/", config);
    return res.data.joke;
  } catch (err) {
    return "Something is amiss: " + err;
  }
};

const printJoke = async () => {
  const joke = await newJoke();
  const jokeText = document.querySelector("p");
  jokeText.textContent = joke;
};

document.querySelector("button").addEventListener("click", printJoke);
