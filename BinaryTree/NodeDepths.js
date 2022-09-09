/* 
Node Depths
The distance between a node in a Binary Tree and the tree's root is called the node's
depth .
Write a function that takes in a Binary Tree and returns the sum of its nodes ' depths .
Each BinaryTree node has an integer value , a left child node , and a right
child node . Children nodes can either be BinaryTree nodes themselves or None /
null . */

function nodeDepths(root, depth = 0) {
    // Write your code here.
    //Base case
    if (root === null) return 0;

    return (
        depth +
        nodeDepths(root.left, depth + 1) +
        nodeDepths(root.right, depth + 1)
    );
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
!APPROACH 2
1 Iterative approach use stack to store data.
2 Keep track of total sum of depths.
3 Loop over stack until it is not empty
4 Pop from stack and add popped depth in total sumOfDepths.
5 return totalSumOf Depths
*/

function nodeDepths(root) {
    let sumOfDepths = 0;
    let stack = [{ node: root, depth: 0 }];
    //loop until stack length is greater than zero
    while (stack.length > 0) {
        const { node, depth } = stack.pop();
        //if popped item is null then skip it
        if (node === null) continue;
        //calculate the sumOfDepth of previous depth
        sumOfDepths = sumOfDepths + depth;
        stack.push({ node: node.left, depth: depth + 1 });
        stack.push({ node: node.right, depth: depth + 1 });
    }
    return sumOfDepths;
}
