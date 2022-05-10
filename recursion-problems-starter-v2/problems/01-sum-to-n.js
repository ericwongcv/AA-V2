/***********************************************************************
Write a recursive function called `sumToN` that takes in a number and returns
the sum of all the numbers from 0 to that number. Return null for any input
number below 0.

Examples:

sumToN(5) // returns 15
sumToN(1)  // returns 1
sumToN(9)  // returns 45
sumToN(-8)  // returns null
***********************************************************************/

// your code here

let sumToN = num => {
  if (num === 0) {
    return 0;
  } else if (num < 0) {
    return null;
  }

  sum = num + sumToN(num - 1);
  return sum;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sumToN;
} catch (e) {
  module.exports = null;
}
