let map = [];
let tile1 = null, tile2 = null;

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

const loadMap = (rows = 4, cols = 4) => {
  const maxVal = (rows * cols) / 2;
  let oneDArray = [];
  for (let i = 1; i <= maxVal; i++) {
    oneDArray.push(i, i);
  }
  oneDArray = shuffleArray(oneDArray);

  map = [];
  for (let r = 0; r < rows; r++) {
    let row = [];
    for (let c = 0; c < cols; c++) {
      row.push(oneDArray[r * cols + c]);
    }
    map.push(row);
  }
};

const makeBoard = (rows = 4, cols = 4) => {
  let output = '<table>';
  for (let row = 0; row < rows; row++) {
    output += '<tr>';
    for (let col = 0; col < cols; col++) {
      output += `<td><button class="tile" id="${row}_${col}" onclick="process(${row},${col})"></button></td>`;
    }
    output += '</tr>';
  }
  output += '</table>';
  document.getElementById('gameBoard').innerHTML = output;
};

const resetBoard = () => {
  loadMap();
  makeBoard();
};

const process = (row, col) => {
  const clicked_tile = document.getElementById(`${row}_${col}`);
  if (!clicked_tile.innerHTML) {
    if (!tile1) {
      tile1 = clicked_tile;
      clicked_tile.innerHTML = map[row][col];
    } else if (!tile2) {
      tile2 = clicked_tile;
      clicked_tile.innerHTML = map[row][col];
      setTimeout(checkMatch, 1000);
    }
  }
};

const checkMatch = () => {
  if (tile1.innerHTML === tile2.innerHTML) {
    tile1.hidden = true;
    tile2.hidden = true;
  }
  tile1.innerHTML = "";
  tile2.innerHTML = "";
  tile1 = tile2 = null;
};

resetBoard();
