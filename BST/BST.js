// Do not edit the class below except for
// the insert, contains, and remove methods.
// Feel free to add new properties and methods
// to the class.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  /* O(n)/ O(1) */
  insert(value) {
    // Write your code here.
    // Do not edit the return statement of this method.

    let currentNode = this;

    while (true) {
      if (value < currentNode.value) {
        //we go on left
        //check if left is null create a new node and break
        if (currentNode.left === null) {
          currentNode.left = new BST(value);
          break;
        } else {
          currentNode = currentNode.left;
        }
      } else {
        //we go to right
        //check if right node is null
        if (currentNode.right === null) {
          currentNode.right = new BST(value);
          break;
        } else {
          currentNode = currentNode.right;
        }
      }
    }
    return this;
  }

  contains(value) {
    // Write your code here.
    let currentNode = this;
    while (currentNode !== null) {
      if (value === currentNode.value) return true;
      if (value < currentNode.value) {
        //go on left
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }

    return false;
  }

  remove(value, parent = null) {
    // Write your code here.
    // Do not edit the return statement of this method.
    let currentNode = this;
    //find the value to be removed
    while (currentNode !== null) {
      if (value < currentNode.value) {
        parent = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parent = currentNode;
        currentNode = currentNode.right;
      } else {
        //value to delete is found
        if (currentNode.left !== null && currentNode.right !== null) {
          //find smallest value from right subtree
          //in other words Replace with closest higher value
          currentNode.value = currentNode.right.getMinimumValue();
          currentNode.right.remove(currentNode.value, currentNode);
        }
      }
    }

    return this;
  }
}

let bst = new BST(5);

bst.insert(4);
bst.insert(7);
bst.insert(10);
bst.insert(9);

console.log(bst.contains(9));
