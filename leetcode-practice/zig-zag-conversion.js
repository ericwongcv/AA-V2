// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: 
// (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion given a number of rows:

// string convert(string s, int numRows);


// Example 1:

// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"
// Example 2:

// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:
// P     I    N
// A   L S  I G
// Y A   H R
// P     I
// Example 3:

// Input: s = "A", numRows = 1
// Output: "A"

const convert = (s, numRows) => {
    if (numRows === 1) return s;
    if (numRows === s.length) return s;
    let store = ""

    for (let i = 0; i < numRows; i++) {
        let spacing = (numRows - 1) * 2;
        let pointer = i;

        while (pointer <= s.length + spacing) {
            if (pointer > numRows - 1 &&                // skip first column
                pointer % spacing !== 0 &&              // skip values in top most row
                pointer % spacing !== numRows - 1) {    // skip values in bottom most row
                const pos = pointer - 2 * i;
                if (s[pos])
                    store += s[pos];                    // store letter from diagonals
            }
            if (s[pointer])
                store += s[pointer];                    // store letter from columns
            pointer += spacing;
        }
    }

    return store;
};

let s = "PAYPALISHIRING";
let numRows = 3;
console.log(convert(s, numRows) === "PAHNAPLSIIGYIR");


s = "PAYPALISHIRING";
numRows = 4;
console.log(convert(s, numRows) === "PINALSIGYAHRPI");


s = 'ABC';
numRows = 3;
console.log(convert(s, numRows) === "ABC");


s = 'ABCDE';
numRows = 4;
console.log(convert(s, numRows) === "ABCED");

s = 'AB';
numRows = 1;
console.log(convert(s, numRows) === "AB");

s = 'ABCDEF';
numRows = 5;
console.log(convert(s, numRows) === "ABCDFE");

s = "PAYPALISHIRING";
numRows = 10;
console.log(convert(s, numRows) === "PAYPALGINSIHRI");