import hamburger from "./icons/menu.svg";
import close from "./icons/cross.svg";
import Icons from "./icons";
import MainController from "./mainController";

const iconImg = document.querySelector("#menu-icon>img");
const menu = document.querySelector("#menu");
const pages = menu.querySelectorAll(".pageTab");


const outSideClick = (e) => {
  if (!menu.contains(e.target) && !iconImg.contains(e.target)) {
    closeMenu();
  }
};

function openMenu() {
  iconImg.src = close;
  menu.classList = "slide-forwards";
   document.addEventListener("click",outSideClick);
}

function closeMenu() {
  iconImg.src = hamburger;
  menu.classList = "slide-backwards";
  document.removeEventListener('click', outSideClick);
}

function activePageController() {
  if (!JSON.parse(localStorage.getItem('newUser'))) {
    MainController.render('home');
  }
  pages.forEach((page) => {
    page.addEventListener("click", () => {
      setActive(page);
      MainController.render(page.id);
      closeMenu();
    });
  });
}

function setActive(page) {
   pages.forEach((page) => {
     page.classList = "pageTab";
   });
   page.classList = "pageTab active";
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
  iconImg.src = hamburger;
  pages.forEach((page, index) => {
    page.querySelector('.icon>img').src = Icons[index];
  });
}

function MenuController() {
  setPageIcons();
  menuIconController();
  activePageController();
}

export { MenuController, setActive };
