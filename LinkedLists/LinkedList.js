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
    // Write your code here.
    //if linkedlist is empty
    if (this.head === null) {
      this.head = node;
      this.tail = node;
      return;
    }
    this.insertBefore(this.head, node);
  }

  setTail(node) {
    // Write your code here.
    if (this.tail === null) {
      this.setHead(node);
      return;
    }
    this.insertAfter(this.tail, node);
  }

  insertBefore(node, nodeToInsert) {
    // Write your code here.
    //if linklist only contains same value to be inserted
    if (nodeToInsert.value === this.head && nodeToInsert.value === this.tail)
      return;

    //if there is already a value that is to be inserted
    this.remove(nodeToInsert);

    //seting pointers of new value
    nodeToInsert.prev = node.prev;
    nodeToInsert.next = node;

    //setting pointer of surrounding values

    //if node was head
    if (node.prev === null) {
      this.head = nodeToInsert;
    } else {
      node.prev.next = nodeToInsert;
    }
    node.prev = nodeToInsert;
  }

  insertAfter(node, nodeToInsert) {
    // Write your code here.
    //if one value in linkedlist with same value to be inserted
    if (nodeToInsert.value === this.head && nodeToInsert.value === this.tail)
      return;

    this.remove(nodeToInsert);
    //Setting pointer of new value
    nodeToInsert.next = node.next;
    nodeToInsert.prev = node;

    //setting poniter of surrounding
    //if node was tail
    if (node.next === null) {
      this.tail = nodeToInsert;
    } else {
      node.next.prev = nodeToInsert;
    }

    node.next = nodeToInsert;
  }

  insertAtPosition(position, nodeToInsert) {
    // Write your code here.
    //this is head
    if (position === 1) {
      this.setHead(nodeToInsert);
      return;
    }

    let currentPosition = 1;
    let node = this.head;
    while (node !== null) {
      currentPosition++;
      node = node.next;
      if (currentPosition === position) {
        //insert here
        this.insertBefore(node, nodeToInsert);
        return;
      }
    }
    this.setTail(nodeToInsert);
  }

  removeNodesWithValue(value) {
    // Write your code here.
    //Remove Mutiple nodes with same values
    let node = this.head;
    while (node !== null) {
      let nodeToRemove = node;
      node = node.next;
      if (nodeToRemove.value === value) {
        this.remove(nodeToRemove);
      }
    }
  }

  remove(node) {
    // Write your code here.
    //node to be deleted is head.update the head
    if (node === this.head) this.head = this.head.next;
    //node to be deleted is tail. update the tail
    if (node === this.tail) this.tail = this.tail.prev;
    //removing other connections
    this.removeNodeBindings(node);
  }

  containsNodeWithValue(value) {
    // Write your code here.
    let node = this.head;
    //until node is not null
    while (node !== null) {
      if (node.value === value) return true;
      node = node.next;
    }
    return false;
  }

  removeNodeBindings(node) {
    //Before removing pointers of current node
    // First update the pointer of surrounding nodes
    if (node.prev !== null) {
      node.prev.next = node.next;
    }
    if (node.next !== null) {
      node.next.prev = node.prev;
    }
    //removing current node
    node.next = null;
    node.prev = null;
  }
}
