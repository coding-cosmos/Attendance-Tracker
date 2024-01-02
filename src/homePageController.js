import {getDate,getDay} from "./Data/date";
import ScheduleData from "./Data/scheduleData";
import Attendance from "./components/attendance";

const subjectsWrapper = document.querySelector('.subjects-wrapper');
const homePage = document.querySelector('#home-page');

function HomePageController() {
    dateController();
    renderSubjects();
}

function dateController() {
    const day = homePage.querySelector('#day');
    const date = homePage.querySelector('#date');
    day.innerText = getDay();
    date.innerText = getDate();
}

function renderSubjects() {
    const subjects = ScheduleData.getDaySchedule(getDay());
    subjectsWrapper.innerHTML = '';
    subjects.forEach(subject => {
        subjectsWrapper.appendChild(Attendance(subject.name,'Select'));
    });
}

export default HomePageController;