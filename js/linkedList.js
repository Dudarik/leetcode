/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number | string} val
 * @param {ListNode} next
 * @return {ListNode}
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {Array} array
 * @return {ListNode}
 */
function arrToList(array) {
  let listNode = new ListNode(0);
  const headLN = listNode;

  for (let i = 0; i < array.length; i++) {
    listNode.next = new ListNode(array[i]);
    listNode = listNode.next;
  }

  return headLN.next;
}

/**
 * @param {ListNode} listNode
 * @return {Array}
 */

function listToArr(listNode) {
  const resultArray = [];
  // debugger;
  while (listNode) {
    resultArray.push(listNode.val);
    listNode = listNode.next;
  }
  return resultArray;
}

function LinkedList() {
  this.head = null;
  this.tail = null;

  this.append = (value) => {
    const node = new ListNode(value);

    if (this.head === null || this.tail === null) {
      this.head = node;
      this.tail = node;
      return this;
    }

    this.tail.next = node;
    this.tail = node;

    return this;
  };
}
// const list1 = new LinkedList().append(1).append(2).append(4);
// const list2 = new LinkedList().append(1).append(3).append(4);

// let list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
// let list2 = new ListNode(1, new ListNode(2, new ListNode(4)));
// list1 = new ListNode(5);
// list2 = new ListNode();

var mergeTwoLists = function (list1, list2) {
  if (!list1) return list2;
  if (!list2) return list1;

  let tmp = null,
    head = null;

  if (list1.val <= list2.val) {
    head = list1;
    list1 = list1.next;
  } else {
    head = list2;
    list2 = list2.next;
  }
  // debugger;

  tmp = head;

  while (list1 && list2) {
    if (list1.val <= list2.val) {
      tmp.next = list1;
      list1 = list1.next;
    } else {
      tmp.next = list2;
      list2 = list2.next;
    }
    tmp = tmp.next;
  }

  if (list1) {
    tmp.next = list1;
    list1 = list1.next;
    tmp = tmp.next;
  }

  if (list2) {
    tmp.next = list2;
    list2 = list2.next;
    tmp = tmp.next;
  }

  return head;
};

// console.log(mergeTwoLists(list1, list2));
// list1 = list1.next;
// console.log(list1);

/**2. Add Two Numbers */
/**https://leetcode.com/problems/add-two-numbers/ */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// let list1 = new ListNode(2, new ListNode(4, new ListNode(3)));
// let list2 = new ListNode(5, new ListNode(6, new ListNode(4)));

var addTwoNumbers = function (l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;

  let tmp = new ListNode();
  const result = tmp;
  let rest = 0;

  while (l1 || l2) {
    // debugger;
    let newVal = 0;
    if (!l1) newVal = l2.val;
    else if (!l2) newVal = l1.val;
    else newVal = l1.val + l2.val;

    if (rest > 0) {
      newVal += rest;
      rest = 0;
    }

    if (newVal === 0) {
      rest = 0;
    } else if (newVal === 10) {
      rest = 1;
      newVal = 0;
    } else if (newVal / 10 > 1) {
      rest = 1;
      newVal = newVal % 10;
    }
    tmp.next = new ListNode(newVal);
    tmp = tmp.next;
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }
  if (rest > 0) tmp.next = new ListNode(rest);

  return result.next;
};

// let l1 = new ListNode(
//   9,
//   new ListNode(
//     9,
//     new ListNode(
//       9,
//       new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))))
//     )
//   )
// );

// let l2 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))));

// console.log(addTwoNumbers(l1, l2));

/**19. Remove Nth Node From End of List */
/**https://leetcode.com/problems/remove-nth-node-from-end-of-list/ */

var removeNthFromEnd = function (head, n) {
  // if (!head) return null;
  // if (!head.next && n === 1) return null;
  let count = 0;
  let current = head;
  const dict = {};

  while (current) {
    dict[++count] = current;
    current = current.next;
  }
  console.log(dict);

  if (count == n) return head.next;
  dict[count - n].next = dict[count - n + 1].next;
  return head;
};

// const listToArr = (node) => {
//   const arr = [];
//   while (node) {
//       arr.push(node.val);
//       node = node.next;
//   }
//   return arr;
// }

// const arrToList = (arr) => {
//   let node = null;
//   while (arr.length) {
//       const n = new ListNode(arr.pop(), node);
//       node = n;
//   }
//   return node;
// }

// var removeNthFromEnd = function(head, n) {
//   const arr = listToArr(head);
//   arr.splice(arr.length - n, 1);
//   return arrToList(arr);
// };

// let head = new ListNode(
//   1,
//   new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
// );
// head = new ListNode(1);

// console.log(removeNthFromEnd(head, 2));

var deleteDuplicates = function (head) {
  const listToArr = (head) => {
    const result = [];
    while (head) {
      result.push(head.val);
      head = head.next;
    }
    return result;
  };

  const arrToList = (arr) => {
    let node = null;
    while (arr.length) {
      const n = new ListNode(arr.pop(), node);
      node = n;
    }
    return node;
  };

  return arrToList(Array.from(new Set(listToArr(head))));
};

// let head = new ListNode(
//   1,
//   new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(3))))
// );

// console.log(deleteDuplicates(head));

/**23. Merge k Sorted Lists */
/**https://leetcode.com/problems/merge-k-sorted-lists/ */

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  if (lists.length === 0 || lists === null) null;
  if (lists.length === 1) return lists[0];

  const listToArr = (lists) => {
    const result = [];
    while (lists) {
      result.push(lists.val);
      lists = lists.next;
    }
    return result;
  };

  const arrToList = (arr) => {
    let node = null;
    while (arr.length) {
      const n = new ListNode(arr.pop(), node);
      node = n;
    }
    return node;
  };
  let tArr = [];

  for (let i = 0; i < lists.length; i++) {
    tArr.push(listToArr(lists[i]));
  }

  return arrToList(tArr.flat(1).sort((a, b) => a - b));
};
// let lists = [
//   new ListNode(1, new ListNode(4, new ListNode(5))),
//   new ListNode(1, new ListNode(3, new ListNode(4))),
//   new ListNode(2, new ListNode(6)),
// ];

// lists = [new ListNode()];
// // const lists = [
// //   [1, 4, 5],
// //   [1, 3, 4],
// //   [2, 6],
// // ];

// console.log(mergeKLists(lists));

/**160. Intersection of Two Linked Lists */
/**https://leetcode.com/problems/intersection-of-two-linked-lists/ */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

// function ListNode(val) {
//   this.val = val;
//   this.next = null;
// }

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  if (headA == null || headB == null) return null;
  let tHeadA = headA,
    tHeadB = headB;

  while (tHeadA !== tHeadB) {
    tHeadA = tHeadA === null ? headA : tHeadA.next;
    tHeadB = tHeadB === null ? headB : tHeadB.next;
  }
  return tHeadA;
};

// const intersect = new ListNode(8, new ListNode(4, new ListNode(5)));

// const listA = new ListNode(4, new ListNode(1, intersect));
// const listB = new ListNode(5, new ListNode(6, new ListNode(1, intersect)));

// console.log(getIntersectionNode(listA, listB));

/**92. Reverse Linked List II */
/**https://leetcode.com/problems/reverse-linked-list-ii/ */

/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  let resHead = new ListNode(0),
    prev = resHead;
  resHead.next = head;

  for (let i = 0; i < left - 1; i++) {
    prev = prev.next;
  }

  let curr = prev.next;

  for (let i = 0; i < right - left; i++) {
    let tHead = prev.next;
    prev.next = curr.next;
    curr.next = curr.next.next;
    prev.next.next = tHead;
  }
  return resHead.next;
};

// let head = new ListNode(
//     1,
//     new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
//   ),
//   left = 2,
//   right = 4;
// Output: [1,4,3,2,5]

// (head = new ListNode(5)), (left = 1), (right = 1);
// Output: [5]

// console.log(reverseBetween(head, left, right));

/**86. Partition List */
/**https://leetcode.com/problems/partition-list/ */

/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  const before_head = new ListNode(0);
  const after_head = new ListNode(0);

  let before = before_head;
  let after = after_head;

  while (head) {
    if (head.val < x) {
      before.next = head;
      before = before.next;
    } else {
      after.next = head;
      after = after.next;
    }
    head = head.next;
  }
  after.next = null;

  before.next = after_head.next;
  return before_head.next;
};

// let head = arrToList([1, 4, 3, 2, 5, 2]),
//   x = 3;
// // Output: [1,2,2,4,3,5]

// (head = arrToList([2, 1])), (x = 2);
// // Output: [1,2]

// console.log(listToArr(partition(head, x)));
