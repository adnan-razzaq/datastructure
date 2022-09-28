/* The idea in selection sort is to find minimum
Swap minimum with with first element in array
*/

function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let currentSmallest = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[currentSmallest]) {
                currentSmallest = j;
            }
        }
        let temp = array[i];
        array[i] = array[currentSmallest];
        array[currentSmallest] = temp;
    }
    return array;
}

function selectionSort(array) {
    // Write your code here.
    let tempArray = [];
    for (let index = 0; index < array.length; index++) {
        let minIndex = 0;

        for (let j = 1; j < array.length; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        tempArray[index] = array[minIndex];
        array[minIndex] = Infinity;
    }
    return tempArray;
}

// Do not edit the line below.
exports.selectionSort = selectionSort;

selectionSort([8, 5, 2, 9, 5, 6, 3]);
