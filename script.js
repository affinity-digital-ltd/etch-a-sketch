let container = document.querySelector('.container');

const gridSize = 16;
const totalGridSize = gridSize * gridSize;

for(let i = 1; i <= totalGridSize; i++) {
  if (i % 16 === 1) {
    container.innerHTML += "<div class='clear'></div>";
  } else {
    container.innerHTML += '<div></div>';
  }
}



