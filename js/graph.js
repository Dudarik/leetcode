/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function (points) {
  const distance = (a, b) => Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]);

  let result = 0,
    n = points.length;
  let minCost = [];
  let visited = [];

  for (let i = 0; i < n; i++) {
    minCost[i] = Number.MAX_SAFE_INTEGER;
  }
  minCost[0] = 0;

  current_point = 0;
  while (current_point >= 0) {
    visited[current_point] = true;

    let minCurrent = Number.MAX_SAFE_INTEGER,
      next_point = -1;

    for (let point = 0; point < n; point++) {
      if (visited[point] || point == current_point) continue;

      minCost[point] = Math.min(
        distance(points[current_point], points[point]),
        minCost[point]
      );
      // console.log(minCost.slice());
      if (minCost[point] < minCurrent) {
        minCurrent = minCost[point];
        next_point = point;
      }
    }

    result += minCurrent == Number.MAX_SAFE_INTEGER ? 0 : minCurrent;
    current_point = next_point;
  }

  return result;
};

// let points = [
//   [0, 0],
//   [2, 2],
//   [3, 10],
//   [5, 2],
//   [7, 0],
// ];
// // points = [
// //   [3, 12],
// //   [-2, 5],
// //   [-4, 1],
// // ];

// console.log(minCostConnectPoints(points));

/**1202. Smallest String With Swaps */
/**https://leetcode.com/problems/smallest-string-with-swaps/ */

/**
 * @param {string} s
 * @param {number[][]} pairs
 * @return {string}
 */
var smallestStringWithSwaps = function (s, pairs) {
  const res = [];
  const unionFind = new UnionFind(s.length);

  for (const [x, y] of pairs) {
    unionFind.union(x, y);
  }

  /*
   Create Dictionary
      - key = Parent node
      - value = Array of children nodes sorted in (a-z order)
  */
  unionFind.createParentByIds(s);

  for (let i = 0; i < s.length; i++) {
    /*
      On each iteration
       - Use the union.find(x) operation to locate the parent node
       - Use the parentNode as the key to get all the children nodes
       - Use shift() to get the "Smallest String" char
      */
    res[i] = unionFind.getFirstCharOfParentNode(i);
  }

  return res.join("");
};

class UnionFind {
  constructor(n) {
    this.rank = [];
    this.parent = [];
    this.parentByIds = {};

    for (let i = 0; i < n; i++) {
      this.rank[i] = 1;
      this.parent[i] = i;
    }
  }

  find(x) {
    if (x !== this.parent[x]) {
      this.parent[x] = this.find(this.parent[x]);
    }

    return this.parent[x];
  }

  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);

    if (rootX !== rootY) {
      if (this.rank[rootX] > this.rank[rootY]) {
        this.parent[rootY] = rootX;
      } else if (this.rank[rootX] < this.rank[rootY]) {
        this.parent[rootX] = rootY;
      } else {
        this.parent[rootY] = rootX;
        this.rank[rootX] += 1;
      }
    }
  }

  createParentByIds(s) {
    s = s.split("");

    const { parentByIds } = this.parent.reduce(
      (acc, curr, i) => {
        const char = s[i];
        const parent = this.find(this.parent[curr]);
        if (!acc.parentByIds[parent]) {
          acc.parentByIds[parent] = [char];
        } else {
          acc.parentByIds[parent].push(char);
        }
        return acc;
      },
      { parentByIds: {} }
    );

    const sortedParentByIds = (parentByIds) => {
      return Object.entries(parentByIds).reduce((acc, [key, value]) => {
        acc[key] = value.sort();
        return acc;
      }, {});
    };
    this.parentByIds = sortedParentByIds(parentByIds);
  }

  getFirstCharOfParentNode(i) {
    const parent = this.find(this.parent[i]);
    const children = this.parentByIds[parent];

    return children.shift();
  }
}

// let s = "dcab",
//   pairs = [
//     [0, 3],
//     [1, 2],
//   ];

// console.log(smallestStringWithSwaps(s, pairs));
// Not me
