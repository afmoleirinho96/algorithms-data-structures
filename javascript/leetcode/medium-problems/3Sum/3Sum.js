/* 15. https://leetcode.com/problems/3sum/solution/ */

// Time: O(n^2), Space: O(n)

const threeSum = (nums) => {

    const triplets = [];

    if (nums.length < 3) return triplets;

    nums.sort((a,b) => a - b);

    let target = 0; // final value it should add to

    for (let i = 0; i < nums.length - 2; i++) {

        if (nums[i] > target) {
            break;
        }

        if (i > 0 && nums[i] === nums[i-1]) {
            continue;
        }

        let left = i+1;
        let right = nums.length-1;

        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];

            if (sum === target) {
                triplets.push([nums[i], nums[left], nums[right]]);

                while (nums[left] === nums[left+1]) {
                    left++;
                }

                while (nums[right] === nums[right-1]) {
                    right--;
                }

                left++
                right--;

            } else if (sum < target) {
                left++;
            } else {
                right--;
            }
        }
    }

    return triplets;
}

// Time: O(n^2), Space: O(n)  Time is O(nlogn) + O(n^2) = O(n^2)
const threeSum = (nums) => {

    let results = [];

    nums.sort((a,b) => a - b);

    for (let i = 0; i < nums.length; i++) {
        if (i === 0 || nums[i-1] !== nums[i]) {
            twoSum(nums, i ,results);
        }
    }

    return results;
};

const twoSum = (nums, i, results) => {

    const numsChecked = new Set();

    for (let j = i + 1; j < nums.length; j++) {
        const complement = - (nums[i] + nums[j]);

        if (numsChecked.has(complement)) {
            results.push([nums[i], nums[j], complement]);

            // avoid repeating numbers
            while (j + 1 < nums.length && nums[j] === nums[j + 1]) {
                ++ j;
            }
        }
        numsChecked.add(nums[j]);

    }
}
