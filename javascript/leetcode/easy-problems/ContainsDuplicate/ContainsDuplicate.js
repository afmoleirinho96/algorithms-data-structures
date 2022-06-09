/* 217. https://leetcode.com/problems/contains-duplicate/ */

// All solutions - Time: O(n), Space: O(n)
var containsDuplicate = function(nums) {

    let occurrences = new Map();

    for (let num of nums) {
        occurrences.set(num, occurrences.get(num) + 1 || 1);

        if (occurrences.get(num) === 2) {
            return true;
        }
    }
    return false;
};

var containsDuplicate2 = function(nums) {

    let occurrences = {};

    for (let num of nums) {
        occurrences[num] ? occurrences[num]++ : occurrences[num] = 1; // occurrences[num] = (occurrences[num] || 0) + 1;

        if (occurrences[num] === 2) {
            return true
        }
    }
    return false
};

var containsDuplicate3 = function(nums) {

    let occurrences = {};

    for (let num of nums) {
        if (occurrences[num]) {
            return true
        } else {
            occurrences[num] = 1;
        }
    }
    return false
};

const containsDuplicate4 = (nums) => {
    let hash = {}
    for (let i = 0; i< nums.length; i++) {
        let num = nums[i]
        hash[num] = (hash[num] || 0) + 1
        if (hash[num] > 1) return true
    }
    return false
};

const containsDuplicate5 = (nums) => {
    let occurrences = new Set(nums);
    return occurrences.size < nums.length;
};

function runTest(testFunction, testArray) {
    console.log('   Running test:', testFunction.name);
    let start = performance.now();
    let result = testFunction(testArray);
    let end = performance.now();
    console.log('      Duration:', end - start);
}

let arr = [];
let setSize = 1000;
for (var i = 0; i < setSize; i++) {
    arr.push(i);
}
console.log('Set size:', setSize);
runTest(containsDuplicate, arr);
runTest(containsDuplicate2, arr);
runTest(containsDuplicate3, arr);
runTest(containsDuplicate4, arr);
runTest(containsDuplicate5, arr);