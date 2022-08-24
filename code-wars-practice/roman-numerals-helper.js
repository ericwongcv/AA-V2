// TODO: create a RomanNumerals helper object
const roman = {
    "I": 1, 
    "V": 5, 
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000,
    "IV": 4,
    "IX": 9,
    "XL": 40,
    "XC": 90,
    "CD": 400,
    "CM": 900
}

const numerals = {
    1000: "M",
    900: "CM",
    500: "D",
    400: "CD",
    100: "C",
    90: "XC",
    50: "L",
    40: "XL",
    10: "X",
    9: "IX",
    5: "V",
    4: "IV",
    1: "I"
}

class RomanNumerals {
  constructor() {
  }

  static toRoman(val) {
    if (numerals[val]) return numerals[val];

    let rNum = "";
    let placement = 1;
    let remainder = 0;
    const strVal = val.toString();

    for (let i = strVal.length - 1; i >= 0; i--) {
        remainder = parseInt(strVal[i]);
        const value = remainder * placement;
        let subNum = "";

        while (remainder > 0) {
            if (numerals[value]) {
              subNum += numerals[value];
              remainder = 0;
            } else if (remainder > 5) {
              subNum += numerals[5 * placement];
              remainder -= 5;
            } else if (remainder > 0) {
              subNum += numerals[1 * placement];
              remainder -= 1;
            }
        }
        placement *= 10;
        rNum = subNum + rNum;
    }
    return rNum;
  }
  
  static fromRoman(val) {
    let index = 0;
    let sum = 0;
    
    while (index < val.length) {
      if (roman[val.slice(index, index + 2)]) {
        sum += roman[val.slice(index, index + 2)];
        index += 2;
      } else if (roman[val[index]]) {
        sum += roman[val[index]];
        index += 1;
      }
    }
    return sum;
  }
  
}

console.log(RomanNumerals.toRoman(8), "VIII");
console.log(RomanNumerals.toRoman(20), "XX");
console.log(RomanNumerals.toRoman(1000), "M");
console.log(RomanNumerals.toRoman(4), 'IV');
console.log(RomanNumerals.toRoman(1), 'I');
console.log(RomanNumerals.toRoman(1990), 'MCMXC');
console.log(RomanNumerals.toRoman(2008), 'MMVIII');

console.log(RomanNumerals.fromRoman("M"), 1000)
console.log(RomanNumerals.fromRoman('XXI'), 21)
console.log(RomanNumerals.fromRoman('I'), 1)
console.log(RomanNumerals.fromRoman('IV'), 4)
console.log(RomanNumerals.fromRoman('MMVIII'), 2008)
console.log(RomanNumerals.fromRoman('MDCLXVI'), 1666)
