const DEFAULT_SIZE = 16;
let size = DEFAULT_SIZE;
const container = document.querySelector('.container');


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