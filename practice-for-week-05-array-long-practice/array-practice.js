const findMinimum = arr => {

  // Your code here

  let minimum = arr[0];

  arr.forEach( num => {
    if (num < minimum) { minimum = num };
  });

  return minimum;
};

// Time Complexity: O(n)
// Space Complexity: O(1)

const runningSum = arr => {

  // Your code here

  let sum = 0;
  let runningArr = [];

  arr.forEach( num => {
    runningArr.push(num + sum);
    sum += num;
  });

  return runningArr;
};

// Time Complexity: O(n)
// Space Complexity: O(n)

const evenNumOfChars = arr => {

  // Your code here

  let count = 0;

  arr.forEach( str => {
    if (str.length % 2 === 0) { count += 1 };
  });

  return count;
};

// Time Complexity: O(n)
// Space Complexity: O(1)

const smallerThanCurr = arr => {

  // Your code here
  let newArr = [];

  arr.forEach( num1 => {
    let count = 0;

    arr.forEach( num2 => {
      if (num1 > num2) { count += 1 };
    })

    newArr.push(count);  
  });

  return newArr;
};

// Time Complexity: O(n)
// Space Complexity: O(1)

const twoSum = (arr, target) => {

  // Your code here
  let hash = {};
  let two = false;

  arr.forEach( num => {
    hash[target - num] = true;

    if (hash[num] === true) {
      return two = true;
    }
  });

  return two;
};

// Time Complexity: O(n)
// Space Complexity: O(n)

const secondLargest = arr => {

  // Your code here

  let largest;
  let secondLargest;

  arr.forEach( num => {
    if (!largest || num > largest) {
      secondLargest = largest;
      largest = num;
    } else if (!secondLargest || num <= largest && num > secondLargest) {
      secondLargest = num;
    }
  });
  
  return secondLargest;
};

// Time Complexity: O(n)
// Space Complexity: O(1)

const shuffle = (arr) => {

  // Your code here

  let dupArr = arr.slice(0);
  let count = arr.length;

  let newArr = Array(arr.length);

  while (count > 0) {
    let index = Math.floor((Math.random() * arr.length));
    if (!newArr[index]) {
      newArr[index] = dupArr.pop();
      count--;
    }
  }

  return newArr;
};

// Time Complexity: O(n)
// Space Complexity: O(n)


module.exports = [findMinimum, runningSum, evenNumOfChars, smallerThanCurr, twoSum, secondLargest, shuffle];
