function Data() {
    if (localStorage.length == 0) {
    localStorage.setItem("subjects", JSON.stringify([]));

      localStorage.setItem("id", JSON.stringify(0));
      
      localStorage.setItem('newUser', JSON.stringify(true));

      localStorage.setItem(
        "schedule",
        JSON.stringify([
          { day: "mon", subjects: [] },
          { day: "tue", subjects: [] },
          { day: "fri", subjects: [] },
          { day: "wed", subjects: [] },
          { day: "thr", subjects: [] },
        ])
      );
  }
}

export default Data;
