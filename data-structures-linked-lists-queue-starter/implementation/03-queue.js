const { SinglyLinkedNode, SinglyLinkedList } = require("./01-singly-linked-list");

class Queue {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    enqueue(val) {
        // Add node to end of queue (linked list)
        let newNode = new SinglyLinkedNode(val);

        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
        return this.length;

        // Write your hypothesis on the time complexity of this method here

        // Time Complexity: O(1) because there is a pointer on tail. Only one step needed.
    }

    dequeue() {
        // Remove node from front of queue (linked list)

        let removedHead = this.head;

        if (!this.head) {
            return null; 
        } else if (this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            this.head = removedHead.next;
        }

        this.length--;
        return removedHead.value;
        // Write your hypothesis on the time complexity of this method here

        // Time Complexity: O(1) because there is pointer on head.
    }

}

module.exports = {
    Queue,
    SinglyLinkedNode
}
