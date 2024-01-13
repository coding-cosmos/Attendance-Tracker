import MainController from "./mainController";

function SettingsController(){
    resetApp();
}
function resetApp() {
    const resetBtn = document.querySelector('#settings-page .reset>button');
    console.log(resetBtn);
    resetBtn.addEventListener('click', () => {
        localStorage.clear();
        location.reload();
    });
}
export default SettingsController;