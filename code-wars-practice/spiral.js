// Your task, is to create a NxN spiral with a given size.

// For example, spiral with size 5 should look like this:

// 00000
// ....0
// 000.0
// 0...0
// 00000
// and with the size 10:

// 0000000000
// .........0
// 00000000.0
// 0......0.0
// 0.0000.0.0
// 0.0..0.0.0
// 0.0....0.0
// 0.000000.0
// 0........0
// 0000000000
// Return value should contain array of arrays, of 0 and 1, with the first row being composed of 1s. For example for given size 5 result should be:

// [[1,1,1,1,1],[0,0,0,0,1],[1,1,1,0,1],[1,0,0,0,1],[1,1,1,1,1]]
// Because of the edge-cases for tiny spirals, the size will be at least 5.

// General rule-of-a-thumb is, that the snake made with '1' cannot touch to itself.

const spiralize = (num) => {
    const firstLastArr = Array(num).fill(1);
    let [i, j] = [0, 0];
    const arr = [];
    let dir = 'r';

    for (let i = 0; i < num; i++) {
        arr.push(Array(num).fill(0));
    }

    const [n, ne, e, se, s, sw, w, nw] = [
        [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1]
    ];

    const [n2, e2, s2, w2] = [
        [-2, 0], [0, 2], [2, 0], [0, -2]
    ];

    while (dir !== 'stop') {
        arr[i][j] = 1;
        const pos = [i, j];
        console.log(pos, dir)

        switch (dir) {
            case 'r':
                //check 1 and 2 unit to right
                if (checkFill(pos, e, arr) === -1 || checkFill(pos, e2, arr) === 1) {
                    dir = checkFill(pos, s2, arr) || checkFill(pos, se, arr) === 1 ? 'stop' : 'd';
                } else {
                    j += 1;
                }
                break;
            case 'd':
                //check 1 and 2 unit to bottom
                if (checkFill(pos, s, arr) === -1 || checkFill(pos, s2, arr) === 1) {
                    dir = checkFill(pos, w2, arr) || checkFill(pos, nw, arr) === 1 ? 'stop' : 'l';
                } else {
                    i += 1;
                }
                break;
            case 'l':
                //check 1 and 2 unit to left
                if (checkFill(pos, w, arr) === -1 || checkFill(pos, w2, arr) === 1) {
                    dir = checkFill(pos, n2, arr) || checkFill(pos, ne, arr) === 1 ? 'stop' : 'u';
                } else {
                    j -= 1;
                }
                break;
            case 'u':
                //check 1 and 2 unit to up
                if (checkFill(pos, n, arr) === -1 || checkFill(pos, n2, arr) === 1) {
                    dir = checkFill(pos, e2, arr) || checkFill(pos, se, arr) === 1 ? 'stop' : 'r';
                } else {
                    i -= 1;
                }
                break;
        }
    }

    return arr;
}

const checkFill = (pos, delta, arr) => {
    const [curRow, curCol] = pos;
    const [delRow, delCol] = delta;

    if (arr[curRow + delRow] && arr[curRow + delRow][curCol + delCol] === 1)
        return 1;
    else if (!arr[curRow + delRow] || arr[curRow + delRow] && arr[curRow + delRow][curCol + delCol] === undefined) {
        return -1;
    } else
        return 0;
}

console.log(spiralize(6));