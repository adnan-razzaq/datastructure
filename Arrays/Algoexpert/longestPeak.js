/* Find the length of longest peak in an array */

/*
!DESCRIPTION
1 Find all peaks. A peak is an element which is larger than its neighbors
2 When peak is found Expand on left of peak and right of peak until trend changes.
3 Add count of each element or currentLength=leftIndex-rightIndex-1
4 Compare it with global longest length and return maximum from it


*/
function longestPeak(array) {
    // Write your code here.

    //initial longest length
    let longestLength = 0;

    //Elements at first and last cannot be peaks
    for (let index = 1; index < array.length - 1; index++) {
        let previousElement = array[index - 1];
        let nextElement = array[index + 1];

        //Checking if current Element is Peak or not
        let isPeak =
            array[index] > previousElement && array[index] > nextElement;

        //terminates current iteration
        if (!isPeak) continue;

        // expand to the left of array until pattern of number changes
        let leftIndex = index - 2;
        while (lefIndex >= 0 && array[leftIndex] < array[leftIndex + 1]) {
            leftIndex--;
        }

        // expand to the right of array until pattern of number changes
        let rightIndex = index + 2;
        while (
            rightIndex < array.length &&
            array[rightIndex] < array[rightIndex]
        ) {
            rightIndex++;
        }

        //comparing with global maximum
        let currentLength = rightIndex - leftIndex - 1;
        longestLength = Math.max(longestLength, currentLength);
    }
    return longestLength;
}
