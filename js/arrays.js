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

/**1480. Running Sum of 1d Array */
/**https://leetcode.com/problems/running-sum-of-1d-array/ */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  for (let i = 1; i < nums.length; i++) nums[i] += nums[i - 1];

  return nums;
};

// let nums = [1, 2, 3, 4];
// console.log(runningSum(nums));

/**867. Transpose Matrix */
/**https://leetcode.com/problems/transpose-matrix/ */

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function (matrix) {
  const resultMatrix = [];
  for (let i = 0; i < matrix[0].length; i++) {
    resultMatrix.push([]);
    for (let j = 0; j < matrix.length; j++) {
      resultMatrix[i].push(matrix[j][i]);
    }
  }
  return resultMatrix;
};
// let matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
// ];

// console.table(transpose(matrix));

/**304. Range Sum Query 2D - Immutable */
/**https://leetcode.com/problems/range-sum-query-2d-immutable/ */

/**
 * @param {number[][]} matrix
 */
var NumMatrix = function (matrix) {
  this.store = matrix;
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
  let result = 0;
  for (let i = row1; i <= row2; i++) {
    for (let j = col1; j <= col2; j++) {
      result += this.store[i][j];
    }
  }
  return result;
};

const NM = function (matrix) {
  let m = matrix.length;
  let n = matrix[0].length;
  this.arr = Array.from({ length: m + 1 }).map((item) =>
    new Array(n + 1).fill(0)
  );
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      this.arr[i + 1][j + 1] =
        this.arr[i][j + 1] + this.arr[i + 1][j] + matrix[i][j] - this.arr[i][j];
    }
  }
  console.log(this.arr);
};

NM.prototype.sumRegion = function (row1, col1, row2, col2) {
  return (
    this.arr[row2 + 1][col2 + 1] +
    this.arr[row1][col1] -
    this.arr[row1][col2 + 1] -
    this.arr[row2 + 1][col1]
  );
};

// const numMatrix = new NM([
//   [3, 0, 1, 4, 2],
//   [5, 6, 3, 2, 1],
//   [1, 2, 0, 1, 5],
//   [4, 1, 0, 1, 7],
//   [1, 0, 3, 0, 5],
// ]);

// console.log(numMatrix.sumRegion(2, 1, 4, 3));
// console.log(numMatrix.sumRegion(1, 1, 2, 2));
// console.log(numMatrix.sumRegion(1, 2, 2, 4));

/**51. N-Queens */
/**https://leetcode.com/problems/n-queens/ */

/**
 * @param {number} n
 * @return {string[][]}
 *
 */
var solveNQueens = function (n) {
  const res = [];
  const board = new Array(n).fill(0).map(() => new Array(n).fill("."));
  const backtrack = (row) => {
    if (row == board.length) {
      res.push(board.map((row) => row.join("")));
      return;
    }
    for (let col = 0; col < n; col++) {
      if (!isValid(row, col)) {
        continue;
      }
      board[row][col] = "Q";
      backtrack(row + 1);
      board[row][col] = ".";
    }
  };
  const isValid = (row, col) => {
    for (let i = 0; i < n; i++) {
      if (board[i][col] == "Q") return false;
    }
    for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
      if (board[i][j] == "Q") return false;
    }
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] == "Q") return false;
    }
    return true;
  };
  backtrack(0);
  return res;
};

/**167. Two Sum II - Input Array Is Sorted */
/**https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/ */

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let id1 = 0,
    id2 = numbers.length - 1;

  while (id1 < id2) {
    const sum = numbers[id1] + numbers[id2];
    if (sum === target) return [++id1, ++id2];

    sum < target ? id1++ : id2--;
  }
};

// let numbers = [2, 7, 11, 15],
//   target = 9;

// (numbers = [2, 3, 4]), (target = 6);

// (numbers = [-1, 0]), (target = -1);
// console.log(twoSum(numbers, target));

/**1658. Minimum Operations to Reduce X to Zero */
/**https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/ */

/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minOperations = function (nums, x) {
  const len = nums.length;

  let total = 0;

  for (let i = 0; i < len; i++) total += nums[i];

  if (total < x) return -1;

  let i = 0,
    result = -1,
    tSum = 0;

  const map = new Map([[0, -1]]);

  while (i < len) {
    tSum += nums[i];
    map.set(tSum, i);
    // console.log(map, tSum, total, x);
    if (map.has(tSum - total + x)) {
      result = Math.max(result, i - map.get(tSum - total + x));
    }
    i++;
  }
  return result === -1 ? -1 : len - result;
};

// let nums = [1, 1, 4, 2, 3],
//   x = 5; //return 2

// (nums = [5, 6, 7, 8, 9]), (x = 4); //return -1

// (nums = [3, 2, 20, 1, 1, 3]), (x = 10); // return 5

// console.log(minOperations(nums, x));

/**406. Queue Reconstruction by Height */
/**https://leetcode.com/problems/queue-reconstruction-by-height/ */

/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function (people) {
  const result = [];

  people
    .sort((a, b) => (a[0] != b[0] ? b[0] - a[0] : a[1] - b[1]))
    .forEach((p) => result.splice(p[1], 0, p));

  return result;
};

// let people = [
//   [6, 0],
//   [5, 0],
//   [4, 0],
//   [3, 2],
//   [2, 2],
//   [1, 4],
// ];
// Output: [[4,0],[5,0],[2,2],[3,2],[1,4],[6,0]]

// people = [
//   [7, 0],
//   [4, 4],
//   [7, 1],
//   [5, 0],
//   [6, 1],
//   [5, 2],
// ];
// Output: [[5,0],[7,0],[5,2],[6,1],[4,4],[7,1]]

// console.log(reconstructQueue(people));

/**462. Minimum Moves to Equal Array Elements II */
/**https://leetcode.com/problems/minimum-moves-to-equal-array-elements-ii/ */

/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function (nums) {
  nums.sort((a, b) => a - b);

  let mid = Math.round(nums.length / 2);

  let cnt = 0;
  for (let i = 0; i < mid; i++) {
    cnt += nums[nums.length - 1 - i] - nums[i];
  }

  return cnt;
};

// let nums = [1, 2, 3];
// //Output: 2

// nums = [1, 10, 2, 9];
// //Output: 16

// nums = [1, 10, 2, 9, 2, 2, 2, 3];

// console.log(minMoves2(nums));

/**1465. Maximum Area of a Piece of Cake After Horizontal and Vertical Cuts */
/**https://leetcode.com/problems/maximum-area-of-a-piece-of-cake-after-horizontal-and-vertical-cuts/ */

/**
 * @param {number} h
 * @param {number} w
 * @param {number[]} horizontalCuts
 * @param {number[]} verticalCuts
 * @return {number}
 */
var maxArea = function (h, w, horizontalCuts, verticalCuts) {
  horizontalCuts.push(0, h);
  verticalCuts.push(0, w);

  horizontalCuts.sort((a, b) => a - b);
  verticalCuts.sort((a, b) => a - b);

  let maxDiffW = 0;
  let maxDiffH = 0;

  for (let i = 0; i < verticalCuts.length - 1; i++) {
    maxDiffW = Math.max(maxDiffW, verticalCuts[i + 1] - verticalCuts[i]);
  }

  for (let i = 0; i < horizontalCuts.length - 1; i++) {
    maxDiffH = Math.max(maxDiffH, horizontalCuts[i + 1] - horizontalCuts[i]);
  }
  // console.log(maxDiffH, maxDiffW);
  return (BigInt(maxDiffW) * BigInt(maxDiffH)) % 1000000007n;
};

// let h = 5,
//   w = 4,
//   horizontalCuts = [1, 2, 4],
//   verticalCuts = [1, 3];
// // Output: 4

// (h = 5), (w = 4), (horizontalCuts = [1, 3]), (verticalCuts = [1]);
// //Output: 6

// (h = 5), (w = 4), (horizontalCuts = [3]), (verticalCuts = [3]);
// //Output: 9

// console.log(maxArea(h, w, horizontalCuts, verticalCuts));

/**1710. Maximum Units on a Truck */
/**https://leetcode.com/problems/maximum-units-on-a-truck/ */

/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function (boxTypes, truckSize) {
  let result = 0,
    curr = 0;

  boxTypes.sort((a, b) => b[1] - a[1]);

  for (let i = 0; i < boxTypes.length; i++) {
    const count =
      boxTypes[i][0] > truckSize - curr ? truckSize - curr : boxTypes[i][0];

    curr += count;

    result += count * boxTypes[i][1];

    if (curr >= truckSize) break;
  }

  return result;
};

// let boxTypes = [
//     [1, 3],
//     [2, 2],
//     [3, 1],
//   ],
//   truckSize = 4;
// //Output: 8

// (boxTypes = [
//   [5, 10],
//   [2, 5],
//   [4, 7],
//   [3, 9],
// ]),
//   (truckSize = 10);
// // Output: 91

// boxTypes = [
//   [1, 3],
//   [5, 5],
//   [2, 5],
//   [4, 2],
//   [4, 1],
//   [3, 1],
//   [2, 2],
//   [1, 3],
//   [2, 5],
//   [3, 2],
// ];
// truckSize = 35;

// console.log(maximumUnits(boxTypes, truckSize));

/**376. Wiggle Subsequence */
/**https://leetcode.com/problems/wiggle-subsequence/ */

/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function (nums) {
  let length = 1;
  let flag = null;

  for (let i = 1; i < nums.length; ++i) {
    if (nums[i] === nums[i - 1]) continue;

    if (nums[i] > nums[i - 1]) {
      if (flag !== true) {
        flag = true;
        ++length;
      }
    } else {
      if (flag !== false) {
        flag = false;
        ++length;
      }
    }
  }

  return length;
  // if (!nums.length) return 0;
  // if (nums.length === 1) return 1;

  // const resArr = [];

  // for (let i = 1; i < nums.length; i++) {
  //   const curr = nums[i] - nums[i - 1];
  //   // debugger;
  //   if (!resArr.length) {
  //     if (curr != 0) resArr.push([nums[i], curr], [nums[i - 1], curr]);
  //     else resArr.push([nums[i - 1], curr]);
  //     continue;
  //   }

  //   if (curr === 0) continue;

  //   if (curr < 0) {
  //     if (resArr[resArr.length - 1][1] >= 0) resArr.push([nums[i - 1], curr]);
  //     else continue;
  //   }
  //   if (curr > 0) {
  //     if (resArr[resArr.length - 1][1] <= 0) resArr.push([nums[i - 1], curr]);
  //     else continue;
  //   }
  // }

  // return resArr.length;
};

// let nums = [1, 7, 4, 9, 2, 5];
// //Output: 6

// nums = [1, 17, 5, 10, 13, 15, 10, 5, 16, 8];
// // Output: 7

// // nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// // Output: 2

// // nums = [0, 0];
// // Output: 1

// // nums = [1, 7, 4, 9, 2, 5];
// // Output: 6

// // nums = [3, 3, 3, 2, 5];
// // Output: 3

// console.log(wiggleMaxLength(nums));

/**135. Candy */
/**https://leetcode.com/problems/candy/ */

/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  let nTotal = ratings.length;

  const cntCandys = new Array(nTotal).fill(1);
  // debugger;
  for (let i = 1; i < ratings.length; i++) {
    if (ratings[i] > ratings[i - 1]) {
      nTotal -= cntCandys[i];

      cntCandys[i] = cntCandys[i - 1] + 1;

      nTotal += cntCandys[i];
    }
  }

  for (let i = ratings.length - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1] && cntCandys[i] <= cntCandys[i + 1]) {
      nTotal -= cntCandys[i];

      cntCandys[i] = cntCandys[i + 1] + 1;

      nTotal += cntCandys[i];
    }
  }

  return nTotal;
};

// let ratings = [1, 0, 2];
// // Output: 5

// ratings = [1, 2, 2];
// // Output: 4

// console.log(candy(ratings));

/**128. Longest Consecutive Sequence */
/**https://leetcode.com/problems/longest-consecutive-sequence/ */

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return 1;

  nums.sort((a, b) => a - b);
  let maxCount = 0,
    currCount = 1;
  // debugger;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i + 1] === nums[i]) continue;
    if (nums[i + 1] - nums[i] === 1) {
      currCount++;
    } else {
      currCount = 1;
    }
    maxCount = Math.max(maxCount, currCount);
  }
  return maxCount;
};

// let nums = [100, 4, 200, 1, 3, 2];
// //Output: 4

// // nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
// //Output: 9

// // nums = [0, 0, 1];

// // nums = [1, 2, 0, 1];

// console.log(longestConsecutive(nums));

/**473. Matchsticks to Square */
/**https://leetcode.com/problems/matchsticks-to-square/ */

/**
 * @param {number[]} matchsticks
 * @return {boolean}
 */
var makesquare = function (matchsticks) {
  if (matchsticks.length < 4) return false;

  let msSum = matchsticks.reduce((p, c) => p + c, 0);

  if (msSum % 4 !== 0) return false;

  const sizeOfSide = msSum / 4;

  let a = (b = c = d = sizeOfSide); // square sides

  matchsticks.sort((a, b) => b - a);

  const travers = (matchsticks, i) => {
    // debugger;
    if (i === matchsticks.length) {
      return a === 0 && b === 0 && c === 0 && d === 0 ? true : false;
    }

    if (matchsticks[i] <= a) {
      a -= matchsticks[i];
      if (travers(matchsticks, i + 1)) return true;
      a += matchsticks[i];
    }
    if (matchsticks[i] <= b) {
      b -= matchsticks[i];
      if (travers(matchsticks, i + 1)) return true;
      b += matchsticks[i];
    }
    if (matchsticks[i] <= c) {
      c -= matchsticks[i];
      if (travers(matchsticks, i + 1)) return true;
      c += matchsticks[i];
    }
    if (matchsticks[i] <= d) {
      d -= matchsticks[i];
      if (travers(matchsticks, i + 1)) return true;
      d += matchsticks[i];
    }

    return false;
  };

  return travers(matchsticks, 0);
};

// let matchsticks = [1, 1, 2, 2, 2];
// // Output: true

// // matchsticks = [3, 3, 3, 3, 4];
// // Output: false

// // matchsticks = [2, 2, 2, 2, 2, 2, 3, 1];

// console.log(makesquare(matchsticks));

/**629. K Inverse Pairs Array */
/**https://leetcode.com/problems/k-inverse-pairs-array/ */

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kInversePairs = function (n, k) {
  if (k === 0) return 1;
  if (n === 1) return 0;

  const modulo = 1e9 + 7;

  let dp_old = new Array(k + 1).fill(0);
  let dp_new = new Array(k + 1).fill(0);

  dp_old[0] = dp_new[0] = 1;

  for (let i = 1; i < n; i++) {
    for (let j = 1; j <= k; j++) {
      dp_new[j] = (dp_old[j] + dp_new[j - 1]) % modulo;

      if (i < j) dp_new[j] = (modulo + dp_new[j] - dp_old[j - i - 1]) % modulo;
    }
    [dp_old, dp_new] = [dp_new, dp_old];
  }
  // console.log(dp_new, dp_old, k, modulo);
  return dp_old[k] % modulo;
};

// let n = 3,
//   k = 1;
// Output: 1

// console.log(kInversePairs(n, k));
// // Output: 1

// console.log(kInversePairs(n, k));

/**118. Pascal's Triangle */
/**https://leetcode.com/problems/pascals-triangle/ */

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  if (numRows === 1) return [[1]];
  if (numRows === 2) return [[1], [1, 1]];

  const resArr = [[1], [1, 1]];

  for (let i = 3; i <= numRows; i++) {
    const tArr = resArr[1].slice();
    // debugger;
    let k = 0;
    do {
      tArr.splice(k + 1, 0, resArr[i - 2][k] + resArr[i - 2][k + 1]);
      k++;
    } while (k < resArr[i - 2].length - 1);

    k = 0;
    resArr.push(tArr);
  }

  return resArr;
};

// let numRows = 5;
// // Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

// // numRows = 1;
// // Output: [[1]]

// console.log(generate(numRows));

/**792. Number of Matching Subsequences */
/**https://leetcode.com/problems/number-of-matching-subsequences/ */

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function (s, words) {
  let count = 0;

  for (let i = 0; i < words.length; i++) {
    let pW = (pS = 0);

    while (pW < words[i].length && pS < s.length) {
      if (words[i][pW] === s[pS]) {
        pW += 1;
        pS += 1;
      } else {
        pS += 1;
      }
    }

    if (pW === words[i].length) count += 1;
  }
  return count;
};

// let s = "abcde",
//   words = ["a", "bb", "acd", "ace"];
// // Output: 3

// // (s = "dsahjpjauf"), (words = ["ahjpjau", "ja", "ahbwzgqnuk", "tnmlanowax"]);
// // Output: 2
// console.log(numMatchingSubseq(s, words));

/**315. Count of Smaller Numbers After Self */
/**https://leetcode.com/problems/count-of-smaller-numbers-after-self/ */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function (nums) {
  const lenNums = nums.length;
  const resArr = new Array(lenNums).fill(0);
  const tArr = [];

  const lowerBound = (arr, target) => {
    let left = 0;
    let right = arr.length;

    while (left < right) {
      const mid = Math.floor((right + left) / 2);
      target <= arr[mid] ? (right = mid) : (left = mid + 1);
    }

    return left;
  };

  for (let i = lenNums - 1; i >= 0; i--) {
    const id = lowerBound(tArr, nums[i]);
    resArr[i] = id;
    tArr.splice(id, 0, nums[i]);
  }
  return resArr;
};

// let nums = [5, 2, 6, 1];
// // Output: [2,1,1,0]

// nums = [-1];
// // Output: [0]

// nums = [-1, -1];
// // Output: [0,0]

// console.log(countSmaller(nums));

/**34. Find First and Last Position of Element in Sorted Array */
/**https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/ */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @param {bool} getFirst //getFirst === true - get first, false - get last
   * @return {number[]}
   */
  const getId = (nums, target, getFirst) => {
    let start = 0,
      end = nums.length - 1,
      retVal = -1;

    while (start <= end) {
      let mid = start + Math.floor((end - start) / 2);
      if (nums[mid] === target) {
        retVal = mid;
        if (getFirst) end = mid - 1;
        else start = mid + 1;
      } else if (nums[mid] > target) end = mid - 1;
      else start = mid + 1;
    }
    return retVal;
  };

  const first = getId(nums, target, true);

  if (first === -1) return [-1, -1];

  const last = getId(nums, target, false);

  return [first, last];
};

// let nums = [5, 7, 7, 8, 8, 10],
//   target = 8;
// // Output: [3,4]

// (nums = [5, 7, 7, 8, 8, 10]), (target = 6);
// // Output: [-1,-1]

// (nums = []), (target = 0);
// // Output: [-1,-1]

// console.log(searchRange(nums, target));
