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
