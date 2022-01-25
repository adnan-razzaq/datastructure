// A sorted and rotated array. A rotated array means rotate it counter clockwise any
// number of times

function search(array, element) {
  let low = 0;
  let high = array.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (array[mid] === element) return mid;

    //Compare to check which part of array is sorted
    if (array[low] < array[mid]) {
      //first part is sorted
      if (element >= array[low] && element < array[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    } else {
      //second part of array is sorted
      if (element > array[mid] && element <= array[high]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }
  return -1;
}

console.log(search([10, 20, 30, 40, 50, 8, 9], 30)); //2
console.log(search([100, 200, 300, 10, 20], 40)); //-1
