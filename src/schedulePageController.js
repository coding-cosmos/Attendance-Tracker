import up from "./icons/up.svg";
import down from "./icons/down.svg";
import Select from "./components/select";

const schedulePage = document.querySelector("#schedule-page");
const images = schedulePage.querySelectorAll("img");
const subjectList = schedulePage.querySelectorAll(".subject-list-wrapper");
const addBtns = schedulePage.querySelectorAll('.add>button');
const dialogModal = schedulePage.querySelector('.modal>dialog');
const dialogModalDiv = schedulePage.querySelector('.modal>dialog>.dialog');

function SchedulePageController() {
    dropDownController();
    modalController();
    console.log(dialogModal);
}

function dropDownController() {
    images.forEach((img, index) => {
      img.src = down;
      img.addEventListener("click", () => {
        img.src = img.src == down ? up : down;

        subjectList[index].classList =
          img.src == down
            ? "subject-list-wrapper"
            : "subject-list-wrapper dropdown";
      });
    });
}

function modalController() {
    addBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            dialogModal.showModal();
        })
    })

  dialogModalDiv.appendChild(Select());

  const list = document.createElement('div');
  list.className = 'list';

  const button = document.createElement('button');
  button.classList = 'submit-btn';
  button.innerText = 'Done';

  button.addEventListener('click', () => {
    dialogModal.close();
  });

  dialogModalDiv.appendChild(list);
  dialogModalDiv.appendChild(button);
  
  
}
export default SchedulePageController;
