function getPermutations(array) {
  // Write your code here.
  let permutations = [];
  generatePermutation(0, array, permutations);
  return permutations;
}

function generatePermutation(i, array, permutations) {
    //base case
    if (i === array.length - 1) {
        permutations.push(array.slice());
    } else {
        for (let j = i; j < array.length; j++) {
            swap(i, j, array);
            generatePermutation(i + 1, array, permutations);
            swap(i, j, array);
        }
    }
}

function swap(i, j, array) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}
getPermutations([1, 2, 3]);
