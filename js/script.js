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

// let s = "a";
// console.log(lengthOfLastWord(s));

/**11. Container With Most Water */
/**https://leetcode.com/problems/container-with-most-water/ */

var maxArea = function (height) {
  let left = 0,
    right = height.length - 1,
    result = 0;
  while (left < right) {
    let diff = right - left;
    result = Math.max(result, Math.min(height[left], height[right]) * diff);
    if (height[left] >= height[right]) {
      right--;
    } else {
      left++;
    }
  }
  return result;
};

// let height = [1, 8, 6, 2, 5, 4, 8, 20, 7];
// // height = [1, 1];

// console.log(maxArea(height));

/**18. 4Sum */
/**https://leetcode.com/problems/4sum/ */

var fourSum = function (nums, target) {
  if (nums.length < 4) return [];

  nums.sort((a, b) => a - b);

  const hashMap = new Map();

  const hashRes = (i1, i2, i3, i4) => `${i1}-${i2}-${i3}-${i4}`;
  // debugger;
  for (let i = 0; i < nums.length - 3; i++) {
    if (i != 0 && nums[i] == nums[i - 1]) continue;

    for (let j = i + 1; j < nums.length - 2; j++) {
      let left = j + 1,
        right = nums.length - 1;
      while (left < right) {
        const sum = nums[i] + nums[j] + nums[left] + nums[right];

        if (sum === target) {
          hashMap.set(hashRes(nums[i], nums[j], nums[left], nums[right]), [
            nums[i],
            nums[j],
            nums[left],
            nums[right],
          ]);

          left++;
        } else if (sum > target) {
          right--;
        } else {
          left++;
        }
      }
    }
  }

  return Array.from(hashMap.values());
};

// let nums = [1, 0, -1, 0, -2, 2],
//   target = 0;
// let nums = [2, 2, 2, 2, 2],
//   target = 8;

// let nums = [1, -5, 3, -3, 4, 5, 2],
//   target = 14;
// console.log(fourSum(nums, target));

/**66. Plus One */
/**https://leetcode.com/problems/plus-one/ */

var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i] += 1;
      return digits;
    } else {
      digits[i] = 0;
    }
  }

  digits.unshift(1);
  return digits;
};

let digits = [1, 2, 3];
digits = [4, 3, 2, 1];
digits = [9];
