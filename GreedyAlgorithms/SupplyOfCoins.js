// optimaization problem
function maximumCoins(array, amount) {
  //initialize result
  let result = 0;
  array.sort((a, b) => b - a);

  //select all items
  for (let i = 0; i < array.length; i++) {
    //adding item to result is feasible or not
    if (array[i] <= amount) {
      let count = Math.floor(amount / array[i]);
      result = result + count;
      amount = amount - array[i] * count;
    }
    if (amount === 0) break;
  }
  console.log(result);
  //return result
  return result;
}

maximumCoins([5, 10, 2, 1], 57);
