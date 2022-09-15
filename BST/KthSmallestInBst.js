class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

let count = 0;
function printKth(root, k) {
    if (root !== null) {
        printKth(root.left, k);
        count++;
        if (count === k) {
            console.log(root.value);
            return root.value;
        }
        printKth(root.right, k);
    }
}
