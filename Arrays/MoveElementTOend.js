function moveElementToEnd(array, toMove) {
  // Write your code here.
  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
    if (array[start] === toMove) {
      if (array[end] === toMove) {
        end--;
      } else {
        let temp = array[start];
        array[start] = array[end];
        array[end] = temp;
      }
    } else {
      start++;
    }
  }
  return array;
}

moveElementToEnd([2, 1, 2, 2, 2, 3, 4, 2], 2);
