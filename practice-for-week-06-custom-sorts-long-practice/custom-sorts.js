function ageSort(users) {
  // Your code here

  users.sort( (a, b) => {
    return a.age - b.age;
  });

  return users;
  // if (users.length <= 1) return users;

  // let mid = Math.floor(users.length / 2);
  // let left = users.slice(0, mid);
  // let right = users.slice(mid);

  // let sortLeft = ageSort(left);
  // let sortRight = ageSort(right);

  // function merge(left,right) {
  //   let pointer1 = 0;
  //   let pointer2 = 0;

  //   let newArr = [];

  //   while (left[pointer1] || right[pointer2]) {
  //     let user1 = left[pointer1];
  //     let user2 = right[pointer2];

  //     if (!user1) {
  //       newArr.push(user2);
  //       pointer2++;
  //     } else if (!user2) {
  //       newArr.push(user1);
  //       pointer1++;
  //     } else if (user1.age < user2.age) {
  //       newArr.push(user1);
  //       pointer1++;
  //     } else {
  //       newArr.push(user2);
  //       pointer2++
  //     }
  //   }
  //   return newArr;
  // }

  // return merge(sortLeft, sortRight);
}

function oddEvenSort(arr) {
  // Your code here
  arr.sort( (a, b) => {
    if (a % 2 === 1 && b % 2 === 0) return -1;
    if (a % 2 === 0 && b % 2 === 1) return 1;
    return a - b;
  });

  return arr;
}

function validAnagrams(s, t) {
  // Your code here
  let sorted1 = s.split('').sort();
  let sorted2 = t.split('').sort();

  for (let i = 0; i < s.length; i++) {
    if (sorted1[i] !== sorted2[i]) return false; 
  };

  return true;
}

function reverseBaseSort(arr) {
  // Your code here

  arr.sort( (a, b) => {
    if (a.toString().length > b.toString().length) return -1;
    if (a.toString().length < b.toString().length) return 1;
    return a - b;
  });

  return arr;
}

function frequencySort(arr) {
  // Your code here
  let hash = {};
  let order = 0;
  
  arr.forEach( num => {
    if(!hash[num]) {
      hash[num] = 1;
      hash[`${num}I`] = order;
      order++;
    } else {
      hash[num]++;
    };
  });

  arr.sort( (a, b) => {
    if (hash[a] < hash[b]) return -1;
    if (hash[a] > hash[b]) return 1;
    if (hash[a] === hash[b] && hash[`${a}I`] > hash[`${b}I`]) return -1;
    if (hash[a] === hash[b] && hash[`${a}I`] < hash[`${b}I`]) return 1;
  });

  return arr;
}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
