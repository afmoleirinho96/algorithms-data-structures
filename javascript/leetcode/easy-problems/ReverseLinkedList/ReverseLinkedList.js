/* 206. https://leetcode.com/problems/reverse-linked-list/ */

// Time: O(n), Space: O(1)

const reverseList = (head) => {

    // solution 1
    /*
     let previous = null;
     let current = head;
     let next = null;

     while (current != null) {
         next = current.next;
         current.next = previous;
         previous = current;
         current = next;
     }

     return previous;
     */

    let [previous, current] = [null, head];

    while (current != null) {
        [current.next, previous, current] = [previous, current, current.next];
    }

    return previous;

};