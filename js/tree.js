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
