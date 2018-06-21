let container = document.querySelector('.container');

const gridSize = 16;
const totalGridSize = gridSize * gridSize;

for(let i = 0; i < totalGridSize; i++) {
  container.innerHTML += '<div></div>';
  if (i % 16 === 1) {
    container.innerHTML += '<div class='clear'></div>';
  }
}



