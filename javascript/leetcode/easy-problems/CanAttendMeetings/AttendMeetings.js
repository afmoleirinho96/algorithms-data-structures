// Time: O(nlogn), Space: O(n)

const canAttendMeetings = (intervals) => {

    if (!intervals || !Array.isArray(intervals) || !intervals.length) {
        return false;
    }

    const intervalsSorted = intervals.sort((a, b) => a[0] - b[0]);

    for (let i = 1; i < intervalsSorted.length; i += 1) {
        const startTime = intervalsSorted[i][0];
        const previousEndTime = intervalsSorted[i - 1][1];

        // It will overlap
        if (startTime < previousEndTime) {
            return false;
        }
    }

    return true;


    /*
    intervalsSorted.forEach(interval => {
        const startTime = interval[0];

        if (startTime < previousEndTime) {
            return false;
        }

    previousEndTime = interval[1];
  });
    * */
};

