import Attendance from "./components/attendance";

const subjectsWrapper = document.querySelector('.subjects-wrapper');

function HomePageController() {
    console.log(subjectsWrapper);
    
    subjectsWrapper.appendChild(Attendance("ML"));
    subjectsWrapper.appendChild(Attendance("DSS"));
    subjectsWrapper.appendChild(Attendance("AI"));
}

export default HomePageController;