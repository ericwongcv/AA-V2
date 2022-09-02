function multiply(a, b){

    b = b.split('');
    const resArr = [];
    let placement = 0
    
    while (b.length > 0) {
      const bMultiple = b.pop();

      let mult = multSingle(a, bMultiple);
      mult += '0'.repeat(placement);

      resArr.push(mult);
      placement++;
    }
    let solution = sumString(resArr)
    
    if (solution.split("").every(el => el === '0')) return '0';

    let index = 0;
    if (solution[0] === '0' && solution.length > 1) {
        
        index = solution.search('[1-9]');
    }

    return solution.slice(index);
}

// console.log(multiply("1009", "03"))
// console.log(multiply("0", "300"))

function multSingle(num, single) {
  num = num.split('');
  const result = [];
  let remainder = 0;

  for (let i = num.length - 1; i >= 0; i--) {
      const aMultiple = num[i];
      let mult = parseInt(aMultiple) * parseInt(single);
      mult += remainder
      remainder = 0

      const strMult = mult.toString();

      if (mult > 9 && i !== 0) {    // if more than 1 digit (Max 2 digit 9*9)
        result.push(strMult[1])    // second digit pushed
        remainder = parseInt(strMult[0]);
      } else {
        result.push(strMult);
      }
    }
    
    return result.reverse().join("");
}

// console.log(multSingle('1234567890', '5'))

function sumString(arr) {
    let remainder = 0;
    let sum = 0;
    let result = "";
    let count = 1

    arr = arr.map(el => el.split(""));

    while (count > 0) {
        for (let i = 0; i < arr.length; i++) {
            if (count < arr[i].length) count = arr[i].length;
            
            if (arr[i].length > 0) {
                sum += parseInt(arr[i].pop());
            }
        }
        sum += remainder;
        const sumStr = sum.toString();
        result = sumStr[sumStr.length -1] + result;
        remainder = sumStr.length > 1 ? parseInt(sumStr.slice(0, sumStr.length - 1)) : 0;
        
        sum = 0;
        count--;
    }

    if (remainder > 0) result = remainder.toString() + result;
    return result;
}

// console.log(sumString(['1234567890','1234567890']))
