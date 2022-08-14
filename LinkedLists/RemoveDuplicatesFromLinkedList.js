/* 
!Remove Duplicates From Linked List
You're given the head ofaSingly Linked List whose nodes are in sorted order with respect to their
values.Write a function that returns a modified version of the Linked List that doesn't contain any
nodes with duplicate values.The Linked List should be modified in place(i.e.,you shouldn't createa
brand new list),and the modified Linked List should still have its nodes sorted with respect to their
values.
Each LinkedList node has an integer value as well as a next node pointing to the next node
in the list or to None/null if it's the tail of the list.
Sample Input
 linkedList=1->1->3->4->4->4->5->6->6// the head node with value
*/
// This is an input class. Do not edit.
class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

/*
 !DESCRIPTION 
 1 Loop through linked list and compare first node value with second node value.
 2 if they are equal then remove the occurance.
 3 else move to next element

 */
function removeDuplicatesFromLinkedList(linkedList) {
    // Write your code here.
    let curr = linkedList;

    while (curr.next !== null) {
        if (curr.value === curr.next.value) {
            curr.next = curr.next.next;
        } else {
            curr = curr.next;
        }
    }

    return linkedList;
}

// Do not edit the lines below.
exports.LinkedList = LinkedList;
exports.removeDuplicatesFromLinkedList = removeDuplicatesFromLinkedList;
