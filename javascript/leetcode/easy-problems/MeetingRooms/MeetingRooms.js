/* 252. https://leetcode.com/problems/meeting-rooms/ */

// Time: O(n logn), Space: O(1)
const canAttendMeetings = (intervals) => {

    intervals.sort((a,b) => a[0] - b[0]);

    for (let i = 0; i< intervals.length - 1; i++) {
        const currentMeetingEnd = intervals[i][1];
        const nextMeetingStart = intervals[i+1][0];
        if (currentMeetingEnd > nextMeetingStart) {
            return false;
        }
    }
    return true;

};