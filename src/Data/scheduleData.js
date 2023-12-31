class ScheduleData {
  static schedule = ScheduleData.getSchedule();

  static getSchedule() {
    const schedule = JSON.parse(localStorage.getItem("schedule"));

    return schedule
      ? schedule
      : [
          { day: "mon", subjects: [] },
          { day: "tue", subjects: [] },
          { day: "wed", subjects: [] },
          { day: "thu", subjects: [] },
          { day: "fri", subjects: [] },
        ];
  }

  static removeSubject(day, id) {
    const index = ScheduleData.schedule.findIndex(
      (daySchedule) => daySchedule.day == day
    );

    const daySubjects = ScheduleData.schedule[index].subjects;

    const removeSubjectIndex = daySubjects.findIndex(
      (subject) => subject.id == id
    );

    daySubjects.splice(removeSubjectIndex, 1);

    ScheduleData.updateLocalStorage();
  }

  static addData(day, subjects) {
    const index = ScheduleData.schedule.findIndex(
      (daySchedule) => daySchedule.day == day
    );

    const storedSubjects = ScheduleData.schedule[index].subjects;

    subjects.forEach((subject) => {
      if (!storedSubjects.includes(subject)) {
        storedSubjects.push(subject);
      }
    });

    ScheduleData.updateLocalStorage();
  }

  static updateLocalStorage() {
    localStorage.setItem("schedule", JSON.stringify(ScheduleData.schedule));
  }

  static getDaySchedule(day) {
    const daySchedule = ScheduleData.schedule.find(
      (schedule) => schedule.day == day.toLowerCase()
    );
    return daySchedule?.subjects;
  }
}

export default ScheduleData;
