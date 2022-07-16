const newTodo = document.querySelector("#newTodo");
const addTodo = document.querySelector("#addTodo");
const listTodos = document.querySelector("#listTodos");
const statusUpdate = document.querySelector("#status");
const todoList = document.querySelector("#todoList");

const todos = [];

const clearOutputs = (...outputs) => {
  for (let output of outputs) {
    if (output.tagName === "INPUT") {
      output.value = "";
    } else {
      output.innerHTML = "";
    }
  }
};

const addToList = (todo, list, status, printed) => {
  if (todo.value) {
    list.push(todo.value);
    status.textContent = `${todo.value} has been added.`;

    clearOutputs(todo, printed);
    setTimeout(() => clearOutputs(status), 1000);
  }
};

addTodo.addEventListener("click", () => {
  addToList(newTodo, todos, statusUpdate, todoList);
});

const removeFromList = (item, list) => {
  list.splice(item, 1);
};

const printList = (list, printed) => {
  clearOutputs(printed);
  const newList = document.createElement("ul");

  for (let item of list) {
    const newItem = document.createElement("li");
    newItem.textContent = item;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", function () {
      this.parentElement.parentElement.removeChild(newItem);
      removeFromList(list.indexOf(item), list);
    });

    newItem.appendChild(deleteBtn);
    newList.appendChild(newItem);
  }

  printed.appendChild(newList);
};

listTodos.addEventListener("click", () => {
  printList(todos, todoList);
});
