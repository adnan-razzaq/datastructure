/* 
!Next Greater Element
Write a function that takes in an array of integers and returns a new array containing,at
each index,the next element in the input array that's greater than the element at that
index in the input array.
In other words,your function should return a new array where outputArray[i]is
the next element in the input array that's greater than inputArray[i].If there's no
such next greater element for a particular index,the value at that index in the output
array should be -1.For example,given array[1,2],your function should
return[2,-1].
                        =
Additionally,your function should treat the input array as a circular array.A circular
array wraps around itself as if it were connected end-to-end.So the next index after the
last index in a circular array is the first index.This means that,for our problem,given
array=[0,0,5,0,0,3,0,0],the next greater element after3is5,
since the array is circular.
*/

/* 
!DESCRIPTION
1 Create an outputArray and initialize its values with -1.
2 Create an empty stack.
3 Loop through each element twice as it is a circular array. 
4 To make index in range take remainder of idx%array.length.
5 We will store indexes of items in stack.
6 Check if element at top of stack is smaller than current element then pop item from stack.
7 Add current element at output array
*/
function nextGreaterElement(array) {
    // Write your code here.
    let outputArray = new Array(array.length).fill(-1);

    let stack = [];

    // loop twice as circular
    for (let i = 0; i < 2 * array.length; i++) {
        // The index will not be greater than length of array
        let circularIdx = i % array.length;

        while (
            stack.length > 0 &&
            array[stack[stack.length - 1]] < array[circularIdx]
        ) {
            let top = stack.pop();
            outputArray[top] = array[circularIdx];
        }

        stack.push(circularIdx);
    }
    return outputArray;
}

nextGreaterElement([2, 5, -3, -4, 6, 7, 2]);
