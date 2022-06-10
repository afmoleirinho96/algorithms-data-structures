/* 104.https://leetcode.com/problems/maximum-depth-of-binary-tree/ */

// Time: O(n), Space: O(n) - because of the call stack

var diameterOfBinaryTree = function(root) {


    let diameter = 0;
    dfs(root);

    return diameter;

    function dfs(root) {

        if (!root) {
            return 0;
        }

        let left = dfs(root.left);
        let right = dfs(root.right);

        diameter = Math.max(diameter, left + right);
        return Math.max(left, right) +1;
    }

};