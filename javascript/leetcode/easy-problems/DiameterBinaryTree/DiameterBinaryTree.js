/* 543. https://leetcode.com/problems/diameter-of-binary-tree/ */

// Time: O(n), Space: O(n)

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