
function bubbleSort(arr) {
  let sorted = true;

    // Iterate through the array
    arr.forEach( (num, i) => {
      // If the current value is greater than its neighbor to the right
        // Swap those values
      if (num > arr[i + 1]) {
          [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
          sorted = false;
        // Do not move this console.log
        console.log(arr.join(","));
      }
    })
    // If you get to the end of the array and no swaps have occurred, return
    // Otherwise, repeat from the beginning
    if (!sorted) bubbleSort(arr);
    return arr;
}

module.exports = bubbleSort;
