function twoNumberSum(array, targetSum) {
  // Write your code here.
  const set = new Set();

  for (const element of array) {
    //if it exists in hash table
    if (set.has(targetSum - element)) {
      console.log(element);
      console.log(set);
      return;
    } else {
      set.add(element);
    }
  }

  return [];
}

twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10);
