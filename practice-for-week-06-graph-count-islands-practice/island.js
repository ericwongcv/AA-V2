function getNeighbors(row, col, matrix) {
  
  // Check top
  // Check top right
  // Check right
  // Check bottom right
  // Check bottom
  // Check bottom left
  // Check left
  // Check top left
  // Return neighbors
  
  // Your code here
  let neighbors = [];

  if (row > 0) neighbors.push([row - 1, col]);
  if (row > 0 && col < matrix[0].length - 1) neighbors.push([row - 1, col + 1]);
  if (col < matrix[0].length - 1) neighbors.push([row, col + 1]);
  if (row < matrix.length - 1 && col < matrix[0].length - 1) neighbors.push([row + 1, col + 1]);
  if (row < matrix.length - 1) neighbors.push([row + 1, col]);
  if (row < matrix.length - 1 && col > 0) neighbors.push([row + 1, col - 1]);
  if (col > 0) neighbors.push([row, col - 1]);
  if (row > 0 && col > 0) neighbors.push([row - 1, col - 1]);

  return neighbors.filter( coord => matrix[coord[0]][coord[1]] === 1 );
}

function countIslands(matrix) {
  
  // Create a visited set to store visited nodes
  // Initialize count to 0
  // Iterate through all indices in matrix
    // If an index contains a 1 and has not been visited, 
    // increment island count and start traversing neighbors
      // DO THE THING (increment island count by 1)
      // Initialize a stack with current index
      // Add stringified version of current index to the visited set
      // While stack contains elements
        // Pop element from stack
        // Get valid neighbors of current element
        // Iterate over neigbors
          // If neighbor has not been visited
            // Add neighbor to stack
            // Mark neighbor as visited
  // Return island count
  
  // Your code here

  let visited = {};
  let count = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] && !visited[`${[i, j]}`]) {
        count++;
        
        let stack = [[i, j]];
        visited[`${[i, j]}`] = true;
        
        while (stack.length > 0) {
          let node = stack.pop();
          let neighbors = getNeighbors(node[0], node[1], matrix);

          neighbors.forEach( node => {
            if (!visited[`${node}`]) {
              visited[`${node}`] = true;   
              stack.push(node);           
            };
          });
        };
      };
    };
  };

  return count;
}

// Uncomment the lines below for local testing
// const matrix = [
//                 [1,1,1,0,0],
//                 [0,1,1,0,1],
//                 [0,1,1,0,1]
//               ]

// console.log(getNeighbors(1, 1, matrix)); // [[0, 0], [0, 1], [0, 2], [1, 2], [2, 1], [2, 2]]
// console.log(getNeighbors(2,4, matrix)) // [[1,4]]

// const matrix2 = [
//                     [1,1,1,0,1],
//                     [0,0,0,0,1],
//                     [1,0,0,1,0],
//                 ]

// console.log(countIslands(matrix)) // 2
// console.log(countIslands(matrix2)); // 3

module.exports = [countIslands, getNeighbors];
