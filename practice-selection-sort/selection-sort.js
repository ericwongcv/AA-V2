

function selectionSort(arr) {

  // Copy the original array
  let newArr = arr.slice();

  // Create an array to store the sorted values
  let sorted = [];

  // While the array is not empty...
  while (newArr.length > 0) {

    // Do not move this console.log
    console.log(sorted.join(","));

    // Find the index of the minimum value in the unsorted half
    let min = newArr[0];
    let index = 0;

    if (newArr.length === 1) {
      min = newArr.pop();
    } else {
      newArr.forEach( (num, i) => {
      // Save and remove the value at the min index
        if (num < min) {
          min = num;
          index = i;
        }
      })
      newArr = newArr.filter( (_, i) => i !== index );
    }      
    // Add the min value to the end of the sorted array
    sorted.push(min);
  }
  return sorted;
}
let arr = [2,4,6,8,1,3,5,7,9];
console.log(selectionSort(arr));


function selectionSortInPlace(arr) {

  // Set a pointer at zero diving the array into sorted and unsorted halves
  let pointer = 0;

  // Repeat while the unsorted half is not empty:
  while (pointer < arr.length) {
    // Do not move this console.log
    console.log(arr.join(","));

    // Find the index of the minimum value in the unsorted half
    let min = arr[pointer];
    let index = pointer;

    // Save the min value
    for (let i = pointer; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
        index = i;
      }
    }

    // Shift every unsorted value to the left of the min value to the right by 1
    for (let i = index; i > pointer; i--) {
      arr[i] = arr[i - 1];
    }

    // Put the min value at the divider
    arr[pointer] = min;
    // Increment the divider and repeat
    pointer++;
  }
  return arr;
}


module.exports = [selectionSort, selectionSortInPlace];
