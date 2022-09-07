// You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

// Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

// You may assume that you have an infinite number of each kind of coin.

 

// Example 1:

// Input: coins = [1,2,5], amount = 11
// Output: 3
// Explanation: 11 = 5 + 5 + 1
// Example 2:

// Input: coins = [2], amount = 3
// Output: -1
// Example 3:

// Input: coins = [1], amount = 0
// Output: 0


var coinChange = function(coins, money) {
    if (money <= 0) return 0;

    let queue = []
    let count = 0;
    coins.forEach(coin => {
        if (money > coin) queue[0] = [coin]
    })

    coins = coins.sort((a, b) => b - a);
    
    while (queue.length > 0) {
        let node = queue[0]

        const nodeSum = node.reduce( (sum, next) => sum + next);
        queue = queue.slice(1);

        for (let i = 0; i < coins.length; i++) {
            const nodeClone = [...node];
            
            if (money - nodeSum - coins[i] > 0) {
                nodeClone.push(coins[i]);
                queue.push(nodeClone);
            } if (money - nodeSum - coins[i] === 0) {
                count = nodeClone.length + 1;
                queue = [];
                return count;
            }
        }
    }
      
    return count;
}

console.log(coinChange([1,2], 4));
console.log(coinChange([186,419,83,408], 6249));
