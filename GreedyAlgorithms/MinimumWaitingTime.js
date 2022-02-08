function minimumWaitingTime(queries) {
  // Write your code here.
  queries.sort((a, b) => a - b);

  let minSum = 0;
  for (let i = 0; i < queries.length - 1; i++) {
    let product = queries[i] * (queries.length - 1 - i);
    console.log(product);
    minSum = minSum + product;
  }

  return minSum;
}

minimumWaitingTime([3, 2, 1, 2, 6]);
