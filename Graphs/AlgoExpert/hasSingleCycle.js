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
