/* 13. https://leetcode.com/problems/roman-to-integer/ */

// Time: O(1), Space: O(1)
// Doubt: Time is 0(1) because It is guaranteed that s is a valid roman numeral in the range [1, 3999]

// First approach replacing the roman values that have a lower number before, with map known values.
const romanToInt = (s) => {

    let answer = 0;
    const romanToIntMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    s = s.replace("IV","IIII")
    s = s.replace("IX","VIIII");
    s = s.replace("XL","XXXX")
    s = s.replace("XC","LXXXX");
    s = s.replace("CD","CCCC")
    s = s.replace("CM","DCCCC");

    for (let i = 0; i < s.length; i++) {
        const currentValue = romanToIntMap[s[i]];
        answer += currentValue;
    }

    return answer;
};

// Second approach comparing current and next value
const romanToInt2 = (s) => {

    let answer = 0;
    const romanToIntMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    for (let i = 0; i < s.length - 1; i++) {
        const currentValue = romanToIntMap[s[i]];
        const nextValue = romanToIntMap[s[i+1]];
        currentValue < nextValue ? answer -= currentValue : answer += currentValue;
    }

    return answer + romanToIntMap[s[s.length-1]];
};