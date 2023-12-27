import MainController from "./mainController";
import { setActive } from "./menuController";

const btn = document.querySelector("#starter>button");
const starter = document.querySelector('#starter');
function StarterController() {
  btn.addEventListener("click", renderSubjectPage, true);
}

function renderSubjectPage() {
  starter.style.display = 'none';
  const page = document.querySelector("#subjects");

  // Update UI to show active page
  setActive(page);

  // Render Subjects Page
  MainController.render(page.id);

  // Remove the event listeners
  btn.removeEventListener("click", renderSubjectPage, true);
}

export default StarterController;
