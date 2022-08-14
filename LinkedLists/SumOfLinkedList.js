// This is an input class. Do not edit.
class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function sumOfLinkedLists(linkedListOne, linkedListTwo) {
    // Write your code here.
    let linkedListOnevalues = null;
    let linkedListTwovalues = null;

    while (linkedListOne.next !== null) {
        linkedListOnevalues += linkedListOne.value;
        linkedListOne.next;
    }

    while (linkedListTwo.next !== null) {
        linkedListTwovalues += linkedListTwo.value;
        linkedListTwo.next;
    }

    let total = +linkedListOnevalues + +linkedListTwovalues;
    return linkedListOne;
}

// Do not edit the lines below.
exports.LinkedList = LinkedList;
exports.sumOfLinkedLists = sumOfLinkedLists;
