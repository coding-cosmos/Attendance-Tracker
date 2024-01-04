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

    static updateReport(subject,prvStatus,updatedStatus ) {
        const data = ReportData.report.find(data => data.subject.id == subject.id);

        if (prvStatus == 'Select') {
            console.log('new entry');
            switch (updatedStatus) {
                case 'Attended':
                    data.attended++;
                    data.total++;
                    break;
                case 'Bunk':
                    data.bunk++;
                    data.total++;
                    break;
                case 'Holiday':
                    data.holiday++;
                    break;
            }
            ReportData.updateLocalStorage();
        } else {
            console.log('updated entry');
            if (!(prvStatus == updatedStatus)) {
                 switch (updatedStatus) {
                     case "Attended":
                         data.attended++;
                         break;
                     case "Bunk":
                         data.bunk++;
                         break;
                     case "Holiday":
                         data.holiday++;
                         data.total--;
                         break;
                 }
                 switch (prvStatus) {
                     case "Attended":
                         data.attended--;
                         break;
                     case "Bunk":
                         data.bunk--;
                         break;
                     case "Holiday":
                         data.holiday--;
                         data.total++;
                         break;
                 }
                ReportData.updateLocalStorage();
            }
        }   
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