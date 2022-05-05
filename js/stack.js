/**225. Implement Stack using Queues */
/**https://leetcode.com/problems/implement-stack-using-queues/ */

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

var MyStack = function () {
  this.stack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.stack.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  return this.stack.pop();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.stack.length === 0;
};

// const myStack = new MyStack();
// myStack.push(1);
// console.log(myStack);
// myStack.push(2);
// console.log(myStack);
// console.log(myStack.top()); // return 2
// console.log(myStack.pop()); // return 2
// console.log(myStack.empty()); // return False
