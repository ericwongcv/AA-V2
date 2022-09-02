snail = function(array) {
    // enjoy
    if (array.length === 1) return array[0];
    
    const sorted = [];
    const visited = {};
  //   let n = array.length - 1;
    let row = 0;
    let col = 0;
    let dir = 'right';
    
    while (sorted.length < array.length**2) {
      sorted.push(array[row][col]);
      visited[`${row}, ${col}`] = true;
      console.log(row, col)
      if (dir === 'right') {
        array[row][col + 1] && !visited[`${row}, ${col + 1}`] ? col++ : [dir, row] = ['down', row + 1];
      } else if (dir === 'down') {
        array[row + 1] && array[row + 1][col] && !visited[`${row + 1}, ${col}`] ? row++ : [dir, col] = ['left', col - 1];
      } else if (dir === 'left') {
        array[row][col - 1] && !visited[`${row}, ${col - 1}`] ? col-- : [dir, row] = ['up', row - 1];
      } else if (dir === 'up') {
        array[row - 1] && array[row - 1][col] && !visited[`${row - 1}, ${col}`] ? row-- : [dir, col] = ['right', col + 1];
      }
    }
    
    return sorted
  }

  console.log(snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))
