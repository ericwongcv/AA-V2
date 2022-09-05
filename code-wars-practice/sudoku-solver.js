function sudoku(puzzle) {
  //return the solved puzzle as a 2d array of 9 x 9 
  
  // check row, check column, check block
  // compare blocks
  // update blocks  
  while (puzzle.some(row => row.some(i => i === 0))) {
    for (let row = 0; row < puzzle.length; row++) {
      for (let col = 0; col < puzzle.length; col++) {
        if (puzzle[row][col] == 0) {
           // collect row, col, block vals that are incorrect or get answer
           const incorrectRow = markRow(puzzle, row);
           const incorrectCol = markCol(puzzle, col);
           const incorrectBlock = markBlock(puzzle, row, col);
           
           const newIncOrAns = mergeArrsOrAns(incorrectRow, incorrectCol, incorrectBlock)

           if (typeof newIncOrAns === 'number') {
               puzzle[row][col] = newIncOrAns;
           }
        }
      }
    }
  }

  return puzzle;
}

function mergeArrsOrAns(markRow, markCol, markBlock) {
    const newIncArr = Array.from(new Set([...markRow, ...markCol, ...markBlock]));
    return checkMissing(newIncArr) || newIncArr;
}

function markRow(puzzle, row) {
  const incorrect = [];
  
  puzzle[row].forEach(num => {
    if (num !== 0) {
      incorrect.push(num);
    };
  });
  return incorrect;
}

function markCol(puzzle, col) {
    const incorrect = [];
  
    for (let row = 0; row < 9; row++) {
      if (puzzle[row][col] !== 0) {
        incorrect.push(puzzle[row][col]);
      };
    };
    return incorrect;
}

function markBlock(puzzle, row, col) {
    const block = {
        1: [0, 1, 2],
        2: [3, 4, 5],
        3: [6, 7, 8]
    };

    const rIndexes = [1, 2, 3].find(key => block[key].includes(row));
    const cIndexes = [1, 2, 3].find(key => block[key].includes(col));

    const incorrect = [];

    block[rIndexes].forEach(row => {
        block[cIndexes].forEach(col => {
            if (puzzle[row][col] !== 0) {
                incorrect.push(puzzle[row][col]);
            }
        });
    });

    return incorrect;
}

function checkMissing(arr) {
  if (arr.length !== 8) return false;

  for (let i = 1; i < 10; i++) {
    if (!arr.includes(i)) return i;
  };
}


const puzzle = [
    [5,3,0,0,7,0,0,0,0],
    [6,0,0,1,9,5,0,0,0],
    [0,9,8,0,0,0,0,6,0],
    [8,0,0,0,6,0,0,0,3],
    [4,0,0,8,0,3,0,0,1],
    [7,0,0,0,2,0,0,0,6],
    [0,6,0,0,0,0,2,8,0],
    [0,0,0,4,1,9,0,0,5],
    [0,0,0,0,8,0,0,7,9]];

// // checkMissing function
// console.log(checkMissing([1,2,4,5,6,7,8,9]));

// // markRow
// const incRows = markRow(puzzle, 1);
// console.log(incRows);

// // markCol
// const incCols = markCol(puzzle, 3);
// console.log(incCols);

// // markBlock
// const incBlock = markBlock(puzzle, 4, 5);
// console.log(incBlock);

// // mergeArrs or Ans
// const incOrAns = mergeArrsOrAns(incRows, incCols, incBlock);
// console.log(incOrAns);


console.log(sudoku(puzzle));
