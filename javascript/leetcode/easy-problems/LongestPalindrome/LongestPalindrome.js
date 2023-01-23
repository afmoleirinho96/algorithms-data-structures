/* 409. https://leetcode.com/problems/longest-palindrome/ */

// Time: O(n), Space: O(n)
const longestPalindrome = (s) => {

    let charCounter = new Map();
    let longestPalindromeLength = 0;

    for (let char of s) {
       charCounter.set(char, charCounter.get(char) + 1 || 1);

        if (charCounter.get(char) % 2 === 0) {
            longestPalindromeLength += 2;
        }
    }

    return s.length > longestPalindromeLength ? longestPalindromeLength + 1 : longestPalindromeLength;
};

console.log(longestPalindrome('abccccdd'));
