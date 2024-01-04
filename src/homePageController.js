import TodayPageController from './todayPageController';
import ReportPageController from './reportPageController';

function HomePageController() {
    const homePage = document.querySelector('#home-page');
    const homePageWrapper = homePage.querySelector('.home-pg-wrapper');
    const nav = homePage.querySelector('.nav');
    const today = homePageWrapper.querySelector('.today');
    const report = homePageWrapper.querySelector('.report');
    nav.addEventListener('click', (e) => {
        nav.querySelectorAll('.nav-item').forEach(item => {
            item.classList = 'nav-item';
        });

        e.target.classList = 'nav-item current';

       if (e.target.id == 'today') {
           today.style.display = 'flex';
           report.style.display = 'none';
           TodayPageController();
       } else {
           today.style.display = "none";
           report.style.display = "flex";
           ReportPageController();
       }
    });
}

export default HomePageController;