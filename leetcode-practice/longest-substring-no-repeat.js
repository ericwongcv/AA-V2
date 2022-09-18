var lengthOfLongestSubstring = function (s) {
    let chars = {};
    let length = 0;
    let longest = 0;
    let startIdx = 0;

    for (i in s) {
        if (!(s[i] in chars)) {
            chars[s[i]] = +i;
            length++;
        } else if (s[i] in chars) {
            let diff = 0;
            
            if (chars[s[i]] + 1 === +i) {
                diff = 1;
                startIdx = +i;
            } else if (chars[s[i]] >= startIdx) {
                diff = +i - chars[s[i]];
                startIdx = chars[s[i]] + 1;
            } else if (chars[s[i]] < startIdx) {
                diff = +i - startIdx + 1;
            } 

            chars[s[i]] = +i;

            if (diff > longest)
                longest = diff;

            length = diff;
        }
        if (length > longest)
            longest = length;
        // console.log(s[i], length, startIdx, chars)
    }
    return longest;
};

console.log(lengthOfLongestSubstring("abcabcbb"));      // 3
console.log(lengthOfLongestSubstring("bbbbb"));         // 1
console.log(lengthOfLongestSubstring("pwwkew"));        // 3
console.log(lengthOfLongestSubstring("dvdf"));          // 3
console.log(lengthOfLongestSubstring("abba"));          // 2
console.log(lengthOfLongestSubstring("tmmzuxt"));       // 5
console.log(lengthOfLongestSubstring("bbtablud"));      // 6
console.log(lengthOfLongestSubstring("ohvhjdml"));      // 6
console.log(lengthOfLongestSubstring("wobgrovw"));      // 6
