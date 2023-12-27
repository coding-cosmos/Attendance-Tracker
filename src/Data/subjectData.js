class SubjectData {
  static id = SubjectData.ID();
  static subjects = SubjectData.getSubjects();

  static addSubjects(name) {
    SubjectData.id++;
    SubjectData.subjects.push({
      name,
      id: SubjectData.id,
    });
    SubjectData.updateLocalStorage();
  }

  static removeSubject(id) {
    const removedSubject = SubjectData.subjects.find(
      (subject) => subject.id == id
    );
    const index = SubjectData.subjects.indexOf(removedSubject);

    SubjectData.subjects.splice(index, 1);

    SubjectData.updateLocalStorage();
  }
  static updateLocalStorage() {
    localStorage.setItem("subjects", JSON.stringify(SubjectData.subjects));
    localStorage.setItem("id", JSON.stringify(SubjectData.id));
  }

  static ID() {
    return JSON.parse(localStorage.getItem("id"));
  }

  static getSubjects() {
    const subjects = JSON.parse(localStorage.getItem("subjects"));

    return subjects ? subjects : [];
  }
}

export default SubjectData;
