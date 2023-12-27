import MainController from "./mainController";
import { setActive } from "./menuController";

const btn = document.querySelector("#starter>button");
const starter = document.querySelector('#starter');

function StarterController() {

  const checkNewUser = JSON.parse(localStorage.getItem('newUser'));
  if (checkNewUser) {
     btn.addEventListener("click", renderSubjectPage, true);
  } else {
    starter.style.display = 'none';
  }
}

function renderSubjectPage() {
  starter.style.display = 'none';
  const page = document.querySelector("#subjects");

  // Update UI to show active page
  setActive(page);

  // Render Subjects Page
  MainController.render(page.id);

  // Update newUser status in local storage
  localStorage.setItem('newUser', JSON.stringify(false));
  
  // Remove the event listeners
  btn.removeEventListener("click", renderSubjectPage, true);
}

export default StarterController;
