function Data() {
    if (localStorage.length == 0) {
    localStorage.setItem("subjects", JSON.stringify([]));

      localStorage.setItem("id", JSON.stringify(0));
      
      localStorage.setItem('newUser', JSON.stringify(true));
  }
}

export default Data;
