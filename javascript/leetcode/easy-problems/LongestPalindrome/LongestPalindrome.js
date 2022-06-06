/* 409. https://leetcode.com/problems/longest-palindrome/ */

// Time: O(n), Space: O(n)
const longestPalindrome = (s) => {

    let charCounter = {};
    let longestPalindromeLength = 0;

    if (s.split('').every(char => char === s[0])) return s.length;

    for (let char of s) {
        if (!charCounter[char]) {
            charCounter[char] = 0;
        }
        charCounter[char]++;

        if (charCounter[char] % 2 === 0) {
            longestPalindromeLength += 2;
        }
    }

    return s.length > longestPalindromeLength ? longestPalindromeLength + 1 : longestPalindromeLength;
};

console.log(longestPalindrome('abccccdd'));