// Before starting, copy and paste your guided practice work from
// `binary-search-tree.js` into this file

// Your code here

class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
class BinarySearchTree {

  constructor() {
    // Your code here
    this.root = null;
  }

  insert(val, currentNode = this.root) {
    // Your code here
    let newNode = new TreeNode(val);

    if (!currentNode) {
      this.root = newNode;
    } else if (val < currentNode.val && !currentNode.left) {
      currentNode.left = newNode;
    } else if (val > currentNode.val && !currentNode.right) {
      currentNode.right = newNode;
    } else if (val < currentNode.val && currentNode.left) {
      this.insert(val, currentNode.left);
    } else if (val > currentNode.val && currentNode.right) {
      this.insert(val, currentNode.right);
    }
  }

  search(val) {
    // Your code here
    let stack = [this.root];

    while (stack.length > 0) {
      let currentNode = stack.pop();

      if (currentNode.val === val) return true;
      if (currentNode.right) stack.push(currentNode.right);
      if (currentNode.left) stack.push(currentNode.left);
    }

    return false;
  }


  preOrderTraversal(currentNode = this.root) {
    // Your code here
    let stack = [currentNode];
    
    while (stack.length > 0) {
      let node = stack.pop();
      
      console.log(node.val);
      if (node.right) stack.push(node.right);
      if (node.left) stack.push(node.left);
    }
  }


  inOrderTraversal(currentNode = this.root) {
    // Your code here
    if (currentNode.left) this.inOrderTraversal(currentNode.left);

    console.log(currentNode.val);
    if (currentNode.right) this.inOrderTraversal(currentNode.right);
  }


  postOrderTraversal(currentNode = this.root) {
    // Your code here
    if (currentNode.left) this.postOrderTraversal(currentNode.left);
    if (currentNode.right) this.postOrderTraversal(currentNode.right);

    console.log(currentNode.val);
  }

    // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    // your code here
    let queue = [this.root];

    while (queue.length > 0) {
      let nextNode = queue.pop()

      console.log(nextNode.val);

      if (nextNode.left) queue.unshift(nextNode.left);
      if (nextNode.right) queue.unshift(nextNode.right);
    }
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    // your code here
    let queue = [this.root];

    while (queue.length > 0) {
      let nextNode = queue.pop()

      console.log(nextNode.val);

      if (nextNode.left) queue.push(nextNode.left);
      if (nextNode.right) queue.push(nextNode.right);
    }
  }
}
  
module.exports = { BinarySearchTree, TreeNode };
