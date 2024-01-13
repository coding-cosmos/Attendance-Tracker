import { getDate,getDay } from "./date";
import ReportData from "./reportData";
import ScheduleData from "./scheduleData";

class TodayData{
    static attendance = [];
    static setLocalStorage() {
        if (JSON.parse(localStorage.getItem("today")) == getDate()) {
           TodayData.todayReportData();
        } else {
          localStorage.setItem("today", JSON.stringify(getDate()));
          localStorage.setItem('extraclass', JSON.stringify([]));
          localStorage.setItem('todayReport', JSON.stringify(""));
          TodayData.todayReportData();        
        }
    }

  static addAttendance(subject, status) {
         const prvStatus = TodayData.attendance.find(
           (attendance) => attendance.subject.name == subject.name
         );
         ReportData.updateReport(subject, prvStatus.status, status);
         prvStatus.status = status;
         TodayData.updateLocalStorage();
    }

    static todayReportData() { 
        if (JSON.parse(localStorage.getItem("todayReport")) == "") {
          const subjects = ScheduleData.getDaySchedule(getDay());
          subjects?.forEach((subject) => {
            TodayData.attendance.push({ subject, status: "Select" });
          });
          TodayData.updateLocalStorage();
        } else {
          TodayData.attendance = JSON.parse(
            localStorage.getItem("todayReport")
          );
          TodayData.updateLocalStorage();
        }
    }

    static updateLocalStorage() {
        localStorage.setItem(
          "todayReport",
          JSON.stringify(TodayData.attendance)
        );
    }
}

export default TodayData;