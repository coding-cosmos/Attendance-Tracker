function row(id,subject,total,attended,percent) {
    const row = document.createElement('div');
    row.className = 'table-row';
    row.setAttribute('data-ID', `${id}`);

    const subjectDiv = document.createElement('div');
    subjectDiv.className = 'cell';
    subjectDiv.innerText = `${subject}`;
    
    const totalDiv = document.createElement('div');
    totalDiv.className = 'cell';
    totalDiv.innerText = `${total}`;

    const attendedDiv = document.createElement('div');
    attendedDiv.className = 'cell';
    attendedDiv.innerText = `${attended}`;

    const percentDiv = document.createElement('div');
    percentDiv.className = 'cell';
    percentDiv.innerText = `${percent}`;


    row.appendChild(subjectDiv);
    row.appendChild(totalDiv);
    row.appendChild(attendedDiv);
    row.appendChild(percentDiv);
    
    return row;
}

export default row;

