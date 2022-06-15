/* 57. https://leetcode.com/problems/insert-interval/ */

// Time: O(n), Space: O(n)

const insert = (intervals, newInterval) => {
    let [newIntervalStart, newIntervalEnd] = newInterval;

    const left = [];
    const right = [];

    for (let i = 0; i < intervals.length; i++) {
        const [currentStart, currentEnd] = intervals[i];

        if (currentEnd < newIntervalStart) {
            left.push(intervals[i]);
        } else if (currentStart > newIntervalEnd) {
            right.push(intervals[i]);
        } else {
            newIntervalStart = Math.min(currentStart, newIntervalStart);
            newIntervalEnd = Math.max(currentEnd, newIntervalEnd);
        }
    }
    newInterval = [newIntervalStart, newIntervalEnd];

    return [...left, newInterval, ...right];
};

// Time: O(n), Space: O(n)

let insert2 = (intervals, newInterval) => {

    let [newIntervalStart, newIntervalEnd] = newInterval;

    let i = 0;
    let result = [];

    while(i < intervals.length && newIntervalStart > intervals[i][1]) {
        result.push(intervals[i]);
        i++;
    }

    while (i < intervals.length && intervals[i][0] <= newIntervalEnd ) {
        newIntervalStart = Math.min(intervals[i][0], newIntervalStart);
        newIntervalEnd = Math.max(intervals[i][1], newIntervalEnd);
        i++;
    }

    result.push([newIntervalStart, newIntervalEnd])


    while (i < intervals.length && newIntervalEnd < intervals[i][0]) {
        result.push(intervals[i]);
        i++;
    }

    return result;

};