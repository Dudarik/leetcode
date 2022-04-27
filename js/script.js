function hide() {
  let event = new CustomEvent("hide", { cancelable: true });

  if (!rabbit.dispatchEvent(event)) {
    console.log("Действие отменено");
  } else {
    rabbit.hidden = true;
  }
}

rabbit.addEventListener("hide", (ev) => {
  if (confirm("Отменить ??")) {
    ev.preventDefault();
  }
});

document.querySelector(".togglemenu").addEventListener("click", (ev) => {
  ev.target.closest("div").classList.toggle("togglemenu_active");
});

var generateParenthesis = function (n) {
  const result = [];

  const backtrack = (result, p, open, close, n) => {
    if (p.length === n * 2) {
      result.push(p);
      return;
    }

    if (open < n) {
      backtrack(result, p + "(", open + 1, close, n);
    }

    if (close < open) {
      backtrack(result, p + ")", open, close + 1, n);
    }
  };
  backtrack(result, "", 0, 0, n);
  return result;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let maxSum = nums[0];
  let currSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i] + currSum) currSum = nums[i];
    else currSum += nums[i];
    maxSum = Math.max(maxSum, currSum);
  }
  return maxSum;
};

// let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

// console.log(maxSubArray(nums));

/**284. Peeking Iterator */
/**https://leetcode.com/problems/peeking-iterator/ */

/**
 * // This is the Iterator's API interface.
 * // You should not implement it, or speculate about its implementation.
 * function Iterator() {
 *    @ return {number}
 *    this.next = function() { // return the next number of the iterator
 *       ...
 *    };
 *
 *    @return {boolean}
 *    this.hasNext = function() { // return true if it still has numbers
 *       ...
 *    };
 * };
 */

/**
 * @param {Iterator} iterator
 */
var PeekingIterator = function (iterator) {
  this.iterator = iterator;
  this.current = null;
};

/**
 * @return {number}
 */
PeekingIterator.prototype.peek = function () {
  if (this.current === null) this.current = this.iterator.next();
  return this.current;
};

/**
 * @return {number}
 */
PeekingIterator.prototype.next = function () {
  if (this.current !== null) {
    const t = this.current;
    this.current = null;
    return t;
  }
  return this.iterator.next();
};

/**
 * @return {boolean}
 */
PeekingIterator.prototype.hasNext = function () {
  return this.current !== null || this.iterator.hasNext();
};

/**58. Length of Last Word */
/**https://leetcode.com/problems/length-of-last-word/ */

var lengthOfLastWord = function (s) {
  const sprArr = s.trim().split(" ");
  return sprArr[sprArr.length - 1].length;
};

let s = "as";
console.log(lengthOfLastWord(s));
