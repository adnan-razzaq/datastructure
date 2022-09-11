/* 
Find Floor in Bst. Floor means a closest largest (but smaller than given value)
or equal to value
*/

class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

/* 
!DESCRIPTION
1 The idea here is to use a simple traversal as of BST search.
2 We keep track of smaller value as compared to given.
3 If root is smaller than given value we store it as a result
 as it can be potential floor.
*/
function floorBst(root, value) {
    let result = null;

    while (root !== null) {
        if (root.value === value) return root;
        else if (root.value > value) {
            root = root.left;
        } else {
            //root is smaller then given value
            // which makes it a potential answer
            res = root;
            root = root.right;
        }
    }
    return result;
}
