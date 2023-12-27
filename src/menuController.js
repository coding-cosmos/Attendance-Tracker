import hamburger from "./icons/menu.svg";
import close from "./icons/cross.svg";
import Icons from "./icons";

const iconImg = document.querySelector("#menu-icon>img");
const menu = document.querySelector("#menu");
const pages = menu.querySelectorAll(".page");

function openMenu() {
  iconImg.src = close;
  menu.classList = "slide-forwards";
}

function closeMenu() {
  iconImg.src = hamburger;
  menu.classList = "slide-backwards";
}

function activePageController() {
  
  pages.forEach((page) => {
    page.addEventListener("click", () => {
      pages.forEach((page) => {
        page.classList = "page";
      });
      page.classList = "page active";
      closeMenu();
    });
  });
}

function menuIconController() {
  iconImg.addEventListener("click", () => {
    if (iconImg.src == close) {
      closeMenu();
    } else {
      openMenu();
    }
  });
}

function setPageIcons() {
  pages.forEach((page, index) => {
    console.log(page.querySelector('.icon>img'));
    page.querySelector('.icon>img').src = Icons[index];
  });
}

function MenuController() {
  setPageIcons();
  menuIconController();
  activePageController();

}

export default MenuController;
