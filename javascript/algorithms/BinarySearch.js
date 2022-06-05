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

