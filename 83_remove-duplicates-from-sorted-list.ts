/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }

  addNode(val: number) {
    this.next = new ListNode(val);

    return this;
  }
}

// function deleteDuplicates(head: ListNode | null): ListNode | null {}

const newNode = new ListNode(1);
newNode.addNode(1);
newNode.addNode(2);
newNode.addNode(3);
newNode.addNode(3);
newNode;
console.log(newNode);

// deleteDuplicates([1,1,2,3,3])

class LinkedList {
  constructor(head: {} | null, next: {} | null, tail: {} | null) {
    head = null;
    next = null;
    tail = null;
  }

  Node(val: number) {
    val = val;
    this.next = null;
  }

  AddNode() {}
}

const ll = new LinkedList();
