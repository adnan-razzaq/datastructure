/* 
Breadth - First Search
You're given a Node class that has a name and an array of optional children
nodes . When put together , nodes form an acyclic tree - like structure .
Implement the breadthFirstSearch method on the Node class , which takes in
an empty array , traverses the tree using the Breadth - first Search approach ( specifically
navigating the tree from left to right ) , stores all of the nodes ' names in the input array ,
and returns it .
*/

class Node {
    constructor(name) {
        this.name = name;
        this.children = [];
    }

    addChild(name) {
        this.children.push(new Node(name));
        return this;
    }

    /* 
    !APPROACH
    1 Use queue to solve.
    2 While queue is not empty and get item from queue and make it current.
    3 Push current.name into array.
    4 Push children of current into queue
    */
    breadthFirstSearch(array = []) {
        // Write your code here.
        let queue = [this];
        while (queue.length > 0) {
            // get item from queue
            const current = queue.shift();
            array.push(current.name);

            //loop over children of current
            for (const child of current.children) {
                queue.push(child);
            }
        }
        return array;
    }
}

// Do not edit the line below.
exports.Node = Node;
