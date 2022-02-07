/* Bubble sort compares two adjacent elemnts 
Time: O(n^2)
*/
function sort(array) {
  let n = array.length - 1;
  for (i = 0; i < n; i++) {
    let swapped = false;
    for (j = 0; j < n; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        swapped = true;
      }
    }
    if (swapped === false) break;
  }
  return array;
}

sort([8, 5, 2, 9, 5, 6, 3]);
