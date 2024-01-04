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
          { day: "wed", subjects: [] },
          { day: "thu", subjects: [] },
          { day: "fri", subjects: [] },
        ])
      );

      localStorage.setItem('today', JSON.stringify('Jan 02, 2024'));
      localStorage.setItem('todayReport', JSON.stringify(''));
      localStorage.setItem('report', JSON.stringify(''));
      localStorage.setItem('extraclass', JSON.stringify([]));
  }
}

export default Data;
