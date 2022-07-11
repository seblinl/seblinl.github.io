const login = async (username, password) => {
  if (!username || !password) throw "No go, missing something";
  if (username === "squanch" && password === "passableword") return "Logged in";
  throw "Invalid inputs";
};

login("squanch", "passableword")
  .then((msg) => {
    console.log(msg);
  })
  .catch((err) => {
    console.warn(err);
  });

const delayedColorShift = (color) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, 2000);
  });
};

const colorShow = async () => {
  await delayedColorShift("violet");
  await delayedColorShift("blueviolet");
  await delayedColorShift("purple");
};

colorShow();
