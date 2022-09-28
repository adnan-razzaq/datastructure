function cycleInGraph(edges) {
    // Write your code here.
    let visited = new Array(edges.length).fill(false);
    let currentlyInStack = new Array(edges.length).fill(false);

    for (let node = 0; node < edges.length; node++) {
        //already visited
        if (visited[node]) continue;
        let containsCycle = isNodeInCycle(
            node,
            edges,
            visited,
            currentlyInStack
        );

        if (containsCycle) return true;
    }

    return false;
}

function isNodeInCycle(node, edges, visited, currentlyInStack) {
    visited[node] = true;
    currentlyInStack[node] = true;

    const neighbors = edges[node];

    for (const neighbor of neighbors) {
        if (!visited[neighbor]) {
            let containsCycle = isNodeInCycle(
                neighbor,
                edges,
                visited,
                currentlyInStack
            );
            if (containsCycle) return true;
        } else if (currentlyInStack[neighbor]) return true;
    }

    currentlyInStack[node] = false;
    return false;
}
// Do not edit the line below.
exports.cycleInGraph = cycleInGraph;
