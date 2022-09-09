/* 
!Invert Binary Tree
Write a function that takes in a Binary Tree and inverts it . In other words , the function
should swap every left node in the tree for its corresponding right node .

*/

/*
!Approach
1 Use recursion to invert.
2 Swap the values.
3 Call recursively for left and then for right
*/
function invertBinaryTree(tree) {
    // Write your code here.
    if (tree === null) return;

    // computation
    //swapping the values
    let temp = tree.left;
    tree.left = tree.right;
    tree.right = temp;

    //recursive call
    invertBinaryTree(tree.left);
    invertBinaryTree(tree.right);
}

// This is the class of the input binary tree.
class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

/* 
Approach 2
! Description
1 Use queue to and traverse the tree in breadth first search manner.
2 If queue is non empty then we have stuff to traverse
3 Pop from queue and swap left and right of node.
4 Push left ad right to queue
5 if popped item is null then ignore the iteration with continue
*/
function invertBinaryTree(tree) {
    // Write your code here.
    let queue = [tree];

    while (queue.length > 0) {
        const current = queue.shift();
        // if popped item is null then ignore the iteration
        if (current === null) continue;

        //swap the values
        let temp = current.left;
        current.left = current.right;
        current.right = temp;

        //push the values to queue
        queue.push(current.left);
        queue.push(current.right);
    }
}
// Do not edit the line below.
exports.invertBinaryTree = invertBinaryTree;
