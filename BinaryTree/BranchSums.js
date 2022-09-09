/* 
!Branch Sums
Write a function that takes in a Binary Tree and returns a list of its branch sums
ordered from leftmost branch sum to rightmost branch sum .
A branch sum is the sum of all values in a Binary Tree branch . A Binary Tree branch is a
path of nodes in a tree that starts at the root node and ends at any leaf node .
Each BinaryTree node has an integer value , a left child node , and a right
child node . Children nodes can either be BinaryTree nodes themselves or None /
null .
*/

/* 
!APPROACH
1 Use recursion to solve the question.
2 Use preOrder traversal recursively.
3 Calculate sum at each node.
4 When there is a leaf node then push the sum into array.
*/

class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function calculateBranchSum(node, sum, result) {
    //base condition
    if (node === null) return;

    let currentSum = sum + node.value;
    //base condition
    if (node.left == null && node.right === null) {
        result.push(currentSum);
    }

    //recursive calls
    calculateBranchSum(node.left, currentSum, result);
    calculateBranchSum(node.right, currentSum, result);
}

function branchSums(root) {
    // Write your code here.
    let sum = 0;
    let result = [];
    calculateBranchSum(root, sum, result);
    return result;
}
