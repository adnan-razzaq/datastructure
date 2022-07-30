/* 
!DESCRIPTION:
1 Keep track of minimum Index for duplicated value.
2 Use 2 for loops and compare with current minimum index
3 Return the element at minimumIndex if duplicate value exists.
Time Complexity :O(n^2)
*/
function firstDuplicateValue(array) {
    // Write your code here.
    let minimumIndex = Infinity;

    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] === array[j]) {
                if (j < minimumIndex) {
                    minimumIndex = j;
                }
            }
        }
    }
    return minimumIndex === Infinity ? -1 : array[minimumIndex];
}

/* 
!DESCRIPTION:
1 Use hash set or map to store the values.
2 If hash set already contains the value then return that value
as it is the first repeated value
TIME:O(n)
Space:O(n)

*/
function firstDuplicateValueEff(array) {
    // Write your code here.
    const store = {};

    for (let i = 0; i < array.length; i++) {
        if (array[i] in store) return array[i];

        store[array[i]] = true;
    }

    return -1;
}

firstDuplicateValue([2, 1, 5, 2, 3, 3, 4]);
