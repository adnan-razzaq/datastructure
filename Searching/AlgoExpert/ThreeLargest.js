/* 
Find Three Largest Numbers
Write a function that takes in an array of at least three integers and,without sorting the
input array,returns a sorted array of the three largest integers in the input array.
The function should return duplicate integers if necessary;for example,it should return
[10,10,12]for an Input array of[10,5,9,10,12].
Sample Input
 array=[141,1,17,-7,-17,-27,18,541,8,7,7]
Sample Output
 [18,141,541]
 
*/

/* 
!DESCRIPTION
1 Create an array threeLargest Array to keep track of 3 largest Numbers.
2  check if third element in threeLargest is null or smaller the current element in that case shift and update
*/
function findThreeLargestNumbers(array) {
    // Write your code here.
    let threeLargest = new Array(3).fill(null);

    for (let i = 0; i < array.length; i++) {
        //check if third element in threeLargest is null or
        //smaller the current element in that case shift and update
        if (threeLargest[2] === null || threeLargest[2] < array[i]) {
            shiftUpdate(threeLargest, array[i], 2);
        }
        //check if second element in threeLargest is null or
        //smaller the current element in that case shift and update
        else if (threeLargest[1] === null || threeLargest[1] < array[i]) {
            shiftUpdate(threeLargest, array[i], 1);
        }
        //check if first element in threeLargest is null or
        //smaller the current element in that case shift and update
        else if (threeLargest[0] === null || threeLargest[0] < array[i]) {
            shiftUpdate(threeLargest, array[i], 0);
        }
    }
    console.log(threeLargest);
    return threeLargest;
}

function shiftUpdate(array, number, index) {
    for (let i = 0; i <= index; i++) {
        if (index === i) {
            array[i] = number;
        } else {
            array[i] = array[i + 1];
        }
    }
}

findThreeLargestNumbers([141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7]);
