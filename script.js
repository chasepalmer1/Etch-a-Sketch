const gridSize = 512;
const defaultNumBlocks = 32;

let mouseDown = false;
let numBlocks = defaultNumBlocks;
let color = 'black';

const grid = document.querySelector('#grid-capsule');
const resetButton = document.querySelector('#reset');

function reset() {
    gridElement.forEach(item => {
        item.style.backgroundColor = 'black'
    })
}

for (let i = 0; i < defaultNumBlocks; i++) {
    var rowDiv = document.createElement('div');
    rowDiv.className = 'row';
    rowDiv.style.height = '100%';
    grid.appendChild(rowDiv);
    for (let j = 0; j < defaultNumBlocks; j++) {
        const colDiv =  document.createElement('div');
        colDiv.className = 'grid-element';
        setBoxSize(colDiv);
        rowDiv.appendChild(colDiv);
    }
}

const gridElement =  document.querySelectorAll('.grid-element');
document.body.onmouseup = () => {
    mouseDown = false;
}

gridElement.forEach(item => {
    item.addEventListener('mousedown', () => {
        mouseDown = true;
        item.style.backgroundColor = 'white';
    });
    item.addEventListener('mouseover', () => {
        if (mouseDown) {
            item.style.backgroundColor = 'white';
        }
    }); 
}); 

function setBoxSize(item) {
    let itemCalc = gridSize/numBlocks;
    let itemSize = (itemCalc/gridSize) * 100;
    item.style.width = `${itemSize}%`;
    item.style.height = `$100%`;
}

resetButton.addEventListener('click', () => {
    reset();
});

window.onload = () => {
}