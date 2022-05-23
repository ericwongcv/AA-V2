const [addNums, addManyNums] = require("./phase-1");

function addNums10Timing(increment) {
  // Copy your `addNums10` code here
  // Then, add timing code
  let startTime = Date.now();
  console.time();

  let arr = [];

  for (let i = 1; i <= 10; i++) {
    arr.push(addNums(i * increment));
    console.timeLog();
  };

  // return arr;

  // Your code here

  console.timeEnd();
  let endTime = Date.now();
  console.log(`Runtime: ${endTime - startTime}ms`);

  return arr;
}


function addManyNums10Timing(increment) {
  // Copy your `addManyNums10` code here
  // Then, add timing code

  let startTime = Date.now();
  console.time();

  let arr = [];

  for (let i = 1; i <= 10; i++) {
    arr.push(addManyNums(i * increment));
    console.timeLog();
  };

  // return arr;

  // Your code here
  console.timeEnd();
  let endTime = Date.now();
  console.log(`Runtime: ${endTime - startTime} ms`);

  return arr;
}


n = 1000000
console.log(`addNums(${n}): `);
addNums10Timing(1000000);

console.log("\n***********\n");

n = 1000
console.log(`addManyNums(${n}): `);
addManyNums10Timing(5000);
