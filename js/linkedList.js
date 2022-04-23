/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
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

let list1 = new ListNode(2, new ListNode(4, new ListNode(3)));
let list2 = new ListNode(5, new ListNode(6, new ListNode(4)));

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

let l1 = new ListNode(
  9,
  new ListNode(
    9,
    new ListNode(
      9,
      new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))))
    )
  )
);

let l2 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))));

console.log(addTwoNumbers(l1, l2));
