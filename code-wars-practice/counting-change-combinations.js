var countChange = function(money, coins) {    
    const stack = [];
    const lengths = {};

    coins.forEach(coin => {
        if (money - coin > 0) {
            stack.push([coin]);
        } else if (money - coin === 0) {
            lengths[1] = 1;
        }
    });
    
    while (stack.length > 0) {
      
      let node = stack.pop();
      
      const nodeSum = node.reduce((sum, next) => sum + next);
      
      coins.forEach(coin => {
        let nodeClone = [...node];
        if (money - nodeSum - coin > 0) {
          nodeClone.push(coin);
          stack.push(nodeClone);
        } else if (money - nodeSum - coin === 0) {
          nodeClone.push(coin)
          lengths[nodeClone.length] ? lengths[nodeClone.length]++ : lengths[nodeClone.length] = 1;
        }
      })
      
    }
    
    return Object.keys(lengths).length;
  }

  class Node {
    constructor(arr) {
        this.arr = arr;
        this.sum = arr.reduce((accu, next) => accu + next);
        this.length = arr.length;
    }

    push(val) {
        this.arr.push(val);
        this.sum += val;
        this.length++;
    }
  }

  const node = new Node([1,2,3]);
  console.log(node.length, node.arr, node.sum)
  node.push(3)
  console.log(node.length, node.arr, node.sum)


  console.log(countChange(4, [1,2]));       // 3
  console.log(countChange(10, [5,2,3]));    // 4
  console.log(countChange(11, [5,7]));      // 0
//   console.log(countChange(300, [ 5, 10, 20, 50, 100, 200, 500 ])); //