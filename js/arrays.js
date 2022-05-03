/**905. Sort Array By Parity */
/**https://leetcode.com/problems/sort-array-by-parity/ */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
  return nums.sort((a) => (a % 2 ? 1 : -1));
};

// let nums = [3, 1, 2, 4];
// nums = [0];
// console.log(sortArrayByParity(nums));

/**581. Shortest Unsorted Continuous Subarray */
/**https://leetcode.com/problems/shortest-unsorted-continuous-subarray/ */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
  const tArr = [...nums].sort((a, b) => a - b);

  let low = Number.MAX_SAFE_INTEGER,
    high = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != tArr[i]) {
      low = Math.min(low, i);
      high = Math.max(high, i);
    }
  }

  return low === Number.MAX_SAFE_INTEGER || high === Number.MIN_SAFE_INTEGER
    ? 0
    : high - low + 1;
};

// let nums = [2, 6, 4, 8, 10, 9, 15];
// nums = [1];
//  nums = [1, 2, 3, 4];
// console.log(findUnsortedSubarray(nums));
