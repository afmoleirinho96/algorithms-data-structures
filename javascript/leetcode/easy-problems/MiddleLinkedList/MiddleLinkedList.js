/* 876. https://leetcode.com/problems/middle-of-the-linked-list/   */

// Time: O(n), Space: O(1)

var middleNode = function(head) {


    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
};