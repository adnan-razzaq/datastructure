/* 
Remove Kth Node From End
Write a function that takes in the head ofaSingly Linked List and an integer k and removes the kth
node from the end of the list.
The removal should be done in place,meaning that the original data structure should be mutated
(no new structure should be created).
Furthermore,the input head of the linked list should remain the head of the linked list after the
removal is done,even if the head is the node that's supposed to be removed.In other words,if the
head is the node that's supposed to be removed,your function should simply mutate its value
and next pointer.
Note that your function doesn't need to return anything.
You can assume that the input Linked List will always have at least two nodes and,more specifically,
at least k nodes.
Each LinkedList node has an integer value as well as a next node pointing to the next node
in the list or to None/null if it's the tail of the list.
Sample Input
 head=0->1->2->3->4-5-6-7-8-9// the head node with value€
 k=4

 Sample Output
  // No output required.
  // The 4th node from the end of the list(the node with value6)is removed.
  0-1-2-3-4->5->7->8->9
*/

// This is an input class. Do not edit.
class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

/* 
!DESCRIPTION:
1 We use two pointers first and second.
2 Initially we will move first pointer k times.
3 If moving k times made the second pointer null then first pointer is 
already at required position.
4 Otherwise move both pointer 1 step until second.next!==null
5 We will have in end firstPointer at one value before the value to be removed.

*/

function removeKthNodeFromEnd(head, k) {
    //Initialize two pointers
    let firstPointer = head;
    let secondPointer = head;

    let counter = 1;

    // Move second pointer k times forward
    while (counter <= k) {
        secondPointer = secondPointer.next;
        counter++;
    }

    //this means head needs to be removed
    if (secondPointer === null) {
        head.value = head.next.value;
        head.next = head.next.next;
        return;
    }

    //Move each pointer until the secondpointer.next is null

    while (secondPointer.next !== null) {
        firstPointer = firstPointer.next;
        secondPointer = secondPointer.next;
    }

    firstPointer.next = firstPointer.next.next;
}
