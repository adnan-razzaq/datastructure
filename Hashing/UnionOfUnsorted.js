function searchEff(array1, array2) {
  let final = [...new Set(array1), ...new Set(array2)];
  let final2 = new Set(final);
  console.log(final2.size);
}

/*  Naive based approach 
1 create an auxilary array
2 traverse through array1. For every elemnt check if it is in auxilary,
if nt present appedn it into the array

*/
function search(array1, array2) {
  let temp = [];
  for (let i = 0; i < array1.length; i++) {
    if (!temp.includes(array1[i])) {
      temp.push(array1[i]);
    }
  }
  for (let j = 0; j < array2.length; j++) {
    if (!temp.includes(array2[j])) {
      temp.push(array2[j]);
    }
  }
  console.log(temp.length);
  return temp.length;
}

search([15, 20, 5, 15], [15, 15, 15, 20, 10]);
search([10, 12, 15], [8, 12]);
search([3, 3, 3], [3, 3]);
search([10, 30, 10], [5, 10, 5]);
