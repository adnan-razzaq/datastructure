/* 
!Find Successor
Write a function that takes in a Binary Tree ( where nodes have an additional pointer to
their parent node ) as well as a node contained in that tree and returns the given node's
successor .
A node's successor is the next node to be visited ( immediately after the given node )
when traversing its tree using the in - order tree - traversal technique . A node has no
successor if it's the last node to be visited in the in - order traversal .
If a node has no successor , your function should return None / null .
*/
// This is an input class. Do not edit.
class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.parent = null;
    }
}

/* 
!APPROACH2
1 We will not traverse whole tree instead traverse from given node.
2 As node is already visited and we are using on order traversal
therefore we need to check only right side of tree.
3 only possible when we have parent property in class.
*/

function findSuccessorEfficient(tree, node) {
    if (node.right !== null) return getLeftMostChild(node.right);

    return getRightMostParent(node);
}

function getLeftMostChild(node) {
    let currentNode = node;
    while (currentNode.left !== null) {
        currentNode = currentNode.left;
    }
    return currentNode;
}

function getRightMostParent(node) {
    let currentNode = node;
    while (currentNode.parent !== null && currentNode.parent.right === node) {
        currentNode = currentNode.parent;
    }
    return currentNode.parent;
}

/* 
!APPROACH1
1 Use recursion and inOrder traversal to traverse through tree.
2 Push each node in array in inOrder Traversal.
3 Loop through array and find index of node 
4 return index+1

*/
function findSuccessor(tree, node) {
    // Write your code here.
    let array = [];
    getSuccessor(tree, node, array);
    let res = array.findIndex((item) => item === node);
    if (res === -1) return null;
    return array[res + 1];
}

function getSuccessor(tree, node, array) {
    if (tree !== null) {
        getSuccessor(tree.left, node, array);

        array.push(tree);

        getSuccessor(tree.right, node, array);
    }
}

const tree = new BinaryTree(1);
tree.left = new BinaryTree(2);
tree.left.left = new BinaryTree(4);
tree.left.left.left = new BinaryTree(6);
tree.right = new BinaryTree(3);
tree.left.right = new BinaryTree(5);

findSuccessor(tree, 5);
