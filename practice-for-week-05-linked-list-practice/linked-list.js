class LinkedListNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    // Your code here
    this.head = null;
    this.length = 0;
  }

  addToHead(val) {
    // Your code here
    if (!this.head) {
      this.head = new LinkedListNode(val);
      this.length++;
    } else {
      let newNode = new LinkedListNode(val);
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
    }

  }

  addToTail(val) {
    // Your code here
    if (!this.head) {
      this.head = new LinkedListNode(val);
      this.length++;
    } else {
      let node = this.head;
      while (node.next) {
        node = node.next;
      }

      node.next = new LinkedListNode(val);
      this.length++;
    }
  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} -> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = LinkedList;
