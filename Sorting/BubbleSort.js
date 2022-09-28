/* 
  Bubble Sort
  1 The approach is to compare 2 adjacent elements.
  2 It has different passes and at each pass largest element is moved to end.
  3 We have to run loop n-1 times
  */

function bubbleSort(array) {
    // Write your code here.
    for (let i = 0; i < array.length - 1; i++) {
        // in each iteration i elements are already sorted at end.
        // so we can optimize the loop
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                swap(j, j + 1, array);
            }
        }
    }
    return array;
}

function swap(i, j, array) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

/* Efficient */

function bubbleSort(array) {
    // Write your code here.
    for (let i = 0; i < array.length - 1; i++) {
        let swapped = false;

        for (let j = 0; j < array.length - 1; j++) {
            if (array[j] > array[j + 1]) {
                swapped = true;
                swap(j, j + 1, array);
            }
        }
        if (swapped === false) break;
    }
    return array;
}

// Do not edit the line below.
exports.bubbleSort = bubbleSort;

// Do not edit the line below.
exports.bubbleSort = bubbleSort;
