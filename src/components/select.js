import "../styles/select.css";
import up from "../icons/up.svg";
import down from "../icons/down.svg";

function Select() {
  const selectDiv = document.createElement("div");
  selectDiv.classList = "select";
  const selectInput = document.createElement("div");
  selectInput.classList = "select-input";
  const nameDiv = document.createElement("div");
  nameDiv.classList = "name";
  nameDiv.innerText = "Subjects";
  const icon = document.createElement("img");
  icon.src = down;
  const optionsWrapper = document.createElement("div");
  optionsWrapper.classList = "options-wrapper";
  const options = document.createElement("div");
  options.classList = "options";

  const dropDown = () => {
    icon.src = icon.src == up ? down : up;
    optionsWrapper.classList =
      icon.src == up ? "options-wrapper" : "options-wrapper dropdown-select";
  };

  icon.addEventListener("click", dropDown);
  nameDiv.addEventListener("click", dropDown);

  selectInput.appendChild(nameDiv);
  selectInput.appendChild(icon);

  optionsWrapper.appendChild(options);

  selectDiv.appendChild(selectInput);
  selectDiv.appendChild(optionsWrapper);

  return selectDiv;
}

export default Select;
