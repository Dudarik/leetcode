/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} val
 * @param {TreeNode} left
 * @param {TreeNode} right
 * @return {TreeNode}
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// 230. Kth Smallest Element in a BST ****************************************************************************
//https://leetcode.com/problems/kth-smallest-element-in-a-bst/

const kthSmallestTree = new TreeNode(
  3,
  new TreeNode(1, null, new TreeNode(2, null, null)),
  new TreeNode(4, null, null)
);

const kthSmallestTree2 = new TreeNode(
  5,
  new TreeNode(3, new TreeNode(2, new TreeNode(1)), new TreeNode(4)),
  new TreeNode(6)
);

let k = 1;

var kthSmallest = function (root, k) {
  let result = -1;
  let count = 0;

  const dfs = (root, k) => {
    if (root === null) return;
    dfs(root.left, k);
    count++;

    if (count === k) {
      result = root.val;
      return;
    }
    dfs(root.right, k);
  };

  dfs(root, k);
  return result;
};

//*****************99. Recover Binary Search Tree*************************************************** */
//https://leetcode.com/problems/recover-binary-search-tree/

const recoverTreeTree = new TreeNode(1, new TreeNode(3, null, new TreeNode(2)));

const recoverTreeTree2 = new TreeNode(
  3,
  new TreeNode(1),
  new TreeNode(4, new TreeNode(2))
);

var recoverTree = function (root) {
  let prev = null,
    first = null,
    second = null;

  const inOrder = (root) => {
    if (root === null) return;

    inOrder(root.left);

    if (prev !== null && root.val < prev.val) {
      if (first === null) {
        first = prev;
      }

      second = root;
    }

    prev = root;
    inOrder(root.right);
  };

  inOrder(root);

  let t = first.val;
  first.val = second.val;
  second.val = t;

  return root;
};

// console.log(recoverTree(recoverTreeTree2));

/*173. Binary Search Tree Iterator****************************** */
/*https://leetcode.com/problems/binary-search-tree-iterator/* */

const iteratorTree = new TreeNode(
  7,
  new TreeNode(3),
  new TreeNode(15, new TreeNode(9), new TreeNode(20))
);

var BSTIterator = function (root) {
  this.stack = [];
  let node = root;
  this.updateStack(node);
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function () {
  let toRemove = this.stack.pop();
  this.updateStack(toRemove.right);
  return toRemove.val;
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
  return this.stack.length !== 0;
};

BSTIterator.prototype.updateStack = function (node) {
  while (node !== null) {
    this.stack.push(node);
    node = node.left;
  }
};
// const bst = new BSTIterator(iteratorTree);
// console.log(bst.next());
// console.log(bst.next());
// console.log(bst.hasNext());
// console.log(bst.next()); // return 9
// console.log(bst.hasNext()); // return True
// console.log(bst.next()); // return 15
// console.log(bst.hasNext()); // return True
// console.log(bst.next()); // return 20
// console.log(bst.hasNext());

/**1302. Deepest Leaves Sum */
/**https://leetcode.com/problems/deepest-leaves-sum/ */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var deepestLeavesSum = function (root) {
  let deep = 1,
    maxSum = 0;

  const traversDFS = (root, currentLevel) => {
    if (!root) return;

    traversDFS(root.left, currentLevel + 1);

    if (currentLevel === deep) {
      maxSum += root.val;
    } else if (currentLevel > deep) {
      deep = currentLevel;
      maxSum = root.val;
    }

    traversDFS(root.right, currentLevel + 1);
  };

  traversDFS(root, deep);

  return maxSum;
};

// root = [1,2,3,4,5,null,6,7,null,null,null,null,8]

// const root = new TreeNode(
//   1,
//   new TreeNode(2, new TreeNode(4, new TreeNode(7)), new TreeNode(5)),
//   new TreeNode(3, null, new TreeNode(6, null, new TreeNode(8)))
// );

// root = [6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]

// const root = new TreeNode(
//   6,
//   new TreeNode(
//     7,
//     new TreeNode(2, new TreeNode(9)),
//     new TreeNode(7, new TreeNode(1), new TreeNode(4))
//   ),
//   new TreeNode(8, new TreeNode(1), new TreeNode(3, null, new TreeNode(5)))
// );
// console.log(deepestLeavesSum(root));

/**199. Binary Tree Right Side View */
/**https://leetcode.com/problems/binary-tree-right-side-view/ */

var rightSideView = function (root) {
  if (!root) return [];

  const levels = [];

  const dfs = (node, level = 0) => {
    if (!node) return;

    levels[level] = node.val;
    dfs(node.left, level + 1);
    dfs(node.right, level + 1);
  };

  dfs(root);

  return levels;
};

// const tree = new TreeNode(
//   1,
//   new TreeNode(2, null, new TreeNode(5)),
//   new TreeNode(3, null, new TreeNode(4))
// );

// //Output: [1,3,4]

// // const tree = new TreeNode(1, null, new TreeNode(3));
// // Output: [1,3]

// console.log(rightSideView(tree));

/**105. Construct Binary Tree from Preorder and Inorder Traversal */
/**https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/ */

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  if (!inorder.length || !preorder.length) return null;
  // debugger;
  const root = new TreeNode(preorder[0]);
  const middle = inorder.indexOf(root.val);

  root.left = buildTree(
    preorder.slice(1, middle + 1),
    inorder.slice(0, middle + 1)
  );
  root.right = buildTree(preorder.slice(middle + 1), inorder.slice(middle + 1));
  return root;
};

// let preorder = [3, 9, 20, 15, 7],
//   inorder = [9, 3, 15, 20, 7];
// // Output: [3,9,20,null,null,15,7]

// // (preorder = [-1]), (inorder = [-1]);
// // Output: [-1]
// console.log(buildTree(preorder, inorder));

/**236. Lowest Common Ancestor of a Binary Tree */
/**https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/ */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  // console.log(root);
  if (!root || root === p || root === q) return root;
  var resL = lowestCommonAncestor(root.left, p, q);
  var resR = lowestCommonAncestor(root.right, p, q);
  console.log(resL, resR);
  return resL && resR ? root : resL || resR;
};

// [3,5,1,6,2,0,8,null,null,7,4],
// let root = new TreeNode(
//   3,
//   new TreeNode(
//     5,
//     new TreeNode(6),
//     new TreeNode(2, new TreeNode(7), new TreeNode(4))
//   ),
//   new TreeNode(1),
//   new TreeNode(0),
//   new TreeNode(8)
// );
// let p = 5,
//   q = 1;
// // Output: 3

// // (root = new TreeNode(1, new TreeNode(2))), (p = 1), (q = 2);
// // Output: 1
// console.log(lowestCommonAncestor(root, p, q));

/**114. Flatten Binary Tree to Linked List */
/**https://leetcode.com/problems/flatten-binary-tree-to-linked-list/ */

/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  const bfs = (root, prev) => {
    if (!root) return;

    bfs(root.right, prev);
    bfs(root.left, prev);

    root.right = prev.node;
    root.left = null;

    prev.node = root;
  };

  const prev = { node: null };

  bfs(root, prev);
};

// root = [1,2,5,3,4,null,6]
// Output: [1,null,2,null,3,null,4,null,5,null,6]

// let root = new TreeNode(
//   1,
//   new TreeNode(2, new TreeNode(3), new TreeNode(4)),
//   new TreeNode(5, null, new TreeNode(6))
// );

// // Input: root = []
// // Output: []

// // root = new TreeNode(0);

// // root = [0]
// // Output: [0]

// console.log(flatten(root));
// console.log(root);
