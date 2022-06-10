/* 67. https://leetcode.com/problems/add-binary/ */

var addBinary = function(a, b) {
    return (BigInt('0b'+a) + BigInt('0b'+b)).toString(2)

    // return (Number.parseInt(a,2) + Number.parseInt(b,2)).toString(0,2) won't work because Number can only represent 2^53 - 1, otherwise we will have integer overflow.
};