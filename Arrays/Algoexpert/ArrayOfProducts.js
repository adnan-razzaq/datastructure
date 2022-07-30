/* 
!DESCRIPTION
Brute Force Approach
1 Use two for loops
2 Fix one element and calculate the product except the current element.
3 Push the product in new array

Time Complexity O(n^2)
*/
function arrayOfProducts(array) {
    // Write your code here.
    let productArray = [];

    for (let i = 0; i < array.length; i++) {
        let product = 1;
        for (let j = 0; j < array.length; j++) {
            if (i != j) {
                product = product * array[j];
            }
        }
        productArray.push(product);
    }
    return productArray;
}

/* 
!DESCRIPTION
1 The idea here is to to use two arrays leftArray and rightArray
2 LeftArray contains product of all to left of current index
3 Right contains product to right of currentIndex
4 multiply both the arrays
5 return the multiplied array
*/
function arrayOfProductsE1(array) {
    // Write your code here.
    let products = new Array(array.length).fill(1);
    let leftProducts = new Array(array.length).fill(1);
    let rightProducts = new Array(array.length).fill(1);

    //find products to left of specific index
    let leftRunningProduct = 1;
    for (let i = 0; i < array.length; i++) {
        leftProducts[i] = leftRunningProduct;
        leftRunningProduct = leftRunningProduct * array[i];
    }

    //find products to right of specific index
    let rightRunningProduct = 1;
    for (let i = array.length - 1; i >= 0; i--) {
        rightProducts[i] = rightRunningProduct;
        rightRunningProduct = rightRunningProduct * array[i];
    }

    // Multiple both arrays
    for (let index = 0; index < array.length; index++) {
        products[index] = leftProducts[index] * rightProducts[index];
    }

    return products;
}

/* 
!DESCRIPTION
1 Optimized the previous approach.
2 Used only one array
*/
function arrayOfProductsE2(array) {
    // Write your code here.
    let products = new Array(array.length).fill(1);

    //find products to left of specific index
    let leftRunningProduct = 1;
    for (let i = 0; i < array.length; i++) {
        products[i] = leftRunningProduct;
        leftRunningProduct = leftRunningProduct * array[i];
    }

    //find products to right of specific index
    let rightRunningProduct = 1;
    for (let i = array.length - 1; i >= 0; i--) {
        products[i] = products[i] * rightRunningProduct;
        rightRunningProduct = rightRunningProduct * array[i];
    }

    console.log(products);
    return products;
}

arrayOfProductsE2([5, 1, 4, 2]);
