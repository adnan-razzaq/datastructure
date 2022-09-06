/* 
It is a powerful technique that allows to perform fast calculation on the
sum of elements in a given range
*/
/* 
1 Calculate the prefix sum of given array.
2 To calculate the sum of range use the formula
A(i,j)=A(j)-A(i-1)
3 If i is equal to zero
then A(i,j)=A(j)
*/
function prefixSum(array, startRange, endRange) {
    let prefixSumArray = [array[0]];
    for (let i = 1; i < array.length; i++) {
        //calculate prefixSum
        prefixSumArray[i] = array[i] + prefixSumArray[i - 1];
    }
    //calculate sum of ranges
    if (startRange !== 0) {
        return prefixSumArray[endRange] - prefixSumArray[startRange - 1];
    } else {
        return prefixSumArray[endRange];
    }
}

console.log(prefixSum([2, 8, 3, 9, 6, 5, 4], 1, 3));
console.log(prefixSum([2, 8, 3, 9, 6, 5, 4], 0, 2));
console.log(prefixSum([2, 8, 3, 9, 6, 5, 4], 2, 6));
