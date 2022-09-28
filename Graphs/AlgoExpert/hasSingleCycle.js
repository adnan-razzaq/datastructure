/* 
!Single Cycle Check
You're given an array of integers where each integer represents a jump of its value in
the array . For instance , the integer 2 represents a jump of two indices forward in the
array ; the integer -3 represents a jump of three indices backward in the array .
If a jump spills past the array's bounds , it wraps over to the other side . For instance , a
jump of -1 at index ✪ brings us to the last index in the array . Similarly , a jump of 1
at the last index in the array brings us to index 0 .
Write a function that returns a boolean representing whether the jumps in the array
form a single cycle . A single cycle occurs if , starting at any index in the array and
following the jumps , every element in the array is visited exactly once before landing
back on the starting index .
*/

/* 
!Approach
1 Keep track of numberOfElements visited and currentIndex.
2 Loop over the array until numberOfElements is smaller than array length.
3 if numberOfElementsVisited>0 && current index=0 return false. As all elements
should be visited.
4 increment visited and getNextIndex.
5 if nextIndex is greater than length nextIdx=jump+currentIdx%length
6 For negative values nextIdx is nextIdx+array.length
7 In end currentIdx should be back to start to complete a cycle
Time(o(N)) Space O(1)
*/
function hasSingleCycle(array) {
    // Write your code here.
    let numberElementsVisited = 0;
    let currentIdx = 0;
    while (numberElementsVisited < array.length) {
        //All elements not visited and we are back at start
        if (numberElementsVisited > 0 && currentIdx === 0) return false;
        numberElementsVisited++;
        currentIdx = getNextIdx(currentIdx, array);
    }
    // after visiting all elements we should be back at start
    return currentIdx === 0;
}

function getNextIdx(currentIdx, array) {
    let jump = array[currentIdx];
    //index is greater than length
    let nextIdx = (jump + currentIdx) % array.length;
    // when we have negative values
    return nextIdx >= 0 ? nextIdx : nextIdx + array.length;
}
// Do not edit the line below.
exports.hasSingleCycle = hasSingleCycle;
