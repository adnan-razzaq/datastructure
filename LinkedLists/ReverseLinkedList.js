/* 
!Reverse Linked List
Write a function that takes in the head ofaSingly Linked List,reverses the list in place(i.e.,doesn't
create a brand new list),and returns its new head.
Each LinkedList node has an integer value as well as a next node pointing to the next node
in the list or to None/null if it's the tail of the list.
You can assume that the input Linked List will always have at least one node;in other words,the
head will never be None/null.
Sample Input
 head=0->1-2-3-4-5// the head node with value0
Sample Output
 5->4->3->2->1->0// the new head node with value5
*/
class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

/* 
!DESCRIPTION
1 Use three pointers
2 Loop through the linked list and replace the values
*/
function reverseLinkedList(head) {
    // Write your code here.

    //start from head
    let currentNode = head;

    let previousNode = null;

    while (currentNode !== null) {
        //store the pointer of next before replacing the pointer of
        // currentNode next
        let temp = currentNode.next;

        currentNode.next = previousNode;

        previousNode = currentNode;

        currentNode = temp;
    }
    // return new head
    return previousNode;
}
