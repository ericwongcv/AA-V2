class DoublyLinkedListNode {
  constructor(val) {
    this.value = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    // Your code here

    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addToHead(val) {
    // Your code here
    if (!this.head && !this.tail) {
      this.head = new DoublyLinkedListNode(val);
      this.tail = this.head;
      this.length++;
    } else {

      let newNode = new DoublyLinkedListNode(val);

      this.head.prev = newNode;
      newNode.next = this.head;

      this.length++;

      this.head = newNode;
    };
  };

  addToTail(val) {
    // Your code here
    if (!this.head && !this.tail) {
      this.head = new DoublyLinkedListNode(val);
      this.tail = this.head;
      this.length++;
    } else {

      let newNode = new DoublyLinkedListNode(val);

      this.tail.next = newNode;
      newNode.prev = this.tail;

      this.length++;

      this.tail = newNode;
    };
  };

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} <-> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = DoublyLinkedList;
