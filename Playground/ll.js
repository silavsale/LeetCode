const { log } = require("console")

class Node {
  constructor(val) {
    this.val = val
    this.next = null
    this.head = null
  }
}

class LinkedList {
  addNode(value) {
    this.newNode = new Node(value)
    if (!this.head) {
      this.head = this.newNode
    } else {
      let currentNode = this.head
      while (currentNode.next) {
        currentNode = currentNode.next
      }
      currentNode.next = this.newNode
    }
    return this
  }

  size() {
    let count = 0
    let node = this.head
    while (node) {
      count++
      node = node.next
    }
    return count
  }
}

const ll = new LinkedList()
ll.addNode(1)
ll.addNode(5)
ll.addNode(6)
ll.size()
// export default Node
