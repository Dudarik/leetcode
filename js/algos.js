/**509. Fibonacci Number */
/**https://leetcode.com/problems/fibonacci-number/ */

/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  return n === 0 ? 0 : n <= 2 ? 1 : fib(n - 1) + fib(n - 2);
};

// let n = 2;
// // Output: 1

// // n = 3;
// // Output: 2

// // n = 4;
// // Output: 3

// // n = 0;

// console.log(fib(n));
