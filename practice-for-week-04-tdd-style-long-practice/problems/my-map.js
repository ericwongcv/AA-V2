function myMap(inputArray, callback) {
  // Your code here

  arr = [];

  inputArray.forEach( el => {
    arr.push(callback(el));
  })

  return arr;

  // return inputArray.map( el => el * 2);

  // inputArray.forEach( (el,i) => {
  //   inputArray[el] = callback(el);
  // })

  // return inputArray;
}

module.exports = myMap;


let array = [1, 2, 3];

let callback = el => { return el * 2 };

console.log(myMap(array, callback));
