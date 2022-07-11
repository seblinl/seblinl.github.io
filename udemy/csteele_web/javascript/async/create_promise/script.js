const bogusRequest = (url) => {
  return new Promise((resolve, reject) => {
    const rand = Math.random();
    setTimeout(() => {
      if (rand < 0.7) {
        resolve("Nectar a plenty");
      }
      reject("Out of dessert");
    }, 2000);
  });
};

bogusRequest("/custard_dreams")
  .then((data) => {
    console.log("Custard Lewdness.", data);
  })
  .catch((err) => {
    console.log("No can do.", err);
  });

const delayedColorShift = (color) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, 2000);
  });
};

delayedColorShift("crimson")
  .then(() => {
    return delayedColorShift("palegreen");
  })
  .then(() => {
    return delayedColorShift("dodgerblue");
  })
  .then(() => {
    return delayedColorShift("blueviolet");
  });
