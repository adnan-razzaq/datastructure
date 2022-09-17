function minimumPassesOfMatrix(matrix) {
    // Write your code here.
    const passes = convertNegatives(matrix);
    console.log(passes);

    //check if all values are now positive in matrix
    return !containsNegative(matrix) ? passes - 1 : -1;
}

function containsNegative(matrix) {
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] < 0) return true;
        }
    }
    return false;
}
function convertNegatives(matrix) {
    let nextPassQueue = getAllPositiveValues(matrix);
    let passes = 0;

    //interchanging the currentQueue and nextQueue
    while (nextPassQueue.length > 0) {
        const currentPassQueue = nextPassQueue;
        nextPassQueue = [];
        while (currentPassQueue.length > 0) {
            const [currentRow, currentCol] = currentPassQueue.shift();

            //get adjacent values of current
            const adjacentPositions = getAdjacentPosition(
                currentRow,
                currentCol,
                matrix
            );

            for (const [row, col] of adjacentPositions) {
                if (matrix[row][col] < 0) {
                    matrix[row][col] *= -1;
                    nextPassQueue.push([row, col]);
                }
            }
        }
        passes++;
    }
    return passes;
}

function getAllPositiveValues(matrix) {
    const positivePositions = [];
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] > 0) {
                positivePositions.push([row, col]);
            }
        }
    }
    return positivePositions;
}

function getAdjacentPosition(row, col, matrix) {
    const adjacentPositions = [];
    //top matrix element
    if (row > 0) adjacentPositions.push([row - 1, col]);
    //bottom matrix element
    if (row < matrix.length - 1) adjacentPositions.push([row + 1, col]);
    //left matrix element
    if (col > 0) adjacentPositions.push([row, col - 1]);
    //right matrix element
    if (col < matrix[row].length - 1) adjacentPositions.push([row, col + 1]);

    return adjacentPositions;
}
minimumPassesOfMatrix([
    [0, -1, -3, 2, 0],
    [1, -2, -5, -1, -3],
    [3, 0, 0, -4, -1],
]);
// Do not edit the line below.
exports.minimumPassesOfMatrix = minimumPassesOfMatrix;
