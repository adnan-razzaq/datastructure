/* Find a number in sorted matrix and return position of row
and column if exists
*/
function searchInSortedMatrix(matrix, target) {
  // Write your code here.
  //selcting first row and last column
  let row = 0;
  let col = matrix[0].length - 1;

  while (col >= 0 && row < matrix.length) {
    //compare last elemnt of row 0 with elemnt to be searched
    if (matrix[row][col] > target) {
      //ignore whole column
      col--;
    } else if (matrix[row][col] < target) {
      //ignore the row
      row++;
    } else {
      //elemnt found
      return [row, col];
    }
  }
  return [-1, -1];
}

searchInSortedMatrix([
  [1, 4, 7, 12, 15, 1000],
  [2, 5, 19, 31, 32, 1001],
  [3, 8, 24, 33, 35, 1002],
  [40, 41, 42, 44, 45, 1003],
  [99, 100, 103, 106, 128, 1004],
]);
