/* 169. https://leetcode.com/problems/majority-element/ */


// Throughout this problem, I learned this solution and algorithm - Boyer-Moore

// Time: O(n); Space: O(1);
const majorityElement = (nums) => {

    let count = 0;
    let candidate = null;

    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }

        num === candidate ? count++ : count --;
    }

    return candidate;
}

/* My solutions:
** 1. Making it harder, in case it has more occurrences but no majority, so we can't consider nums.length / 2
** Example: [4,4,2,1,3,5,6,7] -> 4,4 is the number with most occurrences but not majority
*/

// Time: O(nlogn); Space: O(1)

const majorityElement2 = (nums) => {

    let numsSorted = nums.sort((a, b) => a - b);
    let currentCount = 1;
    let maxCount = 1;

    let majority = numsSorted[0];

    for (let i = 1; i < numsSorted.length; i++) {

        if (numsSorted[i] !== numsSorted[i - 1]) {
            currentCount = 1;
        } else {
            currentCount += 1;
        }
        if (currentCount > maxCount) {
            maxCount = currentCount;

            if (majority !== nums[i]) {
                majority = nums[i];
            }
        }
    }
    return majority;
};

/*
** Below, solutions assuming majority always exist - like the prompt says to.
*/

// Time: 0(nlogn); Space(1);
const majorityElement3 = (nums) => {

    nums.sort((a,b) => a - b);
    return nums[Math.floor(nums.length/2)];
};