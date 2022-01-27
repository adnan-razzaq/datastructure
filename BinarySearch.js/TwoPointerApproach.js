/* Using two pointer one from start and one from end */

function search(array, sum) {
  let left = 0;
  let right = array.length - 1;
  while (left <= right) {
    let curr = array[left] + array[right];
    if (curr === sum) return "Yes";

    if (curr > sum) {
      right--;
    } else {
      left++;
    }
  }
  return -1;
}

console.log(search([2, 5, 8, 12, 30], 17));
