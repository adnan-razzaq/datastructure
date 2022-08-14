/* 
!Sunset Views
Given an array of buildings and a direction that all of the buildings face,return an array
of the indices of the buildings that can see the sunset.
A building can see the sunset if it's strictly taller than all of the buildings that come after
it in the direction that it faces.
The input array named buildings_contains positive,non-zero integers representing
the heights of the buildings.A building at index  has a height denoted by
buildings[i].All of the buildings face the same direction,and this direction is
either east or west,denoted by the input string named direction,which will always
be equal to either"EAST"or"WEST".In relation to the input array,you can
interpret these directions as right for east and left for west.
Important note:the indices in the output array should be sorted in ascending order.
Sample Input#1
 buildings[3,5,4,4,3,1,3,2]
 direction="EAST"
*/

/*
 !DESCRIPTION 
 1 Create a Sunset array to store the indexes of buildings who can see the sunset.
 2 Loop Through the array of buildings based on direction opposite to it.
 2a If direction is EAST loop through end of array.
 2a If direction is WEST loop through start of array.
 3 Initialize the currentLargest=0 and compare it with element at currentIndex.
 4 If currentElement is greater than currentLargest push the index of currentElement to Sunset array
   and update the currentLargest.
 4b If is smaller than do nothing move into the next element of loop.
5 Return the sorted array of indexes

TIME:O(n)
SPACE:O(n)
 */
function sunsetViews(buildings, direction) {
    // Write your code here.
    let sunSet = [];
    let arrayLength = buildings.length - 1;
    let currentLargest = 0;

    if (direction === "EAST") {
        for (let i = arrayLength; i >= 0; i--) {
            if (buildings[i] > currentLargest) {
                sunSet.push(i);
                currentLargest = Math.max(currentLargest, buildings[i]);
            }
        }
    }

    if (direction === "WEST") {
        for (let i = 0; i <= arrayLength; i++) {
            if (buildings[i] > currentLargest) {
                sunSet.push(i);
                currentLargest = Math.max(currentLargest, buildings[i]);
            }
        }
    }

    return sunSet.sort((a, b) => a - b);
}

/* 
!DESCRIPTION
 TODO: Use stack data structure and declare an empty an array.  
*/

sunsetViews([3, 5, 4, 4, 3, 1, 3, 2], "WEST");
