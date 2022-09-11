/* 
Find Ceil in Bst. Ceil means a value greater (closest greater)
or equal to value.
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
2 If root.value is same as given value then return root.
3 If root.value is smaller than given value then update root to root.right.
4 if root.value is greater than given value , update the result as root
and change root to roots left.

*/
function CeilBst(root, value) {
    let result = null;

    while (root !== null) {
        if (root.value === value) return root;
        //root is smaller then given value
        // which makes it a potential answer
        else if (root.value > value) {
            result = root;
            root = root.left;
        } else {
            root = root.right;
        }
    }
    return result;
}
