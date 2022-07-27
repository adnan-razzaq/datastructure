/**
 * The logic here is two maintain indexes in both arrays and checks whether
 * all elements in sequence array exists in main array. The order of elements
 * is important as it is a subsequence
 * @param  {Number} array - Array of numbers
 * @param  {Number} sequence - Array of subsequence
 * Time:O(n)
 *
 */
function isValidSubsequence(array, sequence) {
    // Write your code here.
    let arrIdx = 0;
    let seqIdx = 0;

    while (arrIdx < array.length && seqIdx < sequence.length) {
        //Check if value in both array matches
        if (array[arrIdx] === sequence[seqIdx]) {
            seqIdx++;
        }
        arrIdx++;
    }
    // Check if we have traverse all elements in sequence array
    return seqIdx === sequence.length;
}

/**
 * The logic here is two maintain index for sequence array and checks whether
 * all elements in sequence array exists in main array. The order of elements
 * is important as it is a subsequence
 * @param  {Number} array - Array of numbers
 * @param  {Number} sequence - Array of subsequence
 * Time: O(n)
 *
 */
function isValidSubsequence(array, sequence) {
    // Write your code here.
    let seqIdx = 0;

    for (let index = 0; index < array.length; index++) {
        if (array[index] === sequence[seqIdx]) {
            seqIdx++;
        }
        // breaks loop when all element in sequence array are traversed
        if (seqIdx === sequence.length) break;
    }
    // Check if we have traverse all elements in sequence array
    return seqIdx === sequence.length;
}
