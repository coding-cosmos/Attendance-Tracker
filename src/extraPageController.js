import Extraclass from './Data/extraClassData';
import Attendance from './components/attendance';
import Select from "./components/select";
import SubjectData from './Data/subjectData';

function ExtraPageController() {
    Extraclass.setStorage();
    renderView();
    selectorController();
    renderSubjects();
}

function renderView() {
    const extraPage = document.querySelector('#extraclass-page');
    const extraPageWrapper = extraPage.querySelector('.extraclass-pg-wrapper');
    extraPageWrapper.innerHTML = '';
    
    const subjectContainer = document.createElement('div');
    subjectContainer.className = 'sub-container';

    extraPageWrapper.appendChild(selector());
    extraPageWrapper.appendChild(subjectContainer);
}

function selector() {
    const selector = Select(true);
    const optionsWrapper = selector.querySelector('.options-wrapper>.options');
    SubjectData.getSubjects().forEach(subject => {
        const option = document.createElement('div');
        option.classList = 'option';
        option.innerText = subject.name;
        option.setAttribute('data-ID', `${subject.id}`);
        optionsWrapper.appendChild(option);
    });
    return selector;
}


function selectorController() {
    const options = document.querySelectorAll(".options-wrapper>.options>.option");
    options.forEach(option => {
        option.addEventListener('click', (e) => {
            const id = e.target.getAttribute('data-ID');
            const name = e.target.innerText;
            Extraclass.addSubject({ name, id }, 'Select');
            renderSubjects();
        });
    });
}

function renderSubjects() {
    const extraPage = document.querySelector("#extraclass-page");
    const subjectContainer = extraPage.querySelector('.sub-container');
    subjectContainer.innerHTML = '';
    Extraclass.getData().forEach(data => {
        const attendance = Attendance(data.subject.name, data.status);
        attendance.setAttribute('data-ID', `${data.subject.id}`);
        subjectContainer.appendChild(attendance);
    });
    attendanceController();
}

function attendanceController() {
  const options = document.querySelectorAll(".selector-option");
  options?.forEach((option) => {
    option.addEventListener("click", (e) => {
      const status = e.target.innerText;
      const subject =
        e.target.parentElement.parentElement.parentElement.parentElement;
      const subjectID = subject.getAttribute("data-ID");
      Extraclass.updateSubject(
        subjectID,
        status
      );
    });
  });
}

export default ExtraPageController;