// Do not edit the class below except
// for the breadthFirstSearch method.
// Feel free to add new properties
// and methods to the class.
class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  breadthFirstSearch(array) {
    // Write your code here.
    let queue = [this];
    while (queue.length !== 0) {
      let current = queue.shift();
      array.push(current.name);
      for (const child of current.children) {
        queue.push(child);
      }
    }
    return array;
  }
}

let graph = new Node("A");

graph.addChild("B");
graph.addChild("C");
graph.addChild("D");

graph.breadthFirstSearch([]);
