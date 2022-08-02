/**1091. Shortest Path in Binary Matrix */
/**https://leetcode.com/problems/shortest-path-in-binary-matrix/ */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function (grid) {
  if (grid[0][0] === 1) return -1;

  let result = 0;
  let path = 1;

  const rows = grid.length;
  const cols = grid[0].length;

  const q = [[0, 0]];

  while (q.length) {
    let len = q.length;
    while (len--) {
      const [r, c] = q.shift();

      if (r === rows - 1 && c === cols - 1) return path;

      dfs(r, c + 1);
      dfs(r, c - 1);
      dfs(r + 1, c);
      dfs(r - 1, c);
      dfs(r + 1, c + 1);
      dfs(r - 1, c - 1);
      dfs(r + 1, c - 1);
      dfs(r - 1, c + 1);
    }
    path++;
  }

  function dfs(r, c) {
    if (c < 0 || c >= cols || r < 0 || r >= rows || grid[r][c] === 1) return;

    grid[r][c] = 1;

    q.push([r, c]);
  }

  return -1;
};

/**1074. Number of Submatrices That Sum to Target */
/**https://leetcode.com/problems/number-of-submatrices-that-sum-to-target/ */

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {number}
 */
var numSubmatrixSumTarget = function (matrix, target) {};

// let matrix = [
//     [0, 1, 0],
//     [1, 1, 1],
//     [0, 1, 0],
//   ],
//   target = 0;
// Output: 4

// matrix = [[1,-1],[-1,1]], target = 0
// Output: 5

// matrix = [[904]], target = 0
// Output: 0

/**240. Search a 2D Matrix II */
/**https://leetcode.com/problems/search-a-2d-matrix-ii/ */
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let row = 0,
    col = matrix[0].length - 1;
  // debugger;
  while (col >= 0 && row < matrix.length) {
    if (matrix[row][col] === target) return true;
    else if (matrix[row][col] < target) row++;
    else col--;
  }

  return false;
};

// let matrix = [
//     [1, 4, 7, 11, 15],
//     [2, 5, 8, 12, 19],
//     [3, 6, 9, 16, 22],
//     [10, 13, 14, 17, 24],
//     [18, 21, 23, 26, 30],
//   ],
//   target = 5;
// // Output: true

// // (matrix = [
// //   [1, 4, 7, 11, 15],
// //   [2, 5, 8, 12, 19],
// //   [3, 6, 9, 16, 22],
// //   [10, 13, 14, 17, 24],
// //   [18, 21, 23, 26, 30],
// // ]),
// //   (target = 20);
// // Output: false

// (matrix = [[-1, 3]]), (target = 3);

// console.log(searchMatrix(matrix, target));

/**378. Kth Smallest Element in a Sorted Matrix */
/**https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/ */

/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
  const n = matrix.length;
  let low = matrix[0][0];
  let high = matrix[n - 1][n - 1];
  // debugger;
  const countLow = (matrix, target) => {
    let count = 0,
      i = n - 1,
      j = 0;

    while (i >= 0 && j < n) {
      if (matrix[i][j] > target) i--;
      else {
        count += i + 1;
        j++;
      }
    }
    return count;
  };

  while (low < high) {
    // debugger;
    const mid = Math.floor(low + (high - low) / 2);
    const count = countLow(matrix, mid);

    if (count < k) low = mid + 1;
    else high = mid;
  }
  return low;
};

let matrix = [
    [1, 5, 9],
    [10, 11, 13],
    [12, 13, 15],
  ],
  k = 8;
// Output: 13

// (matrix = [[-5]]), (k = 1);
// Output: -5;

// (matrix = [
//   [1, 2],
//   [1, 3],
// ]),
//   (k = 2);
// Output: 1;

// (matrix = [
//   [1, 2],
//   [3, 3],
// ]),
//   (k = 2);
// Output: 2

// (matrix = [
//   [1, 2],
//   [1, 3],
// ]),
//   (k = 3);
// Output: 2

console.log(kthSmallest(matrix, k));
