const todo = [];

let action = prompt("Input a command");

while (action !== "quit" && action !== "q") {
  switch (action) {
    case "new":
      const newEntry = prompt("Add a new todo entry");
      todo.push(newEntry);
      console.log(`${newEntry} was added to the list`);
      break;
    case "list":
      console.log("***");
      for (let entry of todo) {
        console.log(`${todo.indexOf(entry)}: ${entry}`);
      }
      console.log("***");
      break;
    case "delete":
      const removeEntry = parseInt(
        prompt("Input an entrys index to remove it from the list")
      );
      if (!Number.isNaN(removeEntry)) {
        console.log(`${todo.splice(removeEntry, 1)} was removed from the list`);
      } else {
        console.log("Invalid index");
      }
      break;
  }

  action = prompt("New command");
}

console.log("You quit the app");
