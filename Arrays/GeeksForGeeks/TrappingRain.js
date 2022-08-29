/* 
!DESCRIPTION
1- Initialize the result to zero.
2- Loop through each element from index 1 to array.length-1.
3- for each element calculate leftMaximum of it.
4- for each element calculate the rightMaximum from it.
5  result+result+Mat.min(leftMax,rightMax)-array[i]
*/

function getWater(array) {
    let waterStored = 0;

    for (let i = 1; i < array.length - 1; i++) {
        //initialize the leftMax
        let leftMax = array[i];
        // Calculate the leftMax until current element
        for (let j = 0; j < i; j++) {
            leftMax = Math.max(leftMax, array[j]);
        }
        //initialize the rightMax
        let rightMax = array[i];
        for (let j = i + 1; j < array.length - 1; j++) {
            rightMax = Math.max(rightMax, array[j]);
        }
        // waterStored is equal to
        waterStored = waterStored + Math.min(leftMax, rightMax) - array[i];
    }
    console.log(waterStored);
    return waterStored;
}

/**
 * @param  {} array
 * An efficient approach approach
 */
/* 
!DESCRIPTION
1The rain water cannot be stored at corners
2 Initialize the result as 0. lmax and rmax as []
2 First we will calculate the lmax and rmax for each element.
3 Initialize leftMax[0]=array[0]
4 Loop through elemnt from index 1 and calculate the leftMax 
by comparing current element and previous leftMax.
5 Initialize the rightMax=array[n-1]
6 Loop through each element and and caluate the rightMx by comparing 
with previous rightMax.
7 Loop through each element result+result+Mat.min(leftMax,rightMax)-array[i]

*/

const trapRainWater = (array) => {
    let total = 0;
    let lmax = [];
    let rmax = [];
    //find lmax for each of elements
    lmax[0] = array[0];

    for (let i = 1; i < array.length; i++) {
        lmax[i] = Math.max(array[i], lmax[i - 1]);
    }

    //find the right max elements for each element

    rmax[array.length - 1] = array[array.length - 1];
    for (let i = array.length - 2; i >= 0; i--) {
        rmax[i] = Math.max(array[i], rmax[i + 1]);
    }
    // total water that can be stored
    for (let i = 1; i < array.length; i++) {
        let value = Math.min(lmax[i], rmax[i]) - array[i];
        total = total + value;
    }
    console.log(total);
    return total;
};

trapRainWater([2, 0, 2]);
trapRainWater([3, 0, 1, 2, 5]);
trapRainWater([1, 2, 3]);
trapRainWater([3, 2, 1]);
trapRainWater([1, 2, 3]);
trapRainWater([3, 5, 2, 3]);
trapRainWater([5, 0, 6, 2, 3]);
