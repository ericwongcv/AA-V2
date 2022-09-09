function pathFinder(area) {
    area = area.split('\n');
    const deltas = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    const visited = {};
    const vertex = {};
    vertex[[0, 0]] = 0;
    visited[[0, 0]] = true;
    
    let queue = [[0, 0]];

    while (queue.length > 0) {
        const node = queue[0];
        const [i, j] = [node[0], node[1]];
        queue = queue.slice(1);

        deltas.forEach(delta => {
            const [newI, newJ] = [delta[0] + i, delta[1] + j];

            if (newI >= 0 && newI < area.length && newJ >= 0 && newJ < area.length && visited[[newI, newJ]] === undefined) {
                queue.push([newI, newJ]);

                const deltAlt = Math.abs(area[i][j] - area[newI][newJ]);

                if (vertex[[newI, newJ]] === undefined) {
                    vertex[[newI, newJ]] = vertex[[i, j]] + deltAlt;
                } else {
                    vertex[[newI, newJ]] = Math.min(vertex[[newI, newJ]], vertex[[i, j]] + deltAlt)
                }
            }
        })

        let smallest;
        queue.forEach(key => {
            if (smallest === undefined || vertex[key] < smallest) smallest = key
        });

        visited[smallest] = true;
    }
    
    return vertex[[area.length - 1, area.length - 1]];
}

// console.log(pathFinder(
//     `000
// 000
// 000`
// ));

// console.log(pathFinder(
//     `010
// 101
// 010`
// ));

// console.log(pathFinder(
//     `700000
// 077770
// 077770
// 077770
// 077770
// 000007`
// ))

// console.log(pathFinder(
//     `777000
// 007000
// 007000
// 007000
// 007000
// 007777`
// ))

console.log(pathFinder(     // 18
    `6935268
3033993
3810642
4758543
3550634
2092782
1361172`
))
