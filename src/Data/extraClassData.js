import ReportData from "./reportData";

class Extraclass{
    static subject = [];

    static setStorage() {
        if (Extraclass.getData() != "") {
            Extraclass.subject = Extraclass.getData();
        }
    }
    static addSubject(subject,status) {
        Extraclass.subject.push({subject,status});
        Extraclass.updateLocalStorage();
    }
    
    static updateLocalStorage() {
        localStorage.setItem('extraclass', JSON.stringify(Extraclass.subject));
    }

    static updateSubject(id, status) {
        const data = Extraclass.subject.find(data => data.subject.id == id);
        const prvStatus = data.status;
        console.log(prvStatus);
        ReportData.updateReport(data.subject, prvStatus, status);
        data.status = status;
        Extraclass.updateLocalStorage();
    }

    static getData() {
         return JSON.parse(localStorage.getItem('extraclass'));
    }
}

export default Extraclass;