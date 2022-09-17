function removeIslands(matrix) {
    // Write your code here.

    // visited array
    const onesConnectedToBorders = matrix.map((row) =>
        row.map((value) => false)
    );

    //loop over matrix
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            // check only the corner rows and cols
            const rowIsBorder = row === 0 || row === matrix.length - 1;
            const columnIsBorder = col === 0 || col === matrix[row].length - 1;
            const IsBorder = rowIsBorder || columnIsBorder;
            if (!IsBorder) continue;

            //only check non zero values
            if (matrix[row][col] !== 1) continue;

            findOnesConnectedToBorders(
                matrix,
                row,
                col,
                onesConnectedToBorders
            );
        }
    }

    //loop over inner matrix and replace 1 with zero
    for (let row = 1; row < matrix.length - 1; row++) {
        for (let col = 1; col < matrix[row].length - 1; col++) {
            if (onesConnectedToBorders[row][col]) continue;

            matrix[row][col] = 0;
        }
    }
    return matrix;
}

//function to traverse over the matrix depth first search
function findOnesConnectedToBorders(matrix, row, col, onesConnectedToBorders) {
    const stack = [[row, col]];
    while (stack.length > 0) {
        const currentPosition = stack.pop();
        const [currentRow, currentCol] = currentPosition;

        const alreadyVisited = onesConnectedToBorders[currentRow][currentCol];
        if (alreadyVisited) continue;

        onesConnectedToBorders[currentRow][currentCol] = true;
        if (matrix[currentRow][currentCol] === 0) continue;

        const neighbors = getUnvisitedNeighbors(
            currentRow,
            currentCol,
            matrix,
            onesConnectedToBorders
        );

        for (const item of neighbors) {
            stack.push(item);
        }
    }
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

removeIslands([
    [1, 0, 0, 0, 0, 0],
    [0, 1, 0, 1, 1, 1],
    [0, 0, 1, 0, 1, 0],
    [1, 1, 0, 0, 1, 0],
    [1, 0, 1, 1, 0, 0],
    [1, 0, 0, 0, 0, 1],
]);
// Do not edit the line below.
exports.removeIslands = removeIslands;
