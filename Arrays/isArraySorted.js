function isArraySorted(array) {
    let sorted = true;
    let currentIndex = 0;
    for (let index = 1; index < array.length; index++) {
        if (array[index] < array[currentIndex]) {
            sorted = false;
            return sorted;
        } else {
            currentIndex = index;
        }
    }
    return sorted;
}

function EfficientIsArraySorted(array) {
    for (let index = 1; index < array.length; index++) {
        if (array[index] < array[index - 1]) return false;
    }
    return true;
}

console.log(EfficientIsArraySorted([1, 2, 3, 4, 5]));
console.log(EfficientIsArraySorted([1, 2, 3, 4, 5, 0]));
