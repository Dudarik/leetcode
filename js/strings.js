/**844. Backspace String Compare */
/**https://leetcode.com/problems/backspace-string-compare/ */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  let ps = s.length - 1,
    pt = t.length - 1;

  let stackS = [],
    stackT = [];

  s = s.split("");
  t = t.split("");

  for (; ps >= 0 || pt >= 0; ps--, pt--) {
    if (ps >= 0 && s[ps] === "#") {
      stackS.push(s.splice(ps, 1));
    } else if (ps >= 0 && stackS.length) {
      s.splice(ps, 1);
      stackS.pop();
    }

    if (pt >= 0 && t[pt] === "#") {
      stackT.push(t.splice(pt, 1));
    } else if (pt >= 0 && stackT.length) {
      t.splice(pt, 1);
      stackT.pop();
    }
  }

  return s.join() === t.join();
};

// let s = "ab#c",
//   t = "ad#c";
// s = "a#c";
// t = "b";
// s = "ab##";
// t = "c#d#";

// s = "a##c";
// t = "#a#c";

// s = "c##vnvr";
// t = "c##vn#nvr";
// console.log(backspaceCompare(s, t));

/**1641. Count Sorted Vowel Strings */
/**https://leetcode.com/problems/count-sorted-vowel-strings/ */

/**
 * @param {number} n
 * @return {number}
 */
var countVowelStrings = function (n) {
  // let count = 0;

  // const letters = ["a", "e", "i", "o", "u"];

  // const backtrack = (n, pre, index) => {
  //   if (n === 0 || pre > letters[index]) {
  //     count += n === 0 ? 1 : 0;
  //     return;
  //   }
  //   for (let i = index; i < letters.length; i++) {
  //     backtrack(n - 1, letters[i], i);
  //   }
  // };

  // backtrack(n, " ", 0);
  // return count;

  let arr = [1, 1, 1, 1, 1],
    count = 1,
    sum = 5,
    newArr = [1];

  while (count < n) {
    for (let i = 1; i < 5; i++) {
      newArr.push(newArr[i - 1] + arr[i]);
    }

    sum = newArr.reduce((sum, prev) => sum + prev);
    arr = newArr;
    newArr = [1];
    count++;
  }
  return sum;
};

// console.log(countVowelStrings(2));

/**647. Palindromic Substrings */
/**https://leetcode.com/problems/palindromic-substrings/ */

/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  let result = s.length;

  const isPalindrome = (s) => {
    let left = 0,
      right = s.length - 1;

    while (left < right) {
      if (s[left++] !== s[right--]) return false;
    }
    return true;
  };

  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length; j++) {
      if (isPalindrome(s.slice(i, j + 1))) result += 1;
    }
  }

  return result;
};

// console.log(countSubstrings("aabaa"));

/**474. Ones and Zeroes */
/**https://leetcode.com/problems/ones-and-zeroes/ */

/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function (strs, m, n) {
  let dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));

  for (const str of strs) {
    let zero = 0,
      one = 0;

    for (const currChr of str) {
      currChr === "0" ? zero++ : one++;
    }

    for (let i = m; i >= zero; i--) {
      for (let j = n; j >= one; j--) {
        // debugger;
        // console.log(dp);
        dp[i][j] = Math.max(dp[i][j], dp[i - zero][j - one] + 1);
      }
    }
  }
  // console.log(dp);
  return dp[m][n];
};

// console.log(findMaxForm(["10", "0001", "111001", "1", "0"], 5, 3));

/**32. Longest Valid Parentheses */
/**https://leetcode.com/problems/longest-valid-parentheses/ */

/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  let maxCount = 0;
  const stack = [-1];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(i);
    } else {
      stack.pop();
      if (!stack.length) {
        stack.push(i);
      } else {
        maxCount = Math.max(maxCount, i - stack[stack.length - 1]);
      }
    }
  }

  return maxCount;
};

// let s = ")()())";
// s = "(((()))";
// s = "((()))()()))";
// s = "()(()";
// // s = ")()())()()(";

// console.log(longestValidParentheses(s));

/**191. Number of 1 Bits */
/**https://leetcode.com/problems/number-of-1-bits/ */

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  let b0 = (n >> 0) & 0b01010101010101010101010101010101;
  let b1 = (n >> 1) & 0b01010101010101010101010101010101;
  let c = b0 + b1;

  let d0 = (c >> 0) & 0b00110011001100110011001100110011;
  let d2 = (c >> 2) & 0b00110011001100110011001100110011;
  let e = d0 + d2;

  let f0 = (e >> 0) & 0b00001111000011110000111100001111;
  let f4 = (e >> 4) & 0b00001111000011110000111100001111;
  let g = f0 + f4;

  let h0 = (g >> 0) & 0b00000000111111110000000011111111;
  let h8 = (g >> 8) & 0b00000000111111110000000011111111;
  let i = h0 + h8;

  let j0 = (i >> 0) & 0b00000000000000001111111111111111;
  let j16 = (i >> 16) & 0b00000000000000001111111111111111;
  let k = j0 + j16;

  return k;
};

// let n = 0b00000000000000000000000000001011;
// n = 0b11111111111111111111111111111101;
// n = 0b0110110010111010;

// n = 00000000000000000000000010000000;
// console.log(hammingWeight(n));

/**1461. Check If a String Contains All Binary Codes of Size K */
/**https://leetcode.com/problems/check-if-a-string-contains-all-binary-codes-of-size-k/ */

var hasAllCodes = function (s, k) {
  if (s.length < k) return false;

  const store = new Set();

  for (let i = 0; i <= s.length - k; i++) {
    store.add(s.slice(i, i + k));
  }
  return store.size === Math.pow(2, k);
};

// let s = "00110110",
//   k = 2;
// s = "00110";

// console.log(hasAllCodes(s, k));

/**1332. Remove Palindromic Subsequences */
/**https://leetcode.com/problems/remove-palindromic-subsequences/ */

/**
 * @param {string} s
 * @return {number}
 */
var removePalindromeSub = function (s) {
  let pLeft = 0,
    pRight = s.length - 1;
  while (pLeft < pRight) {
    if (s[pLeft] == s[pRight]) {
      pLeft++;
      pRight--;
    } else {
      return 2;
    }
  }
  return 1;
};

// let s = "baabbab"; // return 2
//s = "abb"; //return 2
// s = "ababa"; //return 1

// console.log(removePalindromeSub(s));

/**1689. Partitioning Into Minimum Number Of Deci-Binary Numbers */
/**https://leetcode.com/problems/partitioning-into-minimum-number-of-deci-binary-numbers/ */

/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function (n) {
  return Math.max(...n);
};

let n = "32";
// Output: 3

// n = "82734";
// Output: 8

// n = "27346209830709182346";
// Output: 9

console.log(minPartitions(n));
