const LinkedList = require('./linked-list.js');
const DoublyLinkedList = require('./doubly-linked-list.js');

/*
Construct a timing test to verify the time complexities of `addToHead` and
`addToTail` for both singly and doubly linked lists.
*/

// Your code here

let linkedList = new LinkedList();
let doublyLinkedList = new DoublyLinkedList();


let linkedHeadStartTime = Date.now();

for (let i = 0; i < 10000; i++) {
    linkedList.addToHead(i);
}
let linkedHeadEndTime = Date.now();
console.log(`${linkedHeadEndTime - linkedHeadStartTime}ms`); // O(1) Time

let linkedTailStartTime = Date.now();
for (let i = 0; i < 10000; i++) {
    linkedList.addToTail(i);
}
let linkedTailEndTime = Date.now();
console.log(`${linkedTailEndTime - linkedTailStartTime}ms`); // O(n) Time

let doubleHeadStartTime = Date.now();
for (let i = 0; i < 10000; i++) {
    doublyLinkedList.addToHead(i);
}
let doubleHeadEndTime = Date.now();
console.log(`${doubleHeadEndTime - doubleHeadStartTime}ms`); // O(1) Time

let doubleTailStartTime = Date.now();
for (let i = 0; i < 10000; i++) {
    doublyLinkedList.addToTail(i);
}
let doubleTailEndTime = Date.now();
console.log(`${doubleTailEndTime - doubleTailStartTime}ms`); // O(1) Time
