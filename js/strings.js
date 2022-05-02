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

let s = "ab#c",
  t = "ad#c";
s = "a#c";
t = "b";
s = "ab##";
t = "c#d#";

s = "a##c";
t = "#a#c";

s = "c##vnvr";
t = "c##vn#nvr";
console.log(backspaceCompare(s, t));
