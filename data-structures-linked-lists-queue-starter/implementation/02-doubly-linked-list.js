// Node class is implemented for you, no need to look for bugs here!
class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addToHead(val) {
        // There are bugs in this method! Fix them!!!
        // Write your hypothesis on the time complexity of this method here

        // Time Complexity: O()

        // Add node of val to head of linked list
        let newNode = new DoublyLinkedNode(val);

        if (this.length > 0) {
            this.head.prev = newNode;
            newNode.next = this.head; 
            this.head = newNode;         
        } else {
            this.head = newNode;
            this.tail = newNode;  
        }

        this.length++;
    }

    addToTail(val) {
        // Add node of val to tail of linked list

        let newNode = new DoublyLinkedNode(val);

        if (!this.tail) { 
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
        return this;

        // Write your hypothesis on the time complexity of this method here

        // Time Complexity: O(1) since there is a tail marker.
    }

    removeFromHead() {
        // Remove node at head
        let removedHead = this.head;

        if (!removedHead) { 
            return undefined;
        } else if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = removedHead.next;
            this.head.prev = null;
        }

        this.length--;
        return removedHead.value;

        // Write your hypothesis on the time complexity of this method here

        // Time Complexity is O(1) since there is a head marker.
    }

    removeFromTail() {
        // Remove node at tail

        let removedTail = this.tail;

        if (!removedTail) { 
            return undefined;
        } else if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = removedTail.prev;
            this.tail.next = null;
        }

        this.length--;
        return removedTail.value;

        // Write your hypothesis on the time complexity of this method here
        
        // Time Complexity: O(n). There is a marker for tail.
    }

    peekAtHead() {
        // Return value of head node
        if (!this.head) { return undefined };

        return this.head.value;
        // Write your hypothesis on the time complexity of this method here

        // Time Complexity: O(1). already have pointer on head.
    }

    peekAtTail() {
        // Return value of tail node
        if (!this.tail) { return undefined };
        return this.tail.value;
        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    DoublyLinkedList,
    DoublyLinkedNode
}
