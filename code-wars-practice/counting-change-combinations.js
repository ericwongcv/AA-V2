// var countChange = function (money, coins) {

//   let ways = [];

//   for (let i = 0; i <= money; i++) {
//     ways[i] = 0;
//   }
//   ways[0] = 1;

//   coins.forEach(coin => {
//     for (let i = 0; i <= money; i++) {
//       if (i >= coin) {
//         ways[i] = ways[i - coin] + ways[i];
//       }
//     }
//   })
  
//   return ways[money] ? ways[money] : 0;
// }

var countChange = function(money, coins) {
  if(money < 0 || coins.length === 0)
    return 0
  else if(money === 0)
    return 1
  else
    return countChange(money - coins[0], coins) + countChange(money, coins.slice(1))
}

console.log(countChange(4, [1, 2]));       // 3
console.log(countChange(10, [5, 2, 3]));    // 4
console.log(countChange(11, [5, 7]));      // 0
console.log(countChange(300, [5, 10, 20, 50, 100, 200, 500])); //
