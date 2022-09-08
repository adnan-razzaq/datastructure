// A simple Binary tree
class Node {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }

    //in  order traversal recursive.(left root right)
    inOrder(rootNode) {
        if (rootNode !== null) {
            this.inOrder(rootNode.left);
            console.log(rootNode.key);
            this.inOrder(rootNode.right);
        }
    }
    //recursive implementation (root left right)
    preOrder(rootNode) {
        if (rootNode !== null) {
            console.info(rootNode.key);
            this.preOrder(rootNode.left);
            this.preOrder(rootNode.right);
        }
    }
    //recursive implementation ( left right root)
    postOrder(rootNode) {
        if (rootNode !== null) {
            this.postOrder(rootNode.left);
            this.postOrder(rootNode.right);
            console.log(rootNode.key);
        }
    }

    // height of binary tree
    height(rootNode) {
        if (rootNode === null) {
            return 0;
        }
        return (
            Math.max(this.height(rootNode.left), this.height(rootNode.right)) +
            1
        );
    }

    //print Nodes at distance k
    printNodesAtDistanceK(rootNode, k) {
        //base cases
        if (rootNode === null) return;
        if (k === 0) console.log(rootNode.key);
        else {
            this.printNodesAtDistanceK(rootNode.left, k - 1);
            this.printNodesAtDistanceK(rootNode.right, k - 1);
        }
    }

    //size of binary tree is number of nodes it has
    size(rootNode) {
        if (rootNode === null) return 0;

        return 1 + (this.size(rootNode.left) + this.size(rootNode.right));
    }
}

const root = new Node(10);
root.left = new Node(20);
root.right = new Node(30);
root.right.left = new Node(40);
root.right.right = new Node(50);

/* root.inOrder(root);
console.log("\n");
root.preOrder(root);
console.log("\n");
root.postOrder(root); */

let height = root.height(root);
let sizeTree = root.size(root);
console.log("🚀 ~ file: SimpleBinaryTree.js ~ line 77 ~ sizeTree", sizeTree);
