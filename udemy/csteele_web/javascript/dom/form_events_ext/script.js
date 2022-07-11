const commentForm = document.querySelector("#userComment");
const commentList = document.querySelector("#commentList");

const newComment = (username, comment) => {
  const newComment = document.createElement("li");
  newComment.innerText = comment;

  const boldUserName = document.createElement("b");
  boldUserName.innerText = username + ": ";

  newComment.insertAdjacentElement("afterbegin", boldUserName);
  commentList.appendChild(newComment);
};

commentForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = commentForm.elements.username;
  const comment = commentForm.elements.comment;

  newComment(username.value, comment.value);

  username.value = "";
  comment.value = "";
});

commentList.addEventListener("click", (e) => {
  (e.target.nodeName === "LI" && e.target.remove()) ||
    (e.target.nodeName === "B" && e.target.parentNode.remove());
});
