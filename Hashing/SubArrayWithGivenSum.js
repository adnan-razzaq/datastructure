/* The idea here is to consider all subarrays and if you find sum then return
True.
A subArray is where all elements are in contiguos memory location.

*/
function search(array, sum) {
  for (let i = 0; i < array.length; i++) {
    let curr = 0;
    for (let j = i; j < array.length; j++) {
      curr = curr + array[j];
      if (curr === sum) return true;
    }
  }
  return false;
}

/* The idea here is to use prefixsum and Hashing,
=> if prefixsum-givenSum exists then return true

*/

function searchEff(array, sum) {
  let mySet = new Set();
  let prefix_sum = 0;
  for (let i = 0; i < array.length; i++) {
    prefix_sum = prefix_sum + array[i];
    if (prefix_sum === sum) return true;
    if (mySet.has(prefix_sum - sum)) return true;
    mySet.add(prefix_sum);
  }
  return false;
}

console.log(searchEff([5, 8, 6, 13, 3, -1], 22));
console.log(searchEff([3, 2, 6], 10));
