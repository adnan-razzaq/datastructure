// Naive based approach
// Traverse through each element

function search(array) {
  //one elemnt in array
  if (array.length === 1) return array[0];
  //for first corner
  if (array[0] > array[1]) return array[0];
  //for last corner
  if (array[array.length - 1] > array[array.length - 2]) return array[i];
  for (let i = 1; i < array.length - 2; i++) {
    if (array[i] >= array[i + 1] && array[i] >= array[i - 1]) {
      return array[i];
    }
  }

  return -1;
}

/* Efficient Approach
 *The idea is to use Binary search.
 * Check mid if its a peak or not.
 * Check elemnt before mid if its greater or equal then peak is on left half
 * check element after mid its greater or equal then peak is on right half
 */

function searchEff(array) {
  let low = 0;
  let high = array.length - 1;
  while (low <= high) {
    let mid = Math.floor(low + high / 2);
    //if mid is the peak
    if (
      (array[mid] >= array[mid - 1] || mid === 0) &&
      (array[mid] >= array[mid + 1] || mi === array.length - 1)
    ) {
      return array[mid];
    }
    if (mid > 0 && array[mid - 1] >= array[mid]) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
}
console.log(searchEff([5, 10, 20, 15, 7]));
console.log(searchEff([80, 70, 60]));
console.log(searchEff([10, 20, 15, 5, 23, 90, 67]));
console.log(search([5, 10, 20, 15, 7]));
console.log(search([80, 70, 60]));
console.log(search([10, 20, 15, 5, 23, 90, 67]));
