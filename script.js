const grid = document.querySelector('#grid-capsule');

for (let i = 0; i < 16; i++) {
    var rowDiv = document.createElement('div');
    rowDiv.className = 'row';
    grid.appendChild(rowDiv);
    for (let j = 0; j < 16; j++) {
        var colDiv =  document.createElement('div');
        colDiv.className = 'grid-element';
        rowDiv.appendChild(colDiv);
    }
}

const gridElement = document.querySelectorAll('.grid-element');

gridElement.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.backgroundColor = 'white';
    });
  });



function reset() {
    gridElement.forEach(item => {
        item.style.backgroundColor = 'black'
    })
}

const resetButton = document.querySelector('#reset');

resetButton.addEventListener('click', () => {
    reset();
});