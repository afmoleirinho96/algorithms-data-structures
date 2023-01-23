/* 3. https://leetcode.com/problems/longest-substring-without-repeating-characters/ */

// Time: O(n^2), Space: O(n)

const lengthOfLongestSubstring = function(s) {

    if (!s.length) {
        return 0;
    }

    if (s.length === 1) {
        return 1;
    }

    let maxString = '';
    let maxLength = 0;


    for (let i = 0; i < s.length; i++) {
        const currentChar = s[i];

        const charIndexInMaxString = maxString.indexOf(currentChar);

        if (maxString.includes(currentChar)) {
            maxString = maxString.substring(charIndexInMaxString +1);
        }

        maxString += currentChar;

        maxLength = Math.max(maxLength, maxString.length);
    }

    return maxLength;

};

console.log(lengthOfLongestSubstring("abcabcbb")) // returns 3 abc from position 3-5

// Time: O(n), Space: O(n)

/**
 * while (nonRepeatedChars.has(s[i])) is constant time
**/

var lengthOfLongestSubstring2 = function(s) {

    if(!s.length) {
        return 0;
    }

    if (s.length === 1) {
        return 1;
    }

    let max = 0;
    let start = 0;

    let nonRepeatedChars = new Set();

    for (let i = 0; i< s.length; i++) {
        while (nonRepeatedChars.has(s[i])) {
            nonRepeatedChars.delete(s[start]);
            start++;
        }
        nonRepeatedChars.add(s[i]);

        max = Math.max(max, nonRepeatedChars.size); // or  max = Math.max(max, i - start + 1);
    }

    return max;
};
