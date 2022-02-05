/* Naive approach would be use three loops */

function threeNumberSum(array, targetSum) {
  // Write your code here.
  //sort array
  array.sort((a, b) => a - b);
  let result = [];
  for (let [index, num] of array.entries()) {
    //fix each number
    let start = index + 1;
    let end = array.length - 1;

    while (start < end) {
      let currentSum = array[start] + array[end];

      if (currentSum + num === targetSum) {
        result.push([num, array[start], array[end]]);
        start++;
        end--;
      } else if (currentSum + num > targetSum) end--;
      else start++;
    }
  }

  return result;
}

threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0);
