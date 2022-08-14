/* 
! Linked List Construction
Write aDoublyLinked List class that has a head and a tail,both of which point to eithera
linked list Node or None/null.The class should support:
  •Setting the head and tail of the linked list.
  •Inserting nodes before and after other nodes as well as at given positions(the position of the
   head node is1).
  •Removing given nodes and removing nodes with given values.
  •Searching for nodes with given values.
Note that the setHead,setTail,insertBefore,insertAfter,insertAtPosition,and
remove methods all take in actual Nodes as input parameters-not integers(except for
insertAtPosition,which also takes in an integer representing the position);this means that you
don't need to create any new Nodes in these methods.The input nodes can be either stand-alone
nodes or nodes that are already in the linked list.If they're nodes that are already in the linked list,
the methods will effectively be moving the nodes within the linked list.You won't be told if the input
nodes are already in the linked list,so your code will have to defensively handle this scenario.
If you're doing this problem in an untyped language like Python or JavaScript,you may want to look
at the various function signatures in a typed language like Java or TypeScript to getabetter idea of
what each input parameter is.
Each Node has an integer value as well as a prev node and a next node,both of which can
point to either another node or None/null.
*/

// This is an input class. Do not edit.
class Node {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

// Feel free to add new properties and methods to the class.
class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    setHead(node) {
        if (this.head === null) {
            this.head = node;
            this.tail = node;
            return;
        }
        this.insertBefore(this.head, node);
    }

    setTail(node) {
        if (this.tail === null) {
            this.setHead(node);
            return;
        }
        this.insertAfter(this.tail, node);
    }

    insertBefore(node, nodeToInsert) {
        //1-check if nodeToInsert is only node in linkedlist
        if (nodeToInsert === this.head && nodeToInsert === this.tail) {
            return;
        }
        //2-remove the node
        this.remove(nodeToInsert);

        //3-Setting the pointers for nodeToInsert
        nodeToInsert.next = node;
        nodeToInsert.prev = node.prev;

        //4-update pointers for surrounding nodes
        if (node.prev === null) {
            //node was head and update the head to nodeToInsert
            this.head = nodeToInsert;
        } else {
            node.prev.next = nodeToInsert;
        }

        node.prev = nodeToInsert;
    }

    insertAfter(node, nodeToInsert) {
        // Check if nodeToInsert is only in linkedlist
        if (nodeToInsert === this.head && nodeToInsert === this.tails) {
            return;
        }
        //remove the node
        this.remove(nodeToInsert);

        // Set the pointers of nodeToInsert
        nodeToInsert.next = node.next;
        nodeToInsert.prev = node;

        // Update the pointers of surrounding nodes
        if (node.next === null) {
            //node was tail update the nodetoInsert to tail
            this.tail = nodeToInsert;
        } else {
            node.next.prev = nodeToInsert;
        }
        node.next = nodeToInsert;
    }

    insertAtPosition(position, nodeToInsert) {
        if (position === 1) {
            this.setHead(nodeToInsert);
            return;
        }
        let current = 1;
        let node = this.head;

        while (node != null) {
            if (current === position) {
                this.insertBefore(node, nodeToInsert);
                return;
            }
        }
        this.setTail(nodeToInsert);
    }

    removeNodesWithValue(value) {
        /* 
        !Description
        1 Set node to head
        2 Loop over the linkedList until it is null.
        3 store the node to be removed 
        4 if nodetoremove.value===value then remove the node
        */

        //Remove multiple nodes with same values

        let node = this.head;
        while (node != null) {
            let nodeToRemove = node;
            node = node.next;

            if (nodeToRemove.value === value) {
                this.remove(nodeToRemove);
            }
        }
    }

    remove(node) {
        /* 
        !description
        1 Check if node to be removed is head if yes then update the head.
        2 Check if node to be removed is tail if yes then update the tail.
        3 Update the surrounding nodes before deleting the actual node.
        4 Delete the actual node
        */

        //if node to be removed is the head
        if (node === this.head) {
            this.head = this.head.next;
        }

        //if node to be removed is the tail
        if (node === this.tail) {
            this.tail = this.tail.prev;
        }

        //removing surrounding connections
        this.removeNodeBindings(node);
    }

    containsNodeWithValue(value) {
        /* 
       !description
       1 Set head to current node
       2 Loop through until node is not null
       3 if node.value === value return true.
       4 else return false
       */
        let node = this.head;
        while (node !== null) {
            if (node.value === value) return true;

            node = node.next;
        }
        return false;
    }

    removeNodeBindings(node) {
        //Before removing pointers of current node
        // First update the pointer of surrounding nodes
        if (node.next !== null) {
            node.next.prev = node.prev;
        }

        if (node.prev !== null) {
            node.prev.next = node.next;
        }

        //removing current node
        node.prev = null;
        node.next = null;
    }
}

// Do not edit the lines below.
exports.Node = Node;
exports.DoublyLinkedList = DoublyLinkedList;
