// Iterative approach for binary search

function binarySearch(array, element) {
  let low = 0;
  let high = array.length - 1;

  while (low <= high) {
    let mid = Math.floor(low + high / 2);

    if (array[mid] === element) return mid;
    else if (array[mid] > element) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
}

binarySearch([10, 20, 30, 40, 50, 60], 20);
