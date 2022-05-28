function quicksort(arr) {

  // Check if the input is length 1 or less
    // If so, it's already sorted: return
  if (arr.length <= 1) return arr;

  // Pick the first value as the pivot
  let index = Math.floor(Math.random() * arr.length);
  let pivot = arr[index];
  let left = [];
  let right = [];

  // Orient the pivot so that...
      // every number smaller than the pivot is to the left
      // every number larger (or equal) than the pivot is to the right
  arr.forEach( num => {
    num < pivot ? left.push(num) : right.push(num);
  });

  // Recursively sort the left
  // Recursively sort the right
  let sortLeft = quicksort(left);
  let sortRight = quicksort(right);

  // Return the left, pivot and right in sorted order
  return sortLeft.concat(sortRight);
}


module.exports = [quicksort];
