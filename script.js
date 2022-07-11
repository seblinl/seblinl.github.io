const mainNav = document.querySelector("#mainNav");
const contentCollection = document.querySelector("#content").children;

const isHidden = (navItems, contents) => {
  for (let i = 0; i < contents.length; i++) {
    contents[i].classList.add("hide");
    navItems[i].firstElementChild.classList.remove("active");
  }
};

const isShown = (navItem, contents) => {
  for (let content of contents) {
    if (content.id === navItem.textContent.toLowerCase()) {
      content.classList.toggle("hide");
      navItem.classList.toggle("active");
    }
  }
};

mainNav.addEventListener("click", (e) => {
  isHidden(mainNav.children, contentCollection);
  isShown(e.target, contentCollection);
});
