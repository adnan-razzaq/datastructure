const { largest } = require("./LargestinArray.js");

function SecondLargest(array) {
    let largestIndex = largest(array);
    //Initialize result as -1

    let result = -1;
    for (let index = 0; index < array.length; index++) {
        // Comparing values except the largest one
        if (array[index] !== array[largestIndex]) {
            if (result === -1) result = index;
            else if (array[index] > array[result]) {
                result = index;
            }
        }
    }
    console.log("====================================");
    console.log(result);
    console.log("====================================");
    return result;
}

SecondLargest([10, 10, 10]);

///////////////////////////////////////////
function EfficientSecondLargest(array) {
    let result = -1,
        largest = 0;

    for (let index = 1; index < array.length; index++) {
        if (array[index] > array[largest]) {
            result = largest;
            largest = index;
        } else if (array[index] !== array[largest]) {
            if (array[index] > array[result] || result === -1) {
                result = index;
            }
        }
    }
    return result;
}

console.log(EfficientSecondLargest([2, 7, 20, 10, 28, 8]));
