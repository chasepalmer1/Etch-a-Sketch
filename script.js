const grid = document.querySelector('#grid-capsule');

for (let i = 0; i < 16; i++) {
    var rowDiv = document.createElement('div');
    rowDiv.className = 'row';
    grid.appendChild(rowDiv);
    for (let j = 0; j < 16; j++) {
        var colDiv =  document.createElement('div');
        colDiv.className = 'grid-element';
        colDiv.id = 'r' + i + 'c' + j;
        /*
        rowDiv.appendChild(colDiv);
        var box = document.querySelector('#r' + i + 'c' + j);
        box.addEventListener('mouseover', () => {
            gridElement.style.backgroundColor = 'gray';
        });
        */
    }
}