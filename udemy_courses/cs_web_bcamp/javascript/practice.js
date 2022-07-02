console.log("Greetings from the script side");

let rnd = Math.floor(Math.random() * 10) + 1;
if (rnd > 5) {
  console.log(`${rnd} is greater than 5`);
} else if (rnd < 5) {
  console.log(`${rnd} is less than 5`);
} else {
  console.log(`${rnd} is equal to 5`);
}

console.log("Aufwiederdeci form the script side");
