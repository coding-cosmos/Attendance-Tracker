import Attendance from "./components/attendance";
import Select from "./components/select";
import SubjectData from './Data/subjectData';

function ExtraPageController() {
    renderView();
}

function renderView() {
    const extraPage = document.querySelector('#extraclass-page');
    const extraPageWrapper = extraPage.querySelector('.extraclass-pg-wrapper');
    extraPageWrapper.innerHTML = '';
    extraPageWrapper.appendChild(selector());
    selectorController();
}

function selector() {
    const selector = Select();
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
    const extraPage = document.querySelector("#extraclass-page");
    const extraPageWrapper = extraPage.querySelector(".extraclass-pg-wrapper");
    const options = document.querySelectorAll(".options-wrapper>.options>.option");
    options.forEach(option => {
        option.addEventListener('click', (e) => {
            const id = e.target.getAttribute('data-ID');
            const attendance = Attendance(option.innerText, "Select");
            attendance.setAttribute('data-ID', `${id}`);
            extraPageWrapper.appendChild(
              attendance
            );
        });
    });
}

export default ExtraPageController;