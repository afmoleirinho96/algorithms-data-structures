/* 383. https://leetcode.com/problems/ransom-note/ */

// Time: O(n), Space: O(n) ->
// Hint: We can argue that Space could be O(1), since we never actually get more than 26 chars no matter the size of the input
const canConstruct = (ransomNote, magazine) => {

    const charCounter = {};

    for (let char of ransomNote) {
        if (!charCounter[char]) {
            charCounter[char] = 1;
        } else {
            charCounter[char]++;
        }
    }

    for (let char of magazine) {
        if (charCounter[char]) {
            charCounter[char]--;
        }

        if (charCounter[char] === 0) {
            delete charCounter[char];
        }
    }

    return Object.keys(charCounter).length === 0;/**/

};

console.log(canConstruct('abcde', 'abwkplqor')); // false, missing cde

/*
    Alternative, first fill the hash map with magazine chars and iterate ransom note afterwards.
    If characters of ransom note doesn't exist in hash map, return false as we already know that we can't construct the word⁄
 */

const canConstruct2 = (ransomNote, magazine) => {

    const charCounter = {};

    for (let char of magazine) {
        if (!charCounter[char]) {
            charCounter[char] = 1;
        } else {
            charCounter[char]++;
        }
    }

    for (let char of ransomNote) {
        if (!charCounter[char]) {
           return false;
        }

        charCounter[char]--;
    }

    return true;

};

console.log(canConstruct2('abcde', 'abwkplqor')); // false, missing cde
