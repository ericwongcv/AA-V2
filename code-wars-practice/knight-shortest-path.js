// Given two different positions on a chess board, find the least number of moves it would take a knight to get from one to the other. 
// The positions will be passed as two arguments in algebraic notation. For example, knight("a3", "b5") should return 1.

// The knight is not allowed to move off the board. The board is 8x8.

// For information on knight moves, see https://en.wikipedia.org/wiki/Knight_%28chess%29

// For information on algebraic notation, see https://en.wikipedia.org/wiki/Algebraic_notation_%28chess%29


function knight(start, finish) {
    // Ha-ha, it's not "knight", it's a horse :D

    const horizontal = 'abcdefgh';
    const x = horizontal.indexOf(start[0]);
    const y = parseInt(start[1]) - 1;
    const xFin = horizontal.indexOf(finish[0]);
    const yFin = parseInt(finish[1]) - 1;

    const visited = {};
    visited[[x, y]] = true;
    let queue = [[[x, y]]]

    while (queue.length > 0) {
        const node = queue[0];
        const nodeX = node[node.length - 1][0];
        const nodeY = node[node.length - 1][1];
        queue = queue.slice(1);
        
        const neighbors = getNeighbors(nodeX, nodeY);

        for (let i = 0; i < neighbors.length; i++) {
            const nodeClone = [...node];
            
            if (neighbors[i][0] === xFin && neighbors[i][1] === yFin) {
                return nodeClone.length;
            }

            if (!visited[neighbors[i]]) {
                visited[neighbors[i]] = true;
                nodeClone.push(neighbors[i]);
                queue.push(nodeClone);
            }
        }
    };
    
    return 0;
}

function getNeighbors(x, y) {
    const potentialMoves = [];
    const ones = [1, -1];
    const twos = [2, -2];

    ones.forEach(deltaX => {
        twos.forEach(deltaY => {
            const newX = x + deltaX;
            const newY = y + deltaY;
            if (newX < 8 && newY < 8 && newX >= 0 && newY >= 0) 
                potentialMoves.push([newX, newY])
        })
    })
    
    twos.forEach(deltaX => {
        ones.forEach(deltaY => {
            const newX = x + deltaX;
            const newY = y + deltaY;
            if (newX < 8 && newY < 8 && newX >= 0 && newY >= 0) 
                potentialMoves.push([newX, newY])
        })
    })

    return potentialMoves;
}

// console.log(getNeighbors(5,5))

console.log(knight('a1', 'c1'));    //  2
console.log(knight('a1', 'f1'));    //  3
console.log(knight('a1', 'f3'));    //  3
console.log(knight('a1', 'f4'));    //  4
console.log(knight('a1', 'f7'));    //  5
