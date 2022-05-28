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

/**1679. Max Number of K-Sum Pairs */
/**https://leetcode.com/problems/max-number-of-k-sum-pairs/ */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
  nums.sort((a, b) => a - b);

  let left = 0,
    right = nums.length - 1,
    count = 0;

  while (left < right) {
    if (nums[left] + nums[right] === k) {
      left++;
      right--;
      count++;
    } else if (nums[left] + nums[right] > k) right--;
    else left++;
  }
  return count;
};

// let nums = [1, 2, 3, 4];
// k = 5;

// nums = [3, 1, 3, 4, 3];
// k = 6;

// console.log(maxOperations(nums, k));

/**47. Permutations II */
/**https://leetcode.com/problems/permutations-ii/ */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  let res = [];

  permutations(nums, [], res);
  return res;
};

function permutations(nums, set, res) {
  let visited = {};

  for (let i = 0; i < nums.length; i++) {
    visited[nums[i]] = false;
  }

  if (!nums.length) {
    res.push(set);
    return;
  }

  for (let k = 0; k < nums.length; k++) {
    let numsCopy = [...nums];
    let num = numsCopy.splice(k, 1)[0];
    if (!visited[num]) {
      permutations(numsCopy, [...set, num], res);
      visited[num] = true;
    }
  }
}

/**354. Russian Doll Envelopes */
/**https://leetcode.com/problems/russian-doll-envelopes/ */

/**
 * @param {number[][]} envelopes
 * @return {number}
 */

var maxEnvelopes = function (envelopes) {
  envelopes.sort((a, b) => {
    if (a[0] === b[0]) {
      return b[1] - a[1];
    }
    return a[0] - b[0];
  });

  const tails = [];

  for (let i = 0; i < envelopes.length; i++) {
    const [w, h] = envelopes[i];

    if (h < tails[0]) {
      tails[0] = h;
    } else if (!tails.length || h > tails[tails.length - 1]) {
      tails.push(h);
    } else {
      // find insertion index
      let l = 0;
      let r = tails.length - 1;
      while (l < r) {
        let mid = ((l + r) / 2) >> 0;
        if (tails[mid] >= h) {
          r = mid;
        } else {
          l = mid + 1;
        }
      }
      tails[r] = h;
    }
  }

  return tails.length;
};

/**268. Missing Number */
/**https://leetcode.com/problems/missing-number/ */

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  return (
    (nums.length * (nums.length + 1)) / 2 -
    nums.reduce((sum, curr) => sum + curr)
  );
};

// let nums = [9, 6, 4, 2, 3, 5, 7, 0, 1];
// // nums = [3, 0, 1];
// console.log(missingNumber(nums));
