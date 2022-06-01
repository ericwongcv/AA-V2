const adjList = {
    1: [2, 5],
    2: [1, 3, 5],
    3: [2, 4],
    4: [3, 5],
    5: [1, 2, 4],
    6: []
}

function breadthFirstSearch(start, end) {
  // your code here
  let queue = [start];
  let visited = {};
  visited[start] = true;
  
  while (queue.length > 0) {
      let currentNode = queue.shift();
      if (currentNode === end) return true;
      
      adjList[currentNode].forEach( el => {
        if (!visited[el]) {
            visited[el] = true;
            queue.push(el);
        };
      });
  };
  return false;
}

console.log("First Test:");
console.log(breadthFirstSearch(1, 3)); // -> true
console.log("Second Test:");
console.log(breadthFirstSearch(4, 1)); // -> true
console.log("Third Test:");
console.log(breadthFirstSearch(6, 1)); // -> false
