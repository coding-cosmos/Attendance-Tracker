import HomePageController from "./homePageController";
import SchedulePageController from "./schedulePageController";
import SubjectPageController from "./subjectPageController";

class MainController {
    static render(tabID) {
        MainController.clearScreen();

        const pageID = `${tabID}-page`;
        const page = document.querySelector(`#${pageID}`);
        page.style.display = 'flex';

        switch (pageID) {
            case 'home-page': HomePageController();
                break;
            case 'subjects-page':
                SubjectPageController();
                break;
            case 'schedule-page':
                SchedulePageController();
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