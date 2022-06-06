/* 155. https://leetcode.com/problems/min-stack/ */

var MinStack = function() {
    this.stack = [];
    this.min = Infinity;
};

MinStack.prototype.push = function(val) {
    const valueMinimumPair = {val, prevMin: this.min};
    // we push the previous minimum, to keep track of it, so that when we pop, we restore the previous minimum as current minimum #1
    this.stack.push(valueMinimumPair);
    this.min = Math.min(val, this.min);
};


MinStack.prototype.pop = function() {
    // #1 example, popping value -3 with prevMimum -1
    const {val, prevMin} = this.stack.pop();
    // keyPair val: -3, prevMin -1 is gone, so re-assign this.minimum to be equal to previous minimum.
    this.min = prevMin;
    return val;

};

MinStack.prototype.top = function() {
    return this.stack.at(-1).val;
};

MinStack.prototype.getMin = function() {
    return this.min;
};
