/* Naive Solution
The idea is to use two loops.Traverse through each elemnt of loop.
=> Check if element already has not apperaed already
=> if element has not appeared already than res++
*/

function search(array1, array2) {
  let result = 0;

  //check if element is already seen
  for (let i = 0; i < array1.length; i++) {
    let bool = false;

    for (let j = 0; j < i; j++) {
      if (array1[i] === array2[j]) {
        bool = true;
        break;
      }
    }
    //if presence ignore
    if (bool) {
      continue;
    }
    //otehrwise compare the elements
    for (let k = 0; k < array2.length; k++) {
      if (array1[i] === array2[k]) {
        result++;
      }
    }
  }
  console.log(result);
  return result;
}

/* Efficeint Solution 1
1- Insert one array in set
2- Compare with elements in array and at same time when elemnt is same remove 
from set
*/

function searchEff(array1, array2) {
  let set1 = new Set(array1);
  let count = 0;

  for (i = 0; i < array2.length; i++) {
    if (set1.has(array2[i])) {
      count++;
      set1.delete(array2[i]);
    }
  }

  console.log(count);
  return count;
}

searchEff([10, 20, 10, 30], [20, 10, 10, 40]);
