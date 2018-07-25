

const resetButton = document.querySelector('button[data-behavior="reset"]');
const sizeButton = document.querySelector('button[data-behavior="size"]');
const rainbowButton = document.querySelector('button[data-behavior="rainbow"]');
const blackButton = document.querySelector('button[data-behavior="black"]');
const gameContainer = document.querySelector('div[data-behavior="container"]');

let isRainbowPen = false

sizeButton.addEventListener('click', () => {
  changeSize()
});

rainbowButton.addEventListener('click', () => {
  isRainbowPen = true
});

blackButton.addEventListener('click', () => {
  isRainbowPen = false
});

window.onload = function() {
  grid(16);
}

//Create Grid
function grid(size) {
  for(let i = 1; i <= (size * size); i++) {
    let gridCell = document.createElement('div');
    gridCell.classList.add('grid_divs');
    gameContainer.appendChild(gridCell);
    gridCell.addEventListener('mouseover', () => colorGridCell(gridCell));
  }
}

//Prompts the user for a numerical input for the size of the new grid which is created.
function changeSize() {
  let gridSize = prompt('How many squares would you like on each axis of the new grid?', 16, )
  document.body.style.setProperty('--gridSize', gridSize);
  gameContainer.innerHTML = '';
  grid(gridSize);
}



//Generate colours for pointer - default is black
function penColor() {
  let penColor = 'black'
  if (isRainbowPen) {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    penColor = (`rgb(${r}, ${g}, ${b})`);
  }
  return penColor
}

function colorGridCell(gridCell) {
  gridCell.style.setProperty('background-color', penColor());
}

//Reset game to 16 * 16 grid to start again.
resetButton.onclick = reloadPage;
function reloadPage () {
  window.location.reload();
}




  





 


  
 
 
 
 
 
 
 
 





     