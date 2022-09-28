/* 
!River Sizes
You're given a two - dimensional array ( a matrix ) of potentially unequal height and width
containing only 0s and 1 s . Each represents land , and each 1 represents part of a
river . A river consists of any number of 1 s that are either horizontally or vertically
adjacent ( but not diagonally adjacent ) . The number of adjacent 1 s forming a river
determine its size .
Note that a river can twist . In other words , it doesn't have to be a straight vertical line or a
straight horizontal line ; it can be L - shaped , for example .
Write a function that returns an array of the sizes of all rivers represented in the input
matrix . The sizes don't need to be in any particular order .
*/

/* 
!Approach
1 Keep track of visited nodes. Make a matrix with booleans.
2 Get the current node and check whether it is VISITED. If  not visited traverse it using
BreathFirstSearch iteratively.
3 Check if node is already visited.
4 if Not mark it as visited in bool matrix and increment current River Size.
5 Check if current node is 0 then ignore.
6 Get neighbors of current node(up,down,left,right)
*/
function riverSizes(matrix) {
    // Write your code here.
    let sizes = [];

    // create an equal size matrix with false
    let visited = matrix.map((row) => row.map((item) => false));

    //loop over the matrix
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            // if item is already visited
            if (visited[i][j]) continue;

            traverseNode(i, j, matrix, visited, sizes);
        }
    }
    return sizes;
}

//helper function to traverse over each matrix item
function traverseNode(i, j, matrix, visited, sizes) {
    let currentRiverSize = 0;
    let nodeToExplore = [[i, j]];
    //until we have items to explore
    // we use depth first search here stack
    while (nodeToExplore.length) {
        const currentNode = nodeToExplore.pop();
        i = currentNode[0];
        j = currentNode[1];

        if (visited[i][j]) continue;
        visited[i][j] = true;
        if (matrix[i][j] === 0) continue;

        currentRiverSize++;

        const unvisitedNeighbors = getUnvisitedNeighbors(i, j, matrix, visited);

        for (const item of unvisitedNeighbors) {
            nodeToExplore.push(item);
        }
    }
    if (currentRiverSize > 0) sizes.push(currentRiverSize);
}

function getUnvisitedNeighbors(i, j, matrix, visited) {
    //visit top matrix element only when row is greater than zero
    const unvisitedNeighbors = [];
    if (i > 0 && !visited[i - 1][j]) unvisitedNeighbors.push([i - 1, j]);
    //visit bottom matrix element when row is smaller than size of matrix
    if (i < matrix.length - 1 && !visited[i + 1][j])
        unvisitedNeighbors.push([i + 1, j]);
    //visit right matrix element when column is greater  than zero
    if (j > 0 && !visited[i][j - 1]) unvisitedNeighbors.push([i, j - 1]);
    //visit left matrix element when column is smaller than size of matrix
    if (j < matrix[0].length - 1 && !visited[i][j + 1])
        unvisitedNeighbors.push([i, j + 1]);

    return unvisitedNeighbors;
}

riverSizes([
    [1, 0, 0, 1, 0],
    [1, 0, 1, 0, 0],
    [0, 0, 1, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 0],
]);
// Do not edit the line below.
exports.riverSizes = riverSizes;
