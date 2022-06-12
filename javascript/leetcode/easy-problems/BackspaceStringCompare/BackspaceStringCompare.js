/* 844. https://leetcode.com/problems/backspace-string-compare/solution/ */

// Time: O(n+m), Space: O(n+m)

var backspaceCompare = function(s, t) {

    function buildString (string) {
        let answer = []
        for (let char of string) {
            if (char !== "#") {
                answer.push(char);
            } else {answer.length && answer.pop();
            }
        }

        return answer.join("");
    }

    return buildString(s) === buildString(t);

};

// Time: O(n), Space: O(1)

var backspaceCompare2 = function(s, t) {

    let i = s.length - 1;
    let j = t.length - 1;
    let sBackspaces = 0;
    let tBackspaces = 0;

    while (i >= 0 || j >= 0) {
        if (s[i] === "#") {
            sBackspaces++;
            i--;
            continue;
        }

        if (t[j] === "#") {
            tBackspaces++;
            j--;
            continue;
        }

        if (sBackspaces) {
            sBackspaces--;
            i--;
            continue;
        }

        if (tBackspaces) {
            tBackspaces--;
            j--;
            continue;
        }

        if (s[i] !== t[j]) {
            return false;
        }

        i--;
        j--;
    }

    return true;
};