import '../styles/subjectTile.css';
import cut from '../icons/cut.svg';

function SubjectTile(name,id) {
    const div = document.createElement('div');
    div.classList = 'tile';

    const nameDiv = document.createElement('div');
    nameDiv.innerText = `${name}`;
    div.setAttribute('data-id', `${id}`);

    const img = document.createElement('img');
    img.src = cut;
    img.addEventListener('click', () => {
        img.parentElement.remove(); 
    });

    div.appendChild(nameDiv);
    div.appendChild(img);

    return div;
}


export default SubjectTile;