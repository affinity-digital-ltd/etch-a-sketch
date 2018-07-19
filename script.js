let container = document.querySelector('.container');

const gridSize = 30;
const totalGridSize = gridSize * gridSize;

for(let i = 1; i <= totalGridSize; i++) {
  if (i % gridSize === 1) {
    container.innerHTML += "<div class='clear'></div>";
  } else {
    container.innerHTML += '<div></div>';
  }
}
