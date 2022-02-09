function shiftedBinarySearch(array, target) {
  // Write your code here.
  let low = 0;
  let high = array.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (array[mid] === target) return mid;
    if (array[low] < array[mid]) {
      //left part is sorted
      if (target >= array[low] && target < array[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    } else {
      // right part is sorted
      if (target > array[mid] && target <= array[high]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }
  return -1;
}

console.log(shiftedBinarySearch([10, 20, 30, 40, 50, 8, 9], 30)); //2
console.log(shiftedBinarySearch([100, 200, 300, 10, 20], 40)); //-1
