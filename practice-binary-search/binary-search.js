function linearSearch (arr, target) {

  // Can you solve this in one line?
  return arr.indexOf(target);
};

function binarySearch(arr, target) {

  // Set integers pointing to the high and low range of possible indices
  let lo = 0;
  let hi = arr.length - 1;
  // While high and low indices do not overlap...
  while (lo <= hi) {
    // Find the midpoint between high and low indices
    mid = Math.floor(((hi + lo) / 2));
    // Compare the target value to the midpoint value
    if (arr[mid] === target) return mid;
    // If the target equals the midpoint...
      // Return the midpoint index
    if (arr[mid] < target) lo = mid + 1;
    // If the target is higher than the midpoint...
      // Move the low pointer to midpoint + 1
    if (arr[mid] > target) hi = mid - 1;
    // If the target is less than the midpoint...
      // Move the high pointer to midpoint - 1
  }
  // Return -1 if the loop exits with overlapping pointers
  return -1;
}


module.exports = [linearSearch, binarySearch]

let arr = [];

for (let i = 0 ; i < 1000000 ; i++) {
  arr.push(i);
}
