
const resetButton = document.querySelector('button[data-behaviour="reset"]');
const sizeButton = document.querySelector('button[data-behaviour="size"]');
const rainbowButton = document.querySelector('button[data-behaviour="rainbow"]');
const blackButton = document.querySelector('button[data-behaviour="black"]');
const gameContainer = document.querySelector('.gameContainer');
let isRainbowPen = false
sizeButton.addEventListener('click', () => {
  makeGrid()
});

rainbowButton.addEventListener('click', () => {
  isRainbowPen = true
});

blackButton.addEventListener('click', () => {
  isRainbowPen = false
});



//Create Grid
function grid(size) {
  for(let i = 1; i <= (size * size); i++) {
    let gridCell = document.createElement('div');
    gridCell.classList.add('grid');
    gameContainer.appendChild(gridCell);
    document.querySelectorAll('grid');
    gridCell.addEventListener('mouseover', () => colorGridCell(gridCell));
    gridCell.addEventListener('click', () => gridCell.classList.remove('paint'));
  }
}
grid(16);

//Resets the game and prompts the user for a numerical input for the size of the new grid.
function makeGrid() {
  let gridSize = prompt('How many squares would you like on each axis of the new grid?', 16, )
  document.body.style.setProperty('--gridSize', gridSize)
  let elementRemove = document.getElementsByClassName('grid')
  while (elementRemove[0]) {
    elementRemove[0].parentNode.removeChild(elementRemove[0])
  }
  grid(gridSize);
}

//Generate colours for pointer - default
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

resetButton.onclick = reloadPage;
function reloadPage () {
  window.location.reload();
}


  





 


  
 
 
 
 
 
 
 
 





     