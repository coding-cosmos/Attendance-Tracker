import ExtraPageController from "./extraPageController";
import HomePageController from "./homePageController";
import { getSubjectOptions } from "./schedulePageController";
import TodayPageController from './todayPageController';


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
                TodayPageController();
                break;
            case 'extraclass-page':
                ExtraPageController();  
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