import SubjectData from "./Data/subjectData";
import SubjectTile from "./components/subjectTile";
import MainController from "./mainController";

const subjectAdder = document.querySelector(".sub-pg-wrapper .add");
const subjectList = document.querySelector(".sub-pg-wrapper .subject-list");
const message = subjectList.querySelector("p");
const input = subjectAdder.querySelector("input");
const link = document.querySelector('span#link');

function addSubject() {
  const subjectName = input.value;

  // Check if subject name is given or not
  if (subjectName == "") {
    message.style.color = "red";
    message.innerText = "Please enter a subject name";
  } else {
    // Add subject to local storage
    SubjectData.addSubjects(subjectName);

    // Clear input and focus on it
    input.value = "";
    input.focus();

    // Render subjects from local storage
    renderSubjects();
  }
}

function renderSubjects() {
  // Get subjects array from local storage
  const subjects = SubjectData.getSubjects();

  // Check if subjects array is not empty
  if (subjects.length != 0) {
    // Clear the message
    subjectList.innerHTML = "";

    // Render each subject
    subjects.forEach((subject) => {
      subjectList.appendChild(SubjectTile(subject.name, subject.id));
    });

    // Add listeners to remove subjects and update local stoage accordingly
    removeSubjectController();
  }
}

function removeSubjectController() {
  const cutIcons = subjectList.querySelectorAll(".tile > img");

  cutIcons?.forEach((icon) => {
    icon.addEventListener("click", () => {
      const id = icon.parentElement.getAttribute("data-id");
      SubjectData.removeSubject(id);
    });
  });
}

function SubjectPageController() {
  const btn = subjectAdder.querySelector("button");

  btn.addEventListener("click", (e) => {
    e.preventDefault();
    addSubject();
  });

  renderSubjects();
  linkController();
}

function linkController() {
  link.addEventListener('click', () => {
    MainController.render('schedule');
  })
}
export default SubjectPageController;
