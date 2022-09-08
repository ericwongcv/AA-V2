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
    // if (money <= 0) return 0;
    // coins.sort( (a, b) => b - a);
    // console.log(coins)
    // const change = [];
    // index = 0;

    // while (money > 0) {
    //     if (money - coins[index] > 0) {
    //         change.push(coins[index]);
    //         money -= coins[index];
    //     } else if (money - coins[index] === 0) {
    //         return change.length + 1;
    //     } else {
    //         index++;
    //     }

    //     if (index >= money.length) return 0;
    // }

    // return 0;

    const dp = Array(money + 1).fill(money + 1);
    dp[0] = 0;

    for (let i = 1; i <= money; i++) {
        coins.forEach(coin => {
            if (i - coin >= 0) dp[i] = Math.min(dp[i], dp[i - coin] + 1);
        })
    }

    return dp[money] === money + 1 ? -1 : dp[money];
}


console.log(coinChange([1,2,5], 11));                  // 3                    
console.log(coinChange([1,2], 4));                     // 2
console.log(coinChange([186,419,83,408], 6249));       // 20                 
