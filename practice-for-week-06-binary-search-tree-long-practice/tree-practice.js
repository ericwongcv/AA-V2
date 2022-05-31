const { BinarySearchTree, TreeNode } = require('./binary-search-tree.js');
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST (rootNode) {
  // Your code here
 
  let min = rootNode.val;
  let left;
  let right;

  if (rootNode.left) left = findMinBST(rootNode.left);
  if (rootNode.right) right = findMinBST(rootNode.right);

  if (left < min) min = left;
  if (right < min) min = right;

  return min;  
}

function findMaxBST (rootNode) {
  // Your code here

  let max = rootNode.val;
  let left;
  let right;

  if (rootNode.left) left = findMaxBST(rootNode.left);
  if (rootNode.right) right = findMaxBST(rootNode.right);

  if (left > max) max = left;
  if (right > max) max = right;

  return max;  
}

function findMinBT (rootNode) {
  // Your code here

  let min = rootNode.val;
  let left;
  let right;

  if (rootNode.left) left = findMinBT(rootNode.left);
  if (rootNode.right) right = findMinBT(rootNode.right);

  if (left < min) min = left;
  if (right < min) min = right;

  return min;  
}

function findMaxBT (rootNode) {
  // Your code here

  let max = rootNode.val;
  let left;
  let right;

  if (rootNode.left) left = findMaxBT(rootNode.left);
  if (rootNode.right) right = findMaxBT(rootNode.right);

  if (left > max) max = left;
  if (right > max) max = right;

  return max;  
}

function getHeight (rootNode) {
  // Your code here
  if (!rootNode) return -1;

  let currentNode = rootNode;

  let heightleft = getHeight(currentNode.left);
  let heightRight = getHeight(currentNode.right);
  
  return heightleft > heightRight ? heightleft + 1 : heightRight + 1;
}

function countNodes (rootNode) {
  // Your code here
  if (!rootNode) return 0;

  let currentNode = rootNode;

  let countLeft = countNodes(currentNode.left);
  let countRight = countNodes(currentNode.right);
  
  return countLeft + countRight + 1;
}

function balancedTree (rootNode) {
  // Your code here
  return getHeight(rootNode.left) === getHeight(rootNode.right);
}

function getParentNode (rootNode, target) {
  // Your code here
  // if (rootNode.val && rootNode.val === target) return null;
  if (!rootNode) return undefined;

  if (rootNode.left && rootNode.left.val === target) return rootNode;
  if (rootNode.right && rootNode.right.val === target) return rootNode;

  let result = getParentNode(rootNode.left, target) || getParentNode(rootNode.right, target);
  
  if (rootNode.val === target) {
    return null;
  } else {
    return result ? result : undefined;
  }
}

function inOrderPredecessor (rootNode, target) {
  // Your code here
  if (!rootNode) return;

  if (balancedTree(rootNode)) {
    if (rootNode.val === target) {
      if (rootNode.left !== null) {
        let tmp = rootNode.left;
        while (tmp.right !== null) {
          tmp = tmp.right;
        }
        return tmp.val;
      } else if (rootNode.left === null && rootNode.right === null) {
        return null;
      }
    }

    if (rootNode.left && rootNode.val > target) {
      return inOrderPredecessor(rootNode.left, target);
    } else {
      return inOrderPredecessor(rootNode.right, target);
    }
  } else {
    if (rootNode.val === target) return null;
    let currentNode = rootNode;

    while (currentNode.right) {
      if (currentNode.right.val === target) {
        return currentNode.val;
      }
      currentNode = currentNode.right;
    }
  }
}


function deleteNodeBST(rootNode, target) {
  // Do a traversal to find the node. Keep track of the parent
  let parent = getParentNode(rootNode, target);  
  // Undefined if the target cannot be found
  if (rootNode.val === target) {
    let value = inOrderPredecessor(rootNode, target);
    deleteNodeBST(rootNode, value);
    rootNode.val = value;
  }
  
  if (parent === null) return null;
  if (!parent) return;
  // Set target based on parent

  // Case 0: Zero children and no parent:
  //   return null

  // Case 1: Zero children:
  //   set the parent that points to it to null

  // Case 2: Two children:
  //   set the value to its in-order predecessor, then delete the predecessor

  // Case 3: One child:
  //   Make the parent point to the child

  if (parent.left && parent.left.val === target) {
    let node = parent.left;

    if (!node.left && !node.right) {
      parent.left = null;
    } else if (node.left && node.right) {
      node.right.left = node.left;
      parent.left = node.right;
    } else if (node.left || node.right) {
      parent.left = node.left || node.right;
    }
  } else if (parent.right && parent.right.val === target) {
      let node = parent.right;

      if (!node.left && !node.right) {
        parent.right = null;
    } else if (node.left && node.right) {
      node.left.right = node.right;
      parent.right = node.left;
    } else if (node.left || node.right) {
      parent.right = node.left || node.right;
    }
  }
}

module.exports = {
    findMinBST,
    findMaxBST,
    findMinBT,
    findMaxBT,
    getHeight,
    countNodes,
    balancedTree,
    getParentNode,
    inOrderPredecessor,
    deleteNodeBST
}


let bstRoot;
let bstRootUnbalanced;
let btRoot;
let btRootUnbalanced;
let rootNode;

let rootNodeUnbalanced;

// btRoot = new TreeNode(1);
// btRoot.left = new TreeNode(2);
// btRoot.left.left = new TreeNode(4);
// btRoot.left.right = new TreeNode(5);
// btRoot.right = new TreeNode(3);
// btRoot.right.left = new TreeNode(6);
// btRoot.right.right = new TreeNode(7);

  bstRoot = new TreeNode(4);
  bstRoot.left = new TreeNode(2);
  bstRoot.left.left = new TreeNode(1);
  bstRoot.left.right = new TreeNode(3);
  bstRoot.right = new TreeNode(6);
  bstRoot.right.left = new TreeNode(5);
  bstRoot.right.right = new TreeNode(7);

  // deleteNodeBST(bstRoot, 6);
  deleteNodeBST(bstRoot, 4);
  // console.log(bstRoot)

  // btRootUnbalanced = new TreeNode(4);
  // btRootUnbalanced.right = new TreeNode(3);
  // btRootUnbalanced.right.right = new TreeNode(2);
  // btRootUnbalanced.right.right.right = new TreeNode(1);
  // btRootUnbalanced.right.right.right.right = new TreeNode(7);
  // btRootUnbalanced.right.right.right.right.right = new TreeNode(6);
  // btRootUnbalanced.right.right.right.right.right.right = new TreeNode(5);

  // console.log(findMinBST(btRootUnbalanced.right.right))

  // bstRootUnbalanced = new TreeNode(1);
  // bstRootUnbalanced.right = new TreeNode(2);
  // bstRootUnbalanced.right.right = new TreeNode(3);
  // bstRootUnbalanced.right.right.right = new TreeNode(4);
  // bstRootUnbalanced.right.right.right.right = new TreeNode(5);
  // bstRootUnbalanced.right.right.right.right.right = new TreeNode(6);
  // bstRootUnbalanced.right.right.right.right.right.right = new TreeNode(7);

  // console.log(inOrderPredecessor(bstRootUnbalanced, 6))
