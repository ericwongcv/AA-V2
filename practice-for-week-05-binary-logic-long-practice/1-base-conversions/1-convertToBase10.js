// Convert the integers in the console.logs below to base 10:

/******************************************************************************/

const convertToBase10 = str => {
  // Your code here

  let sum = 0;
  let baseArr = str.slice(2).split('');

  switch (str.slice(0,2)) {
    case '0b':
      
      for (let exp = 0; baseArr.length > 0; exp++) {
        let digit = baseArr.pop();

        sum += Math.pow(2, exp) * digit;
      }
      break;

    case '0x':

      const hash = {'A': 10, 'B': 11, 'C': 12, 'D': 13, 'E': 14, 'F': 15 };

        for (let exp = 0; baseArr.length > 0; exp++) {
          let hex = baseArr.pop();

          if (!parseInt(hex)) {
            sum += Math.pow(16, exp) * hash[hex.toUpperCase()];
          } else {
            sum += Math.pow(16, exp) * parseInt(hex);
          }
        }
      break;

    default:
      'Argument must be binary or hex'
  }

  return sum;
};

/******************************************************************************/

console.log(convertToBase10('0b1100')); // 12
console.log(convertToBase10('0b0101')); // 5
console.log(convertToBase10('0b1000')); // 8
console.log(convertToBase10('0b0111')); // 7

console.log('––––––');

console.log(convertToBase10('0b10100101')); // 165
console.log(convertToBase10('0b11111111')); // 255
console.log(convertToBase10('0b01010101')); // 85
console.log(convertToBase10('0b00110011')); // 51

console.log('––––––');

console.log(convertToBase10('0xf')); // 15
console.log(convertToBase10('0xfa')); // 250
console.log(convertToBase10('0x1234')); // 4660
console.log(convertToBase10('0xc9a1')); // 51617
console.log(convertToBase10('0xbf12')); // 48914
