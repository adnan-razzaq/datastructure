/* 
!DESCRIPTION:
1 Use two pointer start and end.
2 Loop to array find first occurrence of element toMove.
3 Compare with last element at index end and swap if array[end] is not equal
to toMove. If end is same as toMove then --end.

Time:(O(n))
*/

function moveElementToEnd(array, toMove) {
    // Write your code here.
    let start = 0;
    let end = array.length - 1;

    while (start <= end) {
        if (array[start] === toMove) {
            //end is already equal to element we want to move
            if (array[end] === toMove) {
                end--;
            } else {
                let temp = array[end];
                array[end] = array[start];
                array[start] = temp;
            }
            // swap elements
        } else {
            start++;
        }
    }
    return array;
}

moveElementToEnd([2, 4, 2, 5, 6, 2, 2], 2);
