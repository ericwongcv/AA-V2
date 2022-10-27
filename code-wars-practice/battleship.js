// There must be single battleship (size of 4 cells), 2 cruisers (size 3), 3 destroyers (size 2) and 4 submarines (size 1). 
// Any additional ships are not allowed, as well as missing ships.
// Each ship must be a straight line, except for submarines, which are just single cell.

const validateBattlefield = field => {
    const ships = {
        4: 1,
        3: 2,
        2: 3,
        1: 4
    }

    const visited = {};

    let shipsRemain = 10;

    for (let row = 0; row < field.length; row++) {
        for (let col = 0; col < field[0].length; col++) {
            const pos = [row, col];
            if (!visited[pos]) {
                const val = field[row][col];
                if (val === 1) {
                    const surround = checkSurround(pos, field);
                    switch (surround) {
                        case true:
                            shipsRemain -= 1;
                            ships[1] -= 1;
                            if (ships[1] < 0)
                                return false;
                            break;
                        case false:
                            return false;
                        default:
                            const shipLength = checkShipLength(pos, surround, field, visited);
                            if (ships[shipLength] && ships[shipLength] - 1 >= 0) {
                                shipsRemain -= 1;
                                ships[shipLength] -= 1;
                            } else
                                return false;
                            break;
                    }
                }
            }
        }
    }

    if (shipsRemain === 0)
        return true;
    else
        return false;
}

// return false for 2 or more ships
// return true for no surrounding ship unit (ship is single cell)
// return dir [x, y] for 1 unit found in surrounding
const checkSurround = (pos, field) => {
    const [row, col] = pos
    const deltas = [
        [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1]
    ]

    let shipDir = undefined;

    for (delta of deltas) {
        const [delRow, delCol] = delta;
        const newRow = row + delRow;
        const newCol = col + delCol;

        if (field[newRow] && field[newRow][newCol] === 1) {
            if (shipDir === undefined)
                shipDir = delta;
            else
                return false;
        }
    }

    return shipDir === undefined ? true : shipDir;
}

// return length of the ship
const checkShipLength = (pos, dir, field, visited) => {
    let length = 0;
    let [row, col] = pos;
    const [delRow, delCol] = dir;

    while (field[row] && field[row][col] === 1) {
        pos = [row + delRow, col + delCol];
        visited[pos] = true;
        length += 1;
        row += delRow;
        col += delCol;
    }

    return length;
}

const field = [
    [1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
    [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
    [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]

console.log(validateBattlefield(field), true);
// console.log(checkSurround([4, 2], field));