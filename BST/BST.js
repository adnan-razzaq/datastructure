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

    remove(value) {
        // Write your code here.
        // Do not edit the return statement of this method.
        let currentNode = this;
        //find the value to be removed
        remove2(currentNode, value);

        return this;
    }
}

//search recursive
// Time:O(h)  Space:O(h)
function search(root, value) {
    //base cases
    if (root === null) return false;
    if (value === root.value) return true;
    //recursive calls
    else if (value < root.value) {
        return search(root.left, value);
    } else {
        return search(root.right, value);
    }
}

//insert recursive
function insertRecursive(root, x) {
    //base cases
    if (root === null) return new BST(x);

    if (root.value > x) root.left = insertRecursive(root.left, x);
    else {
        root.right = insertRecursive(root.right, x);
    }
    return root;
}

function remove2(root, x) {
    if (root === null) return null;

    if (root.value > x) {
        root.left = remove2(root.left, x);
    } else if (root.value < x) {
        root.right = remove2(root.right, x);
    } else {
        //we have found the value to delete
        if (root.left === null) return root.right;
        if (root.right === null) return root.left;
        else {
            let succes = getSuccessor(root.right);
            root.value = succes.value;
            root.right = remove2(root.right, succes.value);
        }

        return root;
    }
}

function getSuccessor(root) {
    let currentNode = root;
    while (currentNode.left !== null) {
        currentNode = currentNode.left;
    }
    return currentNode;
}

let bst = new BST(5);
let bst2 = new BST(5);

bst.insert(4);
bst.insert(7);
bst.insert(10);
bst.insert(9);

insertRecursive(bst2, 4);
insertRecursive(bst2, 7);
insertRecursive(bst2, 10);
insertRecursive(bst2, 9);
console.log(bst);
console.log("Differ");
console.log(bst2);
