// Create two functions to encode and then decode a string using the Rail Fence Cipher. This cipher is used to encode a string by placing 
// each character successively in a diagonal along a set of "rails". First start off moving diagonally and down. When you reach the bottom, 
// reverse direction and move diagonally and up until you reach the top rail. Continue until you reach the end of the string. Each "rail" is 
// then read left to right to derive the encoded string.

// For example, the string "WEAREDISCOVEREDFLEEATONCE" could be represented in a three rail system as follows:

// W       E       C       R       L       T       E
//   E   R   D   S   O   E   E   F   E   A   O   C  
//     A       I       V       D       E       N    
// The encoded string would be:

// WECRLTEERDSOEEFEAOCAIVDEN
// Write a function/method that takes 2 arguments, a string and the number of rails, and returns the ENCODED string.

// Write a second function/method that takes 2 arguments, an encoded string and the number of rails, and returns the DECODED string.

// For both encoding and decoding, assume number of rails >= 2 and that passing an empty string will return an empty string.

// Note that the example above excludes the punctuation and spaces just for simplicity. There are, however, tests that include punctuation. Don't filter out punctuation as they are a part of the string.



const encodeRailFenceCipher = (s, numRows) => {
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


const decodeRailFenceCipher = (s, numRows) => {
    // middle rows need to alternate between bottom and top spacing while top and bottom rows use top spacing
    let topSpacing = (numRows - 1) * 2;
    let bottomSpacing = 0;
    const result = Array(numRows);
    let counter = 0;

    for (let i = 0; i < numRows; i++) {
        let turn = 'top';
        let pointer = i;

        while (pointer < s.length) {
            result[pointer] = s[counter];

            if (i === 0) {
                pointer += topSpacing;
            } else if (i === numRows - 1) {
                pointer += bottomSpacing;
            } else {
                pointer += turn === 'top' ? topSpacing : bottomSpacing;
                turn = turn === 'top' ? 'bottom' : 'top'
            }
            counter++;
        }

        topSpacing -= 2;
        bottomSpacing += 2;
    }
    
    return result.join('');
};

console.log(encodeRailFenceCipher("Hello, World!", 3) === "Hoo!el,Wrdl l");
console.log(decodeRailFenceCipher("Hoo!el,Wrdl l", 3) === "Hello, World!");
console.log(encodeRailFenceCipher("WEAREDISCOVEREDFLEEATONCE", 3) === "WECRLTEERDSOEEFEAOCAIVDEN");
console.log(decodeRailFenceCipher("WECRLTEERDSOEEFEAOCAIVDEN", 3) === "WEAREDISCOVEREDFLEEATONCE");
console.log(decodeRailFenceCipher("WIREEEDSEEEACAECVDLTNROFO", 4) === "WEAREDISCOVEREDFLEEATONCE");