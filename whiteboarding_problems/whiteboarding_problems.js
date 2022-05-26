function logBetween(lowNum, highNum) {
    let arr = [];

    for (let i = lowNum; i <= highNum; i++) {
        arr.push(i);
    };

    return arr;
    // Time and Space Complexity is O(n) since there are n terms between lowNum and highNum.
}

logBetween(-1, 2);  // => [-1, 0, 1, 2]
logBetween(14, 6);  // => []
logBetween(4, 6);  // => [4, 5, 6]


function logBetweenStepper(min, max, step) {
    let arr = [];

    for (let i = min; i <= max; i += step) {
        arr.push(i);
    };

    return arr;
    // Time and Space Complexity is O(n) since there are n terms between lowNum and highNum.
}

logBetweenStepper(5, 9, 1) // => [5, 6, 7, 8, 9]
logBetweenStepper(-10, 15, 5) // => [-10, -5, 0, 5, 10, 15]


function printReverse(min, max) {
    let arr = [];

    for (let i = max - 1; i > min; i--) {
        arr.push(i);
    };

    return arr;
    // Time and space complexity of O(n) since there are n terms between min and max.
}

printReverse(13, 18) // => [17, 16, 15, 14]
printReverse(90, 94) // => [93, 92, 91]


function fizzBuzz(max) {
    let multipleThree = 3;
    let multipleFive = 5;
    let hash = {};

    while (multipleThree < max || multipleFive < max) {
        if (multipleThree === multipleFive) {
            multipleThree += 3;
            multipleFive += 5;
        } else if (multipleThree < multipleFive) {
            hash[multipleThree] = true;
            multipleThree += 3;
        } else if (multipleFive < multipleThree) {
            hash[multipleFive] = true;
            multipleFive += 5;
        };
    };

    return Object.keys(hash);
    // Time and space complexity is O(n) but is reduced based on implementation traversing multiples of 3 and 5 instead of every number
}

fizzBuzz(20); // => [3, 5, 6, 9, 10, 12, 18]


function isPrime(number) {
    if (number < 2) return false;
    if (number === 2) return true;

    for (let i = 2; i < number; i++) {
        if (number % i === 0) return false;
    };

    return true;
    // Time complexity is O(n) since i will go from 2 to n. And space complexity is O(1) since variables are number and i only.
}

isPrime(2);  // => true
isPrime(10);  // => false
isPrime(11);  // => true
isPrime(9);  // => false
isPrime(2017);  // => true

function maxValue(array) {
    let max = array[0];

    array.forEach( num => {
        if (num > max) max = num;
    });
    
    return max ? max : null;

    // Time complexity O(n) since it will traverse through entire array. Space complexity is O(1).
}

maxValue([12, 6, 43, 2]);  // => 43
maxValue([]);  // => null
maxValue([-4, -10, 0.43]);  // => 0.43


function myIndexOf(array, target) {
    let index;

    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
        index = i;
        break;
        };
    };
    
    return index ? index : -1;
    // Time complexity is O(n), but shortened if breaking out of for loop. Space complexity is O(1).
}

myIndexOf([1,2,3,4],4); // => 3
myIndexOf([5,6,7,8],2); // => -1


function factorArray(array, number) {
    let arr = [];
    
    array.forEach( num => {
        if (number % num === 0) arr.push(num);
    });

    return arr;
    // Time complexity is O(n) depending on size of array. Space complexity is also O(n).
}

factorArray([2,3,4,5,6],20) // => [2,4,5]
factorArray([2,3,4,5,6],35) // => [5]
factorArray([10,15,20,25],5) // => []


function oddRange(end) {
    let arr = [];
    for (let i = 1; i <= end; i += 2) {
        arr.push(i);
    }

    return arr;
    // Time complexity is O(n) depending on end. Space complexity is O(1).
}

oddRange(13);  // => [ 1, 3, 5, 7, 9, 11, 13 ]
oddRange(6);  // => [ 1, 3, 5 ]


function reverseHyphenString(string) {
    return string.split('-').reverse().join('-');
    // Time complexity is O(n). Space complexity is O(1).
}

reverseHyphenString("Go-to-the-store") // => "store-the-to-Go"
reverseHyphenString("Jump,-jump-for-joy") // => "joy-for-jump-Jump,"


function intersect(arr1, arr2) {
    let hash = {};
    let arr = [];

    arr1.forEach( el => {
        hash[el] = true;
    });

    arr2.forEach( el => {
        if (hash[el] === true) arr.push(el);
    });

    return arr;
    // Time complexity is O(n) two times since traverse of 2 array is required. Space complexity is also O(n) to store an array and hash.
}

intersect(['a', 'b', 'c', 'd'], ['b', 'd', 'e']) // => [ 'b', 'd' ]
intersect(['a', 'b', 'c'], ['x', 'y', 'z']) // => []


function mirrorArray(array) {
    return array.concat(array.slice().reverse());
    // Time complexity is O(n) since it requires reversing the array. Space complexity is O(n).
}

mirrorArray([1,2,3]);
  // => [ 1, 2, 3, 3, 2, 1 ]
mirrorArray(['a', 'b', 'c', 'd']);
  // => [ 'a', 'b', 'c', 'd', 'd', 'c', 'b', 'a' ]


  function abbreviate(sentence) {
      const vowels = {
          'a': true,
          'e': true,
          'i': true,
          'o': true,
          'u': true
      }

      let words = sentence.split(" ");
      words.forEach( (word, i) => {
          if (word.length > 4) {
              let newWord = '';

              for (let j = 0; j < word.length; j++) {
                  if (!vowels[word[j]]) newWord += word[j];
              }

              words[i] = newWord;
          }
      })

      return words.join(" ");
      // Time complexity O(n^2) since traversing through each word of sentence and traversing each letter of a word > 4.
      // Space complexity is O(n) since words can extend based on input.
  }

abbreviate('the bootcamp is fun'); // => 'the btcmp is fun'
abbreviate('programming is fantastic'); // => 'prgrmmng is fntstc'
abbreviate('hello world'); // => 'hll wrld'
abbreviate('how are you'); // => 'how are you'


function adults(people) {
    let arr = [];

    people.forEach( person => {
        if (person['age'] >= 18) arr.push(person['name']);
    });

    return arr;
    // Time complexity of O(n) depending on people objects. Space complexity of O(n) depending on people >= 18.
}

const ppl = [
    {name: 'John', age: 20},
    {name: 'Jim', age: 13},
    {name: 'Jane', age: 18},
    {name: 'Bob', age: 7}
  ];
  
  adults(ppl); // => [ 'John', 'Jane' ]


function countScores(people) {
    let tally = {};

    people.forEach( person => {
        if (tally[person['name']] === undefined) {
            tally[person['name']] = person['score'];
        } else {
            tally[person['name']] += person['score']
        }
    });

    return tally;
    // Time complexity O(n) depending on number of people in the input. Space complexity O(n) again depending on input.
}

// Example 1:
const pppl = [
    { name: "Anthony", score: 10 },
    { name: "Fred", score : 10 },
    { name: "Anthony", score: -8 },
    { name: "Winnie", score: 12 }
  ];
  countScores(pppl); // => { Anthony: 2, Fred: 10, Winnie: 12 }
  
  // Example 2
  const peeps = [
    { name: "Anthony", score: 2 },
    { name: "Winnie", score: 2 },
    { name: "Fred", score: 2 },
    { name: "Winnie", score: 2 },
    { name: "Fred", score: 2 },
    { name: "Anthony", score: 2 },
    { name: "Winnie", score: 2 }
  ];
  
  countScores(peeps); // => { Anthony: 4, Fred: 4, Winnie: 6 }
