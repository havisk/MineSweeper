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

    if('B' !==board[randomColumnIndex][randomRowIndex]) {

      board[randomRowIndex][randomColumnIndex]=  'B';
      numberOfBombsPlaced++;
    }



    //prevent bombs from bing placed on top of other bombs

  }

  return board;
};

const getNumberOfNeighborBombs = (bombBoard, rowIndex, columnIndex) => {

  const neighborOffsets = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
  ];

  const numberOfRows = bombBoard.length;
  const numberOfColumns = bombBoard[0].length;
  let numberOfBombs = 0;

  neighborOffsets.forEach(offset => {
    const neighborRowIndex = rowIndex + offset[0];
    const neighborColumnIndex = columnIndex + offset[1];

    if(neighborRowIndex >=0 && neighborRowIndex < numberOfRows
      && neighborColumnIndex >= 0 && neighborColumnIndex < numberOfColumns) {
      if(bombBoard[neighborRowIndex][neighborColumnIndex] === 'B') {
        numberOfBombs++
      }

    }
  });

  return numberOfBombs;
};

const flipTile = (playBoard, bombBoard, rowIndex, columnIndex) => {


};

const printBoard = board => console.log(board.map( row => row.join(' | ')).join('\n'));


let playBoard = generatePlayerBoard(3,4);
let bombBoard = generateBombBoard(3,4,5);

console.log('Player Board :' + printBoard(playBoard));
console.log('Bomb Board :' + printBoard(bombBoard));


