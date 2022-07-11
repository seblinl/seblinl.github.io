const form = document.querySelector("#profileForm");
const input = document.querySelector("#userName");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input.value !== "") {
    const newUser = document.createElement("li");
    newUser.innerText = input.value;
    input.value = "";
    document.querySelector("#userList").appendChild(newUser);
  }
});
