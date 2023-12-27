import { setActive } from "./menuController";

const btn = document.querySelector("#starter>button");

function StarterController() {
  btn.addEventListener("click", renderSubjectPage, true);
}

function renderSubjectPage() {
  const page = document.querySelector("#subjects");
  setActive(page);

  // TODO: ADD CALL TO SUBJECT CONTROLLER TO RENDER SUBJECT PAGE

  btn.removeEventListener("click", renderSubjectPage, true);
}

export default StarterController;
