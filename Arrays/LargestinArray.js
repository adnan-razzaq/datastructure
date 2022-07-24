function largest(array) {
    let large = array[0];
    let largeIndex = 0;

    for (let index = 1; index < array.length; index++) {
        if (array[index] > large) {
            large = array[index];
            largeIndex = index;
        }
    }
    return largeIndex;
}

largest([1, 2, 5, 600, 20, 10, 3, 200]);

module.exports = { largest };
