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

/**1209. Remove All Adjacent Duplicates in String II */
/**https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/ */

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function (s, k) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (stack.length > 0 && stack[stack.length - 1][0] == [s[i]]) {
      stack[stack.length - 1][1] += 1;
      if (stack[stack.length - 1][1] == k) {
        stack.pop();
      }
    } else {
      stack.push([s[i], 1]);
    }
  }
  let res = "";
  for (let i = 0; i < stack.length; i++) {
    res += stack[i][0].repeat(stack[i][1]);
  }
  return res;
};

// let s = "deeedbbcccbdaa",
//   k = 3;

// console.log(removeDuplicates(s, k));

/**456. 132 Pattern */
/**https://leetcode.com/problems/132-pattern/ */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function (nums) {
  let s3 = Number.MIN_SAFE_INTEGER;

  const stack = [];
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] < s3) {
      return true;
    } else {
      while (stack.length && nums[i] > stack[stack.length - 1]) {
        s3 = Math.max(s3, stack[stack.length - 1]);
        stack.pop();
      }
    }
    stack.push(nums[i]);
  }
  return false;
};

// let nums = [1, 2, 3, 4];
// nums = [3, 1, 4, 2];
// nums = [-1, 3, 2, 0];

// console.log(find132pattern(nums));
