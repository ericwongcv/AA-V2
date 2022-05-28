// Insertion Sort out-of-place

const { returns } = require("chai-spies");

// Do not modify the original array
function insertionSort(arr) {
  /*
  Pseudocode:

  Copy the original array
  Create an array to store the sorted values
  While the array is not empty:
  - make sure you have a console.log(sorted.join(',')) as your first line in the while loop
  - Pop a value from the array
  - Create a new spot at the end of the array with null to help with comparisons
  - Walk through the sorted array in reverse order
  - Check if the value to the left is smaller than the new value
  - If so, you've reached the insertion point so exit the loop
  - If not shift the value to the right by 1 and continue
  - Insert the unsorted value at the break point
  Return the sorted array
  */

  // Your code here

  let newArr = arr.slice();
  let sorted = [];

  while (newArr.length > 0) {
    console.log(sorted.join(','));

    let num = newArr.pop();
    let placed = false;

    if (sorted.length === 0) {
      sorted.push(num);

    } else {
      sorted.push(null);      

      for (let i = sorted.length - 1; i > 0; i--) {
        if (sorted[i - 1] > num) {
          sorted[i] = sorted[i - 1];
        } else if (sorted[i - 1] <= num) {
          sorted[i] = num;
          placed = true;
          break;
        } 
      }
      if (!placed) sorted[0] = num;
    }
  }
  return sorted;
}

let arr = [2,4,6,8,1,3,5,7,9];
console.log(insertionSort(arr));

// In-place Insertion Sort
// Mutates the original array
function insertionSortInPlace(arr) {
  /*
  Pseudocode:

  Set a pointer dividing the array into sorted and unsorted halves
  Repeat while the unsorted half is not empty:
  - make sure you have a console.log(sorted.join(',')) as your first line in the while loop
  - Grab the first value from the unsorted half
  - For each value starting from the divider,
  - Check if the value to the left is smaller than the unsorted value
  - If so, you've reached the insertion point so exit the loop
  - If not shift the value to the right by 1 and continue
  - Insert the unsorted value at the break point
  - Increment the dividing pointer and repeat
  Return the mutated array
  */

  // Your code here
  let i = 1;

  while (i < arr.length) {
    console.log(arr.join(','));

    let temp = arr[i];
    let placed = false;

    for (let j = i; j >= 0; j--) {
      if (arr[j - 1] > temp) {
        arr[j] = arr[j - 1];
      } else {
        arr[j] = temp;
        placed = true;
        break;
      }
    }
    if (!placed) arr[0] = temp;
    i++;
  }

  return arr;
}

module.exports = [insertionSort, insertionSortInPlace];
