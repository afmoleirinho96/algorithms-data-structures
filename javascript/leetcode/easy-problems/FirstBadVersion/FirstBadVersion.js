/* 278. https://leetcode.com/problems/first-bad-version/ */

// Time: O(log n), Space: O(1)
const solution1 = (isBadVersion) => {
    return function (n) {
        return binarySearch1(n, isBadVersion);
    }
};

const binarySearch1 = (n, isBadVersion) => {
    let start = 0;
    let end = n;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (isBadVersion(mid) === false && isBadVersion(mid + 1) === true) {
            return mid + 1;
        } else if (isBadVersion(mid) === false) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
}

const solution2 = (isBadVersion) => {
    return function (n) {
        return binarySearch2(n, isBadVersion);
    }
};


/* Improved solution */
const binarySearch2 = (n, isBadVersion) => {
    let start = 1;
    let end = n;

    // 12, 4 - mid 6, end 12, start 1, isBadVersion true
    // end 5, start 1, mid 3, isBadVersion false
    // end 5, start 4, mid 4, isBadVersion true
    // end 4, start 4, mid 4, isBadVersion true, end will be 5, start is mid, return mid

    while (start <= end) {
        let mid = Math.floor((start+end) / 2);

        if (isBadVersion(mid)) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    return start;
}

console.log(solution1(1000000000000, 500));

console.log(solution2(1000000000000, 500));





