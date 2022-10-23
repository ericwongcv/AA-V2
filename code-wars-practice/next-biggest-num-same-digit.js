// Create a function that takes a positive integer and returns the next bigger number that can be formed 
// by rearranging its digits. For example:

// 12 ==> 21
// 513 ==> 531
// 2017 ==> 2071
// nextBigger(num: 12)   // returns 21
// nextBigger(num: 513)  // returns 531
// nextBigger(num: 2017) // returns 2071
// If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift):

// 9 ==> -1
// 111 ==> -1
// 531 ==> -1
// nextBigger(num: 9)   // returns nil
// nextBigger(num: 111) // returns nil
// nextBigger(num: 531) // returns nil

const nextBigger = (n) => {
    const nStr = n.toString().split('');
    let firstHalf;
    let secondHalf;

    if (nStr.length <= 1)
        return -1;

    for (let i = nStr.length - 1; i >= 0; i--) {
        const cur = nStr[i];
        const prev = nStr[i + 1];
        if (cur < prev) {
            for (let j = i + 1; j < nStr.length; j++) {
                const next = nStr[j];
                if (cur >= next) {
                    [nStr[i], nStr[j - 1]] = [nStr[j - 1], cur];
                    firstHalf = nStr.slice(0, i + 1);
                    secondHalf = nStr.slice(i + 1);
                    secondHalf.sort((a, b) => a - b);
                    const joinedStr = firstHalf.concat(secondHalf).join('');
                    return parseInt(joinedStr);
                } else if (j === nStr.length - 1) {
                    [nStr[i], nStr[j]] = [next, cur];
                    firstHalf = nStr.slice(0, i + 1);
                    secondHalf = nStr.slice(i + 1);
                    secondHalf.sort((a, b) => a - b);
                    const joinedStr = firstHalf.concat(secondHalf).join('');
                    return parseInt(joinedStr);
                }
            }
        }
    }
    return -1;
}

let n = 12;
console.log(nextBigger(n));
n = 513;
console.log(nextBigger(n));
n = 2017;
console.log(nextBigger(n));
n = 1770;
console.log(nextBigger(n));     // 7017
n = 59884848459853
console.log(nextBigger(n));     // 59884848483559
n = 1;
console.log(nextBigger(n));
