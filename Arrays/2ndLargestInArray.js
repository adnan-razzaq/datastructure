const { largest } = require("./LargestinArray.js");
/* 
!DESCRIPTION
1 Find largest element in array.
2 intialize secondLargestIndex as -1.
3 loop through array and check all elements except the largest.
4 Initially if 2ndLargest is -1 then update its value to currentIndex
in first iteration.
5 After that compare every current with secondlargest.
*/
function SecondLargest(array) {
    let largestIndex = largest(array);
    //Initialize result as -1

    let result = -1;
    for (let index = 0; index < array.length; index++) {
        // Comparing values except the largest one
        if (array[index] !== array[largestIndex]) {
            if (result === -1) result = index;
            else if (array[index] > array[result]) {
                result = index;
            }
        }
    }
    console.log("====================================");
    console.log(result);
    console.log("====================================");
    return result;
}

SecondLargest([10, 10, 10]);

/* 
!DESCRIPTION
1 Consider data as stream of data.
2 Keep track of both largest and secondLargest values.
3 Loop through array and for each elemnt check
3a if array[current]>array[largest]: largest=current,2ndLargest=largest
3b if(array[current]===array[largest]) ignore
3c if array[current]<array[largest]
    if(secondlargst)===-1 secondlargest=current
    if(array[current>array[secondLargest]]) secondLargest=current
*/
function EfficientSecondLargest(array) {
    let result = -1,
        largest = 0;

    for (let index = 1; index < array.length; index++) {
        if (array[index] > array[largest]) {
            result = largest;
            largest = index;
        } else if (array[index] < array[largest]) {
            if (array[index] > array[result] || result === -1) {
                result = index;
            }
        }
    }
    return result;
}

console.log(EfficientSecondLargest([2, 7, 20, 10, 28, 8]));
