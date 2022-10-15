// Given a signed 32-bit integer x, return x with its digits reversed. 
// If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).


// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21

const reverse = (num) => {
    // if num is single digit, return itself
    if (num.toString().length === 1) return num;
    // if num out of range, return 0
    if (num < -(2 ** 31) || num > 2 ** 31 - 1)
        return 0;

    const numStr = num.toString();
    let store = ""

    // iterate backwards to flip string (store)
    for (let i = numStr.length - 1; i >= 0; i--) {
        numStr[i] === '-' ?
            store = numStr[i] + store : store += numStr[i];
    }

    // pass stored string to filter zero function. Return string.
    store = filterZeroes(store);
    let max = 2 ** 31 - 1;          // max of 32bit
    const maxStr = max.toString();
    const minStr = (-(max + 1)).toString();

    // if string length of max 32bit is longer than store, return store (check both pos and neg)
    if ((store[0] !== '-' && maxStr.length > store.length) ||
        (store[0] === '-' && maxStr.length > store.length - 1))
        return parseInt(store);

    // if there are more digits in max, return 0
    if ((store[0] !== '-' && maxStr.length < store.length) ||
        (store[0] === '-' && maxStr.length < store.length - 1))
        return 0;
        
    // if digits are equal, compare them and return int or 0 depending on whether or not it is out of range
    if (store[0] !== '-' && maxStr.length === store.length)
        return store <= maxStr ? parseInt(store) : 0;
    else if (store[0] === '-' && maxStr.length === store.length - 1)
        return store <= minStr ? parseInt(store) : 0;

    return store;
}

const filterZeroes = (str) => {
    if ((str[0] !== '-' && str[0] !== '0') ||
        (str[0] === '-' && str[1] !== '0'))
        return str;

    let result = "";
    let zero = true;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === "-") result += str[i];
        if (str[i] !== '0' && str[i] !== '-') zero = false;

        if (!zero) result += str[i];
    };

    return result;
}

// console.log(reverse(123));      // 321
// console.log(reverse(-123));     // -321
// console.log(reverse(120));      // 21
// console.log(reverse(2 ** 31 - 1));      // 0
// console.log(reverse(-2147483412));
console.log(reverse(-2147483648))


// console.log(filterZeroes('-000123'))
// console.log(filterZeroes('-12345'))