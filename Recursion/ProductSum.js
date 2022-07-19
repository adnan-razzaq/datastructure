// Tip: You can use the Array.isArray function to check whether an item
// is a list or an integer.
function productSum(array, multiplier = 1) {
  console.log(array);
  // Write your code here.
  let totalSum = 0;
  for (const item of array) {
    if (typeof item === "number") {
      totalSum += item;
    } else {
      totalSum += productSum(item, multiplier + 1);
    }
  }
  console.log(totalSum * multiplier);
  return totalSum * multiplier;
}

productSum([5, 2, [7, -1], 3, [6, [-13, 8], 4]]);
