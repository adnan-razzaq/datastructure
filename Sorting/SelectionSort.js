/* The idea in selection sort is to find minimum
Swap minimum with with first element in array
*/

function selectionSort(array) {
  // Write your code here.
  for (let i = 0; i < array.length; i++) {
    let currentSmallest = i;
    for (j = i + 1; j < array.length; j++) {
      //find minimum
      if (array[j] < array[currentSmallest]) {
        currentSmallest = j;
      }
    }
    let temp = array[i];
    array[i] = array[currentSmallest];
    array[currentSmallest] = temp;
  }
  console.log(array);
}

selectionSort([8, 5, 2, 9, 5, 6, 3]);
