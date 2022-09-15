/* 
!Find Closest Value In BST
Write a function that takes in a Binary Search Tree ( BST ) and a target integer value and returns the closest value
to that target value contained in the BST .
You can assume that there will only be one closest value .
Each BST node has an integer value , a left child node , and a right child node . A node is said to be a
valid BST node if and only if it satisfies the BST property : its value is strictly greater than the values of every
node to its left ; its value is less than or equal to the values of every node to its right ; and its children nodes
are either valid BST nodes themselves or None / null .
*/

/* 
Time:O(n) Space:O(n)
*/
function findClosestValueInBst(tree, target) {
    // Write your code here.
    return findClosestValueBtsHelper(tree, target, tree.value);
}

function findClosestValueBtsHelper(tree, target, closest) {
    if (tree === null) return closest;

    if (Math.abs(closest - target) > Math.abs(tree.value - target)) {
        closest = tree.value;
    }

    if (target > tree.value) {
        return findClosestValueBtsHelper(tree.right, target, closest);
    } else if (target < tree.value) {
        return findClosestValueBtsHelper(tree.left, target, closest);
    } else {
        return closest;
    }
}

// This is the class of the input tree. Do not edit.
class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

/* 
!APPROACH2 
Iterative

Time:O(n) Space:O(1)
*/

function findClosestValueInBst(tree, target) {
    // Write your code here.
    return ClosestValueInBts(tree, target, tree.value);
}

function ClosestValueInBts(tree, target, closest) {
    let currentNode = tree;

    while (currentNode !== null) {
        if (Math.abs(closest - target) > Math.abs(currentNode.value - target)) {
            closest = currentNode.value;
        }

        if (target > currentNode.value) {
            currentNode = currentNode.right;
        } else if (target < currentNode.value) {
            currentNode = currentNode.left;
        }
    }
    return closest;
}

// This is the class of the input tree. Do not edit.
class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Do not edit the line below.
exports.findClosestValueInBst = findClosestValueInBst;
