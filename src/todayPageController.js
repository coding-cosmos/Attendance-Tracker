import {getDate,getDay} from "./Data/date";
import Attendance from "./components/attendance";
import TodayData from "./Data/todayData";

const subjectsWrapper = document.querySelector('.subjects-wrapper');
const homePage = document.querySelector('#home-page');

function TodayPageController() {
    dateController();
    TodayData.setLocalStorage();
    renderSubjects();
    attendanceController();
}

function dateController() {
    const day = homePage.querySelector('#day');
    const date = homePage.querySelector('#date');
    day.innerText = getDay();
    date.innerText = getDate();
}

function renderSubjects() {
    const attendance = TodayData.attendance;
    console.log(attendance);
    subjectsWrapper.innerHTML = '';
    attendance.forEach(attendance => {
        const attendanceView = Attendance(
            attendance.subject.name,
            attendance.status
        );
        console.log(attendance);
        attendanceView.setAttribute('data-ID', attendance.subject.id);
        subjectsWrapper.appendChild(attendanceView);
    });
}

function attendanceController() {
    const options = document.querySelectorAll('.selector-option');
    options.forEach(option => {
        option.addEventListener('click', (e) => {
            const status = e.target.innerText;
            const subject =
                e.target.parentElement.parentElement.parentElement.parentElement;
            const subjectID = subject.getAttribute('data-ID');
            const subjectName = subject.querySelector('.sub-name').innerText;
            TodayData.addAttendance({
                name: subjectName,
                id: subjectID
            }, status);
            console.log(status,subjectID,subjectName);
        });
    });
}
    
export default TodayPageController;