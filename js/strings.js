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
