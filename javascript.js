const DEFAULT_SIZE = 16;
let size = DEFAULT_SIZE;
let mode = 'default';
const container = document.querySelector('.container');
const slider = document.getElementById('range');
const output = document.getElementById('display');


// Makes a playground (grid) size x size
function makeRows(size) {
    container.style.gridTemplateRows =  `repeat(${size}, 1fr)`;
    container.style.gridTemplateColumns =  `repeat(${size}, 1fr)`;
    for (c = 0; c < (size * size); c++) {
      let cell = document.createElement("div");
      container.appendChild(cell).className = "grid-item";
    };
  };
  
makeRows(size);

slider.oninput = function() {
    output.innerHTML = this.value;
}

// Changes the background color for grid-items
container.addEventListener('mouseover', (e) => {
    if (e.target.classList.contains('grid-item')) {
        if (mode === 'default') {
            e.target.style.backgroundColor = 'black';
        } else if (mode === 'eraser') {
            e.target.style.backgroundColor = 'white'
        }
    }
});