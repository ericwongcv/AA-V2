// Given a string s, return the longest palindromic substring in s.

// A string is called a palindrome string if the reverse of that string is the same as the original string.



// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"


// Constraints:

// 1 <= s.length <= 1000
// s consist of only digits and English letters.

var longestPalindrome = function (s) {
    if (s.length < 2)
        return s;
    let result = s[0];

    for (let i = 0; i < s.length - 1; i++) {
        
        // odd leng†h
        if (s[i - 1] === s[i + 1]) {
            let temp = "";
            let n = 1;
            temp = s[i];

            while (s[i - n] && s[i - n] === s[i + n]) {
                temp = s[i - n] + temp + s[i + n];
                n++;
            }
            if (temp.length > result.length) result = temp;
        }

        // even length
        if (s[i] === s[i + 1]) {
            let temp = "";
            let n = 0;
            while (s[i - n] && s[i - n] === s[i + n + 1]) {
                temp = s[i - n] + temp + s[i + n + 1];
                n++;
            }
            if (temp.length > result.length) result = temp;
        }
    }
    return result;
};

console.log(longestPalindrome("a"));
console.log(longestPalindrome("bb"));
console.log(longestPalindrome("abb"));
console.log(longestPalindrome("ccc"));
console.log(longestPalindrome("babad"));
console.log(longestPalindrome('cbbd'));
console.log(longestPalindrome('cbbdcbbdcbbdcbbdcbbdcbbdcbbdcbbdcbbdaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'));
