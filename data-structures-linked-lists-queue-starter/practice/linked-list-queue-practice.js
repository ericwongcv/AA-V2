// Basic implementation of Nodes and Linked List for you to use

class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(head = null) {
        this.head = head;
    }

    addToTail(val) {
        let newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            return this.head;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }

        curr.next = newNode;
        return this.head;
    }

    listLength() {
        // Returns the length of the list
        // Implement in O(n) and in O(1) time complexity


        // O(n) Time Complexity
        let length = 0;

        if (!this.head) {
            return length;
        }

        let current = this.head

        while (current) {
            length++;
            current = current.next;
        }

        return length;

        // To have O(1) complexity, include length property in list.
    }

    sumOfNodes() {
        // Returns the sum of the values of all the nodes

        if (!this.head) {
            return 0;
        } else {
            let sum = 0;
            let current = this.head;

            while(current) {
                sum += current.value;
                current = current.next;
            }

            return sum;
        }
        // Write your hypothesis on the time complexity of this method here

        // O(n) because traversing through list
    }

    averageValue() {
        // Returns the average value of all the nodes

        if (!this.head) {
            return 0;
        } else {
            let sum = 0;
            let count = 0;
            let current = this.head;

            while(current) {
                count++;
                sum += current.value;
                current = current.next;
            }

            return sum / count;
        }
        // Write your hypothesis on the time complexity of this method here

        // O(n) because traversing through list
    }

    findNthNode(n) {
        // Returns the node at the nth index from the head

        if (!this.head) {
            return 0;
        } else {
            let count = 0;
            let current = this.head;

            while(count !== n ) {
                count++;
                current = current.next;
            }

            return current;
        }

        // Write your hypothesis on the time complexity of this method here

        // O(n) because traversing through list
    }

    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
            // How do the implementation for singly and doubly vary if at all?

            if (!this.head) {
                return undefined;
            } else {
                let length = this.listLength();
                let mid = Math.floor((length - 1) / 2);
                let count = 0;
                let current = this.head;
    
                while(count !== mid ) {
                    count++;
                    current = current.next;
                }
    
                return current;
            }

        // Write your hypothesis on the time complexity of this method here

        // O(n^2) because length of list is needed first then traverse to mid
    }

    reverse() {
        // Returns a new reversed version of the linked list
        
        if (!this.head) {
            return undefined;
        } else {

            let newNode = new SinglyLinkedNode(this.head.value);
            newNode.next = null;
            let prevNode;
            
            while(this.head.next) {
                this.head = this.head.next;
                prevNode = newNode;
                newNode = new SinglyLinkedNode(this.head.value);
                newNode.next = prevNode;
            }

            newNode.next = prevNode;
            let newList = new SinglyLinkedList(newNode);

            return newList;
        }

        // Write your hypothesis on the time complexity of this method here

        // Time Complexity is O(n) since it will traverse the entire array
    }

    reverseInPlace() {
        // Reverses the linked list in-place

        if (!this.head) {
            return undefined;
        } else {

        let current = this.head;
        let next = this.head.next;
        this.head = next;
        current.next = null;

        while (this.head.next) {
            next = this.head.next;
            this.head.next = current;
            current = this.head;
            this.head = next;       
        }

        this.head.next = current;
    }

    return this;

        // Write your hypothesis on the time complexity of this method here
        
        // Time Compexity is O(n) since it traverse the entire array
    }
}

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
    }

    addToTail(val) {
        let newNode = new DoublyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this.head;
        }

        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;

        return this.head;
    }

    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
            // How do the implementation for singly and doubly vary if at all?

        let mid = 0;
        let headPointer = this.head;
        let tailPointer = this.tail;

        while (headPointer !== tailPointer && headPointer !== tailPointer.prev) {
            headPointer = headPointer.next;
            tailPointer = tailPointer.prev;
        }
        
        return headPointer;

        // Write your hypothesis on the time complexity of this method here

        // Time Complexity is still O(n) but is 1/3 of time it takes compared to
            // singly linked array since tail and head pointers move together per step.
            // singly linked traverse the entire array for length and traverse again
            // half way for mid.
    }

    reverse() {
        // Returns a new reversed version of the linked list
        if (!this.head) {
            return undefined;
        } else {

            let currentNode = new DoublyLinkedNode(this.tail.value);
            currentNode.prev = null;
            
            let newList = new DoublyLinkedList(currentNode);
            newList.head = currentNode;

            let tracker = this.tail.prev;
            let newNode;

            while (tracker) {
                newNode = new DoublyLinkedNode(tracker.value);
                newNode.prev = currentNode;
                currentNode.next = newNode;
                currentNode = newNode;
                tracker = tracker.prev;
            }

            newList.tail = currentNode;

            return newList;
        }
        // Write your hypothesis on the time complexity of this method here

        // Time Complexity O(n), since traversing array is required
    }

    reverseInPlace() {
        // Reverses the linked list in-place

        if (!this.head) {
            return undefined;
        } else {

            this.head = this.tail;

            let current = this.tail;
            let prev;
            let next;
            
            while (current.prev) {
                prev = current.prev;
                next = current.next;
                current.next = prev;
                current.prev = next;
                
                current = current.next;
            }

            prev = current.prev;
            next = current.next;
            current.next = prev;
            current.prev = next;
            
            this.tail = current;

            return this;
        }

        // Write your hypothesis on the time complexity of this method here
        
        // Time Complexity: O(n) since traversing through list
    }
}

module.exports = {
    SinglyLinkedNode,
    SinglyLinkedList,
    DoublyLinkedNode,
    DoublyLinkedList
}

// let list = new SinglyLinkedList;
// list.addToTail(1);
// list.addToTail(2);
// list.addToTail(3);
// list.addToTail(4);
// list.addToTail(5);
// list.addToTail(6);

// const reversed = list.reverse();

// console.log(list);

// let dll = new DoublyLinkedList;
// dll.addToTail(1);
// dll.addToTail(2);
// dll.addToTail(3);
// dll.addToTail(4);
// dll.addToTail(5);
// dll.addToTail(6);

// const reversed = dll.reverseInPlace();
// console.log(reversed);
