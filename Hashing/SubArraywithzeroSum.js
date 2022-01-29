/* The idea here is to consider all subarrays and if you find 0 then return
True.
A subArray is where all elements are in contiguos memory location.

*/
function search(array) {
  for (let i = 0; i < array.length; i++) {
    let current = 0;
    for (let j = i; j < array.length; j++) {
      current = current + array[j];
      if (current === 0) {
        return "Yes";
      }
    }
  }
  return false;
}

/* An effiecient approach using prefix sum and hashing
=> It hash table already contains prefix sum that means we have a value.
=> We used here hashing + pre sum
*/

function searchEff(array) {
  const mySet = new Set();
  let pre_sum = 0;
  for (let i = 0; i < array.length; i++) {
    pre_sum += array[i];

    if (mySet.has(pre_sum)) return true;
    if (pre_sum === 0) return true;
    mySet.add(pre_sum);
  }
  return false;
}

console.log(searchEff([4, -3, 2, 1]));
console.log(searchEff([1, 4, 13, -10, 5]));
console.log(searchEff([5, 6, 0, 8]));
