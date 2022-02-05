function sortedSquaredArray(array) {
  // Write your code here.
  let start = 0;
  let end = array.length - 1;
  // for storing sorted values
  let sortedArray = [].fill(0, 0, array.length - 1);

  for (let i = array.length - 1; i >= 0; i--) {
    //Check for absolute value
    let smallerValue = Math.abs(array[start]);
    //Check for absolute value
    let largerValue = Math.abs(array[end]);
    if (smallerValue < largerValue) {
      sortedArray[i] = largerValue * largerValue;
      end--;
    } else {
      sortedArray[i] = smallerValue * smallerValue;
      start++;
    }
  }
  return sortedArray;
}

sortedSquaredArray([-50, -13, -2, -1, 0, 0, 1, 1, 2, 3, 19, 20]);
