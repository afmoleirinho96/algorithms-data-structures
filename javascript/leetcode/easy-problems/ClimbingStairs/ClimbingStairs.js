/* 70. https://leetcode.com/problems/climbing-stairs/ */

// Time: O(n), Space: O(n)
var climbStairs = function(n, memo = []) {
    if (n === 1) {
        return 1;
    }
    if (n === 2) {
        return 2;
    }
    if (memo[n] !== undefined) {
        return memo[n];
    }
    let res = climbStairs(n-1, memo) + climbStairs(n-2, memo);
    memo[n] = res;
    return res;
};

/* Without memoization */
const climbStairs2 = (n) => {

    if (n <=3) {
        return n;
    }

    return climbStairs2(n - 1) + climbStairs2(n - 2)
}

/* DP */
const climbStairs3 = (n) => {
    let dp = {}; // or dp = [0,1,2], the first 3 results

    dp[1] = 1;
    dp[2] = 2;
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2];
    }
    return dp[n];
};


/*
const t0 = performance.now();
climbStairs(45);
const t1 = performance.now();
console.log('Time with memoization -> ', t1 - t0); // ~= 0.03 milliseconds
*/



/*
const t2 = performance.now();
climbStairs2(45);
const t3 = performance.now();
console.log('Time ', t3 - t2); // ~= 4327 milliseconds - huge difference

*/

const t4 = performance.now();
climbStairs3(100);
const t5 = performance.now();
console.log('Time with DP ', t5 - t4); // Faster with bigger numbers and prevents 'Maximum call stack size exceeded'


