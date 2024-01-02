function getDay() {
    return new Date().toDateString().split(" ")[0];
}

function getDate() {
    let dateString = new Date().toDateString().split(' ');  
    const [ month, date, year ] = [ dateString[1], dateString[ 2 ], dateString[ 3 ] ];
    
    dateString = month + " " + date + ", " + year; 
    return dateString;
}
export { getDay ,getDate};