import ReportData from "./Data/reportData";
import row from "./components/row";

function ReportPageController() {
    const homePage = document.querySelector('#home-page');
    const reportContent = homePage.querySelector('.table-content');
    ReportData.setReport();
    renderSubjects(reportContent);
} 
function renderSubjects(reportContent) {
    reportContent.innerHTML = '';
   
    ReportData.getReport().forEach(data => {
        reportContent.appendChild(row(data.subject.id, data.subject.name, data.total, data.attended, (data.attended / data.total) * 100));
    });
}

export default ReportPageController;