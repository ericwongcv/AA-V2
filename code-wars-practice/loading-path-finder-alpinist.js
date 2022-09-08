function pathFinder(area) {
    area = area.split('\n');
    const stack = [[[0, 0]]];
    const visited = {};
    visited[[0, 0]] = true;

    while (stack.length > 0) {
        const node = stack.pop();
        const last = node[node.length - 1];

        neighbors(last, area.length).forEach(neighbor => {
            if (!visited[neighbor]) {
                visited[neighbor] = true;
            }
        })

    }
    return visited;
}

function neighbors(currentpos, n) { //  [0, 0]
    const ones = [1, -1];
    const neighbors = [];

    ones.forEach(delta => {
        const newX = currentpos[0] + delta;
        const newY = currentpos[1] + delta;

        if ( newX >= 0 && newX < n ) {
            neighbors.push([newX, currentpos[1]]);
        }
        if (newY >= 0 && newY < n) {
            neighbors.push([currentpos[0], newY]);
        }
    });

    return neighbors;
}

// console.log(neighbors([1,3], 5))

console.log(pathFinder(
`000
000
000`
))
