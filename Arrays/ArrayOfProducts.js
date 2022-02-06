function arrayOfProducts(array) {
  // Write your code here.
  let productArray = [];

  for (let i = 0; i < array.length; i++) {
    let product = 1;
    for (let j = 0; j < array.length; j++) {
      if (array[i] === array[j] && i === j) {
        continue;
      }
      product = product * array[j];
    }
    productArray.push(product);
  }
  console.log(productArray);
  return productArray;
}

arrayOfProducts([9, 3, 2, 1, 9, 5, 3, 2]);
