/*
!Validate Subsequence
Given two non - empty arrays of integers , write a function that determines whether the
second array is a subsequence of the first one .
A subsequence of an array is a set of numbers that aren't necessarily adjacent in the
array but that are in the same order as they appear in the array . For instance , the
numbers [ 1 , 3 , 4 ] form a subsequence of the array [ 1 , 2 , 3 , 4 ] , and so do
the numbers [ 2 , 4 ] . Note that a single number in an array and the array itself are
both valid subsequences of the array. 
 */

/*
!DESCRIPTION
1 Use 2 pointers one for subsequence and one for array.
2 Loop through array and compare values at both indexes.
3 if array[arrIdx]===sequence[seqIdx] then seqIdx++
4 return true if seqIdx===sequence.length
 */

// with while loop
function isValidSubsequence1(array, sequence) {
    let arrayIdx = 0;
    let seqIdx = 0;

    while (seqIdx < sequence.length && arrayIdx < array.length) {
        if (array[arrayIdx] === sequence[seqIdx]) {
            seqIdx++;
        }
        arrayIdx++;
    }
    return seqIdx === sequence.length;
}

//with for loop
function isValidSubsequence(array, sequence) {
    let seqIdx = 0;

    for (let i = 0; i < array.length; i++) {
        //check that seqIdx is not out of bound
        if (seqIdx === sequence.length) break;
        if (array[i] === sequence[seqIdx]) {
            seqIdx++;
        }
    }

    return seqIdx === sequence.length;
}

console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]));
