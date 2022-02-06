/* Find the length of longest peak in an array */

/* 1 Find peak. A peak is an element which is larger than its neighbours
   2 Expand on left of peak and right of peak until trend changes.
   3 Add count of each element or currentLength=leftindex-rightIndex-1
   4 Compare it with global count
   5 return maximum from it

*/

function longestPeak(array) {
  // Write your code here.
  let maxLength = 0;
  //first element cannot be peak
  for (let i = 1; i < array.length; i++) {
    //find peak
    let previousElement = array[i - 1];
    let nextElement = array[i + 1];
    //if current elemnt is peak or not
    let isPeak = array[i] > previousElement && array[i] > nextElement;
    if (!isPeak) continue;

    let leftindex = i - 2;
    //Expand on left until pattern changes
    while (leftindex >= 0 && array[leftindex] < array[leftindex + 1]) {
      leftindex--;
    }
    //Expand on right until pattern changes
    let rightIndex = i + 2;
    while (
      rightIndex < array.length &&
      array[rightIndex] < array[rightIndex - 1]
    ) {
      rightIndex++;
    }
    //comparing with global maximum
    let currentLength = rightIndex - leftindex - 1;
    maxLength = Math.max(maxLength, currentLength);
  }
  return maxLength;
}

longestPeak([1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]);
