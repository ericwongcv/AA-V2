// Merge Sort out-of-place
// Do not modify the original array
function mergeSort(arr) {

  // Check if the input is length 1 or less
    // If so, it's already sorted: return
  if (arr.length <= 1) return arr;

  // Divide the array in half
  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  // Recursively sort the left half
  let sortLeft = mergeSort(left);
  // Recursively sort the right half
  let sortRight = mergeSort(right);
  // Merge the halves together and return
  return merge(sortLeft, sortRight);
}


// Takes in two sorted arrays and returns them merged into one
function merge(arrA, arrB) {

  // Create an empty return array
  let newArr = [];

  // Point to the first value of each array
  let pointer1 = 0;
  let pointer2 = 0;

  // While there are still values in each array...
  while (pointer1 < arrA.length || pointer2 < arrB.length) {
    // Compare the first values of each array
    // Add the smaller value to the return array
    // Move the pointer to the next value in that array

    let leftTerm = arrA[pointer1];
    let rightTerm = arrB[pointer2];

    if (!leftTerm) {
      newArr.push(rightTerm);
      pointer2++;
    } else if ((!rightTerm)) {
      newArr.push(leftTerm);
      pointer1++;
    } else if (leftTerm < rightTerm) {
      newArr.push(leftTerm);
      pointer1++;
    } else {
      newArr.push(rightTerm);
      pointer2++;
    }
  }

  // Return the return array
  return newArr;
}

module.exports = [merge, mergeSort];
