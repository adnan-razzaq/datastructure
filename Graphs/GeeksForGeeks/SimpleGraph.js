class Graph {
    constructor(noOfVertices) {
        this.noOfVertices = noOfVertices;
        this.adjList = new Map();
    }

    addVertex(vertex) {
        this.adjList.set(vertex, []);
    }

    addEdge(v, w) {
        this.adjList.get(v).push(w);
        this.adjList.get(w).push(v);
    }

    /* 
    !When nodes are connected and undirected. Source maybe given
    1 Keep track of visited vertices.
    2 Use queue and push source into queue and also update in visited array.
    3 Pop items from queue and print the current item. Do until queue is
      empty.
    4 Then push the adjacent item of vertex into queue.
    */
    breadthFirstSearch(adjList, noOfVertices, source) {
        let visited = new Array(noOfVertices).fill(false);
        let queue = [];
        visited[source] = true;
        queue.push(source);

        while (queue.length > 0) {
            let item = queue.shift();
            console.log(item);

            for (const vertex of adjList.get(item)) {
                if (visited[vertex] === false) {
                    visited[vertex] = true;
                    queue.push(vertex);
                }
            }
        }
    }

    /* 
    When nodes are not connected and source is not given
    */
    BFS(adjList, source, visited) {
        let queue = [];
        visited[source] = true;
        queue.push(source);

        while (queue.length > 0) {
            let item = queue.shift();
            console.log(item);

            for (const vertex of adjList.get(item)) {
                if (visited[vertex] === false) {
                    visited[vertex] = true;
                    queue.push(vertex);
                }
            }
        }
    }

    breadthFirstSearchDisconnected(adjList, noOfVertices) {
        let visited = new Array(noOfVertices).fill(false);

        for (let i = 0; i < noOfVertices; i++) {
            if (visited[i] === false) {
                this.BFS(adjList, i, visited);
            }
        }
    }

    /* 
    Print number of islands in a graph (or number of connected components in a graph).
    */
    Islands(adjList, noOfVertices) {
        let visited = new Array(noOfVertices).fill(false);
        let count = 0;

        for (let i = 0; i < noOfVertices; i++) {
            if (visited[i] === false) {
                count++;
                this.BFS(adjList, i, visited);
            }
        }
        console.log(count);
        return count;
    }

    /* Depth first search recursive */
    DFS(adjList, noOfVertices, source) {
        let visited = new Array(noOfVertices).fill(false);
        this.depthFirstSearchRecursive(adjList, source, visited);
    }
    depthFirstSearchRecursive(adjList, source, visited) {
        visited[source] = true;
        console.log(source);

        for (const child of adjList.get(source)) {
            if (visited[child] === false) {
                this.depthFirstSearchRecursive(adjList, child, visited);
            }
        }
    }
}

let g = new Graph(6);
let vertices = [0, 1, 2, 3, 4];

for (let i = 0; i < vertices.length; i++) {
    g.addVertex(vertices[i]);
}

g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(2, 3);
g.addEdge(1, 3);
g.addEdge(1, 4);
g.addEdge(3, 4);

g.DFS(g.adjList, vertices.length, 0);
