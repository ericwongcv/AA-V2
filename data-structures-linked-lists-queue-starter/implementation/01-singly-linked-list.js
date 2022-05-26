// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) { 
        // Add node of val to head of linked list
        let newNode = new SinglyLinkedNode(val);

        if (!this.head) { 
            this.head = newNode;
            this.length++;
            return this;

        } else {        
            newNode.next = this.head;
            this.head = newNode;
            this.length++;
            console.log(this)
            return this;
        };

        // Write your hypothesis on the time complexity of this method here

        // Time complexity will the O(1) since a new node only a new node is added without adjusting existing nodes
    }

    addToTail(val) {
        // There are bugs in this method! Fix them!!!
        // Write your hypothesis on the time complexity of this method here

        // Time complexity is O(n) because it will move the pointer from the head to tail to add node

        // Add node of val to tail of linked list
        let newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.length++;
            return this;
        }

        let curr = this.head;

        while (curr.next) {
            curr = curr.next;
        }

        curr.next = newNode;
        this.length++

        return this;
    }

    removeFromHead() {
        // Remove node at head

        if (!this.head) { return undefined };

        let removedHead = this.head;

        this.head = this.head.next;
        this.length--;

        return removedHead;

        // Write your hypothesis on the time complexity of this method here

        // Time complexity is O(1) since there is a head pointer and it is moved one step only
    }

    removeFromTail() {
        // Remove node at tail

        if (!this.head) { 
            return undefined 
        } else if (!this.head.next) {
            let removedTail = this.head;
            this.head = null;
            this.length--;
            return removedTail;
        }

        let curr = this.head;

        while (curr.next.next) {
            curr = curr.next;
        }

        let removedTail = curr.next;

        curr.next = null;
        this.length--

        return removedTail;

        // Write your hypothesis on the time complexity of this method here

        // Time Complexity is O(n) since pointer travels the list from head to tail
    }

    peekAtHead() {
        // Return value of head node

        return this.head? this.head.value : undefined;

        // Write your hypothesis on the time complexity of this method here
        
        // Time Complexity is O(1) since the pointer is already at head
    }

    print() {
        // Print out the linked list

        let current = this;
        if (!current.head) { return '' };

        while (current.head) {
            // process.stdout.write(`${current.value} -> `);
            console.log(current.peekAtHead());
            current.head = current.head.next;
        }

        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
