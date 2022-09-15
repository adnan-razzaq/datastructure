// This is an input class. Do not edit.
class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function validateBst(tree) {
    // Write your code here.
    isBST(tree, -Infinity, Infinity);
}

function isBST(root, min, max) {
    if (root == null) return true;

    return (
        root.value >= min &&
        root.value <= max &&
        isBST(root.left, min, root.value) &&
        isBST(root.right, root.value, max)
    );
}

// Do not edit the line below.
exports.BST = BST;
exports.validateBst = validateBst;

let previous = -Infinity;
function validateBst(tree) {
    if (tree === null) return true;

    if (validateBst(tree.left) === false) return false;

    if (tree.value <= previous) return false;

    previous = tree.value;

    return validateBst(tree.right);
}

/* Approach 2 */
