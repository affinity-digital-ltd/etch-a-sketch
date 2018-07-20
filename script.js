
const resetButton = document.querySelector('button[data-behaviour="reset"]');
const sizeButton = document.querySelector('button[data-behaviour="size"]');
const gameContainer = document.querySelector('.gameContainer');
sizeButton.addEventListener('click', () => {
  makeGrid()
});

//Create Grid
function grid(size) {
for(let i = 1; i <= (size * size); i++) {
  let grid = document.createElement('div');
  grid.classList.add('grid');
  gameContainer.appendChild(grid);
  document.querySelectorAll('grid');
  grid.addEventListener('mouseover', () => grid.classList.add('paint'));
  grid.addEventListener('click', () => grid.classList.remove('paint'));
  resetButton.addEventListener('click', () => grid.classList.remove('paint'));
}
}

grid(16);

//resets the game and prompts the user for a numerical input for the size of the new grid.
function makeGrid() {
  let gridSize = prompt('How many squares would you like on each axis of the new grid?', 16, )
  document.body.style.setProperty('--gridSize', gridSize)
  let elementRemove = document.getElementsByClassName('grid')
  while (elementRemove[0]) {
      elementRemove[0].parentNode.removeChild(elementRemove[0])
  }
  grid(gridSize);
  }





 


  
 
 
 
 
 
 
 
 





     