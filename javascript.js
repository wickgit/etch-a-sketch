const DEFAULT_SIZE = 16;
let size = DEFAULT_SIZE;
let currentMode = 'default';
const container = document.querySelector('.container');
const slider = document.getElementById('range');
const output = document.getElementById('display');
const range = document.getElementById('range');
const eraser = document.getElementById('eraser');
const defaultMode = document.getElementById('default');
const clear = document.getElementById('clear');

makeRows(size);

// Makes a playground (grid) size x size
function makeRows(size) {
    container.style.gridTemplateRows =  `repeat(${size}, 1fr)`;
    container.style.gridTemplateColumns =  `repeat(${size}, 1fr)`;
    for (c = 0; c < (size * size); c++) {
      let cell = document.createElement("div");
      container.appendChild(cell).className = "grid-item";
    };
};

function changeMode(e) {
    currentMode = e.target.id;
}

function reloadGrid() {
    container.innerHTML = '';
    makeRows(size);
}

makeRows(size);

slider.oninput = function() {
    output.innerHTML = this.value;
}

eraser.onclick = changeMode;
defaultMode.onclick = changeMode;
clear.onclick = reloadGrid;


// Changes the background color for grid-items
container.addEventListener('mouseover', (e) => {
    if (e.target.classList.contains('grid-item')) {
        if (currentMode === 'default') {
            e.target.style.backgroundColor = 'black';
        } else if (currentMode === 'eraser') {
            e.target.style.backgroundColor = 'white'
        }
    }
});

range.addEventListener('mouseup', (e) => {
    size = e.target.value;
    reloadGrid();
});