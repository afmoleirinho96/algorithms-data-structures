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