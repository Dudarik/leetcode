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

let points = [
  [0, 0],
  [2, 2],
  [3, 10],
  [5, 2],
  [7, 0],
];
// points = [
//   [3, 12],
//   [-2, 5],
//   [-4, 1],
// ];

console.log(minCostConnectPoints(points));
