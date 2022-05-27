function anagrams(str1, str2) {
  // Your code here
  if (str1.length !== str2.length) return false;
  
  let set = {};


  str1.split('').forEach( letter => {
    if(!set[letter]) {
      set[letter] = 1;
    } else {
      set[letter]++;
    };
  });

  for (let i = 0; i < str2.length; i++) {
    let letter = str2[i];
    if (!set[letter]) return false;
    set[letter]--;
    if (set[letter] < 0) return false;
  };

  return true;
}


function commonElements(arr1, arr2) {
  // Your code here
  let set = {};
  let common = [];

  arr1.forEach( num => {
    set[num] = true;
  });

  arr2.forEach( num => {
    if (set[num]) common.push(num);
  })

  return common;
}


function duplicate(arr) {
  // Your code here
  let set = {};

  for (let i = 0; i < arr.length; i++) {
    if (set[arr[i]]) {
      return arr[i];
    } else {
      set[arr[i]] = true;
    };
  };

}


function twoSum(nums, target) {
  // Your code here
  let set = {};

  for (let i = 0; i < nums.length; i++) {
    if (set[target - nums[i]]) {
      return true;
    } else {
      set[nums[i]] = true;
      set[target - nums[i]] = true;
    };
  };

  return false;
}


function wordPattern(pattern, strings) {
  // Your code here
  let set = {};
  let patternArr = pattern.split('');

  for (let i = 0; i < patternArr.length; i++) {
    if (set[strings[i]] && (set[strings[i]] !== patternArr[i] || set[patternArr[i]] !== strings[i])) {
      return false;
    } else {
      set[strings[i]] = patternArr[i];
      set[patternArr[i]] = strings[i];
    }
  }

  return true;
}


module.exports = [anagrams, commonElements, duplicate, twoSum, wordPattern];
