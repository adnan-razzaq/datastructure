// This is an input class. Do not edit.
class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function checkisBalanced(tree) {
    if (tree === null) return 0;

    let leftHeight = checkisBalanced(tree.left);
    if (leftHeight === -1) return -1;

    let rightHeight = checkisBalanced(tree.right);
    if (rightHeight === -1) return -1;

    if (Math.abs(leftHeight - rightHeight) > 1) return -1;
    else return Math.max(leftHeight, rightHeight) + 1;
}
function heightBalancedBinaryTree(tree) {
    // Write your code here.
    let isBalanced = checkisBalanced(tree);
    console.log(isBalanced);
    return isBalanced ? true : false;
}

let tree = new BinaryTree(1);
tree.left = new BinaryTree(2);
tree.right = new BinaryTree(3);
tree.left.left = new BinaryTree(4);
tree.left.right = new BinaryTree(5);
tree.right.right = new BinaryTree(6);
tree.left.right.left = new BinaryTree(7);
tree.left.right.right = new BinaryTree(8);

console.log(heightBalancedBinaryTree(tree));
// Do not edit the lines below.
exports.BinaryTree = BinaryTree;
exports.heightBalancedBinaryTree = heightBalancedBinaryTree;
