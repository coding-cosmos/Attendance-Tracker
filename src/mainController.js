class MainController {
    static render(tabID) {
        MainController.clearScreen();

        const pageID = `${tabID}-page`;
        const page = document.querySelector(`#${pageID}`);
        page.style.display = 'flex';
    }
    static clearScreen() {
        const pages = document.querySelectorAll('#main>.page');
        pages.forEach((page) => {
            page.style.display = 'none';
        });
    }
}

export default MainController;