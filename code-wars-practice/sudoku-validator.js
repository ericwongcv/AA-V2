function validSolution(board) {
    // check rows
    const checkRow = board.every(row => uniqueOneToNine(row));
    // check cols
    for (let i = 0; i < board[0].length; i++) {
        const colArr = board.map(row => row[i]);
        if (!uniqueOneToNine(colArr)) return false;
    }
    // check blocks
    const secs = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];
    for (let i = 0; i < secs.length; i++) {
        for (let j = 0; j < secs[0].length; j++) {
            if (!uniqueOneToNine(getBlockArrs(secs[i], secs[j], board))) return false;
        }
    }

    return true;
}

function getBlockArrs(sec1, sec2, board) {
    const arr = [];

    sec1.forEach(row => {
        sec2.forEach(col => {
            arr.push(board[row][col]);
        });
    });
    
    return arr;
}

function uniqueOneToNine(array) {
    const solved = {}

    for (let i = 0; i < array.length; i++) {
        if (array[i] in solved || array[i] === 0) {
            return false;
        } else {
            solved[array[i]] = true;
        }
    }

    return true;
}

const board = [[5, 3, 4, 6, 7, 8, 9, 1, 2],
[6, 7, 2, 1, 9, 5, 3, 4, 8],
[1, 9, 8, 3, 4, 2, 5, 6, 7],
[8, 5, 9, 7, 6, 1, 4, 2, 3],
[4, 2, 6, 8, 5, 3, 7, 9, 1],
[7, 1, 3, 9, 2, 4, 8, 5, 6],
[9, 6, 1, 5, 3, 7, 2, 8, 4],
[2, 8, 7, 4, 1, 9, 6, 3, 5],
[3, 4, 5, 2, 8, 6, 1, 7, 9]];

console.log(validSolution(board));
// console.log(getBlockArrs(board));


const board1 = [[5, 3, 4, 6, 7, 8, 9, 1, 2], 
[6, 7, 2, 1, 9, 0, 3, 4, 8],
[1, 0, 0, 3, 4, 2, 5, 6, 0],
[8, 5, 9, 7, 6, 1, 0, 2, 0],
[4, 2, 6, 8, 5, 3, 7, 9, 1],
[7, 1, 3, 9, 2, 4, 8, 5, 6],
[9, 0, 1, 5, 3, 7, 2, 1, 4],
[2, 8, 7, 4, 1, 9, 6, 3, 5],
[3, 0, 0, 4, 8, 1, 1, 7, 9]];

console.log(validSolution(board1));
