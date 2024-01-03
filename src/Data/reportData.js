import SubjectData from "./subjectData";
import TodayData from "./todayData";

class ReportData{
    static report = [];

    static getReport() {
        return ReportData.report;
    }
    static setReport() {
        console.log(JSON.parse(localStorage.getItem("report")) == "");
        if (JSON.parse(localStorage.getItem('report')) == '') {
            SubjectData.getSubjects().forEach((subject) => {
              ReportData.report.push({
                subject,
                attended: 0,
                bunk: 0,
                holiday: 0,
                  total: 0,
              });
            });
            localStorage.setItem("report", JSON.stringify(ReportData.report));
        }
        else {
            ReportData.report = JSON.parse(localStorage.getItem("report"));
        }
    }

    static updateReport(subject,status) {
    }

    static getData(subject) {
       const report = JSON.parse(localStorage.getItem('report'));
       const data=  report.find(data => data.subject.id == subject.id);
        return data;
    }

    static updateLocalStorage() {
        localStorage.setItem("report", JSON.stringify(ReportData.report));
    }

}

export default ReportData;