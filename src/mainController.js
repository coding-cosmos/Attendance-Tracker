import HomePageController from "./homePageController";
import {SchedulePageController,getSubjectOptions} from "./schedulePageController";
import SubjectPageController from "./subjectPageController";

class MainController {
    static render(tabID) {
        MainController.clearScreen();

        const pageID = `${tabID}-page`;
        const page = document.querySelector(`#${pageID}`);
        page.style.display = 'flex';

        switch (pageID) {
            case 'schedule-page':
                 getSubjectOptions();
                break;
            case 'home-page':
                 HomePageController();
                break;
        }
    }
    static clearScreen() {
        const pages = document.querySelectorAll('#main>.page');
        pages.forEach((page) => {
            page.style.display = 'none';
        });
    }
}

export default MainController;