const generatePlayerBoard = (numberOfRows, numberOfColumns) => {

  let board = [];

  for(let rows = 0; rows < numberOfRows; rows++) {
    let row = [];
    for(let columns = 0; columns < numberOfColumns; columns++) {
      row.push(' ');
    }
    board.push(row);
  }
  return board;
};

const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
  let board = [];

  for(let rows = 0; rows < numberOfRows; rows++) {
    let row = [];
    for(let columns = 0; columns < numberOfColumns; columns++) {
      row.push(null);
    }
    board.push(row);
  }
  let numberOfBombsPlaced = 0;

  while(numberOfBombsPlaced < numberOfBombs ) {
    let randomRowIndex = Math.floor(Math.random() * numberOfRows);
    let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);

    board[randomRowIndex][randomColumnIndex]=  'B';
    numberOfBombsPlaced++;

    //prevent bombs from bing placed on top of other bombs

  }

  return board;
};

const printBoard = board => console.log(board.map( row => row.join(' | ')).join('\n'));


let playBoard = generatePlayerBoard(3,4);
let bombBoard = generateBombBoard(3,4,5);

console.log('Player Board :' + printBoard(playBoard));
console.log('Bomb Board :' + printBoard(bombBoard));


