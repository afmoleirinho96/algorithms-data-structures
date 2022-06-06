/**
 * Time: O(log(n))
 * Space: 0(1)
 *
 * It should be noted that Binary Search only works on sorted arrays.
 * The sorting step, if using an efficient algorithm, will have a time complexity of O(nlog(n)).
 * Since Linear Search can work on sorted arrays, if the array is small, or if we need to search the array just once,
 * then Linear Search might be a better choice.
 */

const binarySearch = (nums, target) => {

    let start = 0;
    let end = nums.length;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (nums[mid] === target) {
            return mid;
        }
        else if (nums[mid] > target) {
            end = mid - 1;
        }

        else {
            start = mid + 1;
        }
    }

    return -1;

};

console.log(binarySearch([-1,0,3,5,9,12], 9)); // Returns index -> 4

