// Convert the integers in the console.logs below to base 16:

/******************************************************************************/

const convertToBase16 = element => {
  // Your code here
  if (typeof element === 'number') {
    const hash = {
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: 'a',
      11: 'b',
      12: 'c',
      13: 'd',
      14: 'e',
      15: 'f'
    };

    let exp = 0;
    let remainder = element;

    while (element - Math.pow(16, exp) >= 0) {
      exp++;
    }

    exp--;
    let hex = "0x";

    for (exp; exp >= 0; exp--) {
      if (remainder - Math.pow(16, exp) >= 0) {
        let value = Math.pow(16, exp)
        let multiple;

        Object.keys(hash).forEach( key => {
          if (remainder - (value * parseInt(key)) >= 0) {
            multiple = parseInt(key);
          }
        });

        hex += hash[multiple];
        remainder -= value * multiple;

      } else {
        hex += '0';
      };
    };

    return hex;
  } else if (element.slice(0,2) === '0b') {
    const hash = {
      '0000': '0',
      '0001': '1',
      '0010': '2',
      '0011': '3',
      '0100': '4',
      '0101': '5',
      '0110': '6',
      '0111': '7',
      '1000': '8',
      '1001': '9',
      '1010': 'a',
      '1011': 'b',
      '1100': 'c',
      '1101': 'd',
      '1110': 'e',
      '1111': 'f'
    };

    let hex = '0x';
    let count = (element.length - 2) / 4;

    for (let i = 0; count > 0; i += 4) {
      let binarySegment = element.slice(2 + i, 6 + i);
      hex += hash[binarySegment];
      count--;
    }

    return hex;
  }
};

/******************************************************************************/

console.log(convertToBase16(4)); // 0x4
console.log(convertToBase16(65)); // 0x41
console.log(convertToBase16(256)); // 0x100
console.log(convertToBase16(123)); // 0x7b
console.log(convertToBase16(1000)); // 0x3e8

console.log('––––––');

console.log(convertToBase16('0b1100')); // 0xc
console.log(convertToBase16('0b0101')); // 0x5
console.log(convertToBase16('0b1000')); // 0x8
console.log(convertToBase16('0b0111')); // 0x7

console.log('––––––');

console.log(convertToBase16('0b10100101')); // 0xa5
console.log(convertToBase16('0b11111111')); // 0xff
console.log(convertToBase16('0b01010101')); // 0x55
console.log(convertToBase16('0b00110011')); // 0x33
