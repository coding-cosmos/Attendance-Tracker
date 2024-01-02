import up from "./icons/up.svg";
import down from "./icons/down.svg";
import Select from "./components/select";
import SubjectData from "./Data/subjectData";
import SubjectTile from "./components/subjectTile";
import ScheduleData from "./Data/scheduleData";

const schedulePage = document.querySelector("#schedule-page");
const dropdownIcons = schedulePage.querySelectorAll("img");
const subjectListWrapper = schedulePage.querySelectorAll(
  ".subject-list-wrapper"
);
const subjectList = schedulePage.querySelectorAll(".subject-list");
const addSubBtns = schedulePage.querySelectorAll(".add>button");
const dialogModal = schedulePage.querySelector(".modal>dialog");
const dialogModalContainer = schedulePage.querySelector(
  ".modal>dialog>.dialog"
);
const message = schedulePage.querySelector(".message");
const subjectOptionsList = [];

function SchedulePageController() {
  dropDownController();
  addSubjectController();
  modalController();
  getSubjectOptions();
}

function dropDownController() {
  dropdownIcons.forEach((icon, index) => {
    // set default icon
    icon.src = down;

    /**
     *  Toggle icon
     *  Toggle subject list
     *  Update Subject List
     */
    icon.addEventListener("click", (e) => {
      icon.src = icon.src == down ? up : down;
      subjectListWrapper[index].classList =
        icon.src == down
          ? "subject-list-wrapper"
          : "subject-list-wrapper dropdown";

      // Get day and update subject list accordingly
      const day = e.target.parentElement.parentElement.parentElement.id;
      icon.src == up ? updateSubjectList(day, index) : "";
    });
  });
}

function addSubjectController() {
  addSubBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const day = e.target.parentElement.parentElement.id;
      showModalController(day);
    });
  });
}

function modalController() {
  if (dialogModalContainer.innerHTML == "") {
     dialogModalContainer.appendChild(Select());

     const list = document.createElement("div");
    list.className = "list";
    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'btn-container';

     const modalSubmitBtn = document.createElement("button");
     modalSubmitBtn.classList = "submit-btn";
     modalSubmitBtn.innerText = "Done";

     modalSubmitBtn.addEventListener("click", (e) => {
       const day =
         e.target.parentElement.parentElement.parentElement.getAttribute("data-day");
      
       modalSubmitController(day);
     });
    
    
    const modalCancelBtn = document.createElement("button");
    modalCancelBtn.classList = "cancel-btn";
    modalCancelBtn.innerText = "Cancel";

    modalCancelBtn.addEventListener('click', () => {
      dialogModal.close();
    })

    buttonContainer.appendChild(modalCancelBtn);
    buttonContainer.appendChild(modalSubmitBtn);

    dialogModalContainer.appendChild(list);
    dialogModalContainer.appendChild(buttonContainer);
  }
}

function getSubjectOptions() {
  const subjects = SubjectData.getSubjects();
  if (subjects.length != 0) { 
    subjects.forEach((subject) => {
      const option = document.createElement("div");
      option.classList = "option";
      option.setAttribute("data-ID", `${subject.id}`);
      option.innerText = `${subject.name}`;

      option.addEventListener("click", (e) => {
        const list = dialogModal.querySelector(".list");
        const option = e.target;

        const id = option.getAttribute("data-ID");
        const day =
          e.target.parentElement.parentElement.parentElement.parentElement.parentElement.getAttribute(
            "data-day"
          );

        console.log(day);
         const storedSubjects = [];
         ScheduleData.getDaySchedule(day).forEach((subject) =>
           storedSubjects.push(subject.name)
         );

        if (!storedSubjects.includes(option.innerText)) {
          list.style.color = "black";
          list.innerText = "";
          list.appendChild(SubjectTile(option.innerText, id));
        } else {
          list.style.color = 'red';
          list.innerText = 'already selected';
        }
      
      });

      subjectOptionsList.push(option);
    });
  } else {
    message.style.color = "red";
    message.innerText = "Please add subjects first..";
  }
}

function showModalController(day) {
  rederOptions();
  dialogModal.setAttribute("data-Day", `${day}`);
  dialogModal.showModal();
}

function rederOptions() {
  const optionsContainer = dialogModal.querySelector(".options");

  subjectOptionsList.forEach((option) => {
    optionsContainer.appendChild(option);
  });
}

// Store the subject selected in localStorage
function modalSubmitController(day) {
  const list = dialogModal.querySelector(".list");
  const subjectTiles = list.querySelectorAll(".tile");

  if (subjectTiles.length != 0) {
    const subjects = [];
    subjectTiles.forEach((tile) => {
      const id = tile.getAttribute("data-id");
      const name = tile.querySelector("div").innerText;
      subjects.push({ name, id });
    });

    ScheduleData.addData(day, subjects);
    resetModal();
    dialogModal.close();
  } else {
    list.style.color = "red";
    list.innerText = "Please select subjects";
  }
}

function resetModal() {
  const list = dialogModal.querySelector(".list");
  list.innerHTML = '';
}

function updateSubjectList(day, index) {
  const daySchedule = ScheduleData.getSchedule().find(
    (daySchedule) => daySchedule.day == day
  );

  subjectList[index].innerHTML = "";
  daySchedule?.subjects.forEach((subject) => {
    subjectList[index].appendChild(SubjectTile(subject.name, subject.id));
  });
  removeSubjectController(day, index);
}

function removeSubjectController(day, index) {
  const subjectTiles = subjectList[index].querySelectorAll(".tile");
  subjectTiles.forEach((tile) => {
    tile.querySelector("img").addEventListener("click", () => {
      const id = tile.getAttribute("data-ID");
      ScheduleData.removeSubject(day, id);
    });
  });
}

export default SchedulePageController;
